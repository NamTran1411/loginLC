pipeline {
    agent any

    tools {
        nodejs "nodejs"
    }

    stages { // Một khối stages bao gồm nhiều khối stage
        stage("install") {
            steps { // Một khối stage tương ứng với một giai đoạn trong pypline
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