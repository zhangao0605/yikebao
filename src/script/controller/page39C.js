app.controller('page39C', ["$rootScope", "$scope", "$http", "$timeout", function ($rootScope, $scope, $http, $timeout) {
    $rootScope.getAllFalse();
    $rootScope.initOver = true;
    $rootScope.activeThirtyNine = true;
    $rootScope.navPartThree = true;
    $rootScope.isScreenPage = false;
    $scope.outSideBox1 = true;
    $scope.outSideBox3 = false;
    $scope.outSideBox2 = false;
    $scope.maxTime = 10;
    $scope.addPeopleCount = 1;
    $scope.minTime = 1;
    $scope.upFile = ''
    $scope.clearll = 0;
    $scope.okState = [];
    $scope.okOver = [];
    $scope.noState = [];
    $scope.hhalk1=0;
    $scope.fvcMe = function (e) {
        $('.list_dd').stop();
        $(".list_dt").eq(e).parent().siblings("new-wx-group-list-li").removeAttr("id");
        if ($(".list_dt").eq(e).parent().attr("id") == "open") {
            $(".list_dt").eq(e).parent().removeAttr("id").find('i').css('background', ' url("images/offChecked.png")center no-repeat')
        } else {
            $(".list_dt").eq(e).parent().attr("id", "open").find('i').css('background', ' url("images/openChecked.png")center no-repeat')
        }
    }
    /*------------获取在线设备------------*/
    $http.get($rootScope.link + '/group/getGroupDataByStatus').success(function (data) {
        if (data.code == 200) {
            $scope.hhalk=[]
            for (var a = 0; a < data.data.length; a++) {
                if(data.data[a].deviceVos.length==0){
                }else {
                    for (var i=0;i<data.data[a].deviceVos.length;i++){
                        $scope.hhalk.push(data.data[a].deviceVos[i].device)
                    }
                }

            }
            $scope.hhalk1= $scope.hhalk.length
        } else {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        }
    });
    $scope.logout=function () {
        $http.get($rootScope.link + '/logout').success(function (data) {
            if(data.code==200){
                window.location.href='http://'+window.location.host+'/wgcs/#/login'
            }else {
                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;注销登录失败');
                setTimeout(function () {
                    $('.page1-alert-small-danger').hide(300)
                }, 2000)
            }
        })
    }
    var kk = ''
    $('.page2-emjoy1').html('')
    $http.get($rootScope.link + '/remote/getTask?pageNo=1&pageSize=1000').success(function (data) {
        if (data.code == 200) {
            $scope.dataAll = data.data.content
            for (var i = 0; i < $scope.dataAll.length; i++) {
                if ($scope.dataAll[i].state == 0) {
                    $('.page4-back-button').show()
                    kk = setInterval(function () {
                        $http.get($rootScope.link + '/remote/checkRemoteTaskStatus?state=0').success(function (data) {
                            if (data.data.length==0) {
                                $('.page1-alert-success1').show(300).find('.page1-alert-success-con').html('&nbsp;&nbsp;远程任务执行成功');
                                setTimeout(function () {
                                    $('.page1-alert-success').hide(300)
                                }, 2000)
                                setTimeout(function () {
                                    window.location.reload();
                                },2000)
                            }
                        })
                    }, 1000)
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
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        }
    });
    $(function () {
        setTimeout(function () {
            var oo = $('.clickMe')
            for (var i = 0; i < oo.length; i++) {
                if (oo[i].attributes[1].value == 0) {
                    $rootScope.page29Id = oo[i].attributes[4].value
                    $('.clickMe').eq(i).parent().addClass('on');
                    $('.page29-open').html('任务正在执行').css('background-color', '#DCDCDC').prop('disabled', 'disabled');
                    $('.clickMe').eq(i).parents().parents().parents().parents().siblings().find('.page2-table3-group').css('background-color', '#7A7A7A').find('input').prop('disabled', 'disabled');
                }
            }
        }, 500)
    })
    $("#btn1").click(function () {
        $('.emoji_container').html('').css({'border': 'none', 'background-color': 'transparent', 'box-shadow': 'none'})
        $("#editor1").emoji({
            button: "#btn1",
            showTab: false,
            animation: 'none',
            icons: [{
                name: "QQ表情",
                path: "images/qq/",
                maxNum: 91,
                excludeNums: [41, 45, 54],
                file: ".gif",
            }]
        });
    });
    /*-------------------------------table切换--------------------------------------------------*/
    $scope.tableSwitch = function (e) {
        if (e == 1) {

            $('.page2-title-button-but1').css({
                "background-color": "#2ABF9E",
                "color": "#fff"
            }).siblings().css({"background-color": "#fff", "color": "#2ABF9E"});
            $scope.outSideBox1 = true;
            $scope.outSideBox3 = false;
            $scope.outSideBox2 = false;
        } else if (e == 2) {
            $('.page2-title-button-but2').css({
                "background-color": "#2ABF9E",
                "color": "#fff"
            }).siblings().css({"background-color": "#fff", "color": "#2ABF9E"});
            $scope.outSideBox1 = false;
            $scope.outSideBox3 = false;
            $scope.outSideBox2 = true;
        } else {
            $('.page2-title-button-but3').css({
                "background-color": "#2ABF9E",
                "color": "#fff"
            }).siblings().css({"background-color": "#fff", "color": "#2ABF9E"});
            $scope.outSideBox1 = false;
            $scope.outSideBox3 = true;
            $scope.outSideBox2 = false;
        }
    }
    $('.upText').hide()
    /*-----------选择话术用语方式---------------------*/
    var selectVal = 1
    $('.clickSelect').change(function () {
        selectVal = $(this).val();
        if (selectVal == 1) {
            $('.page3-Addpeople-Say').show();
            $('.page2-emjoy1').html('');

            $('.clickAddText').hide()
            // $scope.saySomething = '您好！很高兴认识您！';
            $scope.upFile = ''
            $('.upText').hide()
            $('.upfiler').val('')
            $('.exselTextGray').html('0kb')
            $('.exselTextGra').html('无文件')
        } else {
            $('.page3-Addpeople-Say').hide();
            $('.clickAddText').show();
            $('.page2-emjoy1').html('');
        }
    })
    $scope.deleteContent=function () {

        $scope.upFile = ''
        $('.upfiler').val('')
        $('.exselTextGray').html('0kb')
        $('.exselTextGra').html('无文件')
    }
    $scope.MeType = 1
    // var selectVal2 = 1
    // $('.clickSelect1').change(function () {
    //     selectVal2 = $(this).val();
    //     if (selectVal2 == 1) {
    //         $scope.MeType = 1
    //     } else if (selectVal2 == 2) {
    //         $scope.MeType = 2
    //     }
    //     else {
    //         $scope.MeType = 0
    //     }
    // })
    /*--------------------点击执行通讯录加人---------------------*/
    var emjoyAllGet = [
        '[微笑]', '[撇嘴]', '[色]', '[发呆]', '[得意]', '[流泪]', '[害羞]', '[闭嘴]', '[睡]', '[大哭]',
        '[尴尬]', '[发怒]', '[调皮]', '[呲牙]', '[惊讶]', '[难过]', '[酷]', '[冷汗]', '[抓狂]', '[吐]',
        '[偷笑]', '[愉快]', '[白眼]', '[傲慢]', '[饥饿]', '[困]', '[惊恐]', '[流汗]', '[憨笑]', '[悠闲]',
        '[奋斗]', '[咒骂]', '[疑问]', '[嘘]', '[晕]', '[疯了]', '[衰]', '[骷髅]', '[敲打]', '[再见]','[]',
        '[抠鼻]', '[鼓掌]', '[糗大了]','[]', '[左哼哼]', '[右哼哼]', '[哈欠]', '[鄙视]', '[委屈]', '[快哭了]', '[阴险]',
        '[亲亲]', '[]','[可怜]', '[菜刀]', '[啤酒]', '[咖啡]', '[饭]', '[猪头]', '[玫瑰]', '[凋谢]', '[嘴唇]',
        '[爱心]', '[心碎]', '[蛋糕]', '[闪电]', '[炸弹]', '[刀]', '[足球]', '[瓢虫]', '[便便]', '[拥抱]',
        '[强]', '[弱]', '[握手]', '[胜利]', '[抱拳]', '[勾引]', '[拳头]', '[差劲]', '[爱你]', '[NO]',
        '[OK]', '[跳跳]', '[发抖]', '[怄火]', '[磕头]', '[激动]', '[献吻]'
    ]
    /*--------------开启远程任务----------------*/
    $scope.sendAll1 = function () {
        var page2table3saying = $(".page2-emjoy1").html();
        for (var i = 0, arr = []; i < $('.page17-wx-input').length; i++) {
            if ($('.page17-wx-input').eq(i).prop('checked')) {
                arr.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
            }
        }
        if (arr.length == 0) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择并勾选需要进行远程任务的设备');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else if ($rootScope.page29Id == '' || $rootScope.page29Id == undefined) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择开启的服务');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else if (arr.length * 15 < $scope.addPeopleCount) {
            alert()
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;由于微信规则限制最大加人数量为' + arr.length * 15 + '人');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else {
            var reger = /<img.*?(?:>|\/>)/g;
            var srcReg = /\/([^\/]*?\.gif)/i;
            var arr1 = page2table3saying.match(reger)
            if (arr1 == null) {
            } else {
                var tt = []
                for (var i = 0; i < arr1.length; i++) {
                    var src = arr1[i].match(srcReg);
                    // var src = srcReg.exec(arr1[i])
                    if (src[1]) {
                        tt.push(src[1].substring(0, src[1].indexOf('.')))
                    }
                    for (var tt1 = [], i1 = 0; i1 < tt.length; i1++) {
                        for (var i2 = 0; i2 < emjoyAllGet.length; i2++) {
                            if (tt[i1] == i2) {
                                tt1.push(emjoyAllGet[i2 - 1])
                            }
                        }
                    }
                }
                var result = page2table3saying.match(/<img.*?(?:>|\/>)/g);
                for (var i = 0; i < result.length; i++) {
                    page2table3saying = page2table3saying.replace(result[i], tt1[i])
                }
            }
            var oooo = page2table3saying.replace(/<\/div>/g, "");
            var oooo1 = oooo.replace(/<br>/g, "");
            var oooo2 = oooo1.replace(/<div>/g, "<br>");
            $scope.sendObj = new FormData();
            $scope.sendObj.append('file', $scope.upFile);
            $scope.sendObj.append('tid', $rootScope.page29Id);
            $scope.sendObj.append('devices', JSON.stringify(arr));
            $scope.sendObj.append('maxInterval', $scope.maxTime);
            $scope.sendObj.append('minInterval', $scope.minTime);
            $scope.sendObj.append('msg', oooo2);
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
                    $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;远程任务添加成功');
                    setTimeout(function () {
                        $('.page1-alert-waring').hide(300)
                    }, 2000)
                    window.location.reload();
                } else {
                    $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;远程任务添加失败，请重试并检查设备连接');
                    setTimeout(function () {
                        $('.page1-alert-danger').hide(300)
                    }, 2000)
                }
            });
        }
    };
    $scope.closeServer = function () {
        if ($rootScope.page29Id == '' || $rootScope.page29Id == undefined) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择并勾选需要关闭的服务');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
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
                    $('.page4-back-button').hide()
                    $('.page1-alert-small-success').show(300).find('.page1-alert-small-success-con').html('&nbsp;&nbsp;远程任务关闭成功');
                    setTimeout(function () {
                        $('.page1-alert-small-success').hide(300)
                    }, 2000)
                    window.location.reload();
                } else {
                    $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                    setTimeout(function () {
                        $('.page1-alert-small-danger').hide(300)
                    }, 2000)
                }
            })
        }

    }
    /*--------------------------------------通讯录加人完结----------------------------------------------------------*/
}
]);
