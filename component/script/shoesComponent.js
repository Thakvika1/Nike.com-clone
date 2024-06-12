class shoes extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {

        const image = this.getAttribute("shoes-image");
        const title = this.getAttribute("shoes-name");
        const type = this.getAttribute("shoes-type");
        const color = this.getAttribute("shoes-color");
        const prize = this.getAttribute("shoes-prize");
        this.innerHTML =`
            <div class="item">
                <img src="${image}" alt="">
                <h5 class="just-in">Just In</h5>
                <h5 class="shoes-name">${title}</h5>
                <h5 class="type">${type}</h5>
                <h5 class="color">${color}</h5>
                <h5 class="price">${prize}</h5>
            </div>
            `;
    }
}
customElements.define("shoes-item", shoes);