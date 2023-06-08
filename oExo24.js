/*Écrivez une fonction pour convertir un nom en initiales. Ce kata prend strictement deux mots avec un espace entre eux.

La sortie doit être composée de deux lettres majuscules séparées par un point.

Ça devrait ressembler à ça:

Sam Harris=>S.H

patrick feeney=>P.F*/



//BUG//
function abbrevName(name){

    // code away

}
//DEBUG//

function abbrevName(name) {
    // Diviser le nom en deux mots
    var nameArr = name.split(' ');
    
    // Obtenir la première lettre de chaque mot en majuscule
    var initial1 = nameArr[0][0].toUpperCase();
    var initial2 = nameArr[1][0].toUpperCase();
    
    // Retourner les initiales séparées par un point
    return initial1 + '.' + initial2;
  }