import { createApp } from 'vue'
import './style.css'
// import App from './App.vue'
import App from './ClearApp.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faThumbtack, faGhost, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)

library.add(faThumbtack, faGhost, faTrashCan);
app.component('font-awesome-icon' , FontAwesomeIcon);

app.mount('#app')
// createApp(App).mount('#app')
