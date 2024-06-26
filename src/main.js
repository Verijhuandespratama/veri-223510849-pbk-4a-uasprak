import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Quasar } from 'quasar'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

// Create the Vue app
const app = createApp(App)

// Use Quasar and router
app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
})

app.use(router)

// Mount the app
app.mount('#app')
