var body = document.querySelector('body');

var nomes = ["Diego", "Gabriel", "Lucas"];

var lista = document.createElement('ul');

for (const nome of nomes) {
  addName(lista, nome);
}

body.appendChild(lista);

var textInput = document.createElement('input');
textInput.type = "text";
textInput.name = "nome";

var botao = document.createElement('button');

var textElement = document.createTextNode('Adicionar');
botao.appendChild(textElement);
botao.onclick = function(){
  if (textInput.value != ""){
    addName(lista, textInput.value);
  }
}
body.appendChild(textInput);
body.appendChild(botao);

function addName(lista, nome){
  var li = document.createElement('li');
  var elementoDaLista = document.createTextNode(nome);
  li.appendChild(elementoDaLista);
  lista.appendChild(li);
}