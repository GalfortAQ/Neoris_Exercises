/* eslint-disable no-alert */
import { LitElement, html, css } from 'lit-element';
import { commonStyles } from '../../utils/custom-styles';
import { seedStyle } from '@seed-catalog/styles';
import '../../components/common-header';
import '../../components/work-header';
import '../../components/input-component';
import '../../components/user-card';

class LitExercise extends LitElement {
  static get styles() {
    return [
      commonStyles,
      seedStyle,
      css`
        .input-text {
          height: 30px;
          padding: 0.5px 10px;
          border: 1px solid #b6c3c4;
          border-radius: 0.25rem;
        }
      `,
    ];
  }

  static get properties() {
    return {
      name: { type: String },
      userResult: { type: Object },
    };
  }

  constructor() {
    super();
    this.name = '';
    this.userResult = {};
  }

  changeName(event) {
    this.name = event.target.value;
  }

  async searchUser() {
    try {
      await fetch('https://api.github.com/users/' + this.name)
        .then((response) => response.json())
        .then((result) => {
          this.userResult = result;
        });
    } catch (error) {
      // console.error(error);
    }
  }

  render() {
    return html`
      <common-header></common-header>
      <section class="container">
        <work-header>Lit Exercise <img src="assets/user/test_img.png" /></work-header>
        <h3>GibHub Profile</h3>
        <input class="input-text" placeholder="User name" @input=${this.changeName} />
        <button type="button" class="sd-btn-mix blue-mate" @click="${this.searchUser}">Search</button>
        ${Object.keys(this.userResult).length !== 0 ? html`<user-card .user="${this.userResult}"></user-card>` : null}
      </section>
    `;
  }
}

window.customElements.define('litexercise-page', LitExercise);
