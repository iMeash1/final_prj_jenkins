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
            script {
                def discordWebhookURL = "https://discord.com/api/webhooks/https://discord.com/api/webhooks/1347194658215956501/Sq1VovogsVMJ9e9OtgAa1FDopFbPjWP3dZUczqpWUhgtQuBjXB3V69ZIDOEPSGMLAj1-"
                def message = "✅ *Jenkins Job Completed Successfully!* \\n📄 [View Result](JENKINS_URL/job/isPrime/ws/result.html)"

                sh """
                curl -H "Content-Type: application/json" \
                     -X POST \
                     -d '{ "content": "${message}" }' \
                     ${discordWebhookURL}
                """
            }
            
            publishHTML([
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: '',
                reportFiles: 'result.html',
                reportName: 'Prime Number Result'
            ])
        }

        failure {
            script {
                def discordWebhookURL = "https://discord.com/api/webhooks/https://discord.com/api/webhooks/1347194658215956501/Sq1VovogsVMJ9e9OtgAa1FDopFbPjWP3dZUczqpWUhgtQuBjXB3V69ZIDOEPSGMLAj1-"
                def message = "❌ *Jenkins Job Failed!*"

                sh """
                curl -H "Content-Type: application/json" \
                     -X POST \
                     -d '{ "content": "${message}" }' \
                     ${discordWebhookURL}
                """
            }
        }
    }
}
