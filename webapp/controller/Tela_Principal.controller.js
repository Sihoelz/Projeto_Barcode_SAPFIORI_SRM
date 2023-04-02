sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/library",                   //Biblioteca do click
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Binding"   
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller,
	library,
	JSONModel,
	Binding) {

		"use strict";
		 var urlObject  = library.URLHelper;

		return Controller.extend("consultaprodutossimone.controller.Tela_Principal", {
			onInit: function () {  //onInit equivale o INITIALIZATION no Abap
				
            let produto = {};
			let productModel = new JSONModel(produto);
			let view = this.getView();   // this no javscript =  ME->  no abap
            view.setModel(productModel, "ModeloProduto");
							
			    //alert("Meu programa esta no ar!");
			},


			onClickImage: function(oEvent)  {
				urlObject.redirect( oEvent.getSource().getSrc(), true );
			     
			},
			onPressbuscar: function(){

				let input;
				input = this.byId("inpBusca");
				let valor =  input.getValue();
				//alert(valor);

				let parameters = { 
					url : "https://world.openfoodfacts.org/api/v2/product/" + valor,
				    method : "GET",
				    async : true,
					crossDomain : true,			
			};
			   
				$.ajax(parameters).done(function(response){

               	let oProdutoModel = this.getView().getModel("ModeloProduto");
				//clear
				oProdutoModel.setData({});
				oProdutoModel.refresh();
				oProdutoModel.setData(response);
				oProdutoModel.refresh();

				}.bind(this))   //sucesso // this = me->
				.fail(function(){

                debugger

					
				}.Bind(this));  //exception
			                   
		}
	});
	});