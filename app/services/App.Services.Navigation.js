/**
 * Created by Anton on 26.08.2015.
 */
App.Services.NavigationService = function ( $rootScope) {
    var events = [];

    return {
        go: function (eventname) {
            $rootScope.$broadcast(eventname);
        },
        register:function(newevent){
            // Add validation on already existing event
            events.push(newevent);
        }
    }

};

App.Services.NavigationService.$inject = ['$rootScope'];


myApp.factory('navigationService', App.Services.NavigationService);