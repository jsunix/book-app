import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store/store'
import 'bootstrap/dist/css/bootstrap.min.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js'
import router from './router';

const app = createApp(App);
app.use(store);
app.use(bootstrap);
app.use(router);
app.mount('#app');