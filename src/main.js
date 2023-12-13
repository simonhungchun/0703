import Vue from "vue";
import App from "./App.vue";
import * as Sentry from "@sentry/vue";

Vue.config.productionTip = false;

Sentry.init({
  Vue,
  dsn: "https://d232b118c8dbc8026440c1bbcd486731@o4506314774740992.ingest.sentry.io/4506386236309504",
  integrations: [
    new Sentry.BrowserTracing({
      // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
      tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
    }),
    new Sentry.Replay(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
