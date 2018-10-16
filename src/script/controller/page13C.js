app.controller('page13C',["$rootScope","$scope","$location","$anchorScroll","$http",function ($rootScope, $scope, $location, $anchorScroll, $http) {
    $rootScope.getAllFalse();
    $rootScope.activeThirdteen = true;
    $rootScope.navPartThree = true;
    $rootScope.isScreenPage = true;
    //锚点的跳转 回到导航标题处
    $scope.getNav = function () {
        $location.hash('nav-bottom13');
        $anchorScroll();
    };
    //筛选数组
    $scope.selected1 = [];
    $scope.chooseedEquip = 0;
    $scope.chooseNumber = 0;
    $scope.unChooseNumber = 100;
    var updateSelected1 = function (action, id, count) {
        if (action == 'add' && $scope.selected1.indexOf(id) == -1) {
            $scope.selected1.push(id);
            $scope.chooseedEquip += count;
        }
        if (action == 'remove' && $scope.selected1.indexOf(id) != -1) {
            var idx = $scope.selected1.indexOf(id);
            $scope.selected1.splice(idx, 1);
            $scope.chooseedEquip -= count;
        }
    };
    $scope.checkOne1 = function ($event, id, count) {
        var action = ($event.target.checked ? 'add' : 'remove');
        updateSelected1(action, id, count);
        $scope.chooseNumber = $scope.chooseedEquip / $rootScope.equipCounts * 100;
        $scope.unChooseNumber = 100 - $scope.chooseNumber;
        $('.all-equip-line-block').css({'width': $scope.chooseNumber + '%', 'transition': '1s'});
        $('.none-equip-line-block').css({'width': $scope.unChooseNumber + '%', 'transition': '1s'});
    };
    $scope.isChecked1 = function (id) {
        return $scope.selected1.indexOf(id) >= 0;
    };
    $scope.saySomething = '';
    $scope.timeInterval = 5;
    //上传朋友圈图片
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
    $scope.picArr = [];

    //筛选数组
    $scope.selected = [];
    var updateSelected = function (action, id) {
        if (action == 'add' && $scope.selected.indexOf(id) == -1) {
            $scope.selected.push(id);
        }
        if (action == 'remove' && $scope.selected.indexOf(id) != -1) {
            var idx = $scope.selected.indexOf(id);
            $scope.selected.splice(idx, 1);
        }
    };
    $scope.checkOne = function ($event, id) {
        var action = ($event.target.checked ? 'add' : 'remove');
        updateSelected(action, id);
    };
    $scope.isChecked = function (id) {
        return $scope.selected.indexOf(id) >= 0;
    };
    //防封号策略C
    $scope.picNumberBox = false;
    $scope.getPicBox = function () {
        $scope.picNumberBox = true;
    };
    $scope.cancelPicBox = function () {
        $scope.picNumberBox = false;
        $scope.mustChoose = [];
        $scope.unMChoose = [];
    };
    $scope.mustChoose = [];
    $scope.unMChoose = [];
    $scope.getSureButton = function () {
        $scope.mustChoose = $scope.selected.sort();
        $scope.unChoose = [];
        $scope.tmp = $scope.picArr.concat($scope.selected);
        $scope.o = {};
        for (var i = 0; i < $scope.tmp.length; i++) {
            ($scope.tmp[i] in $scope.o) ? $scope.o[$scope.tmp[i]]++ : $scope.o[$scope.tmp[i]] = 1;
        }
        for (var x in $scope.o) {
            if ($scope.o[x] == 1) {
                $scope.unChoose.push(parseInt(x));
            }
        }
        $scope.unMChoose = $scope.unChoose.sort();
        $scope.picNumberBox = false;
    };

    //筛选数组
    $scope.selected2 = [];
    var updateSelected2 = function (action, id) {
        if (action == 'add' && $scope.selected2.indexOf(id) == -1) {
            $scope.selected2.push(id);
        }
        if (action == 'remove' && $scope.selected2.indexOf(id) != -1) {
            var idx = $scope.selected2.indexOf(id);
            $scope.selected2.splice(idx, 1);
        }
    };
    $scope.checkOne2 = function ($event, id) {
        var action = ($event.target.checked ? 'add' : 'remove');
        updateSelected2(action, id);
    };
    $scope.isChecked2 = function (id) {
        return $scope.selected2.indexOf(id) >= 0;
    };
    //防封号策略C
    $scope.picNumberBox1 = false;
    $scope.getPicBox2 = function () {
        $scope.picNumberBox1 = true;
    };
    $scope.cancelPicBox2 = function () {
        $scope.picNumberBox1 = false;
        $scope.operate = [];
    };
    $scope.operate = [];
    $scope.getSureButton2 = function () {
        $scope.operate = $scope.selected2.sort();
        $scope.picNumberBox1 = false;
    };

    $scope.aTag = '';
    $scope.aMsg = '';











    $scope.sendAll = function () {

        var saySomething = $(".FontAndEmjoy13").html();

        for (var i = 0, arr = []; i < $('.new-wx-equip-input13').length; i++) {
            if ($('.new-wx-equip-input13').eq(i).prop('checked')) {
                arr.push($('.new-wx-equip-input13').eq(i).parent().next().attr('title'));
            }
        }
        if (saySomething == '') {
            alert('请编辑朋友圈内容');
        } else if (arr == 0) {
            alert('请勾选需要操作的设备！');
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
            $scope.sendObj.append('content', saySomething);
            $scope.sendObj.append('devices', JSON.stringify(arr));
            $scope.sendObj.append('interval', $scope.timeInterval);
            $scope.sendObj.append('msg', $scope.aMsg);
            $scope.sendObj.append('number', JSON.stringify($scope.operate));
            $scope.sendObj.append('tag', $scope.aTag);
            $scope.sendObj.append('mustNumber', JSON.stringify($scope.mustChoose));
            $scope.sendObj.append('randomNumber', JSON.stringify($scope.unMChoose));
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
                        }else {
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
}]);
