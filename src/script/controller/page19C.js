app.controller('page19C',["$rootScope","$scope","$http",function ($rootScope, $scope, $http) {
    $rootScope.getAllFalse();
    $rootScope.activeNineteen = true;
    $rootScope.navPartSix = true;
    $rootScope.isScreenPage = true;

    $http.get($rootScope.link + '/task/getGroupTaskInitPage?status=-1&pageNo=1&pageSize=17').success(function (data) {
        $scope.TaskAllList = data.data.content;
        $('#pages19').Page({
            totalPages: data.data.totalPages,//分页总数
            liNums: 5,//分页的数字按钮数(建议取奇数)
            activeClass: 'activP', //active 类样式定义
            callBack: function (page) {
                $http.get($rootScope.link + '/task/getGroupTaskInitPage?status=-1&pageNo=' + page + '&pageSize=17').success(function (data) {
                    $scope.TaskAllList = data.data.content;
                })
            }
        });
    });
    $scope.isShow = function (s) {
        if (s == 3) {
            return true;
        }
    };
    $scope.taskOut = false;
    $scope.checkWrong = function (id) {
        $http.get($rootScope.link + '/task/getErrorTask?taskId=' + id).success(function (data) {
            if (data.code == 200) {
                $scope.taskOut = true;
                $scope.taskList = data.data;
            } else {
                alert(data.msg);
            }

        });
    };
    $scope.getTaskBack = function () {
        $scope.taskOut = false;
    };
}]);
