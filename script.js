/* Se os campos de nome e email estiverem preenchidos 
    envie os dados 
senao 
    peça a usuaria que preencha os campos nome e email */

/*de onde vai vir o evento = botão
qual evento ele deve ouvir = clique no botão
o que ele deve fazer quando isso aconteer = enviar as informações
dequemviiraoevento.addEventListener("evento", oquedevefazer)*/

document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

/*
function nome da funçao(){
    //codigo que deve ser executado
}
*/

function validaFormulario(){
    if (document.getElementById("nome").value != "" && document.getElementById("email").value != "" && document.getElementById("telefone").value != ""){
        alert("Prontinho! Você receberá as novidades por email.")
    }else{
        alert("Por favor, preencha os campos de nome, e-mail e telefone!")
    }
}