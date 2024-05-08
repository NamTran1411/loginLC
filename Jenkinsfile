pipeline {
    agent any

    tools {
        nodejs "nodejs"
    }

    stages {
            steps {
             sshagent(['ssh-agent']) {
                sh 'ssh -o StrictHostKeyChecking=no -l cloudbees 192.168.64.2 loginLC -a'
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