'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
.controller('SingularityCtrl', function($scope, $http) {
    $http.get("http://169.55.112.10:7099/singularity/api/slaves")
    .then(function(response) {$scope.names = response.data;});
});

