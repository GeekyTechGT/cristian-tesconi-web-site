#!/bin/bash

# ============================================
# Deploy Production - Linux VPS
# ============================================

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo ""
echo "========================================"
echo "  Cristian Tesconi - Portfolio & Blog"
echo "  Production Deployment"
echo "========================================"
echo ""

# Navigate to scripts/prod directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

# Check if .env exists
if [ ! -f ".env" ]; then
    echo -e "${RED}[ERROR]${NC} File .env non trovato!"
    echo ""
    echo "Crea il file .env con:"
    echo "  cp .env.example .env"
    echo "  nano .env"
    echo ""
    exit 1
fi

echo -e "${GREEN}[INFO]${NC} Caricamento variabili d'ambiente..."
source .env

# Pull latest changes
echo ""
echo -e "${GREEN}[INFO]${NC} Aggiornamento codice dal repository..."
cd ../..
git pull origin main

cd "$SCRIPT_DIR"

# Stop existing containers
echo ""
echo -e "${YELLOW}[INFO]${NC} Arresto container esistenti..."
docker-compose -f docker-compose.prod.yml down

# Build images
echo ""
echo -e "${GREEN}[INFO]${NC} Build immagini Docker..."
docker-compose -f docker-compose.prod.yml build --no-cache

# Start services
echo ""
echo -e "${GREEN}[INFO]${NC} Avvio servizi..."
docker-compose -f docker-compose.prod.yml up -d

# Wait for services to be ready
echo ""
echo -e "${YELLOW}[INFO]${NC} Attesa avvio servizi..."
sleep 10

# Check services health
echo ""
echo -e "${GREEN}[INFO]${NC} Verifica stato servizi..."
docker-compose -f docker-compose.prod.yml ps

echo ""
echo "========================================"
echo -e "  ${GREEN}Deployment completato!${NC}"
echo "========================================"
echo ""
echo "Applicazione disponibile su:"
echo -e "  ${BLUE}https://cristiantesconi.it${NC}"
echo ""
echo "API Documentation:"
echo -e "  ${BLUE}https://cristiantesconi.it/api/auth/docs${NC}"
echo -e "  ${BLUE}https://cristiantesconi.it/api/blog/docs${NC}"
echo ""
echo "Comandi utili:"
echo "  - Visualizza log:    docker-compose -f docker-compose.prod.yml logs -f"
echo "  - Riavvia servizi:   docker-compose -f docker-compose.prod.yml restart"
echo "  - Arresta servizi:   docker-compose -f docker-compose.prod.yml down"
echo ""
echo "========================================"
