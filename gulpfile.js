var gulp   = require('gulp');
var header = require('gulp-header');
var fs     = require('fs');

require('web-component-tester').gulp.init(gulp);

gulp.task('vendor', function () {
  var license = fs.readFileSync('./node_modules/dropbox/LICENSE.txt', 'utf8');
  license = '/*\n' +  license +  '*/\n';

  gulp.src('./node_modules/dropbox/lib/dropbox.js')
    .pipe(header(license))
    .pipe(gulp.dest('vendor'));
});
