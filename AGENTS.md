# Agent notes

This repo is a **campus**: many courses, one git history. The teach skill still applies, one **mission** per course.

## Teach

When the user wants to learn, continue a course, or runs `/teach`:

1. Identify the course slug (folder name under `topics/`). If they name an existing course, use that folder. If they want a new subject, interview the mission first, then copy `_template/` to `topics/<slug>/`. Done when `topics/<slug>/MISSION.md` exists and states why, success, constraints, and out of scope.
2. Work **only** inside that course tree (`MISSION.md`, `lessons/`, `reference/`, `learning-records/`, `RESOURCES.md`, `NOTES.md`, `GLOSSARY.md`, `assets/`). Paths in the teach skill are relative to this folder, not the repo root.
3. Put extracted, reusable procedures in `methods/` only after the user confirms the text. Done when the method is a short callable card, not a conversation dump.

Campus layout and GitHub habits: [CAMPUS.md](CAMPUS.md). Course map: [README.md](README.md).

## Do this

- New course → copy `_template/`, fill `MISSION.md` before the first lesson.
- Shared CSS/JS → lift into `shared/assets/` only when a second course actually needs the same file.

## Course in progress

`topics/agent-strategic-programming/` — tactical vs strategic programming for agents. Next: user extracts a product-design method into `methods/`.
