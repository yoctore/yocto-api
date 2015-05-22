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
               'app/**/*.js',
               'app/**/*.json'
               ]
     },

     /**
      * @submodule apidoc
      */
      apidoc: {
         myapp: {
           src: "app/",
           dest: "apidoc/"
         }
       },

     /**
      * Yuidoc permit to generate the yuidoc of the Yocto Stack Generator
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
     }
   });

   // Load the plugins
   grunt.loadNpmTasks('grunt-contrib-jshint');
   grunt.loadNpmTasks('grunt-contrib-yuidoc');
   grunt.loadNpmTasks('grunt-apidoc');

   // register task
   grunt.registerTask('default', [ 'jshint', 'yuidoc', 'apidoc']);
 };
