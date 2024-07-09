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