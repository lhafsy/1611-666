var myApp = angular.module('myapp',[]);
myApp.controller('mycontroller',['$scope','$http',function($scope,$http){
  $http({
    url:'http://localhost:88/html',
    method:'get'
  }).success(function(data){
    // var data=data[0];
    var str="";
    // debugger
    for(var i=0; i<data.length; i++){
      str='<div class="lbw-title">\
   <h3>'+data[i].homeFeature+'</h3>\
  </div>\
  <div class="lbw-price">\
    <div class="lbw-priceinfo">\
      <dl>\
        <dt class="lbw-info">售价</dt>\
        <dd class="lbw-value">'+data[i].homeValue+'</dd>\
      </dl>\
    </div>\
    <div class="lbw-priceinfo">\
      <dl>\
        <dt class="lbw-info">房型</dt>\
        <dd class="lbw-value">'+data[i].homeStyle+'</dd>\
      </dl>\
    </div>\
    <div class="lbw-priceinfo">\
      <dl>\
        <dt class="lbw-info">建筑面积</dt>\
        <dd class="lbw-value">'+data[i].homeProportion+'</dd>\
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
      <li class="lbw-shortLi">'+data[i].homePrice+'</li>\
      <li class="lbw-shortLi">'+data[i].homeDownPayment+'</li>\
      <li class="lbw-shortLi">'+data[i].homeRegiterDate+'</li>\
        <li class="lbw-shortLi">'+data[i].homeFloor+'</li>\
      <li class="lbw-shortLi">'+data[i].homeDirection+'</li>\
      <li class="lbw-shortLi">'+data[i].useful+'</li>\
      <li class="lbw-shortLi">'+data[i].homeTnim+'</li>\
      <li class="lbw-shortLi">'+data[i].homeType+'</li>\
      <li class="lbw-shortLi">'+data[i].homeAge+'</li>\
      <li class="lbw-shortLi">'+data[i].homeArea+'</li>\
      <li class="lbw-longLi">'+data[i].checkingTime+'</li>\
      <li class="lbw-longLi">'+data[i].number+'</li>\
      <li class="lbw-longLi">'+data[i].metro+'</li>\
      <li class="lbw-longLi">'+data[i].plot+'</li>\
    </ul>\
  </div>'
  $('.ics').append(str); 
    }
  })
}])

