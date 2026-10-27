# Shared Motion Standard

## Purpose

This is the required motion standard for every stylesheet in this repository. Its implementation lives locally in the [motion directory](../motion/), so coding agents have actual instructions, reusable tokens, working CSS patterns, JavaScript helpers, a catalog, and a demo instead of needing to visit another repository to discover the basics.

**Motion engineering is universal. Motion personality is not.** The active stylesheet determines whether motion is restrained, playful, strange, expressive, nostalgic, or theatrical. The common standard establishes how motion is chosen, implemented, made accessible, and verified.

## Mandatory local implementation

Before adding or changing UI motion:

1. Read [motion/SKILL.md](../motion/SKILL.md).
2. Consult [motion/catalog.md](../motion/catalog.md) and inspect the relevant local CSS/JS pattern.
3. Reuse [motion/tokens.css](../motion/tokens.css) and [motion/patterns.css](../motion/patterns.css) where they fit. Load shared files once.
4. Use [motion/motion.js](../motion/motion.js) for supported state orchestration where useful. Keep it optional for CSS-only interactions.
5. Consult [motion/demo.html](../motion/demo.html) when a visual example is useful.
6. Test the actual component, including exit and repeated states, keyboard use, responsive layout, and reduced-motion preferences.

The local implementation takes priority as the default reference for Stylesheets projects. Adapt it to the actual project and style rather than pasting every pattern or imposing a universal animation aesthetic.

## Reference to transitions.dev

[transitions.dev](https://github.com/Jakubantalik/transitions.dev) is a useful external reference for specialized patterns. Its license permits use of transitions and skills in projects, but restricts redistribution of the collection or a substantial part of it as a competing motion library, motion pack, or animation kit. For that reason, this repository contains an original local motion implementation rather than a mirror of the upstream recipe collection. Consult the upstream source when a specialized transition calls for it, while preserving its terms.

## Rules that apply to every style

- Match the transition to the UI element's actual behavior and state.
- Implement entry and exit, not just the initial entrance.
- Keep state classes, ARIA attributes, focus behavior, and cleanup synchronized.
- Use semantic motion tokens instead of arbitrary durations scattered across components.
- Prefer targeted transforms and opacity for movement. Avoid blanket `transition: all`.
- Do not delay actions or hide essential content behind animation.
- Preserve `prefers-reduced-motion: reduce`.
- Avoid layout shifts, flashing, unnecessary blur, excessive parallax, and constant decorative movement.
- Preserve the site's chosen visual personality. A minimal UI and an expressive personal site should not move identically.
- Verify the real interaction before claiming it is fixed.

## Adding a future style

Every guide under `Styles/` must link to this standard and the local `motion/SKILL.md` near its implementation workflow. Style-specific exceptions are allowed when they are intentional, accessible, and documented.
