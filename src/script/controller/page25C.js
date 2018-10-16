app.controller('page25C',["$rootScope","$scope","$location","$anchorScroll","$http",function ($rootScope, $scope, $location, $anchorScroll, $http) {
    $rootScope.getAllFalse();
    $rootScope.activeTwentyfive = true;
    $rootScope.navPartFour = true;
    $rootScope.isScreenPage = false;
    //自动接受新朋友添加请求
    $scope.timeInterval = 5;
    $scope.sendAll = function () {
        for (var i = 0, arr = []; i < $('.new-wx-equip-input10').length; i++) {
            if ($('.new-wx-equip-input10').eq(i).prop('checked')) {
                arr.push($('.new-wx-equip-input10').eq(i).parent().next().attr('title'));
            }
        }
        if (arr.length == 0) {
            alert('请勾选需要操作的设备!');
        } else if ($scope.timeInterval == '') {
            alert('请填写时间间隔！');
        } else {
            var sendObj = new FormData();
            sendObj.append('devices', JSON.stringify(arr));
            sendObj.append('interval', $scope.timeInterval);
            $http({
                method: 'POST',
                url: $rootScope.link + "/momoPlus/receiveRequest",
                data: sendObj,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (response) {
                //上传成功的操作
                if (response.code == 200) {
                    alert('任务添加成功!');
                    $location.hash('page-top10');
                    $anchorScroll();
                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
                        if (data.code == 200) {
                            $rootScope.taskList = data.data;
                            $rootScope.taskAll = true;
                            $rootScope.taskDoing = false;
                            $rootScope.taskWait = false;
                            $rootScope.taskDown = false;
                            $rootScope.newBell = true;
                        }else {
                            alert(data.msg);
                        }
                    });
                }else {
                    alert(response.msg);
                }
            });
        }
    };
}]);
