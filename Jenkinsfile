pipeline {
    agent {
        label 'aws-ec2'
    }
    
    environment {
        DOCKER_IMAGE = 'meissa-portfolio'
        APP_PORT = '8880'
    }
    
    stages {
        stage('Checkout') {
            steps {
                echo "🔄 Récupération du code..."
                checkout scm
            }
        }
        
        stage('Docker Build') {
            steps {
                echo "🐳 Construction de l'image Docker..."
                sh "docker build -t ${DOCKER_IMAGE}:${BUILD_NUMBER} ."
                sh "docker tag ${DOCKER_IMAGE}:${BUILD_NUMBER} ${DOCKER_IMAGE}:latest"
            }
        }
        
        stage('Deploy') {
            steps {
                echo "🚀 Déploiement..."
                sh 'docker compose down || true'
                sh 'docker compose up -d'
                sh 'sleep 10'
            }
        }
    }
    
    post {
        success {
            echo "✅ Pipeline réussi !"
        }
        failure {
            echo "❌ Pipeline échoué !"
        }
        always {
            cleanWs()
        }
    }
}
