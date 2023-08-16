import { LitElement, html, css } from 'lit';
import { TODO_STATUS } from '../../firebase/status.js';

export class TodoItem extends LitElement {

  static get styles() {
    return css`
      button{
        background-color:transparent;
        border:0;
        cursor:pointer;
      }
    `
  }

  static get properties() {
    return {
      todo: { type: Object }
    };
  }

  constructor(){
    super();
    import('../../firebase/todos.js').then(({ deleteTodo, updateTodo })=>{
      this.deleteTodo = deleteTodo;
      this.updateTodo = updateTodo;
    });
  }

  check(e){
    this.updateTodo(this.todo.id,{
      status: TODO_STATUS.COMPLETED
    });
  }

  render(){
    return html`
      <li>
        <h3>${this.todo.title}</h3>
        <p> ${this.todo.status} </p>
        <button @click=${ ()=> this.deleteTodo(this.todo.id) }>🗑</button>
        <button @click=${ ()=> this.check()  }>✅</button>
      </li>
      
    `;
  }


}