"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LayoutCSS = function LayoutCSS() {
    return _react2.default.createElement("style", { jsx: true }, "\n    body {\n        color: #333;\n    }\n\n    ul, ol {\n      list-style: none;\n    }\n\n    .pure-img-responsive {\n        max-width: 100%;\n        height: auto;\n    }\n\n    #layout,\n    #menu,\n    .menu-link {\n        -webkit-transition: all 0.2s ease-out;\n        -moz-transition: all 0.2s ease-out;\n        -ms-transition: all 0.2s ease-out;\n        -o-transition: all 0.2s ease-out;\n        transition: all 0.2s ease-out;\n    }\n\n    #layout {\n        position: relative;\n        left: 0;\n        padding-left: 0;\n    }\n        #layout.active #menu {\n            left: 150px;\n            width: 150px;\n        }\n\n        #layout.active .menu-link {\n            left: 150px;\n        }\n    .content {\n        margin: 0 auto;\n        padding: 0 2em;\n        max-width: 800px;\n        margin-bottom: 50px;\n        line-height: 1.6em;\n    }\n\n    .header {\n         margin: 0;\n         color: #333;\n         text-align: center;\n         padding: 2em;\n         border-bottom: 1px solid #eee;\n     }\n        .header h1 {\n            margin: 0.2em 0;\n            font-size: 3em;\n            font-weight: 500;\n        }\n\n    .content-subhead {\n        margin: 50px 0 20px 0;\n        font-weight: 400;\n        color: #666;\n    }\n      p strong {\n          color: #1f8dd6;\n      }\n\n    #menu {\n        margin-left: -150px; /* \"#menu\" width */\n        width: 150px;\n        position: fixed;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        z-index: 1000; /* so the menu or its navicon stays above all content */\n        background: #191818;\n        overflow-y: auto;\n        -webkit-overflow-scrolling: touch;\n    }\n        #menu a {\n            color: #999;\n            border: none;\n            padding: 0.6em 0 0.6em 0.6em;\n        }\n\n         #menu .pure-menu,\n         #menu .pure-menu ul {\n            border: none;\n            background: transparent;\n        }\n\n        #menu .pure-menu ul,\n        #menu .pure-menu .menu-item-divided {\n            border-top: 1px solid #333;\n        }\n            #menu .pure-menu li a:hover,\n            #menu .pure-menu li a:focus {\n                background: #333;\n            }\n\n        #menu .pure-menu-selected,\n        #menu .pure-menu-heading {\n            background: #1f8dd6;\n        }\n            #menu .pure-menu-selected a {\n                color: #fff;\n            }\n\n        #menu .pure-menu-heading {\n            font-size: 110%;\n            color: #fff;\n            margin: 0;\n        }\n    .menu-link {\n        position: fixed;\n        display: block; /* show this only on small screens */\n        top: 0;\n        left: 0; /* \"#menu width\" */\n        background: #000;\n        background: rgba(0,0,0,0.7);\n        font-size: 10px; /* change this value to increase/decrease button size */\n        z-index: 10;\n        width: 2em;\n        height: auto;\n        padding: 2.1em 1.6em;\n    }\n\n        .menu-link:hover,\n        .menu-link:focus {\n            background: #000;\n        }\n\n        .menu-link span {\n            position: relative;\n            display: block;\n        }\n\n        .menu-link span,\n        .menu-link span:before,\n        .menu-link span:after {\n            background-color: #fff;\n            width: 100%;\n            height: 0.2em;\n        }\n\n            .menu-link span:before,\n            .menu-link span:after {\n                position: absolute;\n                margin-top: -0.6em;\n            }\n\n            .menu-link span:after {\n                margin-top: 0.6em;\n            }\n\n        .header,\n        .content {\n            padding-left: 2em;\n            padding-right: 2em;\n        }\n\n        #layout {\n            padding-left: 150px; /* left col width \"#menu\" */\n            left: 0;\n        }\n        #menu {\n            left: 150px;\n        }\n\n        .menu-link {\n            position: fixed;\n            left: 150px;\n            display: none;\n        }\n\n        #layout.active .menu-link {\n            left: 150px;\n        }\n        #layout.active {\n            position: relative;\n            left: 150px;\n        }\n\n  ");
};
exports.default = LayoutCSS;