app.controller('page38C', ["$rootScope", "$scope", "$http", function ($rootScope, $scope, $http) {
    $rootScope.getAllFalse();
    $rootScope.initOver = true;
    $rootScope.activeThirtyEight = true;
    $rootScope.navPartThree = true;
    $rootScope.isScreenPage = false;
    $scope.renwu1 = true;
    $scope.renwu2 = false;
    $scope.renwu3 = false;
    $scope.renwu4 = false;
    $scope.renwu5 = false;
    $scope.ShowDatas1 = false;
    $scope.ShowDatas2 = false;
    $scope.ShowDatas3 = false;
    $scope.ShowDatasza1 = false
    $scope.ShowDatasza2 = false
    $scope.ShowDatasza3 = false
    $scope.sweepBoxOneTwo1 = false;
    /*------------获取在线设备------------*/
    $http.get($rootScope.link + '/group/getGroupDataByStatus').success(function (data) {
        if (data.code == 200) {
            $scope.hhalk=[]
            for (var a = 0; a < data.data.length; a++) {
                if(data.data[a].deviceVos.length==0){
                }else {
                    for (var i=0;i<data.data[a].deviceVos.length;i++){
                        $scope.hhalk.push(data.data[a].deviceVos[i].device)
                    }
                }

            }
            $scope.hhalk1= $scope.hhalk.length
        } else {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        }
    });
    $scope.logout=function () {
        $http.get($rootScope.link + '/logout').success(function (data) {
            if(data.code==200){
                window.location.href='http://'+window.location.host+'/wgcs/#/login'
            }else {
                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;注销登录失败');
                setTimeout(function () {
                    $('.page1-alert-small-danger').hide(300)
                }, 2000)
            }
        })
    }
    $scope.couldSave = function (rank, rank1) {
        // if (rank == "微信进群自动加好友" || rank == "微信添加附近的人" || rank == "微信通讯录加人" || rank == "微信精准加人") {
        //     return 'cs';
        // }
        if (rank1 == -1) {
            return 'ccsss';
        } else if (rank1 == 3) {
        } else {
            return 'ccsss';
        }
    };
    $scope.couldSavev1 = function (rank, rank1) {
        // if (rank == "微信进群自动加好友" || rank == "微信添加附近的人" || rank == "微信通讯录加人" || rank == "微信精准加人") {
        //     return 'cs';
        // }
        if (rank1 == -1) {
            return true;
        } else if (rank1 == 3) {
        } else {
            return true;
        }
    };
    $scope.couldSave1 = function (rank, status) {
        if (status == -1 || status == 3) {
            return 'ccsss';
        } else {
            if (rank != "微信进群自动加好友" && rank != "微信添加附近的人" && rank != "微信通讯录加人" && rank != "微信精准加人") {
                return 'ccsss';
            }
        }
    };
    $scope.couldSave1v2 = function (rank, status) {
        if (status == -1 || status == 3) {
            return true;
        } else {
            if (rank != "微信进群自动加好友" && rank != "微信添加附近的人" && rank != "微信通讯录加人" && rank != "微信精准加人") {
                return true;
            }
        }
    };
    $scope.couldSave1v3 = function (status) {
        if (status == -1) {
            return true;
        } else {
            return false;

        }
    };
    $scope.couldSave1v4 = function (status) {
        if (status == -1) {
            return 'ccsss';
        } else {
        }
    };
    /*-------table切换-------*/
    $scope.TaskAllList = [];
    $scope.zhixing = [];
    $scope.dengdai = [];
    $scope.wancheng = [];
    $scope.shibai = [];
    $('.page2-title-button-but1').css({
        "background-color": "#2ABF9E",
        "color": "#fff"
    }).siblings().css({"background-color": "#fff", "color": "#2ABF9E"});
    $scope.tableSwitch = function (e) {
        if (e == 1) {
            $('.page3-div-checkbox1').attr('checked', false).parent().removeClass('on');
            $scope.renwu1 = true;
            $scope.renwu2 = false;
            $scope.renwu3 = false;
            $scope.renwu4 = false;
            $scope.renwu5 = false;
            $('.page2-title-button-but1').css({
                "background-color": "#2ABF9E",
                "color": "#fff"
            }).siblings().css({"background-color": "#fff", "color": "#2ABF9E"});
            $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([-1, 0, 1, 2, 3]) + '&pageNo=1&pageSize=13').success(function (data) {
                $scope.TaskAllList = data.data.content;
                $scope.page1InitDataLength = data.data.totalElements
                $('.page1-table-page').pagination({
                    isHide:true,
                    totalData: $scope.page1InitDataLength,
                    showData: 15,
                    coping: true,
                    count: 1,
                    callback: function (api) {
                        var data = {
                            page: api.getCurrent(),
                        };
                        $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([-1, 0, 1, 2, 3]) + '&pageNo=' + data.page + '&pageSize=13').success(function (data) {
                            if (data.code == 200) {
                                $scope.TaskAllList = data.data.content;
                                $scope.page1InitDataLength = data.data.totalElements
                            }
                        })
                    }

                })
            })

        } else if (e == 2) {
            $('.page3-div-checkbox2').attr('checked', false).parent().removeClass('on');
            $scope.renwu1 = false;
            $scope.renwu2 = true;
            $scope.renwu3 = false;
            $scope.renwu4 = false;
            $scope.renwu5 = false;
            $('.page2-title-button-but2').css({
                "background-color": "#2ABF9E",
                "color": "#fff"
            }).siblings().css({"background-color": "#fff", "color": "#2ABF9E"});

            $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([1]) + '&pageNo=1&pageSize=13').success(function (data) {
                if (data.code == 200) {
                    $scope.zhixing = data.data.content;
                    if (data.data.content.length == 0) {
                        $('.page1-table-page1').css('display', 'none')
                        $scope.zhixing1 = 0;
                    } else {
                        $scope.zhixing1 = data.data.totalElements;
                        $('.page1-table-page1').css('display', 'block')
                    }
                    $('.page1-table-page1').pagination({
                        isHide:true,
                        totalData: $scope.zhixing1,
                        showData: 15,
                        coping: true,
                        count: 1,
                        callback: function (api) {
                            var data = {
                                page: api.getCurrent(),
                            };
                            $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([1]) + '&pageNo=' + data.page + '&pageSize=13').success(function (data) {
                                if (data.code == 200) {
                                    $scope.zhixing = data.data.content;
                                    $scope.zhixing1 = data.data.totalElements;
                                }
                            })
                        }

                    })
                } else {
                    $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                    setTimeout(function () {
                        $('.page1-alert-small-danger').hide(300)
                    }, 2000)
                }


            });

        } else if (e == 3) {
            $('.page3-div-checkbox3').attr('checked', false).parent().removeClass('on');
            $scope.renwu1 = false;
            $scope.renwu2 = false;
            $scope.renwu3 = true;
            $scope.renwu4 = false;
            $scope.renwu5 = false;
            $('.page2-title-button-but3').css({
                "background-color": "#2ABF9E",
                "color": "#fff"
            }).siblings().css({"background-color": "#fff", "color": "#2ABF9E"});
            $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([0]) + '&pageNo=1&pageSize=13').success(function (data) {
                if (data.code == 200) {
                    if (data.data.content.length == 0) {
                        $scope.dengdai1 = 0;
                        $('.page1-table-page2').css('display', 'none')
                    } else {
                        $scope.dengdai1 = data.data.totalElements;
                        $('.page1-table-page2').css('display', 'block')
                    }
                    $scope.dengdai = data.data.content;
                    $('.page1-table-page2').pagination({
                        isHide:true,
                        totalData: $scope.dengdai1,
                        showData: 15,
                        coping: true,
                        count: 1,
                        callback: function (api) {
                            var data = {
                                page: api.getCurrent(),
                            };
                            $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([0]) + '&pageNo=' + data.page + '&pageSize=13').success(function (data) {
                                if (data.code == 200) {
                                    $scope.dengdai = data.data.content;
                                    $scope.dengdai1 = data.data.totalElements;
                                }
                            })
                        }

                    })
                } else {
                    $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                    setTimeout(function () {
                        $('.page1-alert-small-danger').hide(300)
                    }, 2000)
                }


            });
        }
        else if (e == 4) {
            $('.page3-div-checkbox4').attr('checked', false).parent().removeClass('on');
            $scope.renwu1 = false;
            $scope.renwu2 = false;
            $scope.renwu3 = false;
            $scope.renwu4 = true;
            $scope.renwu5 = false;
            $('.page2-title-button-but4').css({
                "background-color": "#2ABF9E",
                "color": "#fff"
            }).siblings().css({"background-color": "#fff", "color": "#2ABF9E"});

            $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([2]) + '&pageNo=1&pageSize=13').success(function (data) {
                if (data.code == 200) {
                    if (data.data.length == 0) {
                        $scope.wancheng1 = 0;
                        $('.page1-table-page3').css('display', 'none')
                    } else {
                        $scope.wancheng1 = data.data.totalElements;
                        $('.page1-table-page3').css('display', 'block')
                    }
                    $scope.wancheng = data.data.content;
                    $('.page1-table-page3').pagination({
                        isHide:true,
                        totalData: $scope.wancheng1,
                        showData: 15,
                        coping: true,
                        count: 1,
                        callback: function (api) {
                            var data = {
                                page: api.getCurrent(),
                            };
                            $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([2]) + '&pageNo=' + data.page + '&pageSize=13').success(function (data) {
                                if (data.code == 200) {
                                    $scope.wancheng = data.data.content;
                                    $scope.wancheng1 = data.data.totalElements;
                                }
                            })
                        }

                    })
                } else {
                    $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                    setTimeout(function () {
                        $('.page1-alert-small-danger').hide(300)
                    }, 2000)
                }


            });
        } else {
            $('.page3-div-checkbox5').attr('checked', false).parent().removeClass('on');
            $scope.renwu1 = false;
            $scope.renwu2 = false;
            $scope.renwu3 = false;
            $scope.renwu4 = false;
            $scope.renwu5 = true;
            $('.page2-title-button-but5').css({
                "background-color": "#2ABF9E",
                "color": "#fff"
            }).siblings().css({"background-color": "#fff", "color": "#2ABF9E"});
            $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([-1, 3]) + '&pageNo=1&pageSize=13').success(function (data) {
                if (data.code == 200) {
                    if (data.data.content.length == 0) {
                        $scope.shibai1 = 0;
                        $('.page1-table-page4').css('display', 'none')
                    } else {
                        $scope.shibai1 = data.data.totalElements;
                        $('.page1-table-page4').css('display', 'block')
                    }
                    $scope.shibai = data.data.content;
                    $('.page1-table-page4').pagination({
                        isHide:true,
                        totalData: $scope.shibai1,
                        showData: 15,
                        coping: true,
                        count: 1,
                        callback: function (api) {
                            var data = {
                                page: api.getCurrent(),
                            };
                            $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([-1, 3]) + '&pageNo=' + data.page + '&pageSize=13').success(function (data) {
                                if (data.code == 200) {
                                    $scope.shibai = data.data.content;
                                    $scope.shibai1 = data.data.totalElements;
                                }
                            })
                        }

                    })
                } else {
                    $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                    setTimeout(function () {
                        $('.page1-alert-small-danger').hide(300)
                    }, 2000)
                }


            });
        }
    }
    /*-------模拟数据-------*/
    /*-------删除单个任务-------*/
    $scope.removeTask = function (e, q) {
        $http.get($rootScope.link + '/task/delTask?id=' + e + '').success(function (data) {
            if (data.code == 200) {
                $('.page3-div-checkbox1').attr('checked', false).parent().removeClass('on');
                if (q == 1) {
                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([-1, 0, 1, 2, 3]) + '&pageNo=1&pageSize=13').success(function (data) {
                        $scope.TaskAllList = data.data.content;
                        $scope.page1InitDataLength = data.data.totalElements
                        $('.page1-table-page').pagination({
                            isHide:true,
                            totalData: $scope.page1InitDataLength,
                            showData: 15,
                            coping: true,
                            count: 1,
                            callback: function (api) {
                                var data = {
                                    page: api.getCurrent(),
                                };
                                $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([-1, 0, 1, 2, 3]) + '&pageNo=' + data.page + '&pageSize=13').success(function (data) {
                                    if (data.code == 200) {
                                        $scope.TaskAllList = data.data.content;
                                        $scope.page1InitDataLength = data.data.totalElements
                                    }
                                })
                            }

                        })
                    })
                }
                else if (q == 2) {
                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([1]) + '&pageNo=1&pageSize=13').success(function (data) {
                        if (data.code == 200) {
                            $scope.zhixing = data.data.content;
                            if (data.data.content.length == 0) {
                                $('.page1-table-page1').css('display', 'none')
                                $scope.zhixing1 = 0;
                            } else {
                                $scope.zhixing1 = data.data.totalElements;
                                $('.page1-table-page1').css('display', 'block')
                            }
                            $('.page1-table-page1').pagination({
                                isHide:true,
                                totalData: $scope.zhixing1,
                                showData: 15,
                                coping: true,
                                count: 1,
                                callback: function (api) {
                                    var data = {
                                        page: api.getCurrent(),
                                    };
                                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([1]) + '&pageNo=' + data.page + '&pageSize=13').success(function (data) {
                                        if (data.code == 200) {
                                            $scope.zhixing = data.data.content;
                                            $scope.zhixing1 = data.data.totalElements;
                                        }
                                    })
                                }

                            })
                        } else {
                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                            setTimeout(function () {
                                $('.page1-alert-small-danger').hide(300)
                            }, 2000)
                        }


                    });
                } else if (q == 3) {
                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([0]) + '&pageNo=1&pageSize=13').success(function (data) {
                        if (data.code == 200) {
                            if (data.data.content.length == 0) {
                                $scope.dengdai1 = 0;
                                $('.page1-table-page2').css('display', 'none')
                            } else {
                                $scope.dengdai1 = data.data.totalElements;
                                $('.page1-table-page2').css('display', 'block')
                            }
                            $scope.dengdai = data.data.content;
                            $('.page1-table-page2').pagination({
                                isHide:true,
                                totalData: $scope.dengdai1,
                                showData: 15,
                                coping: true,
                                count: 1,
                                callback: function (api) {
                                    var data = {
                                        page: api.getCurrent(),
                                    };
                                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([0]) + '&pageNo=' + data.page + '&pageSize=13').success(function (data) {
                                        if (data.code == 200) {
                                            $scope.dengdai = data.data.content;
                                            $scope.dengdai1 = data.data.totalElements;
                                        }
                                    })
                                }

                            })
                        } else {
                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                            setTimeout(function () {
                                $('.page1-alert-small-danger').hide(300)
                            }, 2000)
                        }


                    });
                }
                else if (q == 4) {
                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([2]) + '&pageNo=1&pageSize=13').success(function (data) {
                        if (data.code == 200) {
                            if (data.data.length == 0) {
                                $scope.wancheng1 = 0;
                                $('.page1-table-page3').css('display', 'none')
                            } else {
                                $scope.wancheng1 = data.data.totalElements;
                                $('.page1-table-page3').css('display', 'block')
                            }
                            $scope.wancheng = data.data.content;
                            $('.page1-table-page3').pagination({
                                isHide:true,
                                totalData: $scope.wancheng1,
                                showData: 15,
                                coping: true,
                                count: 1,
                                callback: function (api) {
                                    var data = {
                                        page: api.getCurrent(),
                                    };
                                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([2]) + '&pageNo=' + data.page + '&pageSize=13').success(function (data) {
                                        if (data.code == 200) {
                                            $scope.wancheng = data.data.content;
                                            $scope.wancheng1 = data.data.totalElements;
                                        }
                                    })
                                }

                            })
                        } else {
                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                            setTimeout(function () {
                                $('.page1-alert-small-danger').hide(300)
                            }, 2000)
                        }


                    });
                } else {
                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([-1, 3]) + '&pageNo=1&pageSize=13').success(function (data) {
                        if (data.code == 200) {
                            if (data.data.length == 0) {
                                $scope.shibai1 = 0;
                                $('.page1-table-page4').css('display', 'none')
                            } else {
                                $scope.shibai1 = data.data.totalElements;
                                $('.page1-table-page4').css('display', 'block')
                            }
                            $scope.shibai = data.data.content;
                            $('.page1-table-page4').pagination({
                                isHide:true,
                                totalData: $scope.shibai1,
                                showData: 15,
                                coping: true,
                                count: 1,
                                callback: function (api) {
                                    var data = {
                                        page: api.getCurrent(),
                                    };
                                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([-1, 3]) + '&pageNo=' + data.page + '&pageSize=13').success(function (data) {
                                        if (data.code == 200) {
                                            $scope.shibai = data.data.content;
                                            $scope.shibai1 = data.data.totalElements;
                                        }
                                    })
                                }

                            })
                        } else {
                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                            setTimeout(function () {
                                $('.page1-alert-small-danger').hide(300)
                            }, 2000)
                        }


                    });
                }
                $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;删除任务成功');
                setTimeout(function () {
                    $('.page1-alert-waring').hide(300)
                }, 2000)
            } else {
                $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;删除任务失败，请重试并检查设备连接');
                setTimeout(function () {
                    $('.page1-alert-danger').hide(300)
                }, 2000)
            }
        });
    }

    $scope.sweepBoxOneTwo3 = function () {
        $scope.sweepBoxOneTwo1 = false
    }
    /*-------确认删除所有任务-------*/
    $scope.sweepBoxOneTwo2 = function () {
        var arr = [];
        for (var i = 0, arr1 = []; i < $('.page1-onChecked1').length; i++) {
            if ($('.page1-onChecked1').eq(i).prop('checked')) {
                arr1.push($('.page1-onChecked1').eq(i).attr('title'));
            }
        }
        for (var i = 0, arr2 = []; i < $('.page1-onChecked2').length; i++) {
            if ($('.page1-onChecked2').eq(i).prop('checked')) {
                arr2.push($('.page1-onChecked2').eq(i).attr('title'));
            }
        }
        for (var i = 0, arr3 = []; i < $('.page1-onChecked3').length; i++) {
            if ($('.page1-onChecked3').eq(i).prop('checked')) {
                arr3.push($('.page1-onChecked3').eq(i).attr('title'));
            }
        }
        if ($scope.qurenRemove == 1) {
            arr = arr1
        } else if ($scope.qurenRemove == 2) {
            arr = arr2
        } else if ($scope.qurenRemove == 3) {
            arr = arr3
        }
        if (arr.length == 0) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择并勾选需要删除的任务');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else {
            var sendObj = new FormData()
            sendObj.append('idList', JSON.stringify(arr))
            $http({
                method: 'POST',
                url: $rootScope.link + "/task/delTasks",
                data: sendObj,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (data) {
                if (data.code == 200) {
                    $scope.sweepBoxOneTwo1 = false;
                    $('.page3-div-checkbox1').attr('checked', false).parent().removeClass('on');
                    if ($scope.qurenRemove == 1) {
                        $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([-1, 0, 1, 2, 3]) + '&pageNo=1&pageSize=13').success(function (data) {
                            if (data.code == 200) {
                                $('.page3-div-checkbox1').attr('checked', false).parent().removeClass('on');
                                $scope.TaskAllList = data.data.content;
                                $scope.page1InitDataLength = data.data.totalElements
                                $('.page1-table-page').pagination({
                                    isHide:true,
                                    totalData: $scope.page1InitDataLength,
                                    showData: 15,
                                    coping: true,
                                    count: 1,
                                    callback: function (api) {
                                        var data = {
                                            page: api.getCurrent(),
                                        };
                                        $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([-1, 0, 1, 2, 3]) + '&pageNo=' + data.page + '&pageSize=13').success(function (data) {
                                            if (data.code == 200) {
                                                $scope.TaskAllList = data.data.content;
                                                $scope.page1InitDataLength = data.data.totalElements
                                            }
                                        })
                                    }

                                })
                            } else {
                                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                                setTimeout(function () {
                                    $('.page1-alert-small-danger').hide(300)
                                }, 2000)
                            }

                        })
                    } else if ($scope.qurenRemove == 2) {
                        $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([1]) + '&pageNo=1&pageSize=13').success(function (data) {
                            if (data.code == 200) {
                                $('.page3-div-checkbox2').attr('checked', false).parent().removeClass('on');
                                $scope.zhixing = data.data.content;
                                if (data.data.content.length == 0) {
                                    $('.page1-table-page1').css('display', 'none')
                                    $scope.zhixing1 = 0;
                                } else {
                                    $scope.zhixing1 = data.data.totalElements;
                                    $('.page1-table-page1').css('display', 'block')
                                }
                                $('.page1-table-page1').pagination({
                                    isHide:true,
                                    totalData: $scope.zhixing1,
                                    showData: 15,
                                    coping: true,
                                    count: 1,
                                    callback: function (api) {
                                        var data = {
                                            page: api.getCurrent(),
                                        };
                                        $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([1]) + '&pageNo=' + data.page + '&pageSize=13').success(function (data) {
                                            if (data.code == 200) {
                                                $scope.zhixing = data.data.content;
                                                $scope.zhixing1 = data.data.totalElements;
                                            }
                                        })
                                    }

                                })
                            } else {
                                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                                setTimeout(function () {
                                    $('.page1-alert-small-danger').hide(300)
                                }, 2000)
                            }


                        });
                    } else if ($scope.qurenRemove == 3) {
                        $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([0]) + '&pageNo=1&pageSize=13').success(function (data) {
                            if (data.code == 200) {
                                $('.page3-div-checkbox3').attr('checked', false).parent().removeClass('on');
                                if (data.data.content.length == 0) {
                                    $scope.dengdai1 = 0;
                                    $('.page1-table-page2').css('display', 'none')
                                } else {
                                    $scope.dengdai1 = data.data.totalElements;
                                    $('.page1-table-page2').css('display', 'block')
                                }
                                $scope.dengdai = data.data.content;
                                $('.page1-table-page2').pagination({
                                    isHide:true,
                                    totalData: $scope.dengdai1,
                                    showData: 15,
                                    coping: true,
                                    count: 1,
                                    callback: function (api) {
                                        var data = {
                                            page: api.getCurrent(),
                                        };
                                        $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([0]) + '&pageNo=' + data.page + '&pageSize=13').success(function (data) {
                                            if (data.code == 200) {
                                                $scope.dengdai = data.data.content;
                                                $scope.dengdai1 = data.data.totalElements;
                                            }
                                        })
                                    }

                                })
                            } else {
                                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                                setTimeout(function () {
                                    $('.page1-alert-small-danger').hide(300)
                                }, 2000)
                            }


                        });
                    }
                    $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;批量删除任务成功');
                    setTimeout(function () {
                        $('.page1-alert-waring').hide(300)
                    }, 2000)
                } else {
                    $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;批量删除任务失败，请重试并检查设备连接');
                    setTimeout(function () {
                        $('.page1-alert-danger').hide(300)
                    }, 2000)
                }
            });
        }
    }
    $scope.removeAllTask1 = function (e) {
        var arr = [];
        if (e == 4) {
            for (var i = 0, arr1 = []; i < $('.page1-onChecked4').length; i++) {
                if ($('.page1-onChecked4').eq(i).prop('checked')) {
                    arr1.push($('.page1-onChecked4').eq(i).attr('title'));
                }
            }
            arr=arr1
        } else {
            for (var i = 0, arr2 = []; i < $('.page1-onChecked5').length; i++) {
                if ($('.page1-onChecked5').eq(i).prop('checked')) {
                    arr2.push($('.page1-onChecked5').eq(i).attr('title'));
                }
            }
            arr=arr2
        }
        if (arr.length == 0) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择并勾选需要删除的任务');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else {


            if (e == 1) {
                arr = arr1
            } else if (e == 2) {
                arr = arr2
            }
            var sendObj = new FormData()
            sendObj.append('idList', JSON.stringify(arr))
            $http({
                method: 'POST',
                url: $rootScope.link + "/task/delTasks",
                data: sendObj,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (data) {
                if (data.code == 200) {
                    $scope.sweepBoxOneTwo1 = false;
                    $('.page3-div-checkbox1').attr('checked', false).parent().removeClass('on');
                    if (e == 4) {
                        $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([2]) + '&pageNo=1&pageSize=13').success(function (data) {
                            if (data.code == 200) {
                                $('.page3-div-checkbox4').attr('checked', false).parent().removeClass('on');
                                if (data.data.length == 0) {
                                    $scope.wancheng1 = 0;
                                    $('.page1-table-page3').css('display', 'none')
                                } else {
                                    $scope.wancheng1 = data.data.totalElements;
                                    $('.page1-table-page3').css('display', 'block')
                                }
                                $scope.wancheng = data.data.content;
                                $('.page1-table-page3').pagination({
                                    isHide:true,
                                    totalData: $scope.wancheng1,
                                    showData: 15,
                                    coping: true,
                                    count: 1,
                                    callback: function (api) {
                                        var data = {
                                            page: api.getCurrent(),
                                        };
                                        $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([2]) + '&pageNo=' + data.page + '&pageSize=13').success(function (data) {
                                            if (data.code == 200) {
                                                $scope.wancheng = data.data.content;
                                                $scope.wancheng1 = data.data.totalElements;
                                            }
                                        })
                                    }

                                })
                            } else {
                                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                                setTimeout(function () {
                                    $('.page1-alert-small-danger').hide(300)
                                }, 2000)
                            }


                        });
                    }
                    else if (e == 5) {
                        $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([-1, 3]) + '&pageNo=1&pageSize=13').success(function (data) {
                            if (data.code == 200) {
                                $('.page3-div-checkbox5').attr('checked', false).parent().removeClass('on');
                                if (data.data.length == 0) {
                                    $scope.shibai1 = 0;
                                    $('.page1-table-page4').css('display', 'none')
                                } else {
                                    $scope.shibai1 = data.data.totalElements;
                                    $('.page1-table-page4').css('display', 'block')
                                }
                                $scope.shibai = data.data.content;
                                $('.page1-table-page4').pagination({
                                    isHide:true,
                                    totalData: $scope.shibai1,
                                    showData: 15,
                                    coping: true,
                                    count: 1,
                                    callback: function (api) {
                                        var data = {
                                            page: api.getCurrent(),
                                        };
                                        $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([-1, 3]) + '&pageNo=' + data.page + '&pageSize=13').success(function (data) {
                                            if (data.code == 200) {
                                                $scope.shibai = data.data.content;
                                                $scope.shibai1 = data.data.totalElements;
                                            }
                                        })
                                    }

                                })
                            } else {
                                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                                setTimeout(function () {
                                    $('.page1-alert-small-danger').hide(300)
                                }, 2000)
                            }


                        });
                    }

                    $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;批量删除任务成功');
                    setTimeout(function () {
                        $('.page1-alert-waring').hide(300)
                    }, 2000)
                } else {
                    $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;批量删除任务失败，请重试并检查设备连接');
                    setTimeout(function () {
                        $('.page1-alert-danger').hide(300)
                    }, 2000)
                }
            });
        }
    }

    /*-------删除全部任务-------*/
    $scope.removeAllTask = function (e) {
        $scope.qurenRemove = e;

        for (var i = 0, arr = []; i < $('.page1-onChecked').length; i++) {
            if ($('.page1-onChecked').eq(i).prop('checked')) {
                arr.push($('.page1-onChecked').eq(i).attr('title'));
            }
        }
        if (arr.length == 0) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择并勾选需要删除的任务');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else {
            $http.get($rootScope.link + '/task/checkTaskStatus?idList=' + JSON.stringify(arr) + '').success(function (data) {
                if (data.code == 200) {
                    if (data.data == false) {
                        $scope.sweepBoxOneTwo1 = true;
                    } else {
                        var arr = [];
                        for (var i = 0, arr1 = []; i < $('.page1-onChecked1').length; i++) {
                            if ($('.page1-onChecked1').eq(i).prop('checked')) {
                                arr1.push($('.page1-onChecked1').eq(i).attr('title'));
                            }
                        }
                        for (var i = 0, arr2 = []; i < $('.page1-onChecked2').length; i++) {
                            if ($('.page1-onChecked2').eq(i).prop('checked')) {
                                arr2.push($('.page1-onChecked2').eq(i).attr('title'));
                            }
                        }
                        for (var i = 0, arr3 = []; i < $('.page1-onChecked3').length; i++) {
                            if ($('.page1-onChecked3').eq(i).prop('checked')) {
                                arr3.push($('.page1-onChecked3').eq(i).attr('title'));
                            }
                        }
                        if ($scope.qurenRemove == 1) {
                            arr = arr1
                        } else if ($scope.qurenRemove == 2) {
                            arr = arr2
                        } else if ($scope.qurenRemove == 3) {
                            arr = arr3
                        }
                        $('.page3-div-checkbox1').attr('checked', false).parent().removeClass('on');
                        var sendObj = new FormData()
                        if ($scope.qurenRemove == 1) {
                            sendObj.append('idList', JSON.stringify(arr1))
                        } else if ($scope.qurenRemove == 2) {
                            sendObj.append('idList', JSON.stringify(arr2))
                        } else if ($scope.qurenRemove == 3) {
                            sendObj.append('idList', JSON.stringify(arr3))
                        }
                        $http({
                            method: 'POST',
                            url: $rootScope.link + "/task/delTasks",
                            data: sendObj,
                            headers: {'Content-Type': undefined},
                            transformRequest: angular.identity
                        }).success(function (data) {
                            if (data.code == 200) {
                                $scope.sweepBoxOneTwo1 = false;
                                if ($scope.qurenRemove == 1) {
                                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([-1, 0, 1, 2, 3]) + '&pageNo=1&pageSize=13').success(function (data) {
                                        if (data.code == 200) {
                                            $('.page3-div-checkbox1').attr('checked', false).parent().removeClass('on');
                                            $scope.TaskAllList = data.data.content;
                                            $scope.page1InitDataLength = data.data.totalElements
                                            $('.page1-table-page').pagination({
                                                isHide:true,
                                                totalData: $scope.page1InitDataLength,
                                                showData: 15,
                                                coping: true,
                                                count: 1,
                                                callback: function (api) {
                                                    var data = {
                                                        page: api.getCurrent(),
                                                    };
                                                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([-1, 0, 1, 2, 3]) + '&pageNo=' + data.page + '&pageSize=13').success(function (data) {
                                                        if (data.code == 200) {
                                                            $scope.TaskAllList = data.data.content;
                                                            $scope.page1InitDataLength = data.data.totalElements
                                                        }
                                                    })
                                                }

                                            })
                                        } else {
                                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                                            setTimeout(function () {
                                                $('.page1-alert-small-danger').hide(300)
                                            }, 2000)
                                        }

                                    })
                                }
                                else if ($scope.qurenRemove == 2) {
                                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([1]) + '&pageNo=1&pageSize=13').success(function (data) {
                                        if (data.code == 200) {
                                            $('.page3-div-checkbox2').attr('checked', false).parent().removeClass('on');
                                            $scope.zhixing = data.data.content;
                                            if (data.data.content.length == 0) {
                                                $('.page1-table-page1').css('display', 'none')
                                                $scope.zhixing1 = 0;
                                            } else {
                                                $scope.zhixing1 = data.data.totalElements;
                                                $('.page1-table-page1').css('display', 'block')
                                            }
                                            $('.page1-table-page1').pagination({
                                                isHide:true,
                                                totalData: $scope.zhixing1,
                                                showData: 15,
                                                coping: true,
                                                count: 1,
                                                callback: function (api) {
                                                    var data = {
                                                        page: api.getCurrent(),
                                                    };
                                                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([1]) + '&pageNo=' + data.page + '&pageSize=13').success(function (data) {
                                                        if (data.code == 200) {
                                                            $scope.zhixing = data.data.content;
                                                            $scope.zhixing1 = data.data.totalElements;
                                                        }
                                                    })
                                                }

                                            })
                                        } else {
                                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                                            setTimeout(function () {
                                                $('.page1-alert-small-danger').hide(300)
                                            }, 2000)
                                        }


                                    });
                                }
                                else if ($scope.qurenRemove == 3) {
                                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([0]) + '&pageNo=1&pageSize=13').success(function (data) {
                                        if (data.code == 200) {
                                            $('.page3-div-checkbox3').attr('checked', false).parent().removeClass('on');
                                            if (data.data.content.length == 0) {
                                                $scope.dengdai1 = 0;
                                                $('.page1-table-page2').css('display', 'none')
                                            } else {
                                                $scope.dengdai1 = data.data.totalElements;
                                                $('.page1-table-page2').css('display', 'block')
                                            }
                                            $scope.dengdai = data.data.content;
                                            $('.page1-table-page2').pagination({
                                                isHide:true,
                                                totalData: $scope.dengdai1,
                                                showData: 15,
                                                coping: true,
                                                count: 1,
                                                callback: function (api) {
                                                    var data = {
                                                        page: api.getCurrent(),
                                                    };
                                                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([0]) + '&pageNo=' + data.page + '&pageSize=13').success(function (data) {
                                                        if (data.code == 200) {
                                                            $scope.dengdai = data.data.content;
                                                            $scope.dengdai1 = data.data.totalElements;
                                                        }
                                                    })
                                                }

                                            })
                                        } else {
                                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                                            setTimeout(function () {
                                                $('.page1-alert-small-danger').hide(300)
                                            }, 2000)
                                        }


                                    });
                                }
                                $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;批量删除任务成功');
                                setTimeout(function () {
                                    $('.page1-alert-waring').hide(300)
                                }, 2000)
                            } else {
                                $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;批量删除任务失败，请重试并检查设备连接');
                                setTimeout(function () {
                                    $('.page1-alert-danger').hide(300)
                                }, 2000)
                            }
                        });
                    }
                } else {
                    $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                    setTimeout(function () {
                        $('.page1-alert-small-danger').hide(300)
                    }, 2000)
                }
            });

        }
    }

    /*-------点击弹出统计-------*/
    $scope.tongjiSsow = function (e, q) {
        if (e == '微信精准加人') {
            $scope.ShowDatasza2 = true;
            $scope.ShowDatasza1 = false;
            $http.get($rootScope.link + '/task/getTaskStatistics?taskId=' + q + '').success(function (data) {
            // $http.get('http://192.168.1.115:8080/wgcs/task/getTaskStatistics?taskId=' + q + '').success(function (data) {
                if(data.code==200){
                    $scope.moreError=data.data.successMsg;
                    $scope.moreErrorShow=data.data.status;
                }
            });

        } else {

            $scope.ShowDatasza1 = true;
            $scope.ShowDatasza2 = false;
            $http.get($rootScope.link + '/task/getTaskStatistics?taskId=' + q + '').success(function (data) {
                if(data.code==200){
                    $scope.page5mmp = data.data.scriptChName;
                    $scope.moreError=data.data.successMsg;
                    $scope.moreErrorShow=data.data.status;
                }
            });
        }
    }

    /*-------关闭统计-------*/
    $scope.page5Close = function () {
        $scope.ShowDatasza1 = false;
    }
    $scope.page5Close2 = function () {
        $scope.ShowDatasza2 = false;
    }
    $scope.page5Close3 = function (id) {
        $scope.ShowDatasza3 = false;
    }
    /*-------点击查看异常失败-------*/
    $scope.seeDatas = function (id) {
        $http.get($rootScope.link + '/task/getErrorTask?taskId=' + id).success(function (data) {
            if (data.code == 200) {
                $scope.ShowDatasza3 = true;
                $scope.TaskAllList3 = data.data;
            } else {
                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                setTimeout(function () {
                    $('.page1-alert-small-danger').hide(300)
                }, 2000)
            }
        });
    }
    $scope.pagelength = 0
    $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([-1, 0, 1, 2, 3]) + '&pageNo=1&pageSize=13').success(function (data) {
        $scope.TaskAllList = data.data.content;
        $scope.page1InitDataLength = data.data.totalElements
        $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([1]) + '&pageNo=1&pageSize=13').success(function (data) {
            if (data.code == 200) {
                $scope.zhixing1 = data.data.totalElements;
                $scope.zhixing = data.data.content;
            } else {
                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                setTimeout(function () {
                    $('.page1-alert-small-danger').hide(300)
                }, 2000)
            }

        });
        $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([0]) + '&pageNo=1&pageSize=13').success(function (data) {
            if (data.code == 200) {
                $scope.dengdai1 = data.data.totalElements;
                $scope.dengdai = data.data.content;
            } else {
                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                setTimeout(function () {
                    $('.page1-alert-small-danger').hide(300)
                }, 2000)
            }
        });
        $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([2]) + '&pageNo=1&pageSize=13').success(function (data) {
            if (data.code == 200) {
                $scope.wancheng1 = data.data.totalElements;
                $scope.wancheng = data.data.content;
            } else {
                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                setTimeout(function () {
                    $('.page1-alert-small-danger').hide(300)
                }, 2000)
            }
        });
        $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([-1, 3]) + '&pageNo=1&pageSize=13').success(function (data) {
            if (data.code == 200) {
                $scope.shibai1 = data.data.totalElements;
                $scope.shibai = data.data.content;
            } else {
                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                setTimeout(function () {
                    $('.page1-alert-small-danger').hide(300)
                }, 2000)
            }
        });
        $('.page1-table-page').pagination({
            isHide:true,
            totalData: $scope.page1InitDataLength,
            showData: 15,
            coping: true,
            count: 1,
            callback: function (api) {
                var data = {
                    page: api.getCurrent(),
                };
                $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([-1, 0, 1, 2, 3]) + '&pageNo=' + data.page + '&pageSize=13').success(function (data) {
                    if (data.code == 200) {
                        $scope.TaskAllList = data.data.content;
                        $scope.page1InitDataLength = data.data.totalElements
                    }
                })
            }

        })
        // $http.get($rootScope.link + '/task/getGroupTaskInit?status=2').success(function (data) {
        //     if (data.code == 200) {
        //         $scope.wancheng1 = data.data.length;
        //         $scope.wancheng = data.data;
        //     } else {
        //         $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
        //         setTimeout(function () {
        //             $('.page1-alert-small-danger').hide(300)
        //         }, 2000)
        //     }
        // });
        // $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
        //     if (data.code == 200) {
        //         $scope.shibai1 = data.data.length;
        //         $scope.shibai = data.data;
        //     } else {
        //         $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
        //         setTimeout(function () {
        //             $('.page1-alert-small-danger').hide(300)
        //         }, 2000)
        //     }
        // });


    });
    $scope.isShow = function (s) {
        if (s == 3) {
            return true;
        }
    };
    $scope.taskOut = false;
    $scope.checkWrong = function (id) {
        $http.get($rootScope.link + '/task/getErrorTask?taskId=' + id).success(function (data) {
            if (data.code == 200) {
                $scope.taskOut = true;
                $scope.taskList = data.data;
            } else {
                alert(data.msg);
            }

        });
    };
    $scope.getTaskBack = function () {
        $scope.taskOut = false;
    };
}]);
