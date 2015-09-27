app.config(function($routeProvider){

    $routeProvider

        .when('/', {
            templateUrl: 'pages/main.html',
            controller: 'myCtrl'
        })

        .when('/second', {
            templateUrl: 'pages/second.html',
            controller: 'secCtrl'
        })

});

app.controller('myCtrl',['$scope','$log',function($scope,$log) {

	$scope.name="Biography";

}]);

app.controller('secCtrl',['$scope','$log',function($scope,$log) {

	$scope.name="Technical Decisions";

}]);
