# Weekly Recap update

End-of-week process for keeping this portfolio current. Driven by Cursor skill `weekly-recap` and automation **Friday weekly Recap update**.

## Sources

- Jira **SCWR** (assignee = you): Completed + In Progress Frontend in the last 7 days
- Merged / open PRs on watched `fastfishio/*` repos
- Config: `~/.cursor/bureaucracy-kit/config.md`

## What gets edited

1. **`src/data/weeklyLog.ts`** — append one `WeeklyLogEntry` for the ISO week (newest first). Always do this.
2. **`src/data/years.ts`** — fold material into the **current calendar quarter**:
   - Ensure `years[YYYY]` exists (copy role/focus from prior year if needed).
   - Ensure `quarterlyHighlights` has an entry for `Qn YYYY`.
   - Merge shipped work into existing projects when the same theme, or add a new project.
   - Refresh `yearOverview.highlights` / `keyContributions` when the week shipped something portfolio-worthy.
   - Prefer real Jira URLs in `attachments` (`https://next-square.atlassian.net/browse/SCWR-…`).

## Tone

Match existing Recap voice: outcome-focused, operational impact, no vanity metrics, no invented numbers.

## Ship path

1. Draft diff in a branch `recap/week-YYYY-Www`.
2. Open a PR on `tarekhassan2/Recap` (do not push straight to `main` unless explicitly asked).
3. Human reviews → merge → GitHub Pages deploys.

## Manual trigger

In Cursor chat: **“update recap”** or **“weekly recap”**.
