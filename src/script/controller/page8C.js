app.controller('page8C', ["$rootScope", "$scope", "$location", "$anchorScroll", "$http", function ($rootScope, $scope, $location, $anchorScroll, $http) {
    $rootScope.getAllFalse();
    $rootScope.activeEight = true;
    $rootScope.navPartThree = true;
    $rootScope.isScreenPage = false;
    //算法配置
    $scope.mapRang = '2000米';
    // $scope.timeInterval = 5;
    $scope.sayHello = '您好！很高兴认识您！';
    $scope.upFile = ''
    $scope.mapLocation = '';
    $scope.addPeopleNumber = 10;
    $scope.addSex = '全部';
    $scope.maxTime = 10;
    $scope.minTime = 1;


    function G(id) {
        return document.getElementById(id);
    }

    var map = new BMap.Map("page8-map");
    map.centerAndZoom("北京", 12);                   // 初始化地图,设置城市和地图级别。
    map.enableScrollWheelZoom(true);
    map.addEventListener('click', function (e) {
        //var myIcon=new BMap.Icon("images/map-logo.png", new BMap.Size(23,33));
        //var marker = new BMap.Marker(new BMap.Point(e.point.lng,e.point.lat ),{icon:myIcon})
        //map.addOverlay(marker);
        $.ajax({
            type: 'GET',
            url: 'http://api.map.baidu.com/geocoder/v2/?ak=HbUVYMUg6PwbOnXkztdgSQlQ&callback=renderReverse&location=' + e.point.lat + ',' + e.point.lng + '&output=json&pois=1',
            dataType: 'JSONP',
            success: function (data1) {
                $scope.mapLocation = data1.result.formatted_address;
                $scope.$apply();
            }
        });
    });
    var ac = new BMap.Autocomplete(    //建立一个自动完成的对象
        {
            "input": "suggestId"
            , "location": map
        });

    ac.addEventListener("onhighlight", function (e) {  //鼠标放在下拉列表上的事件
        var str = "";
        var _value = e.fromitem.value;
        var value = "";
        if (e.fromitem.index > -1) {
            value = _value.province + _value.city + _value.district + _value.street + _value.business;
        }
        str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;

        value = "";
        if (e.toitem.index > -1) {
            _value = e.toitem.value;
            value = _value.province + _value.city + _value.district + _value.street + _value.business;
        }
        str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
        G("searchResultPanel").innerHTML = str;
    });

    var myValue;
    ac.addEventListener("onconfirm", function (e) {    //鼠标点击下拉列表后的事件
        var _value = e.item.value;
        myValue = _value.province + _value.city + _value.district + _value.street + _value.business;
        G("searchResultPanel").innerHTML = "onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;

        setPlace();
    });

    function setPlace() {
        map.clearOverlays();    //清除地图上所有覆盖物
        function myFun() {
            var pp = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果
            map.centerAndZoom(pp, 18);
            map.addOverlay(new BMap.Marker(pp));    //添加标注
            $scope.mapPointLng = pp.lng;
            $scope.mapPointLat = pp.lat;
        }

        var local = new BMap.LocalSearch(map, { //智能搜索
            onSearchComplete: myFun
        });
        local.search(myValue);
    }

// ====================  导入话术文件  ==================
    var selectVal = 1
    $('.clickSelect').change(function () {
        selectVal = $(this).val();
        if (selectVal == 1) {
            $('.page9-say-hello').show();
            $('.clickAddText').hide()
            $scope.sayHello = '您好！很高兴认识您！';
            $scope.upFile = ''
        } else {
            $('.page9-say-hello').hide();
            $('.clickAddText').show();
            $scope.sayHello = ''
        }
    })
    $scope.clickAddText = function () {
        $('.page7-select').css("display", "block")
    }

    // setInterval(function () {
    //     console.log($scope.sayHello)
    // }, 1000)


    $scope.sendAll = function () {
        for (var i = 0, arr = []; i < $('.new-wx-equip-input8').length; i++) {
            if ($('.new-wx-equip-input8').eq(i).prop('checked')) {
                arr.push($('.new-wx-equip-input8').eq(i).parent().next().attr('title'));
            }
        }


        var sex = 0;
        if ($scope.addSex == '全部') {
            sex = 0;
        } else if ($scope.addSex == '男') {
            sex = 1;
        } else if ($scope.addSex == '女') {
            sex = 2;
        }
        if (arr.length == 0) {
            alert('请勾选需要操作的设备！');
        } else if ($scope.mapRang == '') {
            alert('请选择粒子算法的范围！');
        } else if ($scope.timeInterval == '') {
            alert('请填写时间间隔！');
        }
        else if ($scope.mapLocation == '') {
            alert('请输入定位的地址！');
        } else if ($scope.addPeopleNumber == '') {
            alert('请输入加人的数量!')
        } else {
            var sendObj = new FormData();
            sendObj.append('devices', JSON.stringify(arr));
            sendObj.append('file', $scope.upFile);
            sendObj.append('maxInterval', $scope.maxTime);
            sendObj.append('minInterval', $scope.minTime);
            sendObj.append('msg', $scope.sayHello);
            // sendObj.append('range', parseInt($scope.mapRang));
            sendObj.append('longitude', $scope.mapPointLng);
            sendObj.append('latitude', $scope.mapPointLat);
            sendObj.append('num', $scope.addPeopleNumber);
            sendObj.append('sex', sex);
            $http({
                method: 'POST',
                url: $rootScope.link + "/wechatPlus/sayHello",
                data: sendObj,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (response) {
                //上传成功的操作
                if (response.code == 200) {
                    alert('任务添加成功!');
                    $location.hash('page-top8');
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