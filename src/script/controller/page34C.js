app.controller('page34C', ["$rootScope", "$scope", "$http", "$timeout", function ($rootScope, $scope, $http, $timeout) {
    $('.side-bar1').css('display', 'block')
    $('.task-box').css('display', 'block')
    $rootScope.getAllFalse();
    $rootScope.activemmp = true;
    $rootScope.navPartOne = true;
    $rootScope.isScreenPage = false;
    $scope.moveBox = false;
    $scope.editBoxTwo = false;
    $scope.editBoxOne = false;
    $scope.editBoxThree = false;
    $scope.alertSuccess = false;
    $scope.alertDanger = false;
    $scope.alertWaring = false;
    $scope.choseClick = false;
    $scope.offline = 0
    $scope.online = 0;
    $scope.page1CheckNums = 0;
    $scope.UpVersion = ''
    $scope.logout = function () {
        $http.get($rootScope.link + '/logout').success(function (data) {
            if (data.code == 200) {
                window.location.href = 'http://' + window.location.host + '/wgcs/#/login';

            } else {
                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;注销登录失败');
                setTimeout(function () {
                    $('.page1-alert-small-danger').hide(300)
                }, 2000)
            }
        })
    }
    $scope.UpWechatBanben = function (s, q) {
        var a1 = $scope.UpVersion;
        var a2 = s
        var a3 = a1.split('.');
        var a4 = a2.split('.');
        if (a3.length < a4.length) {
            var a5 = a4.length - a3.length
            for (var i = 0; i < a5; i++) {
                a3.push('')
            }
        }
        if (a4.length < a3.length) {
            var a6 = a3.length - a4.length
            for (var i = 0; i < a6; i++) {
                a4.push('')
            }
        }
        for (var i = 0; i < a3.length; i++) {
            var qwe = parseInt(a3[i])
            var qwe1 = parseInt(a4[i])
            if (qwe > qwe1) {
                s = ''
                break;
            } else if (qwe < qwe1) {
                s = 'noShow'
                break
            }
            else {
                s = 'noShow'
            }
        }
        if (q == 1) {

        } else {
            s = 'noShow'
        }
        return s
    }
    /*-------微信号升级-------*/
    $scope.page1UpHJi = function (e) {
        var arr = [];
        arr.push(e)
        var sendObj = new FormData();
        sendObj.append('devices', JSON.stringify(arr));
        $http({
            method: 'POST',
            url: $rootScope.link + "/device/updateWechat",
            data: sendObj,
            headers: {'Content-Type': undefined},
            transformRequest: angular.identity
        }).success(function (data) {
            if (data.code == 200) {
                var timer = setInterval(function () {    //开启定时器
                    if ($rootScope.comWechatNum == true) {
                        $http.get($rootScope.link + '/wechat/getWechatVersion').success(function (data) {
                            if (data.code == 200) {
                                $rootScope.initOver = true;
                                $scope.UpVersion = data.msg
                            } else {
                            }
                        });
                        $http.get($rootScope.link + '/device/getAllDevice?pageNo=1&pageSize=15').success(function (data) {
                            if (data.code == 200) {
                                if (data.data.content.length == 0) {
                                    $scope.sweepBox = true;
                                    $('.page3-div-checkbox1').attr('checked', false).parent().removeClass('on')
                                } else {
                                    $rootScope.DataList = data.data.content;
                                    if (data.data.content.length > 0) {
                                        $scope.offline = 0
                                        $scope.online = 0;
                                        for (var i = 0; i < data.data.content.length; i++) {
                                            if (data.data.content[i].status == 0) {
                                                $scope.offline++;
                                            } else {
                                                $scope.online++
                                            }
                                        }
                                    }
                                }

                                $scope.page1InitDataLength = data.data.totalElements;
                                $('.M-box1').pagination({
                                    totalData: $scope.page1InitDataLength,
                                    pageCount: 1,
                                    showData: 15,
                                    coping: true,
                                    count: 2,
                                    callback: function (api) {
                                        var data = {
                                            page: api.getCurrent(),
                                        };
                                        $http.get($rootScope.link + '/device/getAllDevice?pageNo=' + data.page + '&pageSize=15').success(function (data) {
                                            $scope.response = data;
                                            $scope.page1InitDataLength = data.data.totalElements

                                            $('.page3-div-checkbox1').attr('checked', false).parent().removeClass('on')
                                            if (data.data.content.length > 0) {
                                                $scope.offline = 0
                                                $scope.online = 0;
                                                for (var i = 0; i < data.data.content.length; i++) {
                                                    if (data.data.content[i].status == 0) {
                                                        $scope.offline++;
                                                    } else {
                                                        $scope.online++
                                                    }
                                                }
                                            }
                                        });
                                    }
                                })
                                clearInterval(timer)
                                $rootScope.comWechatNum = false
                            } else {
                                $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                                setTimeout(function () {
                                    $('.page1-alert-danger').hide(300)
                                }, 2000)
                            }
                        });
                    }
                }, 2000);
                $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;微信升级任务添加成功');
                setTimeout(function () {
                    $('.page1-alert-waring').hide(300)
                }, 2000)
            } else {
                $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;微信升级任务添加失败，请重试并检查设备连接');
                setTimeout(function () {
                    $('.page1-alert-danger').hide(300)
                }, 2000)
            }
        });
    }
    /*-------单个手机同屏-------*/
    $scope.isShowScreen = function (e) {
        localStorage.removeItem("devices")
        localStorage.setItem('devices', '' + e + '')
        var mkmk = localStorage.getItem("devices")
        // console.log('http://'+window.location.host+'/wgcs/screens.html')
        window.close('http://' + window.location.host + '/wgcs/screens.html ', '_self');
        window.open('http://' + window.location.host + '/wgcs/screens.html', 'true');
    }
    /*-------选择多个手机同屏-------*/
    $scope.isShowAllScreen = function () {
        var arr = [];
        var arr1 = [];
        var arr2 = [];
        for (var i = 0; i < $('.page1-onChecked').length; i++) {
            if ($('.page1-onChecked').eq(i).prop('checked')) {
                arr.push($('.page1-onChecked').eq(i).attr('data'));
                arr1.push($('.page1-onChecked').eq(i).attr('data1'));
            }
        }
        for (var i2 = 0; i2 < arr.length; i2++) {
            if (arr1[i2] != 0) {
                arr2.push(arr[i2])
            }
        }
        var arr3 = arr2.join(',');
        localStorage.removeItem("devices")
        localStorage.setItem('devices', '' + arr3 + '')
        var mkmk = localStorage.getItem("devices")
        // console.log('http://'+window.location.host+'/wgcs/screens.html')
        window.close('http://' + window.location.host + '/wgcs/screens.html ', '_self');
        window.open('http://' + window.location.host + '/wgcs/screens.html', 'true');
    }
    /*-----------------------进入页面默认访问扫描上次登录的设备-----------------------------*/
    $http.get($rootScope.link + '/device/getAllDevice?pageNo=1&pageSize=15').success(function (data) {
        if (data.code == 200) {
            if (data.data.content.length == 0) {
                $scope.sweepBox = true;
                $('.page3-div-checkbox1').attr('checked', false).parent().removeClass('on')
            } else {
                $rootScope.DataList = data.data.content;
                if (data.data.content.length > 0) {
                    $scope.offline = 0
                    $scope.online = 0;
                    for (var i = 0; i < data.data.content.length; i++) {
                        if (data.data.content[i].status == 0) {
                            $scope.offline++;
                        } else {
                            $scope.online++
                        }
                    }
                }
            }
            $http.get($rootScope.link + '/wechat/getWechatVersion').success(function (data) {
                if (data.code == 200) {
                    $rootScope.initOver = true;
                    $scope.UpVersion = data.msg
                } else {
                }
            });
            $scope.page1InitDataLength = data.data.totalElements;
            // console.log( $scope.page1InitDataLength )
            $('.M-box1').pagination({
                totalData: $scope.page1InitDataLength,
                pageCount: 1,
                showData: 15,
                coping: true,
                count: 2,
                callback: function (api) {
                    var data = {
                        page: api.getCurrent(),
                    };
                    $http.get($rootScope.link + '/device/getAllDevice?pageNo=' + data.page + '&pageSize=15').success(function (data) {
                        $scope.response = data;
                        $scope.page1InitDataLength = data.data.totalElements

                        $('.page3-div-checkbox1').attr('checked', false).parent().removeClass('on')
                        $rootScope.DataList = data.data.content;
                        if (data.data.content.length > 0) {
                            $scope.offline = 0
                            $scope.online = 0;
                            for (var i = 0; i < data.data.content.length; i++) {
                                if (data.data.content[i].status == 0) {
                                    $scope.offline++;
                                } else {
                                    $scope.online++
                                }
                            }
                        }
                    });
                }
            })
        } else {
            $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
            setTimeout(function () {
                $('.page1-alert-danger').hide(300)
            }, 2000)
        }
    });
    /*----------------------选择设备--------------------------------*/
    $scope.page1onChecked = function () {
        var allCheckShow = [];
        var oncheck = $('.page1-onChecked');
        for (var i = 0; i < oncheck.length; i++) {
            if (oncheck[i].checked == true) {
                allCheckShow.push(oncheck[i])
            } else {
            }
        }
        $scope.page1CheckNums = allCheckShow.length
        if (allCheckShow.length <= 0) {
            $scope.choseClick = false
        } else {
            $scope.choseClick = true
        }
        if (allCheckShow.length == oncheck.length) {
            $('.page3-div-checkbox1').parent().addClass('on')
            $('.page3-div-checkbox1')[0].checked = true;
        } else {
            $('.page3-div-checkbox1').parent().removeClass('on')
            $('.page3-div-checkbox1')[0].checked = false;
        }
    }
    $scope.page1AllChecked = function () {
        var oncheck = $('.page1-onChecked');
        if ($('.page3-div-checkbox1')[0].checked == false) {
            $scope.choseClick = false
            $scope.page1CheckNums = 0
        } else {
            $scope.choseClick = true
            $scope.page1CheckNums = oncheck.length
        }
    }

    /*---------------------扫描设备提示框----------------------*/
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
                if (data.data.devices == undefined) {
                    $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;初始化系统未找到设备请检查设备连接，刷新页面或重启系统')
                    setTimeout(function () {
                        $('.page1-alert-danger').hide(300)
                    }, 2000)
                } else {

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
                    $('.page3-div-checkbox1').attr('checked', false).parent().removeClass('on')
                    $http.get($rootScope.link + '/wechat/getWechatVersion').success(function (data) {
                        if (data.code == 200) {
                            $scope.UpVersion = data.msg
                        } else {
                        }
                    });
                    $rootScope.DataList = data.data.content;
                    if (data.data.content.length > 0) {
                        $scope.offline = 0
                        $scope.online = 0;
                        for (var i = 0; i < data.data.content.length; i++) {
                            if (data.data.content[i].status == 0) {
                                $scope.offline++;
                            } else {
                                $scope.online++
                            }
                        }
                    }
                    $scope.response = data.data.content;
                    $scope.page1InitDataLength = data.data.totalElements;
                    $('.M-box1').pagination({
                        totalData: $scope.page1InitDataLength,
                        pageCount: 1,
                        showData: 15,
                        coping: true,
                        count: 2,
                        callback: function (api) {
                            var data = {
                                page: api.getCurrent(),
                            };
                            $http.get($rootScope.link + '/device/getAllDevice?pageNo=' + data.page + '&pageSize=15').success(function (data) {
                                $scope.response = data;
                                $rootScope.DataList = data.data.content;
                                $scope.page1InitDataLength = data.data.totalElements
                                $('.page3-div-checkbox1').attr('checked', false).parent().removeClass('on')
                                if (data.data.content.length > 0) {
                                    $scope.offline = 0
                                    $scope.online = 0;
                                    for (var i = 0; i < data.data.content.length; i++) {
                                        if (data.data.content[i].status == 0) {
                                            $scope.offline++;
                                        } else {
                                            $scope.online++
                                        }
                                    }
                                }
                            });
                        }

                    })
                });


                $http.get($rootScope.link + '/group/getGroupDataByStatus').success(function (response) {
                    if (response.code == 200) {
                        $rootScope.onlineGroupNames = response.data;
                        //================保存默认加载的设备号=================
                        $rootScope.moArray = [];
                        for (var a = 0; a < response.data[0].deviceVos.length; a++) {
                            $rootScope.moArray.push(response.data[0].deviceVos[a].device);
                        }
                    } else {
                        $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;初始化系统失败未获取到相关设备，请检查设备连接、刷新页面、或重启系统');
                        setTimeout(function () {
                            $('.page1-alert-danger').hide(300)
                        }, 2000)
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
                $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;初始化系统失败，请刷新页面或重启系统');
                setTimeout(function () {
                    $('.page1-alert-danger').hide(300)
                }, 2000)
            }
        });

    };
    /*-------------------取消扫描设备-----------------------------*/
    $scope.getSweepTwo1 = function () {
        $scope.sweepBox = false;
    }
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
    $scope.sweepBoxOneTwo22 = false
    /*--------------------扫描设备完成点击确定--------------------------------*/
    $scope.getDataList = function () {
        $rootScope.DataList = $scope.response;
        $scope.sweepBoxOneTwo22 = false
        $scope.sweepBox = false;
        /*======================重点部分扫描完成确定后================================*/
        // $http.get($rootScope.link + '/task/getRunTaskCount').success(function (data) {
        //     if (data.code == 200) {
        //         if (data.data == 0) {
        //             $scope.sweepBox = false;
        //             $scope.sweepBoxOneTwo22 = false
        //         } else {
        //             var startInit = setInterval(function () {
        //                 $http.get($rootScope.link + '/task/getRunTaskCount').success(function (data) {
        //                     if (data.code == 200) {
        //                         if (data.data == 0) {
        //                             $scope.sweepBoxOneTwo22 = false
        //                             $scope.sweepBox = false;
        //                             $rootScope.initOver = true;
        //                             clearInterval(startInit);
        //                         } else {
        //                             $scope.lpld = data.data
        //                         }
        //                     } else {
        //                     }
        //                 });
        //             }, 1000)
        //             $scope.sweepBoxThree = false
        //             $scope.sweepBoxOneTwo22 = true
        //         }
        //     } else {
        //
        //     }
        // });
    };
    /*--------------------点击扫描新设备--------------------------------*/

    $scope.getSweepBox = function () {
        $http.get($rootScope.link + '/task/getRunTaskCount').success(function (data) {
            if (data.code == 200) {
                if (data.data == 0) {
                    $scope.sweepBox = true;
                    $scope.sweepBoxOne = true;
                    $scope.sweepBoxTwo = false;
                    $scope.sweepBoxThree = false;
                    $scope.sweepAssBlock = 'sweep-box-one-block-small';
                    $rootScope.sweepBoxOneTwo1 = false;
                } else {
                    $rootScope.sweepBoxOneTwo1 = true;
                }
            } else {

            }
        });

    };
    $scope.sweepBoxOneTwo3 = function () {
        $rootScope.sweepBoxOneTwo1 = false;
    }
    $scope.sweepBoxOneTwo2 = function () {
        $rootScope.sweepBoxOneTwo1 = true;
        $http.get($rootScope.link + '/task/clearTask').success(function (data) {
            if (data.code == 200) {
                $scope.sweepBox = true;
                $scope.sweepBoxOne = true;
                $scope.sweepBoxTwo = false;
                $scope.sweepBoxThree = false;
                $scope.sweepAssBlock = 'sweep-box-one-block-small';
                $rootScope.sweepBoxOneTwo1 = false;
            } else {
                $rootScope.sweepBoxOneTwo1 = true;
            }
        });
    }

    /*--------------------导出设备列表--------------------------------*/
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
        var arr = [];
        arr.push(device)
        var sendObj = new FormData();
        sendObj.append('devices', JSON.stringify(arr));
        $http({
            method: 'POST',
            url: $rootScope.link + "/device/delDevices",
            data: sendObj,
            headers: {'Content-Type': undefined},
            transformRequest: angular.identity
        }).success(function (data) {
            if (data.code == 200) {
                $('.page1-alert-success').show(300).find('.page1-alert-success-con').html('&nbsp;&nbsp;设备删除成功');
                setTimeout(function () {
                    $('.page1-alert-success').hide(300)
                }, 2000)
                $http.get($rootScope.link + '/device/getAllDevice?pageNo=1&pageSize=15').success(function (data) {
                    if (data.code == 200) {
                        $('.page3-div-checkbox1').attr('checked', false).parent().removeClass('on')
                        if (data.data.content.length == 0) {
                            $scope.sweepBox = true;
                        } else {
                            $rootScope.DataList = data.data.content;
                            $scope.page1InitDataLength = data.data.totalElements
                        }
                        if (data.data.content.length > 0) {
                            $scope.offline = 0
                            $scope.online = 0;
                            for (var i = 0; i < data.data.content.length; i++) {
                                if (data.data.content[i].status == 0) {
                                    $scope.offline++;
                                } else {
                                    $scope.online++
                                }
                            }
                        }
                        $http.get($rootScope.link + '/wechat/getWechatVersion').success(function (data) {
                            if (data.code == 200) {
                                $scope.UpVersion = data.msg
                            } else {
                            }
                        });
                    }
                    $('.M-box1').pagination({
                        totalData: $scope.page1InitDataLength,
                        pageCount: 1,
                        showData: 15,
                        coping: true,
                        count: 2,
                        callback: function (api) {
                            var data = {
                                page: api.getCurrent(),
                            };
                            $http.get($rootScope.link + '/device/getAllDevice?pageNo=' + data.page + '&pageSize=15').success(function (data) {
                                if (data.code == 200) {
                                    $('.page3-div-checkbox1').attr('checked', false).parent().removeClass('on')
                                    if (data.data.content.length == 0) {
                                        $scope.sweepBox = true;
                                    } else {
                                        $rootScope.DataList = data.data.content;
                                    }
                                    $scope.page1InitDataLength = data.data.totalElements
                                    if (data.data.content.length > 0) {
                                        $scope.offline = 0
                                        $scope.online = 0;
                                        for (var i = 0; i < data.data.content.length; i++) {
                                            if (data.data.content[i].status == 0) {
                                                $scope.offline++;
                                            } else {
                                                $scope.online++
                                            }
                                        }
                                    }
                                }
                            });
                        }

                    })
                });


            } else {
                $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;设备删除失败');
                setTimeout(function () {
                    $('.page1-alert-danger').hide(300)
                }, 2000)
            }
        });
    };
    // ==============================多选删除设备==================================
    $scope.deleteEquip1 = function () {
        for (var arr = [], i = 0; i < $('.page1-onChecked').length; i++) {
            if ($('.page1-onChecked').eq(i).prop('checked')) {
                arr.push($('.page1-onChecked').eq(i).attr('data'));
            }
        }
        var sendObj = new FormData();
        sendObj.append('devices', JSON.stringify(arr));
        $http({
            method: 'POST',
            url: $rootScope.link + "/device/delDevices",
            data: sendObj,
            headers: {'Content-Type': undefined},
            transformRequest: angular.identity
        }).success(function (data) {
            if (data.code == 200) {

                $('.page1-alert-success').show(300).find('.page1-alert-success-con').html('&nbsp;&nbsp;批量设备删除成功');
                setTimeout(function () {
                    $('.page1-alert-success').hide(300)
                }, 2000)
                $http.get($rootScope.link + '/device/getAllDevice?pageNo=1&pageSize=15').success(function (data) {
                    if (data.code == 200) {
                        if (data.data.content.length == 0) {
                            $scope.sweepBox = true;
                        } else {
                            $rootScope.DataList = data.data.content;
                            $scope.page1InitDataLength = data.data.totalElements
                        }
                        if (data.data.content.length > 0) {
                            $scope.offline = 0
                            $scope.online = 0;
                            for (var i = 0; i < data.data.content.length; i++) {
                                if (data.data.content[i].status == 0) {
                                    $scope.offline++;
                                } else {
                                    $scope.online++
                                }
                            }
                        }
                        $http.get($rootScope.link + '/wechat/getWechatVersion').success(function (data) {
                            if (data.code == 200) {
                                $scope.UpVersion = data.msg
                            } else {
                            }
                        });
                    }
                    $('.M-box1').pagination({
                        totalData: $scope.page1InitDataLength,
                        pageCount: 1,
                        showData: 15,
                        coping: true,
                        count: 2,
                        callback: function (api) {
                            var data = {
                                page: api.getCurrent(),
                            };
                            $http.get($rootScope.link + '/device/getAllDevice?pageNo=' + data.page + '&pageSize=15').success(function (data) {
                                if (data.code == 200) {
                                    if (data.data.content.length == 0) {
                                        $scope.sweepBox = true;
                                    } else {
                                        $rootScope.DataList = data.data.content;
                                    }
                                    $scope.page1InitDataLength = data.data.totalElements
                                    if (data.data.content.length > 0) {
                                        $scope.offline = 0
                                        $scope.online = 0;
                                        for (var i = 0; i < data.data.content.length; i++) {
                                            if (data.data.content[i].status == 0) {
                                                $scope.offline++;
                                            } else {
                                                $scope.online++
                                            }
                                        }
                                    }
                                }
                            });
                        }

                    })
                });

            } else {
                $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;批量设备删除失败');
                setTimeout(function () {
                    $('.page1-alert-danger').hide(300)
                }, 2000)
            }
        });
    }
    //==========================查找我的设备=================
    $scope.showMyEquip = function (device) {
        var arr = [];
        arr.push(device)
        $http.get($rootScope.link + '/device/showDifferent?device=' + JSON.stringify(arr)).success(function (data) {
            if (data.code == 200) {
                $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;查找设备任务添加成功，请耐心等待');
                setTimeout(function () {
                    $('.page1-alert-waring').hide(300)
                }, 2000)
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
                $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;查找设备任务添加失败，请检查设备或再次执行');
                setTimeout(function () {
                    $('.page1-alert-danger').hide(300)
                }, 2000)
            }
        });
    };
    $scope.showMyEquip1 = function (device) {
        var arr = [];
        var arr1 = [];
        var arr2 = [];
        for (var i = 0; i < $('.page1-onChecked').length; i++) {
            if ($('.page1-onChecked').eq(i).prop('checked')) {
                arr.push($('.page1-onChecked').eq(i).attr('data'));
                arr1.push($('.page1-onChecked').eq(i).attr('data1'));
            }
        }
        for (var i2 = 0; i2 < arr.length; i2++) {
            if (arr1[i2] != 0) {
                arr2.push(arr[i2])
            }
        }
        $http.get($rootScope.link + '/device/showDifferent?device=' + JSON.stringify(arr2)).success(function (data) {
            if (data.code == 200) {
                $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;查找设备任务添加成功，请耐心等待');
                setTimeout(function () {
                    $('.page1-alert-waring').hide(300)
                }, 2000)
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
                $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;查找设备任务添加失败，请检查设备或再次执行');
                setTimeout(function () {
                    $('.page1-alert-danger').hide(300)
                }, 2000)
            }
        });
    };

    $scope.isShow = function (s) {
        if (s == 1) {
            return true;
        }
    };
    // $scope.isShowNo = function (s) {
    //     if (s == 1) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // };
    // $scope.isShowNo1 = function (s) {
    //     if (s == 1) {
    //         return false;
    //     } else {
    //         return true;
    //     }
    // };
    $scope.rankAss = function (rank) {
        return rank == 1000 ? '-' : rank;
    };
    $scope.getPage = function (index) {
        return $scope.assPage * 15 + index;
    }
    /*--------------------------------------------设备完结------------------------------------------------------------------*/


    //================================添加新群组==============================
    $scope.addNewGroup = function () {
        $scope.editBoxThree = true;
        $scope.newGroupName = '';
        $scope.moveBox = false;
        $scope.editBoxTwo = false;
        $scope.editBoxOne = false;
    };
    $scope.cancelAddNewGroup = function () {
        $scope.editBoxThree = false;
    };
    $scope.sureAddNewGroup = function () {
        var flag = false;
        for (var x = 0; x < $rootScope.AssGroupNames.length; x++) {
            if ($scope.newGroupName == $rootScope.AssGroupNames[x]) {
                flag = true;
            }
        }
        if (flag) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;您输入的分组已存在，不能再次创建');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
            $scope.newGroupName = '';
        } else {
            if ($scope.newGroupName == '') {
                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;新的分组名称不能为空');
                setTimeout(function () {
                    $('.page1-alert-small-danger').hide(300)
                }, 2000)
            } else {
                $http.get($rootScope.link + '/group/createGroup?groupName=' + $scope.newGroupName).success(function (data) {
                    if (data.code == 200) {
                        $('.page1-alert-small-success').show(300).find('.page1-alert-small-success-con').html('&nbsp;&nbsp;新的分组创建成功');
                        setTimeout(function () {
                            $('.page1-alert-small-success').hide(300)
                        }, 2000)
                        $scope.editBoxThree = false;
                        $http.get($rootScope.link + '/group/getGroupData').success(function (data) {
                            if (data.code == 200) {
                                $rootScope.groupNames = data.data;
                                $scope.allGroupNames = data.data;
                                $rootScope.AssGroupNames = [];
                                $rootScope.allEquipIds = [];
                                $rootScope.equipCounts = 0;
                                for (var j = 0; j < data.data.length; j++) {
                                    $rootScope.AssGroupNames.push(data.data[j].group.name);
                                    $rootScope.allEquipIds.push(data.data[j].group.id);
                                    $rootScope.equipCounts += data.data[j].count;
                                }
                            } else {
                                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;新的分组创建失败');
                                setTimeout(function () {
                                    $('.page1-alert-small-danger').hide(300)
                                }, 2000)
                            }
                        });
                        $http.get($rootScope.link + '/group/getGroupDataByStatus').success(function (data) {
                            if (data.code == 200) {
                                $rootScope.onlineGroupNames = data.data;
                                //保存默认加载的设备号
                                $rootScope.moArray = [];
                                for (var a = 0; a < data.data[0].deviceVos.length; a++) {
                                    $rootScope.moArray.push(data.data[0].deviceVos[a].device);
                                }
                                $http.get($rootScope.link + '/device/getDeviceByDevice/?devices=' + JSON.stringify($rootScope.moArray) + '&pageNo=1&pageSize=15').success(function (data) {
                                    if (data.code == 200) {
                                        $('.M-box1').pagination({
                                            totalData: $scope.page1InitDataLength,
                                            pageCount: 1,
                                            showData: 15,
                                            coping: true,
                                            count: 2,
                                            callback: function (api) {
                                                var data = {
                                                    page: api.getCurrent(),
                                                };
                                                $http.get($rootScope.link + '/device/getAllDevice?pageNo=' + data.page + '&pageSize=15').success(function (data) {
                                                    $('.page3-div-checkbox1').attr('checked', false).parent().removeClass('on')
                                                    $scope.response = data;
                                                    $rootScope.DataList = data.data.content;
                                                    $scope.page1InitDataLength = data.data.totalElements
                                                    if (data.data.content.length > 0) {
                                                        $scope.offline = 0
                                                        $scope.online = 0;
                                                        for (var i = 0; i < data.data.content.length; i++) {
                                                            if (data.data.content[i].status == 0) {
                                                                $scope.offline++;
                                                            } else {
                                                                $scope.online++
                                                            }
                                                        }
                                                    }
                                                });
                                            }

                                        })
                                    } else {

                                        $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试');
                                        setTimeout(function () {
                                            $('.page1-alert-small-danger').hide(300)
                                        }, 2000)
                                    }
                                });
                            } else {

                                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试');
                                setTimeout(function () {
                                    $('.page1-alert-small-danger').hide(300)
                                }, 2000)
                            }
                        });
                    } else {
                        $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;新的分组创建失败');
                        setTimeout(function () {
                            $('.page1-alert-small-danger').hide(300)
                        }, 2000)
                        $scope.editBoxThree = false;
                    }
                });
            }
        }
    };
    //---------------------------------------------------删除分组---------------------------------
    $scope.deleteable = function (id) {
        return id == 1 ? true : false;
    };
    $scope.deleteButton = function () {
        $scope.editBoxTwo = true;
        $scope.moveBox = false;
        $scope.editBoxOne = false;
        $scope.editBoxThree = false;
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
    };
    $scope.cancelDeleteButton = function () {
        $scope.editBoxTwo = false;
    };
    $scope.sureDeleteButton = function () {
        if ($scope.selected.length <= 0) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择并勾选需要进行删除操作的分组');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else {
            $http.get($rootScope.link + '/group/delGroup?groupIds=' + JSON.stringify($scope.selected)).success(function (data) {
                if (data.code == 200) {
                    $('.page1-alert-small-success').show(300).find('.page1-alert-small-success-con').html('&nbsp;&nbsp;删除分组成功');
                    setTimeout(function () {
                        $('.page1-alert-small-success').hide(300)
                    }, 2000)
                    $scope.editBoxTwo = false;
                    $http.get($rootScope.link + '/group/getGroupData').success(function (data) {
                        if (data.code == 200) {
                            $rootScope.groupNames = data.data;
                            $scope.allGroupNames = data.data;
                            $rootScope.AssGroupNames = [];
                            $rootScope.allEquipIds = [];
                            $rootScope.equipCounts = 0;
                            for (var j = 0; j < data.data.length; j++) {
                                $rootScope.AssGroupNames.push(data.data[j].group.name);
                                $rootScope.allEquipIds.push(data.data[j].group.id);
                                $rootScope.equipCounts += data.data[j].count;
                            }
                        } else {

                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试');
                            setTimeout(function () {
                                $('.page1-alert-small-danger').hide(300)
                            }, 2000)
                        }
                    });
                    $http.get($rootScope.link + '/device/getAllDevice/?pageNo=1&pageSize=15').success(function (data) {
                        $rootScope.DataList = data.data.content;
                        $scope.page1InitDataLength = data.data.totalElements
                        if (data.code == 200) {
                            $scope.page1InitDataLength = data.data.totalElements
                            $('.M-box1').pagination({
                                totalData: $scope.page1InitDataLength,
                                pageCount: 1,
                                showData: 15,
                                coping: true,
                                count: 2,
                                callback: function (api) {
                                    var data = {
                                        page: api.getCurrent(),
                                    };
                                    $http.get($rootScope.link + '/device/getDeviceByDevice/?pageNo=' + data.page + '&pageSize=15').success(function (data) {
                                        $rootScope.DataList = data.data.content;
                                        $scope.page1InitDataLength = data.data.totalElements
                                    })
                                }

                            })
                        } else {

                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试');
                            setTimeout(function () {
                                $('.page1-alert-small-danger').hide(300)
                            }, 2000)
                        }
                    });
                    $http.get($rootScope.link + '/group/getGroupDataByStatus').success(function (data) {
                        if (data.code == 200) {
                            $rootScope.onlineGroupNames = data.data;
                            //保存默认加载的设备号
                            $rootScope.moArray = [];
                            for (var a = 0; a < data.data[0].deviceVos.length; a++) {
                                $rootScope.moArray.push(data.data[0].deviceVos[a].device);
                            }
                        } else {

                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试');
                            setTimeout(function () {
                                $('.page1-alert-small-danger').hide(300)
                            }, 2000)
                        }
                    });
                    $('.page17-all-checked').hide();
                } else {
                    $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;分组删除失败');
                    setTimeout(function () {
                        $('.page1-alert-small-danger').hide(300)
                    }, 2000)

                }
            });
        }

    };
    //---------------------------------------------修改分组名-------------------------------------
    $scope.changeNameButton = function () {
        var id = 0
        $scope.editBoxOne = true;
        $scope.changeId = id;
        $scope.newGroupName = '';
        $scope.moveBox = false;
        $scope.editBoxTwo = false;
        $scope.editBoxThree = false;
    };
    $scope.cancelChangeButton = function () {
        $scope.editBoxOne = false;
    };
    $scope.changeGroupName = ''
    $scope.sureChangeButton = function () {
        var flag = false;

        for (var x = 0; x < $rootScope.AssGroupNames.length; x++) {
            if ($scope.changeGroupName == $rootScope.AssGroupNames[x]) {
                flag = true;
            }
        }
        if (flag) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;输入的分组已存在，请再次输入其他分组');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
            $scope.changeGroupName = '';
        } else {
            if ($scope.changeGroupName == '') {
                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;输入的分组名称不能为空，请再次输入');
                setTimeout(function () {
                    $('.page1-alert-small-danger').hide(300)
                }, 2000)
            } else {
                var id = $("input[name='changeTarget']:checked").val()
                $http.get($rootScope.link + '/group/updateGroupName?groupId=' + id + '&newName=' + $scope.changeGroupName).success(function (data) {
                    if (data.code == 200) {
                        $('.page1-alert-small-success').show(300).find('.page1-alert-small-success-con').html('&nbsp;&nbsp;分组名称修改成功');
                        setTimeout(function () {
                            $('.page1-alert-small-success').hide(300)
                        }, 2000)
                        $scope.editBoxOne = false;
                        $scope.changeGroupName = '';
                        $http.get($rootScope.link + '/group/getGroupData').success(function (data) {
                            if (data.code == 200) {
                                $rootScope.groupNames = data.data;
                                $scope.allGroupNames = data.data;
                                $rootScope.AssGroupNames = [];
                                $rootScope.allEquipIds = [];
                                $rootScope.equipCounts = 0;
                                for (var j = 0; j < data.data.length; j++) {
                                    $rootScope.AssGroupNames.push(data.data[j].group.name);
                                    $rootScope.allEquipIds.push(data.data[j].group.id);
                                    $rootScope.equipCounts += data.data[j].count;
                                }
                            } else {

                                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试');
                                setTimeout(function () {
                                    $('.page1-alert-small-danger').hide(300)
                                }, 2000)
                            }
                        });
                        $http.get($rootScope.link + '/device/getAllDevice/?pageNo=1&pageSize=15').success(function (data) {
                            $rootScope.DataList = data.data.content;
                            $scope.page1InitDataLength = data.data.totalElements
                            if (data.code == 200) {
                                $scope.page1InitDataLength = data.data.length
                                $('.M-box1').pagination({
                                    totalData: $scope.page1InitDataLength,
                                    pageCount: 1,
                                    showData: 15,
                                    coping: true,
                                    count: 2,
                                    callback: function (api) {
                                        var data = {
                                            page: api.getCurrent(),
                                        };
                                        $http.get($rootScope.link + '/device/getDeviceByDevice/?pageNo=' + data.page + '&pageSize=15').success(function (data) {
                                            $rootScope.DataList = data.data.content;
                                            $scope.page1InitDataLength = data.data.totalElements
                                        })
                                    }

                                })
                            } else {

                                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试');
                                setTimeout(function () {
                                    $('.page1-alert-small-danger').hide(300)
                                }, 2000)
                            }
                        });
                        $http.get($rootScope.link + '/group/getGroupDataByStatus').success(function (data) {
                            if (data.code == 200) {
                                $rootScope.onlineGroupNames = data.data;
                                //保存默认加载的设备号
                                $rootScope.moArray = [];
                                for (var a = 0; a < data.data[0].deviceVos.length; a++) {
                                    $rootScope.moArray.push(data.data[0].deviceVos[a].device);
                                }
                            } else {

                                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试');
                                setTimeout(function () {
                                    $('.page1-alert-small-danger').hide(300)
                                }, 2000)
                            }
                        });
                        $('.page17-all-checked').hide();
                    } else {
                        $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;修改分组名称失败');
                        setTimeout(function () {
                            $('.page1-alert-small-danger').hide(300)
                        }, 2000)
                        $scope.editBoxOne = false;
                        $scope.changeGroupName = ''
                    }
                });
            }
        }

    };

    $scope.isDisabled = function (id) {
        if (id == 1) {
            return true;
        }
    };
    $scope.dColor = function (id) {
        var a;
        if (id == 1) {
            a = 'binged';
        } else {
            a = 'binging';
        }
        return a;
    }
    //================================-----------------------======移动分组=======================
    $scope.assMoveTo = true;
    $scope.moveId = 1;
    $scope.moveToId = function (id) {
        $scope.moveId = id;
    };
    $scope.groupMoveTo = function () {
        $scope.moveGroup = []
        for (var i = 0; i < $('.page1-onChecked').length; i++) {
            if ($('.page1-onChecked').eq(i).prop('checked')) {
                $scope.moveGroup.push($('.page1-onChecked').eq(i).attr('data'));
            }
        }
        if ($scope.moveGroup.length == 0) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择并勾选需要加入分组的设备');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else {
            $scope.moveBox = true;
            $scope.editBoxTwo = false;
            $scope.editBoxOne = false;
            $scope.editBoxThree = false;
            $scope.moveId = 1;
        }
    };
    $scope.cancelMoveTo = function () {
        $scope.moveBox = false;
    };
    $scope.sureMoveTo = function () {
        $http.get($rootScope.link + '/group/moveGroup?groupId=' + $scope.moveId + '&devices=' + JSON.stringify($scope.moveGroup)).success(function (data) {
            if (data.code == 200) {
                $scope.moveGroup = []
                for (var i = 0; i < $('.page3-div-checkbox input').length; i++) {
                    if ($('.page3-div-checkbox input').eq(i).prop('checked')) {
                        $scope.moveGroup.push($('.page3-div-checkbox input').eq(i).attr('mess_id'));
                    }
                }
                $('.page1-alert-small-success').show(300).find('.page1-alert-small-success-con').html('&nbsp;&nbsp;设备加入分组成功');
                setTimeout(function () {
                    $('.page1-alert-small-success').hide(300)
                }, 2000)
                $scope.moveBox = false;
                $http.get($rootScope.link + '/group/getGroupData').success(function (data) {
                    if (data.code == 200) {
                        $rootScope.groupNames = data.data;
                        $scope.allGroupNames = data.data;
                        $rootScope.AssGroupNames = [];
                        $rootScope.allEquipIds = [];
                        $rootScope.equipCounts = 0;
                        for (var j = 0; j < data.data.length; j++) {
                            $rootScope.AssGroupNames.push(data.data[j].group.name);
                            $rootScope.allEquipIds.push(data.data[j].group.id);
                            $rootScope.equipCounts += data.data[j].count;
                        }
                    } else {

                        $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试');
                        setTimeout(function () {
                            $('.page1-alert-small-danger').hide(300)
                        }, 2000)
                    }
                });
                $http.get($rootScope.link + '/device/getAllDevice/?pageNo=1&pageSize=15').success(function (data) {
                    $rootScope.DataList = data.data.content;
                    $scope.page1InitDataLength = data.data.totalElements
                    if (data.code == 200) {
                        $scope.page1InitDataLength = data.data.totalElements
                        $('.M-box1').pagination({
                            totalData: $scope.page1InitDataLength,
                            pageCount: 1,
                            showData: 15,
                            coping: true,
                            count: 2,
                            callback: function (api) {
                                var data = {
                                    page: api.getCurrent(),
                                };
                                $http.get($rootScope.link + '/device/getDeviceByDevice/?pageNo=' + data.page + '&pageSize=15').success(function (data) {
                                    $rootScope.DataList = data.data.content;
                                    $scope.page1InitDataLength = data.data.totalElements
                                })
                            }

                        })
                    } else {

                        $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试');
                        setTimeout(function () {
                            $('.page1-alert-small-danger').hide(300)
                        }, 2000)
                    }
                });
                $http.get($rootScope.link + '/group/getGroupDataByStatus').success(function (data) {
                    if (data.code == 200) {
                        $rootScope.onlineGroupNames = data.data;
                        //保存默认加载的设备号
                        $rootScope.moArray = [];
                        for (var a = 0; a < data.data[0].deviceVos.length; a++) {
                            $rootScope.moArray.push(data.data[0].deviceVos[a].device);
                        }
                    } else {

                        $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试');
                        setTimeout(function () {
                            $('.page1-alert-small-danger').hide(300)
                        }, 2000)
                    }
                });
                $('.page17-all-checked').hide();
            } else {
                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;设备加入分组失败');
                setTimeout(function () {
                    $('.page1-alert-small-danger').hide(300)
                }, 2000)
            }
        });
    };
    $scope.moChecked = function (id) {
        return id == 1 ? true : false;
    };

    // $(document).ready(function(){
    //     $('#example2').DataTable();
    // });
    $scope.page1PopoverShow = function () {
        $('.page1-popover').show()
    }
    $scope.page1PopoverHide = function () {
        $('.page1-popover').hide()
    }
    /*------------------------------------------------分组完结-----------------------------------------------------*/

    $scope.openAll = function (n) {
        var openChecked = [];
        var oncheck = $('.page1-onChecked');
        for (var i = 0; i < oncheck.length; i++) {
            if (oncheck[i].checked == true) {
                openChecked.push(oncheck[i].attributes[0].value)
            } else {
            }
        }
        if (openChecked.length <= 0) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择并勾选需要操作的设备');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else {
            var sendObj = new FormData();
            sendObj.append('devices', JSON.stringify(openChecked));
            sendObj.append('taskId', n);
            $http({
                method: 'POST',
                url: $rootScope.link + "/device/open",
                data: sendObj,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (data) {
                if (data.code == 200) {
                    $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;任务添加成功');
                    setTimeout(function () {
                        $('.page1-alert-waring').hide(300)
                    }, 2000)
                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
                        if (data.code == 200) {
                            $rootScope.taskList = data.data;
                            $rootScope.taskAll = true;
                            $rootScope.taskDoing = false;
                            $rootScope.taskWait = false;
                            $rootScope.taskDown = false;
                            $rootScope.newBell = true;
                        } else {
                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试');
                            setTimeout(function () {
                                $('.page1-alert-small-danger').hide(300)
                            }, 2000)
                        }
                    });
                } else {
                    $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;任务添加失败，请重试并检查设备连接');
                    setTimeout(function () {
                        $('.page1-alert-danger').hide(300)
                    }, 2000)
                }
            });
        }
    };
    $scope.closeAll = function (n) {
        var openChecked1 = [];
        var oncheck = $('.page1-onChecked');
        for (var i = 0; i < oncheck.length; i++) {
            if (oncheck[i].checked == true) {
                openChecked1.push(oncheck[i].attributes[0].value)
            } else {
            }
        }
        if (openChecked1.length == 0) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择并勾选需要操作的设备');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else {
            var sendObj = new FormData();
            sendObj.append('devices', JSON.stringify(openChecked1));
            sendObj.append('taskId', n);
            $http({
                method: 'POST',
                url: $rootScope.link + "/device/close",
                data: sendObj,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (data) {
                if (data.code == 200) {
                    $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;任务添加成功');
                    setTimeout(function () {
                        $('.page1-alert-waring').hide(300)
                    }, 2000)
                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
                        if (data.code == 200) {
                            $rootScope.taskList = data.data;
                            $rootScope.taskAll = true;
                            $rootScope.taskDoing = false;
                            $rootScope.taskWait = false;
                            $rootScope.taskDown = false;
                            $rootScope.newBell = true;
                        } else {
                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试');
                            setTimeout(function () {
                                $('.page1-alert-small-danger').hide(300)
                            }, 2000)
                        }
                    });
                } else {
                    $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;任务添加失败，请重试并检查设备连接');
                    setTimeout(function () {
                        $('.page1-alert-danger').hide(300)
                    }, 2000)
                }
            });
        }
    };
    $scope.backHome = function () {
        var openChecked2 = [];
        var oncheck = $('.page1-onChecked');
        for (var i = 0; i < oncheck.length; i++) {
            if (oncheck[i].checked == true) {
                openChecked2.push(oncheck[i].attributes[0].value)
            } else {
            }
        }
        if (openChecked2.length == 0) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择并勾选需要操作的设备');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else {
            $http.get($rootScope.link + '/device/backHome?devices=' + JSON.stringify(openChecked2)).success(function (data) {
                if (data.code == 200) {
                    $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;任务添加成功');
                    setTimeout(function () {
                        $('.page1-alert-waring').hide(300)
                    }, 2000)
                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
                        if (data.code == 200) {
                            $rootScope.taskList = data.data;
                            $rootScope.taskAll = true;
                            $rootScope.taskDoing = false;
                            $rootScope.taskWait = false;
                            $rootScope.taskDown = false;
                            $rootScope.newBell = true;
                        } else {
                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试');
                            setTimeout(function () {
                                $('.page1-alert-small-danger').hide(300)
                            }, 2000)
                        }
                    });
                } else {
                    $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;任务添加失败，请重试并检查设备连接');
                    setTimeout(function () {
                        $('.page1-alert-danger').hide(300)
                    }, 2000)
                }
            });
        }
    };
}]);
