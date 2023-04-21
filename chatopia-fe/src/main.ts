import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import chatopia from './plugins/chatopia';

const app = createApp(App);

app.use(chatopia).use(router).mount('#app');

router.beforeEach((to, from) => {
  if (
    to.name !== "Authenticate" && !app.config.globalProperties.$chatopia.auth
  ) {
    return "/auth";
  }
});
