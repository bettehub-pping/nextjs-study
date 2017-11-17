'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostLink = function PostLink(_ref) {
  var id = _ref.id,
      title = _ref.title;
  return _react2.default.createElement('li', null, _react2.default.createElement(_link2.default, { as: '/post/' + id, href: '/post?title=' + title }, _react2.default.createElement('a', null, title)));
};

var Query = function Query(props) {
  return _react2.default.createElement('div', null, _react2.default.createElement('h2', { className: 'content-subhead' }, 'Clean URLs with Route Masking'), _react2.default.createElement('p', null, '\uC544\uB798 \uB9C1\uD06C\uB294 \uCFFC\uB9AC\uB97C \uB0A0\uB824 \uC0DD\uC131\uD588\uACE0, url\uB3C4 ?key=value\uAC00 \uC544\uB2CC \uBC29\uC2DD\uC73C\uB85C \uC7AC\uAD6C\uC131 \uD588\uC2B5\uB2C8\uB2E4.', _react2.default.createElement('br', null), '\uC774\uB97C \uC704\uD574 \uCEE4\uC2A4\uD140 \uC11C\uBC84\uB97C \uAD6C\uC131\uD588\uC2B5\uB2C8\uB2E4.'), _react2.default.createElement('ul', null, _react2.default.createElement(PostLink, { id: 'hello-nextjs', title: 'Hello Next.js' }), _react2.default.createElement(PostLink, { id: 'learn-nextjs', title: 'Learn Next.js is awesome' }), _react2.default.createElement(PostLink, { id: 'deploy-nextjs', title: 'Deploy apps with Zeit' })));
};

exports.default = Query;