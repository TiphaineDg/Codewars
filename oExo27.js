/*Convertir le nombre en tableau inversé de chiffres

Étant donné un nombre aléatoire non négatif, vous devez renvoyer les chiffres de ce nombre dans un tableau dans l'ordre inverse.

Exemple (Entrée => Sortie) :

35231 => [1,3,2,5,3]
0 => [0]*/

//BUG//
function digitize(n) {
    //code here
  }


//DEBUG//
function digitize(n) {
    const digits = Array.from(String(n), Number).reverse();
    return digits;
  }