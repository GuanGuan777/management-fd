import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import "@/style/index.scss";
import {
  Button,
  Tag,
  Form
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;
Vue.prototype.$ELEMENT = {
  size: 'small',
  zIndex: 3000
};
// Vue.use(ElementUI);
Vue.use(Button);
Vue.use(Tag);
Vue.use(Form);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");