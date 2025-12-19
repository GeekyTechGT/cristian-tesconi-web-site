# 🚀 Scripts di Deployment

Questa cartella contiene tutti gli script per avviare e gestire l'applicazione in ambiente development (Windows) e production (Linux VPS).

## 📁 Struttura

```
scripts/
├── dev/                    # Development (Windows + Docker Desktop)
│   ├── install.bat         # Installazione dipendenze iniziali
│   ├── start.bat           # Avvia tutti i servizi
│   ├── stop.bat            # Ferma tutti i servizi
│   ├── logs.bat            # Visualizza log in tempo reale
│   └── rebuild.bat         # Rebuild completo (pulisce cache)
│
└── prod/                   # Production (Linux VPS + Nginx)
    ├── setup-vps.sh        # Setup iniziale VPS (Docker, firewall, etc)
    ├── setup-ssl.sh        # Genera certificati SSL Let's Encrypt
    ├── deploy.sh           # Deploy/aggiornamento applicazione
    ├── backup.sh           # Backup database
    ├── restore.sh          # Ripristino database da backup
    ├── docker-compose.prod.yml  # Configurazione Docker production
    ├── nginx.conf          # Configurazione Nginx reverse proxy
    └── .env.example        # Template variabili d'ambiente
```

---

## 🖥️ Development (Windows)

### Prerequisiti
- Windows 10/11
- Docker Desktop installato e avviato
- Git
- Node.js 18+ e pnpm

### 1️⃣ Installazione Iniziale

```batch
cd D:\GeekyTechRepos\ct-web-site+blog
scripts\dev\install.bat
```

**Cosa fa:**
- ✅ Installa dipendenze frontend con pnpm
- ✅ Crea file `.env` per i backend da `.env.example`
- ✅ Verifica che pnpm sia installato

**Dopo l'installazione:**
Modifica i file `.env` generati:
- `packages/backend-auth/.env`
- `packages/backend-blog/.env`

⚠️ **IMPORTANTE**: Usa lo stesso `SECRET_KEY` in entrambi i file!

### 2️⃣ Avvio Applicazione

```batch
scripts\dev\start.bat
```

**Cosa fa:**
- ✅ Verifica che Docker Desktop sia in esecuzione
- ✅ Avvia tutti i servizi con docker-compose
- ✅ Mostra URL di accesso

**Servizi disponibili:**
- Frontend: http://localhost:5173
- Auth API Docs: http://localhost:8002/docs
- Blog API Docs: http://localhost:8001/docs

### 3️⃣ Visualizza Log

```batch
scripts\dev\logs.bat
```

Mostra i log di tutti i servizi in tempo reale. Premi `Ctrl+C` per uscire.

### 4️⃣ Ferma Applicazione

```batch
scripts\dev\stop.bat
```

Ferma tutti i container Docker senza rimuovere i dati.

### 5️⃣ Rebuild Completo

```batch
scripts\dev\rebuild.bat
```

**Usa questo quando:**
- Hai modificato Dockerfile
- Hai problemi con le dipendenze
- Vuoi ripartire da zero

**Cosa fa:**
- ✅ Ferma tutti i container
- ✅ Rimuove volumi (⚠️ cancella database!)
- ✅ Ricompila tutte le immagini senza cache
- ✅ Riavvia i servizi

---

## 🌐 Production (Linux VPS)

### Prerequisiti
- VPS Linux (Ubuntu 20.04+ consigliato)
- Accesso root/sudo
- Dominio configurato (DNS A record → IP VPS)
- Porte 22, 80, 443 aperte

### 1️⃣ Setup Iniziale VPS

Connettiti al VPS via SSH:

```bash
ssh root@your-vps-ip
```

Scarica e esegui lo script di setup:

```bash
# Clona il repository
cd /opt
git clone <your-repo-url> ct-web-app
cd ct-web-app

# Rendi eseguibili gli script
chmod +x scripts/prod/*.sh

# Esegui setup VPS
./scripts/prod/setup-vps.sh
```

**Cosa fa:**
- ✅ Aggiorna il sistema
- ✅ Installa Docker e Docker Compose
- ✅ Installa Git
- ✅ Installa Certbot (per SSL)
- ✅ Configura firewall (UFW)
- ✅ Crea directory applicazione

### 2️⃣ Configurazione Ambiente

```bash
cd /opt/ct-web-app/scripts/prod

# Copia template .env
cp .env.example .env

# Modifica con i tuoi valori
nano .env
```

**Valori da configurare:**
```bash
# Database (usa password forti!)
AUTH_DB_PASSWORD=secure_password_here
BLOG_DB_PASSWORD=another_secure_password

# JWT (genera con: openssl rand -hex 32)
SECRET_KEY=your_generated_secret_key

# Superuser iniziale
INITIAL_SUPERUSER_EMAIL=tua@email.com
INITIAL_SUPERUSER_PASSWORD=secure_admin_password

# Dominio
DOMAIN=cristiantesconi.it
EMAIL=admin@cristiantesconi.it
```

### 3️⃣ Setup SSL (Let's Encrypt)

```bash
./scripts/prod/setup-ssl.sh cristiantesconi.it admin@cristiantesconi.it
```

**Prerequisiti:**
- DNS configurato (cristiantesconi.it → IP VPS)
- Porte 80/443 aperte
- Nessun servizio su porta 80

**Cosa fa:**
- ✅ Ottiene certificato SSL da Let's Encrypt
- ✅ Configura rinnovo automatico
- ✅ Salva certificati in `/etc/letsencrypt/`

### 4️⃣ Deploy Applicazione

```bash
./scripts/prod/deploy.sh
```

**Cosa fa:**
- ✅ Carica variabili d'ambiente
- ✅ Aggiorna codice da Git (git pull)
- ✅ Ferma container esistenti
- ✅ Ricompila immagini Docker
- ✅ Avvia tutti i servizi (frontend, backend, nginx, database)
- ✅ Verifica stato servizi

**Dopo il deploy:**
Applicazione disponibile su: **https://cristiantesconi.it**

### 5️⃣ Backup Database

```bash
./scripts/prod/backup.sh
```

**Cosa fa:**
- ✅ Backup di entrambi i database (auth, blog)
- ✅ Compressione con gzip
- ✅ Salvataggio in `scripts/prod/backups/`
- ✅ Rimozione backup vecchi (>30 giorni)

**File generati:**
- `backups/auth_db_YYYYMMDD_HHMMSS.sql.gz`
- `backups/blog_db_YYYYMMDD_HHMMSS.sql.gz`

**Automatizza backup (cron):**
```bash
# Backup giornaliero alle 2:00 AM
crontab -e

# Aggiungi:
0 2 * * * /opt/ct-web-app/scripts/prod/backup.sh >> /var/log/backup.log 2>&1
```

### 6️⃣ Ripristino Database

```bash
./scripts/prod/restore.sh backups/auth_db_20250101_120000.sql.gz
```

⚠️ **ATTENZIONE**: Sovrascrive il database esistente!

---

## 🔧 Comandi Docker Utili

### Development

```batch
# Visualizza container in esecuzione
docker ps

# Visualizza log di un servizio specifico
docker-compose logs -f frontend
docker-compose logs -f backend-blog

# Riavvia un servizio
docker-compose restart frontend

# Accedi a un container
docker exec -it ct-frontend-dev sh
```

### Production

```bash
# Visualizza log
cd /opt/ct-web-app/scripts/prod
docker-compose -f docker-compose.prod.yml logs -f

# Riavvia servizi
docker-compose -f docker-compose.prod.yml restart

# Ferma tutto
docker-compose -f docker-compose.prod.yml down

# Riavvia solo frontend
docker-compose -f docker-compose.prod.yml restart frontend

# Accedi a un container
docker exec -it ct-frontend-prod sh
```

---

## 📊 Monitoraggio Production

### Verifica Stato Servizi

```bash
cd /opt/ct-web-app/scripts/prod
docker-compose -f docker-compose.prod.yml ps
```

### Log in Tempo Reale

```bash
# Tutti i servizi
docker-compose -f docker-compose.prod.yml logs -f

# Solo frontend
docker-compose -f docker-compose.prod.yml logs -f frontend

# Solo backend blog
docker-compose -f docker-compose.prod.yml logs -f backend-blog

# Ultimi 100 righe di log
docker-compose -f docker-compose.prod.yml logs --tail=100
```

### Spazio Disco

```bash
# Spazio usato da Docker
docker system df

# Pulizia immagini vecchie
docker system prune -a
```

---

## 🚨 Troubleshooting

### Development (Windows)

**Problema: "Docker Desktop non è in esecuzione"**
- Soluzione: Avvia Docker Desktop e attendi che sia completamente avviato

**Problema: Porta già in uso**
```batch
# Verifica quali porte sono in uso
netstat -ano | findstr :5173
netstat -ano | findstr :8001

# Chiudi il processo o cambia porta in docker-compose.yml
```

**Problema: Container non si avvia**
```batch
# Visualizza log dettagliati
docker-compose logs backend-blog

# Rebuild forzato
scripts\dev\rebuild.bat
```

### Production (Linux)

**Problema: Certificato SSL non funziona**
```bash
# Verifica DNS
nslookup cristiantesconi.it

# Verifica porta 80 libera
netstat -tulpn | grep :80

# Riprova setup SSL
./scripts/prod/setup-ssl.sh cristiantesconi.it admin@cristiantesconi.it
```

**Problema: 502 Bad Gateway**
```bash
# Verifica che i backend siano avviati
docker-compose -f docker-compose.prod.yml ps

# Controlla log Nginx
docker-compose -f docker-compose.prod.yml logs nginx

# Riavvia servizi
docker-compose -f docker-compose.prod.yml restart
```

**Problema: Database non si connette**
```bash
# Verifica log database
docker-compose -f docker-compose.prod.yml logs auth-db
docker-compose -f docker-compose.prod.yml logs blog-db

# Verifica credenziali in .env
cat .env | grep PASSWORD
```

---

## 🔐 Sicurezza Production

### Checklist Pre-Deploy

- [ ] SECRET_KEY generato in modo sicuro (`openssl rand -hex 32`)
- [ ] Password database forti e uniche
- [ ] Password superuser forte
- [ ] File `.env` NON committato su Git
- [ ] Firewall abilitato (UFW)
- [ ] SSL/HTTPS configurato
- [ ] Backup automatici configurati
- [ ] Log rotation configurato

### Backup Regolari

Configura backup automatici:

```bash
crontab -e

# Aggiungi queste righe:
# Backup giornaliero alle 2:00 AM
0 2 * * * /opt/ct-web-app/scripts/prod/backup.sh >> /var/log/backup.log 2>&1

# Pulizia log ogni domenica alle 3:00 AM
0 3 * * 0 find /opt/ct-web-app/scripts/prod/backups -name "*.sql.gz" -mtime +30 -delete
```

---

## 📞 Supporto

Per problemi con gli script:

1. Controlla i log: `docker-compose logs -f`
2. Verifica lo stato: `docker-compose ps`
3. Consulta SETUP_COMPLETO.md
4. Consulta README.md del progetto

---

**Creato per Cristian Tesconi - Portfolio & Blog** 🚀
