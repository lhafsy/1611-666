var myApp = angular.module('myapp',['commonApp']);
myApp.controller('mycontroller',['$scope','$http',function($scope,$http){
	$scope.Btn =function(){
    	console.log($scope.name);
    	console.log($scope.psw);

        var name= $('#name').val();
		var psw= $('#psw').val();
        if(name == '' ||  psw == '' ){
				alert("用户名或密码不能为空！");
		}else{
			
        
	    	$http({
		        url:'http://localhost:88/'+'html/register',
		        data:{name:$scope.name,password:$scope.psw},
		        method:'post'
		      }).success(function(data){
		      	if(  data.length > 0){

			        alert(data);
		      	}else{
		      		alert("注册成功");
			        location.href = "login.html";
		      	}
		       
		     })
	    }  
	}
 
}]) ;