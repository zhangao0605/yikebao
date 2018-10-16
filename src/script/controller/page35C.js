app.controller('page35C', ["$rootScope", "$scope", "$http", "$timeout", function ($rootScope, $scope, $http, $timeout) {
    $rootScope.getAllFalse();
    $rootScope.initOver = true;
    $rootScope.activeThirtyFive = true;
    $rootScope.navPartThree = true;
    $rootScope.isScreenPage = false;
    $scope.table1 = true;
    $scope.table2 = false;
    $scope.table3 = false;
    $scope.inSideBox1 = true;
    $scope.page2Table3Group = false
    $rootScope.page5getMoreData = 1
    //页面显示
    $scope.outSideBox = false;
    $scope.insideBox = false;
    $scope.assBack = false;
    $scope.resetSelect = true;

    /*-------设备列表展开收起-----*/
    $scope.fvcMe = function (e) {
        $('.list_dd').stop();
        $(".list_dt").eq(e).parent().siblings("new-wx-group-list-li").removeAttr("id");
        if ($(".list_dt").eq(e).parent().attr("id") == "open") {
            $(".list_dt").eq(e).parent().removeAttr("id").find('i').css('background', ' url("images/offChecked.png")center no-repeat')
        } else {
            $(".list_dt").eq(e).parent().attr("id", "open").find('i').css('background', ' url("images/openChecked.png")center no-repeat')
        }
    }

    $scope.getInside = function (d) {
        $scope.outSideBox = false;
        $scope.insideBox = true;
        $scope.assMoveTo = false;
        $scope.assBack = true;
        $scope.resetSelect = false;
        $scope.assDevice = d;
        $http.get($rootScope.link + '/wechat/getWechatByDevice?device=' + d).success(function (data) {
            $scope.assList = data.data;
        });
    };
    /*------------获取在线设备------------*/
    $http.get($rootScope.link + '/group/getGroupDataByStatus').success(function (data) {
        if (data.code == 200) {
            $scope.hhalk = []
            for (var a = 0; a < data.data.length; a++) {
                if (data.data[a].deviceVos.length == 0) {
                } else {
                    for (var i = 0; i < data.data[a].deviceVos.length; i++) {
                        $scope.hhalk.push(data.data[a].deviceVos[i].device)
                    }
                }

            }
            $scope.hhalk1 = $scope.hhalk.length
        } else {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        }
    });

    /*------------注销登录------------*/
    $scope.logout = function () {
        $http.get($rootScope.link + '/logout').success(function (data) {
            if (data.code == 200) {
                window.location.href = 'http://' + window.location.host + '/wgcs/#/login'

            } else {
                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;注销登录失败');
                setTimeout(function () {
                    $('.page1-alert-small-danger').hide(300)
                }, 2000)
            }
        })
    }
    /*--------------------------------点击切换后返回-------------------------------------*/
    $scope.getAssBack = function () {
        $scope.outSideBox = true;
        $scope.insideBox = false;
        $scope.resetSelect = true;
        $scope.assBack = false;
        $scope.assMoveTo = true;
        var newArr = [];
        for (var i = 0; i < $('.page17-wx-input').length; i++) {
            if ($('.page17-wx-input').eq(i).prop('checked')) {
                newArr.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
            }
        }
        $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify(newArr) + '&pageNo=1&pageSize=17').success(function (data) {
            if (data.code == 200) {
                $scope.checkAllFour = false;
                $('.page4-floor-one-list').find('span').eq(0).removeClass('on');
                $scope.page1InitDataLength = data.data.content.length


                $('.page2-table1-page').pagination({
                    totalData: $scope.page1InitDataLength,
                    pageCount: 1,
                    showData: 15,
                    coping: true,
                    count: 2,
                    callback: function (api) {
                        var data = {
                            page: api.getCurrent(),
                        };
                        $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify(newArr) + '&pageNo=' + data.page + '&pageSize=15').success(function (data) {
                            if (data.code == 200) {
                                $scope.page1InitDataLength = data.data.content.length
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
    };
    /*--------------------------------页面初始化------------------------------------------*/
    $timeout(function () {
        // $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify($rootScope.moArray) + '&pageNo=1&pageSize=17').success(function (data) {
        $http.get($rootScope.link + '/device/getAllDeviceByStatus?pageNo=1&pageSize=15').success(function (data) {
            if (data.code == 200) {
                $scope.page1InitDataLength = data.data.content.length
                $('.page2-table1-page').pagination({
                    totalData: $scope.page1InitDataLength,
                    pageCount: 1,
                    showData: 15,
                    coping: true,
                    count: 2,
                    callback: function (api) {
                        var data = {
                            page: api.getCurrent(),
                        };
                        $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify($rootScope.moArray) + '&pageNo=' + data.page + '&pageSize=15').success(function (data) {
                            $rootScope.equipList4 = data.data.content;
                            $scope.page1InitDataLength = data.data.content.length
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
    }, 0);
    //上移
    /*---------------------------上移样式---------------------------------*/
    $scope.isRankOne = function (n) {
        return n == 1 ? 'on' : '';
    };
    /*---------------------------下移样式---------------------------------*/
    $scope.rankDisabled = function (n) {
        return n == 1 ? true : false;
    };
    /*---------------------------上移---------------------------------*/
    $scope.moveUp = function (n) {
        $http.get($rootScope.link + '/wechat/up?rank=' + n + '&device=' + $scope.assDevice).success(function (data) {

            if (data.code == 200) {
                $('.page1-alert-small-success').show(300).find('.page1-alert-small-success-con').html('&nbsp;&nbsp;移动成功');
                setTimeout(function () {
                    $('.page1-alert-small-success').hide(300)
                }, 2000)
                $http.get($rootScope.link + '/wechat/getWechatByDevice?device=' + $scope.assDevice).success(function (data) {
                    $scope.assList = data.data;
                });
            } else {
                $('.page1-alert-small-success').show(300).find('.page1-alert-small-success-con').html('&nbsp;&nbsp;分组名称修改成功');
                setTimeout(function () {
                    $('.page1-alert-small-success').hide(300)
                }, 2000)
            }
        });
    };
    //下移
    $scope.isRankLast = function (n) {
        return n == 20 ? 'on' : '';
    };
    $scope.rankDisabledLast = function (n) {
        return n == 20 ? true : false;
    };
    $scope.moveDown = function (n) {
        $http.get($rootScope.link + '/wechat/down?rank=' + n + '&device=' + $scope.assDevice).success(function (data) {
            if (data.code == 200) {
                $('.page1-alert-small-success').show(300).find('.page1-alert-small-success-con').html('&nbsp;&nbsp;移动成功');
                setTimeout(function () {
                    $('.page1-alert-small-success').hide(300)
                }, 2000)
                $http.get($rootScope.link + '/wechat/getWechatByDevice?device=' + $scope.assDevice).success(function (data) {
                    $scope.assList = data.data;
                });
            } else {
                $('.page1-alert-small-success').show(300).find('.page1-alert-small-success-con').html('&nbsp;&nbsp;分组名称修改成功');
                setTimeout(function () {
                    $('.page1-alert-small-success').hide(300)
                }, 2000)
            }
        });
    };
    /*-------------------------------点击切换-------------------------------------*/
    $scope.assMoveTo = true;
    $scope.checked = [];
    $scope.selectAll = function () {
        if ($scope.checkAllFour) {
            $scope.checked = [];
            angular.forEach($rootScope.equipList4, function (i) {
                i.checked = true;
                $scope.checked.push(i.device);
            })
        } else {
            angular.forEach($rootScope.equipList4, function (i) {
                i.checked = false;
                $scope.checked = [];
            })
        }
    };
    $scope.selectOne = function () {
        angular.forEach($rootScope.equipList4, function (i) {
            var index = $scope.checked.indexOf(i.device);
            if (i.checked && index === -1) {
                $scope.checked.push(i.device);
            } else if (!i.checked && index != -1) {
                $scope.checked.splice(index, 1);
            }
        });
        if ($rootScope.equipList4.length === $scope.checked.length) {
            $scope.checkAll = true;
        } else {
            $scope.checkAll = false;
        }
    };
    $scope.resetNumber = '1';
    /*---------------------------------点击切换------------------------------------------------*/
    $scope.resetButton = function () {
        for (var i = 0, arr = []; i < $('.page17-wx-input').length; i++) {
            if ($('.page17-wx-input').eq(i).prop('checked')) {
                arr.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
            }
        }
        if (arr.length == 0) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请勾选需要切换的设备');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else {
            $http.get($rootScope.link + '/group/switchWechat?devices=' + JSON.stringify(arr) + '&rank=' + parseInt($scope.resetNumber)).success(function (data) {
                if (data.code == 200) {
                    $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;切换微信号任务添加成功');
                    setTimeout(function () {
                        $('.page1-alert-waring').hide(300)
                    }, 2000)
                    var newArr = [];
                    for (var i = 0; i < $('.new-wx-equip-input4').length; i++) {
                        if ($('.new-wx-equip-input4').eq(i).prop('checked')) {
                            newArr.push($('.new-wx-equip-input4').eq(i).parent().next().attr('title'));
                        }
                    }
                    //$http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify(newArr) + '&pageNo=1&pageSize=17').success(function (data) {
                    //    if (data.code == 200) {
                    //        $rootScope.equipList4 = data.data.content;
                    //        $('#pages4').Page({
                    //            totalPages: data.data.totalPages,//分页总数
                    //            liNums: 5,//分页的数字按钮数(建议取奇数)
                    //            activeClass: 'activP', //active 类样式定义
                    //            callBack: function (page) {
                    //                $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify(newArr) + '&pageNo=' + page + '&pageSize=17').success(function (data) {
                    //                    $rootScope.equipList4 = data.data.content;
                    //                })
                    //            }
                    //        });
                    //    }
                    //});
                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
                        if (data.code == 200) {
                            $rootScope.taskList = data.data;
                            $rootScope.taskAll = true;
                            $rootScope.taskDoing = false;
                            $rootScope.taskWait = false;
                            $rootScope.taskDown = false;
                            $rootScope.newBell = true;
                        } else {
                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                            setTimeout(function () {
                                $('.page1-alert-small-danger').hide(300)
                            }, 2000)
                        }
                    });
                } else {
                    $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;添加任务失败');
                    setTimeout(function () {
                        $('.page1-alert-danger').hide(300)
                    }, 2000)
                }
            });
        }

    };
    /*--------------------------------------设备管理完结----------------------------------------------------------*/
    /*-------------------------------table切换--------------------------------------------------*/
    $rootScope.page4getMoreData = 2
    $('.lalaldemaxiya').css('display', 'none')
    $scope.tableSwitch = function (e) {
        if (e == 1) {
            $scope.page2TableChangeName = false;
            $scope.page2TableChangeTag = false;
            $scope.sendMsgFri = false;
            $scope.ThumbsUpTurn = false;
            $scope.page2AddPeople = false;
            $scope.sendMsgFriToGroup = false;
            $('.page3-div-checkbox-friends').attr('checked', false).parent().removeClass('on')
            $rootScope.page4getMoreData = 1
            $scope.page2Table3Group = false
            $scope.inSideBox1 = false
            $scope.insideBox = false;
            $scope.outSideBox = true;
            $('.page2-title-button-but1').css({
                "background-color": "#2ABF9E",
                "color": "#fff"
            }).siblings().css({"background-color": "#fff", "color": "#2ABF9E"});
            for (var arr = [], i = 0; i < $('.page17-wx-input').length; i++) {
                if ($('.page17-wx-input').eq(i).prop('checked')) {
                    arr.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
                }
            }
            if (arr.length > 0) {
                $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify(arr) + '&pageNo=1&pageSize=15').success(function (data) {
                    if (data.code == 200) {
                        $rootScope.equipList4 = data.data.content;
                        $scope.page1InitDataLength = data.data.content.length
                        $('.lalaldemaxiya').css('display', 'block')
                        $('.page2-table1-page').pagination({
                            isHide: true,
                            totalData: $scope.page1InitDataLength,
                            showData: 15,
                            pageCount: 1,
                            coping: true,
                            count: 2,
                            callback: function (api) {
                                var data = {
                                    page: api.getCurrent(),
                                };
                                $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify(arr) + '&pageNo=' + data.page + '&pageSize=15').success(function (data) {
                                    if (data.code == 200) {
                                        $scope.page1InitDataLength = data.data.content.length;
                                        $rootScope.equipList4 = data.data.content;
                                        $('.page3-div-checkbox-friends').attr('checked', false).parent().removeClass('on')
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
                $('.lalaldemaxiya').css('display', 'none')
                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请勾选相关设备以便对其操作');
                setTimeout(function () {
                    $('.page1-alert-small-danger').hide(300)
                }, 2000)
            }

        }
        else if (e == 2) {
            $scope.page2TableChangeName = false;
            $scope.page2TableChangeTag = false;
            $scope.sendMsgFri = false;
            $scope.ThumbsUpTurn = false;
            $scope.page2AddPeople = false;
            $scope.sendMsgFriToGroup = false;
            $rootScope.page4getMoreData = 2
            $scope.page2Table3Group = false
            $scope.inSideBox1 = true;
            $scope.insideBox = false;
            $scope.outSideBox = false;
            $('.page2-title-button-but2').css({
                "background-color": "#2ABF9E",
                "color": "#fff"
            }).siblings().css({"background-color": "#fff", "color": "#2ABF9E"});
            for (var arr = [], i = 0; i < $('.page17-wx-input').length; i++) {
                if ($('.page17-wx-input').eq(i).prop('checked')) {
                    arr.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
                }
            }
            if (arr.length > 0) {
                $http.get($rootScope.link + '/operate/getContact?devices=' + JSON.stringify(arr) + '&pageNo=1&pageSize=15').success(function (data) {
                    if (data.code == 200) {
                        $rootScope.WxList = data.data.content;
                        $rootScope.page1InitDataLength = data.data.totalElements;
                        $('.page3-div-checkbox-friends').attr('checked', false).parent().removeClass('on')
                        $('.page2-table2-page').pagination({
                            isHide: true,
                            totalData: $rootScope.page1InitDataLength,
                            pageCount: 1,
                            showData: 15,
                            coping: true,
                            count: 2,
                            callback: function (api) {
                                var data = {
                                    page: api.getCurrent(),
                                };
                                for (var arr1 = [], i = 0; i < $('.page17-wx-input').length; i++) {
                                    if ($('.page17-wx-input').eq(i).prop('checked')) {
                                        arr1.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
                                    }
                                }
                                if (arr1.length == 0) {
                                    $rootScope.WxList = []
                                    $rootScope.page1InitDataLength = 0;
                                    $('.page3-div-checkbox-friends').attr('checked', false).parent().removeClass('on')
                                    $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择相关设备查看对应好友');
                                    setTimeout(function () {
                                        $('.page1-alert-small-danger').hide(300)
                                    }, 2000)
                                } else {
                                    $http.get($rootScope.link + '/operate/getContact?devices=' + JSON.stringify(arr1) + '&pageNo=' + data.page + '&pageSize=15').success(function (data) {
                                        $rootScope.WxList = data.data.content;
                                        $rootScope.page1InitDataLength = data.data.totalElements;
                                        $('.page3-div-checkbox-friends').attr('checked', false).parent().removeClass('on')
                                    })
                                }
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
                $rootScope.WxList = []
                $rootScope.page1InitDataLength = 0;
                $('.page3-div-checkbox-friends').attr('checked', false).parent().removeClass('on')
                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请勾选相关设备以便对其操作');
                setTimeout(function () {
                    $('.page1-alert-small-danger').hide(300)
                }, 2000)

            }
        }
        else {
            $scope.page2TableChangeName = false;
            $scope.page2TableChangeTag = false;
            $scope.sendMsgFri = false;
            $scope.ThumbsUpTurn = false;
            $scope.page2AddPeople = false;
            $scope.sendMsgFriToGroup = false;
            $('.page3-div-checkbox-Groups').attr('checked', false).parent().removeClass('on')
            $rootScope.page4getMoreData = 3
            $scope.page2Table3Group = true
            $scope.inSideBox1 = false;
            $scope.insideBox = false;
            $scope.outSideBox = false;
            $('.page2-title-button-but3').css({
                "background-color": "#2ABF9E",
                "color": "#fff"
            }).siblings().css({"background-color": "#fff", "color": "#2ABF9E"});
            for (var arr = [], i = 0; i < $('.page17-wx-input').length; i++) {
                if ($('.page17-wx-input').eq(i).prop('checked')) {
                    arr.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
                }
            }

            if (arr.length > 0) {
                $http.get($rootScope.link + '/operate/getClubByWechatNumber?devices=' + JSON.stringify(arr) + '&pageNo=1&pageSize=15').success(function (data) {
                    if (data.code == 200) {
                        $rootScope.WxList1 = data.data.content;
                        $rootScope.page1InitDataLength2 = data.data.totalElements;
                        $('.page3-div-checkbox-Groups').attr('checked', false).parent().removeClass('on')
                        $('.page2-table3-page').pagination({
                            isHide: true,
                            totalData: $rootScope.page1InitDataLength2,
                            pageCount: 1,
                            showData: 15,
                            coping: true,
                            count: 2,
                            callback: function (api) {
                                var data = {
                                    page: api.getCurrent(),
                                };
                                if (arr.length == 0) {
                                    $rootScope.WxList1 = []
                                    $rootScope.page1InitDataLength2 = 0;
                                    $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择相关设备查看对应好友');
                                    setTimeout(function () {
                                        $('.page1-alert-small-danger').hide(300)
                                    }, 2000)
                                } else {
                                    $http.get($rootScope.link + '/operate/getClubByWechatNumber?devices=' + JSON.stringify(arr) + '&pageNo=' + data.page + '&pageSize=15').success(function (data) {
                                        $rootScope.WxList1 = data.data.content;
                                        $rootScope.page1InitDataLength2 = data.data.totalElements;
                                        $('.page3-div-checkbox-Groups').attr('checked', false).parent().removeClass('on')
                                    })
                                }
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
                arr = []
                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请勾选相关设备以便对其操作');
                setTimeout(function () {
                    $('.page1-alert-small-danger').hide(300)
                }, 2000)
                $rootScope.page1InitDataLength2 = 0
                $http.get($rootScope.link + '/operate/getClubByWechatNumber?devices=' + JSON.stringify(arr) + '&pageNo=1&pageSize=15').success(function (data) {
                    $rootScope.WxList1 = [];
                    $rootScope.page1InitDataLength2 = 0;
                    $('.page3-div-checkbox-Groups').attr('checked', false).parent().removeClass('on')
                    $('.page2-table3-page').pagination({
                        totalData: $rootScope.page1InitDataLength2,
                        pageCount: 1,
                        showData: 15,
                        coping: true,
                        isHide: true,
                        count: 2,
                        callback: function (api) {
                            var data = {
                                page: api.getCurrent(),
                            };
                            $http.get($rootScope.link + '/operate/getClubByWechatNumber?devices=' + JSON.stringify(arr) + '&pageNo=1&pageSize=15').success(function (data) {
                                $rootScope.WxList1 = [];
                                $rootScope.page1InitDataLength2 = 0;
                                $('.page3-div-checkbox-Groups').attr('checked', false).parent().removeClass('on')
                            })
                        }
                    })
                })

            }

        }
    }

    ///*------------------------------更改名字和标签名--------------------------------*/
    $scope.page2TableChangeName = false;
    $scope.page2TableChangeTag = false;
    $scope.newName = '';
    $scope.newTag = '';
    $scope.getEditBoxOne = function (id) {
        $scope.page2TableChangeName = true;
        $scope.editIdFriend = id;
    };

    $scope.cancelButton = function () {
        $scope.page2TableChangeName = false;
        $scope.page2TableChangeTag = false;
    };
    /*--------更改好友备注名称------*/
    $scope.SureButtonOne = function (id) {
        var number = $('.page2-table2-page').find('.active').html()
        if ($scope.newName == '') {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;备注昵称不能为空');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else {
            $http.get($rootScope.link + '/operate/updateContact?name=' + $scope.newName + '&id=' + $scope.editIdFriend).success(function (data) {
                if (data.code == 200) {
                    $('.page1-alert-small-success').show(300).find('.page1-alert-small-success-con').html('&nbsp;&nbsp;修改成功');
                    setTimeout(function () {
                        $('.page1-alert-small-success').hide(300)
                    }, 2000)
                    for (var arr1 = [], i = 0; i < $('.page17-wx-input').length; i++) {
                        if ($('.page17-wx-input').eq(i).prop('checked')) {
                            arr1.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
                        }
                    }
                    $scope.page2TableChangeName = false;
                    $scope.newName = '';
                    $http.get($rootScope.link + '/operate/getContact?devices=' + JSON.stringify(arr1) + '&pageNo=' + number + '&pageSize=15').success(function (data) {
                        if (data.code == 200) {
                            $rootScope.WxList = data.data.content;
                            $scope.page1InitDataLength = data.data.content.length;
                            $('.page3-div-checkbox-friends').attr('checked', false).parent().removeClass('on')
                            $('.page2-table1-page').pagination({
                                totalData: $scope.page1InitDataLength,
                                showData: 15,
                                pageCount: 1,
                                coping: true,
                                count: 2,
                                current: number,
                                callback: function (api) {
                                    var data = {
                                        page: api.getCurrent(),
                                    };
                                    $http.get($rootScope.link + '/operate/getContact?devices=' + JSON.stringify(arr1) + '&pageNo=' + data.page + '&pageSize=15').success(function (data) {
                                        $rootScope.WxList = data.data.content;
                                        $scope.page1InitDataLength = data.data.totalElements;
                                        $('.page3-div-checkbox-friends').attr('checked', false).parent().removeClass('on')
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
                    $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                    setTimeout(function () {
                        $('.page1-alert-small-danger').hide(300)
                    }, 2000)
                }
            });
        }
    };
    $scope.getEditBoxTwo = function (id) {
        $scope.page2TableChangeTag = true;
        $scope.newTaFriendiD = id;
    };
    /*--------添加好友标签--------*/
    $scope.SureButtonTwo = function () {
        if ($scope.newTaFriend == '') {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;新增标签不能为空');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else {
            $http.get($rootScope.link + '/operate/updateContact?tag=' + $scope.newTaFriend + '&id=' + $scope.newTaFriendiD).success(function (data) {
                if (data.code == 200) {
                    var number = $('.page2-table2-page').find('.active').html()
                    $('.page1-alert-small-success').show(300).find('.page1-alert-small-success-con').html('&nbsp;&nbsp;标签添加成功');
                    setTimeout(function () {
                        $('.page1-alert-small-success').hide(300)
                    }, 2000)
                    $scope.page2TableChangeTag = false;
                    $scope.newTaFriend = '';
                    $http.get($rootScope.link + '/operate/getContact?devices=' + JSON.stringify(arr1) + '&pageNo=' + number + '&pageSize=15').success(function (data) {
                        if (data.code == 200) {
                            $rootScope.WxList = data.data.content;
                            $scope.page1InitDataLength = data.data.content.length;
                            $('.page3-div-checkbox-friends').attr('checked', false).parent().removeClass('on')
                            $('.page2-table1-page').pagination({
                                totalData: $scope.page1InitDataLength,
                                showData: 15,
                                pageCount: 1,
                                coping: true,
                                count: 2,
                                current: number,
                                callback: function (api) {
                                    var data = {
                                        page: api.getCurrent(),
                                    };
                                    $http.get($rootScope.link + '/operate/getContact?devices=' + JSON.stringify(arr1) + '&pageNo=' + data.page + '&pageSize=15').success(function (data) {
                                        $rootScope.WxList = data.data.content;
                                        $scope.page1InitDataLength = data.data.totalElements;
                                        $('.page3-div-checkbox-friends').attr('checked', false).parent().removeClass('on')
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
                    $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                    setTimeout(function () {
                        $('.page1-alert-small-danger').hide(300)
                    }, 2000)
                }
            });
        }
    };
    //-----------------二级界面实时发送好友消息--------------
    $scope.sendMsgFri = false;


    $scope.NoMessageSendBox = function () {
        $scope.sendMsgFri = false;
    }
    //---------------点击发送消息按钮--------------

    $scope.maxInterval = 10
    $scope.minInterval = 1
    $scope.getMessageSendBox = function () {
        $scope.groupArrFrirnd = [];
        $scope.groupArrFrirndPhone = [];
        $scope.page2table2saySomething = '';
        for (var i = 0; i < $('.page2-table3-friend').length; i++) {
            if ($('.page2-table3-friend').eq(i).prop('checked')) {
                $scope.groupArrFrirnd.push($('.page2-table3-friend').eq(i).attr('friend_id'));
                $scope.groupArrFrirndPhone.push($('.page2-table3-friend').eq(i).attr('friend_Phone'));
            }
        }
        if ($scope.groupArrFrirnd.length == 0) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择并勾选需要发送的好友');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else {
            $scope.sendMsgFri = true;
        }
    };
    //---------------------------------------确认发送消息按钮---------------------------------
    $rootScope.upMsg = 0

    $scope.sureMessageSendBox = function () {
        $scope.groupArrFrirndPhone = [];
        $scope.groupArrcnmmp = [];
        for (var i = 0; i < $('.page2-table3-friend').length; i++) {
            if ($('.page2-table3-friend').eq(i).prop('checked')) {
                $scope.groupArrFrirndPhone.push($('.page2-table3-friend').eq(i).attr('friend_Phone'));
            }
        }
        for (var i = 0; i < $('.page17-wx-input').length; i++) {
            if ($('.page17-wx-input').eq(i).prop('checked')) {
                $scope.groupArrcnmmp.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
            }
        }
        if ($scope.page2table2saySomething == '') {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请填写需要发送的内容');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else if ($scope.groupArrFrirndPhone.length == 0) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择并勾选需要发送消息的好友');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else {
            if ($scope.groupArrFrirnd.length > 200) {
                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;由于微信策略限制每天最多群发好友上限800人，每次群发上限200人');
                setTimeout(function () {
                    $('.page1-alert-small-danger').hide(300)
                }, 2000)
            }
            $scope.sendMsgFri = false;
            $scope.sendObj1 = new FormData();
            $scope.messageSendBox = false;
            $scope.sendObj1.append('devices', JSON.stringify($scope.groupArrcnmmp));
            $scope.sendObj1.append('device', JSON.stringify($scope.groupArrFrirndPhone));
            $scope.sendObj1.append('friendsIdList', JSON.stringify($scope.groupArrFrirnd));
            $scope.sendObj1.append('msg', $scope.page2table2saySomething);
            $scope.sendObj1.append('maxInterval', $scope.maxInterval);
            $scope.sendObj1.append('minInterval', $scope.minInterval);
            $http({
                method: 'POST',
                url: $rootScope.link + "/operate/sendMsgByPro",
                data: $scope.sendObj1,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (response) {
                //上传成功的操作
                if (response.code == 200) {
                    $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;群发消息任务添加成功');
                    setTimeout(function () {
                        $('.page1-alert-waring').hide(300)
                    }, 2000)
                    $scope.messageSendBox = false;
                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
                        if (data.code == 200) {
                            $rootScope.taskList = data.data;
                            $rootScope.taskAll = true;
                            $rootScope.taskDoing = false;
                            $rootScope.taskWait = false;
                            $rootScope.taskDown = false;
                            $rootScope.newBell = true;
                        } else {

                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                            setTimeout(function () {
                                $('.page1-alert-small-danger').hide(300)
                            }, 2000)
                        }
                    });
                } else {
                    $scope.page2Tabledevicss = []
                    $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;送消息任务添加失败，请重试并检查设备连接');
                    setTimeout(function () {
                        $('.page1-alert-danger').hide(300)
                    }, 2000)
                }
            });
        }

    };
    //----------------------给固定好友朋友圈点赞-----------------
    $scope.ThumbsUpNums = 1
    $scope.ThumbsUp = function () {
        $scope.groupArrFrirnd1 = [];
        $scope.groupArrFrirndPhone1 = [];
        for (var i = 0; i < $('.page2-table3-friend').length; i++) {
            if ($('.page2-table3-friend').eq(i).prop('checked')) {
                $scope.groupArrFrirnd1.push($('.page2-table3-friend').eq(i).attr('friend_id'));
                $scope.groupArrFrirndPhone1.push($('.page2-table3-friend').eq(i).attr('friend_Phone'));
            }
        }
        if ($scope.groupArrFrirndPhone1.length == 0) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择并勾选需要点赞的好友');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else {
            $scope.ThumbsUpTurn = true;

        }
    }
    $scope.NoThumbsUpTurn = function () {
        $scope.ThumbsUpTurn = false;
        $scope.ThumbsUpNums = 1
    }
    $scope.lastFound = function () {
        if ($scope.ThumbsUpNums == undefined) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;点赞数量范围为"1-30"请再次输入');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
            $scope.ThumbsUpNums = 1;
        }
    }
    $scope.sureThumbsUpTurn = function () {
        $scope.sendObj2 = new FormData();
        $scope.sendObj2.append('devices', JSON.stringify($scope.groupArrFrirndPhone1));
        $scope.sendObj2.append('likeCount', $scope.ThumbsUpNums);
        $scope.sendObj2.append('friendsIdList', JSON.stringify($scope.groupArrFrirnd1));
        $http({
            method: 'POST',
            url: $rootScope.link + "/operate/praiseForFriends",
            data: $scope.sendObj2,
            headers: {'Content-Type': undefined},
            transformRequest: angular.identity
        }).success(function (response) {
            //上传成功的操作
            if (response.code == 200) {
                $scope.page2Tabledevicss = []
                $scope.ThumbsUpTurn = false;
                $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;朋友圈点赞任务添加成功');
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
                        $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                        setTimeout(function () {
                            $('.page1-alert-small-danger').hide(300)
                        }, 2000)
                    }
                });
            } else {
                $scope.page2Tabledevicss = []
                $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;朋友圈点赞任务添加失败');
                setTimeout(function () {
                    $('.page1-alert-danger').hide(300)
                }, 2000)
            }
        });
    };

    $rootScope.reloads = false;
    $rootScope.reloads1 = false;
    var tt1 = setInterval(function () {
        if ($rootScope.reloads == false) {

        } else {
            for (var arr = [], i = 0; i < $('.page17-wx-input').length; i++) {
                if ($('.page17-wx-input').eq(i).prop('checked')) {
                    arr.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
                }
            }
            if (arr.length > 0) {
                $http.get($rootScope.link + '/operate/getContact?devices=' + JSON.stringify(arr) + '&pageNo=1&pageSize=15').success(function (data) {
                    if (data.code == 200) {
                        $rootScope.WxList = data.data.content;
                        $rootScope.page1InitDataLength = data.data.totalElements;
                        $('.page3-div-checkbox-friends').attr('checked', false).parent().removeClass('on')
                        $('.page2-table2-page').pagination({
                            isHide: true,
                            totalData: $rootScope.page1InitDataLength,
                            pageCount: 1,
                            showData: 15,
                            coping: true,
                            count: 2,
                            callback: function (api) {
                                var data = {
                                    page: api.getCurrent(),
                                };
                                for (var arr1 = [], i = 0; i < $('.page17-wx-input').length; i++) {
                                    if ($('.page17-wx-input').eq(i).prop('checked')) {
                                        arr1.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
                                    }
                                }
                                if (arr1.length == 0) {
                                    $rootScope.WxList = []
                                    $rootScope.page1InitDataLength = 0;
                                    $('.page3-div-checkbox-friends').attr('checked', false).parent().removeClass('on')
                                    $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择相关设备查看对应好友');
                                    setTimeout(function () {
                                        $('.page1-alert-small-danger').hide(300)
                                    }, 2000)
                                } else {
                                    $http.get($rootScope.link + '/operate/getContact?devices=' + JSON.stringify(arr1) + '&pageNo=' + data.page + '&pageSize=15').success(function (data) {
                                        $rootScope.WxList = data.data.content;
                                        $rootScope.page1InitDataLength = data.data.totalElements;
                                        $('.page3-div-checkbox-friends').attr('checked', false).parent().removeClass('on')
                                    })
                                }
                            }
                        })
                        $rootScope.reloads = false
                    } else {
                        $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                        setTimeout(function () {
                            $('.page1-alert-small-danger').hide(300)
                        }, 2000)
                    }
                });
            } else {
                $rootScope.WxList = []
                $rootScope.page1InitDataLength = 0;
                $('.page3-div-checkbox-friends').attr('checked', false).parent().removeClass('on')
                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请勾选相关设备以便对其操作');
                setTimeout(function () {
                    $('.page1-alert-small-danger').hide(300)
                }, 2000)
                $rootScope.reloads = false
            }
        }
    }, 1000)
    var tt3 = setInterval(function () {
        if ($rootScope.reloads1 == false) {

        } else {
            for (var arr = [], i = 0; i < $('.page17-wx-input').length; i++) {
                if ($('.page17-wx-input').eq(i).prop('checked')) {
                    arr.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
                }
            }

            if (arr.length > 0) {
                $http.get($rootScope.link + '/operate/getClubByWechatNumber?devices=' + JSON.stringify(arr) + '&pageNo=1&pageSize=15').success(function (data) {
                    if (data.code == 200) {
                        $rootScope.WxList1 = data.data.content;
                        $rootScope.page1InitDataLength2 = data.data.totalElements;
                        $('.page3-div-checkbox-Groups').attr('checked', false).parent().removeClass('on')
                        $('.page2-table3-page').pagination({
                            isHide: true,
                            totalData: $rootScope.page1InitDataLength2,
                            pageCount: 1,
                            showData: 15,
                            coping: true,
                            count: 2,
                            callback: function (api) {
                                var data = {
                                    page: api.getCurrent(),
                                };
                                if (arr.length == 0) {
                                    $rootScope.WxList1 = []
                                    $rootScope.page1InitDataLength2 = 0;
                                    $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择相关设备查看对应好友');
                                    setTimeout(function () {
                                        $('.page1-alert-small-danger').hide(300)
                                    }, 2000)
                                } else {
                                    $http.get($rootScope.link + '/operate/getClubByWechatNumber?devices=' + JSON.stringify(arr) + '&pageNo=' + data.page + '&pageSize=15').success(function (data) {
                                        $rootScope.WxList1 = data.data.content;
                                        $rootScope.page1InitDataLength2 = data.data.totalElements;
                                        $('.page3-div-checkbox-Groups').attr('checked', false).parent().removeClass('on')
                                    })
                                }
                            }
                        })
                        $rootScope.reloads1 = false
                    } else {
                        $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                        setTimeout(function () {
                            $('.page1-alert-small-danger').hide(300)
                        }, 2000)
                    }
                });
            } else {
                arr = []
                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请勾选相关设备以便对其操作');
                setTimeout(function () {
                    $('.page1-alert-small-danger').hide(300)
                }, 2000)
                $rootScope.page1InitDataLength2 = 0
                $http.get($rootScope.link + '/operate/getClubByWechatNumber?devices=' + JSON.stringify(arr) + '&pageNo=1&pageSize=15').success(function (data) {
                    $rootScope.WxList1 = [];
                    $rootScope.page1InitDataLength2 = 0;
                    $('.page3-div-checkbox-Groups').attr('checked', false).parent().removeClass('on')
                    $('.page2-table3-page').pagination({
                        totalData: $rootScope.page1InitDataLength2,
                        pageCount: 1,
                        showData: 15,
                        coping: true,
                        isHide: true,
                        count: 2,
                        callback: function (api) {
                            var data = {
                                page: api.getCurrent(),
                            };
                            $http.get($rootScope.link + '/operate/getClubByWechatNumber?devices=' + JSON.stringify(arr) + '&pageNo=1&pageSize=15').success(function (data) {
                                $rootScope.WxList1 = [];
                                $rootScope.page1InitDataLength2 = 0;
                                $('.page3-div-checkbox-Groups').attr('checked', false).parent().removeClass('on')
                            })
                        }
                    })
                })
                $rootScope.reloads1 = false
            }
        }
    }, 1000)
    /*-----------------------------------更新好友列表-------------------------------------------------*/
    $scope.getNew = function () {
        for (var arr = [], i = 0; i < $('.page17-wx-input').length; i++) {
            if ($('.page17-wx-input').eq(i).prop('checked')) {
                arr.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
            }
        }
        if (arr.length == 0) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择需要进行更新好友列表操作的设备');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else {

            var sendObj1 = new FormData()
            sendObj1.append('wechatId', JSON.stringify(arr));
            $http.get($rootScope.link + '/wechat/getSomeFriendList?wechatId=' + JSON.stringify(arr) + '').success(function (response) {
                //上传成功的操作
                if (response.code == 200) {
                    $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;更新好友列表任务添加成功');
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
                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                            setTimeout(function () {
                                $('.page1-alert-small-danger').hide(300)
                            }, 2000)
                        }
                    });
                    $scope.reloads = true;
                } else {
                    $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;更新好友列表任务添加失败');
                    setTimeout(function () {
                        $('.page1-alert-danger').hide(300)
                    }, 2000)
                }
            });
        }

    };
    /*-------------------------------------------好友管理完结---------------------------------------------------------*/
    /*--------------刷新群列表---------*/
    $scope.getInsideBoxInGroup = function () {
        for (var arr = [], i = 0; i < $('.page17-wx-input').length; i++) {
            if ($('.page17-wx-input').eq(i).prop('checked')) {
                arr.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
            }
        }
        if (arr.length == 0) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择并勾选需要进行群发消息的设备');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else {
            $http.get($rootScope.link + '/wechat/getSomeGroupList?wechatId=' + JSON.stringify(arr)).success(function (data) {
                if (data.code == 200) {
                    $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;更新群列表任务添加成功');
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
                    $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;更新群列表任务添加失败');
                    setTimeout(function () {
                        $('.page1-alert-danger').hide(300)
                    }, 2000)
                }
            });
        }

    };
    /*-------------点击发群消息------------*/
    $scope.sendMsgFriToGroup = false;
    $scope.getMessageSendBoxGroup = function () {
        $scope.groupArr1 = [];
        $scope.clubNames = [];
        $scope.saySomething = '';
        for (var i = 0; i < $('.page2-table3-group').length; i++) {
            if ($('.page2-table3-group').eq(i).find('input').prop('checked')) {
                $scope.groupArr1.push($('.page2-table3-group').eq(i).attr('group_id'));
                //------------------长度为十问题解决方案-----------------
                // $scope.clubNames.push($('.page12-div-checkbox').eq(i).attr('club_name').substring(0,10) );
                $scope.clubNames.push($('.page2-table3-group').eq(i).attr('club_name'));
            }
        }
        if ($scope.groupArr1.length == 0) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择并勾选需要发送的群名称');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else {
            $scope.sendMsgFriToGroup = true;
        }
    };
    /*-------------关闭群发消息-------------*/
    $scope.sureMessageSendBoxGroup = function () {
        $scope.sendMsgFriToGroup = false;
        $scope.saySomethingahsdhas = ''
    };
    $scope.maxTime = 5;
    $scope.minTime = 1;
    /*-------------确认群发消息------------------*/
    $scope.cancelMessageSendBox = function () {
        for (var arr = [], arr1 = [], i = 0; i < $('.page3-div-checkbox-Groups-one').length; i++) {
            if ($('.page3-div-checkbox-Groups-one').eq(i).prop('checked')) {
                arr.push($('.page3-div-checkbox-Groups-one').eq(i).attr('data'));
                arr1.push($('.page3-div-checkbox-Groups-one').eq(i).attr('data2'));
            }
        }
        for (var arr3 = [], i = 0; i < $('.page17-wx-input').length; i++) {
            if ($('.page17-wx-input').eq(i).prop('checked')) {
                arr3.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
            }
        }
        $scope.sendObj1 = new FormData();
        if ($scope.saySomethingahsdhas == '') {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;群发的消息不能为空');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else {
            $scope.sendObj1.append('devices', JSON.stringify(arr3));
            $scope.sendObj1.append('device', JSON.stringify(arr));
            $scope.sendObj1.append('groupIdList', JSON.stringify(arr1));
            $scope.sendObj1.append('msg', $scope.saySomethingahsdhas);
            $scope.sendObj1.append('maxInterval', $scope.maxTime);
            $scope.sendObj1.append('minInterval', $scope.minTime);
            $http({
                method: 'POST',
                url: $rootScope.link + "/operate/sendClubMsgNew",
                data: $scope.sendObj1,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (response) {
                //上传成功的操作
                if (response.code == 200) {
                    $scope.saySomethingahsdhas = ''
                    $scope.sendMsgFriToGroup = false;
                    $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;群聊群发消息任务添加成功');
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
                        }
                    });
                } else {
                    $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;群聊群发消息任务添加失败');
                    setTimeout(function () {
                        $('.page1-alert-danger').hide(300)
                    }, 2000)
                }
            });
        }

    };

    var emjoyAllGet = [
        '[微笑]', '[撇嘴]', '[色]', '[发呆]', '[得意]', '[流泪]', '[害羞]', '[闭嘴]', '[睡]', '[大哭]',
        '[尴尬]', '[发怒]', '[调皮]', '[呲牙]', '[惊讶]', '[难过]', '[酷]', '[冷汗]', '[抓狂]', '[吐]',
        '[偷笑]', '[愉快]', '[白眼]', '[傲慢]', '[饥饿]', '[困]', '[惊恐]', '[流汗]', '[憨笑]', '[悠闲]',
        '[奋斗]', '[咒骂]', '[疑问]', '[嘘]', '[晕]', '[疯了]', '[衰]', '[骷髅]', '[敲打]', '[再见]', '[]',
        '[抠鼻]', '[鼓掌]', '[糗大了]', '[]', '[左哼哼]', '[右哼哼]', '[哈欠]', '[鄙视]', '[委屈]', '[快哭了]', '[阴险]',
        '[亲亲]', '[]', '[可怜]', '[菜刀]', '[啤酒]', '[咖啡]', '[饭]', '[猪头]', '[玫瑰]', '[凋谢]', '[嘴唇]',
        '[爱心]', '[心碎]', '[蛋糕]', '[闪电]', '[炸弹]', '[刀]', '[足球]', '[瓢虫]', '[便便]', '[拥抱]',
        '[强]', '[弱]', '[握手]', '[胜利]', '[抱拳]', '[勾引]', '[拳头]', '[差劲]', '[爱你]', '[NO]',
        '[OK]', '[跳跳]', '[发抖]', '[怄火]', '[磕头]', '[激动]', '[献吻]'
    ]
    /*----------------------确认群组加人------------------------------*/
    $scope.page2AddPeople = false
    $scope.getNewFriendInGroup = function () {
        for (var arr = [], i = 0; i < $('.page17-wx-input').length; i++) {
            if ($('.page17-wx-input').eq(i).prop('checked')) {
                arr.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
            }
        }
        for (var arr1 = [], i = 0; i < $('.page3-div-checkbox-Groups').length; i++) {
            if ($('.page3-div-checkbox-Groups').eq(i).prop('checked')) {
                arr1.push($('.page3-div-checkbox-Groups').eq(i));
            }
        }
        if (arr1.length > 0) {
            $scope.page2AddPeople = true
        } else {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择并勾选需要进行加好友操作的群组');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        }

    };
    $scope.NoaddPeople = function () {
        $scope.page2AddPeople = false
    }
    $scope.page2GroupAddNum = 1
    $scope.page2GroupTiM1 = 1
    $scope.page2GroupTiM2 = 10
    $scope.sureaddPeople = function () {
        var page2table3saying = $(".page12-emjoy12").html();
        for (var arr = [], i = 0; i < $('.page3-div-checkbox-Groups-one').length; i++) {
            if ($('.page3-div-checkbox-Groups-one').eq(i).prop('checked')) {
                arr.push($('.page3-div-checkbox-Groups-one').attr('data1'));
            }
        }
        $scope.sendObj1 = new FormData();
        if (page2table3saying == '') {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请输入相关话术用语');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else {
            var reger = /<img.*?(?:>|\/>)/g;
            var srcReg = /\/([^\/]*?\.gif)/i;
            var arr1 = page2table3saying.match(reger)
            if (arr1 == null) {
            } else {
                var tt = []
                for (var i = 0; i < arr1.length; i++) {
                    var src = arr1[i].match(srcReg);
                    // var src = srcReg.exec(arr1[i])
                    if (src[1]) {
                        tt.push(src[1].substring(0, src[1].indexOf('.')))
                    }
                    for (var tt1 = [], i1 = 0; i1 < tt.length; i1++) {
                        for (var i2 = 0; i2 < emjoyAllGet.length; i2++) {
                            if (tt[i1] == i2) {
                                tt1.push(emjoyAllGet[i2 - 1])
                            }
                        }
                    }
                }
                var result = page2table3saying.match(/<img.*?(?:>|\/>)/g);
                for (var i = 0; i < result.length; i++) {
                    page2table3saying = page2table3saying.replace(result[i], tt1[i])
                }
            }
            var oooo = page2table3saying.replace(/<\/div>/g, "");
            var oooo1 = oooo.replace(/<br>/g, "");
            var oooo2 = oooo1.replace(/<div>/g, "<br>");

            $scope.sendObj1.append('wechatId', $scope.WxMemberId);
            $scope.sendObj1.append('clubNames', JSON.stringify($scope.clubNames));
            $scope.sendObj1.append('msg', $scope.saySomething);
            $scope.sendObj1.append('maxInterval', $scope.page2GroupTiM1);
            $scope.sendObj1.append('minInterval', $scope.page2GroupTiM2);
            $http({
                method: 'POST',
                url: $rootScope.link + "/operate/sendClubMsg",
                data: $scope.sendObj1,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (response) {
                //上传成功的操作
                if (response.code == 200) {
                    $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;入群加好友任务添加成功');
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
                            $('.page1-alert-small-success').show(300).find('.page1-alert-small-success-con').html('&nbsp;&nbsp;分组名称修改成功');
                            setTimeout(function () {
                                $('.page1-alert-small-success').hide(300)
                            }, 2000)
                        }
                    });
                } else {
                    $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;入群加好友任务添加失败');
                    setTimeout(function () {
                        $('.page1-alert-danger').hide(300)
                    }, 2000)
                }
            });
        }

    }
    $("#btn").click(function () {
        $('.emoji_container').html('').css({'border': 'none', 'background-color': 'transparent', 'box-shadow': 'none'})
        $("#editor").emoji({
            button: "#btn",
            showTab: false,
            animation: 'none',
            icons: [{
                name: "QQ表情",
                path: "images/qq/",
                maxNum: 91,
                excludeNums: [41, 45, 54],
                file: ".gif",
            }]
        });
    });

}]);
