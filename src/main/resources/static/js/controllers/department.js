app.controller('GridDepparmentCtrl', ['$scope', '$http', '$state', function($scope, $http, $state) {
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
                $http.get('departments?page=0&size=100',{ headers : {'Authorization' : localStorage.getItem("jwtToken") }}).success(function (largeLoad) {
                    data = largeLoad._embedded.departments.filter(function(item) {
                        return JSON.stringify(item).toLowerCase().indexOf(ft) != -1;
                    });
                    $scope.setPagingData(data,page,pageSize);
                });
            } else {
                $http.get('departments?page=0&size=100',{ headers : {'Authorization' : localStorage.getItem("jwtToken") }}).success(function (largeLoad) {
                    $scope.setPagingData(largeLoad._embedded.departments,page,pageSize);
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
        columnDefs: [{field: 'departmentname', displayName: '部门名称'},
                     {field: 'departmentshortname', displayName:'部门编号'},
                     {field: '_links', displayName:'链接', visible:false}]
    };

    angular.element("#departmentdelete").bind('click', function (event) {
        $.each($scope.mySelections,function(idx, obj) {
            $http.delete(obj._links.self.href,{ headers : {'Authorization' : localStorage.getItem("jwtToken") }}).success(function (largeLoad) {
                alert("已删除");
                $state.go('app.deparment',{},{reload:true});
            });
        });
    });

    angular.element("#departmentedit").bind('click', function (event) {
        if($scope.mySelections.length == 1){
            $deparmenturl = $scope.mySelections[0]._links.self.href;
            $state.go('app.deparment_edit',{url:$deparmenturl});
        }else{
            alert("请选择一个部门进行编辑。");
        }
    });

}]);