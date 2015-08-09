//(function(){

//var app = angular.module("bakchattt",[]);

var appRef = angular.module("bakChat",[]);

/*
var indexController = function($scope,$http){

		var theChat = $scope.bakChat;

		$scope.sendChat = function()
		{
			if(theChat != "")
			{
				$http.post("http://localhost:3000",theChat)
					.then(function(response){
						alert("Success Sending Data");
					},
					function(response){
						alert("Error Sending Data"+response.status);
					});
			}
		}
	};
	*/

appRef.controller("indexController",indexController); 
	function indexController($scope){
///		$scope.bakChattt = {bakChattt: 'Type'};
      //  $scope.bakChat = {};
		var theChat = $scope.bakChat;

		$scope.sendChat = function()
		{
			if(theChat != "")
			{
				$http.post("http://localhost:3000",$scope.bakChat)
					.then(function(response){
						alert("Success Sending Data");
					},
					function(response){
						alert("Error Sending Data"+response.status);
					});
			}
		}
		$scope.bakChat="";
	}

//}());