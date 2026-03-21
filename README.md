# Syed Agha — Freelance Full-Stack Developer Portfolio

> A single-page personal portfolio website built entirely with vanilla HTML, CSS, and JavaScript — no frameworks, no build tools, no dependencies.

## 🔗 Live Site

**[syed-agha.github.io/portfolio-website](https://syed-agha.github.io/portfolio-website)**

---

## 📁 File Structure

```
portfolio-website/
├── index.html          ← Single-page portfolio (all 7 sections)
├── style.css           ← All styles, animations & responsive design
├── script.js           ← All JavaScript functionality
├── sitemap.xml         ← SEO sitemap submitted to Google Search Console
├── robots.txt          ← Search engine crawl configuration
└── photo.PNG           ← Profile photo (hero section)
└── proj-designart.PNG  ← designart tracking page image
```

---

## 🛠️ Technologies

| Technology | Usage |
|---|---|
| HTML5 | Semantic page structure, SEO meta tags, JSON-LD schema |
| CSS3 | Layout, animations, keyframes, responsive grid |
| Vanilla JavaScript | All interactivity — no libraries or frameworks |
| Google Fonts | Cormorant (serif display) + Outfit (body) |
| Formspree | Contact form backend (email delivery to agha69428@gmail.com) |
| GitHub Pages | Hosting and auto-deployment |

---

## 📄 Sections

| Section | Content |
|---|---|
| **Home** | Hero with 3D floating photo, animated availability badge, floating identity tags, 4-column stats bar |
| **About** | Bio, education timeline (Matric → Inter Pre-Engineering → BS CS), animated skill bars |
| **Projects** | DesignArt Portal — full-image card, hover reveal overlay, live link |
| **Services** | Website Development, Full-Stack Web Apps, Bug Fixes & Improvements |
| **Testimonials** | Three 5-star reviews from classmates and a lecturer at PAF-IAST |
| **Contact** | Location, email, WhatsApp + async contact form with success/error states |
| **Footer** | Name · Freelance Full-Stack Developer · Haripur, Pakistan · © 2025 |

---

## ✨ Features

### Animations & Visual Effects
- **Falling leaves canvas** — 30 animated leaf particles with randomised size (3–10px), speed, rotation, sway physics and 6 green colour variants drawn on a fixed `<canvas>`
- **Animated blobs** — 3 blurred radial shapes with continuous `blobFloat` keyframe (translate + scale)
- **3D floating photo** — continuous `float3d` keyframe cycling translateY + rotateX/Y
- **Orbit ring** — dashed circle with spinning dot animating around the photo frame at 15s
- **Floating identity tags** — 3 frosted glass pills (CS Student, Full-Stack Dev, Problem Solver) with staggered `tagFloat` bounce
- **Pulsing badge dot** — the green dot on the "Available for Freelance" badge pulses with opacity + scale
- **Hero text stagger** — `fadeSlideUp` keyframe with delays from 0.1s to 0.55s across all hero elements
- **Scroll reveal** — every section element fades + slides up (35px) via `IntersectionObserver` at 0.1 threshold

### Interactivity
- **Custom cursor** — 10px dot + 38px trailing ring, both driven by `requestAnimationFrame`; scales 2.5× on hover over links/buttons
- **3D mouse parallax** — `photo3d` wrapper tilts ±18° (Y) and ±12° (X) following real-time mouse position
- **3D card tilt** — project cards compute per-mouse `rotateX/Y` on `mousemove`, reset on `mouseleave`
- **Nav shrink on scroll** — padding shrinks from `1.8rem 5rem` to `1.2rem 5rem` and box-shadow appears after 60px
- **Skill bars** — width animates from 0 to target % using `cubic-bezier(0.4,0,0.2,1)` over 1.6s, triggered by scroll
- **Scroll-to-top** — button appears after 400px, smooth scrolls to top on click
- **Services hover** — card lifts 8px, green top bar slides in from left, border darkens
- **Testimonial hover** — card lifts 6px, shadow and border appear
- **Contact item hover** — slides right 4px, icon background and border darken

### Project Card (DesignArt Portal)
- Full-height image background from `proj-designart.png`
- Layered gradient — transparent at top, 92% dark green at bottom
- Title, description, and tech tags always visible at card bottom
- On hover: image scales to 1.06, overlay darkens to 82%, "View Live →" frosted pill fades in from centre
- Entire card is a `<a>` tag — clicking anywhere opens the live site in a new tab

### Contact Form
- Powered by **Formspree** endpoint `mwvrwylr`
- Async `fetch` POST — no page reload on submission
- Button shows "Sending..." and disables during request
- On `response.ok`: green success panel appears, button shows "Sent! ✓", form resets
- On server or network error: red error panel appears, button re-enables

---

## 🔍 SEO Implementation

| Element | Detail |
|---|---|
| Title | `Syed Agha — Freelance Full-Stack Developer Pakistan` |
| Meta description | Targets freelance + internship + remote roles |
| Keywords | `freelance web developer Pakistan`, `full-stack developer Haripur`, `hire PHP developer`, etc. |
| Canonical | `https://syed-agha.github.io/portfolio-website/` |
| Open Graph | Title, description, image, URL, site name — for WhatsApp/Facebook/LinkedIn |
| Twitter Card | `summary_large_image` with title, description, image |
| JSON-LD Schema | `Person` type with name, jobTitle, address, email, telephone, sameAs, knowsAbout, offers |
| sitemap.xml | Single URL entry, `changefreq: monthly`, `priority: 1.0` |
| robots.txt | `Allow: *` + sitemap reference |
| Image SEO | `alt="Syed Agha - Freelance Full-Stack Developer from Haripur Pakistan"` + `loading="lazy"` |

---

## 🎨 Design Tokens

| Variable | Value | Used For |
|---|---|---|
| `--pine` | `#2d4a2d` | Primary text, dark buttons |
| `--leaf` | `#4e7c4e` | Hover states |
| `--sage` | `#7aab6e` | Accents, tags, skill bars, underlines |
| `--mist` | `#c9dfc2` | Subtle tints |
| `--cream` | `#f0ede6` | Text on dark backgrounds |
| `--white` | `#fafaf8` | Page background |
| `--light` | `#e8f0e4` | Section alternate backgrounds |
| Display font | Cormorant | Headings, logo, stat numbers (italic, 300–600) |
| Body font | Outfit | All body text and UI (200–500) |

---

## 📱 Responsive Design

Single breakpoint at `max-width: 960px`:
- Hero: 2-column grid → single column, right photo hidden
- About: 2-column grid → single column
- Stats: 4-column → 2-column
- Projects, Services, Testimonials: grid → single column
- Contact: 2-column → single column
- Nav and footer padding reduces to `1.2rem 1.5rem`

---

## 🚀 Deployment

Hosted on **GitHub Pages** — auto-deploys on every commit to `main`. No build step, no bundler. Raw HTML, CSS, and JS served directly.

---

## 📬 Contact

| | |
|---|---|
| 📍 Location | Pak Austria Fachhochschule, Mang Rd, Haripur, Pakistan |
| ✉️ Email | [agha69428@gmail.com](mailto:agha69428@gmail.com) |
| 📞 WhatsApp | [+92 340 4634839](https://wa.me/923404634839?text=Hi%2C%20I%20saw%20your%20portfolio!) |
| 💼 GitHub | [github.com/Syed-agha](https://github.com/Syed-agha) |

---

*Currently accepting freelance projects and open to internship opportunities. Response within 24 hours.*
