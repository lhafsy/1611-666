$(function(){
	// $(".changeBtn a").click(function(){
	// 	console.log(666)
	// 	$('#changeImg').attr("src",$(this).attr("bg"));

    // 轮播图方法调用
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
                var page = document.getElementById("page");
    			var pageNum = page.innerHTML;
    			$('.changB').css("background", "#ccc");
    			$('#changB'+pageNum).css("background", "green");
            }
        });
    })()

    //主页房子信息列表加载数据
    var myApp = angular.module('myapp',[]);
    myApp.controller('mycontroller',['$scope','$http',function($scope,$http){
      $http({
        url:'http://localhost:88/index',
        method:'get',
      }).success(function(data){
        var str="";
        var strli = "";
        for(var i = 0; i < data.length; i++){
            var ss=JSON.parse(data[i].homeSeat)
        str='<a href="http://localhost:88/html/list.html?id='+data[i].homeId+'" class="listType">\
        <div class="listPic">\
            <img alt="" src="'+data[i].homeImg+'">\
        </div>\
        <div class="listCont">\
            <h3 class="houseTitle">'+data[i].homeMessage+'</h3><br>\
            <span class="houseMm">'+data[i].homeMsg+'</span><br>\
            <span class="housePrice"><em>'+data[i].homeBvice+'</em>'+data[i].homePrice+'元/平方</span>\
            <ul class="houseTips" >\
                <li>'+ss[0].str+'</li>\
                <li>随时看房</li>\
                <li>质量保证</li>\
            </ul>\
        </div>\
        </a>'
        $(".houseList").append(str);
        }

        var num = location.search;
        var num1 = parseInt(num.substring(num.indexOf('=')+1,num.length))-1;

       
        // list 数据加载
        var listMsg="";
        listMsg='<div class="lbw-title">\
       <h3>'+data[num1].homeMessage+'</h3>\
      </div>\
      <div class="lbw-price">\
        <div class="lbw-priceinfo">\
          <dl>\
            <dt class="lbw-info">售价</dt>\
            <dd class="lbw-value">'+data[num1].homeValue+'</dd>\
          </dl>\
        </div>\
        <div class="lbw-priceinfo">\
          <dl>\
            <dt class="lbw-info">房型</dt>\
            <dd class="lbw-value">'+data[num1].homeStyle+'</dd>\
          </dl>\
        </div>\
        <div class="lbw-priceinfo">\
          <dl>\
            <dt class="lbw-info">建筑面积</dt>\
            <dd class="lbw-value">'+data[num1].homeProportion+'</dd>\
          </dl>\
        </div>\
      </div>\
      <div class="lbw-advan">\
        <span class="lbw-advan3">近地铁</span>\
        <span class="lbw-advan2">随时看房</span>\
        <span class="lbw-advan3">有电梯</span>\
      </div>\
      <div class="lbw-particular">\
        <ul class="lbw-secondUl">\
          <li class="lbw-shortLi">'+data[num1].homePrice+'</li>\
          <li class="lbw-shortLi">'+data[num1].homeDownPayment+'</li>\
          <li class="lbw-shortLi">'+data[num1].homeRegiterDate+'</li>\
            <li class="lbw-shortLi">'+data[num1].homeFloor+'</li>\
          <li class="lbw-shortLi">'+data[num1].homeDirection+'</li>\
          <li class="lbw-shortLi">'+data[num1].useful+'</li>\
          <li class="lbw-shortLi">'+data[num1].homeTnim+'</li>\
          <li class="lbw-shortLi">'+data[num1].homeType+'</li>\
          <li class="lbw-shortLi">'+data[num1].homeAge+'</li>\
          <li class="lbw-shortLi">'+data[num1].homeArea+'</li>\
          <li class="lbw-longLi">'+data[num1].checkingTime+'</li>\
          <li class="lbw-longLi">'+data[num1].number+'</li>\
          <li class="lbw-longLi">'+data[num1].metro+'</li>\
          <li class="lbw-longLi">'+data[num1].plot+'</li>\
        </ul>\
      </div>'
      $('.ics').append(listMsg);
       var dataone =JSON.parse(data[num1].Mask)
        console.log(dataone[0].name)
        $scope.loop =dataone;
      
      })
    }])
    
    // 懒加载插件
    // $("img.lazy").lazyload({
    //     event : "sporty",
    //     effect : "fadeIn",
    //     container: $("#container"),
    //     failure_limit : 2,
    //     skip_invisible : false
    // });
})
