/**
 * Created by Anton on 29.08.2015.
 */
App.Models.CompanyVM = function (item) {

    var _id,
        _name,
        _location,
        _isValid,
        _checked,
        _isInit


    var _isEditValue = false;

    var _createCompanyVMFromCompany = function (company) {
        _id = company.id;
        _name = company.name;
        _location = company.location;

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
        var fields = ['name', 'location'];
        for(var i=0;i<fields.length;i++){
            if(!this.isFieldValid(fields[i])){
                return false;
            }
        }

        return true;
    }

    //Import data
    _createCompanyVMFromCompany(item);

    return {
        id: _id,
        name: _name,
        location: _location,
        checked: _checked,

        createCompanyVMFromCompany: _createCompanyVMFromCompany,

        isEdit: _isEdit,
        isFieldValid: _isFieldValid,
        isValid: _isValid

    }
};
