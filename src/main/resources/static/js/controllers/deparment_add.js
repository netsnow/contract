'use strict';

/* Controllers */

  // Form controller
app.controller('FormDepartmentCtrl', ['$scope','$http','$state','$stateParams', function($scope,$http,$state,$stateParams) {

    $http.get($stateParams.url,{ headers : {'Authorization' : localStorage.getItem("jwtToken") }}).success(function (largeLoad) {
        alert(largeLoad.departmentname);
        angular.element("#departmentname").val(largeLoad.departmentname)
        angular.element("#departmentshortname").val(largeLoad.departmentshortname);
    });


    angular.element("#departmentadd").bind('click', function (event) {

    	var departmentdata = {};
    	departmentdata.departmentname = angular.element("#departmentname").val();
    	departmentdata.departmentshortname = angular.element("#departmentshortname").val();
        $http.post('departments',departmentdata,{ headers : {'Authorization' : localStorage.getItem("jwtToken") }}).success(function (largeLoad) {
            alert("已保存");
            $state.go('app.deparment');
        });
    });

  }])
 ;