module.exports = function (grunt) {
    'use strict';
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            dev: {
                files: ['*.html', 'org_css/*.css', 'org_js/*.js', 'org_images/**/*']
            }
        },
        //watch: {
        //    files: 'app/scss/**/*.scss',
        //    tasks: ['sass']
        //},
        browserSync: {
                bsFiles: {
                    src: [
                        'org_css/*.css',
                        '*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './'
                }
        }
        //imagemin: {
        //    /* 压缩图片大小 */
        //    dist: {
        //        options: {
        //            optimizationLevel: 8 //定义 PNG 图片优化水平
        //        },
        //        files: [
        //            {
        //                expand: true,
        //                cwd: 'img/',
        //                src: ['**/*.{png,jpg,jpeg}'], // 优化 img 目录下所有 png/jpg/jpeg 图片
        //                dest: 'images/' // 优化后的图片保存位置，覆盖旧图片，并且不作提示
        //            }
        //        ]
        //    }
        //}
    });
    //grunt.loadNpmTasks('grunt-contrib-imagemin');
    //grunt.registerTask('img', ['imagemin']);

    // 加载包含 "uglify" 任务的插件。
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    //默认被执行的任务列表。
    //grunt.registerTask('default', ['browserSync']);
    grunt.registerTask('default', ['browserSync', 'watch']);
};

