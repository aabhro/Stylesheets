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

Use this palette as the default starting point. Adapt it only when the project requires another palette or the user explicitly asks for one.

### Dark theme

```css
:root {
  color-scheme: dark;
  --bg: #0a0a0a;
  --surface: #101010;
  --surface-raised: #151515;
  --surface-hover: #1b1b1b;
  --border: #262626;
  --text: #f5f5f5;
  --text-secondary: #d4d4d4;
  --text-muted: #a3a3a3;
  --overlay: rgba(0, 0, 0, 0.76);
  --shadow: 0 12px 36px rgba(0, 0, 0, 0.28);
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
  --surface: #ffffff;
  --surface-raised: #ffffff;
  --surface-hover: #f2f2f2;
  --border: #e5e5e5;
  --text: #0a0a0a;
  --text-secondary: #262626;
  --text-muted: #525252;
  --overlay: rgba(0, 0, 0, 0.42);
  --shadow: 0 12px 36px rgba(0, 0, 0, 0.10);
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
- Use rounded corners with restraint. Pills work well for search fields, compact actions, toggles, status controls, and grouped buttons. Larger panels should use a moderate radius when a panel is genuinely needed.
- Shadows should be soft and subtle. Use stronger shadows mainly for overlays that need separation from the page.
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

- Give overlays a visibly darker backdrop, readable text, and a clear action hierarchy.
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

## 13. Motion and interaction

- Motion should be smooth, brief, and purposeful. Use it to show state changes, hierarchy, entry, or continuity.
- Prefer restrained fades, small translations, and subtle scale changes. Avoid bouncy, overshooting, or constantly moving UI by default.
- Preserve layout stability. Interactions should not shift neighboring content unexpectedly.
- Use animation only when it improves understanding or creates a requested effect.
- Respect `prefers-reduced-motion` and provide a usable nonanimated path.
- Keep interactive effects performant. Avoid per-frame React state updates for visual effects when a canvas or direct animation loop is more appropriate.
- Do not run decorative animations indefinitely when they consume meaningful CPU or GPU resources without adding value.
- Avoid flashing, flicker, shader artifacts, barely visible cursor trails, and effects that interfere with reading or clicking.

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
  --ease-standard: cubic-bezier(0.2, 0, 0, 1);
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

Do not force every panel into the same component class. Keep the design system cohesive without making every element look identical.

## 19. AI workflow for future tasks

Before changing code:

1. Read the relevant source files and identify the existing architecture, features, dependencies, and constraints.
2. Determine the exact changes requested. Keep unrelated features unchanged.
3. Apply this guide only where it fits the project's actual purpose and current requirements.
4. Prefer targeted patches when the project already works. Rewrite only when requested or when the current structure prevents a proper fix.
5. Check desktop and mobile layouts, supported themes, and relevant empty, loading, and error states.
6. Inspect overlays, right-click menus, keyboard behavior, custom controls, tooltips, grouped actions, overflow, and focus states when affected.
7. Verify the output exists and is complete before sharing it. Do not link to an unverified path.
8. State what changed and mention known limitations honestly. Do not claim tests were run if they were not.
9. For a React or other multi-component UI page, first write a compact `<design_plan>` preflight describing the intended layout, visual hierarchy, palette, interaction patterns, and risks to verify. For a simple vanilla HTML change, keep the plan internal unless asked to show it.

## 20. Reusable prompt for another AI

Read `ui-design-style-guide.md` before designing or modifying the project. Treat it as the default visual and implementation standard, while following the current request over older preferences. Build a custom, minimal, near-black, neutral interface with restrained borders, readable typography, no gradients by default, and no unnecessary sections or decoration. Keep decoration low contrast while keeping content clear and accessible. Use a vertical list layout by default, with clear indentation, visual hierarchy, and small separators where useful. Keep ordinary content directly on the page background instead of placing it in gray tabs or generic gray panels. Create custom-styled controls for color pickers, dropdowns, inputs, tooltips, context menus, and other interactive elements rather than exposing browser-default widgets. Add right-click actions when they are useful, with keyboard and touch alternatives. Group related buttons into cohesive pill controls. Preserve existing features, file order, architecture, and terminology unless asked to change them. Prefer semantic HTML, modern CSS, minimal vanilla JavaScript, and a self-contained HTML file when practical. Inspect layout, theme consistency, keyboard behavior, context menus, overlays, mobile overflow, and performance before calling the work complete.

## One-line summary

Quiet, monochrome, carefully spaced interfaces with custom controls, strong typography, restrained surfaces, list-first layouts, clear hierarchy, purposeful motion, and no unnecessary decoration.
