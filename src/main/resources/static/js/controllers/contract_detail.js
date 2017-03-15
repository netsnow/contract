'use strict';

/* Controllers */

  // Form controller
app.controller('ContractDetailCtrl', ['$scope','$http','$state','$stateParams', function($scope,$http,$state,$stateParams) {
    //init fuction
    alert($stateParams.no);

  }])
 ;