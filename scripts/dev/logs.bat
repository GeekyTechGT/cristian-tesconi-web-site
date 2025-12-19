@echo off
REM ============================================
REM Script per visualizzare i log - Windows
REM ============================================

echo.
echo ========================================
echo   Visualizzazione log servizi
echo ========================================
echo.
echo Premi Ctrl+C per uscire
echo.

REM Navigate to project root
cd /d "%~dp0..\.."

REM Show logs
docker-compose logs -f
