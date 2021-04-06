const done = () => {}
const gulp = require(`gulp`)
const sourcemaps = require(`gulp-sourcemaps`)
const plumber = require(`gulp-plumber`)
const pug = require(`gulp-pug`)
const cleanCSS = require(`gulp-clean-css`)
const shorthand = require(`gulp-shorthand`)
// const htmlValidator/* = require(`gulp-w3c-html-validator`);
const eslint = require(`gulp-eslint`)
const babel = require(`gulp-babel`)
const terser = require(`gulp-terser`)
const rename = require(`gulp-rename`)
const image = require(`gulp-image`)
const responsive = require(`gulp-responsive`)
const sync = require(`browser-sync`)
const gutil = require(`gulp-util`)
const ftp = require(`gulp-ftp`)
const {convertAllFonts} = require(`@hayes0724/web-font-converter`)
const postcss = require(`gulp-postcss`)
const colors = require(`colors`)
const del = require(`del`)
const svgo = require(`gulp-svgo`)


// PUG
// ===
const pug2html = () => {
	return gulp.src(`dev/pages/*.pug`)
		.pipe(plumber())
		// .pipe(pugLinter({ reporter: `default` }))
		.pipe(pug({
			pretty: true
		}))
		.pipe(gulp.dest(`build`))
		.pipe(sync.stream());
	// .pipe(htmlValidator())
}
exports.pug2html = pug2html;
// ---


// ==== CSS ====
const autoprefixer = require(`autoprefixer`)
const cssnext = require(`postcss-preset-env`)
// const cssnext = require(`cssnext`);
const precss = require(`precss`)
const cssnano = require(`cssnano`)
const fs = require(`fs`)
const cssImport = require("postcss-import")
const postcssFixes = require(`postcss-fixes`)
// const andImport = fs.readFileSync("./dev/`tyles/style.css", "utf8`);
// const doiuse = require(`doiuse`)
const animate = require(`postcss-animation`)
const postcssCustomMedia = require(`postcss-custom-media`)
const gap = require(`postcss-gap`)
const negativePadding = require(`postcss-negative-padding`)
const quantityQueries = require(`postcss-quantity-queries`)
const defineProperty = require(`postcss-define-property`)
const stylelint = require(`stylelint`)
const presetEnv = require(`postcss-preset-env`)
const reporter = require(`postcss-reporter`)({clearReportedMessages: true})
const uncss = require(`postcss-uncss`)({html: `./build/index.html`})

const styles = () => {
	const plugins = [
		defineProperty,
		autoprefixer({
			cascade: true,
			flexbox: true,
			grid: `autoplace`,
		}),
		postcssFixes,
		animate,
		postcssCustomMedia,
		gap,
		negativePadding,
		cssnext,
		precss,
		//uncss,
		cssnano({preset: `default`, }),
	];

		// .pipe(concat(`style.css`))
	return gulp.src(`./dev/styles/style.css`)
		.pipe(sourcemaps.init())
		.pipe(postcss(plugins))
		.pipe(shorthand())
		.pipe(sourcemaps.write(`.`))
		.pipe(gulp.dest(`./build/css`))
		.pipe(sync.stream())
}
exports.styles = styles
// ---- css ----



const stylesBuild = () => {
	const plugins = [
		defineProperty,
		autoprefixer({
			cascade: true,
			flexbox: true,
			grid: `autoplace`,
		}),
		postcssFixes,
		animate,
		postcssCustomMedia,
		gap,
		negativePadding,
		cssnext,
		precss,
		uncss,
		cssnano({preset: `default`, }),
	];

	return gulp.src(`./dev/styles/*.css`)
		.pipe(sourcemaps.init())
		.pipe(concat(`style.css`))
		.pipe(postcss(plugins))
		.pipe(shorthand())
		.pipe(sourcemaps.write(`.`))
		.pipe(gulp.dest(`./build/css`))
		.pipe(sync.stream())
}
exports.stylesBuild = stylesBuild
// --


// ==== JS ====
const concat = require(`gulp-concat`);
const scripts = () => {
	// return gulp.src(`dev/js/main.js`)
	return gulp.src(`dev/js/*.js`)
		// .pipe(eslint())
		// .pipe(eslint.format())
		.pipe(sourcemaps.init())
		.pipe(concat(`main.js`))
		.pipe(babel({
			presets: [`@babel/env`]
		}))
		.pipe(terser())
		.pipe(sourcemaps.write())
		.pipe(rename({suffix: `.min`}))
		.pipe(gulp.dest(`build/js`))
		.pipe(sync.stream())

}
exports.scripts = scripts;


// ==== IMG ====
const svgDev = () => {
	return gulp.src(`dev/img/*.svg`)
		.pipe(svgo())
		.pipe(gulp.dest(`build/img`))
}
exports.svgDev = svgDev



const imgDev = () => {
	// add webp, copy just as several pics with differernt names
	return gulp.src([
		`dev/img/**/*`
	], {
		base: `dev`
	})
		.pipe(gulp.dest(`build/`))
}
exports.imgDev = imgDev;

const getWebp = () => {
	return gulp.src(`dev/img/**/*.{png,jpg}`)
		.pipe(
			responsive({
				"**/*.png": [
					{progressive: true, },
					{format: `webp`, },
					{
						withoutEnlargement: false,
						width: `100%`,
					},
				],
				"**/*.jpg": [
					{progressive: true},
					{format: `webp`},
					{
						withoutEnlargement: false,
						width: `100%`,
					},
				],
			})
		)
		.pipe(gulp.dest(`build/img`));
}
exports.getWebp = getWebp

const imgMultiply = () => {
	return gulp.src(`dev/img/**/*.{png,jpg,jpeg}`)
		.pipe(
			responsive({
				"**/*.png": [
					{progressive: true, },
					{format: `webp`, },
					{
						withoutEnlargement: false,
						width: `200%`,
						rename: {suffix: `@2`},
					},
					{
						withoutEnlargement: false,
						width: `200%`,
						format: `webp`,
						rename: {suffix: `@2`},
					},
				],
				"**/*.jpg": [
					{progressive: true},
					{format: `webp`},
					{
						withoutEnlargement: false,
						width: `200%`,
						rename: {suffix: `@2`}
					},
					{
						withoutEnlargement: false,
						width: `200%`,
						format: `webp`,
						rename: {suffix: `@2`},
					},
				],
			})
		)
		.pipe(gulp.dest(`tempImages/multiplied`));
}
exports.imgMultiply = imgMultiply


const imgBuildPhotoshopPics = () => {
	return gulp.src(`tempImages/multiplied/**/*`)
		.pipe(image({
			pngquant: true,
			optipng: true,
			zopflipng: true,
			jpegRecompress: false,
			mozjpeg: true,
			gifsicle: true,
			svgo: true,
			concurrent: 10,
			quiet: false
		}))
		// .pipe(gulp.dest(`build-test/img`))
		.pipe(gulp.dest(`build/img`))
		.pipe(gulp.dest(`tempImages/optimized`))
	// преобразование в вебп, разные размеры картинок
}
exports.imgBuildPhotoshopPics = imgBuildPhotoshopPics


const imgBuild = () => {
	return gulp.src(`dev/img/**/*`)
		.pipe(image({
			pngquant: true,
			optipng: true,
			zopflipng: true,
			jpegRecompress: false,
			mozjpeg: true,
			gifsicle: true,
			svgo: true,
			concurrent: 10,
			quiet: false
		}))
		.pipe(gulp.dest(`build/img`))
}
exports.imgBuild = imgBuild
// ---- img ----


// ==== FTP
const loadFtp = () => {
	return gulp.src(`build/*`)
		.pipe(ftp({
			host: `website.com`,
			user: `johndoe`,
			pass: `1234`
		}))
		// you need to have some kind of stream after gulp-ftp to make sure it`s flushed
		// this can be a gulp plugin, gulp.dest, or any kind of stream
		// here we use a passthrough stream
		.pipe(gutil.noop())
}
exports.loadFtp = loadFtp
// ---- ftp


// ==== FONTS ====
const convertFonts = async () => {
	return gulp.src(`dev/fonts/*`, {read: false})
		.pipe(convertAllFonts({
			pathIn: `./dev/fonts`,
			pathOut: `./build/fonts/`,
			outputFormats: [`.woff`, `.woff2`],
			inputFormats: [`.ttf`, `.otf`],
			debug: false
		}))
		.pipe(gulp.dest(`build/fonts`))
		.pipe(sync.stream({
			once: true
		}))
}
exports.convertFonts = convertFonts


// ==== COPY ====
// `dev/img/**/*`,
const copy = () => {
	return gulp.src([
		`dev/fonts/**/*.woff`,
		`dev/fonts/**/*.woff2`,
	], {
		base: `dev`
	})
		.pipe(gulp.dest(`build`))
		.pipe(sync.stream({
			once: true
		}))
}
exports.copy = copy


// php
// ===
const php = () => {
	return gulp.src([`dev/php/**/*`], {base: `dev`})
		.pipe(gulp.dest(`build`))
		.pipe(sync.stream({once: true}))
}
exports.php = php

const htaccess = () => {
	return gulp.src([`dev/htaccess/**/*`], {base: `dev`})
		.pipe(gulp.dest(`build`))
		.pipe(sync.stream({once: true}))
}
exports.htaccess = htaccess

// ==== SERVER ====
const server = () => {
	sync.init({
		ui: false,
		notify: false,
		server: {
			baseDir: `build`
		}
	})
}
exports.server = server


// WATCH
// =====
const watch = () => {
	gulp.watch(`dev/pages/**/*.pug`, gulp.series(pug2html))
	gulp.watch(`dev/styles/**/*.css`, gulp.series(styles))
	gulp.watch(`dev/js/*.js`, gulp.series(scripts))

	gulp.watch(`dev/img/**/*`, gulp.series(imgDev))


	gulp.watch(`dev/fonts/**/*.{ttf, oft}`, gulp.series(convertFonts))
	gulp.watch(`dev/fonts/**/*.{woff, woff2}`, gulp.series(copy))
}
exports.watch = watch



// ==== DEAFULT ====
exports.default = gulp.series(
	gulp.parallel(
		pug2html,
		styles,
		scripts,
		copy,
		// imgDev
	),
	// `paths`,
	gulp.parallel(
		watch,
		server
	)
)
// ---- default


// ==== BUILD ====
const build = gulp.series(
	gulp.parallel(
		pug2html,
		styles,
		scripts,
		// imgMultiply,
		// imgBuild
	)
)
exports.build = build


// Preparation
// ===========
const prep = gulp.series(
	gulp.series(
		htaccess,
		getWebp,
		convertFonts
	)
)
exports.prep = prep


// ghpages
// =======
const ghpages = () => {
	return gulp.src(`build`)
		.pipe(gulp.dest(`docs/`))
}
exports.ghpages = ghpages
