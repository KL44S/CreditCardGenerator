(function() {
	var app = angular.module("myApp");

	app.factory("customPrefixModel", function() {
		var customPrefixModel = {
				"maxCustomPrefixLength": 20,
				"minCustomPrefixLength": 0,
				"value": "",
				"regExp": "[0-9].*"
			};

		return customPrefixModel;
	});

}());