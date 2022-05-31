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
          withSonarQubeEnv('sonarQube') {                 
       sh '''SonarScanner \\                       
     -Dsonar.projectKey=nodejs \\                        
     -Dsonar.sources=. \\                       
     -Dsonar.host.url=http://10.0.0.4:9000 \\                       
     -Dsonar.login=541e5dead3bdc3fb2d610068aa0f5c5a10b08a7c'''              }            }       
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
