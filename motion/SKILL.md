---
name: stylesheets-motion
description: Shared, implementation-ready motion rules for every design style in the aabhro/Stylesheets repository. Use whenever creating or refining UI transitions, animations, loading states, dialogs, menus, tabs, accordions, toasts, hover states, page changes, scroll-linked effects, or reduced-motion behavior.
---

# Stylesheets Motion Skill

You are implementing motion, not selecting a visual theme. Read this skill and use the local implementation in this folder before adding animation to any project using a stylesheet from this repository.

## Source of truth

- This directory is the local source of truth for shared motion behavior: `tokens.css`, `patterns.css`, `motion.js`, and `catalog.md`.
- Read the chosen style in `../Styles/` for its visual personality. Motion engineering rules apply to all styles, but motion must not make distinct styles look identical.
- `demo.html` is an interactive local reference. Inspect it when you need to confirm how the bundled classes behave.
- The [transitions.dev skill](https://github.com/Jakubantalik/transitions.dev/tree/main/skills/transitions-dev) is an optional external reference for specialized transitions. Do not copy its whole recipe collection into this repository. The upstream license forbids redistribution of the collection or a substantial portion as a competing motion library or kit.

## Non-negotiable workflow

1. Inspect the real UI, existing code, and state model before changing motion.
2. Identify the event, initial state, open/active state, closing/exit state, and any loading, success, error, or repeated state that matters.
3. Choose the smallest appropriate pattern from `catalog.md`. Do not use one generic fade for every interaction and do not animate everything.
4. Reuse the local tokens and CSS classes where possible. Load `tokens.css` once. Load `patterns.css` once. Add `motion.js` only when a stateful transition needs orchestration.
5. Preserve the project's framework, architecture, existing functionality, and style rules. Adapt the code to the project's actual DOM; never force a framework onto a vanilla project.
6. Implement the full interaction, including both entry and exit when applicable. Clean up closing states, update ARIA attributes, preserve keyboard behavior, and manage focus appropriately.
7. Keep essential information visible and usable without animation. Respect `prefers-reduced-motion` in CSS and JavaScript.
8. Verify real interaction at desktop and mobile sizes, including repeated open/close, keyboard navigation, and reduced-motion settings. Do not claim visual verification if the page was not actually run.

## Local setup

For a plain HTML project, include the files once:

```html
<link rel="stylesheet" href="motion/tokens.css">
<link rel="stylesheet" href="motion/patterns.css">
<script defer src="motion/motion.js"></script>
```

Paths are examples. Adjust them to the project's directory structure. Import CSS into the existing global stylesheet when that is the established architecture.

The token set is namespaced with `--m-`. The component classes are namespaced with `m-`. Do not redefine these tokens in every component. Tune the tokens at the project/theme level, or use documented component-specific variables when an interaction needs a different feel.

## Choose by behavior

- Anchored menu or popover: use `.m-dropdown` and `Motion.setOpen()`.
- Centered modal: use `.m-dialog`, `.m-dialog__backdrop`, `.m-dialog__panel`, and `Motion.setOpen()`.
- Side panel: use `.m-panel` and `Motion.setOpen()`.
- Toast or snackbar: use `.m-toast` and `Motion.showToast()`.
- Accordion: prefer semantic `<details>` with `.m-accordion`; preserve its native keyboard behavior.
- Segmented tabs: use `.m-tabs`, `.m-tabs__list`, `.m-tabs__indicator`, and `Motion.selectTab()`.
- Icon change: use `.m-icon-swap` or `Motion.replay()`.
- Text/value change: use `.m-text-swap` and `Motion.swapText()`; don't animate every keystroke in an editor.
- Loading placeholder: use `.m-skeleton` and `.m-reveal`; remove the placeholder once real content is ready.
- Error feedback: use `.m-error-shake` briefly alongside a visible error message and accessible invalid state.
- Hover on a card/avatar group: use `.m-hover-lift` or `.m-avatar-list` only when the layout benefits.
- Pointer-reactive tilt: use `data-motion-tilt` only for appropriate, non-essential decorative cards. Never add tilt to every tile.
- Stateful check, like, toggle, number, shimmer, matrix-loader, and donut patterns: start with the relevant class in `patterns.css` and the guidance in `catalog.md`.

## Timing and composition

- Keep everyday feedback quick. Use the smallest duration that communicates the change, not one duration for every component.
- Use asymmetric timing when sensible. Entering a menu can be softer than dismissing it. A success state can be slower than a hover.
- Prefer `transform` and `opacity` for moving/fading content. Do not use `transition: all`.
- Animate a property because it conveys the state change, not because the property happens to be available.
- Keep controls immediately responsive. Never wait for an entrance animation before enabling clicks, typing, focus, or navigation.
- Avoid animating layout dimensions when a transform or grid transition can communicate the change without pushing unrelated content. When a true height change is required, keep it small and test layout stability.
- Use staggered entry only when order or grouping matters. Avoid cascading delays that make an interface feel slow.
- No scroll hijacking. Native smooth scrolling is acceptable for deliberate anchor navigation but must be disabled for reduced-motion users.

## Accessibility and resilience

- Keep the reduced-motion rules in `tokens.css` and `patterns.css`. Do not delete them to make a demo look more animated.
- JavaScript helpers check reduced-motion preferences before applying pointer tilt or waiting for exit animations.
- State must be represented semantically, such as `aria-expanded`, `aria-selected`, `aria-hidden`, `aria-invalid`, and real text labels.
- Ensure panels can still close with expected keyboard controls. Keep focus inside a modal while it is open, return focus to its trigger on close, and allow Escape to dismiss it when appropriate.
- Do not make selected, invalid, successful, or in-progress state dependent on motion or color alone.
- Avoid flashing, unbounded looping effects, content that is hidden until an animation runs, and motion that makes text harder to read.

## Refining existing motion

Audit CSS, component styles, inline styles, and JavaScript for transition/animation declarations, hardcoded durations and easings, transforms, keyframes, and state classes. For each occurrence:

1. Infer its purpose from the component, selector, event, and state changes.
2. Check `tokens.css` and `catalog.md` for a matching token/pattern.
3. Change only values whose usage actually matches. Do not alter motion merely because the number looks inconsistent.
4. Leave bespoke animation alone when no shared pattern fits. State the rationale briefly when needed.
5. Test entry, exit, reversal, repeat use, and reduced motion.

## Agent output expectations

- For a new interaction, use the local implementation and show the relevant minimal code changes.
- For a review, group findings by file and explain which pattern or token fits. Do not silently rewrite unrelated behavior.
- When adding a new local recipe, provide a semantic class, state contract, tokenized values, reduced-motion behavior, a usage example, and any required JavaScript cleanup.
- Do not call a motion transition complete until its behavior and accessibility have been verified.
