function pares(x, y) {  
  var numerosPares = [];

  if (x < y)
  {
    if (x % 2 !== 0)
    {
      x = Math.ceil(x);
      if (x % 2 !== 0)
      {
        x++;
      }
    }
    for (var i = x; i <= y; i += 2)
    {
      numerosPares.push(i);
    }
  }

  return numerosPares;
}



var bodyElement = document.querySelector('body');

var messageElement = document.createElement('p');
var textElement = document.createTextNode(String(pares(32, 321)));

messageElement.appendChild(textElement);
bodyElement.appendChild(messageElement);