//BARRA DE CARREGAMENTO

var contador = 1;
let inputsContados = [];

$(function () {
    $("#progressbar").progressbar({ value: 0 }); // Requisito UI : Progress Bar
});

function tirarVermelho(campo) {
    campo.style.background = "#DBF6F5";
}

function verificaInputs(input) {
    if (input.value == "") {
        input.style.background = "#f6cacc";
        if (inputsContados.includes(input.id)) {
            let index = inputsContados.indexOf(input.id);
            inputsContados.splice(index, 1);
            contador -= 9;
            if (contador < 100) $("#completo").text("");
        }
    } else {
        if (inputsContados.includes(input.id)) {
            return;
        }
        inputsContados.push(input.id);
        contador += 9;
        if (contador >= 100) $("#completo").text("OK!");
    }
    (progressbar = $("#progressbar")),
        (progressbarValue = progressbar.find(".ui-progressbar-value"));

    progressbar.progressbar("option", {
        value: contador,
    });
}

//Calculo IMC
var imc = 0;

function calculoImc() {
    let peso = $("#peso")[0].value;
    let altura = $("#altura")[0].value;
    if (peso != "" && altura != "") {
        imc = peso / (altura / 100) ** 2;
        if (imc >= 50) {
            $("#obesidade")[0].value = "Sim";
        } else {
            $("#obesidade")[0].value = "Não";
        }
    }
}

// CONDIÇÕES
function VerificaSexo() {
    var sexo = document.getElementById("sexo").value;
    var feminino = document.getElementById("sec_gestante");
    if (sexo == "feminino") {
        $(feminino).show();
    } else {
        $(feminino).hide();
        return;
    }
}

// VALIDAÇÃO
function nomeUsuario() {
    var nome = document.getElementById("nome").value;
    return nome;
}

function anoNascimento() {
    let ano = document.getElementById("ano").value;
    let anoBoolean = validaAno(ano); //para validar o ano
    if (anoBoolean) {
        return ano;
    }
    return;
}
//função que valida se a idade é menor que 130 e não é um numero negativo

function validaDia(valor) {
    let numero = valor.value;
    if (numero == "") {
        return;
    } else if (numero > 31 || numero < 1) {
        document.getElementById("dia").style.background = "#f6cacc";
        alert("Dia inválido!");
        valor.value = "";
    }
    document.getElementById("dia").style.background = "#DBF6F5";
}

function validaAno(ano) {
    if (ano.value <= 1890 || ano.value > 2021) {
        // calculo da idade
        document.getElementById("ano").style.background = "#f6cacc"; // se for mais de 130 anos ou numero negativo o fundo fica vermelho pois está errado
        ano.value = "";
    } else {
        document.getElementById("ano").style.background = "#DBF6F5";
    }
}

function VerificaCPF() {
    strCpf = document.getElementById("cpf").value;
    var soma = 0;
    var resto;

    if (strCpf == "00000000000" || strCpf.length != 11) {
        document.getElementById("cpf").style.background = "#f6cacc"; // alterar background
        return false;
    }

    for (i = 1; i <= 9; i++) {
        soma = soma + parseInt(strCpf.substring(i - 1, i)) * (11 - i);
    }

    resto = soma % 11;

    if (resto == 10 || resto == 11 || resto < 2) {
        resto = 0;
    } else {
        resto = 11 - resto;
    }

    if (resto != parseInt(strCpf.substring(9, 10))) {
        document.getElementById("cpf").style.background = "#f6cacc"; // alterar background
        return false;
    }

    soma = 0;

    for (i = 1; i <= 10; i++) {
        soma = soma + parseInt(strCpf.substring(i - 1, i)) * (12 - i);
    }

    resto = soma % 11;

    if (resto == 10 || resto == 11 || resto < 2) {
        resto = 0;
    } else {
        resto = 11 - resto;
    }

    if (resto != parseInt(strCpf.substring(10, 11))) {
        document.getElementById("cpf").style.background = "#f6cacc"; // alterar background
        return false;
    }
    document.getElementById("cpf").style.background = "#DBF6F5";
    return true;
}

function blocoExibicao() {
    // Testa se foi completo o formulario
    if (contador < 100) return;
    let vacinar = false;
    // Testa se é obeso nivel 3
    if ($("#obesidade")[0].value == "Sim") vacinar = true;
    // Testa outaras comorbidades
    let comorbidades = $(".comorbidades");
    for (let item of comorbidades) {
        if (item.control.checked) vacinar = true;
    }
    // Testa a profissão
    if (!$("#profissao")[0][9].selected) vacinar = true;
    // Testa Gestante
    if ($("#gestante")[0][1].selected) vacinar = true;
    // Testa Idade
    if ($("#ano")[0].value < 1953) vacinar = true;

    //Mostra a mensagem pro usuário
    $("#resultado-cadastro").show();
    if (vacinar) {
        $("#resultado-cadastro p").text(
            `Olá ${
                $("#nome")[0].value
            }, você já se enquadra nos grupos que estão sendo vacinados. Em breve entraremos em contrato para agendar seu horário.`
        );
    } else {
        $("#resultado-cadastro p").text(
            `Olá ${
                $("#nome")[0].value
            }, você ainda não se enquadra nos grupos que estão sendo vacinados. Aguarde a sua vez.`
        );
    }
}
