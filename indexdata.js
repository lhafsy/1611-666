window.onload = function(){
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
	})
	}])
}
