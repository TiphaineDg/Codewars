//BUG// 
function repeatStr (n, s) {
    return '';
  }

//DEBUG// 

function repeatStr(n, s) {
    var repeatedStr = '';
    for (var i = 0; i < n; i++) {
      repeatedStr += s;
    }
    return repeatedStr;
  }