app.controller('page14C',["$rootScope","$scope","$location","$anchorScroll","$http",function ($rootScope, $scope, $location, $anchorScroll, $http) {
    $rootScope.getAllFalse();
    $rootScope.activeFourteen = true;
    $rootScope.navPartThree = true;
    $rootScope.isScreenPage = false;
    //锚点的跳转 回到导航标题处
    $scope.getNav = function () {
        $location.hash('nav-bottom14');
        $anchorScroll();
    };
    //筛选数组
    $scope.selected = [1];
    $scope.chooseedEquip = 0;
    $scope.chooseNumber = 0;
    $scope.unChooseNumber = 100;
    var updateSelected = function (action, id, count) {
        if (action == 'add' && $scope.selected.indexOf(id) == -1) {
            $scope.selected.push(id);
            $scope.chooseedEquip += count;
        }
        if (action == 'remove' && $scope.selected.indexOf(id) != -1) {
            var idx = $scope.selected.indexOf(id);
            $scope.selected.splice(idx, 1);
            $scope.chooseedEquip -= count;
        }
    };


    //app.directive('groupCheckAllza', function () {
    //    return {
    //        link: function (scope, elem) {
    //            elem.click(function () {
    //                if (elem.prop('checked')) {
    //                    elem.parent().addClass('on');
    //                    elem.parent().parent().next().find('p').addClass('on').find('input').prop('checked', function () {
    //                        return true
    //                    });
    //                } else {
    //                    elem.parent().removeClass('on');
    //                    elem.parent().parent().next().find('p').removeClass('on').find('input').prop('checked', function () {
    //                        return false
    //                    });
    //                }
    //            });
    //        }
    //    }
    //});


    $scope.checkOne = function ($event, id, count) {
        var action = ($event.target.checked ? 'add' : 'remove');
        updateSelected(action, id, count);
        $scope.chooseNumber = $scope.chooseedEquip / $rootScope.equipCounts * 100;
        $scope.unChooseNumber = 100 - $scope.chooseNumber;
        $('.all-equip-line-block').css({'width': $scope.chooseNumber + '%', 'transition': '1s'});
        $('.none-equip-line-block').css({'width': $scope.unChooseNumber + '%', 'transition': '1s'});
        $http.get($rootScope.link + '/operate/getWechatsByGroup?groupIds=' + JSON.stringify($scope.selected) + '&pageNo=1&pageSize=5').success(function (data) {
            $scope.WxList = data.data.content;
            $('#pages14').Page({
                totalPages: data.data.totalPages,//分页总数
                liNums: 5,//分页的数字按钮数(建议取奇数)
                activeClass: 'activP', //active 类样式定义
                callBack: function (page) {
                    $http.get($rootScope.link + '/operate/getWechatsByGroup?groupIds=' + JSON.stringify($scope.selected) + '&pageNo=' + page + '&pageSize=5').success(function (data) {
                        $scope.WxList = data.data.content;
                    })
                }
            });
        });
    };
    $scope.isChecked = function (id) {
        return $scope.selected.indexOf(id) >= 0;
    };
    $http.get($rootScope.link + '/operate/getWechatsByGroup?groupIds=' + JSON.stringify($scope.selected) + '&pageNo=1&pageSize=5').success(function (data) {
        $scope.WxList = data.data.content;
        $('#pages14').Page({
            totalPages: data.data.totalPages,//分页总数
            liNums: 5,//分页的数字按钮数(建议取奇数)
            activeClass: 'activP', //active 类样式定义
            callBack: function (page) {
                $http.get($rootScope.link + '/operate/getWechatsByGroup?groupIds=' + JSON.stringify($scope.selected) + '&pageNo=' + page + '&pageSize=5').success(function (data) {
                    $scope.WxList = data.data.content;
                })
            }
        });
    });
    $scope.cleaChuanyue=function () {
        for (var i = 0, arr = []; i < $('.new-wx-equip-input14').length; i++) {
            if ($('.new-wx-equip-input14').eq(i).prop('checked')) {
                arr.push($('.new-wx-equip-input14').eq(i).parent().next().attr('title'));
            }
        }
        if (arr.length == 0) {
            alert('请勾选设备！');
        }else{
            var sendObj1 = new FormData();
            sendObj1.append('devices', JSON.stringify(arr));
            $http({
                method: 'POST',
                url: $rootScope.link + "/operate/clearLocation",
                data: sendObj1,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (response) {
                //上传成功的操作
                if (response.code == 200) {
                    alert('任务添加成功!');
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
                    alert(response.msg)
                }
            });
        }

    }




    //算法配置
    $scope.mapRange = '2000米';
    $scope.mapLocation = '';
    $scope.sendAll = function () {
        for (var i = 0, arr = []; i < $('.new-wx-equip-input14').length; i++) {
            if ($('.new-wx-equip-input14').eq(i).prop('checked')) {
                arr.push($('.new-wx-equip-input14').eq(i).parent().next().attr('title'));
            }
        }
        if (arr.length == 0) {
            alert('请勾选设备！');
        } else if ($scope.mapLocation == '') {
            alert('请填写需要定位的地址！');
        } else {
            var sendObj = new FormData();
            sendObj.append('devices', JSON.stringify(arr));
            sendObj.append('range', parseInt($scope.mapRange));
            sendObj.append('longitude', $scope.mapPointLng);
            sendObj.append('latitude', $scope.mapPointLat);
            $http({
                method: 'POST',
                url: $rootScope.link + "/operate/changeLocation",
                data: sendObj,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (response) {
                //上传成功的操作
                if (response.code == 200) {
                    alert('任务添加成功!');
                    $location.hash('page-top14');
                    $anchorScroll();
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
                } else{
                    alert(response.msg)
                }
            });
        }
    };

    function G(id) {
        return document.getElementById(id);
    }

    var map = new BMap.Map("page14-map");
    map.centerAndZoom("北京", 12);                   // 初始化地图,设置城市和地图级别。
    map.enableScrollWheelZoom(true); //为了王哥
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
}]);
