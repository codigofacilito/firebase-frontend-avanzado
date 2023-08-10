import { getAuth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from "firebase-auth";
import { app } from './app.js';


export const auth = getAuth(app);

export function login(){
  const googleProvider = new GoogleAuthProvider();

  signInWithPopup(auth,googleProvider);
}


export function logout(){
  auth.signOut()
    .then(()=> console.log("Adios!"))
    .catch(err=> console.log(err));
}





