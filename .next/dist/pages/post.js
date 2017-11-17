'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../src/components/layout/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _Query = require('../src/components/query/Query');

var _Query2 = _interopRequireDefault(_Query);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Post = function Post(_ref) {
  var title = _ref.title;
  return _react2.default.createElement('div', null, _react2.default.createElement('div', { className: 'header' }, _react2.default.createElement('h1', null, title, ' - Query')), _react2.default.createElement('div', { className: 'content' }, _react2.default.createElement(_Query2.default, null)));
};

exports.default = function (props) {
  return _react2.default.createElement(_Layout2.default, null, _react2.default.createElement(Post, { title: props.url.query.title }));
};