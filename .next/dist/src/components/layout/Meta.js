'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Meta = function Meta() {
    return _react2.default.createElement(_head2.default, null, _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://unpkg.com/purecss@1.0.0/build/pure-min.css',
        integrity: 'sha384-nn4HPE8lTHyVtfCBi5yW9d20FjT8BJwUXyWZT9InLYax14RDjBj46LmSztkmNP9w',
        crossOrigin: 'anonymous' }));
};

exports.default = Meta;