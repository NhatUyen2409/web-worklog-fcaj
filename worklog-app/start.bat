@echo off
title WorkLog FCAJ Application
echo ===================================================
echo     DANG KHOI DONG WORKLOG APP (CLIENT + SERVER)
echo ===================================================

:: Dam bao Node.js co trong PATH
set "PATH=C:\Program Files\nodejs;%PATH%"

cd /d "%~dp0worklog-app" 2>nul || cd /d "%~dp0"

echo [1/2] Dang chay Server va Client...
echo Web se mo tai: http://localhost:5173
echo ===================================================

:: Tu dong mo trinh duyet sau 3 giay
start "" cmd /c "timeout /t 3 /nobreak >nul && start http://localhost:5173"

:: Chay ca Server va Client dong thoi
call npm.cmd run dev
pause
