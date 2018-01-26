(function () {
    'use strict';
    function formController($scope) {
        var _this = this;

        $scope.title = "Form Template";
        $scope.test = "Hello";

    };
         
    angular
        .module('seedApp')
        .controller('formController', ['$scope', formController]);

})();