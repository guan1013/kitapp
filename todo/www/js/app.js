// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('todo', ['ionic'])

.controller('TodoCtrl', function($scope, $http) {
	$scope.kitas = []
//$http.defaults.headers.common = {"Access-Control-Request-Headers": "accept, origin, authorization"};
//$http.defaults.headers.common['Authorization'] = 'Basic cm9vdDpyb290MTIzIQ==';
 $http.get('http://ebusiness-kitapp-backend.herokuapp.com/kitas/').then(function(resp) {
    console.log('Success', resp);
    // For JSON responses, resp.data contains the result
	$scope.kitas = resp.data;
  }, function(err) {
    console.error('ERR', err);
    // err.status will contain the status code
  })
})