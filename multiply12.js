/* Créez une fonction simple appelée greetqui renvoie le plus célèbre "hello world!".

Points de style
Bien sûr, c'est à peu près aussi simple que possible. Mais à quel point pouvez-vous être intelligent pour créer 
le "monde hello" le plus créatif auquel vous puissiez penser ? Qu'est-ce qu'une solution "hello world" que vous voudriez montrer à vos amis ?*/

//DEBUG//

function greet() {
    const hello = ['H', 'e', 'l', 'l', 'o'];
    const world = ['W', 'o', 'r', 'l', 'd'];
  
    const helloWorld = hello.map((char, index) => {
    }).join('') + ' ' + world.reverse().join('').toUpperCase() + '!';
  
    return helloWorld;
  }