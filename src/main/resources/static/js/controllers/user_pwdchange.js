'use strict';

/* Controllers */

  // Form controller
app.controller('FormPwdchangeCtrl', ['$scope','$http','$state','$stateParams', function($scope,$http,$state,$stateParams) {

    angular.element("#pwdchange").bind('click', function (event) {
        //var oldpwd = angular.element("#oldpwd").val();
        var newpwd = angular.element("#newpwd").val();
        var repeatpwd = angular.element("#repeatpwd").val();
        if(newpwd != "" && repeatpwd != "" & newpwd == repeatpwd ){
            var data = {};
            data.password = angular.element("#newpwd").val();
            $http.patch("users/"+$scope.userid,data,{ headers : {'Authorization' : localStorage.getItem("jwtToken") }}).success(function (largeLoad) {
                alert("已修改！");
                $state.go('access.signin');
            });
            //alert("666");
        }else{
            alert("输入错误(密码为空或重复密码不正确)");
        }

    });

  }])
 ;