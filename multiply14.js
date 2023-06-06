/*Nathan aime le vélo.

Parce que Nathan sait qu'il est important de rester hydraté, il boit 0,5 litre d'eau par heure de vélo.

On vous donne le temps en heures et vous devez retourner le nombre de litres que Nathan boira, arrondi à la plus petite valeur.

Par exemple:

time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5 */


//BUG//
function litres(time) {
    return 0;
  }

//DEBUG//
function litres(time) {
    return Math.floor(time * 0.5);
  }
