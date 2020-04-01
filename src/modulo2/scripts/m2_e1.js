var body = document.querySelector('body');

var botao = document.createElement('button');

var textoDoBotao = document.createTextNode('CLICA AQUI, VAI!');
botao.appendChild(textoDoBotao);

body.appendChild(botao);


botao.onclick = function() {
  var quadrado = document.createElement('div');
  quadrado.style.height = 100;
  quadrado.style.width = 100;
  quadrado.style.backgroundColor = '#f00';

  
  body.appendChild(quadrado);
}



