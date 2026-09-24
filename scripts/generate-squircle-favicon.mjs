import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputPath = 'C:/Users/lokha/.gemini/antigravity-ide/brain/364b336c-bd2f-4510-a64a-e1a7b44630f8/.user_uploaded/media_1790234962455.png';

function createIcoBuffer(pngBuffers) {
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

export async function generateSquircleFavicon() {
  const size = 1024;
  
  // Trim transparent excess around logo
  const trimmed = await sharp(inputPath).trim().toBuffer();

  // Create an elegant squircle badge background with a subtle cyan/slate accent border
  // Corner radius 230 on 1024x1024 gives the modern iOS/macOS squircle feel
  const badgeSvg = Buffer.from(`
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0c1220" />
          <stop offset="100%" stop-color="#05080e" />
        </linearGradient>
        <linearGradient id="borderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#00d2ff" stop-opacity="0.4" />
          <stop offset="50%" stop-color="#0066cc" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#00d2ff" stop-opacity="0.3" />
        </linearGradient>
      </defs>
      <!-- Base squircle -->
      <rect x="24" y="24" width="976" height="976" rx="224" ry="224" fill="url(#bgGrad)" />
      <!-- Subtle metallic/cyan border stroke -->
      <rect x="24" y="24" width="976" height="976" rx="224" ry="224" fill="none" stroke="url(#borderGrad)" stroke-width="16" />
    </svg>
  `);

  // Size the logo to fit nicely within the squircle with good breathing room (width 820px)
  const logoInner = await sharp(trimmed)
    .resize(820, 820, { fit: 'inside' })
    .toBuffer();

  // Composite logo on top of the squircle badge
  const masterBadge = await sharp(badgeSvg)
    .composite([
      {
        input: logoInner,
        gravity: 'center'
      }
    ])
    .png()
    .toBuffer();

  const publicDir = path.resolve('public');

  // Generate all required formats & sizes
  const p16 = await sharp(masterBadge).resize(16, 16).png().toBuffer();
  const p32 = await sharp(masterBadge).resize(32, 32).png().toBuffer();
  const p48 = await sharp(masterBadge).resize(48, 48).png().toBuffer();
  const p180 = await sharp(masterBadge).resize(180, 180).png().toBuffer();
  const p192 = await sharp(masterBadge).resize(192, 192).png().toBuffer();
  const p512 = await sharp(masterBadge).resize(512, 512).png().toBuffer();

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

  // Save a copy in scratch for preview inspection
  fs.writeFileSync('C:/Users/lokha/.gemini/antigravity-ide/brain/364b336c-bd2f-4510-a64a-e1a7b44630f8/scratch/squircle_master_512.png', p512);

  console.log('Squircle favicon assets generated successfully into public/ !');
}

generateSquircleFavicon();
