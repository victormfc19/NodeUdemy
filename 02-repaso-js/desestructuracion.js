const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    edad: 50,
    getNombre(){
        return `${this.nombre} ${this.apellido}, poder: ${this.poder}`;
    }
}


//const nombre = deadpool.nombre;
//const apellido = deadpool.apellido;
//const poder = deadpool.poder;

const {nombre, apellido, poder, edad = 20} = deadpool;  // Esto hace lo mismo que las 3 lineas de arriba.
// cambia el valor de la edad por 20.

console.log(nombre, apellido, poder); 