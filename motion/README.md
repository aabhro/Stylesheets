# Motion

A self-contained motion system for every style in this repository.

This folder is the implementation, not merely a pointer to another repository. It contains the agent skill, motion tokens, reusable CSS patterns, a small vanilla-JavaScript controller, a pattern catalog, and a working showcase.

## Files

- `SKILL.md` — instructions coding agents must follow for all stylesheet-driven UI tasks.
- `tokens.css` — semantic duration, easing, distance, scale, and blur variables.
- `patterns.css` — reusable transitions for common controls and UI states.
- `motion.js` — small dependency-free helpers for stateful transitions.
- `catalog.md` — pattern-selection guide and broader motion coverage.
- `demo.html` — interactive visual reference for the bundled implementation.

## Use it

Read `SKILL.md` alongside the active guide in `../Styles/`. For plain HTML, include:

```html
<link rel="stylesheet" href="../motion/tokens.css">
<link rel="stylesheet" href="../motion/patterns.css">
<script defer src="../motion/motion.js"></script>
```

Adjust paths for the project being built. If the project already has a global stylesheet, import the token and pattern files there instead. The runtime is optional for CSS-only patterns.

## Scope and attribution

This folder is a locally implemented, dependency-free motion system designed to work across Modernimal, Selfpagism, and future styles. It is not a vendored copy of the transitions.dev repository. The upstream project explicitly prohibits republishing its full transition collection or a substantial part of it as a competing motion library or animation kit.

Use the [transitions.dev skill](https://github.com/Jakubantalik/transitions.dev/tree/main/skills/transitions-dev) as an optional reference when its specific recipes or advanced orchestration are needed. For work in this repository, start with the local skill, tokens, patterns, and demo.
