@echo off

echo Activating Django virtual environment...
call D:\Titan\Git\Educonnect\env\Scripts\activate

echo Starting React.js frontend server...
start /B cmd /c "cd /d D:\Titan\Git\Educonnect\EduConnect_F && npm run dev"

echo Starting Django backend server...
start /B cmd /c "cd /d D:\Titan\Git\Educonnect\EduConnect && python manage.py runserver"

echo Opening default browser...
start "" http://localhost:5173  ; Replace with your local frontend URL

echo.
echo Servers started. Close this window to stop the servers.
pause
