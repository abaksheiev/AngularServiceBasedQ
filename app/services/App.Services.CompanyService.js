/**
 * Created by Anton on 29.08.2015.
 */

App.Services.CompanyService = function ($q, $http) {
    var _urlPeopleData = 'mockJsonData/companies.json';
    var _data = [];

    var _save = function (item) {
        var deferredObj = $q.defer();
        var pr = deferredObj.promise;

        pr.then(function (id) {
            for (var i = _data.length - 1; i >= 0; i--) {
                if (_data[i].id === id) {
                    _data[i] = item;
                    break;
                }
            }
        })

        deferredObj.resolve(item.id);
        return pr;
    }

    var _getAll = function () {
        if (_data.length > 0) {
            var deferredObj = $q.defer();
            var pr = deferredObj.promise;
            pr.then(function (data) {
                return data;
            });
            deferredObj.resolve(_data);
            return pr;
        } else {
            return $http.get(_urlPeopleData)
                .then(function (responce) {

                    for (var i = 0; i < responce.data.length; i++) {
                        var id = i;
                        responce.data[i].id = id;
                        var vm = App.Models.CompanyVM(responce.data[i]);
                        _data.push(vm);
                    }

                    return _data;
                })
        }
    }

    var _delete = function (id) {
        var deferredObj = $q.defer();
        var pr = deferredObj.promise;

        pr.then(function (id) {
            for (var i =0; i<_data.length;  i++) {
                if (_data[i].id === id) {
                    _data.splice(i, 1);
                    break;
                }
            }
        })

        deferredObj.resolve(id);
        return pr;
    };

    return {
        save: _save,
        delete: _delete,
        getAll: _getAll,
    }
};

App.Services.CompanyService.$inject = ['$q', '$http'];

myApp.factory('companyService', App.Services.CompanyService);