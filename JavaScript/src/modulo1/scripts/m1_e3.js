function temHabilidade(skills) 
{  
    var res;
    res = skills.indexOf("Javascript") !== -1;
    return res;
}

var skills = ["Javascript", "ReactJS", "React Native"];


var bodyElement = document.querySelector('body');

var messageElement = document.createElement('p');
var textElement = document.createTextNode(temHabilidade(skills));

messageElement.appendChild(textElement);
bodyElement.appendChild(messageElement);