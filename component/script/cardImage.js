class cardImage extends HTMLElement {
    constructor() {
        super() 
    }

    connectedCallback() {
        const image = this.getAttribute("card-image");
        const title = this.getAttribute("card-title");
        const cardDetail = this.getAttribute("card-detail");
        const cardButton = this.getAttribute("card-button");

        this.innerHTML = `
        <div class="${image} background">
            <div class="item-nike-membership">
                <p>${title}</p>
                <h3>${cardDetail}</h3>
                <button class="nike-membership-shop">${cardButton}</button>
            </div>
        </div>
    `
    }
}

customElements.define("card-nike", cardImage);