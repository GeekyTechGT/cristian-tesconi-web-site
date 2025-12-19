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

## 📚 Architettura Monorepo

Questo progetto utilizza un **monorepo** con **pnpm workspaces**. La struttura è organizzata come segue:

- **Root**: Contiene la configurazione del workspace, scripts comuni e file di configurazione globali
- **packages/frontend**: L'applicazione React + Vite
- **config/**: File di configurazione JSON per contenuti (portfolio, libri, app)
- **personal/**: Asset personali come CV in PDF

### Perché pnpm?

1. **Gestione efficiente delle dipendenze**: pnpm crea un unico store centralizzato, risparmiando spazio su disco
2. **Workspace nativi**: Supporto nativo per monorepo senza configurazioni complesse
3. **Sicurezza**: Strict mode di default previene accessi non dichiarati alle dipendenze
4. **Velocità**: Installazioni più rapide grazie al linking simbolico

## Getting Started

### Prerequisites
- Node.js >= 18.0.0
- **PNPM >= 8.0.0** (RICHIESTO - il progetto usa pnpm workspaces)

> ⚠️ **IMPORTANTE**: Questo progetto DEVE essere usato con pnpm, non npm. Il monorepo è configurato per pnpm workspaces.

## 🚀 Quick Start

1. **Clona il repository**
```bash
git clone <repository-url>
cd cristian-tesconi-web-site
```

2. **Installa pnpm** (se non lo hai già)
```bash
npm install -g pnpm
```

3. **Installa le dipendenze**
```bash
pnpm install
```

4. **Avvia il server di sviluppo**
```bash
# Dalla root del progetto
pnpm run dev:frontend

# Oppure
cd packages/frontend
pnpm dev
```

5. **Apri il browser** su [http://localhost:5173](http://localhost:5173)

### 🔨 Comandi Utili

```bash
# Sviluppo (dalla root del progetto)
pnpm run dev:frontend    # Avvia dev server del frontend
pnpm run build:frontend  # Build di produzione del frontend

# Sviluppo (da packages/frontend)
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

### 🐛 Troubleshooting

**Problema: "Cannot find module typescript/bin/tsc"**
```bash
# Soluzione: pulisci e reinstalla con pnpm
rm -rf node_modules packages/frontend/node_modules pnpm-lock.yaml
pnpm install
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
   - **Root Directory**: `packages/frontend`
   - **Build Command**: `pnpm run build` (o lascia vuoto per usare il default)
   - **Output Directory**: `dist`
   - **Install Command**: `pnpm install` (Vercel rileverà automaticamente pnpm dal packageManager in package.json)

5. **Clicca su "Deploy"**
   - Vercel costruirà e deployerà automaticamente il tuo sito
   - Ogni push al branch main/master trigghererà un nuovo deployment

> 💡 **Nota**: Vercel rileva automaticamente che il progetto usa pnpm dal campo `"packageManager": "pnpm@8.15.0"` nel package.json root.

### Opzione 2: Deploy tramite CLI Vercel

1. **Installa Vercel CLI**
```bash
npm i -g vercel
```

2. **Login su Vercel**
```bash
vercel login
```

3. **Fai il build locale prima del deploy**
```bash
pnpm run build:frontend
```

4. **Deploy dalla root del progetto**
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

## 📋 File di Configurazione Importanti

- `pnpm-workspace.yaml` - Configurazione workspace pnpm
- `vercel.json` - Configurazione deployment Vercel
- `packages/frontend/vite.config.ts` - Configurazione Vite
- `packages/frontend/tailwind.config.js` - Configurazione TailwindCSS
- `packages/frontend/tsconfig.json` - Configurazione TypeScript
- `config/portfolio.config.json` - Dati CV e portfolio
- `config/books.config.json` - Dati libri pubblicati

## 🔧 Script NPM Disponibili

Dalla **root del progetto**:
```bash
pnpm run dev:frontend     # Avvia frontend in dev mode
pnpm run build:frontend   # Build frontend per produzione
pnpm run dev              # Avvia tutti i servizi (se disponibili)
pnpm run lint             # Lint di tutti i package
pnpm run format           # Formatta tutto il codice
pnpm run typecheck        # Type check TypeScript
```

Dal package **frontend** (`packages/frontend`):
```bash
pnpm dev                  # Avvia dev server
pnpm build                # Build per produzione
pnpm preview              # Anteprima build locale
pnpm lint                 # ESLint check
pnpm lint:fix             # Fix automatico ESLint
pnpm format               # Formatta con Prettier
pnpm typecheck            # Type check
```

## 📄 Licenza

Tutti i diritti riservati © Cristian Tesconi

## 👤 Autore

**Cristian Tesconi** - Ingegnere Robotico e dell'Automazione

---

**Nota**: Questo progetto utilizza un'architettura monorepo ottimizzata per il deployment su Vercel. Il sito è completamente statico e serverless per massime performance e costi contenuti.
