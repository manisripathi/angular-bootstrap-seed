var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var modRewrite  = require('connect-modrewrite');
var sass        = require('gulp-sass');


// Static Dev Server
gulp.task('start', function() {
    browserSync.init({
        port: 8080,
        server: {
            baseDir: "./src",
            middleware: [
                modRewrite([
                  '!\\.\\w+$ /index.html [L]'
                ])
            ]
        }        
    });

    gulp.watch(["src/scss/*.scss"], ['sass']);
    gulp.watch([
        "src/templates/*.html",
        "src/templates/*/*.html",
        
        "src/js/*.js",
        "src/js/*/*.js"
        ]).on('change', browserSync.reload);
});


// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("src/scss/app.scss")
        .pipe(sass())
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});