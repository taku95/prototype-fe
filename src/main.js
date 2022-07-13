import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBRMbw1a87H0hN54LSeNTahlc5n6EakdK0",
  authDomain: "prototype-fe-958b6.firebaseapp.com",
  projectId: "prototype-fe-958b6",
  storageBucket: "prototype-fe-958b6.appspot.com",
  messagingSenderId: "641979183079",
  appId: "1:641979183079:web:9947e58798e9c9da105742",
};

initializeApp(firebaseConfig);
createApp(App).use(store).use(router).mount("#app");
