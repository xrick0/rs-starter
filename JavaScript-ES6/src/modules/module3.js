import showExercises from '../exercisesList';

import exercicio1 from '../exercises/m3_e1';
import exercicio2 from '../exercises/m3_e2';
import exercicio3 from '../exercises/m3_e3';
import exercicio4 from '../exercises/m3_e4';


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
]


export default () => showExercises(exercises, '3');