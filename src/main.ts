import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


//Font awesome
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBitcoin, faWhatsapp, faYoutube, faFacebook, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faUserSecret, faBars, faBook, faHeart, faPlus, faTrash, faUpload, faCopy,
  faPuzzlePiece, faHome, faMagnifyingGlass, faBlog, faMagnifyingGlassDollar,
   faCircleHalfStroke, faDiamond, faFan, faRocket, faEnvelope,
    faChess, faChessRook, faChessQueen, faChessBishop, faChessKnight, faChessPawn } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faBars, faBook, faHeart, faPlus, faUpload,
   faPuzzlePiece, faHome,faBlog, faMagnifyingGlass, faTrash, faCopy, faDiamond,
    faCircleHalfStroke, faWhatsapp, faYoutube, faFacebook, faFan, faRocket,
     faTelegram, faMagnifyingGlassDollar, faEnvelope,
     faChessRook, faChessQueen, faChessBishop, faChessKnight, faChessPawn )
//vue use
import { MotionPlugin } from '@vueuse/motion'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.use(MotionPlugin)
app.component('font-awesome-icon', FontAwesomeIcon)

//app.component("v-icon", OhVueIcon);

app.mount('#app')
