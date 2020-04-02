var botao = document.createElement('button');

var body = document.querySelector('body');

var textoDoBotao = document.createTextNode('Clique aqui!');

botao.appendChild(textoDoBotao);


body.appendChild(botao);

botao.onclick = function(){
  var quadrado = document.createElement('div');
  quadrado.style.width = 100;
  quadrado.style.height = 100;
  quadrado.style.backgroundColor = '#f00';

  quadrado.onmouseenter = function(){
    quadrado.style.backgroundColor = 
    getRandomColor();
  }

  body.appendChild(quadrado);
}

function getRandomColor() {  
  var letters = "0123456789ABCDEF";  
  var color = "#";  
  for (var i = 0; i < 6; i++) {    
    color += letters[Math.floor(Math.random() * 16)];  
  }  
  return color;
}
