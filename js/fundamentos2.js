/*    ----------------------------------------------    */
		// -- 1. DECLARACIÓN DE OBJETOS Y VARIABLES
/*    ----------------------------------------------    */
var boton = document.getElementById("boton");
var boton2 = document.getElementById("boton2");
var numero = document.getElementById("numero");

/*    ----------------------------------------------    */
		// -- 2. DECLARACIÓN DE FUNCIONES
/*    ----------------------------------------------    */
function eventoClick()
{
	alert("Has presionado el botón como atributo HTML");
}

function eventoClick1(evento)
{
	//alert("Has presionado el botón");
	//alert("Has presionado el botón en el evento" +evento.type+ " con el objeto de nombre id " +evento.target.id);
	alert("Has presionado el botón en el evento  '"+evento.type+"' con el objeto de nombre id '"+evento.target.id+"' ");
	console.log(evento);

	evento.target.style.borderRadius = "1em";
	evento.target.style.fontSize = "1.5em";

	boton2.removeEventListener("click", eventoClick1);
	boton2.addEventListener("dblclick", otroEventoClick);

}

function otroEventoClick(evento)
{
	alert("Has presionado el botón en el evento  '"+evento.type+"' con el objeto de nombre id '"+evento.target.id+"' ");
	console.log(evento);

	evento.target.style.background = "orange";
	evento.target.style.color = "white";


}
function parImpar()
{
	// esta variable solo existe en este funcion
	var numero = prompt("Ingresa un número");

	// isNaN: No es un numero - is not a number, true si el valor es alfanúmerico, false si es númerico.
	if ( isNaN(numero)) 
	{
		alert("No me engañes, eso no es un número.");
	} 
	else
	{
		//alert("Es un número");
		var modulo = numero%2;
		var tipo = (modulo == 0)?"Par":"Impar";
		//var tipo = (modulo == 1)?"Impar":"par";
		alert("El número " + numero + " es " + tipo)
	}
}

/*    ----------------------------------------------    */
		// 3. ASIGNACIÓN DE EVENTOS
/*    ----------------------------------------------    */

	// -- Funcion Definida: ya esta definida en el documento y se puede invocar varias veces donde se necesite.
	// -- Función Anónima: se ejecuta en el momento que se esta definiendo, porque se esta asignando a la cargar del objeto en ese momento.

// -- window.onload se iguala al nombre de una funcion, si esta ya esta definida como en este caso, se deja:
//window.onload = eventoClick;


	// --MANEJADOR EVENTOS SEMÁNTICO este se ejecuta a la carga del documento
window.onload = function(){
	boton.onclick = eventoClick1;
	boton.onclick = otroEventoClick;

	// --MANEJADOR EVENTOS MUTILPLE
 //  addEventListener: necesita por lo menos 2 parametros y cuando se utiliza se quita la palabra on, ejemplo: onclick - click,  onblur - blur, onfocus - focus
	boton2.addEventListener("click", eventoClick1);

	numero.addEventListener("click", parImpar);
}


	// -- Támbien podemos ejecutar una función Anónima
/*
window.onload = function(){
	boton.onclick = function (evento)
{
	 alert("Has presionado el botón en el evento  '"+evento.type+"' con el objeto de nombre id '"+evento.target.id+"' ");
	 console.log(evento);

	 evento.target.style.borderRadius = "1em";
	 evento.target.style.fontSize = "1.5em";
}
}
*/





