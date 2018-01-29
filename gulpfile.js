const gulp = require('gulp');
const uglify = require('gulp-uglify');

gulp.task('default', function() {
    // 1. 找到文件
	gulp.src('./dist/app.bundle.js')
    // 2. 压缩文件
	.pipe(uglify({ mangle: true }))
    // 3. 另存压缩后的文件
	.pipe(gulp.dest('./dist/min'));
});
