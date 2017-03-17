'use strict';

/* Controllers */

app
  // Flot Chart controller
  .controller('UserDashboardCtrl', ['$scope','$http', function($scope,$http) {

    // INITIAL CALLS =============================================================

    $http.get('notices/1',{ headers : {'Authorization' : localStorage.getItem("jwtToken") }}).success(function (largeLoad) {
        angular.element("#noticetext").text(largeLoad.noticetext);
    });

  }]);