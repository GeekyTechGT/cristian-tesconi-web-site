#!/bin/bash

# ============================================
# Setup Production VPS - Linux
# ============================================

set -e  # Exit on error

echo ""
echo "========================================"
echo "  Cristian Tesconi - Portfolio & Blog"
echo "  Production VPS Setup"
echo "========================================"
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if running as root
if [[ $EUID -ne 0 ]]; then
   echo -e "${RED}[ERROR]${NC} Questo script deve essere eseguito come root (sudo)"
   exit 1
fi

echo -e "${GREEN}[INFO]${NC} Aggiornamento sistema..."
apt-get update
apt-get upgrade -y

echo ""
echo -e "${GREEN}[INFO]${NC} Installazione dipendenze..."

# Install Docker
if ! command -v docker &> /dev/null; then
    echo -e "${YELLOW}[INFO]${NC} Installazione Docker..."
    apt-get install -y ca-certificates curl gnupg lsb-release

    # Add Docker's official GPG key
    mkdir -p /etc/apt/keyrings
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /etc/apt/keyrings/docker.gpg

    # Set up the repository
    echo \
      "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
      $(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null

    # Install Docker Engine
    apt-get update
    apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

    echo -e "${GREEN}[OK]${NC} Docker installato"
else
    echo -e "${GREEN}[OK]${NC} Docker già installato"
fi

# Install Docker Compose
if ! command -v docker-compose &> /dev/null; then
    echo -e "${YELLOW}[INFO]${NC} Installazione Docker Compose..."
    curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    chmod +x /usr/local/bin/docker-compose
    echo -e "${GREEN}[OK]${NC} Docker Compose installato"
else
    echo -e "${GREEN}[OK]${NC} Docker Compose già installato"
fi

# Install Git
if ! command -v git &> /dev/null; then
    echo -e "${YELLOW}[INFO]${NC} Installazione Git..."
    apt-get install -y git
    echo -e "${GREEN}[OK]${NC} Git installato"
else
    echo -e "${GREEN}[OK]${NC} Git già installato"
fi

# Install certbot
if ! command -v certbot &> /dev/null; then
    echo -e "${YELLOW}[INFO]${NC} Installazione Certbot..."
    apt-get install -y certbot
    echo -e "${GREEN}[OK]${NC} Certbot installato"
else
    echo -e "${GREEN}[OK]${NC} Certbot già installato"
fi

# Setup firewall
echo ""
echo -e "${GREEN}[INFO]${NC} Configurazione firewall..."
apt-get install -y ufw

# Allow SSH, HTTP, HTTPS
ufw allow 22/tcp
ufw allow 80/tcp
ufw allow 443/tcp

# Enable firewall
echo "y" | ufw enable

echo -e "${GREEN}[OK]${NC} Firewall configurato"

# Create app directory
echo ""
echo -e "${GREEN}[INFO]${NC} Creazione directory applicazione..."
APP_DIR="/opt/ct-web-app"
mkdir -p $APP_DIR
cd $APP_DIR

echo ""
echo "========================================"
echo "  Setup completato!"
echo "========================================"
echo ""
echo "Prossimi passi:"
echo ""
echo "1. Clona il repository:"
echo "   cd $APP_DIR"
echo "   git clone <your-repo-url> ."
echo ""
echo "2. Copia e configura le variabili d'ambiente:"
echo "   cp scripts/prod/.env.example scripts/prod/.env"
echo "   nano scripts/prod/.env"
echo ""
echo "3. Genera i certificati SSL:"
echo "   ./scripts/prod/setup-ssl.sh cristiantesconi.it admin@cristiantesconi.it"
echo ""
echo "4. Avvia l'applicazione:"
echo "   ./scripts/prod/deploy.sh"
echo ""
echo "========================================"
