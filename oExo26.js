/*Écrivez une fonction qui calcule la moyenne des nombres d'une liste donnée.

Remarque : les tableaux vides doivent renvoyer 0.*/

//BUG//

function findAverage(array) {
    // your code here
    return 0;
  }

//DEBUG//

function findAverage(array) {
    if (array.length === 0) {
      return 0;
    }
  
    const sum = array.reduce((acc, curr) => acc + curr, 0);
    const average = sum / array.length;
    
    return average;
  }