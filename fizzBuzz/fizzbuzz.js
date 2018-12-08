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
