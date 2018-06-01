(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define("vue-script", ["vue"], factory);
	else if(typeof exports === 'object')
		exports["vue-script"] = factory(require("vue"));
	else
		root["vue-script"] = factory(root["Vue"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/icon/icon.vue
//
//
//

const prefixCls = 'ivu-icon';

/* harmony default export */ var icon = ({
    name: 'Icon',
    props: {
        type: String,
        size: [Number, String],
        color: String
    },
    computed: {
        classes() {
            return `${prefixCls} ${prefixCls}-${this.type}`;
        },
        styles() {
            let style = {};

            if (this.size) {
                style['font-size'] = `${this.size}px`;
            }

            if (this.color) {
                style.color = this.color;
            }

            return style;
        }
    },
    methods: {
        handleClick(event) {
            this.$emit('click', event);
        }
    }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib?sourceMap!./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-49586ed1","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/icon/icon.vue
var render = function () {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('i', { class: _vm.classes, style: _vm.styles, on: { "click": _vm.handleClick } });
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  scriptExports = scriptExports || {}

  // ES6 modules interop
  var type = typeof scriptExports.default
  if (type === 'object' || type === 'function') {
    scriptExports = scriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/icon/icon.vue
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = normalizeComponent(
  icon,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var icon_icon = (Component.exports);

// CONCATENATED MODULE: ./src/components/icon/index.js

/* harmony default export */ var components_icon = (icon_icon);
// EXTERNAL MODULE: external {"root":"Vue","commonjs":"vue","commonjs2":"vue","amd":"vue"}
var external___root___Vue___commonjs___vue___commonjs2___vue___amd___vue__ = __webpack_require__(1);
var external___root___Vue___commonjs___vue___commonjs2___vue___amd___vue___default = /*#__PURE__*/__webpack_require__.n(external___root___Vue___commonjs___vue___commonjs2___vue___amd___vue__);

// CONCATENATED MODULE: ./src/utils/assist.js

// 判断参数是否是其中之一
function oneOf(value, validList) {
    for (let i = 0; i < validList.length; i++) {
        if (value === validList[i]) {
            return true;
        }
    }
    return false;
}
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/alert/alert.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




const alert_prefixCls = 'ivu-alert';

/* harmony default export */ var alert_alert = ({
    name: 'Alert',
    components: { Icon: components_icon },
    props: {
        type: {
            validator(value) {
                return oneOf(value, ['success', 'info', 'warning', 'error']);
            },
            default: 'info'
        },
        closable: {
            type: Boolean,
            default: false
        },
        showIcon: {
            type: Boolean,
            default: false
        },
        banner: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            closed: false,
            desc: false
        };
    },
    computed: {
        wrapClasses() {
            return [`${alert_prefixCls}`, `${alert_prefixCls}-${this.type}`, {
                [`${alert_prefixCls}-with-icon`]: this.showIcon,
                [`${alert_prefixCls}-with-desc`]: this.desc,
                [`${alert_prefixCls}-with-banner`]: this.banner
            }];
        },
        messageClasses() {
            return `${alert_prefixCls}-message`;
        },
        descClasses() {
            return `${alert_prefixCls}-desc`;
        },
        closeClasses() {
            return `${alert_prefixCls}-close`;
        },
        iconClasses() {
            return `${alert_prefixCls}-icon`;
        },
        iconType() {
            let type = '';

            switch (this.type) {
                case 'success':
                    type = 'checkmark-circled';
                    break;
                case 'info':
                    type = 'information-circled';
                    break;
                case 'warning':
                    type = 'android-alert';
                    break;
                case 'error':
                    type = 'close-circled';
                    break;
            }

            return type;
        }
    },
    methods: {
        close(e) {
            this.closed = true;
            this.$emit('on-close', e);
        }
    },
    mounted() {
        this.desc = this.$slots.desc !== undefined;
    }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib?sourceMap!./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4b449a90","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/alert/alert.vue
var alert_render = function () {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('transition', { attrs: { "name": "fade" } }, [!_vm.closed ? _c('div', { class: _vm.wrapClasses }, [_vm.showIcon ? _c('span', { class: _vm.iconClasses }, [_vm._t("icon", [_c('Icon', { attrs: { "type": _vm.iconType } })])], 2) : _vm._e(), _vm._v(" "), _c('span', { class: _vm.messageClasses }, [_vm._t("default")], 2), _vm._v(" "), _c('span', { class: _vm.descClasses }, [_vm._t("desc")], 2), _vm._v(" "), _vm.closable ? _c('a', { class: _vm.closeClasses, on: { "click": _vm.close } }, [_vm._t("close", [_c('Icon', { attrs: { "type": "ios-close-empty" } })])], 2) : _vm._e()]) : _vm._e()]);
};
var alert_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/alert/alert.vue
/* script */


/* template */

/* template functional */
var alert___vue_template_functional__ = false
/* styles */
var alert___vue_styles__ = null
/* scopeId */
var alert___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var alert___vue_module_identifier__ = null

var alert_Component = normalizeComponent(
  alert_alert,
  alert_render,
  alert_staticRenderFns,
  alert___vue_template_functional__,
  alert___vue_styles__,
  alert___vue_scopeId__,
  alert___vue_module_identifier__
)

/* harmony default export */ var components_alert_alert = (alert_Component.exports);

// CONCATENATED MODULE: ./src/components/alert/index.js

/* harmony default export */ var components_alert = (components_alert_alert);
// CONCATENATED MODULE: ./src/index.js



const components = {
  Alert: components_alert,
  Icon: components_icon
};

const install = function (Vue, opts = {}) {
  // locale.use(opts.locale);
  // locale.i18n(opts.i18n);

  // components.map(component => {
  //   Vue.component(component.name, component);
  // });

  Object.keys(components).forEach(key => {
    Vue.component(key, components[key]);
  });

  // Vue.use(Loading.directive);

  // Vue.prototype.$loading = Loading.service;
  // Vue.prototype.$msgbox = MessageBox;
  // Vue.prototype.$alert = MessageBox.alert;
  // Vue.prototype.$confirm = MessageBox.confirm;
  // Vue.prototype.$prompt = MessageBox.prompt;
  // Vue.prototype.$notify = Notification;
  // Vue.prototype.$message = Message;
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

// const API = {
//   ...components
// }

const API = components;

// module.exports.default = module.exports = components
// http://www.jb51.net/article/116453.htm
/* harmony default export */ var src = __webpack_exports__["default"] = (API);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=vue-script.js.map