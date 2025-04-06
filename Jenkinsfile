pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                echo 'Cloning GitHub repository...'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing Node.js dependencies...'
                bat 'npm install'
            }
        }

        stage('Deploy App') {
    steps {
        echo 'Starting Node.js application...'

        // Kill process on port 3000 (if running) - suppress error if not found
        bat '''
        @echo off
        for /f "tokens=5" %%a in ('netstat -aon ^| find ":3000" ^| find "LISTENING"') do (
            echo Killing PID %%a
            taskkill /F /PID %%a
        )
        exit /b 0
        '''

        // Start the app in background
        bat 'start /B node index.js'

        // Give it a moment to start and check if it's accessible
        bat '''
        timeout /t 3 >nul
        curl http://localhost:3000
        '''
    }
}


    triggers {
        githubPush()
    }
}
