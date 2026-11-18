# News Image — 17 November 2026 (50 stories)

A single-page visual digest of the world's news for Tuesday, 17 November
2026. The image brings together 50 stories from 6 continents into one
page, so a reader can take in the day's most important developments at a
glance: what happened, where it happened, and why it mattered.

Layout: 2 lead stories with large illustrations, 8 Tier A stories with
spot illustrations, a world map with numbered pins, and 40 brief stories
in a two-column list.

## How it works

The finished artwork is `entry.png` in the root of this repository. The
accompanying program, `main.ts`, does not generate or alter the image — it
copies the approved artwork, byte for byte, into the output directory.

Note: `entry.png` currently holds the kit starter placeholder image. It
will be replaced by the approved 50-story artwork once the thesis (Rev 2)
is approved and the entry is implemented.

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
