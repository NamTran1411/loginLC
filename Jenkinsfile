pipeline {
    agent any

    tools {
        nodejs "nodejs"
    }

    stages {

         stage ("SSH Agent"){
               steps {
                sshagent(['ssh-agent-admin']) {
                sh 'ssh -o StrictHostKeyChecking=no -l adminlc 192.168.64.2 touch text.txt'
                sh 'git pull git@github.com:NamTran1411/loginLC.git'
                sh 'npm install build'
                sh 'pm2 restart all'
            }
         }
         }
        stage("install") {
            steps {
                sh 'npm install'
            }
        }
        stage("build") {
            steps {
                sh 'npm run build'
            }
        }
    }

    post {
        success {
            echo "SUCCESSFUL"
        }
        failure {
            echo "FAILED"
        }
    }
}