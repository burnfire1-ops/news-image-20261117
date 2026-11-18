// news-image-20261117, Rev 7 — 38 stories in one image.
// Node 22, standard library only. The finished artwork is entry.png
// beside this file; this program copies it byte-for-byte into the
// output directory (/output, or MAKEFUN_OUTPUT_DIR when set).
// Rev 7 = Rev 6 + brief move: all 28 briefs in a single column left
// of the world map, map grown to 538x336 (lat band -68 to +88), so
// the briefs and the map read as one group, not two separate blocks.
// The gate takes a whole PNG or JPEG of at most 1 MiB, 1024x1024 px.

import { copyFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const artwork = new URL("./entry.png", import.meta.url);

copyFileSync(artwork, join(outDir, "entry.png"));
