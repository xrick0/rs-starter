import axios from 'axios';

export default () => {
  console.clear();
  console.log('------------- 4 -------------');

  // const buscaUsuario = usuario => {
  //   axios.get(`https://api.github.com/users/${user}`)
  //     .then(response => {
  //       console.log(response.data);
  //     })
  //     .catch(err => {
  //       console.log('Usuário não existe');
  //     });
  // }

  const buscaUsuario = async user => {
    try {
      const response = await axios.get(`https://api.github.com/users/${user}`);
      console.log(response.data);
    } catch (err) {
      console.log('Usuário não existe');
    }
  };


  buscaUsuario('diego3g');
};