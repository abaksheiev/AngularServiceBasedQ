/**
 * Created by Anton on 26.08.2015.
 */

App.Services.UserService = function (userStorageService, $q) {
    var _save = function (item) {
        userStorageService.save(item);
    }

    var _getAll = function () {
        var usersVM=[];
        var users = userStorageService.getAll();

        for(var i=0; i<users.length;i++){
            var vm = App.Models.UserVM(users[i]);

            usersVM.push(vm);
        }
        return usersVM;
    }

    var _delete = function(id){
        userStorageService.delete(id);
    };

    var _fillTestData=function(){
        userStorageService.fillTestData();
    }

    return {
        save: _save,
        delete:_delete,
        getAll: _getAll,
        fillTestData:_fillTestData
    }
};

App.Services.UserService.$inject = ['userStorageService', '$q'];

myApp.factory('userService', App.Services.UserService);