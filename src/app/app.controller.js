(function() {
    'use strict';
    var angular = require('angular')

    angular
        .module('app')
        .controller('AppController', AppController);

    function AppController() {
        var vm = this;
        

        

        activate();

        ////////////////

        function activate() { 
            vm.value = 'Valor Inicial'

        }
    }
})();