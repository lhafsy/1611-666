requirejs.config({
	baseUrl:"../",
	shim:{

	},
	paths:{
		'jquery':"../lib/jquery-2.1.1.min",
		'template':"../lib/template-debug",
		'dataNumtep':"../js/dataNumtep"
	}
})

require(["jquery", "dataNumtep"], function($, dataNumtep){
	var t = new dataNumtep();
})