/* Timmy et Sarah pensent qu'ils sont amoureux, mais là où ils vivent, ils ne le sauront qu'une fois qu'ils auront chacun cueilli une fleur. 
Si l'une des fleurs a un nombre pair de pétales et l'autre un nombre impair de pétales, cela signifie qu'elles sont amoureuses.

Écrivez une fonction qui prendra le nombre de pétales de chaque fleur et renverra vrai s'ils sont amoureux et faux s'ils ne le sont pas.*/ 


//DEBUG//

function lovefunc(flower1, flower2){
    //Je vérifie si la somme des nombres de pétales est impaire
   if ((flower1 + flower2 ) % 2 === 1 ) { 
   return true; //Ils sont amoureux
   } else { 
   return false; //Ils ne sont pas amoureux
   }
  }

  //OU// 

  function lovefunc(flower1, flower2){
    return flower1 % 2 !== flower2 % 2;
  } 