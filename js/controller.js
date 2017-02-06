(function() {
	var app = angular.module("myApp");

	app.controller("controller", ["$scope", "$http", "cardGeneratorService", function(model, http, cardGeneratorService) {

		try {
			model.customPrefix = cardGeneratorService.createCustomPrefix();
			model.cardTypes = cardGeneratorService.loadCardTypesByCode();
		}

		catch(exception) {
			alert("Error al cargar las tarjetas");
			console.log(exception.name + ": " + exception.message);
		}

		model.generateCardNumber = function() {
			try {

				if (model.codeCardTypeSelected == undefined) {
					model.cardNumberDescription = "";
					alert("Debe seleccionar un tipo de tarjeta!");
				}
				else {
					model.cardNumber = cardGeneratorService.generateCardNumberByCode(model);
					model.cardNumberDescription = "número de tarjeta generado";
				}

			}

			catch(exception) {
				alert("Error al generar el número de tarjeta");
				console.log(exception.name + ": " + exception.message);
			}
		}

	}]);
})();
