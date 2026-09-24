import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputPath = 'C:/Users/lokha/.gemini/antigravity-ide/brain/364b336c-bd2f-4510-a64a-e1a7b44630f8/.user_uploaded/media_1790230548514.jpg';

function createIcoBuffer(pngBuffers) {
  // pngBuffers: array of { width, height, buffer }
  const count = pngBuffers.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  let offset = headerSize + count * dirEntrySize;

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // ICO type
  header.writeUInt16LE(count, 4); // count

  const entries = [];
  for (const item of pngBuffers) {
    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(item.width >= 256 ? 0 : item.width, 0);
    entry.writeUInt8(item.height >= 256 ? 0 : item.height, 1);
    entry.writeUInt8(0, 2); // color count
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // planes
    entry.writeUInt16LE(32, 6); // bit count
    entry.writeUInt32LE(item.buffer.length, 8); // bytes in res
    entry.writeUInt32LE(offset, 12); // image offset
    entries.push(entry);
    offset += item.buffer.length;
  }

  return Buffer.concat([header, ...entries, ...pngBuffers.map(b => b.buffer)]);
}

export async function generateFavicons() {
  const size = 1024;
  const cx = 512;
  const cy = 512;
  const r = 508;

  const circleSvg = Buffer.from(`
    <svg width="${size}" height="${size}">
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="white" />
    </svg>
  `);

  // Create clean master PNG with transparent corners
  const masterPng = await sharp(inputPath)
    .resize(size, size)
    .composite([
      {
        input: circleSvg,
        blend: 'dest-in'
      }
    ])
    .png()
    .toBuffer();

  const publicDir = path.resolve('public');
  const appDir = path.resolve('app');

  // Generate PNGs
  const p16 = await sharp(masterPng).resize(16, 16).png().toBuffer();
  const p32 = await sharp(masterPng).resize(32, 32).png().toBuffer();
  const p48 = await sharp(masterPng).resize(48, 48).png().toBuffer();
  const p180 = await sharp(masterPng).resize(180, 180).png().toBuffer();
  const p192 = await sharp(masterPng).resize(192, 192).png().toBuffer();
  const p512 = await sharp(masterPng).resize(512, 512).png().toBuffer();

  // Multi-resolution ICO (16x16, 32x32, 48x48)
  const icoBuffer = createIcoBuffer([
    { width: 16, height: 16, buffer: p16 },
    { width: 32, height: 32, buffer: p32 },
    { width: 48, height: 48, buffer: p48 }
  ]);

  fs.writeFileSync(path.join(publicDir, 'favicon-16x16.png'), p16);
  fs.writeFileSync(path.join(publicDir, 'favicon-32x32.png'), p32);
  fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), p180);
  fs.writeFileSync(path.join(publicDir, 'android-chrome-192x192.png'), p192);
  fs.writeFileSync(path.join(publicDir, 'android-chrome-512x512.png'), p512);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);

  console.log('All favicons successfully generated into public/ and app/ !');
}

if (process.argv[1]?.endsWith('generate-favicons.mjs')) {
  generateFavicons();
}
