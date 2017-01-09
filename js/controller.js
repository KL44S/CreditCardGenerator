function removeDummyOption() {
	var selectCards = document.getElementById("cardTypeSelect");

	for (var i = 0; i < selectCards.length; i++) {

		 if (/^\? .* \?$/.test(selectCards.options[i].value.toString()) ) {
		 	selectCards.remove(i);
		 }		
	}
}

(function() {
	var app = angular.module("myApp");

	app.controller("controller", ["$scope", "$http", "cardGeneratorService", function(model, http, cardGeneratorService) {

		try {

			cardGeneratorService.loadCardTypesByCode(model);

			/*angular.element(document).ready(function() {
				removeDummyOption();
			});*/

		}

		catch(exception) {
			alert("Error al cargar las tarjetas");
			console.log(exception.name + ": " + exception.message);
		}

		model.generateCardNumber = function() {
			try {

				if (model.codeCardTypeSelected == undefined) alert("Debe seleccionar un tipo de tarjeta!");
				else cardGeneratorService.generateCardNumberByCode(model.codeCardTypeSelected, model);

			}

			catch(exception) {
				alert("Error al generar el número de tarjeta");
				console.log(exception.name + ": " + exception.message);
			}
		}

	}]);
})();
