function validacaoEmail(field) {

    if (field == undefined){
        field = document.getElementById("email");
    }

    if (field.value == ''){
        document.getElementById("email").style.boxShadow = "0 0 6px red, inset 0 0 3px red";
        return false
    }
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
    document.getElementById("email").style.boxShadow = "";
    /* alert("E-mail válido"); */
    } else {
    document.getElementById("email").style.boxShadow = "0 0 6px red, inset 0 0 3px red";
    return false
    //alert("E-mail inválido");
    }
    return true
}

function cadastrarEmail(){
    if (validacaoEmail()) {
        alert("Email cadastrado com sucesso.")
        document.getElementById("email").value = ""
    }
}