app.config(function($routeProvider,$locationProvider){
	$locationProvider.hashPrefix('');
	$routeProvider.when("/",{
        templateUrl:'home.html' 
    }).when("/leave",{
		templateUrl:'leave.html',
        controller:'myctrl'
	}).when("/project",{
        templateUrl:'project.html',
        controller:'projetcontroller'
    }).when("/view",{
        templateUrl:'view.html',
        controller:'viewctrl'
        }).otherwise({redirectTo:"/"
                 });
    
});