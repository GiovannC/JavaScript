/*    ----------------------------------------------    */
		// -- 1. DECLARACIÓN DE OBJETOS Y VARIABLES
/*    ----------------------------------------------    */

var boton = document.getElementById("boton");
var boton2 = document.getElementById("boton2");

var numero = document.getElementById("numero");

var hola = document.getElementById("hola");

var fecha = new Date();
var hora = fecha.getHours();
var dia = fecha.getDay(); // devuelve el dia de la semana en numeros
var minuto = fecha.getMinutes();
var segundos = fecha.getSeconds();


//- getFullYear:
var date = new Date();
var ejemplo = date.getFullYear();


// bisiesto
var bisiesto =  document.getElementById("bisiesto");


// Temporizador
var btnReloj = document.getElementById("reloj");
var detenerReloj = document.getElementById("detener-reloj");
var muestroHora = document.getElementById("muestro-hora");

var btnAlarma = document.getElementById("alarma");
var detenerAlarma = document.getElementById("detener-alarma");





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

	alert(dia);
	/* 
		D L M M J V S
		0 1 2 3 4 5 6
	*/
	// Ya no se recomienda utilizar switch
	switch(dia)
	{
		case 0:
			alert("Es domingo");
			break;

		case 1:
			alert("Es lunes");
			break;

		case 2:
			alert("Es martes");
			break;

		case 3:
			alert("Es miercoles");
			break;

		default:
			alert("Son otros dias");
			break;
	}

	alert(ejemplo);
}

function anioBisiesto()
{
	var anio = prompt("Ingresa un año");

	if (isNaN(anio)) 
	{
		alert("No me engañes, eso no es un año");
	} 
	else
	{
		if ((anio%4 == 0 && anio%100 != 0) || anio%400 == 0) 
		{
			alert("El año " + anio + " Es bisiesto");
		}
		else
		{
			alert("El año " + anio + " No es bisiesto");
		}
	}
}

function reloj()
{	
	var fechaReloj = new Date();
	var horaReloj = fechaReloj.getHours(); // El formato de hora es 24 h
	var minReloj = fechaReloj.getMinutes();
	var segReloj = fechaReloj.getSeconds();
	var formatoAmPm;
	//horaReloj = 15;

	//formatoAmPm = (horaReloj>=13)?" pm":" am";

	// Mostar formato 12 h
	if (horaReloj>=13) 
	{	
		horaReloj = horaReloj - 12;
		formatoAmPm = " am";	
	}
	else
	{
	 	formatoAmPm = " pm";
	}

	// Anteponer un cero en los numeros del 1 al 9
	if (horaReloj <= 9) 
	{
		horaReloj = "0" + horaReloj;
	}

	if (minReloj <= 9) 
	{
		minReloj = "0" + minReloj;
	}

	if (segReloj <= 9) 
	{
		segReloj = "0" + segReloj;
	}

	muestroHora.innerHTML = "<h3>"+horaReloj+":"+minReloj+":"+segReloj+ formatoAmPm+"</h3>";
}

function alarma()
{
	var audio = document.createElement("audio");
	audio.src = "activos/alarma.mp3"
	return audio.play();
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

	//hola.onclick = saluda;
	hola.addEventListener("click", saluda);

	//bisiesto
	bisiesto.addEventListener("click", anioBisiesto);


	// Temporizador
	btnReloj.addEventListener("click", function(){
		//setInterval(reloj, 1000) // tiempo en milisegundos
		iniciarReloj = setInterval(reloj, 1000) // serInterval se ejecuta n cantidad de veces ---- tiempo en milisegundos
	});

	detenerReloj.addEventListener("click", function(){
		clearInterval(iniciarReloj); // Detener el reloj
	});

	btnAlarma.addEventListener("click", function(){
		iniciarAlarma = setTimeout(alarma, 2000); //setTimeout solo se ejecuta una vez
	});

	detenerAlarma.addEventListener("click", function(){
		clearTimeout(iniciarAlarma); // se debe ejecutar antes de que inicie el setTimeout
	});

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





