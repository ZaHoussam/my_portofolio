import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Use Pinia Store
import { createPinia } from "pinia";

const pinia = createPinia();
const app = createApp(App);

// Vuetify

// import this after install `@mdi/font` package
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

import Vue3Lottie from "vue3-lottie";
// import "vue3-lottie/dist/style.css";

app
  .use(vuetify)
  .use(router)
  .use(Vue3Lottie, { name: "LottieAnimation" })
  .use(pinia)
  .mount("#app");
