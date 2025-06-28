# 🧠 Dr. Serena Blake | Clinical Psychologist Website

A professionally styled and responsive website for **Dr. Serena Blake, PsyD**, a licensed clinical psychologist based in Los Angeles, CA. Built using **Next.js 14**, **Tailwind CSS**, and **Shadcn/UI**, the site reflects a calming, elegant design inspired by [drjenniferhahm.com](https://www.drjenniferhahm.com/).

> 🔗 **Live Site**: [https://your-vercel-site.vercel.app](https://your-vercel-site.vercel.app)  
> *(Replace with your actual deployed Vercel URL)*


---

## ✅ Features

- ✨ Elegant design inspired by therapist websites
- 🎥 Hero section with **fullscreen video background**
- 📱 Fully **mobile-friendly and responsive**
- 🧠 Professionally styled **services**, **FAQ**, and **about** sections
- 🧾 Interactive **FAQ accordion with animations** (Shadcn)
- 📨 **Contact form** with complete **field validation**
- 🖼️ Uses soft textures, gentle color palette, and typography suited for therapy and wellness services

---

## 🛠 Tech Stack

- **Next.js 14** with **App Router**
- **Tailwind CSS**
- **Shadcn/UI** for animated FAQ accordion
- **React Hooks** for form handling and validation
- **Custom CSS background textures** (Transparent Textures)

---

## 🧩 Section Breakdown

### 🔹 Hero
- Video background (`hero-bg.mp4`)
- Headline + Subheadline
- CTA: “Book a Free Consultation”

### 🔹 About
- Textured beige background
- Dr. Blake's credentials, approach, and mission
- Image of Dr. Serena Blake

### 🔹 Services
- Three services:
  - Anxiety & Stress Management
  - Relationship Counseling
  - Trauma Recovery
- Each service has an image and description

### 🔹 FAQ
- Built with Shadcn’s animated accordion
- Questions include:
  - Do you accept insurance?
  - Are online sessions available?
  - What is your cancellation policy?

### 🔹 Contact
- Clean, single-column layout
- Required fields with real-time validation:
  - Name, Phone, Email, Message, Time, Consent
- Contact Info Footer with textured beige background

### 🔹 Footer
- Full-width footer with © Dr. Serena Blake, All Rights Reserved

---

## 📁 Folder Structure
├── app/
│ ├── components/
│ │ ├── About.tsx // About section
│ │ ├── Contact.tsx // Contact form + contact info
│ │ ├── FAQ.tsx // Accordion-based FAQ using shadcn/ui
│ │ ├── Hero.tsx // Hero section with background video
│ │ ├── Services.tsx // Three service cards with images
│ ├── layout.tsx // Global layout with metadata
│ └── page.tsx // Home page with all components
├── public/
│ ├── images/
│ │ ├── dr-serena.jpg // Therapist headshot
│ │ ├── anxiety.jpg // Image for Anxiety & Stress service
│ │ ├── relationship.jpg // Image for Relationship Counseling
│ │ └── trauma.jpg // Image for Trauma Recovery
│ └── videos/
│ └── hero-bg.mp4 // Background video for hero
├── styles/
│ └── globals.css // Tailwind directives & base styles
├── tsconfig.json // TypeScript + path aliases
├── tailwind.config.ts // Tailwind configuration
├── postcss.config.js // PostCSS config
├── package.json // Project metadata and dependencies
└── README.md // Project description and instructions
