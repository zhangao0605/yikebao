//=======================上传=========================
app.directive('getAss',["$http","$rootScope",function ($http, $rootScope) {
    return {
        link: function (scope, elem) {
            elem.on('change', function () {
                a = false;
                var fd = new FormData();
                var file = document.querySelector('#ass-input1').files[0];
                fd.append('file', file);
                $http({
                    method: 'POST',
                    url: $rootScope.link + "/account/addWeChatNumber",
                    data: fd,
                    headers: {'Content-Type': undefined},
                    transformRequest: angular.identity
                }).success(function (response) {
                    //上传成功的操作
                    if (response.code == 200) {
                        //$rootScope.pageZhe=false;
                        scope.MemberList = response.data;
                        $http.get($rootScope.link + '/group/getGroupData').success(function (data) {
                            $rootScope.groupNames = data.data;
                            $rootScope.groupNumbers = data.data.length;
                        });
                    }else {
                    }
                });
            });
        }
    }
}]);
