@echo off

echo Activating Django virtual environment...
call D:\Titan\Git\Educonnect\env\Scripts\activate

echo Starting React.js frontend server...
start /B cmd /c "cd /d D:\Titan\Git\Educonnect\iqaceduconnect && npm start"

echo Starting Django backend server...
start /B cmd /c "cd /d D:\Titan\Git\Educonnect\EduConnect && python manage.py runserver 0.0.0.0:8000"

echo Opening default browser...
start "" http://localhost:3000  ; Replace with your local frontend URL

echo.
echo Servers started. Close this window to stop the servers.
pause
