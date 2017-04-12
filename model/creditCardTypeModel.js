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
			    "ValidateWithLuhnAlgorithm": false,
			    "ImagePath": 'images/creditel.png'
			  },
			  {
			    "CodeCardType": 2,
			    "CardTypeDescription": "DINERS",
			    "CardNumberLength": 14,
			    "CardNumberPrefix": [ "36" ],
			    "ValidateWithLuhnAlgorithm": false,
			    "ImagePath": 'images/diners.png'
			  },
			  {
			    "CodeCardType": 3,
			    "CardTypeDescription": "CABAL",
			    "CardNumberLength": 16,
			    "CardNumberPrefix": [ "604", "589657", "603522" ],
			    "ValidateWithLuhnAlgorithm": false,
			    "ImagePath": 'images/cabal.png'
			  },
			  {
			    "CodeCardType": 4,
			    "CardTypeDescription": "MASTERCARD",
			    "CardNumberLength": 16,
			    "CardNumberPrefix": [ "5" ],
			    "ValidateWithLuhnAlgorithm": true,
			    "ImagePath": 'images/mastercard.png'
			  },
			  {
			    "CodeCardType": 5,
			    "CardTypeDescription": "OCA",
			    "CardNumberLength": 16,
			    "CardNumberPrefix": [ "5898", "542991", "549530", "549564", "549571", "549576" ],
			    "ValidateWithLuhnAlgorithm": false,
			    "ImagePath": 'images/oca.png'
			  },
			  {
			    "CodeCardType": 6,
			    "CardTypeDescription": "TARJETA D",
			    "CardNumberLength": 16,
			    "CardNumberPrefix": [ "6018" ],
			    "ValidateWithLuhnAlgorithm": false,
			    "ImagePath": 'images/tarjeta-d.png'
			  },
			  {
			    "CodeCardType": 7,
			    "CardTypeDescription": "VISA",
			    "CardNumberLength": 16,
			    "CardNumberPrefix": [ "4" ],
			    "ValidateWithLuhnAlgorithm": true,
			    "ImagePath": 'images/visa.png'
			  },
			  /*{
			    "CodeCardType": 9,
			    "CardTypeDescription": "M-SCOTIABANK",
			    "CardNumberLength": 16,
			    "CardNumberPrefix": [ "524093", "525473", "525486" ],
			    "ValidateWithLuhnAlgorithm": true,
			    "ImagePath": 'images/argencard.png'
			  },
			  {
			    "CodeCardType": 10,
			    "CardTypeDescription": "V-SCOTIABANK",
			    "CardNumberLength": 16,
			    "CardNumberPrefix": [ "450626", "450637", "455134", "498479" ],
			    "ValidateWithLuhnAlgorithm": true,
			    "ImagePath": 'images/amex.png'
			  },*/
			  {
			    "CodeCardType": 8,
			    "CardTypeDescription": "ARGENCARD",
			    "CardNumberLength": 16,
			    "CardNumberPrefix": [ "5" ],
			    "ValidateWithLuhnAlgorithm": true,
			    "ImagePath": 'images/argencard.png'
			  },
			  {
			    "CodeCardType": 9,
			    "CardTypeDescription": "AMEX",
			    "CardNumberLength": 15,
			    "CardNumberPrefix": [ "34", "37" ],
			    "ValidateWithLuhnAlgorithm": true,
			    "ImagePath": 'images/amex.png'
			  }
			];

			return cardTypes;

		};

		return creditCardTypeModel;
	});

}());