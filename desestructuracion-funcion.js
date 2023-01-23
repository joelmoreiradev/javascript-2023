// Desestructuracion de objetos

const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre ( ) {
        return `${ this.nombre } ${ this.apellido } ${ this.poder }`;
    }
}


// Realizo la desestructuracion del objeto que recibo, directamente desde la funcion.
function imprimeHeroe( { nombre, apellido, poder, edad = 0 } ) {

    // imprime correctamente los valores de cada propiedad del objeto.
    console.log(nombre, apellido, poder, edad);


}


// llamo la funcion y le mando el objeto deadpool como argumento
imprimeHeroe( deadpool );

