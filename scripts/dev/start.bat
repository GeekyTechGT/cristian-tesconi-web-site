@echo off
echo ============================================
echo   Cristian Tesconi - Portfolio Dev Server
echo ============================================
echo.
echo Killing existing Vite processes...
taskkill /F /IM node.exe /T 2>nul

timeout /t 2 /nobreak >nul

echo.
echo Starting Vite dev server...
cd /d "%~dp0..\..\packages\frontend"
npm run dev
