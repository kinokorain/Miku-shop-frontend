"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;
var _react = _interopRequireDefault(require("react"));
require("../Hub.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function Header() {
  return /*#__PURE__*/_react.default.createElement("header", {
    className: "header"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("input", {
    type: "search"
  }), /*#__PURE__*/_react.default.createElement("button", null, "search")), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex"
  }, /*#__PURE__*/_react.default.createElement("button", null, "+"), /*#__PURE__*/_react.default.createElement("div", null, "filters")));
}