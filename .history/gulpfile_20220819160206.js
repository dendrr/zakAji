




const { src, dest } = require('gulp')
const include = require('gulp-file-include')

function html() {
  // src(["*.htm", "products/*.html", "product catalog/*.html"])
  return src("*.htm")
    .pipe(include({
      prefix: '@@'
    }))
    .pipe(dest('dist'))
}

exports.html