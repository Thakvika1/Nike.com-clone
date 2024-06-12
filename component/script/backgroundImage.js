class backgroundImage extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        const image = this.getAttribute("image");
        const title = this.getAttribute("title");
        const detail = this.getAttribute("detail");

        this.innerHTML = `
        <div  class="${image} background-image">
            <div class="parent-item">
                <p class="items" >${title}</p>
                <h3 class="items">${detail}</h3>
                <button class="item-shop-button">shop</button>
            </div>
        </div>
        `;
    }
}
customElements.define("background-image", backgroundImage);