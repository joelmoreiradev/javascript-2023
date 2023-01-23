
// ? Var es algo mas global, una variable de este tipo es reconocida en todo el programa.
// var nombre = 'Wolverine';

// ? let es algo que funciona dentro del mismo "scope"
// Este let nombre no es el mismo que el que está dentro del if.
let nombre = 'Wolverine';

if(true) {
    // este let es diferente al que está fuera del if.
    let nombre = 'Magneto';
    console.log(nombre); // imprime Magneto
}


console.log(nombre); // imprime Wolverine