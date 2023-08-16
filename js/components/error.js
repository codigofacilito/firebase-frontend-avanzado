import { html, css, LitElement } from 'lit';
import tree from '../state.js';

export class Error extends LitElement {
  static get styles() {
    return css`
      .error {
        display: block;
        padding: 25px;
        background-color: #fa5252;
        color: white;
        display:flex;
      }
      .error p{
        margin: 0;
        flex: 1;
      }
      .error button{
        background-color:transparent;
        border:0;
        cursor:pointer;
      }
    `
  }

  static get properties(){
    return {
      message: { type: String }
    }
  }

  constructor(){
    super();

    tree.select('error').on('update',(e) => {
      console.log(e);
      this.message = e.data.currentData;
    })
  }

  render(){
    if(!this.message) return;
    return html`
      <div class='error'>
        <p> ${ this.message } </p>
        <button @click=${ function(){ tree.select('error').set(null) }  }> X </button>
      </div>
    `
  }
}