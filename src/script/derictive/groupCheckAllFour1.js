app.directive('groupCheckAllFour1', ["$rootScope", "$http", function ($rootScope, $http) {
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
                    if ($rootScope.page5getMoreData == 1) {


                        $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=1&pageSize=15').success(function (data) {
                            if (data.code == 200) {
                                $rootScope.equipList4 = data.data.content;
                                scope.page1InitDataLength = data.data.content.length
                                $('.page2-table1-page').pagination({
                                    totalData: scope.page1InitDataLength,
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
                                                scope.page1InitDataLength = data.data.content.length;
                                                $rootScope.equipList4 = data.data.content;
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
                    } else if ($rootScope.page5getMoreData == 2) {
                        // $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=1&pageSize=15').success(function (data) {
                        $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=1&pageSize=15').success(function (data) {
                            if (data.code == 200) {
                                $rootScope.equipList4 = data.data.content;
                                scope.page1InitDataLength = data.data.content.length;
                                $('.page2-table1-page').pagination({
                                    totalData: scope.page1InitDataLength,
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
                                                scope.page1InitDataLength = data.data.content.length;
                                                $rootScope.equipList4 = data.data.content;
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
                    } else if ($rootScope.page5getMoreData == 10) {
                        $http.get($rootScope.link + '/wechat/getWechatsByDevice?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=1&pageSize=1000').success(function (data) {
                            if (data.code == 200) {
                                $rootScope.page3Data4AllData = data.data.content;
                            } else {
                                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                                setTimeout(function () {
                                    $('.page1-alert-small-danger').hide(300)
                                }, 2000)
                            }
                        });
                    }
                    else {

                    }
                }
            );
        }
    }
}]);
