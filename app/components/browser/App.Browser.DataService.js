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

    var _save = function(){
        var deferredObj = $q.defer();
        var pr = deferredObj.promise;

        pr.then(function (id) {
            for (var i = this.data.length - 1; i >= 0; i--) {
                if (this.data[i].id === id) {
                    this.data[i] = item;
                    break;
                }
            }
        })

        deferredObj.resolve(item.id);
        return pr;
    }

    var _delete = function(id){
        var deferredObj = $q.defer();
        var pr = deferredObj.promise;

        pr.then(function (id) {
            for (var i =0; i<obj.data.length;  i++) {
                if (obj.data[i].id === id) {
                    obj.data.splice(i, 1);
                    break;
                }
            }
        })

        deferredObj.resolve(id);
        return pr;
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

    var _getData = function(settings){

        var deferredObj = $q.defer();
        var pr = deferredObj.promise;

        pr = pr.then(function () {

            var data = [];

            var minIndex = settings.perPage * (settings.currentPageIndex - 1 );
            var maxIndex = settings.perPage * (settings.currentPageIndex);

            for (var i = 0; i < obj.data.length; i++) {
                if (minIndex < i && i <= maxIndex) {
                    data.push(obj.data[i]);
                }
            }

            return data;
        })

        deferredObj.resolve()
        return pr;
    }

    var _resetData=function(perPage, pageIndex){
        obj.data =[];
    }
    /*set public methods*/
    obj.fillMockData = _fillMockData;
    obj.setDataUrl = _setDataUrl;
    obj.getData = _getData;
    obj.delete = _delete;
    obj.save = _save;

    obj.resetData = _resetData
    return obj
};

App.Browser.DataService.$inject = ['$q', '$http'];

myApp.factory('App.Browser.DataService', App.Browser.DataService);