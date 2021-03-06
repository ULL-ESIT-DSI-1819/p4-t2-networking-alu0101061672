var gulp = require('gulp');
var shell = require('gulp-shell')

gulp.task("server", shell.task("node networking/net-watcher.js target.txt"));

gulp.task("client", shell.task("​​node net-watcher-ldj-client.js​"));

gulp.task("lint", shell.task("jshint *.js **/*.js"));

gulp.task("documenta", shell.task("documentation build networking/lib/ldj-client.js -f md > doc1.md"));

gulp.task("test", shell.task("npm test"));

gulp.task("nc", shell.task("nc​​ ​​localhost​​ ​​60300"));

gulp.task("tn", shell.task(​​"telnet​​ ​​localhost​​ ​​8000"));

gulp.task("nc8", shell.task("nc​​ ​​localhost​​ ​​8000"));

