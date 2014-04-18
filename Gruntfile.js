module.exports = function (grunt) {

    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
//        uglify: {
//            options: {
//                banner: '/*! <%= pkg.name %> <%= grun.template.today("yyyy-mm-dd") %> */\n'
//            },
//            build: {
//                src: 'src/<%= pkg.name %>.js',
//                dest: 'build/<%= pkg.name %>.min.js'
//            }
//        },

        /**
         * Before generating any new files,
         * remove files from the previous build
         */
        clean: {
            tests: ['build/', 'site/']
        },

        /**
         * Beautify generated HTML to make diffs easier
         */
        prettify: {
            options: {
                indent: 4,
                condense: true,
                indent_inner_html: true,
                unformatted: [
//                    "a",
                    "pre"
                ]
            },
            files: {
                cwd: 'build/',
                expand: true,
                src: ['*.html'],
                ext: '.html',
                dest: 'site/'
            }
        },

        /**
         * Minify javascript to reduce file size
         */
        uglify: {
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'js',
                    src: '**/*.js',
                    dest: 'site/js'
                }]
            }
        },

        /**
         * Minify CSS to reduce file size
         */
        cssmin: {
            minify: {
                expand: true,
                cwd: 'css',
                src: '**/*.css',
                dest: 'site/css'
            }
        },

        /**
         * Copy resources to site directory
         */
        copy: {
            main: {
                expand: true,
                src: 'res/*',
                dest: 'site'
            }
        },

// WHAT ARE ASSETS?
        assemble: {
            options: {
//                assets: "path/to/assets",
                data: "path/to/config.json"
            },
            project: {
                options: {
                    layoutdir: 'layouts/',
                    layout: "default.hbs"
                },
                files: [
                    {
                        expand: true,
                        src: 'src/pages/**/*.hbs',
                        dest: 'build/',
                        flatten: true
                    }
                ]
            }
        }
    });
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-prettify');
    grunt.loadNpmTasks('assemble');

    // Default task(s).
    grunt.registerTask('default', ['clean', 'uglify', 'cssmin', 'copy', 'assemble', 'prettify']);
}