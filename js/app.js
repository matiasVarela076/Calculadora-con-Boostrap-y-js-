console.log('aplicacion calculadora');

function sumar(){
    const formu = document.getElementById('formu'); //Traemos el id de formulario para usar sus atributos
    let num1 = formu['num1'];   // les asignamos los datos de num 1 y dos a variables en la funcion
    let num2 = formu['num2']; 

    let resultado = parseInt(num1.value) + parseInt(num2.value); //Al resultado le asignamos la suma de los dos numeros
                                                        //Pero antes lo parseamos ya que si no lo hacemos
                                                        //se concatena porque son strings
    if(isNaN(resultado)){

        resultado = 'La operación no incluye números, por favor ingrese dos numeros';
    }
        //Recuperamos el id html de resultado
       
        document.getElementById('resultado').innerHTML = `El resultado es: ${resultado}`; 
        
        //Y le asignamos la variable resultado de js con la suma de las dos variables parseadas

        console.log(`El Resultado es: ${resultado}`); //Lo mostramos en consola también para que este todo OK
}