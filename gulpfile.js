var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var notify = require('gulp-notify');
var cleancss = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var assetRev = require('gulp-asset-rev');
var cssnano = require('gulp-cssnano');

var cssnano = require('gulp-cssnano');
gulp.task('style', function(){
    gulp.src(['./dist/*.css'])
         .pipe(cssnano())
         .pipe(gulp.dest('dist/css'));
});