app.controller('page31C', ["$rootScope", "$scope", "$location", "$anchorScroll", "$http", function ($rootScope, $scope, $location, $anchorScroll, $http) {
    $rootScope.getAllFalse();
    $rootScope.activeThirtyOne = true;
    $rootScope.navPartThree = true;
    $rootScope.isScreenPage = true;
    //锚点的跳转 回到导航标题处
    $scope.getNav = function () {
        $location.hash('nav-bottom13');
        $anchorScroll();
    };
    //-------------微信扫码进群---------------
    $scope.sendObj = new FormData();
    $scope.sendObj.append('file', '');
    $scope.picArr = [];
    $scope.sendAll = function () {
        for (var i = 0, arr = []; i < $('.new-wx-equip-input13').length; i++) {
            if ($('.new-wx-equip-input13').eq(i).prop('checked')) {
                arr.push($('.new-wx-equip-input13').eq(i).parent().next().attr('title'));
            }
        }
        if (arr == 0) {
            alert('请勾选需要操作的设备！');
        } else {
            var jsonOne={'devices':arr}
            $scope.sendObj.append('json', JSON.stringify(jsonOne));
            $http({
                method: 'POST',
                url: $rootScope.link + "/wechatPlus/addgroupfrompicture",
                data: $scope.sendObj,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (response) {
                //上传成功的操作
                if (response.code == 200) {
                    alert('任务添加成功!');
                    $location.hash('page-top13');
                    $anchorScroll();
                    location.reload();
                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
                        if (data.code == 200) {
                            $rootScope.taskList = data.data;
                            $rootScope.taskAll = true;
                            $rootScope.taskDoing = false;
                            $rootScope.taskWait = false;
                            $rootScope.taskDown = false;
                            $rootScope.newBell = true;
                        } else {
                            alert(data.msg);
                        }
                    });
                } else {
                    alert(response.msg);
                    location.reload();
                }
            });
        }

    };
}]);
