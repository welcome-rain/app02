/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/readians/com/UI5TEST001/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});