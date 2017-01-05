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

		cardGeneratorService.loadCardTypesByCode(model);

		model.generateCardNumber = function() {
			if (model.codeCardTypeSelected == undefined) model.codeCardTypeSelected = 1;

			cardGeneratorService.generateCardNumberByCode(model.codeCardTypeSelected, model);
		}

		angular.element(document).ready(function() {
			removeDummyOption();
		});

	}]);
})();
