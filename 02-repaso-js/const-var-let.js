var nombre = 'Wolverine'  // Crea la variable en el ambito global.

if( true ){
   var nombre = 'Magneto'
}

console.log(nombre); // imprimera magneto.


console.log('-------------------------------------');
console.log('-------------------------------------');

let apellido = 'Florez' 

if( true ){ // Scope
   let apellido = 'Castro'
   console.log('dentro del if: '+apellido);  // Imprime Castro porque la declaracion let aplica para este ámbito o scope.

   // Si le borro el comando 'let' toma la variable que declaré fuera del if. (como si estuvieramos re-declarando la variable)
}

console.log('fuera de if: '+apellido);   // Imprime Florez

// la variables tipo 'consts' son mas ligeras y se crean en su scope igual que let. Es ideal usarlas siempre y cuando sepamos que no van a cambiar su valor.


