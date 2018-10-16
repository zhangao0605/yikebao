app.directive('groupCheckAllNine',["$rootScope","$http",function ($rootScope, $http) {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                if (elem.prop('checked')) {
                    elem.parent().addClass('on');

                    //--------------------二级选中给三级添加选中状态---------------------
                    elem.parent().parent().next().find('p').addClass('on').find('input').prop('checked', function () {
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
                        elem.parent().parent().parent().parent().prev().find('p').addClass('on').find('input').prop('checked', function () {
                            return true
                        });
                    } else {
                        elem.parent().parent().parent().parent().prev().find('p').removeClass('on').find('input').prop('checked', function () {
                            return false
                        });
                    }
                } else {
                    //-------二级选中取消-------
                    elem.parent().parent().parent().parent().prev().find('p').removeClass('on').find('input').prop('checked', function () {
                        return false
                    });
                    elem.parent().removeClass('on');
                    elem.parent().parent().next().find('p').removeClass('on').find('input').prop('checked', function () {
                        return false
                    });

                }
                scope.fuckArr = [];
                for (var i = 0; i < $('.new-wx-equip-input9').length; i++) {
                    if ($('.new-wx-equip-input9').eq(i).prop('checked')) {
                        scope.fuckArr.push($('.new-wx-equip-input9').eq(i).parent().next().attr('title'));
                    }
                }
                $http.get($rootScope.link + '/wechat/getWechatsByDevice?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=1&pageSize=6').success(function (data) {
                    if (data.code == 200) {
                        $rootScope.MemberList9 = data.data.content;
                        $('#pages9').Page({
                            totalPages: data.data.totalPages,//分页总数
                            liNums: 5,//分页的数字按钮数(建议取奇数)
                            activeClass: 'activP', //active 类样式定义
                            callBack: function (page) {
                                $http.get($rootScope.link + '/wechat/getWechatsByDevice?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=' + page + '&pageSize=6').success(function (data) {
                                    $rootScope.MemberList9 = data.data.content;
                                })
                            }
                        });
                    }else{
                        alert(data.msg)
                    }
                });
            });
        }
    }
}]);
