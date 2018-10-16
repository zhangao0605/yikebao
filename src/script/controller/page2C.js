app.controller('page2C', ["$rootScope", "$scope", "$http", "$timeout", function ($rootScope, $scope, $http, $timeout) {
    $('.side-bar1').show()
    $('.task-box').show()
    $('.view-box').css('height','100%')
    $rootScope.getAllFalse();
    $rootScope.activeTwo = true;
    $rootScope.navPartOne = true;
    $rootScope.isScreenPage = false;
    $scope.outSideBox = true;
    $scope.inSideBox = false;
    /*--------------------------------页面初始化请求接口查看有无设备登录过-----------------------------------------*/
    $http.get($rootScope.link + '/device/getAllDevice?pageNo=1&pageSize=15').success(function (data) {
        if (data.code == 200) {

            if (data.data.content.length == 0) {
                $scope.sweepBox = true;
            } else {
                $rootScope.DataList = data.data.content;
            }
        }else {
            alert(data.msg)
        }
    });
    $scope.sweepBoxOne = true;
    $scope.sweepBoxTwo = false;
    $scope.sweepBoxThree = false;
    $scope.sweepAssBlock = 'sweep-box-one-block-small';
    $scope.getLoad = function (n) {
        var a;
        n == 1 ? a = '已安装' : a = '未安装';
        return a;
    };
    $scope.Status = function (n) {
        return n == 0 ? '离线' : '在线';
    };
    $scope.statusHigh = function (s) {
        return s == 1 ? 'page2-red' : '';
    };

    //========================= 点击扫描设备  ==============================
    $scope.getSweepTwo = function () {
        $scope.sweepBoxOne = false;
        $scope.sweepBoxTwo = true;
        $http.get($rootScope.link + '/device/initDevice').success(function (data) {
            if (data.code == 200) {
                $scope.sweepAssBlock = 'sweep-box-one-block-big';
                $scope.sweepTime = data.data.time;
                $scope.sweepEquipNumber = 0;
                $scope.sweepOffLineNumber = 0;
                $scope.sweepShowTime = '';
                if(data.data.devices==undefined){
                    alert("扫描出错")
                }else {
                    for (var x = 0; x < data.data.devices.length; x++) {
                        if (data.data.devices[x].status == 1) {
                            $scope.sweepEquipNumber++;
                        } else {
                            $scope.sweepOffLineNumber++;
                        }
                    }
                }
                $http.get($rootScope.link + '/device/getAllDevice?pageNo=1&pageSize=15').success(function (data) {
                    //for(var i=0;i<data.data.content.length;i++){
                    //    if(data.data.content[i].status==1){
                    //        $scope.sweepEquipNumber++;
                    //    }else{
                    //        $scope.sweepOffLineNumber++;
                    //    }
                    //}
                    $scope.response = data;

                });
                $http.get($rootScope.link + '/group/getGroupDataByStatus').success(function (data) {
                    if (data.code == 200) {
                        $rootScope.onlineGroupNames = data.data;
                        //================保存默认加载的设备号=================
                        $rootScope.moArray = [];
                        for (var a = 0; a < data.data[0].deviceVos.length; a++) {
                            $rootScope.moArray.push(data.data[0].deviceVos[a].device);
                        }

                    }else {
                        alert(data.msg)
                    }
                });
                if ($scope.sweepTime < 5) {
                    $scope.sweepShowTime = 5;
                    $timeout(function () {
                        $scope.sweepBoxTwo = false;
                        $scope.sweepBoxThree = true;
                    }, 5200);
                } else {
                    $scope.sweepShowTime = data.data.time;
                    $timeout(function () {
                        $scope.sweepBoxTwo = false;
                        $scope.sweepBoxThree = true;
                    }, $scope.sweepTime);
                }

            } else {
                alert(data.msg);
            }
        });

    };

    $scope.couldChange = function (rank) {
        if (rank != 0) {
            return 'on';
        }
    };
    $scope.couldRead = function (rank) {
        if (rank != 0) {
            return true;
        }
    };
    $scope.couldSave = function (rank) {
        if (rank != 0) {
            return 'cs';
        }
    };
    $scope.couldEdit = function (rank) {
        if (rank == 0) {
            return 'ce';
        }
    };
    $scope.getDataList = function (data) {
        $rootScope.DataList = data.data.content;
        // $timeout(function(){
        //     for(var i=0;i<data.data.content.length;i++){
        //         if(data.data.content[i].rank==0){
        //             alert('请修改设备编号！');
        //             break;
        //         }
        //     }
        // },500);
        $scope.sweepBox = false;
        $('#pages2').Page({
            totalPages: data.data.totalPages, /*//分页总数*/
            liNums: 5,//分页的数字按钮数(建议取奇数)
            activeClass: 'activP', //active 类样式定义
            callBack: function (page) {
                // $scope.pages=page
                $http.get($rootScope.link + '/device/getAllDevice?pageNo=' + page + '&pageSize=15').success(function (data) {
                    if(data.code==200){
                        $rootScope.DataList = data.data.content;
                    }else {
                        alert(data.msg)
                    }

                    // $timeout(function(){
                    //     for(var i=0;i<data.data.content.length;i++){
                    //         if(data.data.content[i].rank==0){
                    //             alert('请修改设备编号！');
                    //             break;
                    //         }
                    //     }
                    // },500);
                })
            }
        });
        location.reload()
    };
    //点击扫描新设备
    $scope.getSweepBox = function () {
        $scope.sweepBox = true;
        $scope.sweepBoxOne = true;
        $scope.sweepBoxTwo = false;
        $scope.sweepBoxThree = false;
        $scope.sweepAssBlock = 'sweep-box-one-block-small';
        //$http.get($rootScope.link+'/device/initDevice').success(function(data){
        //    if(data.code==200){
        //
        //    }
        //});
    };

    //$scope.sureSweepBoxTwo=function(){
    //    $scope.sweepBox=true;
    //    $http.get($rootScope.link+'/device/getAllDevice').success(function(data){
    //        $scope.DataList=data;
    //    });
    //};

    //点击一键初始化
    //$scope.initAllApp=function(){
    //    if($scope.checked.length==0){
    //        alert('请勾选需要操作的设备！');
    //    }else{
    //        var sendObj=new FormData();
    //        sendObj.append('devices',JSON.stringify($scope.checked));
    //        $http({
    //            method:'POST',
    //            url:$rootScope.link+"/device/installDeviceApps",
    //            data: sendObj,
    //            headers: {'Content-Type':undefined},
    //            transformRequest: angular.identity
    //        }).success( function ( data ) {
    //            if(data.code==200){
    //                alert('初始化成功!');
    //                $http.get($rootScope.link+'/task/getGroupTaskInit?status=-1').success(function(data){
    //                    if(data.code==200){
    //                        $rootScope.taskList=data.data;
    //                        $rootScope.taskAll=true;
    //                        $rootScope.taskDoing=false;
    //                        $rootScope.taskWait=false;
    //                        $rootScope.taskDown=false;
    //                        $rootScope.newBell=true;
    //                    }
    //                });
    //            }else{
    //                alert('初始化任务失败！ 请重试！');
    //            }
    //        });
    //    }
    //};

    //导出
    $scope.wayOut = function () {
        $(".way-out-table").table2excel({
            exclude: ".noExl",
            name: "Excel Document Name",
            filename: "设备帐号列表",
            exclude_img: true,
            exclude_links: true,
            exclude_inputs: true
        });
    };
    ////刷新
    //$scope.getNewList=function(){
    //    $http.get($rootScope.link+'/wechat/getWeChatInfo').success(function(data){
    //        if(data.code==200){
    //            alert('添加任务成功!');
    //            $http.get($rootScope.link+'/task/getGroupTaskInit?status=-1').success(function(data){
    //                if(data.code==200){
    //                    $rootScope.taskList=data.data;
    //                    $rootScope.taskAll=true;
    //                    $rootScope.taskDoing=false;
    //                    $rootScope.taskWait=false;
    //                    $rootScope.taskDown=false;
    //                    $rootScope.newBell=true;
    //                }
    //            });
    //        }else{
    //            alert('刷新失败！请重试！');
    //        }
    //    });
    //};

    // ==============================删除设备==================================
    $scope.deleteEquip = function (device) {
        $http.get($rootScope.link + '/device/delDevice?device=' + device).success(function (data) {
            if (data.code == 200) {
                alert('删除成功！');
                if ($scope.pages == 0) {
                    $scope.pages = 1
                }
                $http.get($rootScope.link + '/device/getAllDevice?pageNo=1&pageSize=15').success(function (data) {
                    if (data.code == 200) {
                        if (data.data.content.length == 0) {
                            $scope.sweepBox = true;
                        } else {
                            // location.reload()
                            $http.get($rootScope.link + '/device/getAllDevice?pageNo=' + $scope.pages + '&pageSize=15').success(function (data) {
                                $rootScope.DataList = data.data.content;
                                // $('#pages2').Page({
                                //     totalPages: data.data.totalPages,//分页总数
                                //     liNums: 5,//分页的数字按钮数(建议取奇数)
                                //     activeClass: 'activP', //active 类样式定义
                                //     callBack: function (page) {
                                //         $scope.pages=page
                                //         $http.get($rootScope.link + '/device/getAllDevice?pageNo=' + page + '&pageSize=15').success(function (data) {
                                //             $rootScope.DataList = data.data.content;
                                //             // console.log($rootScope.DataList)
                                //         })
                                //     }
                                // });
                            });
                        }
                    }
                });
                var pp = $("tbody tr").length / 2;
                // console.log(pp)
                if (pp == 1) {
                    // $(".pagingUl li").last().prev().click(function () {
                    //     $(".pagingUl li").last().removeClass("activP").remove()
                    //
                    // })
                    location.reload()
                }
            } else {
                alert(data.msg);
            }
        });
    };



    //==========================查找我的设备=================
    $scope.showMyEquip = function (device) {
        $http.get($rootScope.link + '/device/showDifferent?device=' + device).success(function (data) {
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
            } else {
                alert(data.msg);
            }
        });
    };
    $scope.isShow = function (s) {
        if (s == 1) {
            return true;
        }
    };
    $scope.rankAss = function (rank) {
        return rank == 1000 ? '-' : rank;
    };
    $scope.getPage = function (index) {
        return $scope.assPage * 15 + index;
    }
}]);
