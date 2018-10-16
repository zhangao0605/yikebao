app.controller('page11C', ["$rootScope", "$scope", "$location", "$anchorScroll", "$timeout", "$http", function ($rootScope, $scope, $location, $anchorScroll, $timeout, $http) {
    $rootScope.upMsg = 0
    $rootScope.getAllFalse();
    $rootScope.activeEleven = true;
    $rootScope.navPartThree = true;
    $rootScope.isScreenPage = false;
    $scope.ThumbsUpTurn = false
    //回到导航栏
    $scope.getNav = function () {
        $location.hash('nav-bottom11');
        $anchorScroll();
    };
    //页面上的按钮点击 页面的先后顺序
    $scope.outSideBox = true;
    $scope.inSideBox = false;

    //-----------------------点击查看好友列表查看所有好友-----------------
    $scope.getInsideBox = function (id, num, devices) {
        $scope.MemberId = id;
        $scope.newDevices = devices;
        $scope.MemberNumber = num;
        $http.get($rootScope.link + '/operate/getContact?wechatId=' + id + '&pageNo=1&pageSize=2000').success(function (data) {
            if (data.code == 200) {
                $scope.outSideBox = false;
                $scope.inSideBox = true;
                $scope.WxList = data.data.content;
                // console.log($scope.WxList)
                $scope.assPage = 1;
                // $('#pages111').Page({
                //     totalPages: data.data.totalPages,//分页总数
                //     liNums: 5,//分页的数字按钮数(建议取奇数)
                //     activeClass: 'activP', //active 类样式定义
                //     callBack: function (page) {
                //         $http.get($rootScope.link + '/operate/getContact?wechatId=' + id + '&pageNo=' + page + '&pageSize=16').success(function (data) {
                //             $scope.WxList = data.data.content;
                //             $scope.assPage = page;
                //         })
                //     }
                // });
            } else {
                alert(data.msg)
            }

        });
    };
    $scope.getBack = function () {
        $scope.outSideBox = true;
        $scope.inSideBox = false;
    };
    //刷新
    $scope.getNew = function (id) {
        $http.get($rootScope.link + '/wechat/getFriendList?wechatId=' + id).success(function (data) {
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
                    } else {
                        alert(data.msg)
                    }
                });
            } else {
                alert(data.msg)
            }
        });
    };

    //更改名字和标签名
    $scope.editBoxOne = false;
    $scope.editBoxTwo = false;
    $scope.newName = '';
    $scope.newTag = '';
    $scope.getEditBoxOne = function (id) {
        $scope.editBoxOne = true;
        $scope.editId = id;
    };
    $scope.getEditBoxTwo = function (id) {
        $scope.editBoxTwo = true;
        $scope.editId = id;
    };
    $scope.cancelButton = function () {
        $scope.editBoxOne = false;
        $scope.editBoxTwo = false;
    };
    $scope.SureButtonOne = function (id) {
        if ($scope.newName == '') {
            alert('请填写需要更改的昵称！');
        } else {
            $http.get($rootScope.link + '/operate/updateContact?name=' + $scope.newName + '&id=' + id).success(function (data) {
                if (data.code == 200) {
                    alert('修改成功！');
                    $scope.editBoxOne = false;
                    $scope.newName = '';
                    $http.get($rootScope.link + '/operate/getContact?wechatId=' + $scope.MemberId + '&pageNo=' + $scope.assPage + '&pageSize=16').success(function (data) {
                        if (data.code == 200) {
                            $scope.WxList = data.data.content;
                        } else {
                            alert(data.msg)
                        }
                    });
                } else {
                    alert(data.msg)
                }
            });
        }

    };
    $scope.SureButtonTwo = function (id) {
        if ($scope.newTag == '') {
            alert('请填写需要更改的昵称！');
        } else {
            $http.get($rootScope.link + '/operate/updateContact?tag=' + $scope.newTag + '&id=' + id).success(function (data) {
                if (data.code == 200) {
                    alert('修改成功！');
                    $scope.editBoxTwo = false;
                    $scope.newTag = '';
                    $http.get($rootScope.link + '/operate/getContact?wechatId=' + $scope.MemberId + '&pageNo=' + $scope.assPage + '&pageSize=16').success(function (data) {
                        if (data.code == 200) {
                            $scope.WxList = data.data.content;
                        } else {
                            alert(data.msg)
                        }
                    });
                } else {
                    alert(data.msg)
                }
            });
        }

    };
    //-----------------一级界面实时刷新好友列表--------------

    $scope.getNewMore = function () {
        $scope.checkedMore = new Array();
        console.log($rootScope.MemberList11)
        if ($rootScope.MemberList11 == undefined) {

            alert("请选择需要刷新好友列表设备")
            return
        } else {
            angular.forEach($rootScope.MemberList11, function (i) {
                $scope.checkedMore.push(i.wechatVo.id);
            })
            var checkedMore1 = angular.toJson($scope.checkedMore)
            var sendObj = new FormData();
            sendObj.append('wechatId', checkedMore1);
            $http({
                method: 'POST',
                url: $rootScope.link + "/wechat/getSomeFriendList",
                data: sendObj,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (data) {
                if (data.code == 200) {
                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
                        if (data.code == 200) {
                            $rootScope.taskList = data.data;
                            $rootScope.taskAll = true;
                            $rootScope.taskDoing = false;
                            $rootScope.taskWait = false;
                            $rootScope.taskDown = false;
                            $rootScope.newBell = true;
                        } else {
                            alert(data.msg)
                        }

                    });
                    alert('添加任务栏成功！');

                } else {
                    alert(data.msg)
                }
            });
        }
    }
    //-----------------二级界面实时发送好友消息--------------
    $scope.sendMsgFri = false;


    $scope.NoMessageSendBox = function () {
        $scope.sendMsgFri = false;
    }
    //---------------点击发送消息按钮--------------
    $scope.maxInterval = 10
    $scope.minInterval = 1
    $scope.getMessageSendBox = function () {

        $scope.groupArr = [];
        $scope.clubNames = [];

        $scope.saySomething = '';
        for (var i = 0; i < $('.page11-div-checkbox').length; i++) {
            if ($('.page11-div-checkbox').eq(i).find('input').prop('checked')) {
                $scope.groupArr.push($('.page11-div-checkbox').eq(i).attr('group_id'));
                $scope.clubNames.push($('.page11-div-checkbox').eq(i).attr('club_name'));
            }
        }
        if ($scope.groupArr.length == 0) {
            alert('请勾选需要发送的好友名称！');
        } else {
            $scope.sendMsgFri = true;
        }
    };
    $scope.devicss = []

    $scope.sureMessageSendBox = function () {
        $scope.devicss.push($scope.newDevices)
        if ($scope.saySomething == '') {
            alert('请填写需要发送的内容!');
        } else {
            console.log($scope.groupArr.length)
            if($scope.groupArr.length>200){
                alert('由于微信策略限制每天最多群发好友上限800人，每次群发上限200人')
            }
            $scope.sendMsgFri = false;
            $scope.sendObj1 = new FormData();
            $scope.messageSendBox = false;
            $scope.sendObj1.append('devices', JSON.stringify($scope.devicss));
            $scope.sendObj1.append('isAll', $rootScope.upMsg);
            $scope.sendObj1.append('friendsIdList', JSON.stringify($scope.groupArr));
            $scope.sendObj1.append('msg', $scope.saySomething);
            $scope.sendObj1.append('maxInterval', $scope.maxInterval);
            $scope.sendObj1.append('minInterval', $scope.minInterval);
            $http({
                method: 'POST',
                url: $rootScope.link + "/operate/sendMsgByDevice",
                data: $scope.sendObj1,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (response) {
                //上传成功的操作
                if (response.code == 200) {
                    $http.get($rootScope.link + '/operate/getContact?wechatId=' + $scope.MemberId + '&pageNo=1&pageSize=5000').success(function (data) {
                        if (data.code == 200) {
                            $("#zheMoren").removeClass('on').find('input').prop('checked', function () {
                                return false
                            });
                            $scope.devicss = []
                            $rootScope.upMsg = 0;
                            $scope.outSideBox = false;
                            $scope.inSideBox = true;
                            $scope.WxList = data.data.content;
                            alert('任务添加成功！');
                        }
                    });
                    $scope.messageSendBox = false;
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
                    $scope.devicss = []
                    alert(response.msg);
                }
            });
        }

    };


    //----------------------给固定好友朋友圈点赞-----------------
    $scope.ThumbsUpNums = 1
    $scope.ThumbsUp = function () {

        $scope.groupArr1 = [];
        $scope.clubNames1 = [];
        for (var i = 0; i < $('.page11-div-checkbox').length; i++) {
            if ($('.page11-div-checkbox').eq(i).find('input').prop('checked')) {
                $scope.groupArr1.push($('.page11-div-checkbox').eq(i).attr('group_id'));
                $scope.clubNames1.push($('.page11-div-checkbox').eq(i).attr('club_name'));
            }
        }
        if ($scope.groupArr1.length == 0) {
            alert('请勾选需要发送的好友！');
        } else {
            $scope.ThumbsUpTurn = true;

        }
        // $scope.ThumbsUpTurn = true;
    }
    $scope.NoThumbsUpTurn = function () {
        $scope.ThumbsUpTurn = false;
        $scope.ThumbsUpNums = 1
    }
    $scope.lastFound = function () {
        if ($scope.ThumbsUpNums == undefined) {
            alert('点赞数量范围为"1-30"请再次输入')
            $scope.ThumbsUpNums = 1;
        }

    }
    // setInterval(function () {
    //     console.log($scope.ThumbsUpNums)
    // },1000)
    $scope.sureThumbsUpTurn = function () {
        $scope.devicss.push($scope.newDevices)
        $scope.sendObj2 = new FormData();
        $scope.sendObj2.append('devices', JSON.stringify($scope.devicss));
        $scope.sendObj2.append('likeCount', $scope.ThumbsUpNums);
        $scope.sendObj2.append('friendsIdList', JSON.stringify($scope.groupArr1));
        $http({
            method: 'POST',
            url: $rootScope.link + "/operate/praiseForFriends",
            data: $scope.sendObj2,
            headers: {'Content-Type': undefined},
            transformRequest: angular.identity
        }).success(function (response) {
            //上传成功的操作
            if (response.code == 200) {

                $scope.devicss = []
                $scope.ThumbsUpTurn = false
                alert('任务添加成功！');


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
                $scope.devicss = []
                alert(response.msg);
            }
        });


    };


    // setInterval(function () {
    //     console.log($scope.ThumbsUpNums)
    // }, 1000)


    //默认加载群组和成员列表
    //$timeout(function () {
    //    $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify($rootScope.moArray) + '&pageNo=1&pageSize=16').success(function (data) {
    //        if (data.code == 200) {
    //            $rootScope.MemberList11 = data.data.content;
    //            console.log($rootScope.MemberList11)
    //            $('#pages12').Page({
    //                totalPages: data.data.totalPages,//分页总数
    //                liNums: 5,//分页的数字按钮数(建议取奇数)
    //                activeClass: 'activP', //active 类样式定义
    //                callBack: function (page) {
    //                    $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify($rootScope.moArray) + '&pageNo=' + page + '&pageSize=16').success(function (data) {
    //                        $rootScope.MemberList11 = data.data.content;
    //                    })
    //                }
    //            });
    //        }
    //    });
    //}, 200);

}]);
