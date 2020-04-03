import showModule1 from './modules/module1';
import showModule2 from './modules/module2';
import showModule3 from './modules/module3';
import showModule4 from './modules/module4';

export default function showModulesList() {
  const modules = [{
    description: 'Módulo 1',
    showFunction: showModule1
  },
  {
    description: 'Módulo 2',
    showFunction: showModule2
  },
  {
    description: 'Módulo 3',
    showFunction: showModule3
  },
  {
    description: 'Módulo 4',
    showFunction: showModule4
  }
]

  const containerDiv = document.querySelector('#container');
  containerDiv.innerHTML = '';

  let h2ElementText = document.createTextNode('Módulos:');
  let h2Element = document.createElement('h2');
  h2Element.appendChild(h2ElementText);
  
  containerDiv.appendChild(h2Element);

  modules.map(({ description, showFunction }) => {
    let buttonElement = document.createElement('button');
    let buttonText = document.createTextNode(description)
    
    buttonElement.appendChild(buttonText);
    buttonElement.onclick = showFunction;
    buttonElement.style.cursor = 'pointer';
    buttonElement.className = 'itembutton';
  
    containerDiv.appendChild(buttonElement);
  });
}

// export function backToModulesButton(module) {
//   let titleElementText = document.createTextNode(`Módulo ${module}`);
//   let titleElement = document.createElement('h2');
//   titleElement.appendChild(titleElementText);
//   titleElement.onclick = showModulesList;
//   //titleElement.setAttribute('href', '#');
//   titleElement.style.fontSize = 20;
//   titleElement.style.textDecoration = 'none';
//   titleElement.style.color = '#000';

//   titleElement.style.cursor = 'pointer';

//   const containerDiv = document.querySelector('#container');
//   containerDiv.appendChild(titleElement);
// }