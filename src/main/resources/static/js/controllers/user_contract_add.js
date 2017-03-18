'use strict';

/* Controllers */

  // Form controller
app.controller('FormUserContractCtrl', ['$scope','$http','$state','$stateParams', function($scope,$http,$state,$stateParams) {
    //init
    angular.element("#contractcontent").hide();
    $http.get("templates",{ headers : {'Authorization' : localStorage.getItem("jwtToken") }}).success(function (largeLoad) {
        alert("ok");
        var node = angular.element("#templatetmp").clone(true);
        angular.element(node).show();
    //    angular.element("#departmentname").val(largeLoad.departmentname)
    //    angular.element("#departmentshortname").val(largeLoad.departmentshortname);
    });

    //template selet button event
    angular.element("#template").bind('change', function (event) {
        alert(angular.element("#template").val()+":"+angular.element("#template").text());
        angular.element("#contractcontent").show();
    });

  }])
 ;