'use strict';
const path = require('path');
const BinWrapper = require('bin-wrapper');
const packageJson = require('../package.json');

const site = process.env.OPTIPNG_BINARY_SITE || process.env.npm_config_optipng_binary_site || 'https://raw.githubusercontent.com/imagemin/optipng-bin';

const url = `${site}/v${packageJson.version}/vendor/`;

module.exports = new BinWrapper()
	.src(`${url}macos/optipng`, 'darwin')
	.src(`${url}linux/x86/optipng`, 'linux', 'x86')
	.src(`${url}linux/x64/optipng`, 'linux', 'x64')
	.src(`${url}freebsd/x86/optipng`, 'freebsd', 'x86')
	.src(`${url}freebsd/x64/optipng`, 'freebsd', 'x64')
	.src(`${url}sunos/x86/optipng`, 'sunos', 'x86')
	.src(`${url}sunos/x64/optipng`, 'sunos', 'x64')
	.src(`${url}win/optipng.exe`, 'win32')
	.dest(path.resolve(__dirname, '../vendor'))
	.use(process.platform === 'win32' ? 'optipng.exe' : 'optipng');
