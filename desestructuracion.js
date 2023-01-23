// Desestructuracion de objetos

const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre ( ) {
        return `${ this.nombre } ${ this.apellido } ${ this.poder }`;
    }
}

// console.log(deadpool.getNombre());


// ? Esto es lo que se tendría que hacer si no usara desestructuración
// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;


// ? Usando desestructuracion
// extraigo cada variable del objeto deadpool mediante desestructuracion.
const { nombre, apellido, poder, edad = 0 } = deadpool;

// imprime correctamente los valores de cada propiedad del objeto.
console.log(nombre, apellido, poder, edad);