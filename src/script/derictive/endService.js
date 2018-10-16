app.directive('endService',["$rootScope","$http",function ($rootScope, $http) {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                var tid = elem.attr('t_id');
                $http.get($rootScope.link + '/remote/close?tid=' + tid).success(function (data) {
                    if (data.code == 200) {
                        $('.page1-alert-small-success').show(300).find('.page1-alert-small-success-con').html('&nbsp;&nbsp;终止成功成功');
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
                        elem.prev().prev().attr('disabled', 'disabled').css('background', '#ccc');
                        elem.prev().attr('disabled', 'disabled').css('background', '#ccc');
                        elem.attr('disabled', 'disabled').css('background', '#ccc');
                        elem.parent().parent().prev().prev().text('执行完成');
                    }else {
                        $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;终止失败，请检查设备连接并重试');
                        setTimeout(function () {
                            $('.page1-alert-small-danger').hide(300)
                        }, 2000)
                    }
                });
            });
        }
    }
}]);
