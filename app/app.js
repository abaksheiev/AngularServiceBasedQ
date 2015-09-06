/*********************************************************************
 * Created by Anton Baksheiev on 26.08.2015.                         *
 * linkedin: https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53 *
 *********************************************************************/

var myApp = angular.module('app',
    ['ngRoute','pascalprecht.translate']);

myApp.config(function ($routeProvider, $locationProvider) {

    $routeProvider
        .when('/Users', {
            templateUrl: 'partials/browserUsersView.html',
            controller: 'browserController'
        })
        .when('/Countries', {
            templateUrl: 'partials/browserCountriesView.html',
            controller: 'browserController'
        })
        .when('/Companies', {
            templateUrl: 'partials/browserCompaniesView.html',
            controller: 'browserController'
        })
        .when('/GenericBrowser', {
            templateUrl: 'partials/browserCountriesView.html',
            controller: 'browserController'
        })
        .otherwise({
            redirectTo: '/Countries'
        }
    );

    // configure html5 to get links working on jsfiddle
    $locationProvider.html5Mode(false);
    $locationProvider.hashPrefix('!')
});

myApp.run(function ($templateCache) {
    $templateCache.put('info.html',
        '<small><b>Author:</b> <i>Baksheiev Anton</i></small>' +
        '</br>' +
        '<small><b>linkedin:</b> ' +
        '<a href="https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53" target="_blank">https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53</a>' +
        '</small>' +
        '</br>' +
        '<small><b>github:</b> ' +
        '<a href="https://github.com/abaksheiev/CRUDAngularjsApp">https://github.com/abaksheiev/CRUDAngularjsApp</a>' +
        '</small>'
    );
});


myApp.config(['$translateProvider', function ($translateProvider) {
    $translateProvider.translations('en', {
        'EDIT': 'Edit',
        'DELETE': 'Delete',
        'SAVE': 'Save',
        'CANCEL': 'Cancel',
        'USERS': 'Users',
        'COMPANIES': 'Companies',
        'COUNTRIES': 'Countries',
        'LOADING': 'Loading...'
    });

    $translateProvider.translations('de', {
        'EDIT': "Bearbeiten",
        "DELETE": "L?schen",
        "SAVE": "Speichern",
        "CANCEL": 'Abbrechen',
        'USERS': 'Nutzer',
        'COMPANIES': 'Unternehmen',
        'COUNTRIES': 'Land',
        'LOADING': 'Verladung...'
    });

    $translateProvider.preferredLanguage('de');

}]);