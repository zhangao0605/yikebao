app.controller('page24C',["$rootScope","$scope","$location","$anchorScroll","$http","$timeout",function ($rootScope, $scope, $location, $anchorScroll, $http, $timeout) {
    $rootScope.getAllFalse();
    $rootScope.activeTwentyfour = true;
    $rootScope.navPartFour = true;
    $rootScope.isScreenPage = false;
    $timeout(function () {
        $http.get($rootScope.link + '/momo/getMomosByDevice?devices=' + JSON.stringify($rootScope.moArray) + '&pageNo=1&pageSize=6').success(function (data) {
            if (data.code == 200) {
                $rootScope.MemberList9 = data.data.content;
                $('#pages9').Page({
                    totalPages: data.data.totalPages,//分页总数
                    liNums: 5,//分页的数字按钮数(建议取奇数)
                    activeClass: 'activP', //active 类样式定义
                    callBack: function (page) {
                        $http.get($rootScope.link + '/momo/getMomosByDevice?devices=' + JSON.stringify($rootScope.moArray) + '&pageNo=' + page + '&pageSize=6').success(function (data) {
                            $rootScope.MemberList9 = data.data.content;
                        })
                    }
                });
            }else {
                alert(data.msg);
            }
        });
    }, 500);
    //配置
    $scope.countNumber = 5;
    $scope.sayHello = '您好！很高兴认识您！';
    $scope.timeInterval = 5;

    $scope.sendAll = function () {
        for (var i = 0, arr = []; i < $('.new-wx-equip-input9').length; i++) {
            if ($('.new-wx-equip-input9').eq(i).prop('checked')) {
                arr.push($('.new-wx-equip-input9').eq(i).parent().next().attr('title'));
            }
        }
        if (arr.length == 0) {
            alert('请勾选需要操作的微信群组!');
        } else if ($scope.countNumber == '') {
            alert('请填写添加的数量!');
        } else if ($scope.sayHello == '') {
            alert('请填写打招呼用语!');
        } else if ($scope.timeInterval == '') {
            alert('请填写时间间隔!');
        } else {
            var sendObj = new FormData();
            sendObj.append('msg', $scope.sayHello);
            sendObj.append('count', $scope.countNumber);
            sendObj.append('interval', $scope.timeInterval);
            sendObj.append('dataList', JSON.stringify(arr));
            $http({
                method: 'POST',
                url: $rootScope.link + "/momoPlus/addFriendInClub",
                data: sendObj,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (response) {
                //上传成功的操作
                if (response.code == 200) {
                    alert('任务添加成功!');
                    $location.hash('page-top9');
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
