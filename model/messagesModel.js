(function() {
	var app = angular.module("myApp");

	app.factory("messagesModel", function() {
		var messagesModel = {
				"cardLoadError": "Error al cargar las tarjetas",
				"noCardSelectedError": "Debe seleccionar un tipo de tarjeta!",
				"cardNumberDescription": "número de tarjeta generado",
				"cardNumberGenerateError": "Error al generar el número de tarjeta",
				"internalError": "Error interno"
			};

		return messagesModel;
	});

}());