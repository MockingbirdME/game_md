#!/usr/bin/env groovy

pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building...'

                // Build the image.
                script {
                    image = docker.build("jftanner/flax")
                }
            }
        }

        stage('Deploy') {
            when {
                branch 'master'
            }
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
                        image.push('latest')
                    }
                    sh 'ssh docker.tanndev.com rm -f flax-compose.yml'
                    sh 'scp docker-compose.yml docker.tanndev.com:flax-compose.yml'
                    sh 'ssh docker.tanndev.com docker-compose -f flax-compose.yml pull app'
                    sh 'ssh docker.tanndev.com docker-compose -f flax-compose.yml up -d'
                }
                slackSend channel: '#flax', color: 'good', message: 'Successfully published <https://flax.tanndev.com|Flax Website>.'
            }
        }
    }

    post {
        failure {
            slackSend channel: '#flax', color: 'danger', message: "Failed to build/publish Flax Website. (<${env.JOB_URL}|Pipeline>) (<${env.BUILD_URL}console|Console>)"
        }
    }
}
