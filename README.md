# CodeAlpha_Portfolio-
# Personal Portfolio Website

A sleek, interactive, and production-grade personal portfolio website designed to showcase my academic trajectory, technical skills, and development projects. Built using a clean frontend architecture with vanilla technologies, the platform serves as a responsive digital resume tailored for software development and networking opportunities[cite: 1, 2].

## Live Demo
*✨ Insert your live hosting link here (e.g., GitHub Pages, Netlify, or Vercel) ✨*

---

## Design Philosophy & UI/UX
The website features a modern, high-contrast dark-mode theme inspired by cyberpunk engineering aesthetics.
*   **Color Palette:** Deep obsidian backgrounds contrasted with vibrant, glowing neon cyan accents and subtle ambient glows.
*   **Typography:** Dual-font structure utilizing **Syne** for expressive, bold geometric headers, **Space Mono** for technical layout tags, and **Inter** for optimized reading legibility[cite: 1, 2].
*   **Micro-interactions:** Smooth transition states, responsive hover ripples, and contextual lighting effect adjustments across card interfaces[cite: 2, 3].

---

## 🛠️ Technical Features & Architecture

### 1. Semantic Markup & Structural Flow (`index.html`)
*   Completely structured with semantic HTML5 elements for optimized layout parsing.
*   Divided into logical, highly cohesive sections: Hero Landing, About Me, Technical Skills matrix, Academic Projects, Interactive Timeline (Experience/Education), and an Asynchronous Contact region.

### 2. Advanced Layouts & Engineering Rules (`style.css`)
*   **Fluid Responsive Typography:** Implements modern CSS `clamp()` logic to enable smooth viewport scaling without breaking container constraints[cite: 2].
*   **Futuristic Backdrop Mechanics:** Combines linear-gradient grid patterns with mask images (`mask-image: radial-gradient(...)`) to build a localized, responsive background grid[cite: 2].
*   **Hardware-Accelerated Components:** Implements custom scrollbars, complex CSS grid architectures, and hardware-friendly `cubic-bezier` timing curves for state changes[cite: 2].

### 3. Native Dynamic Systems (`main.js`)
*   **Asynchronous Typewriter Engine:** A state-driven loop mechanism that cycles smoothly through professional definitions with tailored deletion intervals[cite: 3].
*   **Performance-First Viewport Observations:** Integrates the native browser `IntersectionObserver` API to track element entries, triggering scroll-reveal animations and filling technical skill tracks only when visible to reduce unnecessary rendering overhead[cite: 3].
*   **3D Perspective Parallax Tilt:** Tracks cursor coordinate offsets (`clientX`/`clientY`) against the local bounding boxes of project items to calculate real-time 3D rotational values (`rotateX`/`rotateY`), creating an elegant depth interaction on hover[cite: 3].
*   **State-Aware Floating Navigation:** Monitors active window coordinates to apply a background blur filter (`backdrop-filter`) on scroll and programmatically sets active link state text indicators based on section threshold visibility[cite: 2, 3].

---

## Repository Structure
```text
├── css/
│   └── style.css      # Core styles, responsive system & variables[cite: 1, 2]
├── js/
│   └── main.js        # DOM interaction, loops, trackers & form engine[cite: 1, 3]
├── index.html         # Main semantic structure and project index[cite: 1]
└── README.md          # Project comprehensive guide
