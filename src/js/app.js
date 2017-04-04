/* ONS */
/* Registering App Module */
var app = angular.module('seedApp', [
    'ngRoute',
    'ngAnimate',
    'ngMaterial'
]);

app.config(['$compileProvider', '$httpProvider', '$routeProvider', '$locationProvider', '$rootScopeProvider',
    function($compileProvider, $httpProvider, $routeProvider, $locationProvider, $rootScopeProvider) {
        var controllerName = '';

        $rootScopeProvider.digestTtl(15);

        $routeProvider.when('/', {
            templateUrl: function() {
                return '/templates/home.html';
            },
            controller: function() {
                return 'homeController';
            }
        });

        $locationProvider.html5Mode(true);

        $compileProvider.preAssignBindingsEnabled(true);
    }
]);