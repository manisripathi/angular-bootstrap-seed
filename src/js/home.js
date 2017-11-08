(function () {
    'use strict';
    function homeController($scope) {
        var _this = this;

        $scope.title = "Home Template";

    };
         
    angular
        .module('seedApp')
        .controller('homeController', ['$scope', homeController]);

})();