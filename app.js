angular.module("bakchat",[])
	.controller("indexController",function($scope,$http){
		var theChat = $scope.bakChat;

		$scope.sendChat = function(){
			if(theChat != "")
			{
				$http.post("http://",theChat)
					.then(function(response){
						alert("Success Sending Data");
					},
					function(response){
						alert("Error Sending Data"+response.status);
					});
			}
		}
	})
