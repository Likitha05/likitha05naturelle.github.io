'use strict';
var app=angular.module('app',['ui.router']);
app.config(function($stateProvider, $urlRouterProvider) {

$stateProvider

 .state('home', {
            url: '/home',
            templateUrl: 'partials/home.html',
             controller: "homeCtrl"
        })

 .state('aboutus', {
            url: '/aboutus',
            templateUrl: 'partials/aboutus.html',  
        })

 .state('products', {
            url: '/products',
            templateUrl: 'partials/products.html',
            controller: function($scope){
                 $scope.products=["Foundation Creams" , "Lotion", "FacePack","LipStick","EyeLiner","NailPolish"];
            }
        })

 .state('login', {
            url: '/login',
            templateUrl: 'partials/login.html',
            controller: "loginCtrl"
        })

 .state('signup', {
            url: '/signup',
            templateUrl: 'partials/signup.html',
            // controller: "signupCtrl"
        })

  $urlRouterProvider.otherwise("/home");

});

/* app.controller('loginCtrl', function($scope, $rootScope, $stateParams, $state, LoginService) {
    $rootScope.title = "AngularJS Login Sample";
    
    $scope.formSubmit = function() {
      if(LoginService.login($scope.username, $scope.password)) {
        $scope.error = '';
        $scope.username = '';
        $scope.password = '';
        $state.transitionTo('home');
      } else {
        $scope.error = "Incorrect username/password !";
      }   
    };
    
  });
  
  app.controller('homeCtrl', function($scope, $rootScope, $stateParams, $state, LoginService) {
    $rootScope.title = "AngularJS Login Sample";
    
  });
  
  app.factory('LoginService', function() {
    var admin = 'admin';
    var pass = 'pass';
    var isAuthenticated = false;
    
    return {
      login : function(username, password) {
        isAuthenticated = username === admin && password === pass;
        return isAuthenticated;
      },
      isAuthenticated : function() {
        return isAuthenticated;
      }
    };
    
  });
  
})(); */


 