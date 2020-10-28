import { LitElement, html } from 'lit-element';
import { peticiones } from './peticiones';
import { peticionesCSS } from './styles/peticionesCSS';
export class DescripcionPeticiones extends LitElement {
  static get styles() {
    return [peticionesCSS];
  }

  static get properties() {
    return {
      id: { type: Number },
      peticiones: { type: Object },
    };
  }

  constructor() {
    super();
    this.peticiones = peticiones[1];
  }

  render() {
    return html`
      <div id="divdesc">
        <section>
          <div id="titulo">
            <h2 id="h2titulo">Título:${this.peticiones ? this.peticiones.Titulo : ''}</h2>
            <h2 id="h2fecha">Fecha de publicacion: ${this.peticiones ? this.peticiones.FechaPublicacion : ''}</h2>
          </div>
          <div>
            <h2>Descripción:</h2>
            <div id="reqContainer">
              <p>Requisitos:</p>
              <p>${this.peticiones ? this.peticiones.Descripcion[0] : ''}</p>
              <p>Lugar de trabajo:${this.peticiones ? this.peticiones.Descripcion[1] : ''}</p>
              <p>Actividades:</p>
              <p>${this.peticiones ? this.peticiones.Descripcion[2] : ''}</p>
            </div>
          </div>
        </section>
      </div>
    `;
  }
}

customElements.define('descripcion-peticiones', DescripcionPeticiones);
