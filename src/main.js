import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/";
import { store } from "./store";
import "./axios";
import "./assets/fonts/GTWalsheimPro/stylesheet.css";
import "./index.css";
console.log(`web app => ${import.meta.env.MODE}`);
createApp(App).use(router).use(store).mount("#app");
