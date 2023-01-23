// Desestructuracion de objetos

const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre ( ) {
        return `${ this.nombre } ${ this.apellido } ${ this.poder }`;
    }
}


const heroes = ['Deadpool', 'Superman', 'Batman'];

// ? Esta sería la forma de extraer cada valor de forma manual.
// const h1 = heroes[0];
// const h2 = heroes[1];
// const h3 = heroes[2];

// ? Desestructuracion de un arreglo
// le asigno nombres en el orden de cada indice del arreglo:
// h1 apunta al indice 0 (Deadpool), h2 al indice 1, etc.
const [ h1, h2, h3 ] = heroes;

console.log(h1, h2, h3);


// ? Si solo quisiera el elemento del indice 2, omitiria los de los indices 0 y 1
// const [ , , h3 ] = heroes;

