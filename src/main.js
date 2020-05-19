import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import './permission.js'
import "@/style/index.scss";
import {
  Avatar,
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
  Dropdown,
  DropdownMenu,
  DropdownItem,
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
  Popover,
  Table,
  TableColumn,
  DatePicker,
  Loading,
  Upload,
  Link,
  Timeline,
  TimelineItem,
  Divider,
  Tabs,
  TabPane,
  Image,
  Steps,
  Step,
  ButtonGroup,
} from 'element-ui';
// import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueVideoPlayer from 'vue-video-player';
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
import * as filters from "./filters";

Vue.use(VueVideoPlayer,
  /* {
  options: global default options,
  events: global videojs events
} */
)
Vue.config.productionTip = false;
Vue.prototype.$ELEMENT = {
  size: 'medium',
  zIndex: 3000
};
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$message = Message;

// Vue.use(ElementUI);
Vue.use(Avatar);
Vue.use(Popover);
Vue.use(Steps);
Vue.use(Step);
Vue.use(Link);
Vue.use(Timeline);
Vue.use(TimelineItem);
Vue.use(Divider);
Vue.use(Tabs);
Vue.use(Image);
Vue.use(TabPane);
Vue.use(Button);
Vue.use(ButtonGroup);
Vue.use(Tag);
Vue.use(Table);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
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