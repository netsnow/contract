app.controller('GridContractCtrl', ['$scope', '$http', '$state', function($scope, $http, $state) {
    $scope.filterOptions = {
        filterText: "",
        useExternalFilter: true
    }; 
    $scope.totalServerItems = 0;
    $scope.pagingOptions = {
        pageSizes: [20, 50, 100],
        pageSize: 20,
        currentPage: 1
    };  
    $scope.setPagingData = function(data, page, pageSize){  
        var pagedData = data.slice((page - 1) * pageSize, page * pageSize);
        $scope.myData = pagedData;
        $scope.totalServerItems = data.length;
        if (!$scope.$$phase) {
            $scope.$apply();
        }
    };
    $scope.getPagedDataAsync = function (pageSize, page, searchText) {
        setTimeout(function () {
            var data;
            if (searchText) {
                var ft = searchText.toLowerCase();
                $http.get('contracts?page=0&size=100000',{ headers : {'Authorization' : localStorage.getItem("jwtToken") }}).success(function (largeLoad) {
                    data = largeLoad._embedded.contracts.filter(function(item) {
                        return JSON.stringify(item).toLowerCase().indexOf(ft) != -1;
                    });
                    $scope.setPagingData(data,page,pageSize);
                });
            } else {
                $http.get('contracts?page=0&size=100000',{ headers : {'Authorization' : localStorage.getItem("jwtToken") }}).success(function (largeLoad) {
                    $scope.setPagingData(largeLoad._embedded.contracts,page,pageSize);
                });
            }
        }, 100);
    };

    $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage);

    $scope.$watch('pagingOptions', function (newVal, oldVal) {
        if (newVal !== oldVal && newVal.currentPage !== oldVal.currentPage) {
          $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
        }
    }, true);
    $scope.$watch('filterOptions', function (newVal, oldVal) {
        if (newVal !== oldVal) {
          $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
        }
    }, true);

    $scope.mySelections = [];
    $scope.gridOptions = {
        data: 'myData',
        enablePaging: true,
        showFooter: true,
        showSelectionCheckbox: true,
        enableColumnResize:true,
        enableColumnReordering:true,
        i18n:'zh-cn',
        totalServerItems: 'totalServerItems',
        pagingOptions: $scope.pagingOptions,
        filterOptions: $scope.filterOptions,
        selectedItems: $scope.mySelections,
        columnDefs: [{field: 'contractno', displayName: '合同编号',width: 120},
                     {field: 'contractname', displayName:'合同名称',width: 420},
                     {field: 'otherpartyname', displayName:'合同对方名称'},
                     {field: 'departmentname', displayName:'所属部门'},
                     {field: 'creatorfullname', displayName:'经办人'},
                     {field: 'creattime', displayName:'创建时间'},
                     {field: 'enabled', displayName:'状态'},
                     {field: 'attachment', displayName:'附件', visible:false},
                     {field: 'templateid', displayName:'模板', visible:false},
                     {field: '_links', displayName:'链接', visible:false}]
    };


    angular.element("#statechangetrue").bind('click', function (event) {
        var doflg = true;
        $.each($scope.mySelections,function(idx, obj) {
            if(obj.enabled == "编辑中" || obj.enabled == "已审核"){
                doflg = false;
            }
        });
        if(doflg){
            $.each($scope.mySelections,function(idx, obj) {
                var data = {};
                data.enabled = "审核驳回";
                $http.patch(obj._links.self.href,data,{ headers : {'Authorization' : localStorage.getItem("jwtToken") }}).success(function (largeLoad) {
                    alert("已驳回");
                    $state.go('app.contract',{},{reload:true});
                });
            });
        }else{
            alert("编辑中合同的无法驳回");
        }
    });
    angular.element("#statechangefalse").bind('click', function (event) {
        var doflg = true;
        $.each($scope.mySelections,function(idx, obj) {
            if(obj.enabled == "编辑中"||obj.enabled == "审核驳回"){
                doflg = false;
            }
        });
        if(doflg){
            $.each($scope.mySelections,function(idx, obj) {
                var str = obj._links.self.href;
                var contractid = str.split("/")[str.split("/").length - 1];
                var pdffield ={};
                pdffield['status'] = " ";
                $http.get("contractcontents/search/findByContractid?id="+contractid,{ headers : {'Authorization' : localStorage.getItem("jwtToken") }})
                .success(function (largeLoad) {
                    $.each(largeLoad._embedded.contractcontents,function(idx2, obj2) {
                        pdffield[obj2.inputename] = obj2.inputvalue;
                    });
                    $http.post('contractpdf/'+contractid+'&'+obj.templateid,pdffield,{ headers : {'Authorization' : localStorage.getItem("jwtToken") }}).success(function (largeLoad) {
                    });
                    var data = {};
                    data.enabled = "已审核";
                    $http.patch(obj._links.self.href,data,{ headers : {'Authorization' : localStorage.getItem("jwtToken") }}).success(function (largeLoad) {
                        alert("已审核");
                        $state.go('app.contract',{},{reload:true});
                    });
                });
            });
        }else{
            alert("编辑中及审核驳回的合同无法审批");
        }
    });

    angular.element("#contracttext").bind('click', function (event) {
        if($scope.mySelections.length == 1){
            var str = $scope.mySelections[0]._links.self.href;
            var contractid = str.split("/")[str.split("/").length - 1];
            //$no = $scope.mySelections[0].contractno;
            //$state.go('app.contract_detail',{no:$no});
            //window.open("http://" + window.location.host + "/pdf/web/viewer.html?C" + contractid);
            window.open("http://" + window.location.host + "/pdf/web/contractpdf/C" + contractid + ".pdf");
        }else{
            alert("请选择一个合同进行查看。");
        }
    });
    angular.element("#contractapprove").bind('click', function (event) {
        if($scope.mySelections.length == 1){
            var str = $scope.mySelections[0]._links.self.href;
            var contractid = str.split("/")[str.split("/").length - 1];
            //$no = $scope.mySelections[0].contractno;
            //$state.go('app.contract_detail',{no:$no});
            //window.open("http://" + window.location.host + "/pdf/web/viewer.html?A" + contractid);
            window.open("http://" + window.location.host + "/pdf/web/contractpdf/A" + contractid + ".pdf");
        }else{
            alert("请选择一个合同审批单进行查看。");
        }
    });
    angular.element("#contractattachment").bind('click', function (event) {
        if($scope.mySelections.length == 1){
            $no = $scope.mySelections[0].contractno;
            $filename = $scope.mySelections[0].attachment;
            //$state.go('app.contract_detail',{no:$no});
            window.open("http://" + window.location.host + "/tmpdata/attachment/" + $filename);
        }else{
            alert("请选择一个合同附件进行下载。");
        }
    });
    angular.element("#searchbtn").bind('click', function (event) {
        $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage,angular.element("#searchtext").val());
    });
    angular.element("#contracttext2").bind('click', function (event) {
        $("#contracttext").click();
    });
    angular.element("#contractapprove2").bind('click', function (event) {
        $("#contractapprove").click();
    });
    angular.element("#contractattachment2").bind('click', function (event) {
        $("#contractattachment").click();
    });
    angular.element("#statechangetrue2").bind('click', function (event) {
        $("#statechangetrue").click();
    });
    angular.element("#statechangefalse2").bind('click', function (event) {
        $("#statechangefalse").click();
    });
}]);