//Importacion de Modulos, 

//Delcaracion de Variable, 


//Declaracion de Funciones,

// indica las notas las mayores que el limite
function searchsGreater(grades = 0 , limit = 0 ){

    let sumNotes=0;
   for (let note = 0 ; grades.length-1 >= note ; note++){

     if(grades[note] >= limit ){
        sumNotes++;
     }

   }
  return  sumNotes;
}


// indica las notas las menores  que el limite
function searchLess (grades , limit ) {

    let sumNotes=0;
   for (let note = 0 ; grades.length-1 >= note ; note++){

     if(grades[note] < limit ){
        sumNotes++;
     }

   }
  return  sumNotes;

}

// promedio de notas
function gradePointAverage (grades) {

    const size  = grades.length
    let sumNotes=0;
   for (let note = 0 ; size-1 >= note ; note++){

        sumNotes= sumNotes + grades[note];
    
   }
  return  (sumNotes / size );
}

//Ejecucion del Codigo

export {
    searchsGreater,
    searchLess,
    gradePointAverage
}