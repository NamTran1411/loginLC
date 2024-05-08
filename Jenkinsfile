pipeline {
    agent any

    tools {
        nodejs "nodejs"
    }

    stages {
         stage("install") {
            steps {
                sh 'npm run install'
            }
        }
        stage("build") {
            steps {
                sh 'npm run build'
            }
        }
         stage ("SSH Agent"){
            steps {
             sshagent(['ssh-remote']) {
                sh 'ssh -o StrictHostKeyChecking=no -l adminlc 192.168.64.2 touch text.txt'
            }
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