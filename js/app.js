
//Récupérer les valeurs de sboutons et les affiches dans l'input
//l'argument id = aux id de l'élément html cliqué
function getValue(id){
	//variable number va chercher dans le document un element par son id et stocke sa valeur 
	var number = document.getElementById(id).value;
	console.log(number);
	// variable val va chercher dans le document l'élement avec l'id display et stoke sa valeur 
	var val = document.getElementById("display").value;
	console.log("ancienne valeur:"+val);
	//va chercher dans le document l'élément display et va assigner la var val + la var number
	document.getElementById("display").value = val + number;

}


function resultat(){
	var val = document.getElementById("display").value;
	var result = eval(val);
	console.log(result);
	document.getElementById("display").value = result;

}