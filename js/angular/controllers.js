/**
 * Created by kowki on 18.11.2015.
 */
'use strict';

/* Controllers */
var webApp = angular.module('webApp', ['ngRoute']);

webApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: '/view/singin.html',
            controller: 'SingInCtrl',
        })
        .when('/edit-profile', {
            templateUrl: 'view/edit-profile.html',
            controller: 'ProfileCtrl',
        })
        .when('/edit-menu', {
            templateUrl: 'view/edit-menu.html',
            controller: 'MenuListCtrl',
        })
        .otherwise({
            redirectTo: '/'
        })
}]);

//CONTROLLERS

webApp.controller('DishListCtrl',['$scope','$http', '$location', function($scope, $http, $location) {

    $http.get('dish/dish.json').success(function(data, status, headers, config) {
        $scope.dish = data;
    });
    $http.get('dara/illnes.json').success(function(data, status, headers, config) {
        $scope.illnes = data;
    });

}]);


//SingInCtrl
webApp.controller('SingInCtrl',['$scope', '$http', '$location', function($scope, $rootScope, $http, $location, AUTH_EVENTS, AuthService) {
    $scope.credentials = {
        username: '',
        password: ''
    };
    $scope.login = function (credentials) {
        AuthService.login(credentials).then(function () {
            $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
        }, function () {
            $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
        });
    };
}]);


//ProfileCtrl
webApp.controller('ProfileCtrl',['$scope','$http', '$location', function($scope, $http, $location) {
    $scope.formInfo = {};
    $scope.saveData = function(){

    }
}]);


//menuListCtrl
webApp.controller('MenuListCtrl',['$scope','$http', '$location', function($scope, $http, $location) {

}]);



