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

    //edit init
    if($stateParams.url){
        //alert($stateParams.url);
        angular.element("#templateselect").hide();
        angular.element("#contractcontent").show();
        angular.element("#textinput").hide();
        $http.get($stateParams.url,{ headers : {'Authorization' : localStorage.getItem("jwtToken") }}).success(function (largeLoad) {
            //alert(largeLoad.departmentname);
            var str = largeLoad._links.self.href;
            var contractid = str.split("/")[str.split("/").length - 1];
            angular.element("#contractno").val(largeLoad.contractno);
            angular.element("#contractname").val(largeLoad.contractname);
            //find contractcontent
            $http.get("contractcontents/search/findByContractid?id="+contractid,{ headers : {'Authorization' : localStorage.getItem("jwtToken") }}).success(function (largeLoad) {
                var contractcontentid = [];
                $.each(largeLoad._embedded.contractcontents,function(idx, obj) {
                    var str1 = obj._links.self.href;
                    contractcontentid[idx] = str1.split("/")[str1.split("/").length - 1];

                    var node = angular.element("#textinput").clone(true);
                    angular.element(node).show();
                    angular.element(node).attr("id",idx);
                    angular.element(node).find("label").text(obj.inputname);
                    angular.element(node).find("input").attr("id",contractcontentid[idx]);
                    angular.element(node).find("input").val(obj.inputvalue);
                    angular.element("#dyncontent").append(node);
                    angular.element("#textinput").hide();
                });
                $scope.contractcontentid = contractcontentid;
            });
            //alert(JSON.stringify(largeLoad));
        });

    }

    //template selet button event
    angular.element("#template").bind('change', function (event) {
        var templateid = angular.element("#template").val()
        //alert(templateid+":"+angular.element("#template").text());
        if(templateid!=""){

            angular.element("#contractcontent").show();
            $http.get("templates/"+templateid+"/templateDefines",{ headers : {'Authorization' : localStorage.getItem("jwtToken") }}).success(function (largeLoad) {
                angular.element("#dyncontent").children().remove();
                var inputname=[];
                var inputename=[];
                $.each(largeLoad._embedded.templatedefines,function(idx, obj) {
                    //alert(obj.inputname);
                    var node = angular.element("#textinput").clone(true);
                    angular.element(node).show();
                    angular.element(node).attr("id",idx);
                    angular.element(node).find("label").text(obj.inputname);
                    angular.element(node).find("input").attr("id",obj.inputename);
                    angular.element("#dyncontent").append(node);
                    angular.element("#textinput").hide();
                    inputname[idx] = obj.inputname;
                    inputename[idx] = obj.inputename;
                    //alert($scope.inputename[idx]);
                });
                $scope.inputname = inputname;
                $scope.inputename = inputename;
            });
        }else{
            angular.element("#contractcontent").hide();
        }
    });

    angular.element("#previewbutton").bind('click', function (event) {
        var json = {};
        json["id"] = 15;
        json["name"] = "snow";
        alert(JSON.stringify(json));
        alert("666");

    });

    angular.element("#savebutton").bind('click', function (event) {
        //alert("666");
        //contract insert
        var data = {};
        data.contractno = angular.element("#contractno").val();
        data.contractname = angular.element("#contractname").val();
        data.departmentname = $scope.departmentname;
        data.creatorname = $scope.username;
        var d = new Date();
        data.creattime = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
        data.enabled = 1;
        if($stateParams.url == null){
            $http.post('contracts',data,{ headers : {'Authorization' : localStorage.getItem("jwtToken") }}).success(function (largeLoad) {
                var str = largeLoad._links.self.href;
                var contractid = str.split("/")[str.split("/").length - 1];
                var pdffield ={};
                $.each($scope.inputename,function(idx, obj) {
                    var contentdata = {};
                    contentdata.inputename = obj;
                    contentdata.inputname = $scope.inputname[idx];
                    contentdata.inputtype = "text";
                    contentdata.inputvalue = angular.element("#"+obj).val();
                    contentdata.contractid = contractid;
                    $http.post('contractcontents',contentdata,{ headers : {'Authorization' : localStorage.getItem("jwtToken") }}).success(function (largeLoad) {
                    });
                    pdffield[obj] = contentdata.inputvalue;
                    $http.post('contractpdf',pdffield,{ headers : {'Authorization' : localStorage.getItem("jwtToken") }}).success(function (largeLoad) {
                    });
                    //alert(JSON.stringify(contentdata));
                });
                alert("已保存");
                $state.go('app.user_contract');
            });
        }else{
            $.each($scope.contractcontentid,function(idx, obj) {
                var contentdata = {};
                contentdata.inputvalue = angular.element("#"+obj).val();
                $http.patch('contractcontents/'+obj,contentdata,{ headers : {'Authorization' : localStorage.getItem("jwtToken") }}).success(function (largeLoad) {
                });

            });
            alert("已修改！");
            $state.go('app.user_contract');
        }


    });

    angular.element("#submitbutton").bind('click', function (event) {
        alert("666");

    });

  }])
 ;