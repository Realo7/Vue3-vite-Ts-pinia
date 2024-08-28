import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import mitt from 'mitt'

const bus = mitt()
// App.config.globalProperties.Mit = Mit
const app = createApp(App)
app.config.globalProperties.$filter = {
  format<T>(str: T) {
    return `小满+${str}`
  },
}
type Filter = {
  format<T>(str: T): string
}
declare module 'vue' {
  export interface ComponentCustomProperties {
    $filter: Filter
    $env: String
  }
}
app.mount('#app')
