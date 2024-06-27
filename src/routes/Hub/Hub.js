"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Hub;
var _react = _interopRequireDefault(require("react"));
var _Header = _interopRequireDefault(require("./Header/Header"));
var _Aside = _interopRequireDefault(require("./Aside/Aside"));
var _Note = _interopRequireDefault(require("./Note/Note"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function Hub() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Header.default, null), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex"
  }, /*#__PURE__*/_react.default.createElement(_Aside.default, null), /*#__PURE__*/_react.default.createElement(_Note.default, null)));
}