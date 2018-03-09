'use strict';

var gulp = require( 'gulp' ),
    sass = require( 'gulp-sass' ),
    autopref = require( 'gulp-autoprefixer' ),
    concat = require( 'gulp-concat' );

gulp.task( 'sass', function() {
    return gulp.src( 'src/**/**.sass' )
        .pipe(sass())
        .pipe(autopref({
            browsers: ['last 3 versions'],
            cascade: false
        }))
        .pipe(gulp.dest( 'public' ))
} );

gulp.task( 'watch', ['sass'], function() {
    gulp.watch( 'src/**/**.**', ['sass'] );
});

gulp.task('default', ['watch']);