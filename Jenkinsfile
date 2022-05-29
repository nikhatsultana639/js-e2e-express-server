node('built-in') {
    stage('clone from git')
    {
     git branch: 'main', url: 'https://github.com/nikhatsultana639/js-e2e-express-server.git'
    }
    stage('build')
    {
            sh "npm install"
          }
    stage('test')
    {
        sh "npm test"
    }
    stage('package')
    {
        sh "npm pack"
    }
}
