/*********************************************************************
 * Created by Anton Baksheiev on 31.08.2015.                         *
 * linkedin: https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53 *
 *********************************************************************/
App.Browser.DataVMService = function () {
    var _getVM = function (columns) {

        var vm = {};
        var _isInit = true;
        var _fields = [];
        var _validationAttr = {};

        var _isEdit = false;

        var _state = {};

        // create fields
        for (var i = 0; i < columns.length; i++) {
            vm[columns[i].field] = 'j';
            _fields.push(columns[i].field);
            _validationAttr[columns[i].field] = [];
            _validationAttr[columns[i].field]['required'] = columns[i].required
            vm['type'] = columns[i]['type'];

        }

        // create constructor
        vm['init'] = function (data) {
            for (var i = 0; i < _fields.length; i++) {
                var index = i;
                this[_fields[index]] = data[_fields[index]];
            }

            // Indicate that model is loaded
            _isInit = true;
        };

        // set indicator of editing
        vm['isEdit'] = function (value) {
            if (value === undefined) {
                return _isEdit
            }
            else {
                _isEdit = value;
            }
        }

        //Validation
        vm['isFieldValid'] = function (name) {

            var isRequired = _validationAttr[name]['required'];
            if (isRequired) {
                if (this[name].length === 0) {
                    return false;
                }
            }

            return true;
        };

        vm['saveState'] = function () {
            for (var i = 0; i < _fields.length; i++) {
                var index = i;
                _state[_fields[index]] = this[_fields[index]];
            }
        }

        vm['revertState'] = function () {
            for (var i = 0; i < _fields.length; i++) {
                var index = i;
                this[_fields[index]] = _state[_fields[index]];
            }
        }

        vm['isValid'] = function () {
            if (!_isInit) {
                return true;
            }
            for (var i = 0; i < _fields.length; i++) {
                var index = i;
                if (!this['isFieldValid'](_fields[index])) {
                    return false;
                }
            }

            return true;
        }
        return vm;
    };

    return {
        getInstanceVM: function (columns) {
            var _columns = columns
            return {
                getVM: function () {
                    return _getVM(_columns);
                }
            };
        }
    }
};

App.Browser.DataVMService.$inject = [];

myApp.factory('App.Browser.DataVMService', App.Browser.DataVMService);