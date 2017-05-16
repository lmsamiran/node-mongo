var app = angular.module("project", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "templates/main.htm"
    })
    .when("/add", {
        templateUrl : "templates/form.htm",
         controller : "add"
    })
    .when("/green", {
        templateUrl : "green.htm"
    })
    .when("/blue", {
        templateUrl : "blue.htm"
    });
});

app.directive('fileModel', ['$parse', function ($parse) {
return {
    restrict: 'A',
    link: function(scope, element, attrs) {
        var model = $parse(attrs.fileModel);
        var modelSetter = model.assign;

        element.bind('change', function(){
            scope.$apply(function(){
                modelSetter(scope, element[0].files[0]);
            });
        });
    }
};
}]);



 app.controller('add', ['$scope', '$http', function($scope, $http){

 	$scope.uploadFile = function(){
 		console.log(1);
	    var file = $scope.myFile;
	    var uploadUrl = "/api/multer";
	    var fd = new FormData();
	    fd.append('file', file);
	    fd.append('name', $scope.name);

	    $http.post(uploadUrl,fd, {
	        transformRequest: angular.identity,
	        headers: {'Content-Type': undefined}
	    })
	    .then(function(){
	      console.log("success!!");
	    })
	    .error(function(){
	      console.log("error!!");
	    });
	};
}]);