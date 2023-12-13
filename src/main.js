import Vue from "vue";
import App from "./App.vue";
import * as Sentry from "@sentry/vue";

Vue.config.productionTip = false;

Sentry.init({
  Vue,
  dsn: "https://d232b118c8dbc8026440c1bbcd486731@o4506314774740992.ingest.sentry.io/4506386236309504",
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
