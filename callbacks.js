/* Un callback es una funcion que se va a ejecutar despues 
   en cierto punto del tiempo. */

// ? El setTimeOut es un tipo de callback.
// setTimeout(() => {
//    console.log('Hola mundo');
// }, 1000);


// funcion que recibe un id y un callback
// el nombre de callback puede ser cualquiera, no necesita llamarse callback
const getUsuarioByID = (id, callback) => {

   const user = {
      id: id,
      nombre: 'Joel'
   }

   setTimeout(() => {
      // llamo/ejecuto la funcion que recibí como argumento, y le mando el objeto usuario.
      callback(user)
   }, 1500)

}

// llamo la funcion, le mando un id y el callback a ejecutar
// el callback recibe un usuario.
getUsuarioByID(10, ( usuario ) => {
   console.log(usuario);
   console.log(usuario.id);
   console.log(usuario.nombre.toUpperCase());
});