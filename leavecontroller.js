app.controller("myctrl",function($scope,myfactory){
    var promise=myfactory.callServer();
    promise.then(function(data){
			console.log("Controller Rec the Promise Data");
			console.log("Data is ",data);
			$scope.tempdata = data;
		},function(err){
			console.log("Controller Rec the Promise Error");
			$scope.error = err;
		})
		
	
});