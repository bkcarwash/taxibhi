/**
 * Image conversion script — converts all business JPGs to optimised WebP
 * and organises them into semantic folders under public/images/
 *
 * Run: node scripts/convert-images.mjs
 */

import sharp from "sharp";
import { existsSync, mkdirSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC = path.join(__dirname, "..", "public");

// Ensure output dirs exist
const dirs = [
  "images/hero",
  "images/vehicles",
  "images/ziyarat",
  "images/og",
  "images/misc",
];
for (const d of dirs) {
  mkdirSync(path.join(PUBLIC, d), { recursive: true });
}

// Map: [sourceName, destPath, maxWidth, quality, altDescription]
const images = [
  // ── HERO ─────────────────────────────────────────────────────────────────
  [
    "Taxi-Bhai-Makkah-Clock-Tower-Night-Umrah-Transport.jpg",
    "images/hero/makkah-clock-tower-night.webp",
    1920, 80,
  ],
  [
    "Taxi-Bhai-Makkah-Clock-Tower-Royal-Clock-Daytime-View.jpg",
    "images/hero/makkah-clock-tower-day.webp",
    1920, 80,
  ],
  [
    "Taxi-Bhai-GMB-Cover-Photo-Makkah-Umrah-Taxi-Service.jpg",
    "images/hero/staria-mosque-mountains.webp",
    1440, 82,
  ],
  [
    "Taxi-Bhai-Madinah-Masjid-Nabawi-Pilgrims-Courtyard-Tour.jpg",
    "images/hero/madinah-nabawi-pilgrims-umbrellas.webp",
    1440, 82,
  ],

  // ── VEHICLES ─────────────────────────────────────────────────────────────
  [
    "Taxi-Bhai-Hyundai-Staria-7-Seater-Van-Makkah-Mosque.jpg",
    "images/vehicles/staria-7-seater-makkah.webp",
    1200, 83,
  ],
  [
    "Taxi-Bhai-Black-Staria-Van-Makkah-Ziyarat-Transfer.jpg",
    "images/vehicles/staria-van-ziyarat.webp",
    1200, 83,
  ],
  [
    "Taxi-Bhai-Staria-Van-Makkah-City-Transfer-Service.jpg",
    "images/vehicles/staria-makkah-city.webp",
    1200, 83,
  ],
  [
    "Taxi-Bhai-GMC-Yukon-Madinah-City-Transfer-Front-View.jpg",
    "images/vehicles/gmc-yukon-madinah-front.webp",
    1200, 83,
  ],
  [
    "Taxi-Bhai-GMC-SUV-Madinah-Street-Private-Transfer.jpg",
    "images/vehicles/gmc-suv-madinah-street.webp",
    1200, 83,
  ],
  [
    "Taxi-Bhai-GMC-Yukon-SUV-Interior-Comfortable-Seats.jpg",
    "images/vehicles/gmc-interior-seats.webp",
    1200, 83,
  ],
  [
    "Taxi-Bhai-Van-Interior-Comfortable-Leather-Seats.jpg",
    "images/vehicles/van-interior-leather.webp",
    1200, 83,
  ],
  [
    "Taxi-Bhai-Coaster-Bus-Group-Transfer-Makkah-Hotel.jpg",
    "images/vehicles/coaster-bus-makkah-hotel.webp",
    1200, 83,
  ],
  [
    "Taxi-Bhai-Private-Van-Jeddah-Airport-Transfer.jpg",
    "images/vehicles/van-jeddah-airport.webp",
    1200, 83,
  ],
  [
    "Taxi-Bhai-Van-Madinah-Makkah-Transfer-Service.jpg",
    "images/vehicles/van-madinah-makkah.webp",
    1200, 83,
  ],
  [
    "Taxi-Bhai-Sedan-Car-Night-Makkah-Airport-Transfer.jpg",
    "images/vehicles/sedan-night-makkah.webp",
    1200, 83,
  ],
  [
    "Taxi-Bhai-Hyundai-Van-Night-Makkah-Private-Transfer.jpg",
    "images/vehicles/staria-night-makkah.webp",
    1200, 83,
  ],

  // ── ZIYARAT / SACRED SITES ───────────────────────────────────────────────
  [
    "Taxi-Bhai-Madinah-Masjid-Nabawi-Green-Dome-Ziyarat-View.jpg",
    "images/ziyarat/madinah-nabawi-green-dome.webp",
    1200, 83,
  ],
  [
    "Taxi-Bhai-Madinah-Masjid-Nabawi-Pilgrims-Ziyarat-Group.jpg",
    "images/ziyarat/madinah-nabawi-pilgrims-group.webp",
    1200, 83,
  ],
  [
    "Taxi-Bhai-Madinah-Masjid-Nabawi-Umbrella-Courtyard-Ziyarat.jpg",
    "images/ziyarat/madinah-nabawi-umbrella-courtyard.webp",
    1200, 83,
  ],
  [
    "Taxi-Bhai-Madinah-Mosque-Ziyarat-Uhud-Sunset-View.jpg",
    "images/ziyarat/madinah-uhud-sunset.webp",
    1200, 83,
  ],
  [
    "Taxi-Bhai-Makkah-Mountain-Ziyarat-Tour-View.jpg",
    "images/ziyarat/makkah-mountain-view.webp",
    1200, 83,
  ],
  [
    "Taxi-Bhai-Makkah-Ziyarat-Historical-Site-Entrance-Taxi-Service.jpg",
    "images/ziyarat/makkah-historical-site-entrance.webp",
    1200, 83,
  ],
  [
    "Taxi-Bhai-Makkah-Ziyarat-Route-Private-Transfer.jpg",
    "images/ziyarat/makkah-ziyarat-route.webp",
    1200, 83,
  ],
  [
    "Taxi-Bhai-Ziyarat-Camel-Site-Makkah-Tour.jpg",
    "images/ziyarat/makkah-camel-site-tour.webp",
    1200, 83,
  ],

  // ── OG / Social ──────────────────────────────────────────────────────────
  [
    "Taxi-Bhai-GMC-Yukon-Madinah-City-Transfer-Front-View.jpg",
    "images/og/og-image.webp",
    1200, 85,
  ],
];

// Process social-media numbered images → misc folder (keep for gallery/social proof)
const socialImages = [
  "504376879_122109382556932486_425968650305894808_n.jpg",
  "504380528_122107103168932486_2856608131259856789_n.jpg",
  "504380846_706835012331236_3680164985344563930_n.jpg",
  "504380912_122109704456932486_7353712663295250362_n.jpg",
  "504383673_122108204156932486_3846888002858398499_n.jpg",
  "514248546_122109380264932486_4948482376914151715_n.jpg",
  "514328634_122109493838932486_3983392499012384803_n.jpg",
  "514343381_122109381056932486_975280907653257704_n.jpg",
  "515999578_122109380336932486_2785175402566321363_n.jpg",
  "516805220_122109382646932486_7526341506289683812_n.jpg",
  "516819369_122109380318932486_1395402080194661210_n.jpg",
  "516891942_122108204390932486_5283176591817832119_n.jpg",
  "516937075_122109380282932486_8388460302642977480_n.jpg",
  "517356320_122109382538932486_2924608083829768237_n.jpg",
  "518092191_122109380996932486_9141806759724946539_n.jpg",
  "519490485_122109380966932486_5954674389661316458_n.jpg",
  "519666052_122109258542932486_4871512565203322622_n.jpg",
  "520217087_122109380306932486_1447963515862876227_n.jpg",
  "520229206_17936318163025802_6501604413620333741_n.jpg",
  "541879416_122128190948932486_6544577816601766737_n.jpg",
  "542595484_122128190834932486_2906631427222364783_n.jpg",
  "542751226_122128190858932486_5727149668019373627_n.jpg",
  "542759786_122128190924932486_8448995448494125142_n.jpg",
];

for (let i = 0; i < socialImages.length; i++) {
  const src = socialImages[i];
  images.push([src, `images/misc/gallery-${String(i + 1).padStart(2, "0")}.webp`, 1000, 80]);
}

// Run conversions
let converted = 0;
let skipped = 0;
let failed = 0;

for (const [src, dest, maxW, q] of images) {
  const srcPath = path.join(PUBLIC, src);
  const destPath = path.join(PUBLIC, dest);

  if (!existsSync(srcPath)) {
    console.warn(`⚠  SKIP (not found): ${src}`);
    skipped++;
    continue;
  }

  try {
    await sharp(srcPath)
      .rotate() // auto-rotate from EXIF
      .resize({ width: maxW, withoutEnlargement: true })
      .webp({ quality: q, effort: 5 })
      .toFile(destPath);

    const srcStat = (await import("fs")).statSync(srcPath).size;
    const destStat = (await import("fs")).statSync(destPath).size;
    const saving = Math.round((1 - destStat / srcStat) * 100);

    console.log(`✓  ${dest}  [${saving}% smaller]`);
    converted++;
  } catch (err) {
    console.error(`✗  FAIL: ${src}  →  ${err.message}`);
    failed++;
  }
}

console.log(`\n✅ Done: ${converted} converted, ${skipped} skipped, ${failed} failed`);
