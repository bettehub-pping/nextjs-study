'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

var _Meta = require('./Meta.js');

var _Meta2 = _interopRequireDefault(_Meta);

var _Nav = require('./Nav');

var _Nav2 = _interopRequireDefault(_Nav);

var _Footer = require('./Footer.js');

var _Footer2 = _interopRequireDefault(_Footer);

var _LayoutCSS = require('../../../assets/css-jsx/layout/LayoutCSS');

var _LayoutCSS2 = _interopRequireDefault(_LayoutCSS);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Layout = function Layout(_ref) {
  var children = _ref.children;
  return _react2.default.createElement('div', null, _react2.default.createElement(_head2.default, null, _react2.default.createElement(_Meta2.default, null), _react2.default.createElement(_LayoutCSS2.default, null)), _react2.default.createElement('div', { id: 'layout' }, _react2.default.createElement(_Nav2.default, null), _react2.default.createElement('div', { id: 'main' }, children), _react2.default.createElement(_Footer2.default, null)));
};

exports.default = Layout;