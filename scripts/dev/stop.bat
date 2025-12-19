@echo off
REM ============================================
REM Script di stop Development - Windows
REM ============================================

echo.
echo ========================================
echo   Arresto servizi Development
echo ========================================
echo.

REM Navigate to project root
cd /d "%~dp0..\.."

echo [INFO] Arresto servizi Docker Compose...
docker-compose down

if errorlevel 1 (
    echo.
    echo [ERROR] Errore nell'arresto dei servizi!
    pause
    exit /b 1
)

echo.
echo [OK] Tutti i servizi sono stati arrestati
echo.

pause
