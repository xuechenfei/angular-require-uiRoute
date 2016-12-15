define(['angular', 'require', 'ui-router'], function (angular, require) {
    var app = angular.module('app', ['ui.router']);

    app.run(['$rootScope', function ($rootScope) {
        $rootScope.moudle1Path = 'index.html#/module1';
        $rootScope.moudle2Path = 'index.html#/module2';
    }]);

    app.config(['$stateProvider', '$urlRouterProvider', '$controllerProvider', function ($stateProvider, $urlRouterProvider, $controllerProvider) {
        var i, j;
        var options = [
            {
                routerName: 'module1',
                url: '/module1',
                templateUrl: 'module1/tpl.html',
                ctrlPath: 'module1/module1.js',
                controller: 'module1Controller'
            },
            {
                routerName: 'module2',
                url: '/module2',
                templateUrl: 'module2/tpl.html',
                ctrlPath: 'module2/module2.js',
                controller: 'module2Controller'
            }
        ];

        for (i = 0, j = options.length; i < j; i++) {
            (function (x) {
                $stateProvider.state(options[x].routerName, {
                    url: options[x].url,
                    templateUrl: options[x].templateUrl,
                    controller: options[x].controller,
                    resolve: {
                        keyName: function ($q) {
                            var deferred = $q.defer();
                            require([options[x].ctrlPath], function (module) {
                                $controllerProvider.register(options[x].controller, module.controller);
                                deferred.resolve();
                            });

                            return deferred.promise;
                        }
                    }
                });
            })(i);
        }

        $urlRouterProvider.otherwise('/module1');
    }]);

    return app;
});