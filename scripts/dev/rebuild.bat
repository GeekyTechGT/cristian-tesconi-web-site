@echo off
REM ============================================
REM Script di rebuild completo - Windows
REM ============================================

echo.
echo ========================================
echo   Rebuild completo servizi
echo ========================================
echo.

REM Navigate to project root
cd /d "%~dp0..\.."

echo [INFO] Arresto servizi...
docker-compose down

echo.
echo [INFO] Rimozione volumi (database)...
docker-compose down -v

echo.
echo [INFO] Rebuild immagini (no cache)...
docker-compose build --no-cache

if errorlevel 1 (
    echo.
    echo [ERROR] Errore nel rebuild!
    pause
    exit /b 1
)

echo.
echo [INFO] Avvio servizi...
docker-compose up -d

if errorlevel 1 (
    echo.
    echo [ERROR] Errore nell'avvio!
    pause
    exit /b 1
)

echo.
echo ========================================
echo   Rebuild completato con successo!
echo ========================================
echo.
echo Frontend:        http://localhost:5173
echo Auth API Docs:   http://localhost:8002/docs
echo Blog API Docs:   http://localhost:8001/docs
echo.

pause
