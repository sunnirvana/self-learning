# 校园规划：一个仓库，很多门课

这个仓库不是「一个 MISSION 里塞所有学习」，而是一座**校园**：GitHub 上只有一份历史；每门要学的东西占一个独立的教学工作区。

依据：teach 技能写明 *One mission per workspace*。两门无关的课混在同一个 `MISSION.md` 里，课会飘，最近发展区也会算错。

**已确认并落地：** 仓库公开，名 `self-learning`，GitHub Pages 从 `main` 根目录部署。第一门课在 `topics/agent-strategic-programming/`。

## 已做的拆分

- 根目录是校园（README、Pages 首页、AGENTS.md）。
- 课在 `topics/<slug>/`，方法在 `methods/`。
- Pages 用 GitHub Actions 发布整个仓库静态文件。

## 推荐结构

```
.
├── README.md                 # 校园地图：在学什么、最近进展
├── AGENTS.md                 # 老师（agent）怎么找到当前教室
├── CAMPUS.md                 # 本规划（本文件）
├── _template/                # 新开一门课时复制
│   ├── MISSION.md
│   ├── RESOURCES.md
│   ├── NOTES.md
│   ├── GLOSSARY.md
│   ├── lessons/.gitkeep
│   ├── reference/.gitkeep
│   ├── learning-records/.gitkeep
│   └── assets/.gitkeep
├── topics/
│   └── agent-strategic-programming/   # 现有内容迁到这里
│       ├── MISSION.md
│       ├── RESOURCES.md
│       ├── NOTES.md
│       ├── GLOSSARY.md
│       ├── assets/
│       ├── lessons/
│       ├── reference/
│       └── learning-records/
└── methods/                  # 从课里抽出来、真正拿去用的方法
    └── README.md
```

| 目录 | 是什么 | 不是什么 |
|---|---|---|
| `topics/<slug>/` | 一门课的教学工作区。`/teach` 时 agent 的工作目录就是这里。 | 不是博客，不是知识库倾销 |
| `methods/` | 课的**产出**：抽出的方法卡片、可调用的流程。战略式投资落在这里。 | 不是把整次对话归档 |
| `_template/` | 新课脚手架，字段对齐 teach 技能 | 不是第二套理论 |
| `README.md` | 给人看的目录和状态 | 不是某一门课的讲义 |

**不要用 `skills/` 当课目录。** 它会和 agent 的 `SKILL.md` 撞名。课叫 `topics/`，抽出来能调用的东西叫 `methods/`。

### 为什么不「一个主题一个 GitHub 仓库」

你会同时维护很多门课。多仓库让目录、issue、Pages、备份都裂开。主题隔离用文件夹就够；git 历史已经能按路径过滤。

### 为什么不把现有文件留在根目录

根目录一旦承担「校园 + 第一门课」，第二门课没有干净入口。agent 会读错 `MISSION.md`。第一门课迁走一次，后面都简单。

## 一门课的内部（不变）

每个 `topics/<slug>/` 严格按 teach 技能：

| 文件 | 作用 |
|---|---|
| `MISSION.md` | 为什么学、学会长什么样、边界 |
| `RESOURCES.md` | 高可信来源；课里的论断从这里来 |
| `NOTES.md` | 教学偏好、当前卡住的地方 |
| `GLOSSARY.md` | 用户已经会用的术语（不是预习词典） |
| `lessons/*.html` | 一课一个文件，短、可交互 |
| `reference/*.html` | 以后会反复翻的压缩页 |
| `learning-records/*.md` | 已经证明会了的、会改变下一课的判断 |
| `assets/` | 本课组件。第二门课要共用时，再提升到仓库级 `shared/assets/`，现在不要提前抽 |

slug 用英文短横线，稳定、适合 URL 和 git。第一门课建议：`agent-strategic-programming`。

## GitHub 怎么用

目标是**维护**，不是假装在给开源项目做发布工程。

**要做**

- 一个公开仓库 `self-learning`。课和 learning-records 会出现在网上：不要往里面写密钥、未发表的商业机密、或你不愿公开的对话全文。
- `main` 即真相。每完成一课或一份 learning record 就提交。
- 提交说明带主题：`topic(agent-strategic-programming): lesson 0004`。
- 可选：GitHub Pages 指向仓库根或 `/docs`，用相对路径打开 `topics/.../lessons/*.html`（现有 `../assets/` 迁入 `topics/<slug>/` 后仍然成立）。
- 可选：用 Issue 记「下一门想学的东西」，标签 `wishlist`。不要用 Issue 当 learning record——记录要挨着那门课的 `MISSION.md`。

**不要做（除非以后真的需要）**

- 为每一课开 PR、做 code review。个人学习仓库里这是仪式，不是投资。
- 每门课一个 submodule。
- 在仓库里复制一份 teach 技能。技能继续住在 agent 侧；仓库只放学习状态。
- 把 `methods/` 写成第二个教程系统。方法要短、可调用，课才负责教。

### 日常节奏

1. 打开某一门课：agent 的 cwd 设为 `topics/<slug>/`，然后 `/teach`。
2. 课、速查、learning record 写在该目录里。
3. 从课里抽出的、下次要调用的流程，经过你确认后放入 `methods/<name>.md`。
4. `git add` 相关路径，提交，`git push`。
5. `README.md` 的状态表改一行：该课进行到第几课、上次日期。

### README 状态表示例

| 课 | 使命（一句话） | 进度 | 最近 |
|---|---|---|---|
| [agent-strategic-programming](topics/agent-strategic-programming/) | 用战略式编程的眼光使用 agent | 课 03，待抽产品设计方法 | 2026-08-22 |

## Agent 约定（写入 `AGENTS.md`）

搬家后必须写清楚，否则下次 `/teach` 会在根目录再造一套 `MISSION.md`。

- **当前工作目录决定教室。** 用户说学某门已有的课，先 `cd topics/<slug>`，只读写该树。
- **新课先问使命，再复制 `_template/`。** 没有 `MISSION.md` 不准开课。
- **禁止**在根目录写 `lessons/` 或第二份 `MISSION.md`。
- **抽出方法**要用户确认后再进 `methods/`。agent 不得把某次对话全文当方法提交。
- 共享组件：只有第二个 topic 真正要复用时，才把 CSS/JS 升到 `shared/assets/`，并改两边的相对路径。

## 第一门课怎么迁

现有根目录文件全部进入 `topics/agent-strategic-programming/`：

- `MISSION.md` `RESOURCES.md` `NOTES.md` `GLOSSARY.md`
- `assets/` `lessons/` `reference/` `learning-records/`

课与速查之间的相对链接（`../reference/`、`0002-extract-the-method.html`）**不必改**。仓库根新建 `README.md`、`AGENTS.md`、`_template/`、`methods/README.md`。本文件留在根目录。

## 落地顺序

1. 确认本规划（仓库名、是否私有、要不要 Pages）。
2. 建 GitHub 空仓库；本地 `git init`。
3. 搬家 + 写 `README.md` `AGENTS.md` `_template/` `methods/README.md`。
4. 第一次提交并 push。
5. 继续第一门课：把产品设计方法抽进 `methods/`，这才是校园结构的第一次「战略式」使用。

## 刻意不做的

- 不在规划阶段发明十门课的课表。目录会在你真正想学的时候增长。
- 不把间隔重复做成自研 SRS。先靠 README 日期和把课带回老师；不够用再加。
- 不把这个仓库变成 agent 技能市场。`methods/` 是给你自己调用的。
