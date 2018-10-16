app.controller('page12C', ["$rootScope", "$scope", "$location", "$anchorScroll", "$timeout", "$http", function ($rootScope, $scope, $location, $anchorScroll, $timeout, $http) {
    $rootScope.getAllFalse();
    $rootScope.activeTwelve = true;
    $rootScope.navPartThree = true;
    $rootScope.isScreenPage = false;
    //锚点的跳转 回到导航标题处
    $scope.getNav = function () {
        $location.hash('nav-bottom12');
        $anchorScroll();
    };
    //页面点击先后顺序与逻辑
    $scope.outSideBox = true;
    $scope.ceelue = true;
    $scope.inSideBox = false;
    $scope.isAllCheckBack = false;
    $scope.sayHello = '您好，很高兴认识您！'
    $scope.maxInterval = 10;
    $scope.minInterval = 1;
    $scope.sendNum = 5;
    $scope.allGroup = 0;
    $scope.topGroup = 0;
    $scope.mustChoose = [];
    $scope.picArr = [];
    $scope.getInsideBox = function (num, id) {
        $scope.MemberNumber = num;
        $scope.WxMemberId = id;
        $scope.ceelue = false;
        $scope.isAllCheckBack = true;
        $(".wx-group-box").css("height", "1080px");
        $("#addColor").css("display", "none");
        $("#addColor1").css("display", "none");
        $('.page12-checkAll-div').removeClass('on').find('input').prop('checked', function () {
            return false
        });
        $http.get($rootScope.link + '/operate/getClubByWechatNumber?wechatId=' + id + '&pageNo=1&pageSize=5000').success(function (data) {
            if (data.code == 200) {
                $scope.outSideBox = false;
                $scope.inSideBox = true;
                $scope.WxList = data.data.content;
                $scope.assPage = 1;
                // $('#pages122').Page({
                //     totalPages: data.data.totalPages,//分页总数
                //     liNums: 5,//分页的数字按钮数(建议取奇数)
                //     activeClass: 'activP', //active 类样式定义
                //     callBack: function (page) {
                //         $http.get($rootScope.link + '/operate/getClubByWechatNumber?wechatId=' + id + '&pageNo=' + page + '&pageSize=16').success(function (data) {
                //             $scope.WxList = data.data.content;
                //             $scope.assPage = page;
                //         })
                //     }
                // });
            }else{
                alert(data.msg)
            }

        });
    };
    $scope.getGroupNew = function (id) {
        $http.get($rootScope.link + '/wechat/getGroupList?wechatId=' + id).success(function (data) {
            if (data.code == 200) {
                alert('添加任务成功！');
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
            } else{
                alert(data.msg)
            }
        });
    };
    $scope.getBack = function () {
        $scope.ceelue = true;
        $scope.outSideBox = true;
        $scope.inSideBox = false;
        $(".wx-group-box").css("height", "1250px");
        $("#addColor1").css("display", "block");
        $("#addColor").css("display", "block");
        // $(".task-show-button").css("height", "1180px");
    };
    var selectVal = '';
    $('.page12-select-type').change(function () {
        selectVal = $(this).val();
        if (selectVal == 1) {
            $scope.allGroup = 1;
            $scope.topGroup = 0;
            $('.writeNums').hide()
        } else if (selectVal == 2) {
            $('.writeNums').hide()
            $scope.allGroup = 0;
            $scope.topGroup = 1;
        } else if (selectVal == 3) {
            $('.writeNums').show()
            $scope.allGroup = 0;
            $scope.topGroup = 0;
        } else {
            $('.writeNums').hide()
            $scope.allGroup = 0;
            $scope.topGroup = 0;
        }
    })
    $scope.sendObj = new FormData();
    $scope.sendObj.append('file1', '');
    $scope.sendObj.append('file2', '');
    $scope.sendObj.append('file3', '');
    $scope.sendObj.append('file4', '');
    $scope.sendObj.append('file5', '');
    $scope.sendObj.append('file6', '');
    $scope.sendObj.append('file7', '');
    $scope.sendObj.append('file8', '');
    $scope.sendObj.append('file9', '');
    //群首页群发
    $scope.sendAll = function () {

        // var arr=[];
        for (var i = 0, arr = []; i < $('.new-wx-equip-input12').length; i++) {
            if ($('.new-wx-equip-input12').eq(i).prop('checked')) {
                arr.push($('.new-wx-equip-input12').eq(i).parent().next().attr('title'));
                console.log(arr)
            }
        }
        if ($scope.timeInterval == '') {
            alert('请填写时间间隔！');
        }
        else if (arr.length == 0) {
            alert('请勾选需要操作的群组！');
        } else {
            $scope.sendObj.append('msg', $scope.sayHello);
            $scope.sendObj.append('allGroup ', $scope.allGroup);
            $scope.sendObj.append('topGroup ', $scope.topGroup);
            $scope.sendObj.append('groupNum', $scope.sendNum);
            $scope.sendObj.append('devices', JSON.stringify(arr));
            $scope.sendObj.append('maxInterval', $scope.maxInterval);
            $scope.sendObj.append('minInterval', $scope.minInterval);
            console.log($scope.sendObj)
            $http({
                method: 'POST',
                url: $rootScope.link + "/operate/sendMsgToGroup",
                data: $scope.sendObj,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (response) {
                //上传成功的操作
                if (response.code == 200) {
                    alert('任务添加成功!');
                    $location.hash('page-top12');
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
                        }else {
                            alert(data.msg);
                        }
                    });
                } else {
                    location.reload();
                    alert(response.msg)
                }
            });
        }
    };


    //修改标签框
    $scope.labelBox = false;
    $scope.getLabelBox = function (id) {
        $scope.TagName = '';
        $scope.TagId = id;
        $scope.labelBox = true;
    };
    $scope.cancelLabelBox = function () {
        $scope.labelBox = false;
    };
    $scope.SureLabelBox = function (id) {
        if ($scope.TagName == '') {
            alert('请输入需要更改的标签名');
        } else {
            $http.get($rootScope.link + '/operate/addTagToClub?id=' + id + '&tag=' + $scope.TagName).success(function (data) {
                if (data.code == 200) {
                    alert('标签成功！');
                    $scope.labelBox = false;
                    $http.get($rootScope.link + '/operate/getClubByWechatNumber?wechatId=' + $scope.WxMemberId + '&pageNo=' + $scope.assPage + '&pageSize=17').success(function (data) {
                        if (data.code == 200) {
                            $scope.WxList = data.data.content;
                        }else{
                            alert(data.msg)
                        }

                    });

                }else{
                    alert(data.msg)
                }
            });
        }

    };
    //群发消息框
    $scope.messageSendBox = false;
    $scope.getMessageSendBox = function () {
        $scope.groupArr = [];
        $scope.clubNames = [];
        $scope.saySomething = '';
        for (var i = 0; i < $('.page12-div-checkbox').length; i++) {
            if ($('.page12-div-checkbox').eq(i).find('input').prop('checked')) {
                $scope.groupArr.push($('.page12-div-checkbox').eq(i).attr('group_id'));

                //-------------------长度为十问题解决方案-----------------
                // $scope.clubNames.push($('.page12-div-checkbox').eq(i).attr('club_name').substring(0,10) );

                $scope.clubNames.push($('.page12-div-checkbox').eq(i).attr('club_name'));
            }
        }
        if ($scope.groupArr.length == 0) {
            alert('请勾选需要发送的群名称！');
        } else {
            $scope.messageSendBox = true;
        }
    };
    $scope.cancelMessageSendBox = function () {
        $scope.messageSendBox = false;
    };
    $scope.maxTime = 5;
    $scope.minTime = 1;
    $scope.sureMessageSendBox = function () {
        $scope.sendObj1 = new FormData();
        if ($scope.saySomething == '') {
            alert('请填写需要群发的内容!');
        } else {

            $scope.sendObj1.append('wechatId', $scope.WxMemberId);
            $scope.sendObj1.append('clubNames', JSON.stringify($scope.clubNames));
            $scope.sendObj1.append('msg', $scope.saySomething);
            $scope.sendObj1.append('maxInterval', $scope.maxTime);
            $scope.sendObj1.append('minInterval', $scope.minTime);
            $http({
                method: 'POST',
                url: $rootScope.link + "/operate/sendClubMsg",
                data: $scope.sendObj1,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (response) {
                //上传成功的操作
                if (response.code == 200) {
                    $(".page12-checkAll-div").removeClass('on').find('input').prop('checked', function () {
                        return false
                    });
                    $(".cleanOn").removeClass('on').find('input').prop('checked', function () {
                        return false
                    });
                    $scope.messageSendBox = false;
                    alert('任务添加成功！');
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
                }else{
                    alert(response.msg)
                }
            });
        }

    };


    $scope.sendMessage = new FormData();

    //筛选数组
    $scope.selected = [1];
    var updateSelected = function (action, id) {
        if (action == 'add' && $scope.selected.indexOf(id) == -1) {
            $scope.selected.push(id);
        }
        if (action == 'remove' && $scope.selected.indexOf(id) != -1) {
            var idx = $scope.selected.indexOf(id);
            $scope.selected.splice(idx, 1);
        }
    };
    $scope.checkOne = function ($event, id, count) {
        var action = ($event.target.checked ? 'add' : 'remove');
        updateSelected(action, id, count);
        $http.get($rootScope.link + '/operate/getWechatsByGroup?groupIds=' + JSON.stringify($scope.selected) + '&pageNo=1&pageSize=17').success(function (data) {
            if (data.code == 200) {
                $scope.MemberList = data.data.content;
                $scope.outSideBox = true;
                $scope.inSideBox = false;
                $('#pages12').Page({
                    totalPages: data.data.totalPages,//分页总数
                    liNums: 5,//分页的数字按钮数(建议取奇数)
                    activeClass: 'activP', //active 类样式定义
                    callBack: function (page) {
                        $http.get($rootScope.link + '/operate/getWechatsByGroup?groupIds=' + JSON.stringify($scope.selected) + '&pageNo=' + page + '&pageSize=17').success(function (data) {
                            $scope.MemberList = data.data.content;
                        })
                    }
                });
            }else{
                alert(data.msg)
            }

        });
    };
    $scope.isChecked = function (id) {
        return $scope.selected.indexOf(id) >= 0;
    };

    //默认加载微信列表
    //$timeout(function () {
    //    $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify($rootScope.moArray) + '&pageNo=1&pageSize=16').success(function (data) {
    //        if (data.code == 200) {
    //            $rootScope.MemberList12 = data.data.content;
    //            $('#pages11').Page({
    //                totalPages: data.data.totalPages,//分页总数
    //                liNums: 5,//分页的数字按钮数(建议取奇数)
    //                activeClass: 'activP', //active 类样式定义
    //                callBack: function (page) {
    //                    $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify($rootScope.moArray) + '&pageNo=' + page + '&pageSize=16').success(function (data) {
    //                        $rootScope.MemberList12 = data.data.content;
    //                    })
    //                }
    //            });
    //        }
    //    });
    //}, 200);
}]);