app.directive('startService',["$rootScope","$http",function ($rootScope, $http) {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                for (var i = 0, devices = []; i < $('.new-wx-equip-input20').length; i++) {
                    if ($('.new-wx-equip-input20').eq(i).prop('checked')) {
                        devices.push($('.new-wx-equip-input20').eq(i).parent().next().attr('title'));
                    }
                }
                var tid = elem.attr('t_id');
                var msg = elem.parent().parent().prev().find('.page20-b-list-two').find('input').val();
                var interval = elem.parent().parent().prev().find('.page20-b-list-three').eq(0).find('input').val();
                var count = elem.parent().parent().prev().find('.page20-b-list-three').eq(1).find('input').val();
                var number = elem.parent().parent().prev().find('.page20-b-list-three').eq(2).find('input').val();
                var clear = 0;
                if (elem.parent().parent().prev().find('.page20-b-list-one').find('input').prop('checked')) {
                    clear = 1;
                }
                var strategy = elem.parent().parent().prev().find('.page20-b-list-four').find('input:checked').val() || 3;
                if (devices.length == 0) {
                    $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择并勾选需要进行操作的设备');
                    setTimeout(function () {
                        $('.page1-alert-small-danger').hide(300)
                    }, 2000)

                } else if (msg == '') {
                    $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请填写打招呼用语');
                    setTimeout(function () {
                        $('.page1-alert-small-danger').hide(300)
                    }, 2000)
                } else if (interval == '') {
                    $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请填写时间间隔');
                    setTimeout(function () {
                        $('.page1-alert-small-danger').hide(300)
                    }, 2000)
                } else if (count == '') {
                    $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请填写每天加人的数量');
                    setTimeout(function () {
                        $('.page1-alert-small-danger').hide(300)
                    }, 2000)
                } else if (strategy == 3) {
                    $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择加人策略');
                    setTimeout(function () {
                        $('.page1-alert-small-danger').hide(300)
                    }, 2000)
                } else if (number == '') {
                    $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请填写任务执行时间间隔');
                    setTimeout(function () {
                        $('.page1-alert-small-danger').hide(300)
                    }, 2000)
                } else {
                    $http.get($rootScope.link + '/remote/openServer?tid=' + tid + '&devices=' + JSON.stringify(devices) + '&interval=' + interval + '&msg=' + msg + '&clear=' + clear + '&strategy=' + strategy + '&count=' + count + '&number=' + number).success(function (data) {
                        if (data.code == 0) {
                            $('.page1-alert-small-success').show(300).find('.page1-alert-small-success-con').html('&nbsp;&nbsp;开启成功');
                            setTimeout(function () {
                                $('.page1-alert-small-success').hide(300)
                            }, 2000)
                            //$http.get($rootScope.link+'/remote/getTask?pageNo=1&pageSize=2').success(function(data){
                            //    if(data.code==200){
                            //        scope.assList=data.data.content;
                            //        $('#pages20').Page({
                            //            totalPages: data.data.totalPages,//分页总数
                            //            liNums: 5,//分页的数字按钮数(建议取奇数)
                            //            activeClass: 'activP', //active 类样式定义
                            //            callBack : function(page){
                            //                $http.get($rootScope.link+'/remote/getTask?pageNo='+page+'&pageSize=2').success(function(data){
                            //                    scope.assList=data.data.content;
                            //                })
                            //            }
                            //        });
                            //    }
                            //});
                            elem.next().removeAttr('disabled').css('background', '#2abf9e');
                            elem.next().next().removeAttr('disabled').css('background', '#2abf9e');
                            elem.attr('disabled', 'disabled').css('background', '#ccc');
                            elem.parent().parent().prev().prev().text('正在执行');
                        } else if (data.code == 100) {
                            $('.page1-alert-small-success').show(300).find('.page1-alert-small-success-con').html('&nbsp;&nbsp;任务已完成');
                            setTimeout(function () {
                                $('.page1-alert-small-success').hide(300)
                            }, 2000)
                        } else if (data.code == 101) {
                            $('.page1-alert-small-success').show(300).find('.page1-alert-small-success-con').html('&nbsp;&nbsp;任务已就绪');
                            setTimeout(function () {
                                $('.page1-alert-small-success').hide(300)
                            }, 2000)
                        }
                    });
                }
            });
        }
    }
}]);
