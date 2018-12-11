#!/usr/bin/env groovy

pipeline {

    agent {
        docker {
            image 'node'
            args '-u root'
        }
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                sh 'npm install'
            }
        }
        stage('Deploy') {
            when {
                branch 'master'
            }
            steps {
                script {
                    transfers = [
                        sshTransfer(cleanRemote: true, sourceFiles: '**', execCommand: 'docker-compose up --build -d')
                    ]
                }
                sshPublisher(failOnError: true, publishers: [sshPublisherDesc(configName: 'Flax', transfers: transfers)])
                slackSend channel: '#flax', color: 'good', message: 'Successfully built <https://flax.tanndev.com|website>.'
            }
        }
    }

    post {
        failure {
            slackSend channel: '#flax', color: 'danger', message: "Failed build. (<${env.JOB_URL}|Pipeline>) (<${env.BUILD_URL}console|Console>)"
        }
    }
}
