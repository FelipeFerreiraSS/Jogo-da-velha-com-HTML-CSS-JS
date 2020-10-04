var jogador = null;
var jogadorSelecionado = document.getElementById(elementid: 'jogador-selecionado');

mudarJogador( valor: 'X');

function escolherQuadrado(id){

    var quadrado = document.getElementById(id);

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';

    if (jogador === 'X') {
       jogador = 'o'; 
    }else {
        jogador = 'X';
    }

    mudarJogador(jogador);
}

function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}