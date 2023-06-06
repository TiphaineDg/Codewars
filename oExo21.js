/* Écrivez la fonction bmi qui calcule l'indice de masse corporelle (bmi = poids / taille 2 ).

si bmi <= 18,5 renvoie "Sous-poids"

si bmi <= 25,0 renvoie "Normal"

si bmi <= 30,0 renvoie "surpoids"

si IMC > 30 renvoie "Obèse" */


//BUG//

function bmi(weight, height) {
    return "";
  }

//DEBUG//

function bmi(weight, height) {
    var bmiValue = weight / (height * height);
    
    if (bmiValue <= 18.5) {
      return "Underweight";
    } else if (bmiValue <= 25.0) {
      return "Normal";
    } else if (bmiValue <= 30.0) {
      return "Overweight";
    } else {
      return "Obese";
    }
  }