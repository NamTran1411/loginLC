pipeline {
    agent any

    tools {
        nodejs "nodejs"
    }

    stages {
            steps('SSH server') {
             sshagent(['ssh-agent']) {
                sh 'ssh -o StrictHostKeyChecking=no -l cloudbees 192.168.64.2 loginLC -a'
                sh 'git pull git@github.com:NamTran1411/loginLC.git'
                sh 'npm install build'
                sh 'pm2 restart all'
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