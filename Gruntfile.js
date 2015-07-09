'use strict';
/**
* Gruntfile.js is used to configure or define tasks and load Grunt plugins.
*
* Use uglify with Grunt to minify all ".js" file in documentation
* Use yuidoc to generate the docs
*
* @class Gruntfile
* @module Grunt file
* @date 13/05/2015
* @author BALARD Cédric <cedric@yocto.re>
* @copyright Yocto SAS, All Right Reserved <http://www.yocto.re>
*
*/
module.exports = function(grunt) {
  // init config
  grunt.initConfig({
    // default package
    pkg : grunt.file.readJSON('package.json'),

    /**
    * Jshint permit to flags suspicious usage in programs
    * @submodule jshint
    */
    jshint : {
      options : {
        node : true,
        yui : true,
      },
      all : [ 'server.js',
      'src/app/**/*.js',
      'src/app/**/*.json'
    ]},

    /**
    * @submodule uglify
    */
    uglify : {
      my_target : {
        files : {
           'dist/app/models/controller.js' : ['src/app/models/controller.js'],
           'dist/app/routes/controller.js' : ['src/app/routes/controller.js'],
           'dist/app/defaultMessage.js' : ['src/app/defaultMessage.js']
        }
      }
     },

    /**
    * Yuidoc permit to generate the yuidoc
    *
    * @submodule yuidoc
    */
    yuidoc : {
      compile : {
        name        : '<%= pkg.name %>',
        description : '<%= pkg.description %>',
        version     : '<%= pkg.version %>',
        url         : '<%= pkg.homepage %>',
        options     : {
          paths   : '.',
          outdir  : 'documentation',
          exclude : 'Gruntfile.js, example, dist, documentation, node_modules'
        }
      },
    },

    /**
    * Mocah unit test
    */
    mochacli : {
      options : {
        'reporter'       : 'spec',
        'inline-diffs'   : false,
        'no-exit'        : true,
        'force'          : false,
        'check-leaks'    : true,
        'bail'           : false
      },
      web : {
        options : {
          files   : ['test/web/httpRequest.js'],
          timeout : 20000
        }
      },
        all : [ 'test/*.js' ]
    }

  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-yuidoc');
  grunt.loadNpmTasks('grunt-apidoc');
  grunt.loadNpmTasks('grunt-execute');
  grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-mocha-cli');

  // register task
  grunt.registerTask('default', [ 'jshint', 'yuidoc', 'uglify']);
  grunt.registerTask('minify', ['uglify']);
  grunt.registerTask('tests', 'mochacli');
  grunt.registerTask('testWeb', 'mochacli:web');
};
