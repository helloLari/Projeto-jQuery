$(function () {
    $("#accordion").accordion({ heightStyle: "content" }); // Requisito: Accordion
});

/* Função construtora barra círculo */

$(function () {
    class ProgressRing extends HTMLElement {
        constructor() {
            super();
            const stroke = this.getAttribute("stroke");
            const radius = this.getAttribute("radius");
            const cor = this.getAttribute("cor");
            const normalizedRadius = radius - stroke * 2;
            this._circumference = normalizedRadius * 2 * Math.PI;

            this._root = this.attachShadow({ mode: "open" });
            this._root.innerHTML = `
            <svg
                height="${radius * 2}"
                width="${radius * 2}"
            >
            <circle
                stroke="${cor}"
                stroke-dasharray="${this._circumference} ${this._circumference}"
                    style="stroke-dashoffset:${this._circumference}"
                    stroke-width="${stroke}"
                    fill="transparent"
                    r="${normalizedRadius}"
                    cx="${radius}"
                    cy="${radius}"
                />
                </svg>

                <style>
                circle {
                    transition: stroke-dashoffset 0.35s;
                    transform: rotate(-90deg);
                    transform-origin: 50% 50%;
                }
                </style>
            `;
        }

        setProgress(percent) {
            const offset =
                this._circumference - (percent / 100) * this._circumference;
            const circle = this._root.querySelector("circle");
            circle.style.strokeDashoffset = offset;
        }

        setColor(cor) {
            const circle = this._root.querySelector("circle");
            circle.style.stroke = cor;
        }

        static get observedAttributes() {
            return ["progress", "cor"];
        }

        attributeChangedCallback(name, oldValue, newValue) {
            if (name === "progress") {
                this.setProgress(newValue);
            }
            if (name === "cor") {
                this.setColor(newValue);
            }
        }
    }

    window.customElements.define("progress-ring", ProgressRing);
});
