app.directive('groupCheckOneFour', ["$rootScope", "$http", function ($rootScope, $http) {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                if (elem.prop('checked')) {
                    elem.parent().addClass('on');
                } else {
                    elem.parent().removeClass('on');
                }

                //==========================进行判断如果三级同栏内都为选中状态则对应的二级选中==========================
                var eNumber = elem.parent().parent().parent().parent().find('input');
                var flag = true;
                for (var i = 0; i < eNumber.length; i++) {
                    if (eNumber.eq(i).prop('checked') == false) {
                        flag = false;
                    }
                }
                if (flag) {
                    elem.parent().parent().parent().parent().prev().find('p').addClass('on').find('input').prop('checked', function () {
                        return true
                    });
                } else {
                    elem.parent().parent().parent().parent().prev().find('p').removeClass('on').find('input').prop('checked', function () {
                        return false
                    });
                }
                //======================进行判断如果三级状态都为选中状态则对应的一级选中=========================
                var eNumbertwo = elem.parent().parent().parent().parent().parent().parent().find('input');
                var flagtwo = true;
                for (var ii = 0; ii < eNumbertwo.length; ii++) {
                    if (eNumbertwo.eq(ii).prop('checked') == false) {
                        flagtwo = false;
                    }
                }
                if (flagtwo) {
                    elem.parent().parent().parent().parent().parent().parent().prev().find('p').addClass('on').find('input').prop('checked', function () {
                        return true
                    });
                } else {
                    elem.parent().parent().parent().parent().parent().parent().prev().find('p').removeClass('on').find('input').prop('checked', function () {
                        return false
                    });
                }

                scope.fuckArr = [];
                for (var i = 0; i < $('.page17-wx-input').length; i++) {
                    if ($('.page17-wx-input').eq(i).prop('checked')) {
                        scope.fuckArr.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
                    }
                }
                $rootScope.table2AllChecks = scope.fuckArr.length;
                if ($rootScope.page4getMoreData == 1) {
                    $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=1&pageSize=15').success(function (data) {
                        if (data.code == 200) {
                            $rootScope.equipList4 = data.data.content;
                            $rootScope.page1InitDataLength1 = data.data.content.length
                            $('.lalaldemaxiya').css('display','block')
                            $('.page2-table1-page').pagination({
                                totalData: $rootScope.page1InitDataLength1,
                                showData: 15,
                                pageCount: 1,
                                coping: true,
                                count: 2,
                                callback: function (api) {
                                    var data = {
                                        page: api.getCurrent(),
                                    };
                                    $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=' + data.page + '&pageSize=15').success(function (data) {
                                        if (data.code == 200) {
                                            $rootScope.page1InitDataLength1 = data.data.content.length;
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
                }
                else if ($rootScope.page4getMoreData == 2) {
                    if (scope.fuckArr.length > 0) {
                        $http.get($rootScope.link + '/operate/getContact?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=1&pageSize=15').success(function (data) {
                            if (data.code == 200) {
                                $rootScope.WxList = data.data.content;
                                $rootScope.page1InitDataLength = data.data.totalElements;
                                $('.page3-div-checkbox-friends').attr('checked', false).parent().removeClass('on')
                                $('.page2-table2-page').pagination({
                                    totalData: $rootScope.page1InitDataLength,
                                    pageCount: 1,
                                    showData: 15,
                                    coping: true,
                                    count: 2,
                                    callback: function (api) {
                                        var data = {
                                            page: api.getCurrent(),
                                        };
                                        if (scope.fuckArr.length == 0) {
                                            $rootScope.WxList = []
                                            $rootScope.page1InitDataLength = 0;
                                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择相关设备查看对应好友');
                                            setTimeout(function () {
                                                $('.page1-alert-small-danger').hide(300)
                                            }, 2000)
                                        } else {
                                            $http.get($rootScope.link + '/operate/getContact?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=' + data.page + '&pageSize=15').success(function (data) {
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
                        scope.fuckArr = []
                        scope.page1InitDataLength = 0
                        $http.get($rootScope.link + '/operate/getContact?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=1&pageSize=15').success(function (data) {
                            $rootScope.WxList = [];
                            $rootScope.page1InitDataLength = 0;
                            $('.page3-div-checkbox-friends').attr('checked', false).parent().removeClass('on')
                            $('.page2-table2-page').pagination({
                                totalData: $rootScope.page1InitDataLength,
                                pageCount: 1,
                                showData: 15,
                                coping: true,
                                count: 2,
                                callback: function (api) {
                                    var data = {
                                        page: api.getCurrent(),
                                    };
                                    $http.get($rootScope.link + '/operate/getContact?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=' + 1 + '&pageSize=15').success(function (data) {
                                        $rootScope.WxList = [];
                                        $rootScope.page1InitDataLength = 0;
                                        $('.page3-div-checkbox-friends').attr('checked', false).parent().removeClass('on')
                                    })
                                }
                            })
                        })

                    }
                }
                else {
                    if (scope.fuckArr.length > 0) {
                        $('.page2-table3-page').css('display','block')
                        $http.get($rootScope.link + '/operate/getClubByWechatNumber?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=1&pageSize=15').success(function (data) {
                            if (data.code == 200) {
                                $rootScope.WxList1 = data.data.content;
                                $rootScope.page1InitDataLength2 = data.data.totalElements;
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
                                        if (scope.fuckArr.length == 0) {
                                            $rootScope.WxList1 = []
                                            $rootScope.page1InitDataLength2 = 0;
                                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择相关设备查看对应好友');
                                            setTimeout(function () {
                                                $('.page1-alert-small-danger').hide(300)
                                            }, 2000)
                                        } else {
                                            $http.get($rootScope.link + '/operate/getClubByWechatNumber?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=' + data.page + '&pageSize=15').success(function (data) {
                                                $rootScope.WxList1 = data.data.content;
                                                $rootScope.page1InitDataLength2 = data.data.totalElements;
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
                        scope.fuckArr = []
                        $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请勾选相关设备以便对其操作');
                        setTimeout(function () {
                            $('.page1-alert-small-danger').hide(300)
                        }, 2000)
                        $rootScope.page1InitDataLength2 = 0
                        $http.get($rootScope.link + '/operate/getClubByWechatNumber?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=1&pageSize=15').success(function (data) {
                            $rootScope.WxList1 = [];
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
                                    $http.get($rootScope.link + '/operate/getClubByWechatNumber?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=1&pageSize=15').success(function (data) {
                                        $rootScope.WxList1 = [];
                                        $rootScope.page1InitDataLength2 = 0;
                                        $('.page3-div-checkbox-Groups').attr('checked', false).parent().removeClass('on')
                                    })
                                }
                            })
                        })

                    }
                }


            });
        }
    }
}]);