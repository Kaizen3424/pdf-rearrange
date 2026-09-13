import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import sharp from 'sharp';
import pngToIco from 'png-to-ico';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const source = path.join(root, 'public', 'favicon.svg');
const target = path.join(root, 'public', 'favicon.ico');
const appleTouch = path.join(root, 'public', 'apple-touch-icon.png');

const sizes = [16, 32, 48];

const svg = await readFile(source);

const frames = await Promise.all(
  sizes.map((size) =>
    sharp(svg, { density: 384 }).resize(size, size, { fit: 'contain' }).png().toBuffer(),
  ),
);

const ico = await pngToIco(frames);

await writeFile(target, ico);
await sharp(svg, { density: 384 })
  .resize(180, 180, { fit: 'contain' })
  .png()
  .toFile(appleTouch);
console.log(`Wrote ${path.relative(root, target)} and ${path.relative(root, appleTouch)} from favicon.svg`);
