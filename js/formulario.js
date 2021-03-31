//BARRA DE CARREGAMENTO

var contador = 1;
let inputsContados = [];

$(function () {
    $("#progressbar").progressbar({ value: 0 });
});

function verificaInputs(input) {
    console.log(input.id);
    console.log(inputsContados);
    if (input.value == "") {
        if (inputsContados.includes(input.id)) {
            let index = inputsContados.indexOf(input.id);
            inputsContados.splice(index, 1);
            contador -= 9;
        }
    } else {
        if (inputsContados.includes(input.id)) {
            return;
        }
        inputsContados.push(input.id);
        contador += 9;
    }
    (progressbar = $("#progressbar")),
        (progressbarValue = progressbar.find(".ui-progressbar-value"));

    progressbar.progressbar("option", {
        value: contador,
    });
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

function validaAno(ano) {
    if (ano.value <= 1890 || ano.value > 2021) {
        // calculo da idade
        document.getElementById("ano").style.background = "#f6cacc"; // se for mais de 130 anos ou numero negativo o fundo fica vermelho pois está errado
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
    let nome = nomeUsuario();
    let idade = 2021 - document.getElementById("ano").value;
    let cpf = document.getElementById("cpf");

    document.getElementById(
        "confirmacaoDados"
    ).innerHTML = `Olá ${nome} , você tem ${idade} anos de idade e pode usar ${cpf.value} `;
}
