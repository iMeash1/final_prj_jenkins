pipeline {
    agent any

    parameters {
        string(name: 'NUMBER', defaultValue: '7', description: 'number to check if its prime')
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/iMeash1/final_prj_jenkins'
            }
        }

        stage('Run Prime Check') {
            steps {
                script {
                    def result = sh(script: "node isPrime.js ${params.NUMBER}", returnStdout: true).trim()
                    echo result
                }
            }
        }
    }
}
