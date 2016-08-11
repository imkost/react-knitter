'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function knit(componentName) {
  var prototypeProps = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
  var classProps = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

  var Component = function (_React$Component) {
    _inherits(Component, _React$Component);

    function Component(props) {
      _classCallCheck(this, Component);

      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Component).call(this, props));

      _this.init && _this.init(props);
      return _this;
    }

    return Component;
  }(_react2.default.Component);

  Component.displayName = componentName;

  for (var key in classProps) {
    Component[key] = classProps[key];
  }

  var prototype = Component.prototype;

  for (var _key in prototypeProps) {
    prototype[_key] = prototypeProps[_key];
  }

  return Component;
}

exports.default = knit;
