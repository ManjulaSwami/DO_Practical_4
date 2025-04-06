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
                bat '''
                for /f "tokens=5" %%a in ('netstat -aon ^| find ":3000" ^| find "LISTENING"') do taskkill /F /PID %%a
                '''
                bat 'start /B node index.js'
                bat '''
                timeout /t 3
                curl http://localhost:3000
                '''
            }
        }
    }

    triggers {
        githubPush()
    }
}
