app.controller('page15C', ["$rootScope", "$scope", "$location", "$anchorScroll", "$http", "$timeout", function ($rootScope, $scope, $location, $anchorScroll, $http, $timeout) {
    $rootScope.getAllFalse();
    $rootScope.activeFifteen = true;
    $rootScope.navPartThree = true;
    $rootScope.isScreenPage = false;
    //锚点的跳转 回到导航标题处
    $scope.getNav = function () {
        $location.hash('nav-bottom15');
        $anchorScroll();
    };
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
        $http.get($rootScope.link + '/operate/getZombieFan?groupIds=' + JSON.stringify($scope.selected)).success(function (data) {
            if (data.code == 200) {
                $scope.zombieList = data.data;
            } else {
                alert(data.msg);
            }
        });
    };
    $scope.isChecked = function (id) {
        return $scope.selected.indexOf(id) >= 0;
    };

    //配置策略
    // $scope.timeInterval = 5;
    $scope.maxTime = 10;
    $scope.minTime = 1
    $scope.upFile = ''
    // $scope.saySomething = '您好！很高兴认识您！';

    //====================  导入话术文件  ==================
    var selectVal = 1
    $('.clickSelect').change(function () {
        selectVal = $(this).val();
        if (selectVal == 1) {
            $('.page9-say-hello').show();
            $('.emjoyOpen-page15').show();
            $('.page9-say-hello').html('');
            $('.clickAddText').hide()
            // $scope.saySomething = '您好！很高兴认识您！';
            $scope.upFile = ''
        } else {
            $('.page9-say-hello').hide();
            $('.emjoyOpen-page15').hide();
            $('.clickAddText').show();
            // $scope.saySomething = ''
            $('.page9-say-hello').html('');
        }
    })
    $scope.select = false;
    $scope.clickAddText = function () {
        $scope.select = true;
        // $scope.saySomething=$(".page7-select option:selected").text();
    }
    $scope.sendAll = function () {
        var saySomething = $(".FontAndEmjoy15").html();
        for (var i = 0, arr = []; i < $('.new-wx-equip-input15').length; i++) {
            if ($('.new-wx-equip-input15').eq(i).prop('checked')) {
                arr.push($('.new-wx-equip-input15').eq(i).parent().next().attr('title'));
            }
        }
        if (arr.length == 0) {
            alert('请勾选需要操作的设备！');
        } else if (saySomething.length == 0 && typeof($scope.upFile) == "string") {
            alert('请输入打招呼用语或选择话术文件！');
        } else {
            var reger = /<img.*?(?:>|\/>)/g;
            var srcReg = /alt=[\'\"]?([^\'\"]*)[\'\"]?/i;
            var arr1 = saySomething.match(reger)
            if (arr1 == null) {

            } else {
                var tt = []
                console.log(arr1)
                for (var i = 0; i < arr1.length; i++) {
                    var src = arr1[i].match(srcReg);
                    if (src[1]) {
                        tt.push(src[1])
                    }
                }
                var result = saySomething.match(/<img.*?(?:>|\/>)/g);

                // console.log(result)
                for (var i = 0; i < result.length; i++) {
                    saySomething = saySomething.replace(result[i], tt[i])
                }
            }
            var sendObj = new FormData();
            sendObj.append('msg', saySomething);
            sendObj.append('devices', JSON.stringify(arr));
            sendObj.append('file', $scope.upFile);
            sendObj.append('maxInterval', $scope.maxTime);
            sendObj.append('minInterval', $scope.minTime);
            $http({
                method: 'POST',
                url: $rootScope.link + "/operate/clearZombieFan",
                data: sendObj,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (response) {
                //上传成功的操作
                if (response.code == 200) {
                    alert('任务添加成功!');
                    $location.hash('page-top15');
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
