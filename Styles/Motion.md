# Shared Motion Standard

## Purpose

This is the shared motion rulebook for every stylesheet in this repository. Read it alongside the chosen style before building, redesigning, or polishing a website or interface.

**Motion engineering is universal. Motion personality is not.** Every style must use deliberate timing, consistent state transitions, accessible fallbacks, and appropriate transition patterns. The chosen stylesheet still determines whether the result feels restrained, playful, strange, expressive, nostalgic, or theatrical. Do not flatten distinct styles into the same animation aesthetic.

## Mandatory reference: transitions.dev

Use the official [transitions.dev motion skill](https://github.com/Jakubantalik/transitions.dev/tree/main/skills/transitions-dev) as the primary reference for production-ready UI transitions.

- If the skill is available in the agent's environment, read it before implementing component motion.
- If it is not installed and the environment supports skills, install it with `npx skills add Jakubantalik/transitions.dev`. Otherwise, consult the official skill and its per-transition references directly.
- Match the recipe to the component's actual behavior. Use the official reference for details, state hooks, CSS selectors, timing, and any required JavaScript orchestration.
- Prefer a well-matched recipe over a hand-invented animation. If a recipe does not fit, keep the custom motion small, coherent, and consistent with the tokens already in use.
- Do not copy the transitions.dev recipe library into this repository. Link to the official source so its implementation details and license stay authoritative.

Official sources:
- [Motion skill and transition catalog](https://github.com/Jakubantalik/transitions.dev/tree/main/skills/transitions-dev)
- [Universal motion token block](https://github.com/Jakubantalik/transitions.dev/blob/main/skills/transitions-dev/_root.css)
- [Installable skill instructions](https://github.com/Jakubantalik/transitions.dev#use-as-an-agent-skill)

## Required workflow

For every UI task that introduces or changes motion:

1. **Inspect the real component and its states.** Identify the trigger, initial state, active state, closing or exit state, loading state, error state, and any repeated or data-driven changes that matter. Preserve the project's existing framework and behavior.
2. **Choose motion by meaning.** Use the reference catalog's decision rules to select the smallest appropriate transition. An anchored menu should feel connected to its trigger. A centered dialog needs a dialog transition. A value update, icon replacement, accordion, toast, or validation error each has a different purpose.
3. **Use shared tokens.** For transitions.dev recipes, install the official `_root.css` token block once in the global stylesheet, or install only the token declarations documented for one standalone recipe. Do not duplicate the global block. Use the recipe's documented semantic variables instead of scattering unrelated hardcoded values.
4. **Implement the complete state change.** Include entry and exit behavior when relevant, state-class cleanup, focus and keyboard behavior, and the small JavaScript orchestration required by the recipe. An opening animation alone is not a complete open/close interaction.
5. **Preserve reduced-motion support.** Keep every recipe's `prefers-reduced-motion` guard. For custom motion, provide an equivalent reduced-motion rule. Do not depend on motion alone to communicate success, error, selection, or status.
6. **Verify the result.** Test the actual interaction, reversed/repeated use, keyboard navigation, narrow screens, and reduced-motion preferences. Check that animation does not shift surrounding layout, clip content, trap focus, or delay the action.

## Motion principles

### Be purposeful

- Use motion to communicate cause and effect, spatial relationships, hierarchy, status, and state changes.
- Keep controls responsive. Animation must never block typing, clicking, selecting, navigation, or other meaningful actions.
- Animate only what helps the user understand the change. Avoid making every item bounce, float, glow, spin, or fade.
- Prefer one clear movement with a readable endpoint over several simultaneous decorative effects.
- Use enter and exit timing intentionally. Closing feedback is often quicker than opening or revealing a surface.
- Do not hijack scrolling, intercept wheel or touch gestures, or hide essential content until a reveal animation runs.

### Keep movement technically sound

- Prefer `transform` and `opacity` for movement and fading where they can achieve the effect. Animate layout dimensions only when the actual layout change needs to be visible.
- Avoid animating expensive properties on large areas unless testing shows that performance is acceptable.
- Avoid blanket `transition: all`. Name the properties that should animate so unrelated changes do not become accidental effects.
- Avoid layout shifts, flicker, rapid flashing, unnecessary blur, excessive parallax, and motion that reduces text readability.
- Do not add a framework or animation dependency for a straightforward CSS interaction. Use JavaScript only for state orchestration that CSS cannot safely provide alone.
- Use stagger only when sequence communicates grouping or hierarchy. Keep delays short and never make users wait through a long entrance before they can act.

### Keep accessibility in the implementation

- Honor `prefers-reduced-motion: reduce`. Remove nonessential travel, parallax, looping motion, and smooth scrolling, or replace them with brief opacity changes or immediate state changes.
- Keep focus visible and preserve expected keyboard behavior for menus, dialogs, tooltips, tabs, and controls.
- Provide a non-animated state that remains legible and functionally complete.
- Never rely only on color or animation to show selected, disabled, successful, or invalid states.
- Avoid flashing patterns and high-frequency motion. Animated decorative assets should not undermine reading or interaction.

## Using the official motion tokens

The transitions.dev recipe set provides a shared semantic scale for duration, easing, distance, scale, blur, and transition-specific tuning. When adopting a recipe, use the names and values documented by the official `_root.css` and that recipe's reference. The intended use matters more than matching a hardcoded number.

- Install the global token block once per project, not once per component.
- For a single isolated recipe, its documented local token block is sufficient when the full block is not already present.
- Do not rename or duplicate official variables in the recipe CSS. Tune documented variables when needed to fit the active style, while preserving the recipe's state logic and reduced-motion behavior.
- When refining existing motion, infer what an animation does before changing its values. A modal close, tooltip appearance, page change, and looping loader should not be forced onto the same duration simply because their current numbers are similar.
- If a custom interaction does not map to an official token or recipe, keep its values local and explain the reason in code comments only when the intent is otherwise unclear.

## Style-specific expression

The active stylesheet controls the character of the motion:

- **Quiet or minimal styles:** subtle feedback, short transitions, restrained displacement, and understated reveals.
- **Expressive or personal styles:** more distinctive timing, playful or unusual motion, and decorative movement when it supports the requested theme.
- **Early-web and GIF-rich styles:** let suitable animated assets contribute to the motion language. Add CSS effects selectively rather than competing with every animated graphic.
- **Editorial or content-heavy layouts:** prioritize reading stability, reveal timing that does not obstruct content, and transitions that clarify navigation or changing content.

These are examples, not preset themes. Follow the user's requested style and references. Shared accessibility, state handling, and implementation rules still apply to every style.

## Avoid

- Applying the same transition indiscriminately to all components.
- Adding motion merely to make a static page feel busy.
- Leaving a modal, dropdown, toast, or panel visually gone while it remains interactive, or visually present after its state has closed.
- Removing recipe-specific state cleanup, event handling, or reduced-motion rules.
- Reinstalling or pasting the global token block multiple times.
- Rewriting a project's architecture or replacing its existing animation system without need.
- Claiming motion is polished without exercising the actual component and its exit/re-entry states.

## Integration rule for every stylesheet

Every present and future guide in `Styles/` must reference this file as a **mandatory shared standard**. A style may add its own timing preferences and aesthetic direction, but it must not silently override the common requirements for recipe selection, complete state handling, token consistency, reduced motion, performance, and verification.

Before adding a new stylesheet to the repository, include a direct link to this file in its opening rules and in its implementation/review workflow.
