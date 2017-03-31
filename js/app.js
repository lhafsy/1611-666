requirejs.config({
	baseUrl:"../",
	shim:{
	},
	paths:{
		'jquery':"../lib/jquery-2.1.1.min",
		'template':"../lib/template-debug",
		'Tl_page':"../js/Tl_page"
	}
})

require(["jquery","Tl_page"],function($,Tl_page){
	var t=new Tl_page()
})