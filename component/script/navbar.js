class navbarComponent extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        const link1 = this.getAttribute("newFeature");
        const link2 = this.getAttribute("men");
        const link3 =  this.getAttribute("women");
        const link4 = this.getAttribute("kid");
        const link5 = this.getAttribute("homePage");

        this.innerHTML = `
        <nav class="navbar2">
            <div class="container navbar2-child">
                <div class="logo-list">
                <a href="${link5}">
                    <div class="nike-logo">
                        <svg aria-hidden="true" class="pre-logo-svg" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z" clip-rule="evenodd"></path></svg>
                    </div>
                </a>
                    <div class="center">
                        <ul class="list-navbar">
                            <a href="${link1}"><li>New & Feature</li></a>
                            <a href="${link2}"><li>Men</li></a>
                            <a href="${link3}"><li>Women</li></a>
                            <a href="${link4}"><li>Kid</li></a>
                            <a href="#"><li>Accessories</li></a>
                            <a href="#"><li>Sale</li></a>
                        </ul>
                    </div>
                </div>
                <div class="search-button-2icon">
                    <div class="search-button">
                        <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="28px" height="28px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"></path></svg>
                        <input class="search"  placeholder="Search" type="search">
                    </div>
                    <div class="svg-icon">
                        <svg aria-hidden="true" class="pre-nav-design-icon icon1" focusable="false" viewBox="0 0 24 24" role="img" width="30px" height="30px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"></path></svg>
                        <svg aria-hidden="true" class="pre-nav-design-icon icon2" focusable="false" viewBox="0 0 24 24" role="img" width="30px" height="30px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"></path></svg>
                        <svg aria-hidden="true" class="pre-nav-design-icon icon3" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M21 5.25H3M21 12H3m18 6.75H3"></path></svg>
                    </div>
                </div>
            </div>
        </nav>`;
    }
}

customElements.define("navbar-nike", navbarComponent);