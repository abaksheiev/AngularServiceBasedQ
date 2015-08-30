/**
 * Created by Anton on 26.08.2015.
 */

App.Services.UserService = function ($q, $http) {
    var _urlPeopleData = 'mockJsonData/people.json';
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

    var _fillMockRecord = function () {
        return $http.get(_urlPeopleData)
            .then(function (responce) {

                for (var i = 0; i < responce.data.length; i++) {
                    var id = i;
                    responce.data[i].id = id;
                    var vm = App.Models.UserVM(responce.data[i]);
                    _data.push(vm);
                }

                return _data;
            })
    };

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

                    for (var i = 0; i < 100; i++) {
                        var id = i;
                        responce.data[i].id = id;
                        var vm = App.Models.UserVM(responce.data[i]);
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
            for (var i = 0; i < _data.length; i++) {
                if (_data[i].id === id) {
                    _data.splice(i, 1);
                    break;
                }
            }
        })

        deferredObj.resolve(id);
        return pr;
    };

    var _getTotal = function () {
        var deferredObj = $q.defer();
        var pr = deferredObj.promise;

        pr.then(function () {
            var t = _data.length;
            return t;
        })

        deferredObj.resolve();
        return pr;
    }

    var _getRecordsByPageIndex = function (perPage, pageIndex) {
        var deferredObj = $q.defer();
        var pr = deferredObj.promise;


        var pr = _getTotal()
            .then(function (total) {
                var data = [];

                var minIndex = perPage * (pageIndex );
                var maxIndex = perPage * (pageIndex + 1);

                for (var i = 0; i < _data.length; i++) {
                    if (minIndex < i && i <= maxIndex) {
                        data.push(_data[i]);
                    }
                }

                return data;
            });
        deferredObj.resolve();
        return pr;

    }

    return {
        save: _save,
        delete: _delete,
        fillMockRecord: _fillMockRecord,
        getRecordsByPageIndex: _getRecordsByPageIndex,
        getTotal: _getTotal
    }
};

App.Services.UserService.$inject = ['$q', '$http'];

myApp.factory('userService', App.Services.UserService);