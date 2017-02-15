(function() {
var app = angular.module("myApp");

	app.factory("cardGeneratorService", ["creditCardTypeModel", "customPrefixModel", function(creditCardTypeModel, customPrefixModel) {

		var cardGeneratorService = {};

		cardGeneratorService.generateCardNumberByLuhnAlgorithm = function(prefix, len) {
			var position = 0;
			var cardNumber = [];
			var sum = 0;
			var finalDigit = 0;
			var finalCardNumber = 0;
			var issuer;

			//Inserto prefijo
			for (i = 0; i < prefix.length; i++) {
				cardNumber.push(prefix.charAt(i));
			}

			//Relleno con números entre 0 y 9
			while (cardNumber.length < len) {
				cardNumber.push(Math.floor(Math.random() * 10) % 10);
			}

			//Calculo el último dígito verificador
			var offset = (len + 1) % 2;
			for (position = 0; position < len - 1; position++) {
				if ((position + offset) % 2) {
					finalCardNumber = parseInt(cardNumber[position]) * 2;
					if (finalCardNumber > 9) {
						finalCardNumber -= 9;
					}
					sum += finalCardNumber;
				}
				else {
					sum += parseInt(cardNumber[position]);
				}
			}

			finalDigit = (10 - (sum % 10)) % 10;

			cardNumber[len - 1] = finalDigit.toString();

			//Armo tarjeta como string
			finalCardNumber = cardNumber.join('');
			finalCardNumber = finalCardNumber.substr(0, len);

			return finalCardNumber;
		}

		cardGeneratorService.isValidTheCustomPrefix = function(model) {
			var isValid = model.customPrefix.value != undefined && !isNaN(model.customPrefix.value.toString());
			isValid = isValid && model.customPrefix.value.length > model.customPrefix.minCustomPrefixLength;
			isValid = isValid && model.customPrefix.value.length <= model.customPrefix.maxCustomPrefixLength;

			return isValid;
		};

		cardGeneratorService.generateCardNumber = function(model) {

			//Prefijo
			var prefixes = model.cardTypeSelected.CardNumberPrefix;
			var prefix = "";

			if (cardGeneratorService.isValidTheCustomPrefix(model)) prefix = model.customPrefix.value.toString();
			else if (prefixes.length > 0) prefix = prefixes[Math.floor(Math.random() * prefixes.length)];

			//Largo a generar
			var cardNumberLength = model.cardTypeSelected.CardNumberLength;

			if (prefix.length < cardNumberLength) {

				if (model.cardTypeSelected.ValidateWithLuhnAlgorithm) {
					prefix = cardGeneratorService.generateCardNumberByLuhnAlgorithm(prefix, cardNumberLength);
				}
				else {
					var numberLengthToGenerate = cardNumberLength - prefix.length;

					for (var i = 0; i < numberLengthToGenerate; i++) {
						prefix += Math.floor(Math.random() * 9).toString();
					}
				}

			}

			return prefix;
		};

		return cardGeneratorService;

	}]);
})();
	