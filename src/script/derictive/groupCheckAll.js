app.directive('groupCheckAll', function () {
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
            });
        }
    }
});
