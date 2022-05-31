pipeline {
    agent { label 'built-in' }
    stages{
    stage('clone from git')
    {
        steps{
     git branch: 'main', url: 'https://github.com/nikhatsultana639/js-e2e-express-server.git'
    }
    }
        stage('installing dependencies')
        {
            steps{
                sh "npm install"
            }
        }
        
    stage('test')
    {
        steps {
        sh "npm test"
        }
    }
    stage('package')
    {
        steps{
        sh "npm pack"
        }
    }
    stage("build & SonarQube analysis") {
            steps {
             def scannerHome = tool 'sonarQube';
                withsonarQubeEnv() {
                    sh "${scannerHome}/bin/sonar-scanner --version"
            }
         }
    }
        stage("Quality Gate") {
            steps {
              timeout(time: 5, unit: 'MINUTES') {
                waitForQualityGate abortPipeline: false
              }
            }
          }
    }
    }
