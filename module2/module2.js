define(['angular','text!module2/tpl.html'], function (angular, tpl) {
    return {
        controller: ['$scope', '$http', function ($scope, $http) {
            $scope.info = 'hahaha';
            $scope.module1Path = 'index.html#/module1';
        }],
        tpl: tpl
    }
});