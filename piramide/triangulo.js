var triangulo = '';
var base = prompt('Ingresa la base')
var caracter = prompt('ingresa el caracter')

// var base = 5;
// var caracter = '*';
// // function perdirDAtos() {
// //   var base1 = prompt("Ingrese la base")
// //     alert(base1);
//
// }

function dibujarTriangulo() {
  if (base===null || base ==="") {
      alert('Ingrese el dato');
    }

  else {
    for (var i = 0; i < base; i++) {
        triangulo+= caracter
        console.log(triangulo);
      }
  }

}
dibujarTriangulo();
