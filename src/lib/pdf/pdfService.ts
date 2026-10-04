import type { PDFDocumentProxy } from 'pdfjs-dist';

type PdfjsModule = typeof import('pdfjs-dist');

let pdfjs: PdfjsModule | null = null;

export async function getPdfjs(): Promise<PdfjsModule> {
  if (!pdfjs) {
    pdfjs = await import('pdfjs-dist');
    const { default: workerUrl } = await import('pdfjs-dist/build/pdf.worker.min.mjs?url');
    pdfjs.GlobalWorkerOptions.workerSrc = workerUrl;
  }
  return pdfjs;
}

export class PasswordCancelledError extends Error {
  constructor() {
    super('Password entry cancelled');
    this.name = 'PasswordCancelledError';
  }
}

const latin1 = new TextDecoder('latin1');

/**
 * Detects whether a PDF declares encryption by looking for the `/Encrypt`
 * reference in the trailer. This catches owner-password PDFs (which open
 * without a prompt) as well as user-password PDFs. pdf-lib cannot rebuild
 * encrypted documents, so this is used to warn before exporting.
 */
export function isPdfEncrypted(bytes: Uint8Array): boolean {
  const start = Math.max(0, bytes.length - 8192);
  const tail = latin1.decode(bytes.subarray(start));
  return /\/Encrypt\s+\d+\s+\d+\s+R/.test(tail);
}

export async function openPdf(
  data: Uint8Array,
  onPassword?: (needsRetry: boolean) => Promise<string>,
): Promise<PDFDocumentProxy> {
  const lib = await getPdfjs();
  const task = lib.getDocument({ data });
  if (onPassword) {
    task.onPassword = (
      updatePassword: (password: string) => void,
      reason: number,
    ) => {
      const needsRetry = reason === 2;
      onPassword(needsRetry)
        .then(updatePassword)
        .catch(() => {
          task.destroy();
        });
    };
  }
  return task.promise;
}

export interface RenderedThumb {
  blob: Blob;
  ratio: number;
}

export async function renderThumbnail(
  doc: PDFDocumentProxy,
  pageIndex: number,
  targetWidth: number,
  extraRotation: number,
): Promise<RenderedThumb> {
  const page = await doc.getPage(pageIndex + 1);
  const totalRotation = (((page.rotate + extraRotation) % 360) + 360) % 360;
  const base = page.getViewport({ scale: 1, rotation: totalRotation });
  const scale = targetWidth / base.width;
  const viewport = page.getViewport({ scale, rotation: totalRotation });
  const canvas = document.createElement('canvas');
  canvas.width = Math.max(1, Math.ceil(viewport.width));
  canvas.height = Math.max(1, Math.ceil(viewport.height));
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas is not supported in this browser');
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  const task = page.render({ canvas, viewport });
  await task.promise;
  const blob = await new Promise<Blob | null>((resolve) => {
    canvas.toBlob(resolve, 'image/jpeg', 0.85);
  });
  canvas.width = 0;
  canvas.height = 0;
  if (!blob) throw new Error('Thumbnail encoding failed');
  return { blob, ratio: base.width / base.height };
}

export async function renderBlankThumbnail(
  width: number,
  ratio: number,
): Promise<RenderedThumb> {
  const canvas = document.createElement('canvas');
  canvas.width = Math.round(width);
  canvas.height = Math.round(width / ratio);
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas is not supported in this browser');
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  const blob = await new Promise<Blob | null>((resolve) => {
    canvas.toBlob(resolve, 'image/jpeg', 0.85);
  });
  if (!blob) throw new Error('Thumbnail encoding failed');
  return { blob, ratio };
}
