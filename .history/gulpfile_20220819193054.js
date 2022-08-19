




const { src, dest } = require('gulp')
const include = require('gulp-file-include')

function html() {
  // src(['*.htm', 'products/*.html', 'product catalog/*.html'])
  return src('product catalog/*.html').
    .pipe(include({
    prefix: '@@'
  }))
    .pipe(dest('dist'))
}

exports.html = html