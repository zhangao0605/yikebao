app.controller('page20C',["$rootScope","$scope","$http",function ($rootScope, $scope, $http) {
    $rootScope.getAllFalse();
    $rootScope.activeTwenty = true;
    $rootScope.navPartSix = true;
    $rootScope.isScreenPage = true;

    $scope.ifShow = function (type) {
        if (type == 2) {
            return true;
        }
    };
    $scope.assState = function (s) {
        var a;
        if (s == 0) {
            a = '正在执行';
        } else if (s == 1) {
            a = '等待执行';
        } else if (s == 2) {
            a = '执行完成';
        }
        return a;
    };
    $scope.isDisabledOne = function (s) {
        if (s != 1) {
            return true;
        }
    };
    $scope.isDisabledTwo = function (s) {
        if (s != 0) {
            return true;
        }
    };
    $scope.isDisabledThree = function (s) {
        if (s != 3) {
            return true;
        }
    };
    $scope.isBlandOne = function (s) {
        if (s != 1) {
            return 'on';
        }
    };
    $scope.isBlandTwo = function (s) {
        if (s != 0) {
            return 'on';
        }
    };
    $scope.isBlandThree = function (s) {
        if (s != 3) {
            return 'on';
        }
    };
    $http.get($rootScope.link + '/remote/getTask?pageNo=1&pageSize=2').success(function (data) {
        if (data.code == 200) {
            $scope.assList = data.data.content;
            $('#pages20').Page({
                totalPages: data.data.totalPages,//分页总数
                liNums: 5,//分页的数字按钮数(建议取奇数)
                activeClass: 'activP', //active 类样式定义
                callBack: function (page) {
                    $http.get($rootScope.link + '/remote/getTask?pageNo=' + page + '&pageSize=2').success(function (data) {
                        $scope.assList = data.data.content;
                    })
                }
            });
        }else {
            alert(data.msg);
        }
    });

    $scope.assChecked = function (str) {
        if (JSON.parse(str).clear == 1) {
            return true;
        }
    };
    $scope.assValue = function (str) {
        return JSON.parse(str).msg;
    };
    $scope.assInterval = function (str) {
        return JSON.parse(str).interval;
    };
    $scope.assRadioOne = function (str) {
        if (JSON.parse(str).strategy == 1) {
            return true;
        }
    };
    $scope.assRadioTwo = function (str) {
        if (JSON.parse(str).strategy == 0) {
            return true;
        }
    };
    $scope.assCount = function (str) {
        return JSON.parse(str).count;
    };
}]);
