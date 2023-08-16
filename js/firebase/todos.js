import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from 'firebase-firestore';
import { TODO_STATUS } from './status.js';
import { app }  from '../app.js';

export const db = getFirestore(app);

export function createTodo(title,description){
  // 1. Referencia al documento
  const collectionRef = collection(db, "todos");
  let todoJSON = {
    title,
    description,
    status: TODO_STATUS.ACTIVE
  };
  console.log(todoJSON);
  // 2. addDoc
  return addDoc(collectionRef,todoJSON);
}

export async function getTodos(){
  const collectionRef = collection(db, "todos");
  const querySnapshot = await getDocs(collectionRef);

  const todos = [];

  querySnapshot.forEach((doc)=>{
    let todoJSON = {
      id: doc.id,
      ...doc.data()
    }
    todos.push(todoJSON);
  });

  return todos;
}

export function deleteTodo(id){
  const docRef = doc(db,"todos", id);
  return deleteDoc(docRef);
}

export function updateTodo(id, data){
  const docRef = doc(db,"todos", id);
  updateDoc(docRef, data);
}

