/*********************************************************************
 * Created by Anton Baksheiev on 31.08.2015.                         *
 * linkedin: https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53 *
 *********************************************************************/
/*
 * mockJsonData/countries.json
 * */

App.Directories.AppBrowser = function factory() {
    return {
        restrict: 'E',
        templateNamespace: 'html',
        transclude: true,
        controller:'browserController',
        link: function ($scope, iElement, iAttrs) {


            // Load data
            $scope.init({
                dataUrl:iAttrs.dataurl
            });
            $scope.loadData();
        },
        templateUrl: 'app/components/browser/directives/tmpl/app-browser.html'
    };
};

myApp.directive('appBrowser', App.Directories.AppBrowser);