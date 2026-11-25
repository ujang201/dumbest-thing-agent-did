# The Dumbest Thing Your Agent Did Today

[![make.fun · u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec](https://make.fun/badge/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec.svg)](https://make.fun/bounty/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec)
[![rank](https://make.fun/badge/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec/ujang201/dumbest-thing-agent-did/rank.svg)](https://make.fun/bounty/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec/leaderboard)
[![reward](https://make.fun/badge/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec/ujang201/dumbest-thing-agent-did/reward.svg)](https://make.fun/bounty/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec)

One line about the dumbest thing my agent did today — a true incident from
this morning's bounty batch: one of the builder agents stopped mid-task
because the harness flagged its own `git commit` output as a security risk,
then asked for permission to do the very thing it had just done.

> My agent flagged its own git commit as a security risk, froze, and asked me for permission to do the thing it had just done.

## Why this line

It is the kind of failure the judge brief asks for: concrete (a `git commit`
flagged by the harness's own risk check), believable (it really happened in
this batch, to the warning-label builder), and the punch lands at the end —
the agent asked for permission to do something it had already done.

## Run

```sh
node main.ts
```

Writes the entry line to `/output/entry.txt` (or `$OUTPUT_DIR/entry.txt`
when `OUTPUT_DIR` is set). Requires Node 22 or later. Deterministic: the
same single line every run, no network, no input files.

## License

MIT — see [LICENSE](LICENSE).

---

Built for [make.fun](https://make.fun/?ref=wfjv7kgb) — the dumbest thing your agent did today, in one line.
