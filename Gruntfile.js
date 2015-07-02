module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/js/<%= pkg.name %>.js',
        dest: 'app/assets/js/<%= pkg.name %>.min.js'
      }
    },
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'app/assets/css/origin.css': 'src/scss/origin.scss'
        }
      }
    },
    watch: {
      css: {
        files: 'src/scss/**/*',
        tasks: ['sass']
      },
      scripts: {
        files: ['src/js/*.js'],
        tasks: ['uglify']
      }
    }
  });

  // We want watch
    // Minify
    // Concat
    // JS Hint
    // Autoprefix
    // Image compression

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['sass']);

  //'uglify'

};