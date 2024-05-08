pipeline {
    agent any

    tools {
        nodejs "nodejs"
    }

    stages {

         stage ("SSH Agent"){
               steps {
                sshagent(['ssh-agent-admin']) {
               def remoteCommands = """
                            cd /var/www/loginLC
                            pm2 reload all
                            cd
                            ftp 192.168.64.2
                            exit
                """
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