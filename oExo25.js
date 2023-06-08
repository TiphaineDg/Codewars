/*Je suis nouveau dans le codage et maintenant
 je veux obtenir la somme de deux tableaux... 
 En fait, la somme de tous leurs éléments. J'apprécierai votre aide.

P.S. Chaque tableau ne comprend que des nombres entiers. 
La sortie est aussi un nombre.*/


//BUG//
function arrayPlusArray(arr1, arr2) {
    return arr1 + arr2; //something went wrong
  }

//DEBUG//

function arrayPlusArray(arr1, arr2) {
    // Concaténer les deux tableaux
    const combinedArray = arr1.concat(arr2);
    
    // Utiliser reduce pour calculer la somme de tous les éléments
    const sum = combinedArray.reduce((acc, curr) => acc + curr, 0);
    
    return sum;
  }