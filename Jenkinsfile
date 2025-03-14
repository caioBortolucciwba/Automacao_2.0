pipeline { 
    agent any

    environment {
        NODE_ENV = 'test'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/caioBortolucciwba/Automacao_2.0.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }

        stage('Run Cypress Tests') {
            steps {
                script {
                    sh 'npx cypress run'
                }
            }
        }

        stage('Publish Report') {
            steps {
                script {
                    // Gerar relatório no formato JUnit
                    sh 'npx cypress run --reporter junit --reporter-options "mochaFile=results/test-results.xml,toConsole=true"'
                }
                // Publica os relatórios de testes no Jenkins
                junit 'results/test-results.xml'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'cypress/screenshots/**', fingerprint: true
            archiveArtifacts artifacts: 'cypress/videos/**', fingerprint: true
        }
        failure {
            mail to: 'caio.bortolucci@wba.com.br',
                subject: 'Falha nos Testes Cypress',
                body: 'Os testes do Cypress falharam! Verifique o Jenkins.'
        }
    }
}
