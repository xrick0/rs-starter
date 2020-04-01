function experiencia(anos) 
{  
    var exp;
    if (anos < 1)
    {
        exp = "Iniciante";
    }
    else if (anos >= 1 && anos < 3)
    {
        exp = "Intermediário";
    }
    else if (anos >= 3 && anos < 7)
    {
        exp = "Avançado";
    }
    else if (anos >= 7)
    {
        exp = "Jedi Master";
    }
    return exp;
}

var anosEstudo = 7;

// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master

var bodyElement = document.querySelector('body');

var messageElement = document.createElement('p');
var textElement = document.createTextNode(experiencia(anosEstudo));

messageElement.appendChild(textElement);
bodyElement.appendChild(messageElement);