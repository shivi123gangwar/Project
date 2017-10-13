app.controller("genderCtrl",function($scope,genderfactory){
    console.log("controller start....")
var promise  = genderfactory.callServer();
		
		promise.then(function(data){
			
			$scope.genderInfo = data;
			
		},function(err){
			console.log("Controller Rec the Promise Error");
			$scope.error = err;
		})
});