pipeline {
    agent any

    tools {
        nodejs "nodejs"
    }

    stages {
         stage("install") {
            steps {
<<<<<<< Updated upstream
               git credentialsId :'test-jenkins' ,url:'git@github.com:NamTran1411/loginLC.git'
=======
                sh 'npm run install'
>>>>>>> Stashed changes
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