import type { PageItem, SourceDoc } from '../types';

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
