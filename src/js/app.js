/* ONS */
/* Registering App Module */
var app = angular.module('seedApp', [
    'ngRoute',
    'ngAnimate',
    'ngMaterial'
]);

app.config(['$compileProvider', '$httpProvider', '$controllerProvider', '$routeProvider', '$locationProvider', '$rootScopeProvider',
    function($compileProvider, $httpProvider, $controllerProvider, $routeProvider, $locationProvider, $rootScopeProvider) {
        var controllerName = '';

        $rootScopeProvider.digestTtl(15);

        $routeProvider
            .when('/', {
                templateUrl: '/templates/main.html'
            })
            .when('/home', {
                templateUrl: '/templates/home.html',
                controller: 'homeController',
                controllerAs: 'home'
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);

        $compileProvider.preAssignBindingsEnabled(true);
    }
]);