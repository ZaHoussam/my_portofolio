import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
// Use Pinia Store
import { createPinia } from "pinia";

const pinia = createPinia();
const app = createApp(App);

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

app.use(vuetify).use(pinia).mount("#app");
