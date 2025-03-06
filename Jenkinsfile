pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/iMeash1/final_prj_jenkins.git'
            }
        }

        stage('Run Prime Check') {
            steps {
                script {
                    sh "node isPrime.js"
                }
            }
        }
        
        stage('Archive Result') {
            steps {
                archiveArtifacts artifacts: 'result.html', fingerprint: true
            }
        }
    }

    post {
        success {
            publishHTML([
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: '',
                reportFiles: 'result.html',
                reportName: 'Prime Number Result'
            ])
        }
    }
}
