app.directive('groupCheckAllFour', ["$rootScope", "$http", function ($rootScope, $http) {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                    if (elem.prop('checked')) {
                        elem.parent().addClass('on');

                        //--------------------二级选中给三级添加选中状态---------------------
                        elem.parent().parent().next().find('p').addClass('on').find('input').prop('checked', function () {
                            return true
                        });
                        elem.parent().parent().next().next().find('p').addClass('on').find('input').prop('checked', function () {
                            return true
                        });


                        var eNumberfour = elem.parent().parent().parent().parent().find('input');
                        var flagfour = true;
                        for (var i = 0; i < eNumberfour.length; i++) {
                            if (eNumberfour.eq(i).prop('checked') == false) {
                                flagfour = false;
                            }
                        }
                        if (flagfour) {
                            elem.parent().parent().parent().parent().prev().prev().find('p').addClass('on').find('input').prop('checked', function () {
                                return true
                            });
                        } else {
                            elem.parent().parent().parent().parent().prev().prev().find('p').removeClass('on').find('input').prop('checked', function () {
                                return false
                            });
                        }
                    } else {
                        //-------二级选中取消-------
                        elem.parent().parent().parent().parent().prev().prev().find('p').removeClass('on').find('input').prop('checked', function () {
                            return false
                        });
                        elem.parent().removeClass('on');
                        elem.parent().parent().next().next().find('p').removeClass('on').find('input').prop('checked', function () {
                            return false
                        });
                        elem.parent().parent().next().find('p').removeClass('on').find('input').prop('checked', function () {
                            return false
                        });

                    }


                    scope.fuckArr = [];
                    for (var i = 0; i < $('.page17-wx-input').length; i++) {
                        if ($('.page17-wx-input').eq(i).prop('checked')) {
                            scope.fuckArr.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
                        }
                    }
                    $rootScope.table2AllChecks=scope.fuckArr.length;
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
                    } else if ($rootScope.page4getMoreData == 2) {
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
                                    $('.page3-div-checkbox-Groups').attr('checked', false).parent().removeClass('on')
                                    $('.page2-table3-page').pagination({
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
                            scope.fuckArr = []
                            $rootScope.page1InitDataLength2 = 0
                            $http.get($rootScope.link + '/operate/getClubByWechatNumber?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=1&pageSize=15').success(function (data) {
                                $rootScope.WxList1 = [];
                                $rootScope.page1InitDataLength2 = 0;
                                $('.page3-div-checkbox-Groups').attr('checked', false).parent().removeClass('on')
                                $('.page2-table3-page').pagination({
                                    totalData: $rootScope.page1InitDataLength2,
                                    pageCount: 1,
                                    showData: 15,
                                    coping: true,
                                    count: 2,
                                    callback: function (api) {
                                        var data = {
                                            page: api.getCurrent(),
                                        };
                                        $http.get($rootScope.link + '/operate/getClubByWechatNumber?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=' + 1 + '&pageSize=15').success(function (data) {
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
            );
        }
    }
}]);
