export default function showExercises(exercises, module) {
  const containerDiv = document.querySelector('#container');
  containerDiv.innerHTML = '';
  

  let h2ElementText = document
    .createTextNode(`Exercícios do módulo ${module}: (ver no console)`);
  let h2Element = document.createElement('h2');
  h2Element.appendChild(h2ElementText);
  
  containerDiv.appendChild(h2Element);

  exercises.map(({ description, showFunction }) => {
    let buttonElement = document.createElement('button');
    let buttonText = document.createTextNode(description)
    
    buttonElement.appendChild(buttonText);
    buttonElement.onclick = showFunction;
    buttonElement.style.cursor = 'pointer';
    buttonElement.className = 'itembutton';
  
    containerDiv.appendChild(buttonElement);
  });

}