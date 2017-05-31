app.controller('GridMemberCtrl', ['$scope', '$http', '$state', function($scope, $http, $state) {
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
                $http.get('users?page=0&size=1000',{ headers : {'Authorization' : localStorage.getItem("jwtToken") }}).success(function (largeLoad) {
                    data = largeLoad._embedded.users.filter(function(item) {
                        return JSON.stringify(item).toLowerCase().indexOf(ft) != -1;
                    });
                    $scope.setPagingData(data,page,pageSize);
                });            
            } else {
                $http.get('users?page=0&size=1000',{ headers : {'Authorization' : localStorage.getItem("jwtToken") }}).success(function (largeLoad) {
                    $scope.setPagingData(largeLoad._embedded.users,page,pageSize);
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
        columnDefs: [{field: 'userno', displayName: '编号'},
                     {field: 'username', displayName:'用户名'},
                     {field: 'fullname', displayName:'姓名'},
                     {field: 'email', displayName:'邮件'},
                     {field: 'enabled', displayName:'有效'},
                     {field: '_links', displayName:'链接', visible:false}]
    };

    angular.element("#memberdelete").bind('click', function (event) {
        $.each($scope.mySelections,function(idx, obj) {
            $http.delete(obj._links.self.href,{ headers : {'Authorization' : localStorage.getItem("jwtToken") }}).success(function (largeLoad) {
                alert("已删除");
                $state.go('app.member',{},{reload:true});
            });
        });
    });

    angular.element("#memberedit").bind('click', function (event) {
        if($scope.mySelections.length == 1){
            $memberurl = $scope.mySelections[0]._links.self.href;
            $state.go('app.member_edit',{url:$memberurl});
        }else{
            alert("请选择一个成员进行编辑。");
        }
    });

}]);