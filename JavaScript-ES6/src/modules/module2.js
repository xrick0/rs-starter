import showExercises from '../exercisesList';

import exercicio1 from '../exercises/m2_e1';


const exercises = [{
  description: 'Exercício 1',
  showFunction: exercicio1
},
]


export default () => showExercises(exercises, '2');