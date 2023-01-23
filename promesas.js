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



const id = 4;

// getEmpleado(id)
//     .then( empleado => console.log( empleado ) ) // lo que hago si se ejecuta el resolve
//     .catch( (error) => console.log(error) ); // lo que hago si se ejecuta el reject

// getSalario(id)
//     .then( salario => console.log( salario ) ) 
//     .catch( (error) => console.log(error) ); 
getEmpleado(id)
    .then( empleado => {

        getSalario( id )
            .then( salario => {
                console.log('El empleado:', empleado, 'tiene un salario de:', salario);
            })
            .catch(error => console.log(error));
            
            
        })
        .catch(error => console.log(error));