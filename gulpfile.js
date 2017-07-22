const gulp    = require('gulp'),
      styl    = require('gulp-stylus'),
      watch   = require('gulp-watch'),
      postCss = require('gulp-postcss');

gulp.task("style", function(){
    return gulp.src('./src/style/main.styl')
            .pipe(styl())
            .pipe(gulp.dest('./dist/css'))
});

gulp.task("moveHtml", function(){
    return gulp.src('./src/*.html')
            .pipe(gulp.dest('./dist'))
});

gulp.task("moveImage", function(){
    return gulp.src('./src/img/')
            .pipe(gulp.dest('./dist/img'))
});

gulp.task('watch', function(){
    gulp.watch('./src/style/**/*.styl', ["style"]);
    gulp.watch('./src/*.html', ["moveHtml"]);
    gulp.watch('./src/img/**', ["moveImage"]);
})
        
gulp.task("default", ["style"]);
