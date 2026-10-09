# Cyber Security Awareness & Digital Safety Platform

An academic, frontend-only public digital safety website built as a third-semester engineering Community Engagement Program (CEP) project for demonstration and submission.

> **Privacy & Integrity Core**: Deliberately built with zero tracking, no backend, no authentication, no external AI, and no database. Collects zero personal data. All scenarios and names used are strictly fictional educational simulations.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (light theme design system, accessible high-contrast colors, CSS variables)
- **Icons**: `lucide-react`
- **Data Layer**: Static, strictly-typed local TypeScript files (`/src/data/`)

---

## 🎨 UI & Design System

Following modern public safety & educational UI best practices:
- **Clean Light Palette**: Crisp off-white (`slate-50`), card backgrounds (`white`), and trustworthy deep teal (`teal-700`) as the primary accent.
- **Hierarchy & Negative Space**: 8pt spacing grid with generous breathing room, clean rounded containers (`rounded-2xl`, `rounded-3xl`), and subtle 1px border lines (`border-slate-200`).
- **Standardized Callout Alerts**:
  - 🟡 **Warning Signs (Amber)**: For deceptive patterns, red flags, and fraud triggers.
  - 🟢 **Safe Actions (Emerald)**: For verified habits and preventive protocols.
  - 🔵 **Takeaways (Sky/Teal)**: For core golden rules.
- **Simulated Scam Previews**: Fictional SMS/WhatsApp styled message bubbles with sender tags and timestamp badges.
- **Print-Ready Checklist**: `@media print` optimized one-page A4 reference sheet hiding non-print elements.
- **Official Emergency Reference**: Prominently highlights the National Cyber Fraud Helpline **1930** and official reporting portal `cybercrime.gov.in`.

---

## 📁 Project Structure

```
cyber-safety/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout with skip-to-content accessibility
│   │   ├── globals.css        # Clean light theme & print styles
│   │   ├── page.tsx           # Home: Hero, 4 threats, 3 steps, survey
│   │   ├── learn/
│   │   │   ├── page.tsx       # 7-topic curriculum grid
│   │   │   └── [slug]/page.tsx# Topic detail (scenarios, warning signs, safe actions)
│   │   ├── quiz/page.tsx      # 10 scenario-based questions with SMS bubbles & instant feedback
│   │   ├── safety/page.tsx    # Safety Center with 1930 & recovery workflows
│   │   ├── about/page.tsx     # Academic motivation, CEP objectives, survey fallback
│   │   ├── checklist/page.tsx # Printable 1-page A4 Scam Safety Checklist (window.print)
│   │   └── not-found.tsx      # Friendly 404 page
│   ├── components/
│   │   ├── Navbar.tsx         # Sticky navigation with 1930 quick badge & mobile menu
│   │   ├── Footer.tsx         # Academic metadata, 1930 helpline banner, disclaimer
│   │   ├── TopicCard.tsx      # Interactive card with icon and arrow transitions
│   │   ├── Callout.tsx        # High-contrast Alert boxes (warning, safe, info)
│   │   ├── QuizCard.tsx       # Tactile MCQ cards with letters A-D and instant locking
│   │   ├── MessageBubble.tsx  # Fictional SMS/WhatsApp chat simulation
│   │   ├── ProgressBar.tsx    # Accessible quiz progress tracker
│   │   └── Button.tsx         # Primary & secondary button/link variants
│   └── data/
│       ├── types.ts           # Shared TypeScript interfaces
│       ├── topics.ts          # 7 typed educational topics
│       ├── quiz.ts            # 10 scenario MCQs (3 with message bubbles)
│       ├── survey.ts          # Community survey state (default null/empty)
│       └── engagement.ts      # Community engagement state (default null/empty)
```

---

## 🚀 Running the Project

1. **Install dependencies**:
   ```bash
   npm install
   ```
2. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.
3. **Production build**:
   ```bash
   npm run build
   ```

---

## 📝 Editing Data for CEP Submissions

- **Update Survey Data**: In `src/data/survey.ts`, update `totalResponses` and add items to `highlights: [{ label: string, value: string }]`.
- **Update Engagement Sessions**: In `src/data/engagement.ts`, update `peopleReached` and populate `sessions: [{ title, date, venue, description, photos }]`.
- If either file has `null` or empty arrays, the platform automatically renders a clean fallback message.
