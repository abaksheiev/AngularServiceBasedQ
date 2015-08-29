/**
 * Created by Anton on 27.08.2015.
 */
App.Models.UserVM = function (item) {

    var _id,
        _firstName,
        _email,
        _isValid,
        _checked

    var _isEditValue = false;

    var _createUserVMFromUser = function (user) {
        _id = user.id;
        _firstName = user.name;
        _email = user.email;

        if (!_isValid()) {
            _isEdit(true);
        }
    }

    var _isEdit = function (value) {
        if (value !== undefined) {
            _isEditValue = value;
        }
        return _isEditValue
    }

    var _isValid = function (fieldName) {
        //TODO: add validation
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
        isValid: _isValid
    }
};
