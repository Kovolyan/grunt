module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                options: {
                    sourceMap: true,
                    outputStyle: 'compressed'
                },
                files: {
                    'css/main.css': 'sass/main.sass'
                }
            }
        },

        sprite: {
            all: {
                src: 'images/sprites/*',
                dest: 'images/sprites.png',
                destCss: 'sass/_sprites.sass',
                padding: 2
            }
        },

        // imagemin: {
        //     dynamic: {
        //         files: [{
        //             expand: true,
        //             cwd: 'images/',
        //             src: ['**/*.{png,jpg,gif}'],
        //             dest: 'images/build/'
        //         }]
        //     }
        // },

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
            sass: {
                files: ['sass/*.sass'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                }
            },

            sprite: {
                files: ['images/sprites/*'],
                tasks: ['sprite']
            },

            scripts: {
                files: ['js/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false,
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-spritesmith');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');



    grunt.registerTask('default', ['concat', 'uglify', /*'imagemin'*/,'sass', 'sprite']);

};