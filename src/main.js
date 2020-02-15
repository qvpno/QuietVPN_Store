import Vue from 'vue'
import { router } from "./router";
import App from './App.vue'
import Firebase from 'firebase'
import store from './store'
import FBOptions from '../fbconfig.json'

import Vuetify from 'vuetify'
//import colors from 'vuetify/lib/util/colors'
import "vuetify/dist/vuetify.min.css";

Vue.config.productionTip = false

Vue.use(Vuetify)

Firebase.initializeApp(FBOptions);
//Make sure to set the Firebase rules to "Don't allow access to anyone" on the Firebase
//Instead, we will send tokens to the server, and have *it* interact with Firebase

let vuetify = new Vuetify({
    theme: {
        dark: true
    }
})

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App),
}).$mount('#app')

console.log("ABC");

export {Firebase, router, store}