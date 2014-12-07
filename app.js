/**
 * Created by papua on 2014/12/07.
 */
angular.module('App', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'index-tmpl',
                controller: 'SheetListController'
            })
            .when('/new', {
                templateUrl: 'new-tmpl',
                controller: 'CreationController'
            })
            .when('/sheet/:id', {
                templateUrl: 'sheet-tmpl',
                controller: 'SheetController'
            })
            .otherwise({
                redirectTo: '/'
            });
    }])
    .controller('SheetListController', [function SheetListController() {/* 一覧用 */}])
    .controller('CreationController', [function CreationController() {/* 作成用 */}])
    .controller('SheetController', [function SheetController() {/* 詳細用 */}]);

