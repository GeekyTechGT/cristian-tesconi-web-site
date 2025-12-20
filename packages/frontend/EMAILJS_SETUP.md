# Configurazione EmailJS per il Form di Contatto

Questa guida spiega come configurare EmailJS per ricevere email dal form di contatto del sito su **cristiantesco@gmail.com**.

## Passi per la Configurazione

### 1. Crea un Account EmailJS

1. Vai su [https://www.emailjs.com/](https://www.emailjs.com/)
2. Clicca su "Sign Up" e crea un account gratuito
3. Verifica la tua email

### 2. Aggiungi il Servizio Email (Gmail)

1. Vai su [https://dashboard.emailjs.com/admin](https://dashboard.emailjs.com/admin)
2. Nella sezione "Email Services", clicca su "Add New Service"
3. Seleziona "Gmail"
4. Segui le istruzioni per collegare il tuo account Gmail (`cristiantesco@gmail.com`)
5. Copia il **Service ID** (es. `service_abc123`)

### 3. Crea un Email Template

1. Vai su [https://dashboard.emailjs.com/admin/templates](https://dashboard.emailjs.com/admin/templates)
2. Clicca su "Create New Template"
3. Configura il template con questi parametri:

**Subject (Oggetto):**
```
Nuovo messaggio dal sito: {{subject}}
```

**Content (Corpo dell'email):**
```
Hai ricevuto un nuovo messaggio dal form di contatto del tuo sito web.

Nome: {{from_name}}
Email: {{from_email}}
Oggetto: {{subject}}

Messaggio:
{{message}}

---
Inviato dal form di contatto di cristiantesconi.it
```

**Settings (Impostazioni):**
- To Email: `{{to_email}}` (questo sarà impostato automaticamente a cristiantesco@gmail.com)
- From Name: `{{from_name}}`
- From Email: Usa l'email del servizio Gmail che hai configurato
- Reply To: `{{from_email}}`

4. Clicca su "Save" e copia il **Template ID** (es. `template_xyz789`)

### 4. Ottieni la Public Key

1. Vai su [https://dashboard.emailjs.com/admin/account](https://dashboard.emailjs.com/admin/account)
2. Nella sezione "General", troverai la tua **Public Key** (es. `abcdefghijklmnop`)

### 5. Configura le Variabili d'Ambiente

1. Nella cartella `packages/frontend/`, crea un file `.env.local`:

```bash
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=service_1yv3eei
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=FH2Ze2Y9wmVs46Y3b
```

2. Sostituisci i valori con quelli che hai ottenuto nei passi precedenti

### 6. Test

1. Avvia il server di sviluppo:
```bash
pnpm dev:frontend
```

2. Vai alla pagina di contatto del tuo sito
3. Compila il form e invia un messaggio di test
4. Controlla la casella email di `cristiantesco@gmail.com` per verificare di aver ricevuto l'email

## Risoluzione Problemi

### Non ricevo le email

1. Controlla che il file `.env.local` contenga i valori corretti
2. Verifica nella console del browser se ci sono errori
3. Controlla la dashboard di EmailJS per vedere se le email sono state inviate
4. Controlla la cartella spam di Gmail

### Errore "EmailJS non è configurato"

- Il file `.env.local` non esiste o contiene valori vuoti
- Riavvia il server di sviluppo dopo aver creato/modificato `.env.local`

### Limiti del Piano Gratuito

EmailJS offre:
- 200 email al mese gratuitamente
- Se serve di più, considera di fare l'upgrade al piano a pagamento

## Note di Sicurezza

- Il file `.env.local` è già nel `.gitignore` e non verrà mai committato
- La Public Key di EmailJS può essere esposta pubblicamente (è progettata per questo)
- Per deploy su Vercel, aggiungi le variabili d'ambiente nelle impostazioni del progetto

## Deploy su Vercel

1. Vai su [https://vercel.com/](https://vercel.com/)
2. Seleziona il tuo progetto
3. Vai in "Settings" > "Environment Variables"
4. Aggiungi le tre variabili:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
5. Fai un nuovo deploy
