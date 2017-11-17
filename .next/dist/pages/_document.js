"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _document = require("next\\dist\\server\\document.js");

var _document2 = _interopRequireDefault(_document);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CustomDocument = function (_Document) {
  (0, _inherits3.default)(CustomDocument, _Document);

  function CustomDocument() {
    (0, _classCallCheck3.default)(this, CustomDocument);

    return (0, _possibleConstructorReturn3.default)(this, (CustomDocument.__proto__ || (0, _getPrototypeOf2.default)(CustomDocument)).apply(this, arguments));
  }

  (0, _createClass3.default)(CustomDocument, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement("html", { lang: "ko" }, _react2.default.createElement(_document.Head, null, _react2.default.createElement("meta", { charSet: "utf-8" }), _react2.default.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }), _react2.default.createElement("meta", { httpEquiv: "X-UA-Compatible", content: "IE=edge" }), _react2.default.createElement("meta", { name: "keywords", content: "\uD589\uBCF5\uC1FC\uD551, \uD589\uBCF5, \uC1FC\uD551, \uCEF4\uD4E8\uD130, PC, \uC870\uB9BDPC, \uC870\uB9BD\uCEF4\uD4E8\uD130, \uB178\uD2B8\uBD81, \uD0DC\uBE14\uB9BF, \uC0C1\uD488 \uCD94\uCC9C, \uAC00\uACA9\uBE44\uAD50, \uAC00\uACA9\uBE44\uAD50\uC0AC\uC774\uD2B8, \uAC00\uACA9\uBE44\uAD50 \uC2F8\uC774\uD2B8, \uAC00\uACA9 \uAC80\uC0C9, \uCD5C\uC800\uAC00, \uCD94\uCC9C, \uC778\uD130\uB137\uC1FC\uD551, \uC628\uB77C\uC778\uC1FC\uD551, \uC1FC\uD551, \uC1FC\uD551\uBAB0, \uC2F8\uAC8C \uD30C\uB294 \uACF3, \uC2F8\uAC8C \uC0B4 \uC218 \uC788\uB294 \uACF3" }), _react2.default.createElement("meta", { name: "description", content: "\uD589\uBCF5\uC1FC\uD551\uC740 \uCEF4\uD4E8\uD130, \uC870\uB9BDPC\uC5D0 \uD2B9\uD654\uB41C \uC628\uB77C\uC778 \uACAC\uC801 \uAC00\uACA9\uBE44\uAD50 \uC0AC\uC774\uD2B8 \uC785\uB2C8\uB2E4. \uC548\uC804\uAD6C\uB9E4\uC2DC\uC2A4\uD15C(\uC804\uC790\uBCF4\uC99D,\uC5D0\uC2A4\uD06C\uB85C)\uC744 \uAC16\uCD98 \uC1FC\uD551\uBAB0, \uBBF8\uB2C8\uC0F5\uC758 \uCD5C\uC800 \uAC00\uACA9 \uC815\uBCF4\uB97C \uBCF4\uC5EC\uB4DC\uB9BD\uB2C8\uB2E4. \uC1FC\uD551\uC758 \uD589\uBCF5! \uD589\uBCF5\uC1FC\uD551" }), _react2.default.createElement("link", { rel: "stylesheet", href: "https://unpkg.com/purecss@1.0.0/build/pure-min.css",
        integrity: "sha384-nn4HPE8lTHyVtfCBi5yW9d20FjT8BJwUXyWZT9InLYax14RDjBj46LmSztkmNP9w",
        crossOrigin: "anonymous" })), _react2.default.createElement("body", null, _react2.default.createElement(_document.Main, null), " ", _react2.default.createElement(_document.NextScript, null), " "));
    }
  }]);

  return CustomDocument;
}(_document2.default);

exports.default = CustomDocument;