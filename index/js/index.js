// 轮播图
$(function(){
	// $(".changeBtn a").click(function(){
	// 	console.log(666)
	// 	$('#changeImg').attr("src",$(this).attr("bg"));
(function(){
/*
    注意：$.mggScrollImg返回的scrollImg对象上有
            next，prev，go三个方法，可以实现外部对滚动索引的控制。
    如：scrollImg.next();//会切换到下一张图片
        scrollImg.go(0);//会切换到第一张图片
*/
var scrollImg = $.mggScrollImg('.imgbox ul',{
        loop : true,//循环切换
        auto : true,//自动切换
        callback : function(ind){//这里传过来的是索引值
            $('#page').text(ind+1);
            // console.log(ind)
            var page = document.getElementById("page");
			var pageNum = page.innerHTML;
			// console.log(pageNum)
			$('.changB').css("background", "#ccc");
			$('#changB'+pageNum).css("background", "green");
        }
    });
})()

// 数据加载
    var myApp = angular.module('myapp',[]);
    var date = document.getElementById("date");
    myApp.controller('mycontroller',['$scope','$http',function($scope,$http){
      $http({
        url:'http://localhost:88/'+'index',
        method:'get'
      }).success(function(data){
        console.log(data)
          console.log(data[1].homeSizes);
           console.log(data[0].homeImg);
           date.innerHTML = data[1].homeSizes;
           console.log(typeof data)
           $(".houseTitle").html("data[1].homeSizes");
      })
    }])
	// })
})
