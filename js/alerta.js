// Contole input Circúlos
$(function () {
    //Adiciona os eventos nos dois inputs
    $(".anel-edit").click((e) => inicioEdit(e.target));
    $(".anel-edit").blur((e) => fimEdit(e.target));
});

function inicioEdit(elem) {
    elem.innerHTML = "";
}

function limite(elem) {
    let texto = elem.innerHTML + "";
    if (texto.length > 3) {
        elem.innerHTML = "";
        alert("O limite é de 999%");
    }
}

function fimEdit(elem) {
    let anel = $(elem).prev();
    if (elem.innerHTML == "") elem.innerHTML = 0;
    if (elem.innerHTML > 100) {
        $(anel).attr("progress", 100);
        $(anel).attr("cor", "red");
    } else {
        $(anel).attr("progress", elem.innerHTML);
        $(anel).attr("cor", descobrirCor(elem.innerHTML));
    }
    // Coloca o %
    if (elem.innerHTML.endsWith("%")) return;
    elem.innerHTML += "%";
    atualizarAlerta();
}

function atualizarAlerta() {
    let numEnfermaria = $(".anel-edit")[0].innerHTML.slice(0, -1);
    let numUti = $(".anel-edit")[1].innerHTML.slice(0, -1);
    let maior = Math.max(numEnfermaria, numUti);
    let cor = descobrirCor(maior);
    switch (cor) {
        case "red":
            $("#alerta-nivel").text(1);
            break;
        case "orange":
            $("#alerta-nivel").text(2);
            break;
        case "yellow":
            $("#alerta-nivel").text(3);
            break;
        case "green":
            $("#alerta-nivel").text(4);
            break;
    }
    $("#alerta-nivel").prev().attr("cor", cor);
    atualizarTabela(cor);
}

function atualizarTabela(alerta) {
    $(".alerta1, .alerta2, .alerta3, .alerta4").hide();
    switch (alerta) {
        case "red":
            $(".alerta1").show();
            break;
        case "orange":
            $(".alerta2").show();
            break;
        case "yellow":
            $(".alerta3").show();
            break;
        case "green":
            $(".alerta4").show();
            break;
    }
}

function descobrirCor(numero) {
    if (numero >= 90) {
        return "red";
    } else if (numero >= 80) {
        return "orange";
    } else if (numero >= 70) {
        return "yellow";
    } else {
        return "green";
    }
}

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
