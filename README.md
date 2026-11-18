# News Image — 17 November 2026 (38 stories, Rev 7 — brief move)

A single-page visual digest of the world's news for Tuesday, 17 November
2026. The image brings together 38 verified stories from 6 continents
into one page, so a reader can take in the day's most important
developments at a glance: what happened, where it happened, and why it
mattered.

Layout (Rev 7 = Rev 6 + brief move): 2 lead stories with large
flat-vector illustrations (120 px strips), 8 Tier A stories with spot
illustrations, 28 brief stories in a single column, and a world map with
34 numbered pins (538 × 336 px, full height beside the brief list). The
brief move gathers all 28 briefs into one group left of the map; the map
grew from 317 px to 336 px tall (lat band −68° to +88°) to fill the freed
space. The two cut briefs from Rev 5 (Mongolia, Turkey) freed the space
for the larger map and the taller lead strips.

## How it works

The finished artwork is `entry.png` in the root of this repository. The
accompanying program, `main.ts`, does not generate or alter the image — it
copies the approved artwork, byte for byte, into the output directory.

`entry.png` is the Rev 7 artwork (1024 × 1024 px), rendered with Pillow
from the Rev 7 thesis (`tesis-50-berita-rev7.md`): 2 Lead + 8 Tier A +
28 Brief = 38 stories, masthead "38 STORIES".

## Running it

Requirements: Node.js 22 or newer. No extra packages are needed; the
program uses only the Node standard library.

```sh
# Copy entry.png into the default output directory (/output)
node main.ts

# Or choose the output directory explicitly
MAKEFUN_OUTPUT_DIR=/path/to/output node main.ts
```

After a successful run, `entry.png` will be present in the output
directory, identical to the artwork in this repository.
