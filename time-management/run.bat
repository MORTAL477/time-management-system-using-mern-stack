@echo off
title Chronos - Time Management System (Roll No. 8)
cls
echo ======================================================================
echo   CHRONOS: TIME MANAGEMENT SOFTWARE (MERN STACK)
echo   University of Engineering and Management, Kolkata
echo   Department of Computer Science and Engineering (Data Science)
echo   Paper: Software Engineering Laboratory using MERN (PCCCS594)
echo   Student Roll No: 8
echo ======================================================================
echo.

echo [1/2] Checking MongoDB service status...
net start MongoDB >nul 2>&1
if %errorlevel% equ 0 (
    echo [OK] MongoDB service is active.
) else (
    echo [INFO] MongoDB might already be running or running as a local process.
)

echo.
echo [2/2] Starting Backend (Express/Node) and Frontend (React/Vite)...
echo ----------------------------------------------------------------------
echo Press Ctrl + C to stop the application at any time.
echo ----------------------------------------------------------------------
echo.

node start.js
pause
