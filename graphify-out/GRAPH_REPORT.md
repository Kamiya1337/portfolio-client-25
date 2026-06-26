# Graph Report - D:\Project\portfolio-client-03  (2026-06-20)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 58 nodes · 68 edges · 14 communities (10 shown, 4 thin omitted)
- Extraction: 96% EXTRACTED · 4% INFERRED · 0% AMBIGUOUS · INFERRED: 3 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `9ebb9c2d`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]

## God Nodes (most connected - your core abstractions)
1. `portfolioData` - 7 edges
2. `scripts` - 5 edges
3. `ResourceAction()` - 3 edges
4. `App()` - 2 edges
5. `HomeTab()` - 2 edges
6. `PrintView()` - 2 edges
7. `unavailable()` - 2 edges
8. `notRequired()` - 2 edges
9. `ProjectsTab()` - 2 edges
10. `RubricTable()` - 2 edges

## Surprising Connections (you probably didn't know these)
- `Bài 4` --conceptually_related_to--> `Bài 3`  [INFERRED]
  public/docs/Bài 4.pdf → public/docs/Bài 3.pdf
- `Bài 5` --conceptually_related_to--> `Bài 4`  [INFERRED]
  public/docs/Bài 5.pdf → public/docs/Bài 4.pdf
- `Bài 6` --conceptually_related_to--> `Bài 5`  [INFERRED]
  public/docs/Bài 6.pdf → public/docs/Bài 5.pdf

## Import Cycles
- None detected.

## Communities (14 total, 4 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.15
Nodes (13): devDependencies, autoprefixer, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, postcss (+5 more)

### Community 1 - "Community 1"
Cohesion: 0.22
Nodes (8): dependencies, lucide-react, react, react-dom, name, private, type, version

### Community 3 - "Community 3"
Cohesion: 0.47
Nodes (4): notRequired(), ProjectsTab(), ResourceAction(), unavailable()

### Community 5 - "Community 5"
Cohesion: 0.40
Nodes (5): scripts, build, dev, lint, preview

### Community 6 - "Community 6"
Cohesion: 0.50
Nodes (4): Bài 3, Bài 4, Bài 5, Bài 6

## Knowledge Gaps
- **25 isolated node(s):** `name`, `private`, `version`, `type`, `dev` (+20 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `Community 0` to `Community 1`?**
  _High betweenness centrality (0.147) - this node is a cross-community bridge._
- **Why does `scripts` connect `Community 5` to `Community 1`?**
  _High betweenness centrality (0.059) - this node is a cross-community bridge._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _25 weakly-connected nodes found - possible documentation gaps or missing edges._