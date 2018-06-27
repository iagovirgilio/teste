// Máscaras formulário

$("#tel").mask("(00) 0000-0000")

$("#cel").mask("(00) 0000-00009")

$("#cel").blur(function (event) {
    if ($(this).val().length == 15) {
        $("#cel").mask("(00) 00000-0009")
    } else {
        $("#cel").mask("(00) 0000-00009")
    }
});

var person = document.getElementById("person-mode").value;

if (person == "fisica") {
    $("#cpf-cnpj").mask("000.000.000-00")
} else {
    $("#cpf-cnpj").mask("00.000.000/0000-00")
}