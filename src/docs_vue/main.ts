import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "@/lang";
import { isMobile } from "@/assets/util";
// 全局样式初始化
import "@/assets/styles/reset.scss";
// demo 文档样式
import "@/assets/styles/md-style.scss";

if (isMobile) {
  location.replace("/demo/demo.html" + location.hash);
}

const app = createApp(App);

app.config.compilerOptions.isCustomElement = (tag) =>
  ["dark-", "quark-"].includes(tag);

app.use(i18n);
app.use(router);
app.mount("#doc");
