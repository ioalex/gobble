// Initialize modules
const fs = require("fs");
const gulp = require("gulp");
const { src, dest, watch, series, parallel } = require("gulp");
const fm = require("front-matter");

const plugins = require("gulp-load-plugins")({
  scope: ["devDependencies"],
});

// gulp plugins that do not begin with "gulp- or are too long"
const cachebust = require("gulp-cache-bust");
const nunjucksRender = require("gulp-nunjucks-render");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const browserSync = require("browser-sync").create();

// File Path Variables
const paths = {
  // src folder
  src: "src/",
  srcHTML: "src/**/*.html",
  srcSCSS: "src/styles/**/*.scss",
  srcJS: "src/scripts/**/*.js",
  srcImage: "src/images/**/*",
  srcSVG: "src/svg/**/*.svg",
  srcFonts: "src/fonts/**/*",
  srcPages: "src/pages/*.njk",
  srcTemplates: "src/templates/",

  // dist folder
  dist: "dist",
  distHTML: "dist/**/*.html",
  distIndex: "dist/index.html",
  distCSS: "dist/styles/",
  distJS: "dist/scripts/",
  distImage: "dist/images",
  distSVG: "dist/svg",
  distFonts: "dist/fonts",
};

// Run at start of project
function start() {
  return gulp
    .src("*.js", { read: false })
    .pipe(
      plugins.shell([
        "mkdir -p src src/images src/svg src/fonts src/styles  src/scripts src/scripts/vendors src/pages src/templates/partials",
        "mkdir -p src/styles/0-helpers src/styles/1-plugins src/styles/2-base src/styles/3-layout src/styles/4-modules src/styles/5-templates",
        "touch src/index.html src/styles/main.scss src/scripts/app.js",
        "touch src/styles/0-helpers/_0-helpers.scss src/styles/1-plugins/_1-plugins.scss src/styles/2-base/_2-base.scss src/styles/3-layout/_3-layout.scss src/styles/4-modules/_4-modules.scss src/styles/5-templates/_5-templates.scss",
      ]),
    );
}

// Get Front Matter Data
function getFrontMatterData(file) {
  const content = fm(String(file.contents));
  // eslint-disable-next-line no-param-reassign
  file.contents = Buffer.from(content.body);
  return content.attributes;
}

// Get JSON data
function getJSONData() {
  return JSON.parse(fs.readFileSync("./src/data.json"));
}

// Nunjucks Compiling
function nunjucksTask() {
  return (
    src(paths.srcPages)
      // Front Matter Data
      .pipe(plugins.data(getFrontMatterData))
      // JSON Data
      .pipe(plugins.data(getJSONData))
      .pipe(
        nunjucksRender({
          path: [paths.srcTemplates],
          ext: ".html",
        }),
      )
      .pipe(dest("src/"))
  );
}

// Build dist HTML
function htmlTask() {
  return src(paths.srcHTML)
    .pipe(plugins.htmlhint())
    .pipe(plugins.htmlhint.failAfterError())
    .pipe(
      plugins.htmlmin({
        collapseWhitespace: true,
        removeComments: true,
      }),
    )
    .pipe(dest(paths.dist))
    .pipe(browserSync.stream());
}

// SCSS task
function scssTask() {
  return src(paths.srcSCSS)
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass())
    .pipe(plugins.postcss([autoprefixer(), cssnano()]))
    .pipe(plugins.sourcemaps.write("."))
    .pipe(dest(paths.distCSS))
    .pipe(browserSync.stream());
}

// JS task (concat + minify) + obfuscate
function jsTask() {
  return src(paths.srcJS)
    .pipe(
      plugins.obfuscate({
        replaceMethod: plugins.obfuscate.LOOK_OF_DISAPPROVAL,
      }),
    )
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.concat("app.js"))
    .pipe(plugins.terser())
    .pipe(plugins.sourcemaps.write("."))
    .pipe(dest(paths.distJS))
    .pipe(browserSync.stream());
}

function ImageTask() {
  return src(paths.srcImage)
    .pipe(plugins.imagemin())
    .pipe(gulp.dest(paths.distImage))
    .pipe(browserSync.stream());
}

function svgTask() {
  return src(paths.srcSVG)
    .pipe(plugins.svgmin())
    .pipe(dest(paths.distSVG))
    .pipe(browserSync.stream());
}

function fontTask() {
  return src(paths.srcFonts)
    .pipe(plugins.fontmin())
    .pipe(dest(paths.distFonts));
}

// Cache-busting task ~ so we do not have to clear our cache every time we make a change

function cacheBustTask() {
  return src("dist/**/*.html")
    .pipe(cachebust())
    .pipe(dest("dist"))
    .pipe(browserSync.stream());
}

// Watch task
function watchTask() {
  watch(
    [paths.srcSCSS, paths.srcJS, paths.srcHTML],
    parallel(scssTask, jsTask, htmlTask),
  );
}

// Browser Sync
function browserSyncTask() {
  browserSync.init({
    server: {
      baseDir: "dist",
    },
  });
  // watch(paths.dist).on("change", cacheBustTask);
  watch(paths.dist).on("change", browserSync.reload);
}

// Run at beginning of project
exports.start = start;

exports.nunjucks = series(nunjucksTask, htmlTask);

exports.html = htmlTask;
exports.style = scssTask;
exports.script = jsTask;
exports.image = ImageTask;
exports.svg = svgTask;
exports.font = fontTask;

exports.cache = cacheBustTask;
exports.watch = parallel(watchTask, browserSyncTask);

exports.default = series(
  parallel(nunjucksTask, scssTask, jsTask),
  watchTask,
);
exports.build = series(
  nunjucksTask,
  htmlTask,
  scssTask,
  jsTask,
  ImageTask,
  svgTask,
  fontTask,
);
