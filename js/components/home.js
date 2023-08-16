import { LitElement, css, html } from 'lit'
import tree from '../state.js';

export class Home extends LitElement{
  static get styles(){
    return css``;
  }
  static get properties(){
    return {
      user: { type: Object }
    }
  }
  constructor(){
    super();

    tree.select('user').on('update',(e)=>{
      this.user = e.data.currentData;
    })

  }
  render(){
    if(!this.user) return;
    return html`
      <img src="${this.user.photoURL}" alt="Foto de perfil">
      <h1> Dashboard </h1>
      <p> Bienvenido ${this.user.displayName} </p>
      
      <app-todo-list></app-todo-list>
    `;
  }
}