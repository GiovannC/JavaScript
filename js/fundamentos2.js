/*    ----------------------------------------------    */
		// -- 1. DECLARACIÓN DE OBJETOS Y VARIABLES
/*    ----------------------------------------------    */

var boton = document.getElementById("boton");
var boton2 = document.getElementById("boton2");

var numero = document.getElementById("numero");

var hola = document.getElementById("hola");

var fecha = new Date();
var hora = fecha.getHours();


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

function saluda()
{
	//alert(fecha);
	//alert(hora);


	/*
	Algoritmo para saludar:
		1. El Día tiene 24 horas que van de la 0 a la 23
		2. Decimos Deja dormir de las 0 a las 5
		3. Decimos Buenos días de las 6 a las 11
		4. Decimos Buenas tardes de las 12 a las 18
		5. Decimos Bunas noches de las 19 a la 23
	*/

	/* Enlazar una hoja de estilos CSS */
	var hojaCSS = document.createElement("link");
	hojaCSS.rel = "stylesheet";

	// if ( hora <= 5)
	if ( hora < 6 ) 
	{
		alert("Deja dormir");
		hojaCSS.href = "activos/duermete.css";
	}
	//else if ( hora > 5 && hora < 12) -- si aca se coloca > 6 no entra porque seis no es mayor que 6, entraria apartir de 7
	// con < o > se Excluye el numero con el que se esta evaluando
	// con <= 0 >= se Incluye el numero con el que se esta evaluando
	else if ( hora >= 6 && hora <= 11 )
	{
		alert("Buenos días");
		hojaCSS.href = "activos/dia.css";
	}
	//else if ( hora > 11 && hora < 19)
	else if ( hora >= 12 && hora <= 18) 
	{
		alert("Buenas tardes");
		hojaCSS.href = "activos/tarde.css";
	}
	else
	{
		alert("Buenas noches");
		hojaCSS.href = "activos/noche.css";
	}

	document.head.appendChild(hojaCSS);
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

	hola.onclick = saluda;

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





