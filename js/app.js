angular.module('kkringle-module', []).
  config(['$routeProvider', function ($routeProvider) {
      $routeProvider.
      when('/login', { templateUrl: 'partials/login.htm' }).
      when('/dashboard', { templateUrl: 'partials/register.htm' }).
      otherwise({ redirectTo: '/login' });
  } ]);
