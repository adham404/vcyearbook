import { createApp } from 'vue'
import App from './App.vue'
import firebase from 'firebase'

createApp(App).use(firebase);

var firebaseConfig = {
    apiKey: "AIzaSyAcSbOVfIbr5Rdph7m-lgqwBnR3cQFLBx0",
    authDomain: "yearbook19vc.firebaseapp.com",
    databaseURL: "https://yearbook19vc.firebaseio.com",
    projectId: "yearbook19vc",
    storageBucket: "yearbook19vc.appspot.com",
    messagingSenderId: "384389315107",
    appId: "1:384389315107:web:7be398b818b5487a620f96",
    measurementId: "G-ZQMG64GQP4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


createApp(App).mount('#app')
