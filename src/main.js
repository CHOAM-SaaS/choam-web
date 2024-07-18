import "./assets/base.css";

import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import axios from "axios";

import App from "./App.vue";
import router from "./router";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:3010/v1/";

axios.defaults.baseURL = API_BASE;
axios.defaults.withCredentials = true;

const app = createApp(App);

const pinia = createPinia();

pinia.use(({ store }) => {
  store.router = markRaw(router);
});

app.use(pinia);
app.use(router);

app.mount("#app");
