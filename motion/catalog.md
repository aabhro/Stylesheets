# Motion pattern catalog

Use this catalog to choose a transition by its role. Patterns are composable: a button can use press feedback while opening a dropdown, and a success check can pair with an icon swap. Apply only the parts the interface needs.

## Bundled patterns

| Pattern | Local implementation | Use it for |
| --- | --- | --- |
| Card resize | `m-card-resize` | A real card or container size change |
| Number pop-in | `m-number-pop` / `Motion.replay` | A count changing in place |
| Notification badge | `m-badge-pop` | A newly appearing count or status dot |
| Text state swap | `m-text-swap` / `Motion.swapText` | A status or short label changing |
| Menu dropdown | `m-dropdown` / `Motion.setOpen` | Small anchored menus |
| Modal open/close | `m-dialog` / `Motion.setOpen` | Centered dialog overlays |
| Panel reveal | `m-panel` / `Motion.setOpen` | Sidebar or utility panel entering a region |
| Page change | `m-page-transition` with `data-direction="forward"` or `back` | Navigating between related views |
| Icon swap | `m-icon-swap` / `Motion.replay` | A small icon changing in a stable slot |
| Success feedback | `m-success-pop` | A completed action; pair with clear status text |
| Avatar group | `m-avatar-list` and `m-avatar` | Closely grouped avatars or related chips |
| Validation error | `m-error-shake` | Brief feedback on invalid input, alongside an error message |
| Input clear | `m-input-clear` and `Motion.clearText()` | A deliberate clear action, not every keystroke |
| Skeleton reveal | `m-skeleton` then `m-reveal` for real content | A placeholder that is replaced by loaded content |
| Shimmer | `m-shimmer-text` | Short in-progress status; never fake progress |
| Sliding tabs | `m-tabs__indicator` / `Motion.selectTab` | A small mutually exclusive tab group |
| Tooltip | `m-tooltip` and a real open state | Hover/focus help attached to a control |
| Text reveal | `m-reveal` / `m-stream` | A short headline, grouped message, or meaningful new content |
| Hover tilt | `data-motion-tilt` | Optional pointer-reactive cards, never essential controls |
| Trigger morph | `.m-trigger-morph__line` inside a trigger with `aria-expanded` | A trigger changing to a related action/state |
| Accordion | `m-accordion` with semantic `details` | Expand/collapse content |
| Toast | `m-toast` / `Motion.showToast` | Temporary confirmation or non-blocking feedback |
| Like action | `m-like` and `aria-pressed` | A reversible favorite/like toggle |
| Learn-more arrow | `.m-learn-more` and `.m-learn-more__arrow` | A link affordance; keep the label stable |
| Checkbox check | `m-check` with `aria-checked` | A custom checkbox's checkmark feedback |
| Spinning counter | `.m-counter-spin` with `.m-counter-digit` | A decorative numeric update when digit position matters |
| Toggle | `m-toggle` | A boolean setting; preserve a real input |
| Thinking state | `m-thinking` | A live state label when work is genuinely in progress |
| Reasoning/activity stream | `m-stream` | A real sequence of meaningful activity updates |
| Streaming text | `m-text-swap` for discrete updates; avoid animating every token | Status text or completed text chunks |
| Matrix loader | `m-matrix` | Compact loading indicator with a known completion state |
| Banner stack | `m-banner-stack` | Several non-blocking stacked alerts |
| Text morph | `.m-text-morph` and `Motion.morphText()` | A short label that changes length |
| Soft value swap | `.m-text-swap-soft` with `Motion.replay()` after updating the value | Data values changing in place |
| Donut chart | `m-donut__arc` | An SVG ring whose actual value changes |

The names in this table describe common motion behaviors. The local implementation is intentionally not a byte-for-byte mirror of transitions.dev. For any pattern requiring richer orchestration than the bundled helper provides, implement and test the exact component behavior rather than pretending a class alone handles it.

## Example: open/close a panel

```html
<button type="button" data-motion-open="#filters" aria-controls="filters" aria-expanded="false">
  Filters
</button>
<aside class="m-panel" id="filters" data-state="closed" hidden aria-hidden="true">
  <button type="button" data-motion-close="#filters">Close</button>
  <!-- panel content -->
</aside>
```

The bundled `motion.js` delegates the open and close actions, updates state attributes, and waits for the exit transition before hiding the surface. Add appropriate focus management for the specific panel and ensure the trigger remains keyboard accessible.

## Example: modal

```html
<button type="button" data-motion-open="#example-dialog" aria-controls="example-dialog" aria-expanded="false">
  Open dialog
</button>
<section class="m-dialog" id="example-dialog" data-state="closed" hidden aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="example-title">
  <button class="m-dialog__backdrop" data-motion-close="#example-dialog" aria-label="Close dialog"></button>
  <div class="m-dialog__panel">
    <h2 id="example-title">Confirm action</h2>
    <p>Describe the action before asking for confirmation.</p>
    <button type="button" data-motion-close="#example-dialog">Cancel</button>
  </div>
</section>
```

For production dialogs, complete focus trapping and focus return for the project's DOM and framework. The helper supports Escape dismissal but is not a general focus-trap library.

## Audit checklist

- [ ] The motion matches the component's purpose and state.
- [ ] The opening and closing paths both work.
- [ ] Reopening during/after closing does not leave stale classes.
- [ ] ARIA state reflects the actual state.
- [ ] Reduced-motion mode remains functional.
- [ ] Motion does not delay action, hide essential content, or cause layout shifts.
- [ ] The pattern fits the selected style's personality.
