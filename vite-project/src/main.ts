import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import mitt from 'mitt'



const bus=mitt()
// App.config.globalProperties.Mit = Mit
const app=createApp(App)

app.mount('#app')
