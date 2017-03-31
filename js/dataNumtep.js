define(["jquery", "template"], function($, template){
	function dataTep(){
		$("body").append(this.dataTop());
		$("body").append(this.dataBottom());
	}
	dataTep.prototype = {
		"dataTop":template.compile('<div id="pagingHead box">\
 		    <div id="pagingHeadLeft">\
 		      <p id="pagingHeadLeft1"><a href="http://localhost:88/index/index.html">爱家网</a></p>\
 		      <span id="pagingHeadLeft2">动态获取</span>\
 		      <span id="pagingHeadLeft3"><span>暂定</span><i></i></span>\
 		      <div id="pagingHeadRight">\
 		        <a href="http://localhost:88/html/userInfo.html" id="pagingHeadRight1"><i></i><span>我的</span></a>\
 		        <a href="#" id="pagingHeadRight2"><i></i><span>APP</span></a>\
 	      </div>\
 	    </div>'),
 	    "dataBottom":template.compile('<div class="lbw-foot2">\
	      <div class="lbw-foot-son2"><a href="http://localhost:88/index/index.html"><img src="../../img/house.png"></a></div>\
	      <div class="lbw-foot-son2"><a href=""><img src="../../img/message.png"></a></div>\
	      <div class="lbw-foot-son2"><a href="http://localhost:88/html/login.html"><img src="../../img/contacts.png"></a></div>\
	    </div>')
	}
	return dataTep;
})