pipeline {
  agent any
  stages {
    stage('Build1') {
      steps {
        sh 'npm install'
        sh 'npm run build-prod'
        echo '123'
      }
    }

    stage('deploy') {
      steps {
        echo '开始部署'
        sh '''rm -rf /var/www/ivory/*

        cp -r .htaccess dist/CatislandWeb/

        cp -r dist/CatislandWeb/. /var/www/ivory/
        cp -r dist/CatislandWeb/.htaccess /var/www/ivory/

        service apache2 restart'''
      }
    }

    stage('dist') {
      steps {
        archiveArtifacts(artifacts: 'dist/**', onlyIfSuccessful: true)
      }
    }
  }
}