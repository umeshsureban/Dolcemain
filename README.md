# Dolce Hotels and Resorts — Landing Pages

Corporate travel landing page for Dolce Hotels and Resorts, Parsippany NJ.  
Built with React 19, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## Project Structure

```
dolcemain/
├── app/                    # React application
│   ├── public/
│   │   └── images/         # All hotel images and assets
│   ├── src/
│   │   ├── components/     # Navigation, BookingBar, SectionReveal, UI components
│   │   ├── sections/       # Page sections (Hero, Rooms, Dining, etc.)
│   │   ├── App.tsx         # Root component
│   │   └── index.css       # Global styles & Dolce brand tokens
│   ├── package.json
│   └── vite.config.ts
└── README.md
```

## Local Development

```bash
cd app
npm install
npm run dev
```

App runs at `http://localhost:5173`

## Build for Production

```bash
cd app
npm run build
```

Output goes to `app/dist/`.

## Deployment

| Platform | Build Command | Publish Directory |
|----------|--------------|-------------------|
| Netlify  | `cd app && npm install && npm run build` | `app/dist` |
| Vercel   | `cd app && npm run build` | `app/dist` |
| Hostinger / Static Host | `cd app && npm install && npm run build` | `app/dist` |

> **Node version:** 18+ recommended

## Tech Stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS 3
- Framer Motion 12
- Radix UI (shadcn/ui components)
- Lucide React icons
