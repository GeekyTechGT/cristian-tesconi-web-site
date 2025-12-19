#!/bin/bash

# ============================================
# Setup SSL Certificates - Let's Encrypt
# ============================================

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

if [ $# -lt 2 ]; then
    echo -e "${RED}[ERROR]${NC} Uso: $0 <domain> <email>"
    echo ""
    echo "Esempio:"
    echo "  $0 cristiantesconi.it admin@cristiantesconi.it"
    exit 1
fi

DOMAIN=$1
EMAIL=$2

echo ""
echo "========================================"
echo "  Setup SSL Certificate"
echo "========================================"
echo ""
echo "Domain: $DOMAIN"
echo "Email:  $EMAIL"
echo ""

# Navigate to scripts/prod directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

# Create certbot webroot directory
mkdir -p certbot-webroot

echo -e "${GREEN}[INFO]${NC} Ottenimento certificato SSL da Let's Encrypt..."
echo ""

# Stop nginx if running
docker-compose -f docker-compose.prod.yml stop nginx 2>/dev/null || true

# Get certificate
certbot certonly \
    --standalone \
    --non-interactive \
    --agree-tos \
    --email "$EMAIL" \
    -d "$DOMAIN" \
    -d "www.$DOMAIN"

if [ $? -eq 0 ]; then
    echo ""
    echo -e "${GREEN}[OK]${NC} Certificato SSL ottenuto con successo!"
    echo ""
    echo "Certificati salvati in:"
    echo "  /etc/letsencrypt/live/$DOMAIN/"
    echo ""
    echo "Il certificato verrà rinnovato automaticamente."
    echo ""
else
    echo ""
    echo -e "${RED}[ERROR]${NC} Errore nell'ottenimento del certificato SSL"
    echo ""
    echo "Verifica che:"
    echo "  1. Il DNS di $DOMAIN punti a questo server"
    echo "  2. Le porte 80 e 443 siano aperte"
    echo "  3. Nessun altro servizio stia usando le porte 80/443"
    echo ""
    exit 1
fi

echo "========================================"
