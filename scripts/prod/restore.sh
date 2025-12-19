#!/bin/bash

# ============================================
# Restore Database - Production
# ============================================

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

if [ $# -lt 1 ]; then
    echo -e "${RED}[ERROR]${NC} Uso: $0 <backup_file>"
    echo ""
    echo "Esempio:"
    echo "  $0 backups/auth_db_20250101_120000.sql.gz"
    exit 1
fi

BACKUP_FILE=$1

if [ ! -f "$BACKUP_FILE" ]; then
    echo -e "${RED}[ERROR]${NC} File backup non trovato: $BACKUP_FILE"
    exit 1
fi

echo ""
echo "========================================"
echo "  Database Restore"
echo "========================================"
echo ""
echo -e "${YELLOW}[WARNING]${NC} Questo sovrascriverà il database esistente!"
echo ""
read -p "Continuare? (yes/no): " CONFIRM

if [ "$CONFIRM" != "yes" ]; then
    echo "Operazione annullata."
    exit 0
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPT_DIR/.env"

# Determine which database to restore
if [[ $BACKUP_FILE == *"auth_db"* ]]; then
    DB_TYPE="auth"
    CONTAINER="ct-auth-db-prod"
    DB_USER="$AUTH_DB_USER"
    DB_NAME="$AUTH_DB_NAME"
elif [[ $BACKUP_FILE == *"blog_db"* ]]; then
    DB_TYPE="blog"
    CONTAINER="ct-blog-db-prod"
    DB_USER="$BLOG_DB_USER"
    DB_NAME="$BLOG_DB_NAME"
else
    echo -e "${RED}[ERROR]${NC} Impossibile determinare il tipo di database"
    exit 1
fi

echo ""
echo -e "${GREEN}[INFO]${NC} Ripristino $DB_TYPE database..."

# Restore database
gunzip < "$BACKUP_FILE" | docker exec -i "$CONTAINER" psql -U "$DB_USER" -d "$DB_NAME"

echo ""
echo -e "${GREEN}[OK]${NC} Database ripristinato con successo!"
echo ""
