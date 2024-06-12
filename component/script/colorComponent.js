class color extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        const color = this.getAttribute("color");

        let firstLetter = color.slice(0, 1);
        let upLetter = firstLetter.toUpperCase();
        let lastLetter = color.slice(1, color.length);
        let fullLetter = upLetter + lastLetter;

        this.innerHTML = `
            <div class="main-color-radius">
              <div class="${color} color-radius"></div>
              <h5>${fullLetter}</h5>
            </div>
            `;
    }
}
customElements.define("color-feature", color);
jvfsovhIkgTh