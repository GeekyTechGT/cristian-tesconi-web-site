#!/bin/bash

# ============================================
# Backup Database - Production
# ============================================

set -e

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BACKUP_DIR="$SCRIPT_DIR/backups"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")

echo ""
echo "========================================"
echo "  Database Backup"
echo "========================================"
echo ""

# Create backup directory
mkdir -p "$BACKUP_DIR"

# Load environment variables
source "$SCRIPT_DIR/.env"

echo -e "${GREEN}[INFO]${NC} Backup Auth Database..."
docker exec ct-auth-db-prod pg_dump -U "$AUTH_DB_USER" "$AUTH_DB_NAME" | gzip > "$BACKUP_DIR/auth_db_$TIMESTAMP.sql.gz"
echo -e "${GREEN}[OK]${NC} Auth DB salvato: auth_db_$TIMESTAMP.sql.gz"

echo ""
echo -e "${GREEN}[INFO]${NC} Backup Blog Database..."
docker exec ct-blog-db-prod pg_dump -U "$BLOG_DB_USER" "$BLOG_DB_NAME" | gzip > "$BACKUP_DIR/blog_db_$TIMESTAMP.sql.gz"
echo -e "${GREEN}[OK]${NC} Blog DB salvato: blog_db_$TIMESTAMP.sql.gz"

# Delete backups older than 30 days
echo ""
echo -e "${YELLOW}[INFO]${NC} Rimozione backup vecchi (>30 giorni)..."
find "$BACKUP_DIR" -name "*.sql.gz" -mtime +30 -delete

echo ""
echo "========================================"
echo "  Backup completato!"
echo "========================================"
echo ""
echo "File salvati in: $BACKUP_DIR"
echo ""
ls -lh "$BACKUP_DIR" | grep "$TIMESTAMP"
echo ""
