import path from 'path';

import gulp from 'gulp';
import babel from 'gulp-babel';
import jasmine from 'gulp-jasmine';

const src = path.join('src', '**');
const dist = 'dist/';
const test = path.join('test/', '*.js');

gulp.task('build', () => {
    gulp.src(src)
        .pipe(babel())
        .pipe(gulp.dest(dist));
});

gulp.task('test', ()=>{
    gulp.src(test)
        .pipe(babel())
        .pipe(jasmine());
});