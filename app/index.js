import Vue from "vue";
import App from "./App.vue";
import * as styles from './styles'

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#mountNode");
