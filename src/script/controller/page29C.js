/*======================上传通讯录======================*/
app.controller('page29C', ["$rootScope", "$scope", "$http", "$location", "$anchorScroll", function ($rootScope, $scope, $http, $location, $anchorScroll) {
    $rootScope.getAllFalse();
    $rootScope.activeTwentyNine = true;
    $rootScope.navPartSeven = true;
    $rootScope.isScreenPage = true;
    // setInterval(function () {
    //     console.log($rootScope.farGo)
    // },100)
    // $scope.sendAllButton = true
    $scope.okOne = true;
    $scope.okOne1 = false;
    $scope.okOne2 = false;
    $scope.okState = [];
    $scope.okOver = [];
    $scope.noState = [];
    $scope.mmli = $rootScope.disAbled
    // console.log($scope.mmli)
    //------------------已就绪任务-------------
    $scope.turnOk = function () {
        $scope.okOne = true;
        $scope.okOne1 = false;
        $scope.okOne2 = false;
    }
    // var lpl=$('.clickMe')
    $http.get($rootScope.link + '/remote/getTask?pageNo=1&pageSize=1000').success(function (data) {
        if (data.code == 200) {
            $scope.dataAll = data.data.content
            for (var i = 0; i < $scope.dataAll.length; i++) {
                if ($scope.dataAll[i].state == 0) {
                    // console.log('111')
                    $('.page29-close').show()
                }
                if ($scope.dataAll[i].status == 1) {
                    // $scope.dataAll[i].state !=0   开启服务后的
                    $scope.okState.push($scope.dataAll[i])
                } else if ($scope.dataAll[i].status == 0) {
                    $scope.noState.push($scope.dataAll[i])
                } else if ($scope.dataAll[i].status == 10) {
                    $scope.okOver.push($scope.dataAll[i])
                }
            }
        } else {
            alert(data.msg);
        }
    });
    //--------------------初始化标记正在执行任务--------------------------------
    $(function () {
        setTimeout(function () {
            var oo = $('.clickMe')
            for (var i = 0; i < oo.length; i++) {
                // console.log(oo)
                // console.log(oo[i])
                if (oo[i].attributes[1].value == 0) {
                    $rootScope.page29Id = oo[i].attributes[4].value
                    $('.clickMe').eq(i).parent().addClass('on');
                    $('.page29-open').html('任务正在执行').css('background-color', '#DCDCDC').prop('disabled', 'disabled');
                    $('.clickMe').eq(i).parents().parents().parents().siblings().find('.page11-div-checkbox').css('background-color', '#7A7A7A').find('input').prop('disabled', 'disabled');
                }
            }
        }, 500)
    })
    //---------------点击开启任务----------------

    // $(document).on('click', '.Start11', function () {
    //     $scope.thisType = $(this).attr('data')
    //     $scope.thisTid = $(this).attr('value')
    //     $scope.thisName = $(this).attr('name')
    //     $scope.thisWnum = $(this).attr('data1')
    //     if ($(this).html() == '已添加') {
    //         $(this).prop('disabled', 'disabled');
    //
    //         alert('任务已添加过，不可重复添加')
    //     } else {
    //         for (var i = 0, arr = []; i < $('.new-wx-equip-input11').length; i++) {
    //             if ($('.new-wx-equip-input11').eq(i).prop('checked')) {
    //                 arr.push($('.new-wx-equip-input11').eq(i).parent().next().attr('title'));
    //             }
    //         }
    //         $scope.arrLength = arr.length;
    //         if (arr == 0) {
    //             alert('请勾选需要操作的设备！');
    //         } else {
    //             $(this).html("已添加");
    //             $http.get($rootScope.link + '/remote/openServer?tid=' + $scope.thisTid + '&devices=' + JSON.stringify(arr) + '&interval=5&msg=您好，很高兴认识您！&clear=0&strategy=' + $scope.thisType + '&count=' + $scope.arrLength + '&number=' + $scope.thisName + '&wnum=' + $scope.thisWnum + '').success(function (data) {
    //                 if (data.code == 200) {
    //                     alert("远程任务添加成功！")
    //                 } else {
    //                     alert(data.msg)
    //                 }
    //             })
    //         }
    //     }
    //
    // });


    // $('.Start11').click(function () {
    //
    // })

    // $(".you:eq(2)").find(".Start11").css("display","none").next().css({'display':'block','background':'#ff8d3b','margin':' 0 auto','margin-top':'9px'}).html("已添加");
    // $(".Start11").parents().parents().find(".Start11").attr('disabled', 'disabled').css('background', '#ccc');


    // elem.attr('disabled', 'disabled').css('background', '#ccc');
    // elem.next().attr('disabled', 'disabled').css('background', '#ccc');
    // elem.prev().removeAttr('disabled').css('background', '#2abf9e');
    // elem.parent().parent().prev().prev().text('等待执行');


    //--------------------点击关闭按钮----------------
    // $scope.Close=function () {
    //     $(".you:eq(2)").find(".Start11").css("display","block").next().css("display","none");
    //
    //     $(".Close11").parents().parents().find(".Start11").removeAttr('disabled').css({'background':'#2ecc71','margin':' 0 auto','margin-top':'0px'})
    //     $(".you:eq(2)").find(".Start11").css('margin','9px auto 0px')
    // }

    //------------------未就绪任务-------------
    $scope.turnNoOk = function () {
        $scope.okOne = false;
        $scope.okOne1 = true;
        $scope.okOne2 = false;
    }

    //------------------已完成任务-------------
    $scope.turnOkYes = function () {
        $scope.okOne = false;
        $scope.okOne1 = false;
        $scope.okOne2 = true;
    }


    //-------------------------------------------------------------------微信通讯录加人-----------------------------------------------------------------------------------

    $scope.maxTime = 10;
    $scope.addPeopleCount = 1;
    $scope.minTime = 1;
    $scope.upFile = ''
    $scope.clearll = 0;
    var selectVal = 1
    $('.clickSelect').change(function () {
        selectVal = $(this).val();
        if (selectVal == 1) {
            $('.page9-say-hello').show();
            $('.emjoyOpen-page6').show();
            $('.page9-say-hello').html('');

            $('.clickAddText').hide()
            // $scope.saySomething = '您好！很高兴认识您！';
            $scope.upFile = ''
        } else {
            $('.page9-say-hello').hide();
            $('.emjoyOpen-page6').hide();
            $('.clickAddText').show();
            // $scope.saySomething = ''
            $('.page9-say-hello').html('');
        }
    })
    $scope.MeType = 1
    var selectVal2 = 1
    $('.clickSelect1').change(function () {
        selectVal2 = $(this).val();
        if (selectVal2 == 1) {
            $scope.MeType = 1
        } else if (selectVal2 == 2) {
            $scope.MeType = 2
        }
        else {
            $scope.MeType = 0
        }

    })
    $scope.sendAll1 = function () {
        var saySomething = $(".FontAndEmjoy6").html();
        for (var i = 0, arr = []; i < $('.new-wx-equip-input11').length; i++) {
            if ($('.new-wx-equip-input11').eq(i).prop('checked')) {
                arr.push($('.new-wx-equip-input11').eq(i).parent().next().attr('title'));
            }
        }
        if (arr.length == 0) {
            alert('请勾选需要操作的设备！');
        } else if ($rootScope.page29Id == '' || $rootScope.page29Id == undefined) {
            alert('请选择开启的服务')
        } else if (arr.length * 15 < $scope.addPeopleCount) {
            alert('最大加人数量为' + arr.length * 15 + '')
        } else {
            var reger = /<img.*?(?:>|\/>)/g;
            var srcReg = /alt=[\'\"]?([^\'\"]*)[\'\"]?/i;
            var arr1 = saySomething.match(reger)
            if (arr1 == null) {

            } else {
                var tt = []
                for (var i = 0; i < arr1.length; i++) {
                    var src = arr1[i].match(srcReg);
                    if (src[1]) {
                        tt.push(src[1])
                    }
                }
                var result = saySomething.match(/<img.*?(?:>|\/>)/g);
                for (var i = 0; i < result.length; i++) {
                    saySomething = saySomething.replace(result[i], tt[i])
                }
            }
            $scope.sendObj = new FormData();
            $scope.sendObj.append('file', $scope.upFile);
            $scope.sendObj.append('tid', $rootScope.page29Id);
            $scope.sendObj.append('devices', JSON.stringify(arr));
            $scope.sendObj.append('maxInterval', $scope.maxTime);
            $scope.sendObj.append('minInterval', $scope.minTime);
            $scope.sendObj.append('msg', saySomething);
            $scope.sendObj.append('clear', 1);
            $scope.sendObj.append('strategy', $scope.MeType);
            $scope.sendObj.append('count', $scope.addPeopleCount);
            $scope.sendObj.append('number', $rootScope.page29Number);
            $http({
                method: 'POST',
                url: $rootScope.link + "/remote/openServer",
                data: $scope.sendObj,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (data) {
                if (data.code == 200) {
                    alert('任务添加成功!');
                    window.location.reload();
                } else {
                    alert(data.msg);
                }
            });
        }
    };
    //--------------------------------关闭服务--------------------------------
    $scope.closeServer = function () {
        if ($rootScope.page29Id == '' || $rootScope.page29Id == undefined) {
            alert('请选择关闭的服务')
        } else {
            $scope.sendObj1 = new FormData();
            $scope.sendObj1.append('tid', $rootScope.page29Id);
            $http({
                method: 'POST',
                url: $rootScope.link + "/remote/stopServer",
                data: $scope.sendObj1,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (response) {
                if (response.code == 200) {
                    $('.clickMe').parents().parents().parents().find('.page11-div-checkbox').removeClass('on');
                    $('.clickMe').parents().parents().parents().find('.page11-div-checkbox').css('background-color', 'white').find('input').prop('disabled', function () {
                        return false
                    });
                    $('.page29-close').hide()
                    alert('关闭任务成功')
                    window.location.reload();
                } else {
                    alert(response.msg)
                }
            })
        }

    }
}])
