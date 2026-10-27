# Selfpagism

## Purpose

Use this guide to design and build a personal website that feels like someone's own little corner of the internet: a personal homepage, diary, blog, digital scrapbook, fan shrine, visual journal, archive, link page, or lovingly strange website with no commercial purpose.

The site is for self-expression, not professional customers. It does not need to look corporate, polished in a conventional product-design sense, or optimized to sell something. It should feel specific to one person, with a recognizable mood, interests, references, visual obsessions, and a little internet-era personality.

**Core direction:** expressive, image-heavy, personal, handmade, and guided by the owner's taste. Treat the site like someone's actual personal website, not a SaaS landing page, a polished design agency concept, or an AI-generated aesthetic demo. The goal is individuality and atmosphere, not trendy polish.

**This guide and its component files are examples, not a fixed template or a set of restrictions.** The user is free to choose any theme, palette, layout, page count, navigation model, and visual language. Adapt the guide to the user's idea instead of forcing the user into the guide's examples. If their direction conflicts with an optional example below, follow the user's direction.

**Do not confuse dark and edgy with neon-modern.** Dark personal websites do not automatically need glowing red or purple accents, giant display type, gradients, glass panels, soft shadows, or sleek cyberpunk decoration. Use the color, density, background, and graphics from the user's references instead.

**2000s-core GIFs are a defining requirement, not an optional finishing touch.** Use real animated GIFs, blinkies, pixel buttons, decorative separators, tiled textures, and other web-era graphics throughout the design when the chosen theme supports them. A page that only uses a retro font or a nostalgic color palette is not enough.

## One optional structure: animated wallpaper + floating window

The supplied source-code examples demonstrate one possible personal-site composition: a repeating or full-screen animated GIF behind a centered, rectangular page window. It is only a reference pattern. Do not assume every Selfpagism site needs a wallpaper, floating window, sidebar, or any other particular arrangement.

- Ask about the preferred background only when it is not already clear. If the user supplies a background, use that asset rather than replacing it with a random one.
- A centered window with a header, navigation, content, and footer is one option, not a requirement. Choose the structure that suits the user's theme, content, references, and browsing preferences.
- A narrow left navigation rail, central content area, floating windows, a long scrolling page, a loose collage, a plain index, or an experimental layout are all valid when they fit the brief. Do not force a sidebar, three columns, or a central window onto every site.
- **The user's freedom and intention come first.** Treat every visual pattern in this guide as a tool to borrow or alter, not a rule that overrides their taste.
- **Use square corners by default. Set `border-radius: 0`.** Main windows, title bars, navigation areas, frames, image borders, buttons, forms, and content regions should have square corners unless the user specifically asks for rounded styling.
- Use plain 1px borders, simple inset/outset edges, horizontal rules, compact title bars, basic lists, underlined links, ordinary headings, and image-led sections. Small uneven details are better than layers of polished decoration.
- Make animated GIFs and still images part of the composition: a header graphic, small GIF buttons along a rail, decorations positioned around the main window, a background, an image embedded in an article, or a repeating divider.
- A dark page should still feel like an old personal website. Favor a dark wallpaper, flat opaque content surface, ordinary text, simple borders, and the owner's graphics. Do not turn it into a neon dashboard or a contemporary landing page.
- Keep the wallpaper visible outside the page on large screens. On smaller screens, let the main window fit the viewport and scroll naturally. Preserve the same simple rectangular feel without clipping content.
- If a floating panel or a centered window is not appropriate for the user's chosen concept, follow the user's preference instead. Selfpagism is an expressive style, not one mandatory layout.

### Source-code cues from the user's examples

The supplied xsolimini source shows a central content frame, side navigation, multiple small graphic buttons, decorative GIFs positioned around the layout, and repeated image strips. The supplied bokuwatetsuo source shows a background/cover layer, a main content wrapper, simple top navigation, section headings, horizontal rules, large images, an update feed, and a guestbook link.

These are examples of individual techniques, not a required site map or a template to reproduce. Borrow only what suits the user's brief. Do not copy the markup, assets, exact dimensions, or content wholesale.

### Single-page and multi-page websites are both valid

Selfpagism projects can be a single page or a whole collection of connected pages. Do not automatically cram every section into one long HTML file or turn a requested multi-page site into a one-page mockup.

- Ask whether the user has a preferred structure when it is not obvious: one long page, several separate pages, a home page linking to subpages, a diary/archive with dated entries, a shrine, a collection, or another structure.
- For multi-page work, plan a simple information architecture before implementation. Keep navigation and visual identity consistent where useful, but let individual pages have their own layouts when the concept calls for it.
- Create real links between relevant pages, make navigation work from every page, and use correct relative paths for local files. Do not leave decorative links pointing nowhere or use `#` as a substitute for pages the user requested.
- Preserve existing page relationships, filenames, anchors, assets, and working links when editing an existing project. Check for inbound and outbound links before renaming or restructuring files.
- If the user requests a single-page site, keep it single-page. If they request several pages, build the connected pages and cross-links needed. If they have not decided, ask rather than silently choosing a restrictive structure.

## Optional component specimen

See [\u0060Components/Selfpagism.html\u0060](../Components/Selfpagism.html) for one standalone example themed around the Stylesheets repository. It demonstrates reusable patterns such as GIF embeds, blinkies, 88×31-style buttons, stamps, tiled textures, dividers, status panels, archive rows, an update log, webring-style links, and a guestbook form.

**The specimen is a demonstration, not a default design or required template.** Its theme, component selection, page layout, and content are only examples. Never carry its look into another project automatically, and never assume the user wants every component shown. Reuse, restyle, rearrange, or ignore any of it based on the user's own direction. The user has complete freedom to choose a different aesthetic, layout, content model, and number of pages.

## 1. Survey the owner before building

**For a new Selfpagism site, theme discovery is a required first step. Do not start coding or decide the finished visual direction until you have asked about the user's theme, unless their request and references already make the direction clear.** Do not ask again for details they already supplied. When the theme is unclear, pause implementation and ask one compact set of questions first.

Keep the survey conversational and short. Make it easy for the user to answer in their own words or skip details. Ask the most important questions together rather than sending a long questionnaire.

Cover these points, combining them naturally into a few questions:

1. **Theme and mood:** What should the site feel like? Examples include gothic, grunge, glittery Y2K, cute, dreamy, cyber, romantic, nature-inspired, maximalist, webcore, or something entirely different. These are prompts, not preset themes.
2. **Structure:** Do they picture one long page or multiple connected pages? Are there page types they want, such as a home page, diary, gallery, shrine, links page, or archive?
3. **Content and assets:** What should appear on the site, and do they have any images, GIFs, backgrounds, Pinterest links, or other references to use?

A concise starter message could be: “What theme and mood are you going for? Do you picture one page or several connected pages, and do you have any references or assets you want me to use?” Adapt it to the context rather than repeating it mechanically.

**After asking, wait for the user's answer before building.** Do not treat the survey as optional or silently guess a theme. Exceptions: the user has already stated the theme and enough structural direction, explicitly says to surprise them or make the choices, or asks for a quick implementation where the direction is unmistakable. In those cases, proceed without redundant questions and make sensible, clearly grounded choices.

If the user says “surprise me,” that is permission to choose the direction, not a reason to fall back to this component specimen unchanged. Make a distinctive proposal that suits their context. Never turn the process into a long intake form.

### Working with references and assets

- Prefer the user's own images and references over generic stock imagery. Their choices are the strongest clues to the site's identity.
- Treat Pinterest links as references for mood, color, composition, imagery, and decoration. Do not assume that a Pinterest page URL is a direct image URL or hotlink page HTML as an asset.
- Ask for a direct image URL or an upload when a reference cannot be accessed or its image cannot be reliably reused. Do not pretend to have seen an inaccessible link.
- When an image is only inspiration, do not copy an entire site or artwork. Translate the reference into a distinct composition for this person.
- Use placeholder slots for missing personal images, and make them easy to replace. Do not silently replace requested assets with unrelated stock photos.
- Do not invent the user's personal history, identity, favorite artists, relationships, or interests. Keep unknown content editable or ask.
- If the user provides a folder or a collection of assets, inspect it and make meaningful use of the assets. Do not merely say the page is image-heavy while leaving their images unused.

## 2. Core visual philosophy

### Personal, not professional

Make it feel owned. This is not a business homepage, agency portfolio, product launch page, creator sales funnel, or generic influencer landing page.

- Avoid the standard hero headline, subtitle, primary CTA, feature cards, testimonials, pricing sections, and polished marketing-page rhythm unless the user explicitly asks for them.
- Do not add fake product metrics, professional status labels, invented testimonials, or generic marketing copy.
- Use first-person language and specific details when the user supplies them. Let the page's subject and references determine its personality.
- Allow the design to be imperfect in an intentional way: a sticker overlaps a frame, a tiny graphic interrupts a divider, a note sits at an angle, a sidebar feels collected over time.
- Prefer personality and visual specificity over universal neatness. The result should not look interchangeable with another person's site.

### Expression over uniformity

Build a visual language that matches the chosen theme. Use irregular rhythm, layered imagery, decorative frames, nested areas, uneven columns, inline graphics, text treatments, patterned surfaces, and small surprises where they make sense.

Intentional clutter is welcome. Accidental confusion is not. The page should feel rich and personal while users can still understand where they are, read the main content, and find important links.

Do not apply one universal Selfpagism template to every request. A pastel diary, an aggressive black-and-red page, a strange digital archive, and a dreamy blue personal blog should not end up with the same layout wearing different colors.

## 3. The 2000s web language

**Treat early-web graphics as core visual material. Use actual graphics, not just nostalgic references in the copy.**

Use an appropriate mix of the following elements based on the user's theme:

- Animated GIFs as ornaments, accents, tiny illustrations, looping characters, sparkles, hearts, flames, stars, glitter, or mood graphics.
- Blinkies and animated micro-banners, including the classic narrow horizontal badge style.
- Small 88×31-style web buttons, fan buttons, link-me buttons, badges, stamps, and pixel-art labels.
- GIF dividers, repeating pattern tiles, star fields, checkerboards, hearts, lace, stripes, clouds, noise, tiny flowers, or other themed textures.
- Under-construction graphics, guestbook graphics, webring-style links, visitor counters, update logs, stamps, and link directories when they suit the page.
- Marquee-like moving text or decorative ticker strips when the user wants that old-web energy. Recreate the effect with modern, controllable CSS rather than relying on obsolete HTML behavior.
- Pixel art, tiny icons, old-web buttons, cutout images, stickers, hand-made banners, and low-resolution graphics alongside larger photographs and illustrations.
- Layered scrapbook elements, scans, doodles, scans of paper, handwritten notes, photo strips, collage fragments, and deliberately varied image sizes.
- Distinctive old-web typography, such as compact system fonts, pixel fonts, bitmap lettering, serif text, decorative display fonts, or handwritten styles, chosen for the theme rather than applied indiscriminately.

### GIFs must be visible and distributed

Place multiple animated or GIF-based elements across the page, not all in one isolated gallery. Consider a header graphic, one or more blinkies, decorative dividers, small ornaments beside text, GIF buttons, and themed images embedded between sections.

Choose GIFs for their actual visual contribution. They can be cute, unsettling, funny, glittery, rough, low-resolution, moody, or strange. The aim is not to stuff random animations into the page. It is to make the site feel like a personally assembled corner of the early web.

If the user has not supplied graphics, ask for them first. If they want you to source suitable graphics, use relevant assets from sources that permit reuse, check the target asset rather than relying on a preview alone, and keep the style coherent. Do not substitute emojis for requested GIFs. If a particular graphic cannot be sourced reliably, use a clearly replaceable placeholder instead of pretending it is a real asset.

Use authentic period-inspired cues without copying a single reference site wholesale. The old-web vocabulary is a toolbox, not a strict historical reconstruction. A modern implementation can preserve the DIY spirit while remaining usable on current browsers.

## 4. Let the user's aesthetic lead

Never force a default palette or mood. The chosen theme controls the colors, texture, density, type, imagery, and ornament.

### Possible directions

These are examples to help interpret a brief, not a menu that limits what can be built.

- **Pink, cute, glittery:** pinks, bows, hearts, sparkles, animated cutouts, candy-like buttons, cute characters, lace or checkerboard textures.
- **Dark, edgy, or emo:** deep backgrounds, stark accent colors, rough textures, distressed graphics, dark photography, tiny warning labels, expressive text, and unsettling or ironic GIFs.
- **Cyber, webcore, or Y2K:** dense graphics, pixel lettering, animated banners, saturated accents, metallic or digital textures where appropriate, and deliberately retro navigation.
- **Dreamy or romantic:** soft colors, translucent-looking imagery, stars, clouds, diary fragments, handwritten notes, photo collages, and slow decorative motion.
- **Grunge or alternative:** photocopied textures, torn-paper motifs, uneven image edges, rough typography, muted or clashing colors, and DIY collage.
- **Personal archive or digital scrapbook:** collections of images, saved snippets, dated entries, stamps, buttons, marginal notes, and navigation that resembles a growing archive.
- **Minimal-but-personal:** a quieter page can still include unusual imagery, selected GIFs, a distinctive layout, and personal details. Do not turn minimalism into a generic professional portfolio.

The user might want an entirely different style. Follow their references and explain any assumptions before making major visual choices.

## 5. Layout and composition

- Start with the content and imagery that matter to this person, then make a layout around them. Do not start from a generic template and insert personal content afterward.
- Use image-led composition. Photos, illustrations, animated graphics, tiles, buttons, and decorative details should occupy a meaningful portion of the page.
- Use collages, sidebars, stacked sections, small windows, irregular columns, layered decorations, long scrolling layouts, image strips, and themed navigation when appropriate.
- A centered fixed-width page, table-inspired layout, or browser-window composition can be appropriate for an old-web look. So can a fluid, wide, or experimental page. Choose based on the concept.
- Repeated content does not have to be presented as clean modern cards. Use lists, diary entries, image grids, scrapbook strips, folders, text fragments, mini windows, or other forms that fit the theme.
- Make navigation part of the personality. Useful labels include “diary,” “about me,” “shrines,” “collections,” “links,” “guestbook,” or names the user invents. Avoid generic labels that sound like a business site.
- Use small dividers, decorative labels, image clusters, and uneven spacing as rhythm. Do not decorate every single element equally.
- Allow a little visual chaos without destroying hierarchy. Keep primary navigation recognizable and the main reading area reasonably legible.
- Avoid empty space that makes the page feel unfinished. Space can still be deliberate, especially in atmospheric or minimal concepts.
- Make the page look considered at the actual target size, not only as a screenshot of the first viewport. Continue the visual language throughout the site.

## 6. Backgrounds, texture, and ornament

Backgrounds and decorations should be selected with the user, not guessed as a generic finishing layer.

- Ask whether they want a tiled pattern, illustrated background, photograph, texture, flat color, layered wallpaper, or another treatment.
- Repeating GIF or image tiles are encouraged when they fit the early-web style. Use small patterns at a scale that feels intentional instead of stretching a tiny tile until it becomes blurry.

### Full-screen animated wallpaper must actually cover the viewport

When the user supplies a background GIF, use that exact asset. Do not replace it with a vaguely similar image or make the GIF merely a small gallery item. Unless the user asks for a tiled wallpaper, make it cover the entire viewport behind the floating site window.

- **Prefer a direct GIF/image URL or a local asset first.** For a direct image used as a CSS background, use `background-size: cover`, `background-position: center`, and a viewport-sized fixed layer. For an `img` element, use `width: 100%`, `height: 100%`, and `object-fit: cover`. Preserve the aspect ratio and crop edges rather than stretching the image out of proportion.
- **Do not assume an embedded GIF provider respects CSS sizing.** Tenor and similar embed widgets often insert their own player, wrapper, aspect-ratio rules, or iframe. Setting the outer element to `100vw × 100vh` or adding `object-fit: cover` to the iframe does not necessarily resize the actual media inside it. Provider-created letterboxing can remain visible.
- **If an embed leaves gray/black bands, scale the actual iframe/player up and crop it.** Put it inside a fixed `inset: 0` viewport wrapper with `overflow: hidden`; center the media with `left: 50%`, `top: 50%`, and `transform: translate(-50%, -50%) scale(1.4)` (or another scale large enough to cover the viewport). Start around `1.4` to `1.7` when needed, then visually tune it for the specific embed. Keep the wrapper at `width: 100vw`, `height: 100vh`, and clip every overflow edge. Target the iframe/player itself, not only its parent.
- Keep the background layer behind the page window with a lower `z-index`, and keep the window above it. Set a deliberate fallback background color in case the GIF fails to load. A subtle dark overlay is acceptable only when it suits the theme and leaves the GIF visibly moving around the window.
- **Check the real rendered page.** Inspect the top, bottom, left, and right edges on desktop and mobile. If any unintentional blank bands remain, increase the scale or switch to the direct image URL. Do not claim the wallpaper is fixed based on CSS inspection alone. If you cannot preview it live, state that visual verification remains untested.
- Avoid blindly applying `width: 100vw`, `height: 100vh`, `object-fit: fill`, or a changed `aspect-ratio` to a third-party iframe and assuming this guarantees coverage. The provider's internal player can ignore or override those dimensions.
- Use layered backgrounds, decorative borders, frames, corner ornaments, tape, pins, scribbles, pixel accents, star fields, or stickers as the chosen theme calls for them.
- Make the main content readable over busy backgrounds. Use a themed text area, patterned border, inset surface, or local backdrop when needed, without making every section a generic card.
- Colors may clash deliberately when it is part of the intended aesthetic. They should still feel chosen, rather than accidentally inherited from unrelated assets.
- Do not default to black, grayscale, pink, neon, or gradients. Use the supplied palette and reference images as the guide.
- Avoid bland contemporary design conventions that erase the visual character: generic rounded card grids, oversized empty hero sections, soft beige minimalism, and repetitive icon buttons.

## 7. Content and writing

The page should sound like the owner, not a company.

- Ask what personal sections, interests, links, writing, images, and collections they want to show.
- Use short, casual, intimate, funny, weird, earnest, or dramatic copy to match the owner's desired tone.
- Keep diary entries and personal writing editable. Do not invent detailed memories or claim the user likes something they have not mentioned.
- Temporary labels such as “under construction,” “last updated,” “currently listening,” or “currently obsessed with” can add personality when they are relevant. They should not be added automatically just to fill space.
- A guestbook, hit counter, web ring, now-playing area, mood display, status note, favorites list, or update log is optional. Include only the ones that fit the concept.
- Make links feel like part of a little personal world. Keep them functional and make visited, hover, focus, and active states understandable.
- Do not replace personal content with generic marketing slogans or AI-sounding filler.

## 8. Motion and interaction

The page should feel alive, but the motion must suit the specific mood.

- Let animated GIFs provide much of the authentic early-web motion.
- Use small, purposeful CSS animations for hover effects, decorative movement, image reveals, text tickers, blinking indicators, or layered elements when they help the concept.
- Motion can be playful, odd, rough, or theatrical. Avoid making every image float, spin, glow, or bounce at once.
- Do not hijack scrolling or prevent normal browser navigation.
- Avoid rapid flashing that could trigger discomfort. Respect `prefers-reduced-motion` and provide static or lower-motion treatments for effects controlled by CSS when practical.
- Preserve keyboard navigation, visible focus, readable text, useful link names, and touch-friendly controls without sterilizing the visual style.
- Keep the experience responsive. On mobile, rearrange overlapping elements, sidebars, and image clusters so they remain usable rather than blindly shrinking the desktop composition.
- Compress large images and avoid heavy full-page effects that make the page sluggish.

## 9. Implementation preferences

- Prefer semantic HTML5, modern CSS, and minimal vanilla JavaScript. A self-contained `index.html` is a good default when practical, but preserve an existing project's framework and architecture.
- Build for ordinary modern browsers. Recreate the feeling of old HTML and Flash effects with CSS or lightweight JavaScript rather than requiring obsolete plugins.
- Keep the content and graphics easy for the owner to replace. Use clearly named asset paths, CSS variables, and simple data structures where useful.
- Use meaningful alt text for informational images. Mark purely decorative GIFs and textures as decorative for assistive technology.
- Avoid excessive JavaScript, dependencies, layout-shifting animations, and oversized assets.
- Check the actual page at desktop and mobile sizes. Make sure background textures tile correctly, GIFs load, links work, images do not overflow, and the design remains understandable when an asset fails. For a full-screen GIF background, confirm the animation covers all four viewport edges with no player letterboxing; CSS sizing on an embed wrapper alone is not proof.
- Respect the current request and the project's technical constraints. This stylesheet governs aesthetic decisions, not permission to remove useful functionality.

## 10. Anti-patterns

Avoid these unless the user explicitly requests them:

- Treating the site as a professional portfolio, startup landing page, customer-facing business, or generic blog theme.
- Making the result sterile, overly minimal, or interchangeable.
- Applying the same template to every user and changing only the accent color.
- Turning the page into a neon-modern or cyberpunk dashboard with glowing accents, huge display typography, gradients, glassmorphism, blur layers, or glossy surfaces when those are not in the user's references.
- Using a modern landing-page hero, bento grid, repeated rounded cards, pill navigation, rounded buttons, or an app-like component layout as the default.
- Rounding every corner. Use square corners by default. Do not use large border radii unless the user explicitly asks for them.
- Hiding the animated wallpaper behind a full-screen modern layout. The wallpaper should remain visible around the floating central page when that composition is used.
- Leaving blank, gray, or black letterbox bands around a requested full-screen wallpaper. For provider embeds, resize the actual iframe/player or use a direct GIF asset; if necessary, zoom the player inside a clipped viewport wrapper until the frame covers every edge.
- Making the wallpaper a subtle afterthought. When the chosen concept calls for an animated GIF background, make it a meaningful, visible part of the page design.
- Assuming pink, black, neon, anime, or kawaii is the default.
- Using only a retro font while omitting the graphics and GIFs that give the design its character.
- Replacing GIFs with emojis, generic icon libraries, or static gradients.
- Filling the page with unrelated stock imagery instead of asking for personal assets.
- Ignoring Pinterest links, screenshots, images, backgrounds, or other references the user provides.
- Inventing personal details, memories, favorites, status updates, or relationships.
- Making every section a contemporary rounded card or bento grid.
- Overusing decorations until text, navigation, and links become unusable.
- Adding a guestbook, hit counter, cursor trail, music autoplay, visitor counter, or other nostalgia feature without considering whether the user wants it.
- Using autoplay audio, pop-up spam, or unbounded flashing effects.
- Copying a reference website wholesale rather than creating a distinct page for this person.
- Claiming to have viewed an image, site, or asset when it was inaccessible.

## 11. Build workflow

1. Review the user's brief, existing project, files, and supplied references.
2. For a new site, survey the user about theme and structure before building if either is unclear. Wait for their answer. Do not ask redundant questions when the brief already answers them or the user has delegated the creative choices.
3. Extract a short design direction from the user's answers: mood, palette, imagery, typography, texture, layout, density, page count, navigation, and key GIF motifs.
4. Plan the site structure around the user's content and goals. Decide whether it is one page or a connected multi-page site based on their answer; map page relationships and links before coding when needed.
5. Treat this guide, the component specimen, and the reference sites as inspiration only. Follow the user's chosen direction even when it differs from the examples.
6. Build the requested page or connected pages with a substantial, intentional use of imagery and visible 2000s-core GIF details where they suit the theme.
7. Check desktop and mobile layouts, reading comfort, keyboard access, reduced motion, asset loading, performance, and all navigation and cross-page links.
8. Verify that the result feels like the user's own site, not a stock template. Explain what was created, what references or assets were used, and what remains easy to customize. Be honest about anything you could not access or verify.

## 12. Reference shelf

Use these as inspiration and inspect them directly when accessible. Study their individual decisions, not just a screenshot or a broad aesthetic label. Do not copy them wholesale.

- [Subtopia](https://subtopia.neocities.org/home/)
- [xsolimini.fr](https://xsolimini.fr/)
- [bokuwatetsuo.net](https://bokuwatetsuo.net/)
- [Blinkies.cafe](https://blinkies.cafe/), a reference for the classic narrow animated blinkie format.

The first three links are the user's chosen design references and should take priority when accessible. The user's supplied source-code excerpts are also important structural references. The blinkies resource is a small utility for one kind of old-web graphic, not a design template.

## One-line summary

A personal, image-rich little internet world with a distinct mood, real 2000s-core GIFs, handmade decoration, expressive layouts, and enough individuality that it could belong to only one person.
