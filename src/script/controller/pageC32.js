app.controller('page32C', ["$rootScope", "$scope", "$location", "$anchorScroll", "$http", function ($rootScope, $scope, $location, $anchorScroll, $http) {
    $rootScope.getAllFalse();
    $rootScope.activeThirtyTwo = true;
    $rootScope.navPartThree = true;
    $rootScope.isScreenPage = false;
    //配置策略

    $scope.mmp = false;
    $scope.sendObj = new FormData();
    $scope.sendObj.append('file1', '');
    $scope.picArr = [];
    $scope.sendAll = function () {
        for (var i = 0, arr = []; i < $('.new-wx-equip-input7').length; i++) {
            if ($('.new-wx-equip-input7').eq(i).prop('checked')) {
                arr.push($('.new-wx-equip-input7').eq(i).parent().next().attr('title'));
            }
        }
        if (arr == 0) {
            alert('请勾选需要操作的设备！');
        } else if ($scope.mmp == false) {
            alert("请选择公众号二维码图片！")
        } else {
            $scope.sendObj.append('devices', JSON.stringify(arr));
            $http({
                method: 'POST',
                url: $rootScope.link + "/operate/sendMoments",
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


    //----------------------公众号名称关注----------------------
    $scope.sayName = '';
    $scope.sendAll1 = function () {
        for (var i = 0, arr1 = []; i < $('.new-wx-equip-input7').length; i++) {
            if ($('.new-wx-equip-input7').eq(i).prop('checked')) {
                arr1.push($('.new-wx-equip-input7').eq(i).parent().next().attr('title'));
            }
        }
        if (arr1.length == 0) {
            alert('请勾选需要操作的设备！');
        } else if ($scope.sayName == '') {
            alert("请输入公众号名称！")
        }
        else {
            var arr2 = []
            arr2.push($scope.sayName.split("，"))
            var jsonTwo = {
                "publicnumberList": arr2[0],
                "devices": arr1
            }
            $http({
                method: 'POST',
                url: $rootScope.link + "/wechatPlus/addpublicnumber",
                data:jsonTwo,
                headers: {'Content-Type':undefined},
            }).success(function (response) {
                //上传成功的操作
                if (response.code == 200) {
                    $scope.sayName = ''
                    alert('任务添加成功!');
                    $location.hash('page-top7');
                    $anchorScroll();
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
                }
            });
        }
    };
}]);
