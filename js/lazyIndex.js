// 懒加载
$(function() {
		    $("img.lazy").lazyload({
		    	event : "sporty",
		    	effect : "fadeIn",
		    	container: $("#container"),
		    	failure_limit : 2,
		    	skip_invisible : false
		    });
});
$(window).bind("load", function() {
    var timeout = setTimeout(function() { $("img.lazy").trigger("sporty") }, 4000);
}); 