var joebApp = angular.module('joebApp', ['ngMaterial']);
joebApp.controller("joebController", function ($scope) {
    $scope.hvacMode = '';
    $scope.hvacModes = ["Off", "Heat", "AC"];
    $scope.temp = '75 degrees';
    $scope.humid = '35 %';
});
joebApp.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('blue-grey')
        .accentPalette('light-green');
});