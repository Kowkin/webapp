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
            controller: 'SingInCtrl'
        })
        .when('/login', {
            title: 'Login',
            templateUrl: 'partials/login.html',
            controller: 'authCtrl'
        })
        .when('/singup', {
            templateUrl: '/view/singup.html',
            controller: 'SingUpCtrl'
        })
        .when('/edit-profile', {
            templateUrl: 'view/edit-profile.html',
            controller: 'ProfileCtrl'
        })
        .when('/edit-menu', {
            templateUrl: 'view/edit-menu.html',
            controller: 'MenuListCtrl'
        })
        .otherwise({
            redirectTo: '/'
        })
}]);

//CONTROLLERS

//SingInCtrl
webApp.controller('SingInCtrl',['$scope', '$http', '$location', function($scope, $rootScope, $http, $location, AUTH_EVENTS, AuthService) {

}]);

//ProfileCtrl
webApp.controller('ProfileCtrl',['$scope','$http', '$location', function($scope, $http, $location) {
    $http.get('data/illness.json').success(function(data) {
        $scope.illness = data;
    });
}]);

//menuListCtrl
webApp.controller('MenuListCtrl',['$scope','$http', '$location', function($scope, $http, $location) {

}]);



