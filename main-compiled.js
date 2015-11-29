'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _yateLibRuntime = require('yate/lib/runtime');

var _yateLibRuntime2 = _interopRequireDefault(_yateLibRuntime);

require('./templates/hello.js');

var data = { username: 'tank' };
var result = _yateLibRuntime2['default'].run('hello', data);

console.log(result);
