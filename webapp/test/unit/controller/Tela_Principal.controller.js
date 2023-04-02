/*global QUnit*/

sap.ui.define([
	"consulta_produtos_simone/controller/Tela_Principal.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Tela_Principal Controller");

	QUnit.test("I should test the Tela_Principal controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
