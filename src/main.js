import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import PerfectScrollbar from 'vue2-perfect-scrollbar'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'
import VueMeta from 'vue-meta'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false
Vue.use(PerfectScrollbar)
Vue.use(Vuelidate)
Vue.use(VueMeta)

firebase.initializeApp({
  apiKey: 'AIzaSyA6ji8J9Pb39FnRdWePqQEEqzmBBS2CKcA',
  authDomain: 'criptocash-8b9b1.firebaseapp.com',
  databaseURL: 'https://criptocash-8b9b1.firebaseio.com',
  projectId: 'criptocash-8b9b1',
  storageBucket: 'criptocash-8b9b1.appspot.com',
  messagingSenderId: '192938478214',
  appId: '1:192938478214:web:1770142bc0c2c9f5f45f07',
  measurementId: 'G-M7880Z3VPC'
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
