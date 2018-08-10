import 'js/polyfills';
import 'js/app-module.js';
import 'normalize.css';
import '../style/main.less';

if (module.hot) {
  module.hot.accept();
  //clear console on hot reload
  window.addEventListener('message', console.clear());
}
