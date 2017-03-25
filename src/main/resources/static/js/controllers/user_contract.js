app.controller('GridUserContractCtrl', ['$scope', '$http', '$state', function($scope, $http, $state) {
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
                $http.get('contracts/search/findByCreatorname?name='+$scope.username,{ headers : {'Authorization' : localStorage.getItem("jwtToken") }}).success(function (largeLoad) {
                    data = largeLoad._embedded.contracts.filter(function(item) {
                        return JSON.stringify(item).toLowerCase().indexOf(ft) != -1;
                    });
                    $scope.setPagingData(data,page,pageSize);
                });
            } else {
                $http.get('contracts/search/findByCreatorname?name='+$scope.username,{ headers : {'Authorization' : localStorage.getItem("jwtToken") }}).success(function (largeLoad) {
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
        totalServerItems: 'totalServerItems',
        pagingOptions: $scope.pagingOptions,
        filterOptions: $scope.filterOptions,
        selectedItems: $scope.mySelections,
        columnDefs: [{field: 'contractno', displayName: '合同编号'},
                     {field: 'contractname', displayName:'合同名称'},
                     {field: 'departmentname', displayName:'所属部门'},
                     {field: 'creatorname', displayName:'经办人'},
                     {field: 'creattime', displayName:'创建时间'},
                     {field: 'enabled', displayName:'允许编辑'},
                     {field: '_links', displayName:'链接', visible:false}]
    };
    angular.element("#deletebutton").bind('click', function (event) {
        $.each($scope.mySelections,function(idx, obj) {
            $http.delete(obj._links.self.href,{ headers : {'Authorization' : localStorage.getItem("jwtToken") }}).success(function (largeLoad) {
                var str = obj._links.self.href;
                var contractid = str.split("/")[str.split("/").length - 1];
                $http.get("contractcontents/search/findByContractid?id="+contractid,{ headers : {'Authorization' : localStorage.getItem("jwtToken") }}).success(function (largeLoad) {
                    $.each(largeLoad._embedded.contractcontents,function(idx, obj) {
                        $http.delete(obj._links.self.href,{ headers : {'Authorization' : localStorage.getItem("jwtToken") }}).success(function (largeLoad) {

                        });
                    });
                });
            });
        });
        alert("已删除");
        $state.go('app.user_contract',{},{reload:true});
        //alert("666");

    });

    angular.element("#editbutton").bind('click', function (event) {
        if($scope.mySelections.length == 1){
            $url = $scope.mySelections[0]._links.self.href;
            $state.go('app.user_contract_edit',{url:$url});
        }else{
            alert("请选择一个合同进行编辑。");
        }
    });


}]);