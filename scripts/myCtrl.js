// Created the routeProvider for the app in order to route
// it to different pages without page refresh.
app.config(['$routeProvider',function($routeProvider){

   $routeProvider

       .when('/', {
           templateUrl: 'pages/main.html',
           controller: 'myCtrl'
       })

       .when('/about', {
           templateUrl: 'pages/about.html',
           controller: 'abtCtrl'
       })


       .when('/contact', {
           templateUrl: 'pages/contact.html',
           controller: 'conCtrl'
       })

}]);

app.controller('nameCtrl',function($scope) {

    $scope.name=angular.uppercase("Pavitra Srinivasan");

});

app.controller('myCtrl',['$scope','$log',function($scope,$log) {

    $scope.name="Pavitra";

}]);

app.controller('abtCtrl',['$scope','$log',function($scope,$log) {

    $scope.name="Technical Details: ";
    $scope.tech=['HTML5','CSS3','AngularJS','Bootstrap'];

}]);

app.controller('conCtrl',['$scope','$log',function($scope,$log) {

    $scope.name="Contact me if you like my work:";

}]);