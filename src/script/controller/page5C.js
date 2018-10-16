app.controller('page5C',["$rootScope","$scope","$http","$timeout",function ($rootScope, $scope, $http, $timeout) {
    $rootScope.getAllFalse();
    $rootScope.activeFive = true;
    $rootScope.isScreenPage = false;
    //page5选择设备数
    $scope.chooseedEquip = 100;
    $scope.unChooseedEquip = 0;
    //筛选数组
    var updateSelected = function (action, id) {
        if (action == 'add' && $rootScope.allEquipIds.indexOf(id) == -1) {
            $rootScope.allEquipIds.push(id);
        }
        if (action == 'remove' && $rootScope.allEquipIds.indexOf(id) != -1) {
            var idx = $rootScope.allEquipIds.indexOf(id);
            $rootScope.allEquipIds.splice(idx, 1);
        }
    };
    $scope.checkOne = function ($event, id) {
        var action = ($event.target.checked ? 'add' : 'remove');
        updateSelected(action, id);
        $http.get($rootScope.link + '/operate/getWechatsByGroup?groupIds=' + JSON.stringify($rootScope.allEquipIds) + '&pageNo=1&pageSize=17').success(function (data) {
            $scope.MemberList = data.data.content;
            $('#pages5').Page({
                totalPages: 9,//分页总数
                liNums: 5,//分页的数字按钮数(建议取奇数)
                activeClass: 'activP', //active 类样式定义
                callBack: function (page) {
                    $http.get($rootScope.link + '/operate/getWechatsByGroup?groupIds=' + JSON.stringify($rootScope.allEquipIds) + '&pageNo=' + page + '&pageSize=17').success(function (data) {
                        if (data.code == 200) {
                            $scope.MemberList = data.data.content;
                        }
                        else {
                            alert(data.msg);
                        }
                    })
                }
            });
        });
    };
    $scope.isChecked = function (id) {
        return $rootScope.allEquipIds.indexOf(id) >= 0;
    };
    //默认加载所有的分组的微信号
    $scope.isOnline = function (n) {
        return n == 0 ? '离线' : '在线';
    };
    $timeout(function () {
        $http.get($rootScope.link + '/operate/getWechatsByGroup?groupIds=' + JSON.stringify($rootScope.allEquipIds) + '&pageNo=1&pageSize=17').success(function (data) {
            $scope.MemberList = data.data.content;
            $('#pages5').Page({
                totalPages: data.data.totalPages,//分页总数
                liNums: 5,//分页的数字按钮数(建议取奇数)
                activeClass: 'activP', //active 类样式定义
                callBack: function (page) {
                    $http.get($rootScope.link + '/operate/getWechatsByGroup?groupIds=' + JSON.stringify($rootScope.allEquipIds) + '&pageNo=' + page + '&pageSize=17').success(function (data) {
                        if (data.code == 200) {
                            $scope.MemberList = data.data.content;
                        }else {
                            alert(data.msg);
                        }
                    })
                }
            });
        });
    }, 100);
    //登录
    $scope.numberLogin = function () {
        var page5WxIds = [];
        for (var i = 0; i < $('.page5-div-checkbox').length; i++) {
            if ($('.page5-div-checkbox').eq(i).find('input').prop('checked')) {
                page5WxIds.push($('.page5-div-checkbox').eq(i).attr('member_id'));
            }
        }
        if (page5WxIds.length == 0) {
            alert('请勾选需要操作微信！');
        } else {
            $http.get($rootScope.link + '/wechat/login?devices=' + JSON.stringify(page5WxIds)).success(function (data) {
                if (data.code == 200) {
                    alert('添加任务成功!');
                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
                        if (data.code == 200) {
                            $rootScope.taskList = data.data;
                            $rootScope.taskAll = true;
                            $rootScope.taskDoing = false;
                            $rootScope.taskWait = false;
                            $rootScope.taskDown = false;
                            $rootScope.newBell = true;
                        }
                    });
                } else {
                    alert(data.msg);
                }
            });
        }
    };
    //注销
    $scope.numberLogout = function () {
        var page5WxIds = [];
        for (var i = 0; i < $('.page5-div-checkbox').length; i++) {
            if ($('.page5-div-checkbox').eq(i).find('input').prop('checked')) {
                page5WxIds.push($('.page5-div-checkbox').eq(i).attr('member_id'));
            }
        }
        if (page5WxIds.length == 0) {
            alert('请勾选需要操作微信！');
        } else {
            $http.get($rootScope.link + '/wechat/logout?devices=' + JSON.stringify(page5WxIds)).success(function (data) {
                if (data.code == 200) {
                    alert('添加任务成功!');
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
                } else {
                    alert(data.msg);
                }
            });
        }

    };
    //切换
    $scope.switchBox = false;
    $scope.numberSwitch = function () {
        $scope.switchBox = true;
    };
    $scope.switchCancel = function () {
        $scope.switchBox = false;
    };
    $scope.switchSure = function () {
        var assRank = $('.switch-list').find('input');
        for (var i = 0, assChecked = 0; i < assRank.length; i++) {
            if (assRank.eq(i).prop('checked')) {
                assChecked = assRank.eq(i).attr('ass_rank');
            }
        }
        if (assChecked == 0) {
            alert('请选择微信序号！');
        } else {
            $http.get($rootScope.link + '/group/switchWechat?groupIds=' + JSON.stringify($rootScope.allEquipIds) + '&rank=' + assChecked).success(function (data) {
                if (data.code == 200) {
                    alert('切换成功！');
                    $http.get($rootScope.link + '/operate/getWechatsByGroup?groupIds=' + JSON.stringify($rootScope.allEquipIds) + '&pageNo=1&pageSize=17').success(function (data) {
                        $scope.switchBox = false;
                        $scope.MemberList = data.data.content;
                        $('#pages5').Page({
                            totalPages: data.data.totalPages,//分页总数
                            liNums: 5,//分页的数字按钮数(建议取奇数)
                            activeClass: 'activP', //active 类样式定义
                            callBack: function (page) {
                                $http.get($rootScope.link + '/operate/getWechatsByGroup?groupIds=' + JSON.stringify($rootScope.allEquipIds) + '&pageNo=' + page + '&pageSize=17').success(function (data) {
                                    if (data.code == 200) {
                                        $scope.MemberList = data.data.content;
                                    }else{
                                        alert(data.msg)
                                    }
                                })
                            }
                        });
                    });
                }else {
                    alert(data.msg);
                }
            });
        }
    };
}]);
