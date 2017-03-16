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
                $http.get('contracts',{ headers : {'Authorization' : localStorage.getItem("jwtToken") }}).success(function (largeLoad) {
                    data = largeLoad._embedded.contracts.filter(function(item) {
                        return JSON.stringify(item).toLowerCase().indexOf(ft) != -1;
                    });
                    $scope.setPagingData(data,page,pageSize);
                });
            } else {
                $http.get('contracts',{ headers : {'Authorization' : localStorage.getItem("jwtToken") }}).success(function (largeLoad) {
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


    angular.element("#statechangetrue").bind('click', function (event) {
        $.each($scope.mySelections,function(idx, obj) {
            var data = {};
            data.enabled = 1;
            $http.patch(obj._links.self.href,data,{ headers : {'Authorization' : localStorage.getItem("jwtToken") }}).success(function (largeLoad) {
                alert("已更新");
                $state.go('app.contract',{},{reload:true});
            });
        });
    });
    angular.element("#statechangefalse").bind('click', function (event) {
        $.each($scope.mySelections,function(idx, obj) {
            var data = {};
            data.enabled = 0;
            $http.patch(obj._links.self.href,data,{ headers : {'Authorization' : localStorage.getItem("jwtToken") }}).success(function (largeLoad) {
                alert("已更新");
                $state.go('app.contract',{},{reload:true});
            });
        });
    });

    angular.element("#contractview").bind('click', function (event) {
        if($scope.mySelections.length == 1){
            $no = $scope.mySelections[0].contractno;
            //$state.go('app.contract_detail',{no:$no});
            window.open("http://" + window.location.host + "/pdf/web/viewer.html?" + $no);
        }else{
            alert("请选择一个合同进行查看。");
        }
    });

}]);