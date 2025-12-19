# Cristian Tesconi - Portfolio

Portfolio personale semplificato di un ingegnere robotico e dell'automazione.

## 🚀 Caratteristiche

### Frontend (React + Vite)
- ⚛️ React 18 con TypeScript
- 🎨 TailwindCSS con tema dark/light personalizzato (default: dark)
- 🌍 Internazionalizzazione IT/EN (i18next)
- 📱 Design responsive e mobile-first
- ♿ Accessibilità WCAG 2.1 AA
- 🔍 SEO ottimizzato con meta tags e structured data
- 🍪 Gestione cookie consent
- 🎭 Animazioni con Framer Motion
- 📚 Pagina dedicata ai libri pubblicati
- 📄 CV scaricabile in PDF

### Deployment
- 🚀 Ottimizzato per Vercel
- ⚡ Build veloce con Vite
- 📦 Monorepo con workspace pnpm

## Project Structure

```
ct-web-site+blog/
├── config/
│   ├── app.config.json           # Configurazione generale
│   ├── portfolio.config.json     # Dati CV ed esperienze
│   └── books.config.json         # Configurazione libri
├── packages/
│   └── frontend/                 # React + Vite + TypeScript
│       ├── src/
│       │   ├── components/
│       │   │   ├── layout/       # Navbar, Footer, ThemeToggle
│       │   │   ├── portfolio/    # Hero, About, Experience, Skills, Books
│       │   │   └── shared/       # Componenti riutilizzabili
│       │   ├── pages/
│       │   │   ├── Home.tsx      # Homepage con CV
│       │   │   ├── BooksPage.tsx # Pagina libri
│       │   │   └── ContactPage.tsx
│       │   ├── data/             # Dati portfolio e libri
│       │   ├── hooks/            # Custom React hooks
│       │   ├── i18n/             # Internazionalizzazione (IT/EN)
│       │   ├── store/            # Zustand state management (theme)
│       │   ├── styles/           # Global styles e Tailwind
│       │   ├── types/            # TypeScript type definitions
│       │   ├── App.tsx           # Root component
│       │   └── main.tsx          # Application entry point
│       ├── public/               # Asset statici
│       ├── package.json
│       ├── tsconfig.json
│       ├── vite.config.ts
│       └── tailwind.config.js
├── personal/
│   └── CV_CristianTesconi.pdf    # CV in PDF
├── vercel.json                   # Configurazione Vercel
├── package.json                  # Root package.json
├── pnpm-workspace.yaml           # PNPM workspace config
└── README.md
```

## Tech Stack

### Frontend
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS 3.4
- **Routing**: React Router DOM 6
- **State Management**: Zustand
- **i18n**: react-i18next (Italian/English)
- **SEO**: React Helmet Async
- **Cookie Management**: js-cookie
- **Animations**: Framer Motion
- **Icons**: Lucide React

### Build & Deployment
- **Package Manager**: PNPM (monorepo workspaces)
- **Hosting**: Vercel (optimized for static SPA)

## Getting Started

### Prerequisites
- Node.js >= 18.0.0
- PNPM >= 8.0.0 (o npm >= 9.0.0)

## 🚀 Quick Start

1. **Clona il repository**
```bash
git clone <repository-url>
cd ct-web-site+blog
```

2. **Installa le dipendenze**
```bash
# Con pnpm (consigliato)
pnpm install

# Oppure con npm
npm install
```

3. **Avvia il server di sviluppo**
```bash
cd packages/frontend
pnpm dev

# Oppure con npm
npm run dev
```

4. **Apri il browser** su [http://localhost:5173](http://localhost:5173)

### 🔨 Comandi Utili

```bash
# Sviluppo
cd packages/frontend
pnpm dev                 # Avvia dev server
pnpm build              # Build di produzione
pnpm preview            # Anteprima build locale

# Code Quality
pnpm lint               # ESLint check
pnpm lint:fix           # Fix automatico ESLint
pnpm format             # Formatta con Prettier
pnpm typecheck          # TypeScript type checking
```

## 🎨 Personalizzazione

### Modificare i contenuti del CV

I dati del portfolio sono contenuti in:
- `config/portfolio.config.json` - Esperienze, skills, certificazioni
- `packages/frontend/src/data/portfolio.ts` - Dati typescript strutturati

### Modificare i libri

I dati dei libri sono in:
- `packages/frontend/src/data/books.ts`

Formato:
```typescript
{
  id: number,
  title: string,
  description: { it: string, en: string },
  cover: string,
  amazonLink: string
}
```

### Modificare i colori (Branding)

Modifica il file `packages/frontend/tailwind.config.js`:

```javascript
colors: {
  primary: '#4ade80',      // Colore principale
  secondary: '#22d3ee',    // Colore secondario
  // ... altri colori
}
```

### Traduzioni (i18n)

Le traduzioni sono in `packages/frontend/src/i18n/locales/`:
- `it.json` - Italiano
- `en.json` - Inglese

## 🌐 Deployment su Vercel

### Opzione 1: Deploy tramite Dashboard Vercel (Consigliato)

1. **Crea un account su Vercel**
   - Vai su [https://vercel.com](https://vercel.com)
   - Registrati con il tuo account GitHub, GitLab o Bitbucket

2. **Pusha il codice su un repository Git**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repository-url>
   git push -u origin main
   ```

3. **Importa il progetto su Vercel**
   - Clicca su "New Project" nella dashboard Vercel
   - Seleziona il tuo repository
   - Vercel rileverà automaticamente il framework

4. **Configura le impostazioni del progetto**
   - **Framework Preset**: Vite
   - **Root Directory**: Lascia vuoto (usa la root del progetto)
   - **Build Command**: `cd packages/frontend && npm run build`
   - **Output Directory**: `packages/frontend/dist`

5. **Clicca su "Deploy"**
   - Vercel costruirà e deployerà automaticamente il tuo sito
   - Ogni push al branch main trigghererà un nuovo deployment

### Opzione 2: Deploy tramite CLI Vercel

1. **Installa Vercel CLI**
```bash
npm i -g vercel
```

2. **Login su Vercel**
```bash
vercel login
```

3. **Deploy dalla root del progetto**
```bash
# Deploy di produzione
vercel --prod

# Oppure deploy di preview
vercel
```

Vercel leggerà automaticamente le configurazioni dal file `vercel.json`.

### Domini Personalizzati

Per configurare un dominio personalizzato:

1. Vai su **Settings** → **Domains** nella dashboard Vercel
2. Aggiungi il tuo dominio
3. Segui le istruzioni per configurare i DNS

## 📦 Build di Produzione

La build ottimizza automaticamente:
- ✅ Minificazione JavaScript/CSS
- ✅ Tree-shaking delle dipendenze non usate
- ✅ Code splitting automatico
- ✅ Asset optimization (immagini, font)
- ✅ Gzip compression

## 🎯 Performance

Target performance (Lighthouse):
- Performance: > 95
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## 📄 Licenza

Tutti i diritti riservati © Cristian Tesconi

## 👤 Autore

**Cristian Tesconi** - Ingegnere Robotico e dell'Automazione

---

**Nota**: Questo progetto è stato semplificato per il deployment su Vercel. Le funzionalità di blog e autenticazione sono state rimosse per rendere il sito completamente statico e ottimizzato per il deployment serverless.
