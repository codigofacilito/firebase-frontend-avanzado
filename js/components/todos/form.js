import { html, LitElement, css } from 'lit';

export class TodoForm extends LitElement{
  
  static get properties(){
    return {
      title: { type: String },
      description: { type: String }
    }    
  }

  constructor(){
    super();
    this.title = '';
    this.description = '';

    import('../../firebase/todos.js').then(({ createTodo })=>{
      this.createTodo = createTodo;
    });
  }

  create(e){
    e.preventDefault();

    this.createTodo(this.title, this.description);
  }


  render(){
    return html`
      <form @submit=${ (e) => this.create(e) }>
        <input type='text'
          placeholder='Título' 
          @input=${ (e) => { this.title = e.target.value } } 
        />
        <input
          @input=${ (e) => { this.description = e.target.value } } 
          type='text'
          placeholder='Descripción' />
        <button type='submit'>Crear</button>
      </form>
    `;
  }
}