function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    } else{
        menuMobile.classList.add('open');
    }
}
//botao entrar
const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    alert("Faça seu cadastro na aba de contatos!");
});

/*parte do formulario*/
const form = document.querySelector("#form");
const nameInput = document.querySelector("#primeiroNome");
const sobrenomeInput = document.querySelector("#sobrenome");
const emailInput = document.querySelector("#email");
const numberInput = document.querySelector("#number");

form.addEventListener("submit", (event) => {
    event.preventDefault();

//Verifica se o nome esta vazio
if(nameInput.value === ""){
    alert("Por favor, preencha o seu nome");
    return;
}
if(sobrenomeInput.value === ""){
    alert("Por favor, preencha o seu sobrenome")
    return;
}
//Verifica o email esta preenchido e se é valido
if(emailInput.value === "" || !isEmailValid(emailInput.value)){
    alert("Por favor, preencha o seu email")
    return;
}
//se todos os campos forem preenchidos, envie o form
form.submit();
});

//funçao que valida email
function isEmailValid(email) {
    //cria uma regex para validar email
    const emailRegex = new RegExp(
        //usuario12@host.com.br
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-z]{2,}$/
    );

    if(emailRegex.teste(email)){
        return true;
    }
    return false;
}