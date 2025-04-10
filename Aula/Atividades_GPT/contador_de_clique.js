
let contador = 0;

const contadortexto_js = document.getElementById('contador_html');
const botaocontador = document.getElementById('bnt_botao');
const botaoresete = document.getElementById('bnt_resete');

function atualizartexto() {
    contadortexto_js.textContent = `Você clicou ${contador} ${contador === 1? 'vez':'vezes'}`
}

botaocontador.addEventListener('click', () => {
    contador += 1;
    atualizartexto()
});

botaoresete.addEventListener('click' , () => {
    contador = 0
    atualizartexto()
})