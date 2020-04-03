export default function exercicio() {
  console.clear();
  const empresa = {
    nome: 'Rocketseat',
    endereco: {
      cidade: 'Rio do Sul',
      estado: 'SC',
    }
  };
  
  
  // 4.1
  console.log('------------- 4.1 -------------');
  const { nome, endereco: { cidade, estado } } = empresa;
  
  console.log(nome); // Rocketseat
  console.log(cidade); // Rio do Sul
  console.log(estado); // SC
  
  
  // 4.2
  console.log('------------- 4.2 -------------');
  function mostraInfo({ nome, idade }) {
    return `${nome} tem ${idade} anos.`;
  }
  console.log(mostraInfo({ nome: 'Diego', idade: 23 }))
}