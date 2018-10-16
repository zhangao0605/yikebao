app.controller('page21C',["$rootScope","$scope","$http","$location","$anchorScroll",function ($rootScope, $scope, $http, $location, $anchorScroll) {
    $rootScope.getAllFalse();
    $rootScope.activeTwentyone = true;
    $rootScope.navPartFour = true;
    $rootScope.isScreenPage = false;
    //配置策略
    $scope.sendAllButton = false;
    $scope.timeInterval = 5;
    $scope.sayHello = '您好!很高兴认识您!';
    $scope.isClear = 0;
    $scope.clear = function ($event) {
        if ($event.target.checked) {
            $scope.isClear = 1;
        } else {
            $scope.isClear = 0;
        }
    };
    $scope.sendAll = function () {
        for (var i = 0, arr = []; i < $('.new-wx-equip-input').length; i++) {
            if ($('.new-wx-equip-input').eq(i).prop('checked')) {
                arr.push($('.new-wx-equip-input').eq(i).parent().next().attr('title'));
            }
        }
        if ($scope.timeInterval == '') {
            alert('请填写时间间隔！');
        } else if ($scope.sayHello == '') {
            alert('请填写打招呼用语！');
        } else if (arr.length == 0) {
            alert('请勾选需要操作的设备！');
        } else {
            var sendObj = new FormData();
            sendObj.append('devices', JSON.stringify(arr));
            sendObj.append('interval', $scope.timeInterval);
            sendObj.append('msg', $scope.sayHello);
            sendObj.append('clear', $scope.isClear);
            sendObj.append('strategy', $scope.addPeople);
            sendObj.append('count', $scope.addPeopleCount);
            sendObj.append('contactList', JSON.stringify($scope.assList));
            $http({
                method: 'POST',
                url: $rootScope.link + "/momoPlus/addFriendContact",
                data: sendObj,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (response) {
                //上传成功的操作
                if (response.code == 200) {
                    alert('任务添加成功!');
                    $location.hash('page-top6');
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
    //加人策略
    $scope.assRadioChoose = false;
    $scope.addPeople = 1;
    $scope.addPeopleCount = 1;
    $scope.getAssHide = function () {
        $scope.assRadioChoose = false;
        $scope.addPeople = 1;
    };
    $scope.getAssShow = function () {
        $scope.assRadioChoose = true;
        $scope.addPeople = 0;
    }
}]);
