# Configurazione Variabili d'Ambiente su Vercel

Il file `.env.local` funziona SOLO in sviluppo locale. Per la produzione su Vercel, devi configurare le variabili d'ambiente nella dashboard.

## Passi per Configurare le Variabili su Vercel

### 1. Accedi al Progetto su Vercel

1. Vai su [https://vercel.com/](https://vercel.com/)
2. Fai login
3. Seleziona il tuo progetto (cristian-tesconi-web-site)

### 2. Aggiungi le Variabili d'Ambiente

1. Nel progetto, vai su **Settings** (nell'intestazione)
2. Nel menu laterale, clicca su **Environment Variables**
3. Aggiungi queste 3 variabili, una alla volta:

#### Variabile 1: VITE_EMAILJS_SERVICE_ID
- **Key (Nome):** `VITE_EMAILJS_SERVICE_ID`
- **Value (Valore):** `service_1yv3eei`
- **Environment:** Seleziona `Production`, `Preview`, e `Development` (tutti e tre)
- Clicca su **Save**

#### Variabile 2: VITE_EMAILJS_TEMPLATE_ID
- **Key (Nome):** `VITE_EMAILJS_TEMPLATE_ID`
- **Value (Valore):** `template_tnhuknn` (o il tuo Template ID corretto)
- **Environment:** Seleziona `Production`, `Preview`, e `Development` (tutti e tre)
- Clicca su **Save**

#### Variabile 3: VITE_EMAILJS_PUBLIC_KEY
- **Key (Nome):** `VITE_EMAILJS_PUBLIC_KEY`
- **Value (Valore):** `FH2Ze2Y9wmVs46Y3b`
- **Environment:** Seleziona `Production`, `Preview`, e `Development` (tutti e tre)
- Clicca su **Save**

### 3. Rideploya il Progetto

Dopo aver aggiunto le variabili d'ambiente:

**Opzione A - Automatico (Recommended):**
1. Fai un commit e push al repository Git:
   ```bash
   git add .
   git commit -m "Update contact form with EmailJS"
   git push
   ```
2. Vercel farà automaticamente un nuovo deploy

**Opzione B - Manuale:**
1. Vai su **Deployments** nel progetto Vercel
2. Clicca sui tre puntini (⋯) dell'ultimo deployment
3. Clicca su **Redeploy**
4. Seleziona **Use existing Build Cache** ❌ (disabilitato, per forzare rebuild)
5. Clicca su **Redeploy**

### 4. Verifica

1. Aspetta che il deployment sia completato (qualche minuto)
2. Vai sul tuo sito in produzione
3. Apri la **Console del Browser** (F12 > Console)
4. Vai alla pagina Contatto e prova a inviare un messaggio
5. Controlla i log nella console per vedere se tutto funziona

## Note Importanti

- Le variabili con prefisso `VITE_` vengono incluse nel build del frontend
- Se cambi le variabili d'ambiente, devi sempre rifare il deploy
- `.env.local` è SOLO per sviluppo locale e non viene mai committato nel repository

## Troubleshooting

### Le variabili non vengono caricate
- Verifica di aver selezionato tutti e tre gli environment (Production, Preview, Development)
- Fai un redeploy completo senza cache

### Errore "Template not found"
- Verifica che il Template ID su EmailJS sia corretto
- Controlla che il template sia pubblicato e attivo su EmailJS

### Errore "Service not found"
- Verifica che il Service ID sia corretto
- Controlla che il servizio Gmail sia attivo su EmailJS
