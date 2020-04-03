import githubApi from '../exercises/api';

export default function showModule4() {
  console.clear();
  htmlConstructor();

  class App {
    constructor() {
      this.repositories = [];

      this.repoListElement = document.getElementById('repo-list');
      this.repoFormElement = document.getElementById('repo-form');
      this.textInputElement = document.querySelector('input[name=repository]');

      this.registerHandlers();
    }

    registerHandlers() {
      this.repoFormElement.onsubmit = event => this.addRepository(event);
    }

    setLoading(status = true) {
      if (status){
        let loadingTextElement = document.createElement('span');
        loadingTextElement.id = 'loading-text'
        loadingTextElement.appendChild(
          document.createTextNode('Carregando...')
        );
        this.repoFormElement.appendChild(loadingTextElement);
      } else {
        document.querySelector('#loading-text').remove();
      }
    }

    async addRepository(event) {
      event.preventDefault();

      const repoInput = this.textInputElement.value;
      this.textInputElement.style.borderColor = '';

      if (!repoInput){
        this.textInputElement.style.borderColor = '#f00';
        return;
      }
        
      try {
        this.setLoading();

        let { 
          data: { 
            id, 
            name, 
            description, 
            owner: { avatar_url }, 
            html_url 
          } 
        } = await githubApi.get(`/repos/${repoInput}`);

        if (this.repositories.find((item) => item.id === id)) {
          alert('Repositório já está na lista!');
        } else {
          this.repositories.push({
            id,
            name,
            description,
            avatar_url,
            html_url,
          });
  
          this.textInputElement.value = '';
          this.render();
        }
      } catch (error) {
        alert('Repositório não encontrado.')
        console.warn(error);
      }

      this.setLoading(false);
    }

    render () {
      this.repoListElement.innerHTML = '';

      this.repositories.forEach(({ name, description, avatar_url, html_url }) => {
        let liElement = document.createElement('li');

        let imgElement = document.createElement('img');
        let strongElement = document.createElement('strong');
        let pElement = document.createElement('p');
        let aElement = document.createElement('a');
        aElement.target = '_blank';

        imgElement.src = avatar_url;
        aElement.href = html_url;
        let strongText = document.createTextNode(name);
        let pText = document.createTextNode(description);
        let aText = document.createTextNode('Acessar');
    
        strongElement.appendChild(strongText);
        pElement.appendChild(pText);
        aElement.appendChild(aText);
    
        liElement.appendChild(imgElement);
        liElement.appendChild(strongElement);
        liElement.appendChild(pElement);
        liElement.appendChild(aElement);
    
        this.repoListElement.appendChild(liElement);
      });
    }
    
  }
  

  new App();
  
}


function htmlConstructor() {
  const containerElement = document.querySelector('#container');
  containerElement.innerHTML = '';

  // Montando o HTML base
  const repoFormElement = document.createElement('form');

  const repositoryTextElement = document.createElement('input');
  repositoryTextElement.type = 'text';
  repositoryTextElement.name = 'repository';
  repositoryTextElement.placeholder = 'Repositório';

  const addButtonElement = document.createElement('button');
  addButtonElement.setAttribute('type', 'submit');
  const addButtonText = document.createTextNode('Adicionar');
  addButtonElement.appendChild(addButtonText);

  repoFormElement.appendChild(repositoryTextElement);
  repoFormElement.appendChild(addButtonElement);

  const repoListElement = document.createElement('ul');

  containerElement.appendChild(repoFormElement);
  containerElement.appendChild(repoListElement);

  repoFormElement.id = 'repo-form';
  repoListElement.id = 'repo-list';
}