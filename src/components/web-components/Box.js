/**
 * @module box-l
 * @description
 * A custom element for generic boxes/containers
 * @property {string} padding=var(--s1) A CSS `padding` value
 * @property {string} borderWidth=var(--border-thin) A CSS `border-width` value
 * @property {string} padBox=this.getAttribute(padding) A CSS `padding-box` value
 * @property {boolean} invert=false Whether to apply an inverted theme. Only recommended for greyscale designs.
 */
export default class Box extends HTMLElement {
    constructor() {
        super();
        this.render = () => {
            this.i = `Box-${[this.padding, this.borderWidth, this.padBlock, this.invert].join(
                ""
            )}`;
            this.dataset.i = this.i;
            if (!document.getElementById(this.i)) {
                let styleEl = document.createElement("style");
                styleEl.id = this.i;
                styleEl.innerHTML = `
            [data-i="${this.i}"] {
              padding: ${this.padding};
              border: ${this.borderWidth} solid;
              padding-block: ${this.padBlock};
              ${
                  this.invert
                      ? `background-color: var(--color-light);
                       filter: invert(100%);`
                      : "background-color: inherit;"
              }
            }
        `
                    .replace(/\s\s+/g, " ")
                    .trim();
                document.head.appendChild(styleEl);
            }
        };
    }

    get padding() {
        return this.getAttribute("padding") || "var(--s1)";
    }

    set padding(val) {
        return this.setAttribute("padding", val);
    }

    get borderWidth() {
        return this.getAttribute("borderWidth") || "0";
    }

    set borderWidth(val) {
        return this.setAttribute("borderWidth", val);
    }

    get padBlock() {
        return this.getAttribute("padBlock" || this.getAttribute("padding"))
    }

    set padBox(val) {
        return this.setAttribute("padBlock", val)
    }

    static get observedAttributes() {
        return ["padBox", "borderWidth", "padding", "invert"];
    }

    get invert() {
        return this.hasAttribute("invert");
    }

    set invert(val) {
        if (val) {
            return this.setAttribute("invert", "");
        } else {
            return this.removeAttribute("invert");
        }
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback() {
        this.render();
    }
}

if ("customElements" in window) {
    customElements.define("box-l", Box);
}
