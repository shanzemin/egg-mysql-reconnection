# egg-mysql-reconnection

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-mysql-reconnection.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-mysql-reconnection
[travis-image]: https://img.shields.io/travis/eggjs/egg-mysql-reconnection.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-mysql-reconnection
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-mysql-reconnection.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-mysql-reconnection?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-mysql-reconnection.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-mysql-reconnection
[snyk-image]: https://snyk.io/test/npm/egg-mysql-reconnection/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-mysql-reconnection
[download-image]: https://img.shields.io/npm/dm/egg-mysql-reconnection.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-mysql-reconnection

<!--
Description here.
-->

## Install

```bash
$ npm i egg-mysql-reconnection --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.mysqlReconnection = {
  enable: true,
  package: 'egg-mysql-reconnection',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.mysqlReconnection = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
