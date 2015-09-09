/*********************************************************************
 * Created by Anton Baksheiev on 09.09.2015.                         *
 * linkedin: https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53 *
 *********************************************************************/
module.exports = function (grunt) {
// Project configuration.
    grunt.initConfig({
        concat: {
            mock_data: {
                src: ['app/mockJsonData/*.js'],
                dest: 'build/debug/mockJsonData/mock-datas.js',
            },
            browser: {
                src: ['app/components/browser/*.js'],
                dest: 'build/debug/components/browser.js',
            },
            navigation: {
                src: ['app/components/navigation/*.js'],
                dest: 'build/debug/components/navigation.js',
            },
            modalDialog: {
                src: ['app/components/modalDialog/**/*.js'],
                dest: 'build/debug/components/modal-dialog.js',
            },
            css: {
                src: ['content/css/app.css'],
                dest: 'build/debug/css/styles.css',
            }
        },
        cssmin: {
            target: {
                files: {
                    'build/prod/css/styles.min.css': ['build/debug/css/**/*.css'],

                }
            }
        },
        uglify: {
            js: {
                files: {
                    'build/prod/js/js.min.js': ['build/debug/**/*.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default',['concat','cssmin','uglify'])
}
