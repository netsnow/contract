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

            var str = obj._links.self.href;
            var deparmentid = str.split("/")[str.split("/").length - 1];
            angular.element(node).children().children().attr("value",deparmentid);
            angular.element(node).children().append(obj.departmentname);
            angular.element("#departmentradio").append(node);
        });
    });

    angular.element("#memberadd").bind('click', function (event) {
        var data = {};
        data.userno = angular.element("#userno").val();
        data.username = angular.element("#username").val();
        data.fullname = angular.element("#fullname").val();
        data.password = angular.element("#password").val();
        data.email = angular.element("#email").val();
        data.deparment_id = $('input[name="optionsDepartment"]:checked').val();
        data.enabled = $('input[name="optionsEnable"]:checked').val();
        data.lastPasswordResetDate = '2016-01-01';
        alert(JSON.stringify(data));

        if($stateParams.url == null){
            $http.post('users',data,{ headers : {'Authorization' : localStorage.getItem("jwtToken") }}).success(function (largeLoad) {
                alert("已保存");
                $state.go('app.member');
            });
        }else{
            $http.put($stateParams.url,data,{ headers : {'Authorization' : localStorage.getItem("jwtToken") }}).success(function (largeLoad) {
                alert("已保存");
                $state.go('app.member');
            });

        }

    });

  }])
 ;