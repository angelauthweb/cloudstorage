class MiFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Rodea Nambo Jose Angel.
      </p>`;
  }
}

customElements.define("mi-footer", MiFooter);
