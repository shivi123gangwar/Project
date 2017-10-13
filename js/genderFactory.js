app.factory("genderfactory",function($http,$q,URL){
    return{
     callServer(){
         console.log("factory start....")
         //var url="https://raw.githubusercontent.com/kundan4all/json/master/gender.json";
         var deferedObject=$q.defer();
         $http.get(URL).then(function(data){
            deferedObject.resolve(data.data); 
         },function(error){
           deferedObject.reject(error);  
         });
         return deferedObject.promise;
     }   
    } 
})