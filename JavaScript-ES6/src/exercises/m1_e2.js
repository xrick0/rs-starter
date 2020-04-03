export default function exercicio() {
  console.clear();
  const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
  ];
  
  //2.1 - map
  console.log('------------- 2.1 -------------');
  const idades = usuarios.map(({ idade }) => idade);
  console.log(idades);
  
  //2.2 - filter
  console.log('------------- 2.2 -------------');
  const rocketDezoito = usuarios.filter(({ idade, empresa }) => empresa === 'Rocketseat' && idade >= 18 );
  console.log(rocketDezoito);
  
  //2.3 - find
  console.log('------------- 2.3 -------------');
  const trabalhaGoogle = usuarios.find(( {empresa} ) => empresa === 'Google');
  console.log(trabalhaGoogle);
  
  //2.4 - map + filter
  console.log('------------- 2.4 -------------');
  const abaixoDe25 = usuarios.map(item => {
    item.idade *= 2;
    return item;
  }).filter(({ idade }) => idade <= 50)
  console.log(abaixoDe25);
}