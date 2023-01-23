const empleados = [

    {
        id: 1,
        nombre: 'Joel'
    },
    {
        id: 2,
        nombre: 'Anita'
    },
    {
        id: 3,
        nombre: 'Pepito'
    }

];


const salarios = [

    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }

];


// funcion que recibe un id de empleado, y un callback
const getEmpleado = ( id, callback ) => {

    // .find() es una funcion propia dentro de los arreglos
    // 'e' es el empleado que se recibe en cada una de las iteraciones
    const empleado = empleados.find( (e) => {
        return e.id === id;
    });


    // si el empleado no es undefined, retorno el empleado
    if( empleado ){
        // el null es para que empleado sea tomado como segundo argumento y no dispare el if de error
        callback(null, empleado); 
    } else {
        // este sería el único y primer argumento, así que dispararía el if de error.
        callback(`No existe un empleado con id ${id}`);
    }

}


// ? Llamo getEmpleado e imprimo el valor segun el id que le mando
// console.log( getEmpleado( 4 ) );


const id = 1;

// mando como argumento el id del empleado y un callback que recibe un error o un empleado
getEmpleado(id, ( err, empleado ) => {

    // si se recibe algo con un primer argumento, se dispara el error.
    if( err ){
        console.log('Error...');
        return console.log(err);
    }

    console.log('El empleado existe');
    console.log(empleado);
})