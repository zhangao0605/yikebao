app.controller('page33C', ["$rootScope", "$scope", "$http", "$timeout", function ($rootScope, $scope, $http, $timeout) {
    $rootScope.getAllFalse();
    $rootScope.activeThirtySree = true;
    $rootScope.navPartThree = true;
    $rootScope.isScreenPage = false;
    $scope.maxTime = 10;
    $scope.minTime = 1
    $scope.mainName = ''
    $scope.mainNumber = ''
    $scope.allPhon = ''
    var selectVal = ''
    $scope.checkPhone = '';
    //---------------页面初始化获取所有在线设备-------------------
    $timeout(function () {
        $http.get($rootScope.link + '/device/getAllDeviceByStatus?pageNo=1&pageSize=10000').success(function (data) {
            if (data.code == 200) {
                $scope.allPhon = data.data.content
                // console.log(data.data.content)
            } else {
                alert(data.msg)
            }
        });
    }, 0);
    //---------------每次点击选择设备拿回好友列表-------------------
    $('.page4-select').change(function () {
        $rootScope.sendValuePp = undefined
        $scope.checkPhone = $(this).val();
        // console.log(JSON.stringify($scope.checkPhone) )
        $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + $scope.checkPhone + '&pageNo=1&pageSize=17').success(function (data) {
            if (data.code == 200) {
                $scope.haoYou = data.data.content[0].wechatVo.id
                $http.get($rootScope.link + '/operate/getContact?wechatId=' + $scope.haoYou + '&pageNo=1&pageSize=2000').success(function (data) {
                    if (data.code == 200) {
                        $scope.outSideBox = false;
                        $scope.inSideBox = true;
                        if (data.data.content == '') {
                            alert("无法获取到好友列表，请前往微信好友管理进行好友列表刷新")
                        }
                        $scope.WxList = data.data.content;
                        $scope.assPage = 1;
                    } else {
                        alert(data.msg)
                    }

                });
            } else {
                alert(data.msg);
            }
        });
        // $scope.MemberId = id;
        // $scope.newDevices = devices;
        // $scope.MemberNumber = num;
    })
    // setInterval(function () {
    //     console.log($rootScope.sendValuePp)
    // },500)
    // $scope.sendValue = '';
    //---------------选择点在好友位置-------------------
    $('.page33-select-type').change(function () {
        selectVal = $(this).val();
        if (selectVal == 0) {
            $('.page33-select-input').show();
            $('.page33-select-input').html('');
            $('.page33-select-number').hide()
            $scope.mainNumber = ''
        } else {
            $('.page33-select-input').hide();
            $('.page33-select-input').html('');
            $('.page33-select-number').show()
            $scope.mainName = '';
        }
    })

    $scope.sendAll = function () {
        var arr2 = []
        var arr3 = ''
        for (var i = 0, arr1 = []; i < $('.new-wx-equip-input4').length; i++) {
            if ($('.new-wx-equip-input4').eq(i).prop('checked')) {
                arr1.push($('.new-wx-equip-input4').eq(i).parent().next().attr('title'));
                if (i <= 4) {
                    arr2.push($('.new-wx-equip-input4').eq(i).parent().next().attr('title'));
                }
            }
        }
        if ($rootScope.sendValuePp == undefined) {
            alert("请选择朋友圈所属好友")
        } else if ($scope.mainName == '' && $scope.mainNumber == '') {
            alert('请提供目标朋友圈所在位置')
        } else if (arr1.length == 0) {
            alert('请勾选需要转发到的5台设备！');
        } else {
            // console.log(arr1.length)
            if (arr1.length > 5) {
                arr3 = arr2
            } else {
                arr3 = arr1
            }
            var sendObj = new FormData();
            sendObj.append('forwardDevices, ', JSON.stringify(arr3));
            sendObj.append('msg', $scope.mainName);
            sendObj.append('appoint', $scope.mainNumber);
            sendObj.append('devices', $scope.checkPhone);
            // sendObj.append('strategy', $scope.addPeople);
            sendObj.append('friendId', $rootScope.sendValuePp);
            // sendObj.append('contactList', JSON.stringify($scope.assList));
            $http({
                method: 'POST',
                url: $rootScope.link + "/operate/frowardMoments",
                data: sendObj,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
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
    }


}]);
