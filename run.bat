@echo off
chcp 65001 >nul
title iDispenser - High-Speed File Dispenser
cd /d "%~dp0"

echo ====================================================
echo             iDispenser File Sharing Server
echo ====================================================
echo.

where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not installed!
    echo Please install Node.js from https://nodejs.org
    pause
    exit /b 1
)

if not exist "shared" mkdir "shared"
if not exist "bin" mkdir "bin"

if not exist "node_modules" (
    echo [INFO] Installing dependencies...
    call npm.cmd install
    if %errorlevel% neq 0 (
        echo [ERROR] Failed to install dependencies.
        pause
        exit /b 1
    )
)

start "" "http://localhost:5050"

echo [INFO] Starting iDispenser on http://localhost:5050 ...
echo [INFO] Press Ctrl+C to stop.
echo.
node server.js
if %errorlevel% neq 0 pause
