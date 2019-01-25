// Mostrar una serie de números del 0 al 15
// Cada vez que nuestra variable tome el valor de 3 o un multiplo, mostrar fizz
// Cada vez que nuestra variable tome el valor de 5 o un multiplo, mostrar buzz
// y si es multiplo de 3 y 5 mostrara la frese FizzBuzz

for (var dato = 0; dato<16; dato++){

  // var modulo3 = (dato%3);
  // var modulo5 = (dato%5)
  // console.log(modulo3)
  // console.log(modulo5)

  if (dato !== 0) {
    if ((dato%3) === 0 && (dato%5) === 0 ) {
      console.log(dato);
      console.log('Fizzbuzz');
    }else if ((dato%3) === 0 ){
      console.log(dato);
      console.log( "Fizz")
    }else if ((dato%5) === 0 ){
      console.log(dato);
      console.log('Buzz')
    }
  }
}
