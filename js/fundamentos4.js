/*    ----------------------------------------------    */
		// -- 1. DECLARACIÓN DE OBJETOS Y VARIABLES
/*    ----------------------------------------------    */

//var paises = new Array("Mexico", "Colombia", "Perú", "España", "Argentina");

//  ---------- Matriz Multidimensional ----------
var paises = new Array();

paises[0] = new Array(
	"México",
	"u-mx.png",
	"b-mx.png",
	"e-mx.png",
	"Estados Unidos Mexicanos",
	"República Federal Presidencial",
	"Ciudad de México",
	119426000,
	1964375
);
paises[1] = new Array(
	"Colombia",
	"u-co.png",
	"b-co.png",
	"e-co.png",
	"República de Colombia",
	"República Presidencial",
	"Bogotá D.C.",
	47662951,
	1141748
);
paises[2] = new Array(
	"Perú",
	"u-pe.png",
	"b-pe.png",
	"e-pe.png",
	"República del Perú",
	"República Democrática Presidencialista",
	"Lima",
	30814175,
	1285216
);
paises[3] = new Array(
	"España",
	"u-es.png",
	"b-es.png",
	"e-es.png",
	"Reino de España",
	"Monarquia Parlamentaria",
	"Madrid",
	47129783,
	504645
);
paises[4] = new Array(
	"Argentina",
	"u-ar.png",
	"b-ar.png",
	"e-ar.png",
	"República Argentina",
	"República Federal Democrática",
	"Buenos Aires",
	42192500,
	2780400
);




/*    ----------------------------------------------    */
		// -- 2. DECLARACIÓN DE FUNCIONES
/*    ----------------------------------------------    */

function mostrarPaises()
{
	// alert(paises);
	// alert(paises[1]);
	// alert(paises.length);

	// alert(paises[3][6]);  // ---------- Matriz Multidimensional ----------

	// alert(paises[4].length);

/*	var listaPaises = "<ol>"
		listaPaises += "<li>" +  paises[0] + "</li>"
		listaPaises += "<li>" +  paises[1] + "</li>"
		listaPaises += "<li>" +  paises[2] + "</li>"
		listaPaises += "<li>" +  paises[3] + "</li>"
		listaPaises += "<li>" +  paises[4] + "</li>"
	listaPaises += "</ol>"*/

	// La anterior linea de código la hacemos dinamica para optimizar el código


/* -----	Ciclo For: 3 partes:
					   1. Inicialización
					   2. Condición
					   3. Incremento o Decremento
*/

	var listaPaises = "<ol>"

	for (var n = 0; n < paises.length; n++) 
	//for (var n = paises.length - 1; n >= 0; n--)
	{
		listaPaises += "<li>" + paises[n] + "</li>";
	}

	listaPaises += "</ol>"

	document.getElementById("paises").innerHTML = listaPaises;
}

function mostrarInfoPaises()
{
	var infoPais = "";

	for (var n = 0; n < paises.length; n++) 
	{
		infoPais += "<article class='pais'>"
			infoPais += "<div>"
				infoPais += "<h2>"+paises[n][0]+"</h2>"
			infoPais += "<img src='activos/"+paises[n][1]+"'/>"
			infoPais += "</div>"
			infoPais += "<div>"
				infoPais += "<img src='activos/"+paises[n][2]+"'/>"
				infoPais += "<img src='activos/"+paises[n][3]+"'/>"
			infoPais += "</div>"
			infoPais += "<div>"
				infoPais += "<p>Nombre oficial: "+paises[n][4]+"</p>"
				infoPais += "<p>Gobierno: "+paises[n][5]+"</p>"
				infoPais += "<p>Capital: "+paises[n][6]+"</p>"
				infoPais += "<p>Habitantes: "+paises[n][7]+"</p>"
				infoPais += "<p>Territorio: "+paises[n][8]+" km<sup>2</sup></p>"
			infoPais += "</div>"
		infoPais += "</article>"
	}

	document.getElementById("paises").innerHTML = infoPais;

}

function cargaDocumento()
{
	//mostrarPaises();
	mostrarInfoPaises();
}




/*    ----------------------------------------------    */
		// 3. ASIGNACIÓN DE EVENTOS
/*    ----------------------------------------------    */

window.addEventListener("load", cargaDocumento);