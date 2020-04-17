import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import './permission.js'
import "@/style/index.scss";
import {
  Button,
  Tag,
  Form,
  Card,
  Input,
  FormItem,
  Radio,
  RadioGroup,
  RadioButton,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Dialog,
  Drawer,
  MessageBox,
  ColorPicker,
  Message,
  Select,
  Option,
  Table,
  TableColumn,
  DatePicker,
  Loading,
  Upload,
} from 'element-ui';
// import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import * as filters from "./filters";

Vue.config.productionTip = false;
Vue.prototype.$ELEMENT = {
  size: 'medium',
  zIndex: 3000
};
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$message = Message;

// Vue.use(ElementUI);
Vue.use(Button);
Vue.use(Tag);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Form);
Vue.use(DatePicker);
Vue.use(Option);
Vue.use(Card);
Vue.use(Select);
Vue.use(Input);
Vue.use(FormItem);
Vue.use(Radio);
Vue.use(RadioButton);
Vue.use(RadioGroup);
Vue.use(Container);
Vue.use(Header);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Aside);
Vue.use(Menu);
Vue.use(Upload);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Dialog);
Vue.use(Drawer);
Vue.use(ColorPicker);
Vue.use(Loading.directive);
Vue.component(Message);

Vue.prototype.$loading = Loading.service;

//全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");