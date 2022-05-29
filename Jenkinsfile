# Node.js
# Build a general Node.js project with npm.
# Add steps that analyze code, save build artifacts, deploy, and more:
# https://docs.microsoft.com/azure/devops/pipelines/languages/javascript

trigger:
- main

pool:
  vmImage: ubuntu-latest

steps:
- task: NodeTool@0
  inputs:
    versionSpec: '10.x'
  displayName: 'Install Node.js'

- script: |
    npm install
    npm run build
  displayName: 'npm install and build'

  - script: npx mocha

  - script: npm install -g @angular/cli

  - script: npm install

  - script: npm run compile

  - script: mocha test --reporter mocha-junit-reporter

  - script: npm test

  - task: PublishTestResults@2
  condition: succeededOrFailed()
  inputs:
    testRunner: JUnit
    testResultsFiles: '**/test-results.xml'

    - script: |
    nyc --reporter=cobertura --reporter=html \
    npm test -- --reporter mocha-junit-reporter --reporter-options mochaFile=./test-results.xml
  displayName: 'Build code coverage report'

- task: PublishCodeCoverageResults@1
  inputs: 
    codeCoverageTool: Cobertura # or JaCoCo
    summaryFileLocation: '$(System.DefaultWorkingDirectory)/**/*coverage.xml'
    reportDirectory: '$(System.DefaultWorkingDirectory)/**/coverage'

    - script: webpack

    - script: npm run build
