/// <binding AfterBuild='default' />
var gulp = require('gulp');
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
var gutil = require("gulp-util");
var babel = require("gulp-babel");

gulp.task("minify", function() {
    return gulp.src("wwwroot/js/**/*.js")
        .pipe(babel({
            presets: ["es2015"]
        }))
        .pipe(uglify())
        .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
        .pipe(concat("dutchtreat.min.js"))
        .pipe(gulp.dest("wwwroot/dist"));
});

gulp.task('default', ["minify"]);