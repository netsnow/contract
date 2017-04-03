'use strict';

function padNumber(num, fill) {
    //改自：http://blog.csdn.net/aimingoo/article/details/4492592
    var len = ('' + num).length;
    return (Array(
        fill > len ? fill - len + 1 || 0 : 0
    ).join(0) + num);
}
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
        var templateid = angular.element("#template").val();
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
        var file = document.querySelector('input[type=file]').files[0];
        var fileName = angular.element("#contractfile").val();



        data.contractname = angular.element("#contractname").val();
        data.otherpartyname = angular.element("#otherpartyname").val();
        data.departmentname = $scope.departmentname;
        data.creatorname = $scope.username;
        var d = new Date();
        data.creattime = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
        data.enabled = 1;

        if(file){
            var timestamp = (new Date()).valueOf();
            var prefix = fileName.substring(fileName.lastIndexOf('.') + 1);
            data.attachment = timestamp + "."+ prefix;
            alert(data.attachment);
        }

        var templateid = angular.element("#template").val();
        var templatename = angular.element("#template").find("option:selected").text();


        if($stateParams.url == null){
            data.contractno = "TD" + $scope.departmentshortname + d.getFullYear()+padNumber((d.getMonth()+1),2)+padNumber(d.getDate(),2);
            $http.get('numseqget/'+ data.contractno,data,{ headers : {'Authorization' : localStorage.getItem("jwtToken") }}).success(function (largeLoad) {
                data.contractno = data.contractno + padNumber(largeLoad,3);

                $http.post('contracts',data,{ headers : {'Authorization' : localStorage.getItem("jwtToken") }}).success(function (largeLoad) {
                    var str = largeLoad._links.self.href;
                    var contractid = str.split("/")[str.split("/").length - 1];
                    var pdffield ={};

                    $.each($scope.inputename,function(idx, obj) {
                        //contractcontent value submit
                        var contentdata = {};
                        contentdata.inputename = obj;
                        contentdata.inputname = $scope.inputname[idx];
                        contentdata.inputtype = "text";
                        contentdata.inputvalue = angular.element("#"+obj).val();
                        contentdata.contractid = contractid;
                        contentdata.orderid = idx;
                        $http.post('contractcontents',contentdata,{ headers : {'Authorization' : localStorage.getItem("jwtToken") }}).success(function (largeLoad) {
                        });
                        //contract pdf value save
                        pdffield[obj] = contentdata.inputvalue;
                        //alert(JSON.stringify(contentdata));
                    });
                    //contract pdf create
                    $http.post('contractpdf/'+contractid+'&'+templateid,pdffield,{ headers : {'Authorization' : localStorage.getItem("jwtToken") }}).success(function (largeLoad) {
                    });
                    //approve pdf create
                    var approvepdffield ={};
                    approvepdffield.contractname = data.contractname;
                    approvepdffield.contracttype = templatename;
                    approvepdffield.oppositeside = data.otherpartyname;
                    approvepdffield.contractno = data.contractno;
                    //alert(JSON.stringify(approvepdffield));
                    $http.post('approvepdf/'+contractid,approvepdffield,{ headers : {'Authorization' : localStorage.getItem("jwtToken") }}).success(function (largeLoad) {
                    });

                    //file upload
                    var fd = new FormData();

                    if(file){
                        fd.append('file', file);
                        fd.append('filename', data.attachment);
                        $http({
                            method:'POST',
                            url:"contractfileupload",
                            data: fd,
                            headers: {'Authorization' : localStorage.getItem("jwtToken"),'Content-Type':undefined},
                            transformRequest: angular.identity
                        })
                        .success( function ( response )
                        {
                            //上传成功的操作
                            alert("uplaod success");
                        });
                    }



                    //$http.post('contractfileupload',file,{ headers : {'Authorization' : localStorage.getItem("jwtToken") }}).success(function (largeLoad) {
                    //});
                    alert("已保存");
                    $state.go('app.user_contract');
                });
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