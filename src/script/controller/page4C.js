app.controller('page4C',["$rootScope","$scope","$http","$timeout",function ($rootScope, $scope, $http, $timeout) {
    $rootScope.getAllFalse();
    $rootScope.activeFour = true;
    $rootScope.navPartThree = true;
    $rootScope.isScreenPage = false;
    //页面显示
    $scope.outSideBox = true;
    $scope.insideBox = false;
    $scope.assBack = false;
    $scope.resetSelect = true;
    $scope.getInside = function (d) {
        $scope.outSideBox = false;
        $scope.insideBox = true;
        $scope.assMoveTo = false;
        $scope.assBack = true;
        $scope.resetSelect = false;
        $scope.assDevice = d;
        $http.get($rootScope.link + '/wechat/getWechatByDevice?device=' + d).success(function (data) {
            $scope.assList = data.data;
        });
    };
    $scope.getAssBack = function () {
        $scope.outSideBox = true;
        $scope.insideBox = false;
        $scope.resetSelect = true;
        $scope.assBack = false;
        $scope.assMoveTo = true;
        var newArr = [];
        for (var i = 0; i < $('.new-wx-equip-input4').length; i++) {
            if ($('.new-wx-equip-input4').eq(i).prop('checked')) {
                newArr.push($('.new-wx-equip-input4').eq(i).parent().next().attr('title'));
            }
        }
        $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify(newArr) + '&pageNo=1&pageSize=17').success(function (data) {
            if (data.code == 200) {
                $scope.checkAllFour = false;
                $('.page4-floor-one-list').find('span').eq(0).removeClass('on');
                //$rootScope.equipList4 = data.data.content;
                $('#pages4').Page({
                    totalPages: data.data.totalPages,//分页总数
                    liNums: 5,//分页的数字按钮数(建议取奇数)
                    activeClass: 'activP', //active 类样式定义
                    callBack: function (page) {
                        $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify(newArr) + '&pageNo=' + page + '&pageSize=17').success(function (data) {
                        })
                    }
                });
            }else {
                alert(data.msg);
            }
        });
    };
    $timeout(function () {
        // $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify($rootScope.moArray) + '&pageNo=1&pageSize=17').success(function (data) {
        $http.get($rootScope.link + '/device/getAllDeviceByStatus?pageNo=1&pageSize=15').success(function (data) {
            if (data.code == 200) {
                //$rootScope.equipList4 = data.data.content;
                $('#pages4').Page({
                    totalPages: data.data.totalPages,//分页总数
                    liNums: 5,//分页的数字按钮数(建议取奇数)
                    activeClass: 'activP', //active 类样式定义
                    callBack: function (page) {
                        $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify($rootScope.moArray) + '&pageNo=' + page + '&pageSize=17').success(function (data) {
                            $rootScope.equipList4 = data.data.content;
                        })
                    }
                });
            }else {
                alert(data.msg);
            }
        });
        // alert('请用户手动配置增加微信账号！');
    }, 0);
    //上移
    $scope.isRankOne = function (n) {
        return n == 1 ? 'on' : '';
    };
    $scope.rankDisabled = function (n) {
        return n == 1 ? true : false;
    };
    $scope.moveUp = function (n) {
        $http.get($rootScope.link + '/wechat/up?rank=' + n + '&device=' + $scope.assDevice).success(function (data) {

            if (data.code == 200) {
                alert('移动成功!');
                $http.get($rootScope.link + '/wechat/getWechatByDevice?device=' + $scope.assDevice).success(function (data) {
                    $scope.assList = data.data;
                });
            } else {
                alert(data.msg);
            }
        });
    };
    //下移
    $scope.isRankLast = function (n) {
        return n == 20 ? 'on' : '';
    };
    $scope.rankDisabledLast = function (n) {
        return n == 20 ? true : false;
    };
    $scope.moveDown = function (n) {
        $http.get($rootScope.link + '/wechat/down?rank=' + n + '&device=' + $scope.assDevice).success(function (data) {
            if (data.code == 200) {
                alert('移动成功!');
                $http.get($rootScope.link + '/wechat/getWechatByDevice?device=' + $scope.assDevice).success(function (data) {
                    $scope.assList = data.data;
                });
            }else {
                alert(data.msg);
            }
        });
    };
    //切换
    $scope.assMoveTo = true;
    $scope.checked = [];
    $scope.selectAll = function () {
        if ($scope.checkAllFour) {
            $scope.checked = [];
            angular.forEach($rootScope.equipList4, function (i) {
                i.checked = true;
                $scope.checked.push(i.device);
            })
        } else {
            angular.forEach($rootScope.equipList4, function (i) {
                i.checked = false;
                $scope.checked = [];
            })
        }
    };
    $scope.selectOne = function () {
        angular.forEach($rootScope.equipList4, function (i) {
            var index = $scope.checked.indexOf(i.device);
            if (i.checked && index === -1) {
                $scope.checked.push(i.device);
            } else if (!i.checked && index != -1) {
                $scope.checked.splice(index, 1);
            }
        });
        if ($rootScope.equipList4.length === $scope.checked.length) {
            $scope.checkAll = true;
        } else {
            $scope.checkAll = false;
        }
    };
    $scope.resetNumber = '1';
    $scope.resetButton = function () {
        for (var i = 0, arr = []; i < $('.new-wx-equip-input4').length; i++) {
            if ($('.new-wx-equip-input4').eq(i).prop('checked')) {
                arr.push($('.new-wx-equip-input4').eq(i).parent().next().attr('title'));
            }
        }
        if (arr.length == 0) {
            alert('请勾选需要切换的设备！');
        } else {
            $http.get($rootScope.link + '/group/switchWechat?devices=' + JSON.stringify(arr) + '&rank=' + parseInt($scope.resetNumber)).success(function (data) {
                if (data.code == 200) {
                    alert('添加任务成功！');
                    var newArr = [];
                    for (var i = 0; i < $('.new-wx-equip-input4').length; i++) {
                        if ($('.new-wx-equip-input4').eq(i).prop('checked')) {
                            newArr.push($('.new-wx-equip-input4').eq(i).parent().next().attr('title'));
                        }
                    }
                    //$http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify(newArr) + '&pageNo=1&pageSize=17').success(function (data) {
                    //    if (data.code == 200) {
                    //        $rootScope.equipList4 = data.data.content;
                    //        $('#pages4').Page({
                    //            totalPages: data.data.totalPages,//分页总数
                    //            liNums: 5,//分页的数字按钮数(建议取奇数)
                    //            activeClass: 'activP', //active 类样式定义
                    //            callBack: function (page) {
                    //                $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify(newArr) + '&pageNo=' + page + '&pageSize=17').success(function (data) {
                    //                    $rootScope.equipList4 = data.data.content;
                    //                })
                    //            }
                    //        });
                    //    }
                    //});
                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
                        if (data.code == 200) {
                            $rootScope.taskList = data.data;
                            $rootScope.taskAll = true;
                            $rootScope.taskDoing = false;
                            $rootScope.taskWait = false;
                            $rootScope.taskDown = false;
                            $rootScope.newBell = true;
                        }else{
                            alert(data.msg)
                        }
                    });
                } else {
                    alert(data.msg);
                }
            });
        }

    };
}]);
