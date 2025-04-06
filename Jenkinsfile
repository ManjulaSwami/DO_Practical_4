pipeline {

    agent any



    stages {

        stage('Clone Repository') {

            steps {

                echo 'Cloning GitHub repository...'

                // Git plugin auto handles this via SCM section

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

                // Kill existing app if any (on port 3000)

                bat 'for /f "tokens=5" %%a in (\'netstat -aon ^| find ":3000" ^| find "LISTENING"\') do taskkill /F /PID %%a'



                // Start the app in background

                bat 'start /B node index.js'



                // Wait and check if it started

                bat 'timeout /t 3'

                bat 'curl http://localhost:3000'

            }

        }

    }



    triggers {

        githubPush()

    }

}