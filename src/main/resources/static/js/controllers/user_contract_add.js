'use strict';
//zero fill
function padNumber(num, fill) {
    //改自：http://blog.csdn.net/aimingoo/article/details/4492592
    var len = ('' + num).length;
    return (Array(
        fill > len ? fill - len + 1 || 0 : 0
    ).join(0) + num);
}
//big money change
function numToCny(num){    
  var strOutput = "";  
  var strUnit = '仟佰拾亿仟佰拾万仟佰拾元角分';  
  num += "00";  
  var intPos = num.indexOf('.');  
  if (intPos >= 0)  
    num = num.substring(0, intPos) + num.substr(intPos + 1, 2);  
  strUnit = strUnit.substr(strUnit.length - num.length);  
  for (var i=0; i < num.length; i++)  
    strOutput += '零壹贰叁肆伍陆柒捌玖'.substr(num.substr(i,1),1) + strUnit.substr(i,1);  
    return strOutput.replace(/零角零分$/, '整').replace(/零[仟佰拾]/g, '零').replace(/零{2,}/g, '零').replace(/零([亿|万])/g, '$1').replace(/零+元/, '元').replace(/亿零{0,3}万/, '亿').replace(/^元/, "零元");  
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
        angular.element("#company").trigger("chosen:updated");
    });

    //edit init
    if($stateParams.url){
        //alert($stateParams.url);
        angular.element("#templateselect").hide();
        angular.element("#companyselect").hide();
        //angular.element("#contractname").attr("disabled","disabled");
        //angular.element("#otherpartyname").attr("disabled","disabled");
        angular.element("#contractcontent").show();
        angular.element("#textinput").hide();
        $http.get($stateParams.url,{ headers : {'Authorization' : localStorage.getItem("jwtToken") }}).success(function (largeLoad) {
            //alert(largeLoad.departmentname);
            var str = largeLoad._links.self.href;
            var contractid = str.split("/")[str.split("/").length - 1];
            $scope.templateid = largeLoad.templateid;

            angular.element("#contractno").val(largeLoad.contractno);
            angular.element("#contractname").val(largeLoad.contractname);
            angular.element("#otherpartyname").val(largeLoad.otherpartyname);
            //find contractcontent
            $http.get("contractcontents/search/findByContractid?id="+contractid,{ headers : {'Authorization' : localStorage.getItem("jwtToken") }}).success(function (largeLoad) {
                var contractcontentid = [];
                var inputename = [];
                var inputname = [];
                var inputtype = [];
                $.each(largeLoad._embedded.contractcontents,function(idx, obj) {
                    var str1 = obj._links.self.href;
                    contractcontentid[idx] = str1.split("/")[str1.split("/").length - 1];

                    if(obj.inputtype=="text"){
                        var node = angular.element("#textinput").clone(true);
                        angular.element(node).find("input").val(obj.inputvalue);
                        angular.element(node).find("input").attr("id",contractcontentid[idx]);
                    }else if(obj.inputtype=="rtf"){
                        var node = angular.element("#rtfinput").clone(true);
                        angular.element(node).find("rtfinput").html(obj.inputvalue);
                        angular.element(node).find("rtfinput").attr("id",contractcontentid[idx]);
                    }
                    angular.element(node).show();
                    angular.element(node).attr("id",idx);
                    angular.element(node).find("label").text(obj.inputname);
                    angular.element("#dyncontent").append(node);
                    angular.element("#textinput").hide();
                    angular.element("#rtfinput").hide();

                    inputename[idx] = obj.inputename;
                    inputname[idx] = obj.inputname;
                    inputtype[idx] = obj.inputtype;

                });
                $scope.contractcontentid = contractcontentid;
                $scope.inputename = inputename;
                $scope.inputname = inputname;
                $scope.inputtype = inputtype;
            });
            //alert(JSON.stringify(largeLoad));
        });

    }

    //template selet button event
    angular.element("#template").bind('change', function (event) {
        var templateid = angular.element("#template").val();
        //alert(templateid+":"+angular.element("#template").text());
        if(templateid !=""){

            angular.element("#contractcontent").show();
            $http.get("templates/"+templateid+"/templateDefines",{ headers : {'Authorization' : localStorage.getItem("jwtToken") }}).success(function (largeLoad) {
                angular.element("#dyncontent").children().remove();
                var inputname=[];
                var inputename=[];
                var inputtype=[];
                $.each(largeLoad._embedded.templatedefines,function(idx, obj) {
                    //alert(obj.inputname);
                    if(obj.inputtype=="text"){
                        var node = angular.element("#textinput").clone(true);
                        angular.element(node).find("input").attr("id",obj.inputename);
                    }else if(obj.inputtype=="rtf"){
                        var node = angular.element("#rtfinput").clone(true);
                        angular.element(node).find("rtfinput").attr("id",obj.inputename);
                    }
                    angular.element(node).show();
                    angular.element(node).attr("id",idx);
                    angular.element(node).find("label").text(obj.inputname);
                    angular.element("#dyncontent").append(node);
                    angular.element("#textinput").hide();
                    angular.element("#rtfinput").hide();
                    inputname[idx] = obj.inputname;
                    inputename[idx] = obj.inputename;
                    inputtype[idx] = obj.inputtype;
                });
                $scope.inputname = inputname;
                $scope.inputename = inputename;
                $scope.inputtype = inputtype;
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

        // page value get
        var data = {};
        var file = document.querySelector('input[type=file]').files[0];
        var fileName = angular.element("#contractfile").val();
        var templateid = angular.element("#template").val();
        var templatename = angular.element("#template").find("option:selected").text();
        var firstpartyshortname = angular.element("#company").val();

        // contract field set (add and edit)
        data.contractname = angular.element("#contractname").val();
        data.otherpartyname = angular.element("#otherpartyname").val();
        data.departmentname = $scope.departmentname;
        data.creatorname = $scope.username;
        data.creatorfullname = $scope.fullname;
        var d = new Date();
        data.creattime = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
        data.enabled = "编辑中";
        data.templateid = templateid;

        if(file){
            var timestamp = (new Date()).valueOf();
            var prefix = fileName.substring(fileName.lastIndexOf('.') + 1);
            data.attachment = timestamp + "."+ prefix;
            //alert(data.attachment);
        }
        if($stateParams.url == null){
            //contract add
            data.contractno = firstpartyshortname + $scope.departmentshortname + String(d.getFullYear()).substring(2) + padNumber((d.getMonth()+1),2) + padNumber(d.getDate(),2);
            $http.get('numseqget/'+ data.contractno,data,{ headers : {'Authorization' : localStorage.getItem("jwtToken") }}).success(function (largeLoad) {
                data.contractno = data.contractno + padNumber(largeLoad,3);

                $http.post('contracts',data,{ headers : {'Authorization' : localStorage.getItem("jwtToken") }}).success(function (largeLoad) {
                    var str = largeLoad._links.self.href;
                    var contractid = str.split("/")[str.split("/").length - 1];
                    var pdffield ={};
                    var pdffielddetail = "";

                    $.each($scope.inputename,function(idx, obj) {
                        //contractcontent value submit
                        var contentdata = {};
                        contentdata.inputename = obj;
                        contentdata.inputname = $scope.inputname[idx];
                        contentdata.inputtype = $scope.inputtype[idx];
                        if(contentdata.inputtype == "text"){
                            contentdata.inputvalue = angular.element("#"+obj).val();
                        }else if(contentdata.inputtype == "rtf"){
                            contentdata.inputvalue = angular.element("#"+obj).html();
                        }
                        contentdata.contractid = contractid;
                        contentdata.orderid = idx;
                        $http.post('contractcontents',contentdata,{ headers : {'Authorization' : localStorage.getItem("jwtToken") }}).success(function (largeLoad) {
                        });
                        //contract pdf value save
                        pdffield[obj] = contentdata.inputvalue;
                        pdffielddetail = pdffielddetail + $scope.inputname[idx] + ":" + contentdata.inputvalue + "\n";
                        //alert(JSON.stringify(contentdata));
                    });
                    pdffield["moneybig"] = numToCny(pdffield["moneysmall"]);
                    pdffield['status'] = "待审核";
                    //contract pdf create
                    $http.post('contractpdf/'+contractid+'&'+templateid,pdffield,{ headers : {'Authorization' : localStorage.getItem("jwtToken") }}).success(function (largeLoad) {
                    });
                    //approve pdf create
                    var approvepdffield ={};
                    approvepdffield.contractname = data.contractname;
                    approvepdffield.contracttype = templatename;
                    approvepdffield.oppositeside = data.otherpartyname;
                    approvepdffield.contractno = data.contractno;
                    approvepdffield.contractdetail = pdffielddetail;
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
                            //alert("uplaod success");
                        });
                    }

                    //$http.post('contractfileupload',file,{ headers : {'Authorization' : localStorage.getItem("jwtToken") }}).success(function (largeLoad) {
                    //});
                    alert("已保存");
                    $state.go('app.user_contract');
                });
            });
        }else{
            //contract edit
            //alert($scope.templateid);
            data.contractno = angular.element("#contractno").val();
            data.templateid = $scope.templateid;
            $http.patch($stateParams.url,data,{ headers : {'Authorization' : localStorage.getItem("jwtToken") }}).success(function (largeLoad) {
                var str = $stateParams.url;
                var contractid = str.split("/")[str.split("/").length - 1];
                var pdffield ={};
                var pdffielddetail = "";

                $.each($scope.contractcontentid,function(idx, obj) {
                    var contentdata = {};
                    //contentdata.inputvalue = angular.element("#"+obj).val();
                    contentdata.inputtype = $scope.inputtype[idx];
                    if(contentdata.inputtype == "text"){
                        contentdata.inputvalue = angular.element("#"+obj).val();
                    }else if(contentdata.inputtype == "rtf"){
                        contentdata.inputvalue = angular.element("#"+obj).html();
                    }
                    $http.patch('contractcontents/'+obj,contentdata,{ headers : {'Authorization' : localStorage.getItem("jwtToken") }}).success(function (largeLoad) {
                    });
                    pdffield[$scope.inputename[idx]] = contentdata.inputvalue;
                    pdffielddetail = pdffielddetail + $scope.inputname[idx] + ":" + contentdata.inputvalue + "\n";
                });
                pdffield["moneybig"] = numToCny(pdffield["moneysmall"]);
                pdffield['status'] = "待审核";
                //contract pdf create
                $http.post('contractpdf/'+contractid+'&'+data.templateid,pdffield,{ headers : {'Authorization' : localStorage.getItem("jwtToken") }}).success(function (largeLoad) {
                });

                //approve pdf create
                var approvepdffield ={};
                approvepdffield.contractname = data.contractname;
                //approvepdffield.contracttype = $scope.templatename;
                approvepdffield.oppositeside = data.otherpartyname;
                approvepdffield.contractno = data.contractno;
                approvepdffield.contractdetail = pdffielddetail;
                //alert(JSON.stringify(approvepdffield));
                $http.get('templates/'+$scope.templateid,{ headers : {'Authorization' : localStorage.getItem("jwtToken") }}).success(function (largeLoad) {
                    approvepdffield.contracttype = largeLoad.templatename;
                    $http.post('approvepdf/'+contractid,approvepdffield,{ headers : {'Authorization' : localStorage.getItem("jwtToken") }}).success(function (largeLoad) {
                    });
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
                        //alert("uplaod success");
                    });
                }
                alert("已修改！");
                $state.go('app.user_contract');

            });
        }


    });

    angular.element("#bigmoneychange").bind('click', function (event) {
        $.each(document.getElementsByName("moneybig"),function(idx, obj) {
            var money = obj.value;
            if(!isNaN(money)){
                angular.element("#moneybig").val(numToCny(money));
            }

        });

    });

    angular.element("#submitbutton").bind('click', function (event) {
        if($stateParams.url == null){
            alert("请先保存！");
        }else{
            var data = {};
            data.enabled = "待审核";
            $http.patch($stateParams.url,data,{ headers : {'Authorization' : localStorage.getItem("jwtToken") }}).success(function (largeLoad) {
                alert("已提交！");
                $state.go('app.user_contract');
            });


        }

    });

  }])
 ;