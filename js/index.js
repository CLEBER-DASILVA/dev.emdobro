const btnAvancar = document.getElementById("btn-avancar ");
const btnVoltar = document.getElementById("btn-voltar ");
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");


btnAvancar.addEventlistener("click", function() {

    if(cartaoAtual === cartoes.length - 1 )return;
    
  
    const cartaoselecionado = document.querySelector(".Selecionado");
    cartaoselecionado.classList.remove(".Selecionado");

    const cartoes = document.querySelectorAll(".cartao");

    cartaoAtual++;
    console.log(cartoes[cartaoAtual]);
    cartoes[cartaoAtual].classList.add(".Selecionado");

});


btnVoltar.addEventlistener("click", function () {
if(cartaoAtual === 0) return;

const cartaoselecionado = document.querySelector(".Selecionado");
cartaoselecionado.classList.remove(".Selecionado");

cartaoAtual--;
cartoes[cartaoAtual].classList.add(".Selecionado");
});