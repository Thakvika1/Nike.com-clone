
class shoesScroll extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        const image = this.getAttribute("shoes-image");
        const name = this.getAttribute("shoes-name");
        const gender = this.getAttribute("shoes-gender");
        const prize = this.getAttribute("shoes-prize");

        this.innerHTML =`
        <div class="child-second-shoes-scroll">
            <div>
                <img class="grand-shoes-scroll" src="${image}" alt="">
            </div>
            <div>
                <h5>${name}</h5> </br>
                <span>${gender}</span>
                <h5>${prize}</h5>
            </div>
        </div>`
    }
}

customElements.define("shoes-card", shoesScroll);