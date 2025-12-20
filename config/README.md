# 📋 Configurazioni del Portfolio

Questa cartella contiene tutti i file di configurazione per personalizzare il portfolio senza modificare il codice.

## 📁 File di Configurazione

### 1. `portfolio.config.json` - Dati Personali e Professionali

Contiene tutte le informazioni personali, esperienze, educazione e competenze.

**Sezioni principali:**
- **personalInfo**: Nome, bio, contatti (email, telefono, LinkedIn, GitHub), posizione
- **education**: Percorso formativo (lauree, corsi, tesi)
- **experiences**: Esperienze lavorative
- **skills**: Competenze tecniche divise per categoria
  - `programming`: Linguaggi di programmazione
  - `roboticsAutomation`: Robotica e automazione
  - `automotive`: Tecnologie automotive
  - `toolsFrameworks`: Tool e framework
  - `operatingSystems`: Sistemi operativi
  - `hardware`: Competenze hardware
  - `methodologies`: Metodologie di lavoro
- **languages**: Lingue parlate
- **interests**: Interessi personali
- **certifications**: Certificazioni
- **projects**: Progetti

**Esempio modifica GitHub:**
```json
"github": "https://github.com/TuoUsername"
```

**Esempio modifica email:**
```json
"email": "tuaemail@example.com"
```

---

### 2. `publications.config.json` - Pubblicazioni Scientifiche

Contiene i tuoi paper e pubblicazioni scientifiche.

**Struttura:**
```json
{
  "publications": [
    {
      "id": "pub-001",
      "title": {
        "en": "Titolo in inglese",
        "it": "Titolo in italiano"
      },
      "authors": ["Autore 1", "Autore 2", "..."],
      "year": 2025,
      "conference": "Nome conferenza",
      "abstract": {
        "en": "Abstract in inglese",
        "it": "Abstract in italiano"
      },
      "url": "https://link-al-paper.com",
      "tags": ["Tag1", "Tag2"],
      "category": "conference"
    }
  ]
}
```

**Categorie disponibili:**
- `conference`: Paper presentati a conferenze
- `journal`: Articoli su riviste scientifiche
- `preprint`: Preprint e rapporti tecnici

---

### 3. `books.config.json` - Libri Pubblicati

Contiene i tuoi libri pubblicati.

**Per aggiungere un libro:**
```json
{
  "id": "libro-1",
  "title": {
    "it": "Titolo in italiano",
    "en": "Titolo in inglese"
  },
  "cover": "/path/to/cover.jpg",
  "description": {
    "it": "Descrizione in italiano",
    "en": "Descrizione in inglese"
  },
  "amazonUrl": "https://amazon.it/...",
  "tags": ["Python", "AI"]
}
```

---

### 4. `ui.config.json` - Configurazione Interfaccia Utente

Contiene configurazioni per elementi UI dinamici.

**Sezioni:**

#### Hero Stats (Statistiche nella sezione Hero)
```json
"hero": {
  "stats": [
    {
      "value": "6+",
      "label": {
        "it": "Anni di esperienza",
        "en": "Years of Experience"
      }
    }
  ],
  "backgroundImage": "https://url-immagine-sfondo.com"
}
```

**Come modificare le statistiche:**
1. Cambia `value` con il nuovo valore
2. Aggiorna `label.it` per italiano
3. Aggiorna `label.en` per inglese

**Come cambiare l'immagine di sfondo:**
Modifica `backgroundImage` con un nuovo URL

#### Footer
```json
"footer": {
  "showSocialLinks": true,
  "links": {
    "linkedin": true,
    "github": true,
    "email": true
  }
}
```

#### Theme
```json
"theme": {
  "defaultMode": "dark",
  "allowToggle": true
}
```

---

### 5. `app.config.json` - Configurazione Applicazione

Contiene configurazioni globali dell'app.

**Sezioni principali:**

#### Theme Colors
```json
"theme": {
  "colors": {
    "primary": "#16FFBB",
    "secondary": "#29DDDA",
    ...
  }
}
```

**⚠️ ATTENZIONE:** Modificare i colori richiede anche aggiornamento di `tailwind.config.js`

#### SEO
```json
"seo": {
  "keywords": ["keyword1", "keyword2"],
  "description": {
    "it": "Descrizione in italiano",
    "en": "Description in English"
  }
}
```

#### Lingue
```json
"languages": ["it", "en"],
"defaultLanguage": "it"
```

---

## 🔧 Come Modificare i Dati

### Modifica Rapida dei Contatti

**File:** `portfolio.config.json`

```json
"personalInfo": {
  "email": "tuaemail@gmail.com",
  "phone": "+39 123456789",
  "linkedin": "https://www.linkedin.com/in/tuoprofilo",
  "github": "https://github.com/TuoUsername"
}
```

### Aggiungere una Nuova Esperienza Lavorativa

**File:** `portfolio.config.json`

Aggiungi all'array `experiences`:

```json
{
  "company": {
    "it": "Nome Azienda",
    "en": "Company Name"
  },
  "position": {
    "it": "Posizione",
    "en": "Position"
  },
  "period": "2024 - Presente",
  "description": {
    "it": "Descrizione del ruolo in italiano",
    "en": "Role description in English"
  },
  "responsibilities": {
    "it": ["Responsabilità 1", "Responsabilità 2"],
    "en": ["Responsibility 1", "Responsibility 2"]
  },
  "technologies": ["Tech1", "Tech2"]
}
```

### Aggiungere una Nuova Competenza

**File:** `portfolio.config.json`

Aggiungi all'array `skills.[categoria].items`:

```json
{
  "name": "Nome Skill",
  "description": {
    "it": "Descrizione in italiano",
    "en": "Description in English"
  },
  "proficiency": "expert"
}
```

**Livelli di proficiency:**
- `expert`: Esperto
- `proficient`: Competente
- `intermediate`: Intermedio
- `basic`: Base

### Aggiungere una Pubblicazione

**File:** `publications.config.json`

Aggiungi all'array `publications`:

```json
{
  "id": "pub-003",
  "title": {
    "en": "Paper Title",
    "it": "Titolo Paper"
  },
  "authors": ["Tu", "Coautore1"],
  "year": 2025,
  "conference": "NomeConferenza 2025",
  "abstract": {
    "en": "Abstract...",
    "it": "Abstract..."
  },
  "url": "https://link-paper.com",
  "tags": ["Tag1", "Tag2"],
  "category": "conference"
}
```

### Modificare le Statistiche Hero

**File:** `ui.config.json`

```json
"hero": {
  "stats": [
    {
      "value": "10+",
      "label": {
        "it": "Anni di esperienza",
        "en": "Years of Experience"
      }
    },
    {
      "value": "5",
      "label": {
        "it": "Paper pubblicati",
        "en": "Published Papers"
      }
    }
  ]
}
```

---

## 🌐 Traduzioni

Tutti i testi UI sono in `packages/frontend/src/i18n/locales/`:
- `it.json`: Traduzioni italiane
- `en.json`: Traduzioni inglesi

**Non modificare** questi file a meno che non tu voglia cambiare le etichette dell'interfaccia.

---

## ✅ Checklist Dopo le Modifiche

1. ✅ Verifica che il JSON sia valido (usa un validatore online)
2. ✅ Controlla che le traduzioni IT/EN siano allineate
3. ✅ Testa la pagina in entrambe le lingue
4. ✅ Verifica i link esterni (GitHub, LinkedIn, Amazon)
5. ✅ Controlla che le immagini siano accessibili

---

## 🚨 Problemi Comuni

### JSON non valido
**Errore:** Virgola mancante o in eccesso
**Soluzione:** Usa [JSONLint](https://jsonlint.com/) per validare

### Immagini non visualizzate
**Problema:** Path errato
**Soluzione:** Verifica che il path sia corretto e l'immagine esista in `public/`

### Link GitHub non funziona
**Problema:** URL hardcoded nel Footer
**Soluzione:** ✅ Già risolto! Il Footer ora usa `portfolio.config.json`

---

## 📞 Supporto

Per domande o problemi, verifica:
1. Sintassi JSON corretta
2. Struttura dati rispettata
3. Traduzioni complete (IT + EN)
4. Link esterni funzionanti

---

**Ultimo aggiornamento:** 2025-12-20
