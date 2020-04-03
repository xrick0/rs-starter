import axios from 'axios';

export default () => {
  console.clear();
  console.log('------------- 3 -------------');

  class Github {
    // static getRepositories(repo) {
    //   axios.get(`https://api.github.com/repos/${repo}`)
    //     .then(response => {
    //       console.log(response.data);
    //     })
    //     .catch(err => {
    //       console.log('Repositório não existe');
    //     })
    // }

    static async getRepositories(repo) {
      try {
        const response = await axios.get(`https://api.github.com/repos/${repo}`);
        console.log(response.data);
      } catch (err) {
        console.log('Repositório não existe');
      }
    }
  }


  Github.getRepositories('rocketseat/comunidade');
  Github.getRepositories('rocketseat/dslkvmskv');
};