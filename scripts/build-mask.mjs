/*
  Bäddar in märket som data-URI i CSS:en.

  Poängen: konsumenten ska aldrig behöva kopiera en SVG till sin public/-mapp.
  Ett steg som kan glömmas är ett steg som kommer glömmas, och resultatet blir
  ett osynligt märke utan felmeddelande.

  Masken läser bara alfakanalen, så allt som rör färg och semantik kan strippas.
*/
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const STRIP_ATTRS =
  / (role|aria-label|fill|fill-opacity|stroke|marker|visibility|display|overflow|style|featureKey|id|version|xmlns:xlink)="[^"]*"/g;

function minifySvg(svg) {
  return svg
    .replace(/<title>[\s\S]*?<\/title>/g, "")
    .replace(/<defs[^>]*><\/defs>/g, "")
    .replace(STRIP_ATTRS, "")
    .replace(/\s+/g, " ")
    .trim();
}

const svg = readFileSync(join(root, "src/mark.svg"), "utf8");
const minified = minifySvg(svg);
const dataUri = `data:image/svg+xml;base64,${Buffer.from(minified).toString("base64")}`;

const template = readFileSync(join(root, "src/credit.template.css"), "utf8");
const css = template.replaceAll("{{MASK}}", dataUri);

writeFileSync(join(root, "src/credit.css"), css);

const kb = (n) => `${(n / 1024).toFixed(1)} kB`;
process.stdout.write(
  `mask: ${kb(svg.length)} SVG -> ${kb(minified.length)} strippad -> ${kb(dataUri.length)} data-URI\n`
);
