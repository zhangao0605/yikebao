app.controller('page3C',["$rootScope","$scope","$http",function ($rootScope, $scope, $http) {
    $rootScope.getAllFalse();
    $rootScope.activeThree = true;
    $rootScope.navPartOne = true;
    $rootScope.isScreenPage = false;
    //默认加载
    $scope.changeModel=false;
    $scope.getLoad = function (n) {
        var a;
        n == 1 ? a = '已安装' : a = '未安装';
        return a;
    };
    $scope.Status = function (n) {
        return n == 0 ? '离线' : '在线';
    };
    $scope.getDisabled = function (n) {
        return n == 0 ? true : false;
    };
    // ng-change 事件
    $scope.checked = [];
    $scope.selectAll = function () {
        if ($scope.checkAll) {
            $scope.checked = [];
            angular.forEach($scope.DataList, function (i) {
                if (i.status == 1) {
                    i.checked = true;
                    $scope.checked.push(i.device);
                }
            })
        } else {
            angular.forEach($scope.DataList, function (i) {
                if (i.status == 1) {
                    i.checked = false;
                    $scope.checked = [];
                }
            })
        }
    };
    $scope.selectOne = function () {
        $scope.isAll = [];
        angular.forEach($scope.DataList, function (i) {
            var index = $scope.checked.indexOf(i.device);
            if (i.checked && index === -1) {
                $scope.checked.push(i.device);
            } else if (!i.checked && index != -1) {
                $scope.checked.splice(index, 1);
            }
            if (i.status == 1) {
                $scope.isAll.push(i.device);
            }
        });
        if ($scope.isAll.length === $scope.checked.length) {
            $scope.checkAll = true;
        } else {
            $scope.checkAll = false;
        }
    };
    $http.get($rootScope.link + '/device/getAllDeviceByStatus?pageNo=1&pageSize=15').success(function (data) {
        if (data.code == 200) {
            $scope.DataList = data.data.content;
            $('#pages3').Page({
                totalPages: data.data.totalPages,//分页总数
                liNums: 5,//分页的数字按钮数(建议取奇数)
                activeClass: 'activP', //active 类样式定义
                callBack: function (page) {
                    $http.get($rootScope.link + '/device/getAllDeviceByStatus?pageNo=' + page + '&pageSize=15').success(function (data) {
                        $scope.DataList = data.data.content;
                    })
                }
            });
        }else{
            alert(data.msg)
        }

    });

    $scope.openAll = function (n) {
        if ($scope.checked.length == 0) {
            alert('请勾选需要操作的设备!');
        } else {
            var sendObj = new FormData();
            sendObj.append('devices', JSON.stringify($scope.checked));
            sendObj.append('taskId', n);
            $http({
                method: 'POST',
                url: $rootScope.link + "/device/open",
                data: sendObj,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (data) {
                if (data.code == 200) {
                    alert('添加任务栏成功！');
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
                    alert(data.msg)
                }
            });
        }
    };
    $scope.closeAll = function (n) {
        if ($scope.checked.length == 0) {
            alert('请勾选需要操作的设备!');
        } else {
            var sendObj = new FormData();
            sendObj.append('devices', JSON.stringify($scope.checked));
            sendObj.append('taskId', n);
            $http({
                method: 'POST',
                url: $rootScope.link + "/device/close",
                data: sendObj,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (data) {
                if (data.code == 200) {
                    alert('添加任务栏成功！');
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
                    alert(data.msg)
                }
            });
        }
    };

    $scope.backHome = function () {
        if ($scope.checked.length == 0) {
            alert('请勾选需要操作的设备！');
        } else {
            $http.get($rootScope.link + '/device/backHome?devices=' + JSON.stringify($scope.checked)).success(function (data) {
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

// //-------------改变手机型号---------------
//     $scope.first = [
//         {
//             id: 1,
//             name: '前端',
//             child: [
//                 {id: 1, name: 'CSS3'},
//                 {id: 2, name: 'HTML'},
//                 {id: 3, name: 'js'},
//                 {id: 4, name: 'angular'},
//                 {id: 5, name: 'bootstrap'}
//             ]
//         },
//         {
//             id: 2,
//             name: '后端',
//             child: [
//                 {id: 1, name: 'java'},
//                 {id: 2, name: 'php'},
//                 {id: 3, name: 'node'}
//             ]
//         }
//     ];


    $scope.changePhone=function () {
        $http.get($rootScope.link + '/operate/getPhoneBrand').success(function (data) {
            if (data.code == 200) {
               $scope.phoneBrand=data.data
            }else {
                alert(data.msg);
            }
        });
        $scope.changeModel=true

    }
    $scope.notChange=function () {
        $scope.changeModel=false
    }
    $scope.changeOne = function (oneData,item) {
        $scope.firstBrand=$("#nonon").val()
        var sendObj = new FormData();
        sendObj.append('brand',$scope.firstBrand);
        $http({
            method: 'POST',
            url: $rootScope.link + "/operate/getAllPhoneModelByBrand",
            data: sendObj,
            headers: {'Content-Type': undefined},
            transformRequest: angular.identity
        }).success(function (data) {
            if (data.code == 200) {
                $scope.SecondBrand=data.data

            }else {
                alert(data.msg);
            }
        });
    };
    $scope.changeTwo = function () {
        $scope.sreeBrand=$("#non option:selected").val()

    };
    $scope.upChange=function () {
        if ($scope.checked.length == 0) {
            alert('请勾选需要操作的设备!');
            return
        }
        if($scope.firstBrand==undefined){
            alert('请选择手机品牌')
            return
        }
        if($scope.sreeBrand==undefined){
            alert('请选择手机型号')
            return
        } else {
            var sendObj = new FormData();
            sendObj.append('devices', JSON.stringify($scope.checked));
            sendObj.append('modelId',$scope.sreeBrand);
            $http({
                method: 'POST',
                url: $rootScope.link + "/operate/modifyPhoneName",
                data: sendObj,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (data) {
                if (data.code == 200) {
                    $scope.changeModel=false
                    alert('添加任务栏成功！');
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
                }else{
                    alert(data.msg)
                }
            });
        }
    }
}]);