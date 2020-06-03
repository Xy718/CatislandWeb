pipeline {
  agent any
  stages {
    stage('Build1') {
      steps {
        sh 'npm install'
        sh 'ng build --prod'
        echo '123'
      }
    }

    stage('dist') {
      steps {
        archiveArtifacts(artifacts: 'dist/**', onlyIfSuccessful: true)
      }
    }

  }
}