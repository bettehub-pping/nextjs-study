'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Nav = function Nav() {
  return _react2.default.createElement('div', null, _react2.default.createElement('nav', { id: 'menu' }, _react2.default.createElement('div', { className: 'pure-menu' }, _react2.default.createElement(_link2.default, { href: '/' }, _react2.default.createElement('a', { className: 'pure-menu-heading' }, 'Home')), _react2.default.createElement('ul', { className: 'pure-menu-list' }, _react2.default.createElement('li', { className: 'pure-menu-item' }, _react2.default.createElement(_link2.default, { href: '/about' }, _react2.default.createElement('a', { className: 'pure-menu-link' }, 'About'))), _react2.default.createElement('li', { className: 'pure-menu-item' }, _react2.default.createElement(_link2.default, { href: '/movie' }, _react2.default.createElement('a', { className: 'pure-menu-link' }, 'Movie')))))));
};

exports.default = Nav;