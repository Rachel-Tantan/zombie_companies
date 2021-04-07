import Vue from "vue";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import App from "./App.vue";
import router from "./router";

import Router from 'vue-router'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
 

Vue.use(ElementUI)
Vue.config.productionTip = process.env.NODE_ENV === 'production';

console.log(process.env.VUE_APP_SERVICE_URL)
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
