'use strict';

/* Controllers */

  // Form controller
app.controller('FormMemberCtrl', ['$scope','$http','$state','$stateParams', function($scope,$http,$state,$stateParams) {
    //init fuction

    $http.get('departments',{ headers : {'Authorization' : localStorage.getItem("jwtToken") }}).success(function (largeLoad) {
        angular.element("#departmentradiotmplate").hide();
        $.each(largeLoad._embedded.departments,function(idx, obj) {
            //alert(obj.departmentname);
            var node = angular.element("#departmentradiotmplate").clone(true);
            angular.element(node).show();
            angular.element(node).attr("id","department"+idx);
            angular.element(node).children().children().attr("id","optionsRadios"+idx);
            angular.element(node).children().children().attr("value",idx);
            angular.element(node).children().append(obj.departmentname);
            angular.element("#departmentradio").append(node);
        });
    });

  }])
 ;