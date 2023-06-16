/*Complétez la fonction de somme carrée de sorte qu'elle place chaque nombre qui y est passé, puis additionnez les résultats.

For example, for [1, 2, 2] it should return 9 because 
1²+2²+2²=9*/

//BUG//
//

//DEBUG//
function squareSum(numbers){
    return numbers.reduce((sum, current) => sum + current ** 2, 0);
      
    }
