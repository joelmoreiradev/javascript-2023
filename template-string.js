
const nombre = 'Deadpool';
const real = 'Wade Winston';

// Forma clasica de concatenar "variables"
const normal = nombre + ' ' + real;

// Forma mas actual, utilizando template string mediante backticks
const template = `${nombre} ${real}`;
const template2 = `Joel, ${20 + 2}`;

console.log(normal);

console.log(template);
console.log(template2);

// Imprimir si el string generado por normal es exactamente igual al template.
console.log(normal === template); // true

// Template multi-linea.
const html = `
<h1>Hola</h1>
<p>Mundo</p>
`; // el lugar del backtick crea un salto de linea.

console.log(html);