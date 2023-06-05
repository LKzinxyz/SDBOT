@echo off
chcp 65001 > nul

color 0D
title STARDIX BOT by LKzinxYz

mode con: cols=75 lines=11
echo    ____  ____  __   ____  ____  __  _  _    ____   __  ____  ____
echo   / ___)(_  _)/ _\ (  _ \(    \(  )( \/ )  (  _ \ /  \(_  _)/ ___)
echo   \___ \  )( /    \ )   / ) D ( )(  )  (    ) _ ((  O ) )(  \___ \
echo   (____/ (__)\_/\_/(__\_)(____/(__)(_/\_)  (____/ \__/ (__) (____/
echo. 
where node > nul 2>&1
if %errorlevel% equ 0 (
echo           +---------------------------------------------+
echo                     Instalando Dependências...        
echo           +---------------------------------------------+ 
echo.
    
    npm install mineflayer --no-fund > nul
    npm install discord.js --no-fund > nul
    npm install fs --no-fund > nul
    npm install colors --no-fund > nul
    npm install math --no-fund > nul
    npm install moment --no-fund > nul
    npm update --no-fund > nul
    
cls
color 0A
mode con: cols=65 lines=5
echo. 
echo           +---------------------------------------------+
echo                      Instalação concluída!        
echo           +---------------------------------------------+ 
    
    timeout /t 3 > nul
    
) else (
cls
color 0C
mode con: cols=65 lines=5
echo.
echo  +------------------------------------------------------------+
echo                  Node.js não está instalado. 
echo         Por favor, instale o Node.js para continuar.        
echo  +------------------------------------------------------------+
    pause > nul
)
