(function() {
	var app = angular.module("myApp");

	app.controller("controller", ["$scope", "creditCardTypeModel", "customPrefixModel", "messagesModel", "cardGeneratorService", 
						function(model, creditCardTypeModel, customPrefixModel, messagesModel, cardGeneratorService) {

		function getCardTypeSelected(codeCardTypeSelected) {
			for (var i = 0; i < model.cardTypes.length; i++) {
				if (model.cardTypes[i].CodeCardType == codeCardTypeSelected) return model.cardTypes[i];
			}
		}

		try {
			model.cardTypes = creditCardTypeModel.getCardTypes();
			model.customPrefix = customPrefixModel;
			model.cardNumberDescription = messagesModel.cardNumberDescription;
			model.cardNumberGenerated = false;
		}

		catch(exception) {
			alert(messagesModel.cardLoadError);
			console.log(exception.name + ": " + exception.message);
		}

		model.generateCardNumber = function() {
			try {

				if (model.codeCardTypeSelected == undefined) {
					model.cardNumberGenerated = false;
					alert(messagesModel.noCardSelectedError);
				}
				else {
					model.cardTypeSelected = getCardTypeSelected(model.codeCardTypeSelected);
					model.cardNumber = cardGeneratorService.generateCardNumber(model);
					model.cardNumberGenerated = true;
				}

			}

			catch(exception) {
				alert(messagesModel.cardNumberGenerateError);
				console.log(exception.name + ": " + exception.message);
			}
		}

	}]);
})();
