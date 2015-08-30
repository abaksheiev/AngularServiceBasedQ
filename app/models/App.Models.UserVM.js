/**
 * Created by Anton on 27.08.2015.
 */
App.Models.UserVM = function (item) {
    var _id,
        _firstName,
        _email,
        _isValid,
        _checked,
        _isInit

    var _isEditValue = false;

    var _createUserVMFromUser = function (user) {
        _id = user.id;
        _firstName = user.name === null ? '' : user.name;
        _email = user.email === null ? '' : user.email;
        _isInit = true;
    }

    var _isEdit = function (value) {
        if (value !== undefined) {
            _isEditValue = value;
        }
        return _isEditValue
    }

    var _isFieldValid = function (fieldName) {

        if (this[fieldName].length === 0) {
            return false;
        }
        return true;
    }
    var _isValid = function () {
        if(!_isInit){
            return true;
        }
        var fields = ['firstName', 'email'];
        for(var i=0;i<fields.length;i++){
            if(!this.isFieldValid(fields[i])){
                return false;
            }
        }

        return true;
    }

    //Import data
    _createUserVMFromUser(item);

    return {
        id: _id,
        firstName: _firstName,
        email: _email,
        checked: _checked,

        createUserVMFromUser: _createUserVMFromUser,

        isEdit: _isEdit,
        isFieldValid: _isFieldValid,
        isValid: _isValid
    }
};
