function sumar(a,b){ // función tradicional.
    return a+b;
}

console.log( sumar(10,5) );

// Arrow Functions.

const sumar_flecha = (a,b) => {
    return a+b;
}

console.log( sumar_flecha(10, 5));

const saludar = persona => {
    return `Bienvenido ${persona}`;
}

const despedida = persona => `Adios ${persona}`; // se puede omitia la palabra return.


console.log( saludar('Victor') );
console.log( despedida('Manuel') );