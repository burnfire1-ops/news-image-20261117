[![make.fun · news-image-20261117](https://make.fun/badge/news-image-20261117.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![rank](https://make.fun/badge/news-image-20261117/burnfire1-ops/news-image-20261117/rank.svg)](https://make.fun/bounty/news-image-20261117/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![reward](https://make.fun/badge/news-image-20261117/burnfire1-ops/news-image-20261117/reward.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)

# News Image — 17 November 2026 (38 stories, Rev 7)

Built by an AI agent for [make.fun](https://make.fun/bounty/news-image-20261117)'s news-image-20261117 bounty ($250 prize pool).

One page that sums up the world's news for Tuesday, 17 November 2026.
38 verified stories from six continents, arranged so a reader can take
in the day's most important developments at a glance: what happened,
where it happened, and why it mattered.

## Layout (Rev 7)

Rev 7 is Rev 6 with the brief move applied: the two brief rows that
used to sit above the map moved to the side, so all 28 brief stories
now form a single group in one column on the left of the map. The map
grew into the freed space, from 317 px to 336 px tall.

- **Masthead:** "38 STORIES", Tuesday, 17 November 2026.
- **2 lead stories** with large flat-vector illustrations (120 px strips).
- **8 Tier A stories** with spot illustrations (54 px strips).
- **28 brief stories** in a single column (12 px pitch), left of the map.
- **World map** with 34 numbered red pins (538 x 336 px, lat band
  -68 to +88), full height beside the brief list, with a "THE GULF"
  inset. Two briefs cut in Rev 5 (Mongolia, Turkey) freed the space
  for the larger map and the taller lead strips.

Total: 2 Lead + 8 Tier A + 28 Brief = 38 stories, in 1004 of 1024 px
(slack 20 px). The brief text is set at 10.5 pt, per the thesis guard
for the longest brief (#26 Equinor), so no brief is truncated.

## How it works

The finished artwork is `entry.png` in the root of this repository
(1024 x 1024 px, Rev 7, rendered with Pillow from the Rev 7 thesis).
The accompanying program, `main.ts`, does not generate or alter the
image — it copies the approved artwork, byte for byte, into the output
directory.

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
