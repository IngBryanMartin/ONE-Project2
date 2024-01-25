//Variables
let numeroSecreto = 5;
let numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");

// Agrega un console.log para verificar el valor de "intento" después de la entrada del usuario
console.log('Valor de intento:', numeroUsuario);

// Agrega un console.log para verificar la comparación entre "numeroUsuario" y "numeroSecreto"
console.log('Resultado de la comparación:', numeroUsuario == numeroSecreto);

/*
Este código realiza
la comparación
*/
if (numeroUsuario == numeroSecreto) {
    //Acertamos, fue verdadera la condición
    alert(`Acertaste, el número es: ${numeroUsuario}`);
} else {
    if (numeroUsuario > numeroSecreto){
        alert('El número secreto es menor');
    } else {
        alert('El nùmero secreto es mayor');
    }
}

/*
Es importante recordar que cuando el proyecto esté disponible para
todas las personas, en lo que llamamos en el contexto del
software "entorno de producción", los comandos console.log
deben eliminarse o desactivarse, ya que pueden causar problemas
de rendimiento y seguridad.
*/