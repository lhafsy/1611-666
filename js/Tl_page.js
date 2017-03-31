define(['jquery',"template"],function($,template){
	function T1(){
		$("body").prepend(this.T())
		$("body").append(this.F())
	}
	T1.prototype={
		"T":template.compile('<div id="pagingHead box">\
 		    <div id="pagingHeadLeft">\
 		      <p id="pagingHeadLeft1"><a href="http://localhost:88/index/index.html">爱家网</a></p>\
 		      <span id="pagingHeadLeft2">动态获取</span>\
 		      <span id="pagingHeadLeft3"><span>暂定</span><i></i></span>\
 		      <div id="pagingHeadRight">\
 		        <a href="#" id="pagingHeadRight1"><i></i><span>我的</span></a>\
 		        <a href="#" id="pagingHeadRight2"><i></i><span>APP</span></a>\
 	      </div>\
 	    </div>'),
 	    "F":template.compile(' <div id="indexFoot">\
					    <a href="#">手机爱家网</a>\
					    <div id="indexFootC">\
					      <i id="indexFootImg1"></i>\
					      <i id="indexFootImg2"></i>\
					      <div id="indexFootBottom ">\
					        <p>北京爱家房地产经纪有限公司</p>\
					        <p>网络经营许可证</p>\
					        <p> 京ICP备11024601号-12</p>\
					      </div>\
					    </div>\
				  </div>')
	}
	return T1;
})