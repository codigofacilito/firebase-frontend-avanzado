import { getFirestore, doc, setDoc } from 'firebase-firestore';

import { app }  from '../app.js';

export const db = getFirestore(app);


export function createUser(user){
  
  const docRef = doc(db, "users", user.uid);
  
  let userFields = {
    photo: user.photoURL,
    uid: user.uid
  };

  if(user.email){
    userFields.email = user.email;
    userFields.displayName = user.displayName;
  }

  if( user.providerData && 
      user.providerData.length > 0 && 
      user.providerData.email){

    userFields.email = user.providerData[0].email;
    userFields.displayName = user.providerData[0].displayName;
  }

  return setDoc(docRef, userFields);
}