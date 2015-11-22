'use strict';

/* Controllers */
var app = angular.module('app', ['ngRoute', 'ngAnimate', 'toaster']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/login', {
            title: 'Login',
            templateUrl: 'view/login.html',
            controller: 'authCtrl'
        })
        .when('/logout', {
            title: 'Logout',
            templateUrl: 'view/login.html',
            controller: 'logoutCtrl'
        })
        .when('/singup', {
            title: 'Signup',
            templateUrl: 'view/signup.html',
            controller: 'authCtrl'
        })
        .when('/edit-profile', {
            templateUrl: 'view/edit-profile.html',
            controller: 'authCtrl'
        })
        .when('/edit-menu', {
            templateUrl: 'view/edit-menu.html',
            controller: 'MenuListCtrl'
        })
        .when('/', {
            title: 'Login',
            templateUrl: 'view/login.html',
            controller: 'authCtrl',
            role: '0'
        })
        .otherwise({
            redirectTo: '/login'
        })
}])
    .run(function ($rootScope, $location, Data) {
        $rootScope.$on("$routeChangeStart", function (event, next, current) {
            $rootScope.authenticated = false;
            Data.get('session').then(function (results) {
                if (results.uid) {
                    $rootScope.authenticated = true;
                    $rootScope.uid = results.uid;
                    $rootScope.name = results.name;
                    $rootScope.email = results.email;
                } else {
                    var nextUrl = next.$$route.originalPath;
                    if (nextUrl == '/signup' || nextUrl == '/login') {

                    } else {
                        $location.path("/login");
                    }
                }
            });
        });
    });

//CONTROLLERS

//SingInCtrl
app.controller('SingInCtrl',['$scope', '$http', '$location', function($scope, $rootScope, $http, $location, AUTH_EVENTS, AuthService) {

}]);

//authCtrl
app.controller('authCtrl', function ($scope, $rootScope, $routeParams, $location, $http, Data) {
    //initially set those objects to null to avoid undefined error
    $scope.login = {};
    $scope.signup = {};
    $scope.doLogin = function (customer) {
        Data.post('login', {
            customer: customer
        }).then(function (results) {
            Data.toast(results);
            if (results.status == "success") {
                $location.path('dashboard');
            }
        });
    };
    $scope.signup = {name:'',password:'',weight:'',date:'',gender:'',illness:'',limit:''};
    $scope.signUp = function (customer) {
        Data.post('signUp', {
            customer: customer
        }).then(function (results) {
            Data.toast(results);
            if (results.status == "success") {
                $location.path('dashboard');
            }
        });
    };
    $scope.logout = function () {
        Data.get('logout').then(function (results) {
            Data.toast(results);
            $location.path('login');
        });
    }
});

app.controller('authCtrl',['$scope','$http', '$location', function($scope, $http, $location) {
    $http.get('data/illness.json').success(function(data) {
        $scope.illness = data;
    });
}]);

//menuListCtrl
app.controller('MenuListCtrl',['$scope','$http', '$location', function($scope, $http, $location) {

}]);



