pipeline {
    agent { label 'built-in' }
    stages{
    stage('clone from git')
    {
        steps{
     git branch: 'main', url: 'https://github.com/nikhatsultana639/js-e2e-express-server.git'
    }}
    stage('build')
    {
        steps{
            sh "npm install"
        }}
    stage('test')
    {
        steps {
        sh "npm test"
        }}
    stage('package')
    {
        steps{
        sh "npm pack"
        }}
    stage("build & SonarQube analysis") {
            steps {
              withSonarQubeEnv('sonarQube') {
                  sh '''npm run sonar \\
                        -Dsonar.projectKey=nodejs \\
                        -Dsonar.sources=. \\
                        -Dsonar.host.url=http://13.92.244.190:9000 \\
                        -Dsonar.login=be92a549674e30a274f9264ab933fb5797c0c767'''
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
