'use strict';

/*!
 *  @author  Михаил Драгункин <contact@unsektor.com>
 */

var gulp = require('gulp');
var sass = require('gulp-sass');
var prefixer = require('gulp-autoprefixer');

var path = {
    'src': {
        'vendor': './bower_components/',
        'style': './frontend_src/',
    },
    'build': {
        'vendor': './web/static/vendor/',
        'style': './web/static/',
    }
};

/**
 * Main installation.
 */
gulp.task('assets:install:main', function () {
    gulp.src(path.src.style + '*.scss')
        .pipe(sass())
        .pipe(prefixer())
        .pipe(gulp.dest(path.build.style));
});

/**
 * Main vendor install task.
 */
gulp.task('vendor:install', ['vendor:install:animate.css']);

gulp.task('vendor:install:animate.css', function () {
    gulp
        .src(path.src.vendor + 'animate.css/*.min.css')
        .pipe(gulp.dest(path.build.vendor + 'animate.css/'));
});

/**
 * Main assets install task.
 */
gulp.task('assets:install', ['assets:install:main']);

/**
 * Main task.
 */
gulp.task('default', ['assets:install', 'vendor:install']);
