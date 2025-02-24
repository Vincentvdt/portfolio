# Next.js Starter

A **Next.js Starter Template** with all the essentials to kickstart your projects. This setup allows you to build both **frontend-only** and **full-stack** applications with flexibility.

---

## 🚀 Features

- **Next.js (latest version)** – SSR, SSG, API Routes
- **React 18 with TypeScript** – Type-safe development
- **Tailwind CSS & Tailwind UI** – Modern styling
- **next-i18next** – Internationalization (i18n)Zustand – Lightweight, cosmic state management
- **Zustand** – Lightweight, cosmic state management
- **ESLint & Prettier** – Code linting & formatting
- **Husky & Lint-Staged** – Pre-commit hooks for code quality
- **Vercel-ready** – Easily deploy to Vercel
- **Flexible Deployment** – Can also be deployed to Netlify, Cloudflare Pages, DigitalOcean, or self-hosted solutions

---

## 📁 Project Structure

```
next-starter/
├── public/                 # Static assets (favicons, images)
├── src/
│   ├── components/         # Reusable UI components
│   ├── layouts/            # Page layouts
│   ├── pages/              # Next.js Pages (or use app router)
│   ├── api/                # Backend routes if needed
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions (e.g., fetching data)
│   ├── store/              # Zustand stores for state management
│   ├── styles/             # Tailwind global styles
│   ├── locales/            # i18n translations
│   ├── types/              # TypeScript types
│   ├── config.ts           # Global settings
├── .husky/                 # Husky hooks
├── .eslintrc.json          # ESLint rules
├── .prettierrc             # Prettier rules
├── next.config.js          # Next.js configuration
├── tailwind.config.ts      # Tailwind settings
├── package.json            # Dependencies and scripts
```

---

## 🔧 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-repo/next-starter.git
cd next-starter
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Start the Development Server
```sh
npm run dev
```

---

## 💫 State Management with Zustand

This project includes a simple cosmic store using **Zustand**. Check out the file `src/store/useGalacticStore.ts`:


```js
// src/store/useGalacticStore.ts

import { create } from 'zustand';

export const useGalacticStore = create((set) => ({
  // Cosmic counter: the number of stars you've collected
  starCount: 0,
  // Launch a star to power up your cosmic energy!
  launchStar: () => set((state) => ({ starCount: state.starCount + 1 })),
}));
```

Use this store in your components to manage global state in a fun, lightweight way.

---

## 🌍 Internationalization (i18n)

This project uses **next-i18next** for multilingual support.

### **Configuration**
Modify `next-i18next.config.js`:
```js
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },
};
```

Modify `next.config.js`:
```js
const { i18n } = require('./next-i18next.config');
module.exports = { i18n, reactStrictMode: true };
```

### **Adding Translations**
Create translation files in `src/locales`:

📂 **`src/locales/en/common.json`**
```json
{
  "welcome": "Welcome to my website"
}
```

📂 **`src/locales/fr/common.json`**
```json
{
  "welcome": "Bienvenue sur mon site"
}
```

### **Using Translations in a Component**
```tsx
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home() {
  const { t } = useTranslation('common');
  return <h1>{t('welcome')}</h1>;
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
```

---

## 🎨 Styling with Tailwind CSS

Tailwind is pre-configured in this setup.

Modify `tailwind.config.ts` to customize styles:
```ts
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

---

## ✅ Code Quality Tools

### **ESLint & Prettier**
- ESLint is set up with Next.js defaults.
- Prettier is configured for consistent formatting.

Modify `.eslintrc.json`:
```json
{
  "extends": ["next/core-web-vitals", "eslint:recommended", "plugin:prettier/recommended"]
}
```

Modify `.prettierrc`:
```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2
}
```

### **Husky & Lint-Staged**
Prevents bad commits by running linting before commit.

Modify `package.json`:
```json
"lint-staged": {
  "**/*.{js,ts,tsx}": "eslint --fix",
  "**/*.{js,ts,tsx,json,md}": "prettier --write"
}
```

Enable Husky:
```sh
npx husky add .husky/pre-commit "npx lint-staged"
```

---

## 🚀 Deployment

### **1️⃣ Deploy to Vercel (Default)**
```sh
vercel
```

### **2️⃣ Deploy to Other Platforms**
✅ **Netlify** → `netlify deploy`
✅ **Cloudflare Pages** → Use `wrangler publish`
✅ **Self-hosted / VPS** → Build & run:
```sh
npm run build
npm start
```

---

## 🛠 Customization

- **Add Database** → Use `prisma`, `mongoose`, or `typeorm`.
- **Authentication** → Use `next-auth`.
- **CMS Integration** → Sanity, Strapi, or Contentful.
- **Analytics** → Google Analytics, Vercel Analytics.

---

## 🚧 Future Enhancements

The following features are planned for future updates. They are currently tracked in our GitHub Issues and Project Board:

- **SWR Integration:**
For improved data fetching and caching.

- **Custom Layouts & Providers:**
To further modularize the UI and manage global contexts more effectively.

- **XML Sitemap Generation:**
To enhance SEO by providing an up-to-date sitemap for search engines.

---
## 📜 License
This project is licensed under the MIT License.

