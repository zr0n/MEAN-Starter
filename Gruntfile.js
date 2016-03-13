module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: 'src/javascripts/main.js',
        dest: 'public/javascripts/main.min.js'
      }
    },
    less: {
        // Compile styles.
        style: {
            options: {
                compress: false,
                strictMath: true,
                outputSourceFiles: true,
                sourceMapFilename: 'style/moodle.css'
            },
            src: 'src/less/*.less',
            dest: 'public/stylesheets/style.css'
        },
    },
    cssmin: {
        options: {
            compatibility: 'ie8',
            keepSpecialComments: '*',
            noAdvanced: true
        },
        core: {
            files: {
                'public/stylesheets/style.min.css': 'public/stylesheets/style.css'
            }
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['uglify', 'less', 'cssmin']);

};
