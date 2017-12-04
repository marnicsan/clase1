/*
 *Debera ingresar un valor mediante un prompt
 *Debera ingresar otro valor mediante otro prompt
 *Mostrar el resultado de cada operacion mediante distintos alert
*/

var pNumero=+prompt("Ingrese primer número: ");
var sNumero=+prompt("Ingrese segundo número: ");
var suma=pNumero+sNumero;
var resta=pNumero-sNumero;
var producto=pNumero*sNumero;
var dividir=pNumero/sNumero;

alert("La suma de los 2 numeros es: "+suma);
alert("La resta de los 2 numeros es: "+resta);
alert("El producto de los 2 numeros es: "+producto);
alert("La división de los 2 numeros es: "+dividir);