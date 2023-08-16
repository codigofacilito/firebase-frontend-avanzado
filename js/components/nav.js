import { LitElement, html, css } from 'lit';
import tree from '../state.js';

export class Nav extends LitElement{

  static get properties(){
    return {
      user: { type: Object }
    }
  }
  
  static get styles(){
    return css`
      :host {
        display: block;
        padding: 1em 2em;
        background-color: #6741d9;
        font-size:16px;
        color:white;
      }
      ul{
        display:flex;
        flex-wrap:wrap;
        gap: 1em;
        list-style-type:none;
        align-items:center;
      }
      a{
        color: white;
        text-decoration: none;
        font-size: 1em;
      }
      button{
        background-color:white;
        border:0;
        border-radius: 0.5em;
        padding: 10px 15px;
        font-size: 1em;
        font-weight: bold;
        box-shadow: 0 0 10px rgba(0,0,0,0.2);
        cursor:pointer;
      }

      .black{
        background-color:black;
        color: white;
      }
    `;
  }

  constructor(){
    super();
    this.user = null;
    
    import('../firebase/auth.js').then(({ login, logout, loginGitHub }) => {      
      
      this.login = function(){
        login().then(()=>{}).catch(err =>{
          tree.select('error').set( err );
        })
      }


      this.logout = logout;
      this.loginGitHub = loginGitHub;
    });

    tree.select('user').on('update',(e) => {
      this.user = e.data.currentData;
    });


  }

  userButtons(){
    if(this.user){
      return html`
        <li>
          <button @click=${ function(){ this.logout() } }>Cerrar sesión</button>
        </li>
        
        <li> ${ this.user.displayName } </li>
      `;
    }
    return html`
      <li>
        <button @click=${ function(){ this.login() }}>Iniciar sesión Google</button>
        <button class='black' @click=${ function(){ this.loginGitHub() }}>Iniciar sesión GitHub</button>
      </li>
    `;
  }

  render(){
    return  html`
      <nav>
        <ul>
          ${ this,this.userButtons()  }
        </ul>
      </nav>
    `;

  }
}