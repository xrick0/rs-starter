import ClasseUsuario, { idade, idade as IdadeUsuario } from './functions';

export default () => {
  console.clear();
  console.log('------------- 1 -------------');
  console.log('------------- 1.1 -------------');
  ClasseUsuario.info();


  console.log('------------- 1.2 -------------');
  console.log(idade);

  console.log('------------- 1.3 -------------');
  console.log(IdadeUsuario);
};