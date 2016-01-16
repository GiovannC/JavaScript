// http://json.org/json-es.html


/*    ----------------------------------------------    */
		// -- 1. DECLARACIÓN DE OBJETOS Y VARIABLES
/*    ----------------------------------------------    */

var json = 
{
	
}




/*    ----------------------------------------------    */
		// -- 2. DECLARACIÓN DE FUNCIONES
/*    ----------------------------------------------    */


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



/*    ----------------------------------------------    */
		// 3. ASIGNACIÓN DE EVENTOS
/*    ----------------------------------------------    */

window.addEventListener("load", mostrarInfoPaises);




