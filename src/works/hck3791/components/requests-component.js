import { LitElement, html } from 'lit-element';
import { requestsStyles } from '../styles/requests-styles';

class RequestComponent extends LitElement {
  static get styles() {
    return [requestsStyles];
  }

  static get properties() {
    return {
      requestsList: { type: Array },
      showRequests: { type: Array },
      dates: { type: Array },
    };
  }

  constructor() {
    super();
    this.requestsList = [];
    this.showRequests = [];
  }

  connectedCallback() {
    super.connectedCallback();
    this.requestsList = this.data;
    this.requestsList.forEach((obj) => {
      obj.display ? this.showRequests.push(obj) : false;
    });
  }

  render() {
    return html`
      <div class="container">
        <table>
          <caption>
            Lista de peticiones
          </caption>
          <thead>
            <tr>
              <th>Título</th>
              <th>Fecha de publicación</th>
            </tr>
          </thead>
          <tbody>
            ${this.showRequests.map((obj) => {
              return html`
                <tr>
                  <td data-label="Título"><a href="#">${obj.title}</a></td>
                  <td data-label="Publicación">${obj.publicationDate}</td>
                </tr>
              `;
            })}
          </tbody>
        </table>
      </div>
    `;
  }
}

customElements.define('requests-component', RequestComponent);