import sharp from "sharp";
import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const PUBLIC = path.join(ROOT, "public");
const SRC_LOGO = path.join(PUBLIC, "photos/logo.png");
const SRC_CASTLE = path.join(PUBLIC, "photos/castle1.png");

const BRAND_ORANGE = "#ff6b35";
const BRAND_NAVY = "#1b2a4e";

async function writeSvgFavicon() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="${BRAND_ORANGE}"/><text x="32" y="46" text-anchor="middle" font-family="system-ui, -apple-system, Helvetica, Arial, sans-serif" font-weight="800" font-size="38" fill="#ffffff">SL</text></svg>`;
  await writeFile(path.join(PUBLIC, "favicon.svg"), svg);
  console.log("✓ favicon.svg");
}

async function writePngIcons() {
  const sizes = {
    "favicon-32.png": 32,
    "apple-touch-icon.png": 180,
    "icon-192.png": 192,
    "icon-512.png": 512,
  };
  for (const [name, size] of Object.entries(sizes)) {
    await sharp(SRC_LOGO)
      .resize(size, size, {
        fit: "contain",
        background: { r: 255, g: 247, b: 237, alpha: 1 },
      })
      .png({ quality: 90, compressionLevel: 9 })
      .toFile(path.join(PUBLIC, name));
    console.log(`✓ ${name}`);
  }
}

async function writeOgImage() {
  const W = 1200;
  const H = 630;
  const TEXT_W = 500;
  const PHOTO_W = W - TEXT_W;

  const photo = await sharp(SRC_CASTLE)
    .resize(PHOTO_W, H, { fit: "cover", position: "center" })
    .toBuffer();

  const leftPanel = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${TEXT_W}" height="${H}">
      <rect width="${TEXT_W}" height="${H}" fill="${BRAND_ORANGE}"/>
      <text x="50" y="180" font-family="system-ui, -apple-system, Helvetica, Arial, sans-serif" font-weight="800" font-size="86" fill="#ffffff">Skákačky</text>
      <text x="50" y="275" font-family="system-ui, -apple-system, Helvetica, Arial, sans-serif" font-weight="800" font-size="86" fill="#ffffff">Lito</text>
      <line x1="50" y1="320" x2="180" y2="320" stroke="${BRAND_NAVY}" stroke-width="6" stroke-linecap="round"/>
      <text x="50" y="380" font-family="system-ui, -apple-system, Helvetica, Arial, sans-serif" font-weight="600" font-size="34" fill="#ffffff">Pronájem skákacích</text>
      <text x="50" y="425" font-family="system-ui, -apple-system, Helvetica, Arial, sans-serif" font-weight="600" font-size="34" fill="#ffffff">hradů</text>
      <text x="50" y="510" font-family="system-ui, -apple-system, Helvetica, Arial, sans-serif" font-weight="700" font-size="38" fill="${BRAND_NAVY}">Litoměřice a okolí</text>
      <text x="50" y="585" font-family="system-ui, -apple-system, Helvetica, Arial, sans-serif" font-weight="500" font-size="22" fill="#ffffff">skakackylito.cz</text>
    </svg>`,
  );

  await sharp({
    create: {
      width: W,
      height: H,
      channels: 4,
      background: { r: 255, g: 247, b: 237, alpha: 1 },
    },
  })
    .composite([
      { input: leftPanel, top: 0, left: 0 },
      { input: photo, top: 0, left: TEXT_W },
    ])
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(path.join(PUBLIC, "photos/og-image.jpg"));
  console.log("✓ photos/og-image.jpg (1200x630)");
}

await writeSvgFavicon();
await writePngIcons();
await writeOgImage();
