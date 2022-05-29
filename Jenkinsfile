pipeline {
    agent { label 'built-in' }
    stages{
    stage('clone from git')
    {
        step}
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
    stage('Build the Code and sonarqube-analysis') {
            steps {
                withSonarQubeEnv('sonarQube') {
                    sh script: "npm run sonar"
                }
            }
}
}
}
