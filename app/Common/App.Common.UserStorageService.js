/**
 * Created by Anton on 26.08.2015.
 */
App.Common.UserStorageService = function ($window) {
    var firstNames = ['Angel', 'John', 'Smeet', 'Devis', 'Omar', 'Kristian', 'Kate', 'Laura', 'Leon', 'Brus'];
    var lastNames = ['Brown', 'Forest', 'Dee', 'Lawrence', 'Hepburn', 'Stone', 'Moore', 'Knightley', 'Streep', 'Kunis'];


    var storage = $window.localStorage || {};

    _add = function (item) {
        storage.setItem(
            item.id, angular.toJson({
                firstName: item.firstName,
                lastName: item.lastName
            })
        );
    };

    _save = function(item){

        if(item.id === null){
            item.id = $window.localStorage.length + 1;
        }

        _add(item);
    }


    _delete = function (id) {
        storage.removeItem(id);
    };
    _getById = function (id) {
        var item = angular.fromJson(storage.getItem(id));
        return {
            id: id,
            firstName: item.firstName,
            lastname: item.lastName
        }
    };
    _getAll = function () {
        var data = [];
        for (var i = 0; i < storage.length; i++) {
            var item = angular.fromJson(storage.getItem(storage.key(i)));
            data.push({
                id: storage.key(i),
                firstName: item.firstName,
                lastName: item.lastName
            })
        }

        return data
    }
    // add test data
    var _fillData = function () {
        for (var i = 0; i < 10; i++) {
            var _id = i;
            _add({
                id: _id,
                firstName: firstNames[_id],
                lastName: lastNames[_id]
            })
        }
    };


    return {
        add: _add,
        save: _save,
        delete: _delete,
        getById: _getById,
        getAll: _getAll,
        fillTestData: _fillData
    }
};

App.Common.UserStorageService.$inject = ['$window'];