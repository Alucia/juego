// Iteramos desde 2 (el primer número primo) hasta 19 (menor que 20)
for (var i = 2; i < 20; i++) {
  var isPrime = true;

  // Ahora debemos iterar desde `2` hasta `i / 2` usando una variable `j` como
  // contador.
  //
  // Para cada `j` comprueba si la división `i / j` deja un residuo.
  //
  // NOTA: No necesitamos probar números más allá de `i / 2` porque el
  // resultado de la división `i / j` siempre sería una fracción entre 2 y 1,
  // siempre dejando residuo.
 
  // TU CÓDIGO AQUÍ
  for(var j = 2; j<= i/2 ; j++){
    if(i % j ==  0){
     isPrime = false;
    }
  }

  if (isPrime) {
    console.log(i);
  }
}
