pipeline {
    agent any

    parameters {
        string(name: 'NUMBER', defaultValue: '7', description: 'a number to check if its a prime number')
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/iMeash1/final_prj_jenkins.git'
            }
        }

        stage('Run Prime Check') {
            steps {
                script {
                    sh "export NUMBER=${params.NUMBER} && node isPrime.js"
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
