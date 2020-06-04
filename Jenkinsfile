pipeline {
  agent any
  stages {
    stage('构建') {
      steps {
        echo '开始构建'
        sh 'npm install'
        sh 'npm run build-prod'
        echo '构建结束'
      }
    }
    stage('打包到制品库') {
      steps {
        echo '开始打包'
        sh '''
        cp -r .htaccess dist/CatislandWeb/
        '''
        archiveArtifacts(artifacts: 'dist/**', onlyIfSuccessful: true)
        echo '打包结束'
      }
    }
    stage('部署') {
      steps {
        echo '开始部署'
        sh '''

        rm -rf /var/www/ivory/*
        cp -r dist/CatislandWeb/. /var/www/ivory/
        cp -r dist/CatislandWeb/.htaccess /var/www/ivory/

        service apache2 restart
        '''
        echo '部署结束'
      }
    }



    stage('提示') {
      steps {
        emailext(subject: 'Biki_', body: '宝贝嗯嗯哦哦啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊', attachLog: true, compressLog: true)
        echo 'biki的提示邮件发送完毕'
      }
    }
  }
}