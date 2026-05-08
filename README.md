# LinguaAlive

> Where endangered languages go viral.

LinguaAlive is a platform for learning, creating, and celebrating the world's most underrepresented regional and indigenous languages — from Santali to Quechua to Hawaiian.

## Features

- **Language Explorer** — Browse 13 regional languages with digital health scores and speaker stats
- **Discover** — Stories, poems, proverbs, and songs in native scripts
- **Culture** — Dress, food, festivals, songs, and art from each language community
- **Learning Hub** — Gamified lessons for beginners through advanced learners
- **Games** — Interactive Memory Match, Speed Quiz, and Word Match
- **Puzzles** — Word Scramble, Fill the Story, Word Search
- **Daily Challenges** — Complete tasks to earn XP and maintain streaks
- **AI Conversation Partner** — Practice speaking any language with an AI tutor
- **Community Leaderboard** — Top contributors ranked by XP
- **Platform Stats** — Charts showing language content and status distribution
- **Create** — Submit your own stories, poems, songs, and proverbs

## Tech Stack

- [React 19](https://react.dev/)
- [Vite 7](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) components
- [Recharts](https://recharts.org/) for data visualization
- [Wouter](https://github.com/molefrog/wouter) for routing
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Lucide React](https://lucide.dev/) icons

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, pnpm, or yarn

### Install & Run

```bash
# Clone the repo
git clone https://github.com/your-username/lingua-alive.git
cd lingua-alive

# Install dependencies
npm install
# or
pnpm install

# Start development server (http://localhost:3000)
npm run dev
```

### Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── ui/          # shadcn/ui component library
│   └── Layout.tsx   # Sidebar + main content shell
├── pages/
│   ├── Home.tsx
│   ├── Languages.tsx
│   ├── Discover.tsx
│   ├── Culture.tsx
│   ├── Learn.tsx
│   ├── Games.tsx
│   ├── Puzzles.tsx
│   ├── Challenges.tsx
│   ├── Chat.tsx
│   ├── Leaderboard.tsx
│   ├── Stats.tsx
│   ├── Create.tsx
│   └── mock.ts      # All static data
├── hooks/
├── lib/
├── App.tsx
├── main.tsx
└── index.css
```

## Languages Featured

Cymraeg (Welsh) · Runasimi (Quechua) · Èdè Yorùbá · ʻŌlelo Hawaiʻi · Euskara (Basque) · Te Reo Māori · Odia · Santali · Tulu · Konkani · Kodava · Urdu · Banjara

---

*Preserving voices, one byte at a time.*
