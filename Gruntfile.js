module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
                src: [
                    'js/jquery-1.11.2.min.js',
                    'js/jquery-ui.js',
                    'js/libs/*.js',
                    'js/functions.js'
                ],
                dest: 'js/build/production.js'
            }
        },
        uglify: {
            build: {
                files: {
                    'js/build/production.min.js': ['js/build/production.js']
                }
            }
        },

        watch: {
            scripts: {
                files: ['js/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false,
                },
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['concat', 'uglify', 'watch']);

};