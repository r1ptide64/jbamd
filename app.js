var joebApp = angular.module('joebApp', ['ngMaterial']);
joebApp.controller("joebController", function joebController($scope) {
    this.hvacModes = {
        0: 'Off',
        1: 'Heat',
        2: 'AC'
    };
});
joebApp.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('blue-grey')
        .accentPalette('light-green');
});
