/*Créez une fonction qui répond à la question « Jouez-vous du banjo ? ».
Si votre nom commence par la lettre "R" ou un "r" minuscule, vous jouez du banjo !

La fonction prend un nom comme seul argument et renvoie l'une des chaînes suivantes :

name + " plays banjo" 
name + " does not play banjo"
Les noms donnés sont toujours des chaînes valides.*/


//BUG//
function areYouPlayingBanjo(name) {
    // Implement me
    return name;
  }

//DEBUG//

function areYouPlayingBanjo(name) {
    if (name[0].toLowerCase() === 'r') {
      return name + " plays banjo";
    } else {
      return name + " does not play banjo";
    }
  }