// https://es.wikipedia.org/wiki/Tres_en_l%C3%ADnea

// Arreglos

//var miArreglo = ["hola", 19, true];
/*var miArreglo = new Array ("hola", 19, true);

console.log(miArreglo, miArreglo[0]);
console.log(miArreglo[0]);
console.log(miArreglo[1]);
console.log(miArreglo[2]);*/


/*    ----------------------------------------------    */
		// -- 1. DECLARACIÓN DE OBJETOS Y VARIABLES
/*    ----------------------------------------------    */

var turno = 1;
var queTurno;
var arregloGato = new Array(9);
var celdas = document.getElementsByClassName("gato");

/*var etiqueta = document.getElementsByTagName("td");
console.log(etiqueta);*/



/*    ----------------------------------------------    */
		// -- 2. DECLARACIÓN DE FUNCIONES
/*    ----------------------------------------------    */

function ganaJugador(letra)
{
	//recibe la letra que se esta ejecutando

	if ( 
			(arregloGato[0]==letra && arregloGato[1]==letra && arregloGato[2]==letra) || 
			(arregloGato[3]==letra && arregloGato[4]==letra && arregloGato[5]==letra) || 
			(arregloGato[6]==letra && arregloGato[7]==letra && arregloGato[8]==letra) ||
			(arregloGato[0]==letra && arregloGato[3]==letra && arregloGato[6]==letra) ||
			(arregloGato[1]==letra && arregloGato[4]==letra && arregloGato[7]==letra) ||
			(arregloGato[2]==letra && arregloGato[5]==letra && arregloGato[8]==letra) ||
			(arregloGato[0]==letra && arregloGato[4]==letra && arregloGato[8]==letra) ||
			(arregloGato[2]==letra && arregloGato[4]==letra && arregloGato[6]==letra) 
		)
	{
		alert("Jugador "+letra+" GANA");
		window.location.reload();
	}
}

function gato(evento) // evento tiene un objeto llamado target: evento.target  es el que desencadena el evento
{
	//alert("Funciona gato");
	//alert(evento.target.id);
	var celda = evento.target // Celda: Es la celda que en el momento se presiona
	//console.log(celda);
	celda.removeEventListener("click",gato);

	var idCelda = evento.target.id;
	//alert(idCelda);
	//alert(idCelda.length);    // --- Imprime el numero de elementos del nombre del id , para este caso 2
	//alert(idCelda[0]);         // --- Imprime el primer elemento del nombre id, para este caso c
	//alert(idCelda[1]);         // --- Imprime el segundo elemento del nombre id.
	var posicionAMarcar = idCelda[1]-1;   //--- Se pone -1 ya que las posiciones en los arreglos comienzan desde 0 y con menos uno se mostraria desde 0
	//alert(posicionAMarcar);

	queTurno = turno%2;
	//Turno X, es decir impares
	if (queTurno != 0) 
	{
		celda.innerHTML = "X";
		celda.style.background = "#EC673A";
		arregloGato[posicionAMarcar] = "X";
		ganaJugador("X");
	}
	//Turno O, es decir pares
	//else if (queTurno == 0)
	else
	{
		celda.innerHTML = "0"
		celda.style.background = "#1C5F81";
		arregloGato[posicionAMarcar] = "O";
		ganaJugador("O");
	}

	console.log(turno, queTurno, arregloGato);

	if (turno == 9) 
	{
		alert("Empate");
		// ---  window.location: permite controlar toda la navegacion del navegador. 
		//console.log(window.location);
		window.location.reload();
	}
	else{
		turno++;
	}
	
	
}

function cargarDocumento()
{
	//document.getElementById("c1").addEventListener("click",gato);
	//console.log(document.getElementsByClassName("gato"));
	//document.getElementsByClassName("gato").addEventListener("click",gato);

	//document.getElementsByClassName("gato")[4].addEventListener("click",gato);  //--- accediendo a la posicion de un arreglo

	//  While se requiere un contador
	var n = 0;
	while(n<celdas.length)  
	{	
		//console.log(n,celdas[n]);
		celdas[n].addEventListener("click",gato);
		n++;
		
	}

}


/*    ----------------------------------------------    */
		// 3. ASIGNACIÓN DE EVENTOS
/*    ----------------------------------------------    */


window.addEventListener("load", cargarDocumento);












