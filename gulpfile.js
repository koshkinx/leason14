// 4) Встановити node.js та gulp.js . Зробити проект і спробувати запустити таск як на уроці,
//  перевірити чи працює у вас gulp
// Для вирішення цих задач можна використовувати fetch, async await, promise

const gulp = require("gulp");


gulp.task("hello", async function () {
  console.log("Hello, World!");
});


gulp.task("default", gulp.series("hello"));

const gulp = require('gulp');
const fetch = require('node-fetch');
const promise = require('gulp-promise');


gulp.task('fetch-data', async function () {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await response.json();
  console.log(data);
});


gulp.task('default', gulp.series('fetch-data'));