class feature extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback () {
        this.innerHTML =`
        <!-- Feature -->
        <section class="container feature-main">
            <div>
                <ul class="feature">
                    <li class="feature-head">Featured</li>
                    <li class="feature-body feature-gray">Air Force 1</li>
                    <li class="feature-body feature-gray">Jordan 1</li>
                    <li class="feature-body feature-gray">Metcon</li>
                    <li class="feature-body feature-gray">Air Max 270</li>
                </ul>
            </div>

            <div>
                <ul class="feature">
                    <li class="feature-head">Shoes</li>
                    <li class="feature-body feature-gray">All Shoes</li>
                    <li class="feature-body feature-gray">Jordan Shoes</li>
                    <li class="feature-body feature-gray">Running Shoes</li>
                    <li class="feature-body feature-gray">Basketball Shoes</li>
                </ul>
            </div>

            <div>
                <ul class="feature">
                    <li class="feature-head">Clothing</li>
                    <li class="feature-body feature-gray">All Clothing</li>
                    <li class="feature-body feature-gray">Tops & T-Shirts</li>
                    <li class="feature-body feature-gray">Shorts</li>
                    <li class="feature-body feature-gray">Hoodies & Pullovers</li>
                </ul>
            </div>

            <div>
                <ul class="feature">
                    <li class="feature-head">Kids</li>
                    <li class="feature-body feature-gray">Infant & Toddler Shoes</li>
                    <li class="feature-body feature-gray">Kids Shoes</li>
                    <li class="feature-body feature-gray">Kids Basketball Shoes</li>
                    <li class="feature-body feature-gray">Kids Running Shoes</li>
                </ul>
            </div>
        </section>

        <!-- feature-display-when-small-screen  -->
        <section class="feature-small-screen">
            <div class="container child-feature-small-screen">
                <ul class="second-feature">
                    <li>Featured</li>
                    <li>Shoes</li>
                    <li>Clothing</li>
                    <li>Kids</li>
                </ul>
            </div>
        </section>
        `;
    }
}
customElements.define("feature-nike", feature);