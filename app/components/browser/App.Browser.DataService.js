/*********************************************************************
 * Created by Anton Baksheiev on 31.08.2015.                         *
 * linkedin: https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53 *
 *********************************************************************/
App.Browser.DataService = function ($q, $http) {

    var obj = {
        dataUrl: '',
        data: [],
        viewModel: undefined
    };

    var _setDataUrl = function (url) {
        obj.dataUrl = url;
    }


    var _fillMockData = function () {

        return $http.get(obj.dataUrl)
            .then(function (responce) {

                for (var i = 0; i < responce.data.length; i++) {
                    var vm = obj.viewModel.getVM();
                    var _id = i;
                    responce.data[_id]['id'] = _id;
                    vm.init(responce.data[_id]);
                    obj.data.push(vm);
                }

                return obj.data;
            })

    }
    /*set public methods*/
    obj.fillMockData = _fillMockData;
    obj.setDataUrl = _setDataUrl;
    return obj
};

App.Browser.DataService.$inject = ['$q', '$http'];

myApp.factory('App.Browser.DataService', App.Browser.DataService);