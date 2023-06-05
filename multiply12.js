function greet() {
    const hello = ['H', 'e', 'l', 'l', 'o'];
    const world = ['W', 'o', 'r', 'l', 'd'];
  
    const helloWorld = hello.map((char, index) => {
    }).join('') + ' ' + world.reverse().join('').toUpperCase() + '!';
  
    return helloWorld;
  }