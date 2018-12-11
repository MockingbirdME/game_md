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
                        sshTransfer(sourceFiles: '**', execCommand: 'docker-compose up --build -d')
                    ]
                }
                sshPublisher(publishers: [sshPublisherDesc(configName: 'Maelstrom Droplet', transfers: transfers)])
            }
        }
    }

    post {
        success {
            // TODO Differentiate between master, branch, and PR builds.
            slackSend color: 'good', message: 'Successfully built <https://devon.tanndev.com|Devon\'s Game>.'
        }
        failure {
            slackSend color: 'danger', message: "Failed to build Devon's Game. (<${env.JOB_URL}|Pipeline>) (<${env.BUILD_URL}console|Console>)"
        }
    }
}
