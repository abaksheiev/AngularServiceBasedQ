/*********************************************************************
 * Created by Anton Baksheiev on 26.08.2015.                         *
 * linkedin: https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53 *
 *********************************************************************/

App.Controllers.NavigationController = function ($scope, $location, $translate, $filter) {
    var supportedLanguages = ['en', 'de'];

    $scope.languages = [];
    $scope.menus = [];

    angular.forEach(supportedLanguages, function (value, key) {
        this.languages.push({
            class: 'flag flag-' + value,
            code: value
        })
    }, $scope);

    $scope.addMenuItem = function (text, method) {
        $scope.menus.push({
            titleCode :text,
            title: $filter('translate')(text),
            code: method
        })
    }

    $scope.go = function (code) {
        switch (code) {
            case 'showCountries':
                $location.path('/Countries')
                break;
            case 'showCompanies':
                $location.path('/Companies')
                break;
            case 'showUsers':
                $location.path('/Users')
                break;
        }
    }

    $scope.setLanguage = function (lng) {
        $translate.use(lng);
        _translateMenu()
    }
    $scope.getLanguage = function (lng) {
        return $translate.use();
    }

    var _translateMenu = function () {
        angular.forEach($scope.menus, function (menuItem) {
            menuItem.title = $filter('translate')(menuItem.titleCode);
        });
    }
};

App.Controllers.NavigationController.$inject = ['$scope', '$location', '$translate','$filter'];

myApp.controller('navigationController', App.Controllers.NavigationController);
