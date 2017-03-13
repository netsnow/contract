'use strict';

/* Controllers */

  // Form controller
app.controller('FormMemberCtrl', ['$scope','$http','$state','$stateParams', function($scope,$http,$state,$stateParams) {
    //init fuction
    //department list get
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
        //for edit
        $http.get($stateParams.url,{ headers : {'Authorization' : localStorage.getItem("jwtToken") }}).success(function (largeLoad) {
            //alert(largeLoad.departmentname);
            angular.element("#userno").val(largeLoad.userno)
            angular.element("#username").val(largeLoad.username);
            angular.element("#fullname").val(largeLoad.fullname);
            angular.element("#email").val(largeLoad.email);
            angular.element('input[name="optionsDepartment"][value="' + largeLoad.deparmentId + '"]').attr("checked", "checked");
            angular.element('input[name="optionsEnable"][value="' + largeLoad.enabled + '"]').attr("checked", "checked");
            angular.element('input[name="optionsRoll"][value="' + largeLoad.authorities[0].name + '"]').attr("checked", "checked");
            //alert(JSON.stringify(largeLoad));
        });

    });


    angular.element("#memberadd").bind('click', function (event) {
        var data = {};
        data.userno = angular.element("#userno").val();
        data.username = angular.element("#username").val();
        data.fullname = angular.element("#fullname").val();

        var pwd = angular.element("#password").val();
        if(pwd != ""){
            data.password = pwd;
        }

        data.email = angular.element("#email").val();
        data.deparmentId = $('input[name="optionsDepartment"]:checked').val();
        data.enabled = $('input[name="optionsEnable"]:checked').val();
        data.lastPasswordResetDate = '2016-01-01';
        var authorities = [];
        authorities[0] ={};
        authorities[0].name = $('input[name="optionsRoll"]:checked').val();
        data.authorities = authorities;
        alert(JSON.stringify(data));

        if($stateParams.url == null){
            $http.post('users',data,{ headers : {'Authorization' : localStorage.getItem("jwtToken") }}).success(function (largeLoad) {
                alert("已保存");
                $state.go('app.member');
            });
        }else{
            $http.patch($stateParams.url,data,{ headers : {'Authorization' : localStorage.getItem("jwtToken") }}).success(function (largeLoad) {
                alert("已保存");
                $state.go('app.member');
            });

        }

    });

  }])
 ;