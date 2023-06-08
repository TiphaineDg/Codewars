/*Étant donné une chaîne de chiffres, vous devez remplacer tout chiffre inférieur à 5 par '0' et tout chiffre 5 et supérieur par '1'. Renvoie la chaîne résultante.

Remarque : l'entrée ne sera jamais une chaîne vide */

//BUG//
function fakeBin(x){

}


//DEBUG//

function fakeBin(x) {
    // Convertir la chaîne en un tableau de caractères
    var digits = x.split('');
    
    // Parcourir chaque chiffre dans le tableau
    for (var i = 0; i < digits.length; i++) {
      // Remplacer les chiffres inférieurs à 5 par '0' et les chiffres 5 et supérieurs par '1'
      if (Number(digits[i]) < 5) {
        digits[i] = '0';
      } else {
        digits[i] = '1';
      }
    }
    
    // Rejoindre les caractères du tableau en une seule chaîne
    return digits.join('');
  }
  