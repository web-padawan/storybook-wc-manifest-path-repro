import { html, LitElement } from 'lit';

/** Element that no manifest declares. */
export class ReproElement extends LitElement {
  /** The count. */
  count = 0;

  render() {
    return html`${this.count}`;
  }
}

customElements.define('repro-element', ReproElement);
