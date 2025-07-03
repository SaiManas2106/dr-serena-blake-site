# 🌿 Dr. Serena Blake – Therapist Website

A clean, mobile-responsive therapist website for Dr. Serena Blake built using **Next.js 14**, **Tailwind CSS**, and **Shadcn/UI**. Features include a video hero section, service highlights, an animated FAQ, and a styled contact form with validation.

🌐 **Live Demo**: [https://dr-serena-blake-site.vercel.app/](https://dr-serena-blake-site.vercel.app/)

---

## 📸 Features

- ✨ Elegant Hero section with background video
- 📖 About section with textured background
- 🧠 Three service cards with relevant images
- 🎯 Responsive FAQ accordion with smooth animation (Shadcn/UI)
- 📬 Contact form with validation and styled contact info
- 📱 Fully responsive for desktop and mobile

---

## 🚀 Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS**
- **TypeScript**
- **Shadcn/UI** for FAQ animations
- **Vercel** (deployment)

---

## 📁 Folder Structure

```
├── app/
│   ├── components/
│   │   ├── About.tsx               # About section
│   │   ├── Contact.tsx             # Contact form + contact info
│   │   ├── FAQ.tsx                 # Accordion-based FAQ using shadcn/ui
│   │   ├── Hero.tsx                # Hero section with background video
│   │   ├── Services.tsx            # Three service cards with images
│   ├── layout.tsx                  # Global layout with metadata
│   └── page.tsx                    # Home page with all components
├── public/
│   ├── images/
│   │   ├── dr-serena.jpg           # Therapist headshot
│   │   ├── anxiety.jpg             # Image for Anxiety & Stress service
│   │   ├── relationship.jpg        # Image for Relationship Counseling
│   │   └── trauma.jpg              # Image for Trauma Recovery
│   └── videos/
│       └── hero-bg.mp4             # Background video for hero
├── styles/
│   └── globals.css                 # Tailwind directives & base styles
├── tsconfig.json                   # TypeScript config + path aliases
├── tailwind.config.ts              # Tailwind configuration
├── postcss.config.js               # PostCSS config
├── package.json                    # Project metadata and dependencies
└── README.md                       # Project description and instructions
```

---

## 🛠️ Setup Instructions

1. **Clone the repo**
   ```bash
   git clone https://github.com/yourusername/dr-serena-blake-site.git
   cd dr-serena-blake-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. Visit [http://localhost:3000](http://localhost:3000) in your browser to view the site.

---

## 🧪 Contact Form Fields & Validation

- **Name** (required)
- **Phone** (required)
- **Email** (required)
- **What brings you here?** (textarea, required)
- **Preferred time to reach you** (required)
- **Checkbox**: I agree to be contacted (required)
- Inline error messages shown for missing/invalid fields

---

## 💬 Most Interesting & Challenging Part

Designing a calming, professional aesthetic was exciting. The biggest challenge was building a validated contact form and ensuring consistent layout across all devices while keeping the UI elegant and accessible.

---

## 📹 Suggested Video Demo Flow

- Open site on desktop and mobile views to show responsiveness.
- Scroll through each section: Hero, About, Services, FAQ.
- Fill and submit the contact form (show validation errors first).
- Highlight FAQ animations and final footer/contact info.

---

## 🪪 License

This project was created for educational and presentation purposes only.
