function removeDummyOption() {
	var selectCards = document.getElementById("cardTypeSelect");

	for (var i = 0; i < selectCards.length; i++) {

		 if (/^\? .* \?$/.test(selectCards.options[i].value.toString()) ) {
		 	selectCards.remove(i);
		 }		
	}
}

var app = angular.module("myApp", []);

app.factory("cardGeneratorService", ["$http", function(http) {

	var cardGeneratorService = {};

	cardGeneratorService.getCardLengths = function() {
		var cardLengths = {};

		cardLengths[1] = 16;
		cardLengths[2] = 14;
		cardLengths[3] = 16;
		cardLengths[4] = 16;
		cardLengths[5] = 16;
		cardLengths[6] = 16;
		cardLengths[7] = 16;
		cardLengths[8] = 16;
		cardLengths[9] = 16;
		cardLengths[10] = 16;

		return cardLengths;
	};

	cardGeneratorService.getPrefixes = function() {
		var cardPrefixes = {};

		cardPrefixes[1] = [ "6019" ];
		cardPrefixes[2] = [ "36" ];
		cardPrefixes[3] = [ "604", "589657", "603522" ];
	    cardPrefixes[4] = [ "" ];
	    cardPrefixes[5] = [ "5" ];
	    cardPrefixes[6] = [ "5898", "542991", "549530", "549564", "549571", "549576" ];
	    cardPrefixes[7] = [ "6018" ];
	    cardPrefixes[8] = [	"4" ];
	    cardPrefixes[9] = [ "524093", "525473", "525486" ];
	    cardPrefixes[10] = [ "450626", "450637", "455134", "498479" ];

    	return cardPrefixes;
	};

	cardGeneratorService.generateCardNumberByWebApi = function(codeCardTypeSelected, model) {

		http.get("http://localhost:52683/api/CreditCardNumberGenerator/" + codeCardTypeSelected)
			.success(function(cardNumber) {
				model.cardNumber =  cardNumber;
			})
			.error(function(error) {
				model.cardNumber = "";
				alert("Error al generar el número de tarjeta");
				console.log(error);
			});

	};

	cardGeneratorService.generateCardNumberByCode = function(codeCardTypeSelected, model) {

		//Prefijo
		var prefixes = cardGeneratorService.getPrefixes()[codeCardTypeSelected];
		var prefix = "";

		if (prefixes.length > 0) prefix = prefixes[Math.floor(Math.random() * prefixes.length)];

		//Largo a generar
		var numberLengthToGenerate = cardGeneratorService.getCardLengths()[codeCardTypeSelected] - prefix.length;

		for (var i = 0; i < numberLengthToGenerate; i++) {
			prefix += Math.floor(Math.random() * 9).toString();
		}

		model.cardNumber = prefix;

	};

	cardGeneratorService.loadCardTypesByWebApi = function(model) {
		model.cardTypes = [];

		http.get("http://localhost:52683/api/CardType")
			.success(function(cardTypes) {
				model.cardTypes = cardTypes;
			})
			.error(function(error) {
				alert("Error al cargar las tarjetas");
				console.log(error);
			});
	};

	cardGeneratorService.loadCardTypesByCode = function(model) {
		model.cardTypes = [
		  {
		    "CodeCardType": 1,
		    "CardTypeDescription": "CREDITEL"
		  },
		  {
		    "CodeCardType": 2,
		    "CardTypeDescription": "DINERS"
		  },
		  {
		    "CodeCardType": 3,
		    "CardTypeDescription": "CABAL"
		  },
		  {
		    "CodeCardType": 5,
		    "CardTypeDescription": "ARGENCARD-MASTERCARD"
		  },
		  {
		    "CodeCardType": 6,
		    "CardTypeDescription": "OCA"
		  },
		  {
		    "CodeCardType": 7,
		    "CardTypeDescription": "TARJETA D"
		  },
		  {
		    "CodeCardType": 8,
		    "CardTypeDescription": "VISA INTERNACIONAL S.A."
		  },
		  {
		    "CodeCardType": 9,
		    "CardTypeDescription": "MASTERCARD-SCOTIABANK"
		  },
		  {
		    "CodeCardType": 10,
		    "CardTypeDescription": "VISA INTERNACIONAL-SCOTIABANK"
		  }
		];

	};

	return cardGeneratorService;

}]);

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

