import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// ElementPlus
import elementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

import 'animate.css';

const app = createApp(App);

app.use(store);
app.use(router);
app.use(elementPlus);

app.mount('#app');
