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

var _link = require("next/dist/lib/link.js");

var _link2 = _interopRequireDefault(_link);

var _reactScrollableAnchor = require("react-scrollable-anchor");

var _reactScrollableAnchor2 = _interopRequireDefault(_reactScrollableAnchor);

var _Fade = require("react-reveal/Fade");

var _Fade2 = _interopRequireDefault(_Fade);

var _reactShapes = require("react-shapes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/kategibson/portfolio 2.0/pages/index.js?entry";


var Index = function (_React$Component) {
  (0, _inherits3.default)(Index, _React$Component);

  function Index() {
    (0, _classCallCheck3.default)(this, Index);

    return (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).apply(this, arguments));
  }

  (0, _createClass3.default)(Index, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement("div", { className: "siteMain", __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement("head", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, "Kathrine Gibson "), _react2.default.createElement("meta", {
        name: "description",
        content: "I am a computer science student passionate about creative problem solving.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }), _react2.default.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }), _react2.default.createElement("link", { href: "/static/index.css", rel: "stylesheet", __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      })), _react2.default.createElement("body", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement("section", {
        "data-id": "main",
        "class": "fullpageSection",
        "data-viewport-min-height": "100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement("div", { className: "starContainer", __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement("img", {
        className: "stars",
        src: "/static/stars.png",
        alt: "Stars and constellations",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      })), _react2.default.createElement(_Fade2.default, { bottom: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement("div", { className: "directory", __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement("h1", { className: "title", __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, "kathrine gibson"), _react2.default.createElement("div", { className: "mainMenu", __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement("a", { href: "#about", className: "menuButton button fromRight", __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, "about"), _react2.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }), _react2.default.createElement("a", { href: "#portfolio", className: "menuButton button fromCenter", __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, "portfolio"), _react2.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }), _react2.default.createElement("a", { href: "#contact", className: "menuButton button fromLeft", __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, "contact"))))), _react2.default.createElement(_reactScrollableAnchor2.default, { id: "about", __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement("section", {
        "data-id": "about",
        "class": "fullpageSection",
        "data-viewport-min-height": "100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement("div", { className: "stickyMcSticky", __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react2.default.createElement("div", { className: "otherMainMenu", __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement("a", { href: "#about", className: "menuButton button fromRight", __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, "about"), _react2.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }), _react2.default.createElement("a", { href: "#portfolio", className: "menuButton button fromCenter", __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, "portfolio"), _react2.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }), _react2.default.createElement("a", { href: "#contact", className: "menuButton button fromLeft", __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, "contact"))), _react2.default.createElement("div", { className: "header", __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, "about me"), _react2.default.createElement(_reactShapes.Line, {
        x1: 75,
        x2: 250,
        y1: 5,
        y2: 5,
        stroke: { color: "rgb(58, 58, 58)" },
        strokeWidth: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }), _react2.default.createElement("div", { className: "aboutDescription", __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, _react2.default.createElement("div", { className: "descriptionTagline", __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, "Hello, my name is Kathrine Gibson.", _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }), "I'm a student who is passionate about using technology to expand my creative process."), _react2.default.createElement("div", { className: "descriptionWords", width: "200", __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, _react2.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, "I have three goals in life (thus far): find a job that allows me to explore my passions while applying my hard work ethic and innate curiosity to improve my skill set as a programmer, complete a full length Ironman and finally, to build and live in a treehouse."), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }), _react2.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, "Front end developing is my cup of tea, but I'm not afraid of back end development to bring ideas to fruition. Beyond programming until my eyeballs fall out, I spend my free time training for triathlons, sneaking in as much time outside as possible, and practicing my social skills."))), _react2.default.createElement("div", { className: "selfPicture", __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, _react2.default.createElement("div", { "class": "image-cropper", __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, _react2.default.createElement("img", {
        className: "profileImg",
        src: "/static/profile.jpg",
        "class": "rounded",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }))), _react2.default.createElement("a", { href: "/resume", className: "fancyPage", __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, " ", "current resume"))), _react2.default.createElement(_reactScrollableAnchor2.default, { id: "portfolio", __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }, _react2.default.createElement("section", {
        "data-id": "portfolio",
        "class": "fullpageSection",
        "data-viewport-min-height": "100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }, _react2.default.createElement("div", { className: "header", __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }, "my portfolio "), _react2.default.createElement(_reactShapes.Line, {
        x1: 75,
        x2: 250,
        y1: 5,
        y2: 5,
        stroke: { color: "rgb(58, 58, 58)" },
        strokeWidth: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }), _react2.default.createElement("section", { className: "projectSection column left", __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }, _react2.default.createElement("nav", { "class": "projectNav", __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }, _react2.default.createElement("ul", { className: "projects", __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      }, _react2.default.createElement("li", { className: "projectLinks", __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }, _react2.default.createElement("a", { href: "#PlanterBox", __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }, "PlanterBox")), _react2.default.createElement("li", { className: "projectLinks", __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }, _react2.default.createElement("a", { href: "#SpaceRace", __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }, "Space Race"))))), _react2.default.createElement("div", { className: "projectList column right", __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      }, _react2.default.createElement("nav", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        }
      }, _react2.default.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }, _react2.default.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }, _react2.default.createElement(_reactScrollableAnchor2.default, { id: "PlanterBox", __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        }
      }, _react2.default.createElement("div", {
        className: "singularProject",
        "data-viewport-min-height": "100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      }, "PlanterBox", _react2.default.createElement("img", {
        src: "/static/img/project-header/PlanterBoxDemoPicture.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        }
      }), _react2.default.createElement("div", {
        className: "PlanterBox",
        "data-viewport-min-height": "100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        }
      })))), _react2.default.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      }, _react2.default.createElement(_reactScrollableAnchor2.default, { id: "SpaceRace", __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      }, _react2.default.createElement("div", {
        className: "singularProject",
        "data-viewport-min-height": "100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        }
      }, "Space Race", _react2.default.createElement("img", {
        src: "/static/img/project-header/SpaceRaceDemoPicture.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        }
      }), _react2.default.createElement("div", {
        className: "SpaceRace",
        "data-viewport-min-height": "100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      }))))))))), _react2.default.createElement(_reactScrollableAnchor2.default, { id: "contact", __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        }
      }, _react2.default.createElement("section", {
        "data-id": "contact",
        "class": "fullpageSection",
        "data-viewport-min-height": "100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        }
      }, _react2.default.createElement("div", { className: "header", __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        }
      }, " contact me "), _react2.default.createElement(_reactShapes.Line, {
        x1: 75,
        x2: 250,
        y1: 5,
        y2: 5,
        stroke: { color: "rgb(58, 58, 58)" },
        strokeWidth: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        }
      }), _react2.default.createElement("div", { className: "contactWords", __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        }
      }, _react2.default.createElement("a", { href: "mailto:kathrinemgibson@gmail.com", className: "email", __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        }
      }, "kathrinemgibson@gmail.com"), _react2.default.createElement("div", { className: "contactProfiles", __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        }
      }, _react2.default.createElement("ul", { className: "contact", __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        }
      }, _react2.default.createElement("li", { className: "contactli", __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        }
      }, _react2.default.createElement("a", {
        href: "https://github.com/k-gibson/",
        target: "_blank",
        onClick: "ga('send', 'event', 'external page', 'visit', this.href);",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        }
      }, _react2.default.createElement("img", {
        src: "./static/img/logos/logo-github.svg",
        width: "40",
        height: "40",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        }
      }))), _react2.default.createElement("li", { className: "contactli", __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        }
      }, _react2.default.createElement("a", {
        href: "http://www.linkedin.com/in/kathrine-gibson",
        target: "_blank",
        onClick: "ga('send', 'event', 'external page', 'visit', this.href);",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        }
      }, _react2.default.createElement("img", {
        src: "./static/img/logos/logo-linkedin.svg",
        width: "40",
        height: "40",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        }
      }))), _react2.default.createElement("li", { className: "contactli", __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        }
      }, _react2.default.createElement("a", {
        href: "https://twitter.com/kathrineFromCO",
        target: "_blank",
        onClick: "ga('send', 'event', 'external page', 'visit', this.href);",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        }
      }, _react2.default.createElement("img", {
        src: "./static/img/logos/logo-twitter.svg",
        width: "40",
        height: "40",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        }
      }))))))))));
    }
  }]);

  return Index;
}(_react2.default.Component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJTY3JvbGxhYmxlQW5jaG9yIiwiRmFkZSIsIlJlY3RhbmdsZSIsIkNpcmNsZSIsIkVsbGlwc2UiLCJMaW5lIiwiUG9seWxpbmUiLCJDb3JuZXJCb3giLCJUcmlhbmdsZSIsIkluZGV4IiwiY29sb3IiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFDRSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQTs7Ozs7OztJLEFBR21COzs7Ozs7Ozs7Ozs2QkFDVixBQUNQOzZCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUdBO2NBQUEsQUFDTyxBQUNMO2lCQUZGLEFBRVU7O29CQUZWO3NCQUpGLEFBSUUsQUFJQTtBQUpBO0FBQ0U7Y0FHRixBQUNPLEFBQ0w7aUJBRkYsQUFFVTs7b0JBRlY7c0JBUkYsQUFRRSxBQUtBO0FBTEE7QUFDRSxrREFJSSxNQUFOLEFBQVcscUJBQW9CLEtBQS9CLEFBQW1DO29CQUFuQztzQkFkSixBQUNFLEFBYUUsQUFFRjtBQUZFOzJCQUVGLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7bUJBQUEsQUFDVSxBQUNSO2lCQUZGLEFBRVEsQUFDTjtvQ0FIRixBQUcyQjs7b0JBSDNCO3NCQUFBLEFBS0U7QUFMRjtBQUNFLHlCQUlBLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFDRTtBQURGOzttQkFDRSxBQUNZLEFBQ1Y7YUFGRixBQUVNLEFBQ0o7YUFIRixBQUdNOztvQkFITjtzQkFO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WUFBRCxBQUNNLEFBQ0o7WUFGRixBQUVNLEFBQ0o7WUFIRixBQUdNLEFBQ0o7WUFKRixBQUlNLEFBQ0o7Z0JBQVEsRUFBRSxPQUxaLEFBS1UsQUFBUyxBQUNqQjtxQkFORixBQU1lOztvQkFOZjtzQkFORixBQU1FLEFBUUE7QUFSQTtBQUNFLDBCQU9GLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsT0FBRyxNQUFILEFBQVEsb0NBQW1DLFdBQTNDLEFBQXFEO29CQUFyRDtzQkFBQTtBQUFBO1NBREYsQUFDRSxBQUdBLDhDQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsUUFBSSxXQUFKLEFBQWM7b0JBQWQ7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsUUFBSSxXQUFKLEFBQWM7b0JBQWQ7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7Y0FBQSxBQUNPLEFBQ0w7Z0JBRkYsQUFFUyxBQUNQO2lCQUhGLEFBR1U7O29CQUhWO3NCQUFBLEFBS0U7QUFMRjtBQUNFO2FBSUEsQUFDTSxBQUNKO2VBRkYsQUFFUSxBQUNOO2dCQUhGLEFBR1MsQUFDUDthQUpGLEFBSU07O29CQUpOO3NCQVBOLEFBQ0UsQUFDRSxBQUtFLEFBUUo7QUFSSTtBQUNFLDRCQU9OLGNBQUEsUUFBSSxXQUFKLEFBQWM7b0JBQWQ7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7Y0FBQSxBQUNPLEFBQ0w7Z0JBRkYsQUFFUyxBQUNQO2lCQUhGLEFBR1U7O29CQUhWO3NCQUFBLEFBS0U7QUFMRjtBQUNFO2FBSUEsQUFDTSxBQUNKO2VBRkYsQUFFUSxBQUNOO2dCQUhGLEFBR1MsQUFDUDthQUpGLEFBSU07O29CQUpOO3NCQXJCTixBQWVFLEFBQ0UsQUFLRSxBQVFKO0FBUkk7QUFDRSw0QkFPTixjQUFBLFFBQUksV0FBSixBQUFjO29CQUFkO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBO2NBQUEsQUFDTyxBQUNMO2dCQUZGLEFBRVMsQUFDUDtpQkFIRixBQUdVOztvQkFIVjtzQkFBQSxBQUtFO0FBTEY7QUFDRTthQUlBLEFBQ00sQUFDSjtlQUZGLEFBRVEsQUFDTjtnQkFIRixBQUdTLEFBQ1A7YUFKRixBQUlNOztvQkFKTjtzQkF2UHBCLEFBQ0UsQUFnQkUsQUErS0UsQUFDRSxBQWNFLEFBSUUsQUFDRSxBQTZCRSxBQUNFLEFBS0UsQUFnQnJCO0FBaEJxQjtBQUNFOzs7OztFQTFQUyxnQkFBTSxBOztrQkFBcEIsQSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2F0ZWdpYnNvbi9wb3J0Zm9saW8gMi4wIn0=