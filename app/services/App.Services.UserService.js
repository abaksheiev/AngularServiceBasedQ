/**
 * Created by Anton on 26.08.2015.
 */

App.Services.UserService = function (userStorageService, $q) {
    var _add = function () {

    }

    var _getAll = function () {
        return userStorageService.getAll();
    }

    var _delete = function(id){
        userStorageService.delete(id);
    };

    var _fillTestData=function(){
        userStorageService.fillTestData();
    }

    return {
        add: _add,
        delete:_delete,
        getAll: _getAll,
        fillTestData:_fillTestData
    }
};

App.Services.UserService.$inject = ['userStorageService', '$q'];