

//Define a variaveis do js
let tempoRestante = 10;
let pontuacao = 0;
let intervalo;

//Retira os comandos do html
const tempoElemento = document.getElementById('tempo');
const pontuacaoElemento = document.getElementById('pontuacao');
const iniciarBtn = document.getElementById('iniciar');
const botaoClique = document.getElementById('botaoClique');

//Evento ao clicar em iniciar
iniciarBtn.addEventListener('click', () => {

  //Tempo do contador   
  tempoRestante = 10;

  //Reseta a pontuação inicia o contador, e desabilita o botão iniciar
  pontuacao = 0;
  pontuacaoElemento.textContent = "Pontuação: 0";
  tempoElemento.textContent = "Tempo: 10s";
  //botão desabilitado
  iniciarBtn.disabled = true;
  botaoClique.style.display = 'inline-block';

  //Intervalo do tempo corrido
  intervalo = setInterval(() => {
    tempoRestante--;
    tempoElemento.textContent = `Tempo: ${tempoRestante}s`;

    //Se o tempo zerar, ele ira parar de contar e habilita o botão iniciar e retira uma mensagem
    if (tempoRestante <= 0) {
      clearInterval(intervalo);
      botaoClique.style.display = 'none';
      iniciarBtn.disabled = false;
      alert(`Tempo esgotado! Você clicou ${pontuacao} vezes.`);
    }
  }, 1000);
});

botaoClique.addEventListener('click', () => {
  pontuacao++;
  pontuacaoElemento.textContent = `Pontuação: ${pontuacao}`;
});
