$(function(){
    //登录方式切换
$(".top span").click(function(){
	console.log(11)
    var $this = $(this),
        index = $this.index();
    $this.addClass("active").siblings("span").removeClass("active");

    $(".main .loginMsg").eq(index).addClass("selected").siblings("div").removeClass("selected");
});
});

var myApp = angular.module('myapp',['commonApp']);
myApp.controller('mycontroller',['$scope','$http',function($scope,$http){
	$scope.Btn = function(){
		var name= $('#pwd_tel').val();
		var psw= $('#pwd_pwd').val();
		if(name == '' || psw == '' ){
			alert("用户或密码不能为空！");
		}else{
			$http({
		        url:'http://localhost:88/'+'html/login',
		        data:{name:$scope.name,password:$scope.psw},
		        method:'post'
		    }).success(function(data){
		    	if(data.length > 0){
		    		alert(data)
		    	}else{
			        alert("登录成功");
			        location.href = "../html/userInfo.html?"+"name="+$scope.name;
					setCookie('username',$scope.name, 10);
		    	}
	        }).error(function(err) {
	        	console.log(err)
	        });
		}
	}
}]) 
			            
				    	


				    
