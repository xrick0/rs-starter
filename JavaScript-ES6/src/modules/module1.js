import showExercises from '../exercisesList';

import exercicio1 from '../exercises/m1_e1';
import exercicio2 from '../exercises/m1_e2';
import exercicio3 from '../exercises/m1_e3';
import exercicio4 from '../exercises/m1_e4';
import exercicio5 from '../exercises/m1_e5';
import exercicio6 from '../exercises/m1_e6';
import exercicio7 from '../exercises/m1_e7';

const exercises = [{
  description: 'Exercício 1',
  showFunction: exercicio1
},
{
  description: 'Exercício 2',
  showFunction: exercicio2
},
{
  description: 'Exercício 3',
  showFunction: exercicio3
},
{
  description: 'Exercício 4',
  showFunction: exercicio4
},
{
  description: 'Exercício 5',
  showFunction: exercicio5
},
{
  description: 'Exercício 6',
  showFunction: exercicio6
},
{
  description: 'Exercício 7',
  showFunction: exercicio7
}
]


export default () => showExercises(exercises, '1');