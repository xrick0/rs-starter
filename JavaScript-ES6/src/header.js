import showModules from './modulesList';

export default function headerRender(){
  const pageBody = document.querySelector('body');
  pageBody.innerHTML = '';

  let titleElementText = document.createTextNode('Curso de JavaScript ES6');
  let titleElement = document.createElement('a');
  titleElement.appendChild(titleElementText);
  titleElement.onclick = showModules;
  titleElement.setAttribute('href', '#');
  titleElement.className = 'title-link';
  
  pageBody.appendChild(titleElement);

  const containerDiv = document.createElement('div');
  containerDiv.setAttribute('id', 'container');

  pageBody.appendChild(containerDiv);
}
  