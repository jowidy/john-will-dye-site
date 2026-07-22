import sharp from "sharp";

await sharp("public/brand/jwd-monogram.svg")
  .resize(512, 512)
  .png({ compressionLevel: 9 })
  .toFile("public/brand/jwd-monogram.png");

await sharp("src/assets/hero-ascent.png")
  .resize(1600, 900, { fit: "cover", position: "centre" })
  .png({ compressionLevel: 9 })
  .toFile("public/brand/substack-hero.png");
