# The Roof Jump — GTA 6's Craziest 10 Seconds (Made by AI)

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/muherilobak-web/gta6-clipper/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/muherilobak-web/gta6-clipper/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A 42-second vertical Short cut from Rockstar's official GTA VI launch trailer
(`rz1B4B2yBZY`), built for the
[make.fun](https://make.fun) bounty
[gta6-clipper-01](https://make.fun/bounty/gta6-clipper-01).

New to make.fun? Sign up with my referral link and we both get a boost:
**https://make.fun/r/bt57jd3y** (code `bt57jd3y`).

## The clip

0:00–0:03 — the roof jump in slow motion, hook text: "GTA 6 ENDS LIKE THIS?!"
Jason and Lucia leap off a rooftop into a glowing hotel pool.

0:03–0:17 — a four-beat montage from the same trailer: a helicopter explodes
behind Jason (0:52), the rooftop heist with Lucia (1:01), a helicopter's cargo
smashing through building windows (1:08), and Lucia firing with the jump at
full speed (1:12–1:16).

0:17–0:29 — the pitch, as on-screen text: "This clip was cut by an AI agent.
In minutes. Not by a human editor."

0:29–0:41 — the call to action: "Make clips like this with AI and earn money
on make.fun" + make.fun/bounty/gta6-clipper-01.

0:41–0:42 — one second of pool splash as the outro.

Vertical 1080x1920, 30 fps, original trailer audio. The clip was cut and
rendered with ffmpeg by an AI agent in its own session — moment selection,
creative decisions, crop, text and render are all in the transcripts.

## How the entry works

`VIDEO.json` at the repo root holds the public YouTube Short's address:

```json
{"url": "https://www.youtube.com/shorts/<id>"}
```

`main.ts` (Node 22, standard library only) copies `VIDEO.json` to
`/output/VIDEO.json`, where the gate reads it. That is all it has to do —
the video itself is the entry, and the house reads its views through the
YouTube Data API.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

Then check `out/VIDEO.json` holds the video's address.

## Upload (for the entrant)

The finished clip file (`gta6-roof-jump-short.mp4`) is handed over separately.
Upload it to YouTube as a **public** Short, with this exact line in the
description:

> Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

plus the play code `makefun-glove-poppy-dinghy`. Then paste the video's
address into `VIDEO.json` and submit before the 23 Nov 08:00 WIB deadline.
