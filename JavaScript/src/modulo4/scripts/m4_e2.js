var button = document.querySelector('button');
var textBox = document.querySelector('input');
var repoList = document.querySelector('#repos');

function buscaRepos(user) {
  repoList.innerHTML = '';

  axios.get(`https://api.github.com/users/${user}/repos`)
    .then(function(response) {
      for (const repo of response.data) {
        var liElement = document.createElement('li');
        
        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', repo.url);
        var textElement = document.createTextNode(repo.name);

        linkElement.appendChild(textElement);
        liElement.appendChild(linkElement);

        repoList.appendChild(liElement);
      }
    })
    .catch(function(error) {
      console.warn(error);
      alert('Erro na requisição!')
    });
}


button.onclick = function() {
  buscaRepos(textBox.value);
}