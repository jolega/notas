
//Importacion de Modulos, 

import { searchsGreater, searchLess, gradePointAverage } from "./js/notes.js";

//Delcaracion de Variable, 

const grades = [ 4 , 5 , 3 , 7 , 9 , 8 , 7, 6 , 5 , 9 ];

//Declaracion de Funciones,


//Ejecucion del Codigo
console.log('Calculando las notas de los Alumnos');

console.log(grades);

console.log('El numero de Alumnnos con notas mayores o iguales a 7  es de ', searchsGreater(grades, 7) );

console.log('Alumnnos con notas menores que 7 es de ', searchLess(grades, 7) );

console.log('Promedio de notas  es de ', gradePointAverage(grades)  );


