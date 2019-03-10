var gulp = require('gulp');
var shell = require('gulp-shell')

gulp.task("server", shell.task("node net-watcher.js target.txt"));

gulp.task("client", shell.task("​​node ldj-client.js​"));

gulp.task("lint", shell.task("jshint *.js **/*.js"));

gulp.task("documenta", shell.task("documentation build lsj-client.js -f md > doc2.md"));

gulp.task("test", shell.task("npm test"));

