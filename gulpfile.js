const gulp = require('gulp')
const babel = require('gulp-babel')
const path = require('path')
const through2 = require('through2')
const merge2 = require('merge2')
const runSequence = require('run-sequence')
const tsperset = require('gulp-typescript')
const transformSass = require('./build/transformSass')
const rimraf = require('rimraf')

const cwd = process.cwd()
const libDir = path.join(cwd, 'lib')
const esDir = path.join(cwd, 'es')

const compile = (modules) => {
  rimraf.sync(modules !== false ? libDir : esDir)
  const sass = gulp
    .src(['components/**/*.scss', '!components/**/_*.scss'])
    .pipe(
      through2.obj(function (file, encoding, next) {
        // this.push(file.clone())

        if (file.path.match(/\/style\/.*\.scss$/)) {
          transformSass(file.path)
            .then((css) => {
              file.contents = Buffer.from(css)
              file.path = file.path.replace(/\.scss$/, '.css')
              this.push(file)
              next()
            })
            .catch((e) => {
              console.error(e)
            })
        } else {
          next()
        }
      })
    )
    .pipe(gulp.dest(modules === false ? esDir : libDir))
  const assets = gulp
    .src(['components/**/*.@(png|svg|eot|ttf|woff|woff2|otf)'])
    .pipe(gulp.dest(modules === false ? esDir : libDir))

  const js = gulp
    .src(['components/**/*.@(js|jsx)'])
    .pipe(
      babel({
        presets: ['@babel/preset-env', '@babel/preset-react'],
        plugins: ['@babel/plugin-transform-runtime', ['transform-remove-console', { exclude: ['error', 'warn'] }]],
        ignore: ['components/index.js']
      })
    )
    .pipe(
      through2.obj(function (file, encoding, next) {
        if (file.path.match(/\/style\/.*\.js$/)) {
          const cssContent = file.contents.toString().replace(/\.scss/g, '.css')
          file.contents = Buffer.from(cssContent)
          this.push(file)
          next()
        } else {
          this.push(file)
          next()
        }
      })
    )
    .pipe(gulp.dest(modules === false ? esDir : libDir))

  const json = gulp.src(['components/**/*.@(json)']).pipe(gulp.dest(modules === false ? esDir : libDir))
  const dtsByfile = gulp.src(['components/**/*.@(d.ts)']).pipe(gulp.dest(modules === false ? esDir : libDir))
  const tsResult = gulp.src(['components/hi-request/*.@(ts)']).pipe(
    tsperset({
      alwaysStrict: true,
      noUnusedParameters: true,
      removeComments: true,
      preserveConstEnums: true,
      sourceMap: true,
      forceConsistentCasingInFileNames: true,
      strictPropertyInitialization: true,
      noImplicitReturns: true,
      moduleResolution: 'node',
      strictNullChecks: true,
      esModuleInterop: true,
      noUnusedLocals: true,
      importHelpers: true,
      noImplicitThis: true,
      skipLibCheck: true,
      jsx: 'react',
      allowJs: true,
      target: 'es5',
      module: 'es6',
      lib: ['es5', 'es2015', 'dom', 'es7', 'es2018'],
      declaration: true
    })
  )
  const hiRequestlibDir = path.join(cwd, 'lib', 'hi-request')
  const hiRequestesDir = path.join(cwd, 'es', 'hi-request')
  const dts = tsResult.dts.pipe(gulp.dest(modules === false ? hiRequestesDir : hiRequestlibDir))
  const ts2js = tsResult.js.pipe(gulp.dest(modules === false ? hiRequestesDir : hiRequestlibDir))

  return merge2([sass, assets, js, json, dtsByfile, dts, ts2js])
}

gulp.task('compile', () => compile(false))

gulp.task('carry', () => {
  gulp.src(['./site/static/**/*.*']).pipe(gulp.dest('./dist/static'))
})

gulp.task('default', () => {
  runSequence('compile')
})
