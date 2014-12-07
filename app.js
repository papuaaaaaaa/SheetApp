/**
 * Created by papua on 2014/12/07.
 */
angular.module('App', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'index-tmpl'
            })
            .when('/new', {
                templateUrl: 'new-tmpl'
            })
            .when('/sheet/:id', {
                templateUrl: 'sheet-tmpl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);

