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

    // dentro de la promesa se ejecuta un callback
    // el callback recibe un resolve, y un reject
    // el resolve es un callback que voy a llamar cuando todo se hace correctamente
    // el reject lo voy a ejecutar si sucede un error (ej: el empleado no existe)
    return new Promise( ( resolve, reject ) => {

        // .find() es una funcion propia dentro de los arreglos
        // 'e' es el empleado que se recibe en cada una de las iteraciones
        const empleado = empleados.find( (e) => e.id === id)?.nombre;

        if ( empleado ) {
            resolve(empleado);
        } else {
            reject(`No existe empleado con id ${ id }`);
        }

    });

}



const getSalario = () => {

    return new Promise( (resolve, reject) => {
        const salario = salarios.find( (s) => s.id === id)?.salario;
        
        ( salario )
            ? resolve(salario)
            : reject(`No existe salario con el id ${ id }`);
    
    });


}

// El async transforma una función en una promesa.
const getInfoUsuario = async ( id ) => {

    // intentar hacer esto, y si sucede un error se manda un error con el return del catch.
    try {
        const empleado = await getEmpleado( id );
        const salario = await getSalario( id );
        return `El salario del empleado ${ empleado } es de ${ salario }`;
    } catch (error) {
        throw error; // llamo el reject interno de la función asíncrona.
    }


}


const id = 3;

// llamo getInfoUsuario, le mando el id e imprimo lo que retornó dicha función.
// caso contrario, si se recibe un error, muestro el error.
getInfoUsuario( id )
    .then(msg => console.log(msg))
    .catch(error => console.log(error)); // si se ejecutó el throw, se resuelve este catch



