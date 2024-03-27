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

app.use(vuetify).use(pinia).use(router).mount("#app");
