/**
 * Created by Anton on 27.08.2015.
 */
App.Models.UserVM = function (item) {

    var _id,
        _firstName,
        _lastName,
        _isValid,
        _checked

    var _isEditValue = false;

    var _createUserVMFromUser = function (user) {
        _id = user.id;
        _firstName = user.firstName;
        _lastName = user.lastName;

        if(!_isValid()){
            _isEdit(true);
        }
    }

    var _isEdit = function (value) {
        if (value !== undefined) {
            _isEditValue = value;
        }
        return _isEditValue
    }

    var _isValid = function () {

        if (_firstName === null
            || _lastName === null) {
            return false;
        }
        return true;
    }

    //Import data
    _createUserVMFromUser(item);

    return {
        id: _id,
        firstName: _firstName,
        lastName: _lastName,
        checked: _checked,

        createUserVMFromUser: _createUserVMFromUser,
        isEdit: _isEdit,
        isValid: _isValid
    }
};
