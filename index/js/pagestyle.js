var homeApp = angular.module('homeApp',[]);

homeApp.controller('homeController',['$scope','$http',function($scope,$http){
	$http.get('http://localhost:88/lha').success(function(response){
		console.log(response);
	})
}])
