var body = document.querySelector('body');

var nomes = ["Diego", "Gabriel", "Lucas"];

var lista = document.createElement('ul');

for (const nome of nomes) {
  var li = document.createElement('li');
  var elementoDaLista = document.createTextNode(nome);
  li.appendChild(elementoDaLista);
  lista.appendChild(li);
}

body.appendChild(lista);