import type { PageItem, SourceDoc } from '../../components/organize/types';

export interface ExportResult {
  blob: Blob;
  fileName: string;
}

function buildFileName(docs: SourceDoc[]): string {
  const real = docs.filter((doc) => !doc.blank);
  if (real.length === 1) {
    const base = real[0]!.name.replace(/\.pdf$/i, '');
    return `${base} (rearranged).pdf`;
  }
  return 'rearranged-pages.pdf';
}

export async function exportRearrangedPdf(
  docs: SourceDoc[],
  pages: PageItem[],
): Promise<ExportResult> {
  const { PDFDocument, degrees } = await import('pdf-lib');

  const out = await PDFDocument.create();
  out.setProducer('rearrangepdf.com');
  out.setCreator('rearrangepdf.com');

  const docMap = new Map(docs.map((doc) => [doc.id, doc]));
  const loaded = new Map<string, Awaited<ReturnType<typeof PDFDocument.load>>>();

  for (const item of pages) {
    const source = docMap.get(item.sourceId);
    if (!source) continue;

    if (source.blank) {
      const size = source.blankSize ?? { width: 595.28, height: 841.89 };
      const page = out.addPage([size.width, size.height]);
      page.setRotation(degrees(item.rotation));
      continue;
    }

    let src = loaded.get(source.id);
    if (!src) {
      src = await PDFDocument.load(source.bytes, { ignoreEncryption: true });
      loaded.set(source.id, src);
    }
    const [copied] = await out.copyPages(src, [item.sourcePageIndex]);
    const baseAngle = copied.getRotation().angle ?? 0;
    copied.setRotation(degrees((((baseAngle + item.rotation) % 360) + 360) % 360));
    out.addPage(copied);
  }

  const bytes = await out.save();
  const copy = new Uint8Array(bytes);
  return {
    blob: new Blob([copy.buffer], { type: 'application/pdf' }),
    fileName: buildFileName(docs),
  };
}

export interface PageGroupExport {
  blob: Blob;
  fileName: string;
  /** Pages written into this document. */
  pageCount: number;
}

/**
 * Builds one PDF per group of pages, in the order the groups are given.
 *
 * A split needs N documents out of one source; an extract needs one document
 * out of a chosen subset. Both go through here. Pages are copied out with
 * `copyPages` — never re-rendered, never re-compressed — so an output page is
 * identical in quality to its original.
 *
 * Two properties matter for large inputs:
 *
 * - The source document is loaded at most once for the whole batch, and only
 *   ever one output document is alive at a time. Built files are handed to
 *   `onGroup` instead of being collected, so a one-file-per-page split of a
 *   thousand-page scan does not accumulate a thousand blobs in memory.
 * - A group that cannot be built reports `null` to `onGroup` and the batch
 *   carries on, so one bad range never costs the user the files that worked.
 */
export async function exportPageRanges(
  docs: SourceDoc[],
  groups: PageItem[][],
  fileNameFor: (index: number, group: PageItem[]) => string,
  onGroup?: (built: PageGroupExport | null, index: number, total: number) => void,
): Promise<void> {
  const { PDFDocument, degrees } = await import('pdf-lib');

  const docMap = new Map(docs.map((doc) => [doc.id, doc]));
  const loaded = new Map<string, Awaited<ReturnType<typeof PDFDocument.load>>>();

  for (let index = 0; index < groups.length; index++) {
    const group = groups[index]!;
    let built: PageGroupExport | null = null;
    let fileName = fileNameFor(index, group);

    try {
      const out = await PDFDocument.create();
      out.setProducer('rearrangepdf.com');
      out.setCreator('rearrangepdf.com');

      for (const item of group) {
        const source = docMap.get(item.sourceId);
        if (!source) continue;

        if (source.blank) {
          const size = source.blankSize ?? { width: 595.28, height: 841.89 };
          const page = out.addPage([size.width, size.height]);
          page.setRotation(degrees(item.rotation));
          continue;
        }

        let src = loaded.get(source.id);
        if (!src) {
          src = await PDFDocument.load(source.bytes, { ignoreEncryption: true });
          loaded.set(source.id, src);
        }
        const [copied] = await out.copyPages(src, [item.sourcePageIndex]);
        const baseAngle = copied.getRotation().angle ?? 0;
        copied.setRotation(degrees((((baseAngle + item.rotation) % 360) + 360) % 360));
        out.addPage(copied);
      }

      const bytes = await out.save();
      const copy = new Uint8Array(bytes);
      built = {
        blob: new Blob([copy.buffer], { type: 'application/pdf' }),
        fileName,
        pageCount: group.length,
      };
    } catch (error) {
      console.error('Failed to build group', fileName, error);
    }

    onGroup?.(built, index, groups.length);
  }
}

export function triggerDownload(blob: Blob, fileName: string): void {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = fileName;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 30_000);
}
