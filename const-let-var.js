
// ? Var es algo mas global, una variable de este tipo es reconocida en todo el programa.
// var nombre = 'Wolverine';

// ? let es algo que funciona dentro del mismo "scope"
// Este let nombre no es el mismo que el que está dentro del if.
let nombre = 'Wolverine';

// ? las constantes funcionan como let (funciona dentro de un mismo scope), pero su valor nunca puede cambiarse.
// const nombre = 'Wolverine';

if(true) {
    // este let es diferente al que está fuera del if.
    // cuando se re-declara una variable, se usa esta.
    // si en lugar de declararla, solo le asignara un nuevo valor a nombre, node buscaria el let del scope superior (arriba del if)
    let nombre = 'Magneto';
    console.log(nombre); // imprime Magneto
}


console.log(nombre); // imprime Wolverine

// Resumen: let y const crean "variables" de scope. Var las crea de forma global, pero hay que evitar usarlas.