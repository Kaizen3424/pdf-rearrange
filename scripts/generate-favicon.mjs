import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import sharp from 'sharp';
import pngToIco from 'png-to-ico';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const source = path.join(root, 'public', 'logo.png');
const target = path.join(root, 'public', 'favicon.ico');

const sizes = [16, 32, 48];

const frames = await Promise.all(
  sizes.map((size) => sharp(source).resize(size, size, { fit: 'cover' }).png().toBuffer()),
);

const ico = await pngToIco(frames);

await writeFile(target, ico);
console.log(`Wrote ${path.relative(root, target)} from logo.png (${sizes.join(', ')}px)`);
