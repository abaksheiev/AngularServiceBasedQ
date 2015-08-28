/**
 * Created by Anton on 26.08.2015.
 */
var myApp = angular.module('app', []);

myApp.run(function($templateCache) {
    $templateCache.put('info.html',
        '<small><b>Author:</b> <i>Baksheiev Anton+</i></small>' +
        '</br>' +
        '<small><b>linkedin:</b> ' +
        '<i><a href="https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53">https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53</a></i>'+
        '</small>' +
        '</br>'
    );
});