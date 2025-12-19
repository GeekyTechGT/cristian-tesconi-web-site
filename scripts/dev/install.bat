@echo off
REM ============================================
REM Script di installazione iniziale - Windows
REM ============================================

echo.
echo ========================================
echo   Installazione dipendenze progetto
echo ========================================
echo.

REM Navigate to project root
cd /d "%~dp0..\.."

REM Check pnpm
where pnpm >nul 2>&1
if errorlevel 1 (
    echo [ERROR] pnpm non trovato!
    echo Installa pnpm: npm install -g pnpm
    pause
    exit /b 1
)

echo [OK] pnpm trovato
echo.

echo [INFO] Installazione dipendenze frontend...
pnpm install

if errorlevel 1 (
    echo.
    echo [ERROR] Errore installazione dipendenze!
    pause
    exit /b 1
)

echo.
echo [INFO] Copia file .env.example...

if not exist "packages\backend-auth\.env" (
    copy "packages\backend-auth\.env.example" "packages\backend-auth\.env"
    echo [OK] Creato packages\backend-auth\.env
)

if not exist "packages\backend-blog\.env" (
    copy "packages\backend-blog\.env.example" "packages\backend-blog\.env"
    echo [OK] Creato packages\backend-blog\.env
)

echo.
echo ========================================
echo   Installazione completata!
echo ========================================
echo.
echo IMPORTANTE: Modifica i file .env con:
echo - SECRET_KEY uguale per entrambi i backend
echo - PASSWORD del database
echo.
echo Prossimi passi:
echo 1. Configura i file .env
echo 2. Esegui start.bat per avviare i servizi
echo.

pause
