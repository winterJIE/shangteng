module.exports = function( grunt ) {
  grunt.initConfig({
    // 编译less
    less: {
      options: {
        yuicompress: true,
        sourceMap: true,
        sourceMapBasepath: './css',
        sourceMapFilename: './css/cmss.css.map'
      },
      compile: {
        files: [
          {
            expand: true, //启用动态扩展
            cwd: './less', // css文件源的文件夹
            src: ['cmms.less'], // 匹配规则
            dest: './css/', //导出css和雪碧图的路径地址
            ext: '.min.css' // 导出的css名
          }
        ]
      }
    },
    // 压缩css
    cssmin: {
      min: {
        files: [
          {
            expand: true,
            cwd: './css/',
            src: ['*.min.css'],
            dest: './css',
            ext: '.css'
          }
        ]
      }
    },
    pngmin: {
      compile: {
        options: {
          ext: '.png',
          force:true,
          iebug: true //IE6
        },
        files: [
          {
            src: ['/images/*.png'],
            dest: 'images/pngmin'
          }
        ]
      }
    },
    watch: {
      files: './less/*.less',
      tasks: ['less','cssmin']
    }

  });

  grunt.loadNpmTasks( "grunt-contrib-less" );
  //grunt.loadNpmTasks('grunt-pngmin');
  //grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks( "grunt-contrib-watch");

  grunt.registerTask('default', ['less','cssmin','watch']);
}