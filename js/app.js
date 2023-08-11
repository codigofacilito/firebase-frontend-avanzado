import { initializeApp } from "firebase-app";
import mustache from 'mustache';
import { Nav } from "./components/nav.js";
import tree from './state.js';
import { Home } from "./components/home.js";
import { Error } from "./components/error.js";


const firebaseConfig = {
  apiKey: "AIzaSyCpz3s9KIVhquKTCKY5OodGpbclGjxqRlI",
  authDomain: "frontend-avanzado-facilito.firebaseapp.com",
  projectId: "frontend-avanzado-facilito",
  storageBucket: "frontend-avanzado-facilito.appspot.com",
  messagingSenderId: "856135880731",
  appId: "1:856135880731:web:2e454d8d6bee2d4cd2e8be",
  measurementId: "G-YMCHQHHV8B"
};

export const app = initializeApp(firebaseConfig);

import('./auth.js').then(function ({ auth }){
  auth.onAuthStateChanged(function(user){
    tree.select('user').set(
      JSON.parse(JSON.stringify(user))
    )
  });
});


customElements.define('app-nav', Nav);
customElements.define('app-home', Home);
customElements.define('app-error', Error);