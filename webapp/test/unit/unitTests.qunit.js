/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"consulta_produtos_simone/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
