var gulp = require("gulp");
var shell = require("gulp-shell");

  gulp.task("pre-install", shell.task([
        "npm i -g gulp static-server",
        "npm install -g nodemon",
        "npm install -g gulp-shell"
  ]));

  gulp.task("serve", shell.task("nodemon server.js"));

  gulp.task("lint", shell.task("jshint *.js **/*.js"));
  
  gulp.task("get", shell.task("curl -v http://localhost:8000/../file.txt"));

  gulp.task("put", shell.task("curl -X PUT -d hello http://localhost:8000/file.txt"));
  
  gulp.task("delete", shell.task("curl -X DELETE http://localhost:8000/file.txt"));
 
  gulp.task("mkcol", shell.task("curl -X MKCOL http://localhost:8000/file.txt"));
 
  gulp.task("documenta", shell.task("documentation build ldj-client.js -f md > doc1.md"));