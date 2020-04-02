var usuarios = 
[
    {    
        nome: "Diego",    
        habilidades: ["Javascript", "ReactJS", "Redux"]  
    },  
    {    
        nome: "Gabriel",    
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]  
    }
];


// Escrever:
//O Diego possui as habilidades: 
//Javascript, ReactJS, Redux
//O Gabriel possui as habilidades: 
//VueJS, Ruby on Rails, Elixir

function showSkills(usuarios) {
  var bodyElement = document.querySelector('body');

  var messages = [];

  for (const usuario of usuarios){
    var msg = "O " + usuario.nome + " possui as habilidades: " + usuario.habilidades.join(", ");

    var messageElement = document.createElement('p');
    var textElement =  document.createTextNode(msg);

    var lineElement = document.createElement('br');

    messageElement.appendChild(textElement);
    bodyElement.appendChild(messageElement);
    bodyElement.appendChild(lineElement);
  }
}
  
showSkills(usuarios);



