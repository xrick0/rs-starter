var endereco = {  
  rua: "Rua dos pinheiros",  
  numero: 1293,  
  bairro: "Centro",  
  cidade: "São Paulo",  
  uf: "SP"
};

function showAddress(endereco) {
  var msg = "";

  msg += "O usuário mora em ";
  msg += endereco.cidade;
  msg += " / ";
  msg += endereco.uf;
  msg += ", no bairro ";
  msg += endereco.bairro;
  msg += ", na rua \"";
  msg += endereco.rua;
  msg += "\" com n\xb0 ";
  msg += endereco.numero;
  msg += ".";

  return msg;
}

var bodyElement = document.querySelector('body');

var messageElement = document.createElement('p');
var textElement = document.createTextNode(showAddress(endereco));

messageElement.appendChild(textElement);
bodyElement.appendChild(messageElement);
