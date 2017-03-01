'use strict';

/* Controllers */
  // signin controller
app.controller('SigninFormController', ['$scope', '$http', '$state', function($scope, $http, $state) {
    localStorage.removeItem("jwtToken");
    $scope.user = {};
    $scope.authError = null;
    $scope.login = function() {
      $scope.authError = null;
      // Try to login
      $http.post('auth', {username: $scope.user.email, password: $scope.user.password})
      .then(function(response) {
        if ( !response.data.token ) {
          $scope.authError = '用户名或密码不正确！';
        }else{
          localStorage.setItem("jwtToken", response.data.token);
          window.location.href = "http://"+window.location.host+"#/app/dashboard-v1";
          location.reload();
          //$state.go('app.dashboard-v1');
        }
      }, function(x) {
        $scope.authError = '用户名或密码不正确！';
      });
    };
  }])
;