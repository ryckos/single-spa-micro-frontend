import './set-public-path';
import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';

import BootstrapVue from 'bootstrap-vue';
import VueTouch from 'vue-touch';
import axios from 'axios';
import Toasted from 'vue-toasted';

import store from './store';

import layoutMixin from './mixins/layout';
//import { AuthMixin } from './mixins/auth';
import config from './config';
import Widget from './components/Widget/Widget';

import App from './App.vue';
import router from './Routes.js';

axios.defaults.baseURL = config.baseURLApi;
axios.defaults.headers.common['Content-Type'] = "application/json";
const token = localStorage.getItem('token');
if (token) {
    axios.defaults.headers.common['Authorization'] = "Bearer " + token;
}

Vue.use(BootstrapVue);
Vue.use(VueTouch);
Vue.component('Widget', Widget);
Vue.mixin(layoutMixin);
//Vue.mixin(AuthMixin);
Vue.use(Toasted, {duration: 10000});

Vue.config.productionTip = false;

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render(h) {
      return h(App, {
        props: {
          // single-spa props are available on the "this" object. Forward them to your component as needed.
          // https://single-spa.js.org/docs/building-applications#lifecyle-props
          // if you uncomment these, remember to add matching prop definitions for them in your App.vue file.
          /*
          name: this.name,
          mountParcel: this.mountParcel,
          singleSpa: this.singleSpa,
          */
        },
      });
    },
    router,
    store,
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
