/* eslint-disable no-alert */
import { LitElement, html } from 'lit-element';
import { userCardStyles } from '../utils/custom-styles';
import { seedStyle } from '@seed-catalog/styles';

class UserCard extends LitElement {
  static get styles() {
    return [userCardStyles, seedStyle];
  }

  static get properties() {
    return {
      user: { type: Object },
    };
  }

  render() {
    return html`${this.user.login
      ? html`<link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
            crossorigin="anonymous"
          />
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
            crossorigin="anonymous"
          ></script>
          <div class="card">
            <img
              src="${this.user.avatar_url
                ? this.user.avatar_url
                : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'}"
            />
            <div class="card-principalData">
              <h1 class=${this.user.name ? '' : 'undefined'}>${this.user.name ? this.user.name : 'Undefined'}</h1>
              <h3 class=${['text-gray ', this.user.login ? '' : 'undefined']}>
                ${this.user.login ? this.user.login : 'Undefined'}
              </h3>
              <h3 class=${this.user.bio ? '' : 'undefined'}>${this.user.bio ? this.user.bio : 'Undefined'}</h3>
            </div>
            <button class="btn btn-outline-dark">Edit profile</button><br />
            <div class="card-info">
              <div class="car-infoBlock infoFollow">
                <span class="text-gray"><i title="Follow" class="material-icons">people</i></span>
                <strong
                  >${this.user.followers} <span class="text-gray">followers •</span> ${this.user.following}
                  <span class="text-gray">following</span></strong
                >
              </div>
              <div class=${['car-infoBlock infoCompany ', this.user.company ? '' : 'undefined']}>
                <i title="Company" class="material-icons">business</i> ${this.user.company
                  ? this.user.company
                  : 'Undefined'}
              </div>
              <div class=${['car-infoBlock infoLocation ', this.user.location ? '' : 'undefined']}>
                <i title="Location" class="material-icons">location_on</i> ${this.user.location
                  ? this.user.location
                  : 'Undefined'}
              </div>
              <div class=${['car-infoBlock infoMail ', this.user.email ? '' : 'undefined']}>
                <i title="Email" class="material-icons">email</i> ${this.user.email ? this.user.email : 'Undefined'}
              </div>
              <div class=${['car-infoBlock infoBlog ', this.user.blog ? '' : 'undefined']}>
                <i title="Blog" class="material-icons">link</i> ${this.user.blog
                  ? html`<a href="${this.user.blog}">${this.user.blog}</a>`
                  : 'Undefined'}
              </div>
            </div>
          </div>`
      : html`<p class="alert-msg"><i class="material-icons">person_off</i> User name not found</p>`}`;
  }
}

window.customElements.define('user-card', UserCard);
