
app.controller('page30C',["$rootScope","$scope","$http","$location","$anchorScroll",function($rootScope, $scope, $http, $location, $anchorScroll){
    $rootScope.getAllFalse();
    $rootScope.navPartEight = true;
    $rootScope.activeThirty = true;
    $rootScope.isScreenPage = false;
    $scope.sendAllButton = true
    $scope.isClear = 0;
    $scope.clear = function ($event) {
        if ($event.target.checked) {
            $scope.isClear = 1;
        } else {
            $scope.isClear = 0;
        }
    };
    $scope.sendAll = function () {
        for (var i = 0, arr = []; i < $('.new-wx-equip-input').length; i++) {
            if ($('.new-wx-equip-input').eq(i).prop('checked')) {
                arr.push($('.new-wx-equip-input').eq(i).parent().next().attr('title'));
            }
        }
        if(arr.length == 0){
            alert('请勾选需要操作的设备！');
        }else{
            var sendObj = new FormData();
            sendObj.append('devices', JSON.stringify(arr));
            sendObj.append('clear', $scope.isClear);
            sendObj.append('strategy', $scope.addPeople);
            sendObj.append('count', $scope.addPeopleCount);
            sendObj.append('contactList', JSON.stringify($scope.assList));
            $http({
                method: 'POST',
                url: $rootScope.link + "/wechatPlus/addContacts",
                data: sendObj,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (response) {
                console.log(response.code)
                //上传成功的操作
                if (response.code == 200) {
                    alert('任务添加成功!');
                    $location.hash('page-top6');
                    $anchorScroll();
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
                }
            });
        }
    };
    $scope.assRadioChoose = false;
    $scope.addPeople = 1;
    $scope.addPeopleCount = 1;
    $scope.getAssHide = function () {
        $scope.assRadioChoose = false;
        $scope.addPeople = 1;
    };
    $scope.getAssShow = function () {
        $scope.assRadioChoose = true;
        $scope.addPeople = 0;
    }
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main-chart'));

    // 指定图表的配置项和数据
    var option = {
        title: {
            text: '近七天好友新增好友人数统计'
        },
        tooltip: {},
        legend: {
            data:['']
        },
        xAxis: {
            data: ["哈哈哈哈","羊毛衫","雪纺衫","裤子","高跟鞋","袜子","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
            name: '好友新增人数',
            type: 'bar',
            data: [105, 20, 36, 10, 10, 20, 20, 36, 10, 10, 20]
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);


    //----------------------------------------------
    var myChart1 = echarts.init(document.getElementById('main-chart1'));
    option = {
        title : {
            text: '男女比例',
            // subtext: '纯属虚构',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['男','女']
        },
        series : [
            {
                name: '访问来源',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:335, name:'男'},
                    {value:310, name:'女'},
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    myChart1.setOption(option);

    //----------------------------------------------------------
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main-chart2'));

    // 指定图表的配置项和数据
    var option = {
        title: {
            text: '近七天操作统计'
        },
        tooltip: {},
        legend: {
            data:['']
        },
        xAxis: {
            data: ["哈哈哈哈","羊毛衫","雪纺衫","裤子","高跟鞋","袜子","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
            name: '好友新增人数',
            type: 'bar',
            data: [105, 20, 36, 10, 10, 20, 20, 36, 10, 10, 20]
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}])