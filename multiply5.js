// This code does not execute pro perly. Try to figure out why. //

//BUG//
function solution(str){
  
}

//DEBUG// 

function solution(str) {
    var reversedStr = '';
    for (var i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    return reversedStr;
  }