const sonarqubeScanner = require('sonarqube-scanner');
     sonarqubeScanner({
       serverUrl: 'http://20.115.37.73:9000',
       options : {
            'sonar.login' : 'sonar' ,
            'sonar.language' : 'js' ,
            'sonar.sourceEncoding' : 'UTF-8' ,
       'sonar.sources': '.',
       'sonar.inclusions' : 'src/**' // Entry point of your code
       }
     }, () => {});
