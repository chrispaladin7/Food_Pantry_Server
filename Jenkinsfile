pipeline {
  agent {
    label 'qa'
  }

  tools { nodejs 'NodeJS 18.9.1' }

  stages {
    stage('Build') {
      steps {
        echo 'Building the application....'
        echo "$USER"
        sh '''
        #!/bin/bash
        rm -rf *.tar.gz
        npm install
        npm i sequelize-cli
        sudo npm run standup-db
        tar czf node-build.tar.gz config controllers middleware migrations models queries routes seeders package.json package-lock.json server.js
        '''
      }
    }

    stage('Test') {
      steps {
        echo 'Testing the application...'
        sh 'npm run test'
      }
    }

    stage('Deploy') {
      steps {
        echo 'Deploying the application...'
        sshPublisher(publishers: [sshPublisherDesc(configName: 'qa-server', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: '''
        cd /home/akamenev64/workspace/"FoodPantry API"
        sudo mv node-build.tar.gz /var/www/food_api
        cd /var/www/food_api
        sudo tar xzf node-build.tar.gz
        sudo rm node-*.tar.gz
        sudo npm install
        sudo npm run standup-db
        sudo npm run deploy-qa
        ''', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ] + ', remoteDirectory: '.', remoteDirectorySDF: false, removePrefix: '', sourceFiles: ' *.tar.gz')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: true)])
      }
    }
  }
  post {
        always {
            emailext body: '$DEFAULT_CONTENT', 
            to: 'akamenev64@gmail.com',
            // recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'RequesterRecipientProvider']],
            subject: '$DEFAULT_SUBJECT'
        }
    }
}
