import Alert from './components/alert';
import Icon from './components/icon';

const components = {
  Alert,
  Icon
}

const install = function(Vue, opts = {}) {
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

const API = components

// module.exports.default = module.exports = components
// http://www.jb51.net/article/116453.htm
export default API;