# Modernimal Stylesheet

## Purpose

Use this guide as reusable context when designing, building, or improving websites and application interfaces. It defines the default visual direction, interaction patterns, implementation preferences, and review standards. Apply it across projects unless the current request or an existing project's requirements call for a deliberate exception.

**Core direction:** Minimal, near-black, editorial, precise, and quietly polished. The interface should feel intentionally designed rather than like a generic component-library demo. Keep decoration restrained while making important content, controls, and active states easy to see.

## 1. Rules of priority

When making design decisions, follow this order:

1. **The current request wins.** Follow the user's latest explicit instructions over older preferences in this guide.
2. **Preserve the existing project.** Inspect its structure, features, conventions, and constraints before changing it. Prefer focused edits over unnecessary rewrites.
3. **Use this guide as the default.** Apply its visual language when the project has no more specific direction.
4. **Keep exceptions local.** A special shader, media player, graph, canvas, or poster gallery does not mean every project should use those effects or layouts.
5. **Do not invent features.** Improve the requested experience without adding unsolicited hero sections, dashboards, onboarding cards, timers, labels, promotional copy, or unrelated tools.
6. **Prefer simplicity when uncertain.** Choose fewer visual elements, fewer dependencies, and less layout clutter.


## Mandatory shared motion standard

**Always follow the repository's [Motion Standard](Motion.md) when designing or changing UI motion.** It applies to Modernimal and every other style in the repository. Use the local [motion skill](../motion/SKILL.md) and [pattern catalog](../motion/catalog.md) as the primary implementation reference. Reuse [tokens](../motion/tokens.css), [CSS patterns](../motion/patterns.css), and [JS helpers](../motion/motion.js) where they fit.

Before implementing component motion, inspect the actual component state and use the closest official recipe when one fits. Use the official semantic tokens, preserve documented state orchestration and reduced-motion guards, and verify enter, exit, repeat, keyboard, and reduced-motion behavior. The transitions.dev repository is an optional external reference for specialized transitions, not the default implementation source.

Modernimal keeps the motion visually restrained. The shared standard governs transition selection, token consistency, complete state changes, accessibility, performance, and verification. This section does not replace Modernimal's visual direction or the canonical component specimen.

## Mandatory component library reference

**Before designing, building, or redesigning any UI, inspect [`Components/Modernimal.html`](../Components/Modernimal.html). This is the canonical interactive reference for Modernimal components, patterns, and examples.**

**This reference is a required part of the stylesheet, not optional inspiration. Do not ignore it and do not reinvent a component when an appropriate pattern already exists. Reuse its component structure, styles, tokens, accessibility patterns, and interaction behavior, then adapt them to the current project's context.**

Use this workflow:
1. Find the closest component or interaction in `Components/Modernimal.html` before implementing a new one.
2. Reuse its existing pattern where it fits. Keep related buttons grouped, floating menus and dialogs on an opaque `#0a0a0a` panel, and standalone icons unboxed.
3. Adapt labels, content, dimensions, layout, states, and behavior to the product's actual needs. The library is a starting point, not a mandate to copy every demo verbatim.
4. Preserve the target project's architecture, existing features, terminology, framework, and user requirements. Do not replace the entire project with the showcase itself.
5. If no example fits, build a compatible extension using the same tokens, motion, accessibility, and interaction rules. Avoid adding unnecessary dependencies.
6. Check keyboard use, focus, responsive behavior, reduced motion, empty/loading/error states, and theme consistency for the adapted component.

Reference URL: https://github.com/aabhro/Stylesheets/blob/main/Components/Modernimal.html

## 2. Visual identity

### Core traits

- Near-black and monochrome by default.
- Neutral, editorial, and modern.
- Dense and easy to scan when information needs to be browsed.
- Spacious between major sections and compact within related controls.
- Low-contrast decoration with readable, accessible content.
- Rounded corners used with restraint.
- Subtle borders and soft shadows.
- Smooth, fast interactions.
- Carefully aligned typography and consistent spacing.
- Functional before decorative.

### Desired impression

The interface should feel calm, capable, and custom-built. Create polish through spacing, typography, alignment, subtle motion, and well-considered interactions rather than gradients, bright accents, glass effects everywhere, or piles of cards.

### Default visual intensity

Keep decoration quiet. Use one clear focal point at a time. Do not make every element compete for attention. Primary actions may use stronger contrast, while secondary actions and surrounding content remain understated.

## 3. Color system

Use this exact neutral monochrome palette as the default UI color system. These are the approved colors:

- `#0a0a0a`
- `#171717`
- `#262626`
- `#404040`
- `#525252`
- `#737373`
- `#a3a3a3`
- `#d4d4d4`
- `#e5e5e5`
- `#f5f5f5`
- `#fafafa`

Do not introduce teal, blue, green, purple, or other tinted colors into UI surfaces, overlays, borders, or shadows. Build depth from approved neutral grays, transparency, subtle edges, and shadows. Use another accent color only when the feature itself clearly requires it or the user explicitly requests it.

### Palette hierarchy and restraint

**NON-NEGOTIABLE OVERLAY RULE: ALL FLOATING MENUS MUST USE `#0a0a0a` AS THEIR ACTUAL PANEL BACKGROUND.** This includes dropdowns, context menus, popovers, command palettes, autocomplete lists, select menus, tooltips with panels, nested menus, and modal/dialog surfaces. Set `background: #0a0a0a` or use `var(--surface-overlay)`, whose value MUST remain `#0a0a0a`. Do not substitute `#171717`, `#262626`, gray, translucently tinted surfaces, or component-specific background colors. This rule takes priority over general surface variation. The backdrop behind the panel is separate and may use translucent near-black.

- Dark mode is the default. `#0a0a0a` is the dominant page background and overlay-backdrop color. Keep the overall canvas close to black.
- Use lighter shades rarely and with intent. Most of the interface should remain `#0a0a0a`, with `#171717` used for slight surface separation when needed.
- Use `#262626` sparingly for small hover states, selected states, or subtle borders. Do not use it as a large default panel background.
- Do not use `#404040`, `#525252`, `#737373`, or `#a3a3a3` as large background fills. These are mainly for restrained borders, muted details, and secondary text where contrast remains readable.
- In dark mode, `#d4d4d4` and `#f5f5f5` are text colors, not default panel fills. Reserve `#e5e5e5` and `#fafafa` primarily for the light theme or specific text needs.
- The dimming layer behind a dialog, menu, or popover should stay neutral and near-black, using `rgba(10, 10, 10, 0.76)` or a similar opacity. Never add a teal or blue color cast.
- Avoid multiple bright surface levels stacked together. Create hierarchy with spacing, typography, and motion before introducing a lighter surface.

### Dark theme

```css
:root {
  color-scheme: dark;
  --bg: #0a0a0a;
  --surface: #171717;
  --surface-raised: #171717;
  --surface-hover: #262626;
  --border: #262626;
  --text: #f5f5f5;
  --text-secondary: #d4d4d4;
  --text-muted: #a3a3a3;
  --surface-overlay: #0a0a0a;
  --overlay-text: #f5f5f5;
  --overlay-text-secondary: #d4d4d4;
  --overlay: rgba(10, 10, 10, 0.76);
  --overlay-edge: rgba(38, 38, 38, 0.55);
  --overlay-shadow: 0 16px 48px rgba(10, 10, 10, 0.38);
  --scrollbar-thumb: rgba(245, 245, 245, 0.10);
  --scrollbar-thumb-hover: rgba(245, 245, 245, 0.18);
  --shadow: 0 12px 36px rgba(10, 10, 10, 0.28);
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-pill: 999px;
}
```

### Light theme

```css
[data-theme="light"] {
  color-scheme: light;
  --bg: #fafafa;
  --surface: #fafafa;
  --surface-raised: #fafafa;
  --surface-hover: #e5e5e5;
  --border: #e5e5e5;
  --text: #0a0a0a;
  --text-secondary: #404040;
  --text-muted: #737373;
  --surface-overlay: #0a0a0a;
  --overlay-text: #f5f5f5;
  --overlay-text-secondary: #d4d4d4;
  --overlay: rgba(10, 10, 10, 0.42);
  --overlay-edge: rgba(10, 10, 10, 0.08);
  --overlay-shadow: 0 16px 48px rgba(10, 10, 10, 0.12);
  --scrollbar-thumb: rgba(10, 10, 10, 0.10);
  --scrollbar-thumb-hover: rgba(10, 10, 10, 0.18);
  --shadow: 0 12px 36px rgba(10, 10, 10, 0.10);
}
```

### Color rules

- Use `#0a0a0a` as the usual dark page background.
- Use `#262626` for subtle borders and separators. Do not outline every element.
- Use `#f5f5f5` for important dark-theme text and `#d4d4d4` for secondary content.
- Muted text must remain readable. Never dim important labels, filenames, graph text, inputs, controls, or active items to the point they become hard to read.
- Use accent colors only when the feature needs them, such as media artwork, status, or data visualization.
- Do not use gradients by default. Use them only when the current request explicitly asks for them or the existing project depends on a deliberate gradient effect.
- Avoid colorful glows, neon borders, excessive blur, and decorative color washes.
- **Every floating menu or overlay panel uses `#0a0a0a` as its actual background. Do not use `#171717` or `#262626` as the panel fill, even as an alternate.** This applies to dropdowns, context menus, popovers, command palettes, autocomplete, select menus, and dialogs. Keep the panel opaque near-black; keep backdrop dimming separate. Never use teal or blue-tinted colors.
- Keep scrollbars barely visible at rest. Use a thin, low-opacity thumb on a transparent track, with only a small visibility increase on hover. Scrollbars should not become prominent UI elements.
- Theme changes must update every component, including menus, dialogs, tooltips, inputs, editor controls, and popovers. Do not leave components permanently dark or light by accident.
- Logos and icons should adapt to the active theme unless their original artwork requires another treatment.

## 4. Typography

- Prefer a clean, modern sans-serif. Geist Sans and Noto Sans are suitable when they match the project or its existing setup.
- Use a restrained type scale. Establish hierarchy through size, weight, line height, and spacing instead of many competing styles.
- Use regular or medium weights for most UI text. Reserve semibold or bold for titles, key values, and high-priority actions.
- Keep headings clear and compact. When a hero headline is actually needed, aim for two or three lines at most.
- Avoid all-caps labels and tiny uppercase metadata unless the design specifically needs them.
- Avoid generic marketing language and filler labels such as “The ultimate experience” or made-up status text.
- Use tabular numerals for times, counters, and aligned numeric values when useful.
- Keep line lengths comfortable in reading and writing views. A full-screen editor should use its available space without leaving a large, unexplained blank column.
- Check typography at normal desktop and mobile sizes. Do not fix layout problems by shrinking everything.

## 5. Layout, hierarchy, and spacing

- Use a clear grid, consistent alignment, and intentional placement.
- **Always favor a vertical list layout** for primary content, navigation, files, settings, search results, tool directories, and repeated items. Keep content in a predictable order and make rows easy to scan.
- Avoid tiled grids, bento layouts, and rows of cards unless the task inherently benefits from spatial placement, such as a canvas, visual gallery, or poster browser. Even then, use list layouts for surrounding navigation and controls where practical.
- Create hierarchy with indentation, spacing, typography, alignment, and small dividers. Related controls should be grouped; subordinate settings or nested items should be indented consistently.
- Give major sections generous separation, but keep dense lists, toolbars, and related controls compact.
- Do not add a hero, quick-picks area, welcome panel, or feature cards to a tools index unless requested.
- Avoid unnecessary nested cards. Prefer the page background, clear spacing, indentation, and fine separators.
- Fill the available space when it improves the task. In editors, chat interfaces, and workspaces, remove dead zones caused by arbitrary max-widths or undersized content regions.
- Do not stretch content without purpose. Use meaningful max-widths for reading pages, landing pages, and forms.
- On small screens, reorganize the layout rather than merely shrinking desktop elements. Avoid clipping, horizontal overflow, and controls that become too small to use.
- Keep existing file-system order stable unless the user explicitly asks to sort or reorder it.
- For responsive sidebars, provide a sensible collapse/expand interaction when useful.

## 6. Surfaces, borders, and depth

- Prefer a flat near-black canvas with only subtle surface differences where they serve a clear purpose.
- Use thin, low-contrast borders sparingly. A border should clarify a boundary, not decorate every object.
- **Never put a border, outlined box, or bordered background container around a standalone icon.** Keep lone icons visually light and place them directly on the surrounding surface. Use icon brightness, a subtle hover change, or a restrained tooltip for affordance instead of a permanent outline.
- Use rounded corners with restraint. Pills work well for search fields, compact actions, toggles, status controls, and grouped buttons. Larger panels should use a moderate radius when a panel is genuinely needed.
- Shadows should be soft and subtle. Use stronger shadows mainly for overlays that need separation from the page.
- **MANDATORY: the actual surface of every floating menu, popover, context menu, dropdown, command palette, autocomplete list, select menu, and overlay panel must be `#0a0a0a`. No alternatives. Do not use `#171717`, `#262626`, generic gray, a gradient, or a translucent tint as the panel background.** Separate the opaque `#0a0a0a` panel from the translucent near-black backdrop. Preserve the low-contrast aesthetic with a barely visible dark edge or a soft drop shadow, never a sharp, bright border.
- Keep scrollbars nearly invisible until needed. Prefer a transparent track and a narrow, low-opacity thumb that becomes only slightly more visible on hover. Do not use bright or thick default-looking scrollbars.
- **Keep content directly on the main background by default.** Do not put ordinary content inside generic gray tabs, gray tab strips, or raised gray panels just to create separation.
- Tabs, section selectors, and navigation should sit directly on the page canvas. Show the active state with brighter text or icons, a small underline, or another restrained marker instead of a solid gray tab background.
- Use indentation, spacing, and small dividers to distinguish sections before adding background containers.
- Reserve contrasting surfaces for elements that genuinely need separation, such as menus, popovers, dialogs, and selected overlays.
- Avoid default-looking component-library styling. Customize focus states, checkboxes, tooltips, menus, and dialog spacing to fit the design system.
- Do not put a separate background panel behind chat messages or controls when the intended design is an integrated, continuous surface.
- Avoid permanent selection outlines around visualizations or graph nodes unless they communicate a meaningful state. Keep keyboard accessibility intact.

## 7. Custom controls and grouped actions

**Every interactive control must feel custom-designed and consistent with the interface.** Do not leave basic browser-default widgets or unstyled HTML controls as the final UI.

Build custom-styled controls for:

- Color pickers, color droppers, and swatches.
- Dropdowns, select menus, and autocomplete menus.
- Text fields, search inputs, textareas, and numeric inputs.
- Checkboxes, radio controls, toggles, and sliders.
- Tooltips, context menus, popovers, and dialogs.
- Date pickers, command palettes, and other interactive utilities when needed.

Use semantic HTML and accessible underlying controls where practical, but style and compose them to match the interface. The requirement is a custom UI, not necessarily the Web Components API. Avoid exposing raw native dropdowns, default color inputs, browser tooltips, or generic unstyled blocks when a polished custom control is practical.

### Buttons and grouped controls

- Group related adjacent buttons into one cohesive pill or segmented control. Do not scatter neighboring actions as unrelated buttons when they form one toolbar or action group.
- Apply this to sidebars, editor toolbars, modal actions, search controls, media controls, and navigation utilities.
- Make the primary action obvious through contrast. Keep secondary actions quiet but discoverable.
- Use consistent control heights, padding, icon sizing, and corner treatment within each group.
- Icon-only buttons need a clear purpose, a useful custom tooltip, and an accessible name.
- **Standalone icon buttons must not have their own visible border, outline, ring, boxed background, or individual card-like container by default.** Keep the icon directly on the page or toolbar surface. On hover or press, use a subtle icon-color change or a very light background change only when needed. Preserve accessible focus visibility with a restrained `:focus-visible` indicator, not a permanent decorative border.
- If multiple icon actions belong to one toolbar or action group, the group may have a shared container or pill treatment, but do not draw a separate border around each icon.
- Tooltips should be compact, readable, correctly positioned, and visually consistent. Avoid browser-default tooltips when a custom tooltip is practical.
- Keep hover and pressed states subtle. Do not make controls jump or change dimensions during interaction.
- Avoid a row of visually identical high-emphasis buttons.
- Never make a control look interactive if it does nothing.

### Context menus and right-click actions

- Use right-click context menus when they improve workflows for list items, files, folders, notes, media items, canvas objects, or other objects with relevant actions.
- Show actions appropriate to the item and its state. Do not add a context menu where there are no meaningful actions.
- Keep context menus compact, custom-styled, and consistent with the rest of the interface. Group related actions and use subtle separators where useful.
- Include clear actions such as rename, duplicate, move, copy, delete, or inspect only when those actions are valid for the selected object.
- Support keyboard access through a context-menu key or an equivalent action menu. Provide a practical touch-friendly alternative on devices without right-click.
- Dismiss menus predictably on Escape, outside click, or after an action when appropriate. Manage focus and avoid opening menus outside the viewport.

## 8. Search, navigation, and indexes

- Search should often be a centered, pill-shaped input rather than a lone search-icon button, especially for tool indexes and quick switchers.
- Where appropriate, support a keyboard shortcut such as `Ctrl+K` to open search or a command palette.
- Place filters near the search input. Present results in a vertical list.
- Keep results in their natural or filesystem order unless sorting is part of the requested feature.
- For a selected file or row, brighten the text and icon. Do not move the selected item to the top or add oversized highlight decoration unless requested.
- Keep navigation labels direct and short. Do not add a logo or brand tagline to a compact or logo-free header when one is not requested.
- Omit previews by default in directory and index pages unless requested.
- Design complete search states: empty, loading, results, no results, keyboard selection, and error states.
- Keep tabs and navigation controls directly on the background. Do not place them inside gray blocks; distinguish the active state with text, icons, or a restrained marker.

## 9. Dialogs, popovers, and overlays

- **The menu/dialog panel itself must be `#0a0a0a`.** Apply this exact background to dropdowns, context menus, popovers, command palettes, autocomplete panels, select menus, and floating overlay surfaces. Do not use `#171717` or `#262626` for these panels. The backdrop behind the panel is a separate layer and should use translucent near-black.
- Keep the backdrop dark and restrained. It should dim the page without creating a flat gray haze.
- Never give overlays, menus, popovers, or command palettes a sharp, high-contrast outline. Prefer a subtle dark edge and soft drop shadow. A light backdrop blur is suitable for translucent surfaces when it improves separation, but avoid stacking heavy border, blur, and shadow effects.
- Keep overlay text readable, with a clear action hierarchy and enough contrast against the surface.
- Confirmation dialogs should state the decision plainly, such as “Move this item to trash?” Make the title easy to scan and the actions unambiguous.
- Use enough text size and spacing for dialogs to feel deliberate, not cramped or browser-default.
- Clicking outside a floating prompt or popover should dismiss it when that behavior is expected and safe. Do not dismiss destructive confirmation dialogs unexpectedly.
- Support Escape where appropriate and restore focus sensibly when a dialog closes.
- Ensure overlays can be exited by keyboard and pointer. Avoid trapping the user in a prompt.
- Keep modal action buttons grouped and aligned. Make destructive actions clear without unnecessarily loud color treatment.
- Audit stacking order, viewport overflow, backdrop click targets, scroll locking, and focus management.

## 10. Editors, notes, and graph views

For note apps, Markdown editors, and text workspaces:

- The writing area is the main product. Give it useful space and avoid wasting a large portion of the screen on empty margins.
- Keep editor controls compact. Use pill-like grouped controls for related toolbar actions.
- Use direct, understated placeholders that explain what the user can do. Add placeholder animations only when they serve the interface.
- Render Markdown when the user expects rendered Markdown. Do not expose raw formatting in a view mode unless specifically requested.
- A selected note in a sidebar should be identifiable mainly through brighter text and icon treatment. Preserve filesystem order.
- Keep themes consistent across editor text, sidebar, search, graph, menus, dialogs, and tooltips.
- For graph views, make node labels legible and prevent text selection when it interferes with dragging. Keep arrows visible against the background.
- Hide an empty graph when there are no meaningful linked notes if that is the intended behavior.
- Remove accidental outlines or low-contrast label styles that make the graph look broken.
- Preserve established note data and links when changing the presentation layer.

## 11. Music and media interfaces

For music players, mixers, and streaming-style interfaces:

- Keep controls monochrome and compact. Let album artwork provide most of the color when artwork is present.
- Search results should show relevant information such as artwork, title, and artist, with a clear loading state.
- Lyrics should prioritize legibility. If inactive lines are blurred, keep the active line clear and readable.
- Player controls, track selection, volume, fade, bass, and booster controls should feel like one coherent system.
- Avoid algorithmic backgrounds, decorative animated backgrounds, or external GIF dependencies unless specifically requested.
- Handle API failure, CORS, unavailable media, loading, and empty-result states explicitly. Do not make the UI pretend media is available when it is not.
- Optimize animations and audio visualizations for stable performance on lower-end hardware.
- Respect explicit exclusions of third-party media, archive, or streaming services.

## 12. Portfolio, landing pages, and visual experiments

- For personal sites, prefer minimal, neutral styling and one focused composition instead of a conventional marketing page full of feature cards, unless the request calls for a different approach.
- Use subtle grain only when it serves the design. Do not add texture by default.
- A fullscreen canvas or shader effect is a project-specific option, not the default for application interfaces.
- When using WebGL or canvas effects, control performance costs and avoid effects that feel too weak to notice or that clip content on mobile.
- Effects such as CRT distortion, molten metal, liquid glass, inverted domes, warped text, shiny text, fuzzy text, and falling text are experiments. Use them only when the current project calls for them.
- Do not reintroduce previously removed content, visual experiments, or unrelated UI without a clear reason.
- Include link previews or project previews only when requested.

## 13. Motion, scrolling, and interaction feel

Motion is a core part of the design system. Interfaces should feel smooth, responsive, and deliberately connected. Use motion to explain state changes and make components feel polished, not to decorate every pixel.

### Motion principles

- Give interactive components a considered transition for hover, focus, pressed, selected, opening, closing, loading, and completion states whenever movement improves clarity.
- Keep feedback immediate. Never delay a click, typing, selection, navigation, or other action while waiting for an animation to finish.
- Use short, consistent durations rather than slow, theatrical transitions. As starting points, use 100–160 ms for micro-interactions, 140–200 ms for control-state changes, 160–220 ms for menus and popovers, and 180–280 ms for larger view changes. Most everyday UI transitions should finish quickly. Avoid transitions over 300 ms unless the movement genuinely needs more time.
- Use a consistent easing system. Prefer a smooth ease-out curve for elements entering and a quicker exit curve for elements leaving. Exits are usually a little faster than entrances. Avoid default linear movement, bounce, elastic overshoot, or exaggerated spring effects unless the feature explicitly calls for them.
- Use small movement distances. A subtle 4–8 px translation or a very slight scale change is usually enough for menus and panels. Avoid large slides, zooms, or components flying across the screen for ordinary actions.
- Preserve visual continuity. When a panel, menu, tab, list, or view changes, make it clear what appeared, disappeared, expanded, collapsed, or became selected.
- Keep layout stable during animation. Do not make neighboring elements jump or cause layout shifts to create a motion effect.
- Avoid animating everything. Use stronger motion for meaningful transitions and nearly invisible feedback for frequently used controls. Never add animation only to make a page feel busy.
- Use staggered entrances sparingly and only for short, meaningful groups. Do not delay long lists item-by-item or make repeated everyday actions feel slow.
- Use CSS transitions and keyframes for straightforward effects. Add a motion library only if the experience truly needs complex sequencing or choreography.

### Smooth scrolling

- Enable native smooth scrolling for anchor navigation and deliberate programmatic scrolls when it improves orientation. Use `scroll-behavior: smooth` as a simple default for suitable page layouts, and provide a reduced-motion override.
- Keep ordinary wheel, trackpad, keyboard, and touch scrolling native and predictable. Never hijack the scroll wheel, apply artificial inertia, or install a heavy smooth-scroll library just to make normal scrolling appear animated.
- Give anchor targets an appropriate `scroll-margin-top` when sticky headers might cover them.
- Use scroll-linked effects only when they communicate meaningful progress or hierarchy. Prefer CSS scroll-driven animations as progressive enhancement where supported; the page must remain usable without them.
- Avoid excessive parallax, scroll-jacking, long scroll-reveal delays, or hiding important content until a JavaScript animation fires.

### Component motion patterns

- Buttons: transition color, background, border, and opacity smoothly. Optional pressed feedback should be tiny and must not change layout dimensions. Do not make buttons bounce or jump.
- Inputs and search: transition focus, border, placeholder, and result states cleanly without shifting the input or losing caret responsiveness.
- Menus, dropdowns, tooltips, and popovers: use a short opacity transition plus a small translate or subtle scale. Keep the origin aligned with the control that opened them. Close promptly and avoid leaving invisible overlays intercepting clicks.
- Dialogs: fade the backdrop separately from the dialog. The dialog may enter with a subtle translate and scale. Keep dismissal as responsive as opening and preserve focus behavior.
- Tabs and segmented controls: animate a restrained active indicator or background transition. Keep labels in place and avoid full-width sliding effects unless they improve orientation.
- Accordions and expandable sections: animate height or clipping carefully without jarring jumps. Respect content size changes and avoid hard-coded heights that clip text.
- Lists and search results: make selection, filtering, insertion, and removal transitions subtle. Keep natural order and avoid gratuitous movement of unaffected rows.
- Loading and success states: use restrained progress or feedback motion only when it communicates real system activity. Do not fake progress or add perpetual decorative spinners.

### Performance and accessibility

- Prefer animating `transform` and `opacity` for movement and entrance effects. Use color transitions for small state changes. Avoid repeatedly animating layout-triggering properties such as `top`, `left`, width, or height when transforms or another technique can achieve the same result.
- Avoid expensive blur, large shadows, filters, and full-screen animated effects on frequently changing elements. Use `will-change` only after profiling shows it is needed, not as a global default.
- Aim for smooth, stable animation and 60 FPS where practical, especially on lower-end devices. Test with real interaction, not only a static screenshot.
- Respect `prefers-reduced-motion: reduce`. Remove nonessential movement, disable smooth scrolling, and replace long transitions with immediate or brief state changes. Never rely on motion alone to communicate information.
- Every transition must preserve keyboard navigation, focus visibility, readable content, and the ability to interact before the transition completes.
- Avoid flashing, flicker, shader artifacts, constantly moving decoration, cursor trails that interfere with precision, and any animation that harms reading or clicking.

## 14. Accessibility and usability

- Maintain clear text contrast even when the overall palette and decoration are low contrast.
- Every interactive element must be usable with a keyboard and expose an accessible name.
- Provide visible but restrained keyboard focus states. Do not remove focus indication globally to eliminate an outline from one graph or canvas.
- Use semantic HTML elements, accessible custom controls, and correct input labels.
- Do not rely on color alone to show selection, errors, loading, or success.
- Keep click and touch targets practical, especially on small screens.
- Ensure modals, context menus, dropdowns, and search overlays support expected keyboard interactions.
- Avoid selectable text only in interaction-heavy regions where selection interferes with dragging or manipulation. Keep ordinary document text selectable.

## 15. Performance and implementation preferences

### Preferred stack

- Default to one self-contained `index.html` using semantic HTML5, modern CSS, and minimal vanilla JavaScript when practical.
- Avoid React, Vue, Tailwind, or a component library by default unless the current request, existing codebase, or required functionality calls for them.
- If the project already uses a framework, follow its established architecture rather than rebuilding without need.
- Keep dependencies light. Do not introduce a library for a small interaction that is straightforward to implement safely.
- Lucide icons are a preferred option. When a project already specifies the Lucide CDN, follow that setup and initialize icons appropriately.
- Keep CSS tokens centralized and reusable. Avoid repeating hardcoded colors across components.
- Use semantic controls rather than clickable generic containers where possible. Customize their presentation to meet the design requirements in this guide.
- Keep code readable, self-contained when requested, and easy to edit.

### Performance expectations

- Target responsive interactions and stable animation, with 60 FPS as a goal for animation-heavy experiences when the device permits it.
- Optimize for low-end devices and constrained hosting environments.
- Avoid excessive DOM work, repeated layout reads, unnecessary polling, expensive blur filters, and heavyweight effects that do not improve the experience.
- Account for static hosting limitations, API CORS rules, missing environment variables, and persistence limitations.
- Avoid relying on secrets embedded in client-side code. If a backend secret is required, design an appropriate server-side boundary. Do not label a client-side key as secure.
- Include robust loading, empty, error, and fallback states.
- Do not claim an integration works until the relevant code path and likely hosting constraints have been checked.

## 16. Content and writing style inside products

- Use plain, specific language.
- Keep labels short and useful. Prefer “Search notes” over abstract labels.
- Avoid unnecessary marketing copy, generic status messages, fake activity states, and verbose onboarding.
- Avoid em dashes in prose. Avoid hashtags unless the requested content needs them. Do not use emojis in code.
- Do not add explanatory labels merely to fill space.
- Preserve existing terminology and product identity unless the user asks to rename them.
- Make error messages actionable. Say what failed and what the user can do next.

## 17. Strong anti-patterns

Avoid these unless explicitly requested:

- Gradients, neon accents, or colorful glows.
- Bright borders around every component.
- Borders, outlined boxes, or individual containers around standalone icons or icon-only buttons.
- Giving every icon button its own circular or square background when the icon can sit directly on the interface.
- Excessive cards nested inside cards.
- Oversized hero sections and quick-picks panels on index pages.
- Generic logos, taglines, and decorative status labels.
- Huge empty columns inside editor or workspace layouts.
- A selected item that changes position just because it was selected.
- Permanently gray or dim text on important selected elements.
- Disconnected buttons that belong in one group.
- Default browser tooltips, unstyled checkboxes, raw native dropdowns, default color pickers, or generic modal appearance.
- Gray tab strips, generic gray tabs, and unnecessary background blocks behind ordinary content.
- Light-theme or dark-theme components that fail to switch with the rest of the UI.
- Unrequested previews, unrelated experiments, decorative backgrounds, or added features.
- Animations that flicker, clip, reduce readability, or waste resources.
- Overusing lighter gray backgrounds, or using medium gray as the dominant surface in dark mode.
- Slow, bouncy, excessive, or purely decorative transitions on routine UI actions.
- Hijacking native scrolling, forced inertia, excessive parallax, or scroll effects that delay access to content.
- Rewriting the entire project when a focused fix would solve the problem.
- Declaring an issue fixed without checking the relevant layout and interaction states.

## 18. Practical design tokens and component defaults

These values are starting points, not hard requirements. Match the existing app and adjust where necessary.

```css
:root {
  --page-gutter: clamp(16px, 3vw, 32px);
  --section-gap: clamp(40px, 7vw, 88px);
  --control-height: 40px;
  --control-height-compact: 32px;
  --radius-control: 999px;
  --radius-panel: 14px;
  --border-width: 1px;
  --motion-fast: 120ms;
  --motion-standard: 180ms;
  --motion-enter: 220ms;
  --motion-exit: 150ms;
  --ease-standard: cubic-bezier(0.2, 0, 0, 1);
  --ease-enter: cubic-bezier(0, 0, 0.2, 1);
  --ease-exit: cubic-bezier(0.4, 0, 1, 1);
}

.control {
  min-height: var(--control-height);
  border: 1px solid var(--border);
  border-radius: var(--radius-control);
  background: transparent;
  color: var(--text);
  transition:
    background-color var(--motion-standard) var(--ease-standard),
    border-color var(--motion-standard) var(--ease-standard),
    color var(--motion-standard) var(--ease-standard);
}

.control:hover {
  background: var(--surface-hover);
}

:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 3px;
}
```

Use these motion and scrolling defaults as a starting point. Tune them to the component, not by applying every effect everywhere:

```css
html {
  scroll-behavior: smooth;
}

.motion-control {
  transition:
    color var(--motion-standard) var(--ease-standard),
    background-color var(--motion-standard) var(--ease-standard),
    border-color var(--motion-standard) var(--ease-standard),
    opacity var(--motion-fast) var(--ease-standard),
    transform var(--motion-fast) var(--ease-standard);
}

.motion-enter {
  animation: motion-enter var(--motion-enter) var(--ease-enter) both;
}

@keyframes motion-enter {
  from {
    opacity: 0;
    transform: translateY(6px) scale(0.99);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

Use the entry animation only for components that benefit from it, such as a menu or popover. Do not apply it to every list row or every page element.

Use similarly restrained styling for floating surfaces and scrollbars:

```css
.floating-surface {
  /* Required panel color. Do not override with a lighter surface token. */
  background: #0a0a0a;
  color: var(--overlay-text);
  border: 1px solid var(--overlay-edge);
  border-radius: var(--radius-md);
  box-shadow: var(--overlay-shadow);
}

* {
  scrollbar-color: var(--scrollbar-thumb) transparent;
  scrollbar-width: thin;
}

::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: var(--scrollbar-thumb);
  border-radius: 999px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--scrollbar-thumb-hover);
}
```

Use backdrop blur only when a floating surface is translucent and benefits from it. Do not add a bright outline or stack heavy borders, blur, and shadows.

Do not force every panel into the same component class. Keep the design system cohesive without making every element look identical.

## 19. AI workflow for future tasks

Before changing code:

1. Read the relevant source files and identify the existing architecture, features, dependencies, and constraints.
2. Determine the exact changes requested. Keep unrelated features unchanged.
3. Apply this guide only where it fits the project's actual purpose and current requirements.
4. Prefer targeted patches when the project already works. Rewrite only when requested or when the current structure prevents a proper fix.
5. Check desktop and mobile layouts, supported themes, and relevant empty, loading, and error states.
6. Inspect overlays, right-click menus, keyboard behavior, custom controls, tooltips, grouped actions, overflow, focus states, motion timing, smooth scrolling, and reduced-motion behavior when affected. Verify the computed background of every floating menu and overlay panel is exactly `#0a0a0a`, with no component-level override. Check that standalone icons have no permanent border or boxed container, while preserving a clear keyboard focus indicator.
7. Verify the output exists and is complete before sharing it. Do not link to an unverified path.
8. State what changed and mention known limitations honestly. Do not claim tests were run if they were not.
9. For a React or other multi-component UI page, first write a compact `<design_plan>` preflight describing the intended layout, visual hierarchy, palette, interaction patterns, and risks to verify. For a simple vanilla HTML change, keep the plan internal unless asked to show it.

## 20. Reusable prompt for another AI

**Component reuse is required:** inspect `../Components/Modernimal.html` first, reuse a matching component when one exists, and adapt it to the current context rather than copying blindly or inventing a duplicate pattern.

Read `ui-design-style-guide.md` before designing or modifying the project. Treat it as the default visual and implementation standard, while following the current request over older preferences. Build a custom, minimal, near-black, neutral interface with restrained borders, readable typography, no gradients by default, and no unnecessary sections or decoration. Keep `#0a0a0a` as the dominant background and overlay-backdrop color. Use lighter shades rarely: `#171717` only for slight surface separation, and `#262626` mainly for small hover states and subtle edges. Do not use lighter grays as large background fills. Use only this palette unless the feature or current request clearly requires otherwise: `#0a0a0a`, `#171717`, `#262626`, `#404040`, `#525252`, `#737373`, `#a3a3a3`, `#d4d4d4`, `#e5e5e5`, `#f5f5f5`, and `#fafafa`. Never introduce teal or blue tints. Keep ordinary content directly on the page background instead of placing it in gray tabs or generic gray panels. Use a vertical list layout by default, with clear indentation, visual hierarchy, and small separators where useful.

Treat motion as a first-class part of the UI. Make components feel smooth, responsive, and connected with brief, purposeful transitions for hover, focus, press, selection, menus, popovers, dialogs, tabs, expanding sections, and result changes. Use consistent easing, short durations, subtle fades, and small translations or scale changes. Keep interactions immediate and avoid bouncy, slow, or decorative animation. Use native smooth scrolling for anchor and programmatic navigation where appropriate, but never hijack wheel, touch, trackpad, or keyboard scrolling. Prefer `transform` and `opacity` for animated movement, keep the experience performant on low-end hardware, and respect `prefers-reduced-motion`.

**Mandatory overlay color: every floating menu and overlay panel, including dropdowns, context menus, popovers, command palettes, autocomplete panels, select menus, and dialogs, MUST use `#0a0a0a` as its actual background. Do not use `#171717`, `#262626`, gray, gradients, or tinted/translucent colors as the panel fill. Keep the dimming backdrop separate from the panel.** Use subtle dark edges or soft shadows instead of sharp, contrasting borders. **Never put a visible border, outline, ring, or boxed background around a standalone icon or icon-only button.** Keep lone icons directly on the surrounding surface; use subtle brightness changes for hover and selection. Group related icon actions into a cohesive pill if needed, using one shared treatment rather than an individual border around each icon. Preserve a restrained keyboard focus indicator for accessibility. Keep scrollbars barely visible with a thin, low-opacity thumb and transparent track. Create custom-styled controls for color pickers, dropdowns, inputs, tooltips, and context menus rather than exposing browser-default widgets. Add right-click actions when useful, with keyboard and touch alternatives. Group related buttons into cohesive pill controls. Preserve existing features, file order, architecture, and terminology unless asked to change them. Prefer semantic HTML, modern CSS, minimal vanilla JavaScript, and a self-contained HTML file when practical. Inspect color balance, motion timing, scrolling, reduced-motion behavior, theme consistency, keyboard navigation, overlays, mobile overflow, and performance before calling the work complete.

## One-line summary

Quiet, monochrome, carefully spaced interfaces with custom controls, strong typography, restrained surfaces, list-first layouts, clear hierarchy, purposeful motion, and no unnecessary decoration.
