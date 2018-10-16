app.directive('stopService',["$rootScope","$http",function ($rootScope, $http) {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                var tid = elem.attr('t_id');
                $http.get($rootScope.link + '/remote/stopServer?tid=' + tid).success(function (data) {
                    if (data.code == 200) {
                        alert('暂停成功！');
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
                        elem.attr('disabled', 'disabled').css('background', '#ccc');
                        elem.next().attr('disabled', 'disabled').css('background', '#ccc');
                        elem.prev().removeAttr('disabled').css('background', '#2abf9e');
                        elem.parent().parent().prev().prev().text('等待执行');
                    }
                });
            });
        }
    }
}]);
