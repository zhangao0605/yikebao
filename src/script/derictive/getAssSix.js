app.directive('getAssSix',["$http","$rootScope",function ($http, $rootScope) {
    return {
        link: function (scope, elem) {

            elem.on('change', function () {
                $('.jijijiji').html('重新上传')
                var fd = new FormData();
                var file = document.querySelector('#ass-input6').files[0];
                fd.append('files', file);
                $http({
                    method: 'POST',
                    url: $rootScope.link + "/wechatPlus/resolveFiles",
                    data: fd,
                    headers: {'Content-Type': undefined},
                    transformRequest: angular.identity
                }).success(function (response) {
                    //上传成功的操作
                    scope.WxMemberList = response.data;
                    for (var i = 0, arr = []; i < response.data.length; i++) {
                        var obj = {};
                        obj['name'] = response.data[i].name;

                        obj['number'] = response.data[i].number ;
                        if(response.data[i].name==undefined){
                            response.data[i].name=response.data[i].number
                            obj['name'] =response.data[i].number;
                        }
                        arr.push(obj);
                    }
                    scope.assList = arr;
                    scope.sendAllButton = true;
                }).error(function () {
                    $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;用户解析失败，请重试并检查模板格式');
                    setTimeout(function () {
                        $('.page1-alert-small-danger').hide(300)
                    }, 2000)
                });
            });
        }
    }
}]);
