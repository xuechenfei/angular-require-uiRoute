require.config({
    paths: {
        'angular': 'lib/angular.min',
        'ui-router': 'lib/angular-ui-router.min',
        'text': 'lib/text'
    },
    shim: {
        angular: {
            exports: 'angular'
        },
        'ui-router': {
            deps: ['angular']
            //exports: 'uiRouterModule'
        }
    }
});

require(['angular', 'route'], function (angular) {
    angular.bootstrap(document, ['app']);
});