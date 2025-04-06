pipeline {
    agent any

    environment {
        NODE_ENV = 'development'
    }

    stages {
        stage('Clone Repository') {
            steps {
                echo 'Cloning GitHub repository...'
                // No need for additional steps; Jenkins automatically checks out from Git SCM
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

                // Kill existing process on port 3000, if any
                bat '''
                @echo off
                for /f "tokens=5" %%a in ('netstat -aon ^| find ":3000" ^| find "LISTENING"') do (
                    echo Killing PID %%a
                    taskkill /F /PID %%a
                )
                exit /b 0
                '''

                // Start the app
                bat 'start /B node index.js'

                // Optional: check if running
                bat '''
                timeout /t 3 >nul
                curl http://localhost:3000
                '''
            }
        }
    }

    triggers {
        githubPush()  // Automatically triggers pipeline when code is pushed to GitHub
    }
}
