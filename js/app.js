import { initializeApp } from "firebase-app";
import mustache from 'mustache';


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

import('./auth.js').then(function ({ login, logout, auth }){
  let navTemplate = document.querySelector("#main-header template").innerHTML;
  
  auth.onAuthStateChanged(function(user){
    let result = mustache.render(navTemplate,{ user });
    document.querySelector("#main-header").innerHTML = result;
    
    
    document.querySelector("#login")?.addEventListener("click",login);
    document.querySelector("#logout")?.addEventListener("click",logout);
  });
});
