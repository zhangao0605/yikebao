app.directive('getSave',["$rootScope","$http",function ($rootScope, $http) {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                var assId = elem.attr('mess_id');
                var assNumber = elem.parent().parent().find('.page4-wx-number').val();
                var assPassword = elem.parent().parent().find('.page4-wx-password').val() || '';
                var assNickname = elem.parent().parent().find('.page4-wx-nickname').val() || '';
                var assTag = elem.parent().parent().find('.page4-wx-tag').val() || '';
                var assWnumber = elem.attr('wn') || '';
                if (assNumber == '') {
                    $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请填写需要保存的帐号');
                    setTimeout(function () {
                        $('.page1-alert-small-danger').hide(300)
                    }, 2000)
                }
                else {
                    $http.get($rootScope.link + '/wechat/updateWechat?id=' + assId + '&number=' + assNumber + '&password=' + assPassword + '&nickname=' + assNickname + '&tag=' + assTag).success(function (data) {
                        if (data.code == 200) {
                            $('.page1-alert-small-success').show(300).find('.page1-alert-small-success-con').html('&nbsp;&nbsp;保存成功');
                            setTimeout(function () {
                                $('.page1-alert-small-success').hide(300)
                            }, 2000)
                            elem.hide();
                            elem.next().show();
                            elem.parent().parent().find('input').addClass('on').attr('readonly', 'readonly');
                        } else {
                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;保存失败');
                            setTimeout(function () {
                                $('.page1-alert-small-danger').hide(300)
                            }, 2000)
                        }
                    });
                }

            });
        }
    }
}]);
