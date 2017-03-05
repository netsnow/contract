'use strict';

/* Controllers */

  // Form controller
app.controller('FormDepartmentCtrl', ['$scope','$http', function($scope,$http) {

    angular.element("#departmentadd").bind('click', function (event) {
    	var departmentdata = {};
    	departmentdata.departmentname = angular.element("#departmentname").val();
    	departmentdata.departmentshortname = angular.element("#departmentshortname").val();
        $http.post('departments',departmentdata,{ headers : {'Authorization' : localStorage.getItem("jwtToken") }}).success(function (largeLoad) {
            alert("yi保存");
        });
    });

  }])
 ;