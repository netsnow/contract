'use strict';

/* Controllers */

  // Form controller
app.controller('FormUserContractCtrl', ['$scope','$http','$state','$stateParams', function($scope,$http,$state,$stateParams) {
    //init
    angular.element("#contractcontent").hide();
    $http.get("templates",{ headers : {'Authorization' : localStorage.getItem("jwtToken") }}).success(function (largeLoad) {
        //alert("ok");
        $.each(largeLoad._embedded.templates,function(idx, obj) {
            var str = obj._links.self.href;
            var templateid = str.split("/")[str.split("/").length - 1];
            var templatetext = obj.templatetype + ":" + obj.templatename;
            angular.element("#template").append("<option value='"+templateid+"'>"+templatetext+"</option>");
        });
        angular.element("#template").trigger("chosen:updated");
    });

    //template selet button event
    angular.element("#template").bind('change', function (event) {
        var templateid = angular.element("#template").val()
        //alert(templateid+":"+angular.element("#template").text());
        if(templateid!=""){

            angular.element("#contractcontent").show();
            $http.get("templates/"+templateid+"/templateDefines",{ headers : {'Authorization' : localStorage.getItem("jwtToken") }}).success(function (largeLoad) {
                angular.element("#dyncontent").children().remove();
                $.each(largeLoad._embedded.templatedefines,function(idx, obj) {
                    //alert(obj.inputname);
                    var node = angular.element("#textinput").clone(true);
                    angular.element(node).show();
                    angular.element(node).attr("id",idx);
                    angular.element(node).find("label").text(obj.inputname);
                    angular.element(node).find("input").attr("id",obj.inputename);
                    angular.element("#dyncontent").append(node);
                    angular.element("#textinput").hide();
                });
            });
        }else{
            angular.element("#contractcontent").hide();
        }
    });

    angular.element("#previewbutton").bind('click', function (event) {
        alert("666");

    });

    angular.element("#savebutton").bind('click', function (event) {
        alert("666");
        //contract insert
        var data = {};
        data.contractno = angular.element("#contractno").val();
        data.contractname = angular.element("#contractname").val();
        data.departmentname = "aaaa";
        data.creatorname = $scope.username;
        data.creattime = '2016-01-01';
        data.enabled = 1;
        $http.post('contracts',data,{ headers : {'Authorization' : localStorage.getItem("jwtToken") }}).success(function (largeLoad) {
            alert("已保存");
            $state.go('app.user_contract');
        });

    });

    angular.element("#submitbutton").bind('click', function (event) {
        alert("666");

    });

  }])
 ;