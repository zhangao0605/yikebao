app.directive('getAssSeven',["$http","$rootScope",function ($http, $rootScope) {
    return {
        link: function (scope, elem) {
            elem.on('change', function () {
                var fd = new FormData();

                var file = document.querySelector('#ass-input7').files[0];
                console.log(file)
                // console.log(document.querySelector('#ass-input7').files)
                fd.append('files', file);
                $http({
                    method: 'POST',
                    url: $rootScope.link + "/wechatPlus/resolveDirectFiles",
                    data: fd,
                    headers: {'Content-Type': undefined},
                    transformRequest: angular.identity
                }).success(function (response) {
                    //上传成功的操作
                    scope.WxMemberList1 = response.data;
                    for (var i = 0, arr = []; i < response.data.length; i++) {
                        var obj = {};
                        if(response.data[i].msg=="null"){
                            response.data[i].msg="无"
                        }
                        obj['name'] = response.data[i].name;

                        obj['number'] = response.data[i].number;
                        obj['msg'] = response.data[i].msg;
                        if(response.data[i].name==undefined){
                            response.data[i].name=response.data[i].number
                        }

                        arr.push(obj);
                    }

                    for (var ii = 0, arr1 = []; ii < response.data.length; ii++) {
                        var obj1 = [];
                        obj1= response.data[ii].number;
                        arr1.push(obj1);
                    }
                    for (var ii = 0, arr2 = []; ii < response.data.length; ii++) {
                        var obj2 = [];
                        obj2= response.data[ii].msg;
                        arr2.push(obj2);
                    }
                    scope.assList = arr;
                    scope.assList1 = arr1;
                    scope.assList2 = arr2;
                    // console.log(arr,"arr")
                    // console.log(arr1,"arr1")
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
