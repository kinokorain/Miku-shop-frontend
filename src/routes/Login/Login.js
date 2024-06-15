"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Login;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function Login() {
  return /*#__PURE__*/_react.default.createElement("section", {
    className: "reg-page"
  }, /*#__PURE__*/_react.default.createElement("h1", null, /*#__PURE__*/_react.default.createElement("span", {
    className: "accent-color"
  }, "Miku"), " Notes"), /*#__PURE__*/_react.default.createElement("p", null, "Your notes and to-do lists, always at hand.", /*#__PURE__*/_react.default.createElement("br", null), "Simple, fast, ", /*#__PURE__*/_react.default.createElement("span", {
    className: "accent-color"
  }, "clean.")), /*#__PURE__*/_react.default.createElement("form", {
    action: ""
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "reg-form-container"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa-solid fa-user"
  }), /*#__PURE__*/_react.default.createElement("input", {
    type: "email",
    placeholder: "Email",
    name: "email",
    id: "email",
    required: true
  })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa-solid fa-lock"
  }), /*#__PURE__*/_react.default.createElement("input", {
    type: "password",
    placeholder: "Password",
    name: "psw",
    id: "psw",
    required: true
  }), /*#__PURE__*/_react.default.createElement("a", {
    className: "forgot-password-link"
  }, "Forgot password?")), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa-solid fa-lock"
  }), /*#__PURE__*/_react.default.createElement("input", {
    type: "password",
    placeholder: "Repeat Password",
    name: "psw-repeat",
    id: "psw-repeat",
    required: true
  })), /*#__PURE__*/_react.default.createElement("button", {
    type: "submit",
    className: "registerbtn"
  }, "Sign up"), /*#__PURE__*/_react.default.createElement("a", {
    href: "",
    className: "log-in-link"
  }, "Or ", /*#__PURE__*/_react.default.createElement("span", {
    className: "accent-color"
  }, "log in"), ", if you have an account"))));
}