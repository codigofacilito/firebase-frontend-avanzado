import { html, LitElement, css } from 'lit';

export class TodoList extends LitElement{

  static get properties(){
    return {
      todos: { type: Array }
    }
  }

  constructor(){
    super();

    this.todos = [];

    import('../../firebase/todos.js').then(({ getTodos })=>{
      getTodos().then(todos => {
        this.todos = todos;
      });
    });
  }

  render(){
    return html`
      <h2>Pendientes</h2>
      <app-todo-form></app-todo-form>
      <ul>
        ${
          this.todos.map(
            todo => html`
              <app-todo .todo=${todo}></app-todo>
            `
          )
        }
      </ul>
    `;
  }
}
  