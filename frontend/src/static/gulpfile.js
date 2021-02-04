const gulp   = require("gulp")
const pug    = require("gulp-pug")
const rename = require("gulp-rename")

const pugify = () => {
    return gulp.src("*.pug")
        .pipe(pug({pretty: true}))
        .pipe(rename(path => {path.extname = '.svelte'}))
        .pipe(gulp.dest('../components'))          
}

exports.default = gulp.series(pugify)

