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

## Courses

- `topics/photo-to-print/` — photo → mesh → repair → FDM figurine/ornament. Active when user asks about 3D printing / modeling from photos.
- `topics/agent-strategic-programming/` — tactical vs strategic programming for agents. Next: extract product-design method into `methods/`.

## Cursor Cloud specific instructions

Static HTML campus. No package manager, lockfile, build, or test runner. Python 3 from the base image is enough.

- Preview from the repo root: `python3 -m http.server 8000 --bind 0.0.0.0`. Open `http://127.0.0.1:8000/`.
- Hello-world: the campus home lists both courses. A lesson such as `topics/agent-strategic-programming/lessons/0001-tactical-vs-strategic-programming.html` scores a practice item after a choice is clicked (`assets/practice.js`).
- GitHub Pages publishes the repo root from `main` (`.github/workflows/pages.yml`). `.nojekyll` keeps underscore paths such as `_template/` on Pages.
