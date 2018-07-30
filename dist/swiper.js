'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./swiper.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Swiper = function (_Component) {
  _inherits(Swiper, _Component);

  function Swiper(props) {
    _classCallCheck(this, Swiper);

    var _this = _possibleConstructorReturn(this, (Swiper.__proto__ || Object.getPrototypeOf(Swiper)).call(this, props));

    _this.img = _this.props.img.concat(_this.props.img[0]) || [];
    _this.time = _this.props.time || 3000;
    _this.timer = '';
    _this.state = {
      offset: { left: 0 }
    };
    return _this;
  }

  _createClass(Swiper, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log('img', this.img);
      if (this.img.length > 1) {
        this.delayAnimation();
      }
    }
  }, {
    key: 'delayAnimation',
    value: function delayAnimation() {
      var _this2 = this;

      var width = document.getElementById('swiper-img').width;
      console.log('width', width);
      this.timer = setInterval(function () {
        if (_this2.state.offset.left > -width * (_this2.img.length - 1)) {
          _this2.setState({
            offset: {
              left: _this2.state.offset.left - width,
              transition: "left 1s"
            }
          });
        } else {
          _this2.setState({
            offset: {
              left: 0,
              transition: "none"
            }
          }, function () {
            setTimeout(function () {
              _this2.setState({
                offset: {
                  left: _this2.state.offset.left - width,
                  transition: "left 1s"
                }
              });
            }, 0);
          });
        }
      }, this.time);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.timer);
    }
  }, {
    key: 'render',
    value: function render() {
      var offset = this.state.offset;

      console.log('offset', offset);
      var img = this.img.map(function (item, index) {
        return _react2.default.createElement('img', { key: index, src: item, className: 'swiper-img', id: 'swiper-img', style: offset });
      });
      return _react2.default.createElement(
        'div',
        { className: 'swiper-box' },
        _react2.default.createElement(
          'div',
          { className: 'swiper-main' },
          img
        )
      );
    }
  }]);

  return Swiper;
}(_react.Component);

exports.default = Swiper;
//# sourceMappingURL=swiper.js.map