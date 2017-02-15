(function() {
	var app = angular.module("myApp");

	app.factory("creditCardTypeModel", function() {
		var creditCardTypeModel = {};

		creditCardTypeModel.getCardTypes = function() {
			var cardTypes = [
			  {
			    "CodeCardType": 1,
			    "CardTypeDescription": "CREDITEL",
			    "CardNumberLength": 16,
			    "CardNumberPrefix": [ "6019" ],
			    "ValidateWithLuhnAlgorithm": false
			  },
			  {
			    "CodeCardType": 2,
			    "CardTypeDescription": "DINERS",
			    "CardNumberLength": 14,
			    "CardNumberPrefix": [ "36" ],
			    "ValidateWithLuhnAlgorithm": false
			  },
			  {
			    "CodeCardType": 3,
			    "CardTypeDescription": "CABAL",
			    "CardNumberLength": 16,
			    "CardNumberPrefix": [ "604", "589657", "603522" ],
			    "ValidateWithLuhnAlgorithm": false
			  },
			  {
			    "CodeCardType": 5,
			    "CardTypeDescription": "ARGENCARD-MASTERCARD",
			    "CardNumberLength": 16,
			    "CardNumberPrefix": [ "5" ],
			    "ValidateWithLuhnAlgorithm": true
			  },
			  {
			    "CodeCardType": 6,
			    "CardTypeDescription": "OCA",
			    "CardNumberLength": 16,
			    "CardNumberPrefix": [ "5898", "542991", "549530", "549564", "549571", "549576" ],
			    "ValidateWithLuhnAlgorithm": false
			  },
			  {
			    "CodeCardType": 7,
			    "CardTypeDescription": "TARJETA D",
			    "CardNumberLength": 16,
			    "CardNumberPrefix": [ "6018" ],
			    "ValidateWithLuhnAlgorithm": false
			  },
			  {
			    "CodeCardType": 8,
			    "CardTypeDescription": "VISA INTERNACIONAL S.A.",
			    "CardNumberLength": 16,
			    "CardNumberPrefix": [ "4" ],
			    "ValidateWithLuhnAlgorithm": true
			  },
			  {
			    "CodeCardType": 9,
			    "CardTypeDescription": "MASTERCARD-SCOTIABANK",
			    "CardNumberLength": 16,
			    "CardNumberPrefix": [ "524093", "525473", "525486" ],
			    "ValidateWithLuhnAlgorithm": true
			  },
			  {
			    "CodeCardType": 10,
			    "CardTypeDescription": "VISA INTERNACIONAL-SCOTIABANK",
			    "CardNumberLength": 16,
			    "CardNumberPrefix": [ "450626", "450637", "455134", "498479" ],
			    "ValidateWithLuhnAlgorithm": true
			  }
			];

			return cardTypes;

		};

		return creditCardTypeModel;
	});

}());