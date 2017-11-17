'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../src/components/layout/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 개념이 page이고, 규칙상 클래스 처럼 대문자 표기하기가 좀 난해해서 class 생성과 동시에 export 했습니다.

var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'render',
    value: function render() {
      // console.log(this.props);
      return _react2.default.createElement(_Layout2.default, null, _react2.default.createElement('div', { className: 'header' }, _react2.default.createElement('h1', null, 'Home')), _react2.default.createElement('div', { className: 'content' }, _react2.default.createElement('h2', { className: 'content-subhead' }, 'UserAgent'), _react2.default.createElement('p', null, this.props.userAgent), _react2.default.createElement('h2', { className: 'content-subhead' }, '\uC774 \uD398\uC774\uC9C0\uB294 \uC5B4\uB514\uC11C \uC654\uC744\uAE4C\uC694?'), _react2.default.createElement('p', null, '\uC774 \uD398\uC774\uC9C0\uB294 ', _react2.default.createElement('strong', null, this.props.from), '\uC5D0\uC11C \uC2E4\uD589\uB418\uC5C8\uC2B5\uB2C8\uB2E4.')));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
        var req = _ref.req;
        var userAgent;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
                return _context.abrupt('return', {
                  userAgent: userAgent,
                  from: req ? '서버' : '클라이언트'
                });

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return _class;
}(_react2.default.Component);
// export default () => (<Layout page={Index}/>);
// export default () => (<Layout content={Index}/>);


exports.default = _class;