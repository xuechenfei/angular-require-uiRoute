define(['angular', 'text!module1/tpl.html'], function (angular, tpl) {
    return {
        controller: ['$scope', '$http', function ($scope, $http) {
            $scope.info = 'kenko';
            $scope.module2Path = 'index.html#/module2';
        }],
        tpl: tpl
    }
});