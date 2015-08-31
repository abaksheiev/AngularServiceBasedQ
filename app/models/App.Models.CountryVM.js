/**
 * Created by Anton on 29.08.2015.
 */
App.Models.CountryVM = function (item) {

    var _id,
        _name,
        _code,
        _isValid,
        _checked,
        _isInit


    var _isEditValue = false;

    var _createCountryVMFromCountry = function (country) {
        _id = country.id;
        _name = country.name;
        _code = country.code;

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
        var fields = ['name', 'code'];
        for(var i=0;i<fields.length;i++){
            if(!this.isFieldValid(fields[i])){
                return false;
            }
        }

        return true;
    }

    //Import data
    _createCountryVMFromCountry(item);

    return {
        id: _id,
        name: _name,
        code: _code,
        checked: _checked,

        createCompanyVMFromCompany: _createCountryVMFromCountry,

        isEdit: _isEdit,
        isFieldValid: _isFieldValid,
        isValid: _isValid

    }
};