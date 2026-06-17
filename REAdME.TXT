========================================================================
PERSONAL PORTFOLIO WEBSITE - README
========================================================================

Project Name: Personal Portfolio Website
Developer   : Yazar Hussain
Role        : Frontend Developer & Passionate Technologist
Location    : Karachi, Pakistan
Contact     : yazarhussain06@gmail.com

------------------------------------------------------------------------
1. PROJECT OVERVIEW
------------------------------------------------------------------------
This project is a highly interactive, responsive, and visually striking
personal portfolio website engineered to showcase academic progress, 
technical skills, and software engineering projects. It is built using 
clean frontend architecture with vanilla technologies (HTML5, CSS3, JS).

------------------------------------------------------------------------
2. DESIGN PHILOSOPHY & UI/UX
------------------------------------------------------------------------
- Theme: Modern dark-mode cyberpunk aesthetic with deep obsidian surfaces
  and radiant neon cyan accents.
- Typography: 
  * 'Syne' for bold, expressive display headers.
  * 'Space Mono' for code/technical tags and micro-copy.
  * 'Inter' for clean, optimized body text readability.
- Interactivity: Smooth transition curves, hover lighting micro-effects,
  and localized background ambient glows.

------------------------------------------------------------------------
3. FILE ARCHITECTURE & COHESION
------------------------------------------------------------------------
The repository follows a clean, decoupled folder structure:

├── index.html        # Main semantic markup and structure
├── css/
│   └── style.css     # Responsive styles, grid layouts & design variables
└── js/
    └── main.js       # Asynchronous engines, observers & state mechanics

------------------------------------------------------------------------
4. DETAILED COMPONENT BREAKDOWN
------------------------------------------------------------------------

[A] HTML5 Structure (index.html)
- Fully semantic layouts containing logical content regions: Hero landing,
  About Matrix, Technical Skills track, Academic Projects directory, 
  Asymmetric Timeline (Experience & Education), and standard contact form.

[B] CSS3 Engineering (style.css)
- Fluid Typography: Uses CSS `clamp()` logic to enable responsive scaling
  across global viewports without breaking layouts.
- Backdrop Matrix: Combines linear-gradient grid tiles with absolute masks
  (radial-gradients) to create non-intrusive backdrop illumination.
- Layouts: Formed with adaptive Flexbox arrays and structured CSS Grids.

[C] Vanilla JavaScript Logic (main.js)
- Asynchronous Typewriter Loop: Cycles through distinct professional 
  titles using dynamic deletion intervals.
- Viewport Intersection Observers: Tracks scroll entries to trigger reveal
  animations and fill skill track percentages only when visible.
- 3D Perspective Parallax: Computes real-time cursor offsets to apply 
  dynamic 3D rotations (rotateX/rotateY) on project feature cards.
- Sticky Navigation State: Applies backdrop blur filters upon downward 
  scrolling and programmatically updates active menu highlight targets.
