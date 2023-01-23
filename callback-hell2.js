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
    const empleado = empleados.find( (e) => e.id === id)?.nombre;


    // si el empleado no es undefined, retorno el empleado
    if( empleado ){
        // el null es para que empleado sea tomado como segundo argumento y no dispare el if de error
        callback(null, empleado); 
    } else {
        // este sería el único y primer argumento, así que dispararía el if de error.
        callback(`No existe un empleado con id ${id}`);
    }

}




// funcion que recibe un id de empleado, y un callback
const getSalario = ( id, callback ) => {

    // .find() es una funcion propia dentro de los arreglos
    // 'e' es el empleado que se recibe en cada una de las iteraciones
    // '?' es para preguntar si algo existe. De existir, se ejecuta lo siguiente (.salario en este caso)
    const salario = salarios.find( (s) => s.id === id )?.salario;


    // si el empleado no es undefined, retorno el empleado
    if( salario ){
        // el null es para que empleado sea tomado como segundo argumento y no dispare el if de error
        // error, salario
        callback(null, salario); 
    } else {
        // este sería el único y primer argumento, así que dispararía el if de error.
        callback(`No existe un salario con id ${id}`);
    }

}




// ? Llamo getEmpleado e imprimo el valor segun el id que le mando
// console.log( getEmpleado( 4 ) );


const id = 3;

// mando como argumento el id del empleado y un callback que recibe un error o un empleado
getEmpleado(id, ( err, empleado ) => {

    // si se recibe algo con un primer argumento, se dispara el error.
    if( err ){
        console.log('Error...');
        return console.log(err);
    }

    // acá comienza el "callback hell", un  callback dentro de otro
    getSalario(id, (err, salario) => {

        if(err) {
            return console.log(err);
        }
    
        console.log('El empleado:', empleado, 'tiene un salario de:', salario);
    })


})

