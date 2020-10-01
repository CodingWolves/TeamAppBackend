@echo off
setlocal enabledelayedexpansion

set pa=%cd%
set curDir=%pa:~-8%
echo %curDir%
IF %curDir% EQU \scripts call :upDir

wsl -- sh scripts/start-redis-server.sh
exit /b


:upDir
	cd ../
	echo "up directory"
	goto :eof