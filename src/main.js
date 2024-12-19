import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


import 'aos/dist/aos.css';

const app = createApp(App)

import { isLoading } from "./components/Loader.vue";

router.beforeEach((to, from, next) => {
    isLoading.value = true;
    next();
});

router.afterEach(() => {
    setTimeout(()=>{
        isLoading.value = false;
    },1000)
});

app.use(router)

app.mount('#app')

