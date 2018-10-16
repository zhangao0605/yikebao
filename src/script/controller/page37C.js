app.controller('page37C', ["$rootScope", "$scope", "$http", "$timeout", function ($rootScope, $scope, $http, $timeout) {
    $rootScope.getAllFalse();
    $rootScope.initOver = true;
    $rootScope.activeThirtySeven = true;
    $rootScope.navPartThree = true;
    $rootScope.isScreenPage = false;
    $scope.outSideBox = true;
    $scope.FriendCil = false
    $scope.outSideBox1 = false;
    $scope.outSideBox3 = false;
    $scope.outSideBox2 = false;
    $scope.outSideBox4 = false;
    $scope.outSideBox5 = false;

    function textInit(e) {
        e.preventDefault();
        var text;
        var clp = (e.originalEvent || e).clipboardData;
        if (clp === undefined || clp === null) {
            text = window.clipboardData.getData("text") || "";
            if (text !== "") {
                if (window.getSelection) {
                    var newNode = document.createElement("span");
                    newNode.innerHTML = text;
                    window.getSelection().getRangeAt(0).insertNode(newNode);
                } else {
                    document.selection.createRange().pasteHTML(text);
                }
            }
        } else {
            text = clp.getData('text/plain') || "";
            if (text !== "") {
                document.execCommand('insertText', false, text);
            }
        }
    }

    $(".page4-emjoy1").on("paste", function (e) {
        textInit(e)
    });
    $(".page100-emjoy100").on("paste", function (e) {
        textInit(e)
    });
    $(".page4-emjoy3").on("paste", function (e) {
        textInit(e)
    });
    $(".page4-emjoy24").on("paste", function (e) {
        textInit(e)
    });
    $(".page4-emjoy31").on("paste", function (e) {
        textInit(e)
    });
    $(".page4-emjoy10").on("paste", function (e) {
        textInit(e)
    });

    $scope.fvcMe = function (e) {
        $('.list_dd').stop();
        $(".list_dt").eq(e).parent().siblings("new-wx-group-list-li").removeAttr("id");
        if ($(".list_dt").eq(e).parent().attr("id") == "open") {
            $(".list_dt").eq(e).parent().removeAttr("id").find('i').css('background', ' url("images/offChecked.png")center no-repeat')
        } else {
            $(".list_dt").eq(e).parent().attr("id", "open").find('i').css('background', ' url("images/openChecked.png")center no-repeat')
        }
    }
    /*-----选中设备总数-----*/
    /*------------获取在线设备------------*/
    $http.get($rootScope.link + '/group/getGroupDataByStatus').success(function (data) {
        if (data.code == 200) {
            $scope.hhalk = []
            for (var a = 0; a < data.data.length; a++) {
                if (data.data[a].deviceVos.length == 0) {
                } else {
                    for (var i = 0; i < data.data[a].deviceVos.length; i++) {
                        $scope.hhalk.push(data.data[a].deviceVos[i].device)
                    }
                }

            }
            $scope.hhalk1 = $scope.hhalk.length
        } else {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        }
    });
    $rootScope.table2AllChecks = 0;
    $rootScope.page4getMoreData = 'no'
    $scope.logout = function () {
        $http.get($rootScope.link + '/logout').success(function (data) {
            if (data.code == 200) {
                window.location.href = 'http://' + window.location.host + '/wgcs/#/login'
            } else {
                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;注销登录失败');
                setTimeout(function () {
                    $('.page1-alert-small-danger').hide(300)
                }, 2000)
            }
        })
    }
    $("#btn6").click(function () {
        $('.emoji_container').html('').css({'border': 'none', 'background-color': 'transparent', 'box-shadow': 'none'})
        $("#editor6").emoji({
            button: "#btn6",
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
    $("#btn7").click(function () {
        $('.emoji_container').html('').css({'border': 'none', 'background-color': 'transparent', 'box-shadow': 'none'})
        $("#editor7").emoji({
            button: "#btn7",
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
    $("#btn8").click(function () {
        $('.emoji_container').html('').css({'border': 'none', 'background-color': 'transparent', 'box-shadow': 'none'})
        $("#editor8").emoji({
            button: "#btn8",
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
    $("#btn10").click(function () {
        $('.emoji_container').html('').css({'border': 'none', 'background-color': 'transparent', 'box-shadow': 'none'})
        $("#editor10").emoji({
            button: "#btn10",
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
    $("#btn71").click(function () {
        $('.emoji_container').html('').css({'border': 'none', 'background-color': 'transparent', 'box-shadow': 'none'})
        $("#editor71").emoji({
            button: "#btn71",
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
    $("#btn81").click(function () {
        $('.emoji_container').html('').css({'border': 'none', 'background-color': 'transparent', 'box-shadow': 'none'})
        $("#editor81").emoji({
            button: "#btn81",
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
    $('.page2-title-button-but1').css({
        "background-color": "#2ABF9E",
        "color": "#fff"
    }).siblings().css({"background-color": "#fff", "color": "#2ABF9E"});
    $scope.tableSwitch = function (e) {
        if (e == 1) {
            $('.page3-table1-click-table2-Table3-checked').addClass('on');
            $('.page3-table1-click-table2-Table3-Nochecked').removeClass('on');
            $scope.outSideBox3 = false;
            $scope.outSideBox2 = false;
            $scope.outSideBox4 = false;
            $scope.outSideBox = true;
            $scope.outSideBox5 = false;
            $scope.outSideBox6 = false;
            $scope.outSideBox7 = false;
            $scope.outSideBox8 = false;
            $scope.outSideBox9 = false;
            $scope.outSideBox10 = false;
            $('.page2-title-button-but1').css({
                "background-color": "#2ABF9E",
                "color": "#fff"
            }).siblings().css({"background-color": "#fff", "color": "#2ABF9E"});
        } else if (e == 2) {
            $('.page3-table1-click-table2-Table3-checked').addClass('on');
            $('.page3-table1-click-table2-Table3-Nochecked').removeClass('on');
            $scope.outSideBox3 = true;
            $scope.outSideBox2 = true;
            $scope.outSideBox4 = false;
            $scope.outSideBox = false;
            $scope.outSideBox5 = false;
            $scope.outSideBox6 = false;
            $scope.outSideBox7 = false;
            $scope.outSideBox8 = false;
            $scope.outSideBox9 = false;
            $scope.outSideBox10 = false;
            $('.page2-title-button-but2').css({
                "background-color": "#2ABF9E",
                "color": "#fff"
            }).siblings().css({"background-color": "#fff", "color": "#2ABF9E"});
        } else if (e == 3) {
            $scope.outSideBox3 = false;
            $scope.outSideBox2 = false;
            $scope.outSideBox4 = false;
            $scope.outSideBox = false;
            $scope.outSideBox5 = true;
            $scope.outSideBox6 = false;
            $scope.outSideBox7 = false;
            $scope.outSideBox8 = false;
            $scope.outSideBox9 = false;
            $scope.outSideBox10 = false;
            $('.page3-table1-click-table2-Table3-checked').addClass('on');
            $('.page3-table1-click-table2-Table3-Nochecked').removeClass('on');
            $('.page2-title-button-but3').css({
                "background-color": "#2ABF9E",
                "color": "#fff"
            }).siblings().css({"background-color": "#fff", "color": "#2ABF9E"});
        } else if (e == 4) {
            $scope.WxListbiubiu = []
            $timeout(function () {
                $http.get($rootScope.link + '/device/getAllDeviceByStatus?pageNo=1&pageSize=10000').success(function (data) {
                    if (data.code == 200) {
                        $scope.allPhon = data.data.content
                        // console.log(data.data.content)
                    } else {
                        $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;在线设备数据加载失败，请重试并检查设备连接');
                        setTimeout(function () {
                            $('.page1-alert-small-danger').hide(300)
                        }, 2000)
                    }
                });
            }, 0);
            $scope.outSideBox3 = false;
            $scope.outSideBox2 = false;
            $scope.outSideBox4 = false;
            $scope.outSideBox = false;
            $scope.outSideBox5 = false;
            $scope.outSideBox6 = true;
            $scope.outSideBox7 = false;
            $scope.outSideBox8 = false;
            $scope.outSideBox9 = false;
            $scope.outSideBox10 = false;
            $('.page3-table1-click-table2-Table3-checked').addClass('on');
            $('.page3-table1-click-table2-Table3-Nochecked').removeClass('on');
            $('.page2-title-button-but4').css({
                "background-color": "#2ABF9E",
                "color": "#fff"
            }).siblings().css({"background-color": "#fff", "color": "#2ABF9E"});
        } else if (e == 5) {
            $scope.outSideBox3 = false;
            $scope.outSideBox2 = false;
            $scope.outSideBox4 = false;
            $scope.outSideBox = false;
            $scope.outSideBox5 = false;
            $scope.outSideBox6 = false;
            $scope.outSideBox7 = true;
            $scope.outSideBox8 = false;
            $scope.outSideBox9 = false;
            $scope.outSideBox10 = false;
            $('.page3-table1-click-table2-Table3-checked').addClass('on');
            $('.page3-table1-click-table2-Table3-Nochecked').removeClass('on');
            $('.page2-title-button-but5').css({
                "background-color": "#2ABF9E",
                "color": "#fff"
            }).siblings().css({"background-color": "#fff", "color": "#2ABF9E"});
        } else if (e == 6) {
            $scope.outSideBox3 = false;
            $scope.outSideBox2 = false;
            $scope.outSideBox4 = false;
            $scope.outSideBox = false;
            $scope.outSideBox5 = false;
            $scope.outSideBox6 = false;
            $scope.outSideBox7 = false;
            $scope.outSideBox8 = false;
            $scope.outSideBox9 = false;
            $scope.outSideBox10 = true;
            $('.page3-table1-click-table2-Table3-checked').addClass('on');
            $('.page3-table1-click-table2-Table3-Nochecked').removeClass('on');
            $('.page2-title-button-but6').css({
                "background-color": "#2ABF9E",
                "color": "#fff"
            }).siblings().css({"background-color": "#fff", "color": "#2ABF9E"});
        } else if (e == 7) {
            $scope.outSideBox3 = false;
            $scope.outSideBox2 = false;
            $scope.outSideBox4 = false;
            $scope.outSideBox = false;
            $scope.outSideBox5 = false;
            $scope.outSideBox6 = false;
            $scope.outSideBox7 = false;
            $scope.outSideBox8 = true;
            $scope.outSideBox9 = false;
            $scope.outSideBox10 = false;
            $('.page3-table1-click-table2-Table3-checked').addClass('on');
            $('.page3-table1-click-table2-Table3-Nochecked').removeClass('on');
            $('.page2-title-button-but7').css({
                "background-color": "#2ABF9E",
                "color": "#fff"
            }).siblings().css({"background-color": "#fff", "color": "#2ABF9E"});
        } else {
            $('.page3-table1-click-table2-Table3-checked').addClass('on');
            $('.page3-table1-click-table2-Table3-Nochecked').removeClass('on');
            $('.page2-title-button-but8').css({
                "background-color": "#2ABF9E",
                "color": "#fff"
            }).siblings().css({"background-color": "#fff", "color": "#2ABF9E"});
            $scope.outSideBox3 = false;
            $scope.outSideBox2 = false;
            $scope.outSideBox4 = false;
            $scope.outSideBox = false;
            $scope.outSideBox5 = false;
            $scope.outSideBox6 = false;
            $scope.outSideBox7 = false;
            $scope.outSideBox8 = false;
            $scope.outSideBox9 = true;
            $scope.outSideBox10 = false;
        }
    }

    /*--------------------------------------开始--------------------------------------------------*/
    $(function () {
        $.Tupload.init({
            title: "",
            fileNum: 9, // 上传文件数量
            divId: "T_upload", // div  id
            accept: "image/jpeg,image/x-png", // 上传文件的类型
            onSuccess: function (data, i) {
            },
            onDelete: function (i) {
            }
        });
        $.Tupload1.init1({
            title1: "",
            fileNum1: 9, // 上传文件数量
            divId1: "T_upload1", // div  id
            accept1: "image/jpeg,image/x-png", // 上传文件的类型
            onSuccess1: function (data, i) {
            },
            onDelete1: function (i) {
            }
        });
        $.Tupload2.init2({
            title2: "",
            fileNum2: 1, // 上传文件数量
            divId2: "T_upload2", // div  id
            accept2: "image/jpeg,image/x-png", // 上传文件的类型
            onSuccess2: function (data, i) {
            },
            onDelete2: function (i) {
            }
        });
        $.Tupload3.init3({
            title3: "",
            fileNum3: 1, // 上传文件数量
            divId3: "T_upload3", // div  id
            accept3: "image/jpeg,image/x-png", // 上传文件的类型
            onSuccess3: function (data, i) {
            },
            onDelete3: function (i) {
            }
        });
    })
    var emjoyAllGet = [
        '[微笑]', '[撇嘴]', '[色]', '[发呆]', '[得意]', '[流泪]', '[害羞]', '[闭嘴]', '[睡]', '[大哭]',
        '[尴尬]', '[发怒]', '[调皮]', '[呲牙]', '[惊讶]', '[难过]', '[酷]', '[冷汗]', '[抓狂]', '[吐]',
        '[偷笑]', '[愉快]', '[白眼]', '[傲慢]', '[饥饿]', '[困]', '[惊恐]', '[流汗]', '[憨笑]', '[悠闲]',
        '[奋斗]', '[咒骂]', '[疑问]', '[嘘]', '[晕]', '[疯了]', '[衰]', '[骷髅]', '[敲打]', '[再见]', '[]',
        '[抠鼻]', '[鼓掌]', '[糗大了]', '[]', '[左哼哼]', '[右哼哼]', '[哈欠]', '[鄙视]', '[委屈]', '[快哭了]', '[阴险]',
        '[亲亲]', '[]', '[可怜]', '[菜刀]', '[啤酒]', '[咖啡]', '[饭]', '[猪头]', '[玫瑰]', '[凋谢]', '[嘴唇]',
        '[爱心]', '[心碎]', '[蛋糕]', '[闪电]', '[炸弹]', '[刀]', '[足球]', '[瓢虫]', '[便便]', '[拥抱]',
        '[强]', '[弱]', '[握手]', '[胜利]', '[抱拳]', '[勾引]', '[拳头]', '[差劲]', '[爱你]', '[NO]',
        '[OK]', '[跳跳]', '[发抖]', '[怄火]', '[磕头]', '[激动]', '[献吻]'
    ]
    $scope.page4Table1sendObj = new FormData();
    $scope.page4Table1picArr = [];
    $scope.page4Table1maxTime = 10;
    $scope.page4Table1minTime = 1;
    $scope.page4Table1pic = '';
    // $scope.page4Table1sendNum = 10;
    // $scope.page4Table1isAll = 0;
    // $('.page16-choose').change(function () {
    //     selectVal = $(this).val();
    //     if (selectVal == 1) {
    //         $(".writeNu").hide()
    //         $scope.isAll = 1
    //
    //     } else if (selectVal == 2) {
    //         $scope.isAll = 0
    //         $(".writeNu").show()
    //
    //     }
    //     else if (selectVal = 0) {
    //         $scope.isAll = 0
    //         $(".writeNu").hide()
    //
    //     }
    //     else {
    //         $scope.isAll = 0
    //         $(".writeNu").hide()
    //
    //     }
    // })
    $(".page4-emjoy1").html('');
    $(".page4-emjoy2").html('');
    $(".page4-emjoy3").html('');
    $(".page4-emjoy31").html('');
    $(".page4-emjoy10").html('');
    $(".page4-emjoy21").html('');
    $scope.page4table1SendAll = function () {
        if (arrFile4[0] == undefined) {
            arrFile4[0] = ''
        } else {

        }

        var page4Table1saySomething = $(".page4-emjoy1").html();
        for (var i = 0, arr = []; i < $('.page17-wx-input').length; i++) {
            if ($('.page17-wx-input').eq(i).prop('checked')) {
                arr.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
            }
        }
        if (arr.length == 0) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择并勾选需要进行群发消息的设备');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)

        } else if (page4Table1saySomething == '') {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请输入打招呼用语');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        }
        else {
            var reger = /<img.*?(?:>|\/>)/g;
            var srcReg = /\/([^\/]*?\.gif)/i;
            var arr1 = page4Table1saySomething.match(reger)
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
                var result = page4Table1saySomething.match(/<img.*?(?:>|\/>)/g);
                for (var i = 0; i < result.length; i++) {
                    page4Table1saySomething = page4Table1saySomething.replace(result[i], tt1[i])
                }
            }
            var oooo = page4Table1saySomething.replace(/<\/div>/g, "");
            var oooo1 = oooo.replace(/<br>/g, "");
            var oooo2 = oooo1.replace(/<div>/g, "<br>");

            var sendObj = new FormData();
            sendObj.append('msg', oooo2);
            // sendObj.append('isAll', $scope.isAll);
            // sendObj.append('sendNum', $scope.sendNum);
            sendObj.append('devices', JSON.stringify(arr));
            sendObj.append('pic', arrFile4[0]);
            sendObj.append('maxInterval', $scope.page4Table1maxTime);
            sendObj.append('minInterval', $scope.page4Table1minTime);
            $http({
                method: 'POST',
                url: $rootScope.link + "/operate/sendMsg",
                data: sendObj,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (response) {
                //上传成功的操作
                if (response.code == 200) {
                    $.Tupload3.init3({
                        title3: "",
                        fileNum3: 1, // 上传文件数量
                        divId3: "T_upload3", // div  id
                        accept3: "image/jpeg,image/x-png", // 上传文件的类型
                        onSuccess3: function (data, i) {
                        },
                        onDelete3: function (i) {
                        }
                    });
                    arrFile4 = [];
                    $(".page4-emjoy1").html('')
                    $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;群发消息任务添加成功');
                    setTimeout(function () {
                        $('.page1-alert-waring').hide(300)
                    }, 2000)
                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
                        if (data.code == 200) {
                            $scope.page4Table1pic = '';
                            $('.page4-up-file-input-noshow').parent().css({
                                'background': 'url(images/add-pic.png) center no-repeat',
                            });
                            $rootScope.taskList = data.data;
                            $rootScope.taskAll = true;
                            $rootScope.taskDoing = false;
                            $rootScope.taskWait = false;
                            $rootScope.taskDown = false;
                            $rootScope.newBell = true;
                        } else {
                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                            setTimeout(function () {
                                $('.page1-alert-small-danger').hide(300)
                            }, 2000)
                        }
                    });
                } else {
                    $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;群发消息任务添加失败，请重试并检查设备连接');
                    setTimeout(function () {
                        $('.page1-alert-danger').hide(300)
                    }, 2000)
                }
            });
        }
    };
    /*--------------------------------------群发消息完结----------------------------------------------------------*/
    $scope.page3Table4Show1 = function () {
        $scope.outSideBox2 = true;
        $scope.outSideBox4 = false;
    }
    $scope.page3Table4Show2 = function () {
        $scope.outSideBox2 = false;
        $scope.outSideBox4 = true;
    }
    $scope.page4Table2timeInterval = 5

    $scope.daluan = 0;
    $(".page4-emjoy2").html('');
    $(".page4-emjoy3").html('');
    $scope.page4table2SendAll = function () {
        var page4Table2saySomething = $(".page4-emjoy2").html();
        var page4Table2saySomething1 = $(".page4-emjoy3").html();
        var sendObj = new FormData();
        var lplpiu = [];
        for (var i = 0; i < arrFile.length; i++) {
            lplpiu.push(i + 1);
            sendObj.append('file' + (i + 1) + '', arrFile[i]);
        }
        var saySomething = $(".FontAndEmjoy13").html();

        for (var i = 0, arr = []; i < $('.page17-wx-input').length; i++) {
            if ($('.page17-wx-input').eq(i).prop('checked')) {
                arr.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
            }
        }
        if (page4Table2saySomething == '') {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请编辑朋友圈内容');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else if (arr.length == 0) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择并勾选需要进行发朋友圈的设备');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)

        } else {
            var reger = /<img.*?(?:>|\/>)/g;
            var srcReg = /\/([^\/]*?\.gif)/i;
            var arr1 = page4Table2saySomething.match(reger)
            var arr2 = page4Table2saySomething1.match(reger)
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
                var result = page4Table2saySomething.match(/<img.*?(?:>|\/>)/g);
                for (var i = 0; i < result.length; i++) {
                    page4Table2saySomething = page4Table2saySomething.replace(result[i], tt1[i])
                }
            }
            if (page4Table2saySomething1 == '') {

            } else {
                if (arr2 == null) {
                } else {
                    var tt = []
                    for (var i = 0; i < arr2.length; i++) {
                        var src1 = arr2[i].match(srcReg);
                        // var src = srcReg.exec(arr1[i])
                        if (src1[1]) {
                            tt.push(src1[1].substring(0, src1[1].indexOf('.')))
                        }
                        for (var tt11 = [], i1 = 0; i1 < tt.length; i1++) {
                            for (var i2 = 0; i2 < emjoyAllGet.length; i2++) {
                                if (tt[i1] == i2) {
                                    tt11.push(emjoyAllGet[i2 - 1])
                                }
                            }
                        }
                    }
                    var result1 = page4Table2saySomething1.match(/<img.*?(?:>|\/>)/g);
                    for (var i = 0; i < result1.length; i++) {
                        page4Table2saySomething1 = page4Table2saySomething1.replace(result1[i], tt1[i])
                    }
                }
            }

            var oooo = page4Table2saySomething.replace(/<\/div>/g, "");
            var oooo1 = oooo.replace(/<br>/g, "");
            var oooo2 = oooo1.replace(/<div>/g, "<br>");
            var oooo1o = page4Table2saySomething1.replace(/<\/div>/g, "");
            var oooo11 = oooo1o.replace(/<br>/g, "");
            var oooo21 = oooo11.replace(/<div>/g, "<br>");
            sendObj.append('content', oooo2);
            sendObj.append('devices', JSON.stringify(arr));
            sendObj.append('interval', $scope.page4Table2timeInterval);
            sendObj.append('msg', oooo21);
            sendObj.append('number', JSON.stringify(lplpiu));
            // sendObj.append('number', JSON.stringify([]));
            sendObj.append('random', $scope.daluan);
            sendObj.append('mustNumber', JSON.stringify(lplpiu));
            sendObj.append('randomNumber', JSON.stringify([]));
            $http({
                method: 'POST',
                url: $rootScope.link + "/operate/sendMoments",
                // url:  "http://192.168.1.104:8080/wgcs/operate/sendMoments",
                data: sendObj,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (response) {
                //上传成功的操作
                if (response.code == 200) {
                    $.Tupload.init({
                        title: "",
                        fileNum: 9, // 上传文件数量
                        divId: "T_upload", // div  id
                        accept: "image/jpeg,image/x-png", // 上传文件的类型
                        onSuccess: function (data, i) {
                        },
                        onDelete: function (i) {
                        }
                    });
                    arrFile = []
                    $(".page4-emjoy2").html('');
                    $(".page4-emjoy3").html('');
                    $scope.daluan = 0;
                    $('.asjd').parent().removeClass('on')
                    $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;发朋友圈任务添加成功');
                    setTimeout(function () {
                        $('.page1-alert-waring').hide(300)
                    }, 2000)
                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
                        if (data.code == 200) {
                            $rootScope.taskList = data.data;
                            $rootScope.taskAll = true;
                            $rootScope.taskDoing = false;
                            $rootScope.taskWait = false;
                            $rootScope.taskDown = false;
                            $rootScope.newBell = true;
                        } else {
                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                            setTimeout(function () {
                                $('.page1-alert-small-danger').hide(300)
                            }, 2000)
                        }
                    });
                } else {
                    $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;发朋友圈任务添加失败，请重试并检查设备连接');
                    setTimeout(function () {
                        $('.page1-alert-danger').hide(300)
                    }, 2000)
                }
            });
        }

    };
    /*--------------------------------------发朋友圈A完结----------------------------------------------------------*/
    $scope.selected = [];
    var updateSelected = function (action, id) {
        if (action == 'add' && $scope.selected.indexOf(id) == -1) {
            $scope.selected.push(id);
        }
        if (action == 'remove' && $scope.selected.indexOf(id) != -1) {
            var idx = $scope.selected.indexOf(id);
            $scope.selected.splice(idx, 1);
        }
    };
    $scope.checkOne = function ($event, id) {
        var action = ($event.target.checked ? 'add' : 'remove');
        updateSelected(action, id);
        $scope.mustChoose1 = $scope.selected.sort();
    };
    $scope.isChecked = function (id) {
        return $scope.selected.indexOf(id) >= 0;
    };
    $scope.getPicBox = function () {
        for (var picArr2 = [], i = 0; i < $scope.picArr1.length; i++) {
            if ($scope.picArr1[i] == '') {
                picArr2.push('无图片')
            } else {
                picArr2.push(i)
            }
        }
        $scope.picArr3 = picArr2
        setTimeout(function () {
            for (var i = 0; i < $('.page4-mmp').length; i++) {
                if ($('.page4-mmp')[i].innerText == "　无图片") {
                    console.log($('.page4-mmp').eq(i))
                    $('.page4-mmp').eq(i).find('input').attr("disabled", true)
                } else {
                    $('.page4-mmp').eq(i).find('input').attr("disabled", false)
                }
            }
        }, 100)
        $scope.picNumberBox = true;
    }
    $scope.picNumberBox = false;
    $scope.cancelPicBox = function () {
        $scope.picNumberBox = false;
        $scope.mustChoose1 = [];
        $scope.unMChoose1 = [];
    };
    $scope.operate = [];
    $scope.mustChoose1 = [];
    $scope.unMChoose1 = [];
    $scope.unMChoose = [];
    $scope.getSureButton = function () {
        $scope.mustChoose1 = $scope.selected.sort();
        for (var i = 1; i < $scope.picArr1.length; i++) {
            for (var i1 = -1; i1 < $scope.mustChoose1.length; i1++) {
                if (i == $scope.mustChoose1[i1]) {
                } else {
                    if (i > 0 && i <= $scope.picArr1.length) {
                        $scope.unMChoose1.push(i)
                    }
                }
            }
        }
        $scope.picNumberBox = false;
        $scope.operate = $scope.selected.sort();
        Array.prototype.unique3 = function () {
            var res = [];
            var json = {};
            for (var i = 0; i < this.length; i++) {
                if (!json[this[i]]) {
                    res.push(this[i]);
                    json[this[i]] = 1;
                }
            }
            return res;
        }
        $scope.mustChoose = $scope.mustChoose1.unique3()
        $scope.unMChoose = $scope.unMChoose1.unique3()
        for (var i2 = 0; i2 < $scope.mustChoose.length; i2++) {
            for (var i3 = 0; i3 < $scope.unMChoose.length; i3++) {
                if ($scope.unMChoose[i3] == $scope.mustChoose[i2]) {
                    $scope.unMChoose.splice(i3, 1)
                }
            }
        }
    };

    $.Tupload1.init1({
        title1: "",
        fileNum1: 9, // 上传文件数量
        divId1: "T_upload1", // div  id
        accept1: "image/jpeg,image/x-png", // 上传文件的类型
        onSuccess1: function (data, i) {
        },
        onDelete1: function (i) {
        }
    });
    arrFile1 = []
    $scope.picArr = arrFile
    $scope.picArr1 = arrFile1
    $scope.isClear = 0;
    $scope.clear = function ($event) {
        if ($event.target.checked) {
            $scope.isClear = 1;
        } else {
            $scope.isClear = 0;
        }
    };
    $(".page4-emjoy24").html('');
    $(".page4-emjoy31").html('');
    $scope.page4table2SendAll1 = function () {
        var page4Table2saySomething = $(".page4-emjoy24").html();
        var page4Table2saySomething1 = $(".page4-emjoy31").html();
        var sendObj = new FormData();
        for (var i = 0; i < arrFile1.length; i++) {
            sendObj.append('file' + (i + 1) + '', arrFile1[i]);
        }
        for (var i = 0, arr = []; i < $('.page17-wx-input').length; i++) {
            if ($('.page17-wx-input').eq(i).prop('checked')) {
                arr.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
            }
        }
        if (page4Table2saySomething == '') {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请编辑朋友圈内容');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else if (arr.length == 0) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择并勾选需要进行发朋友圈的设备');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)

        } else {
            var reger = /<img.*?(?:>|\/>)/g;
            var srcReg = /\/([^\/]*?\.gif)/i;
            var arr1 = page4Table2saySomething.match(reger)
            var arr2 = page4Table2saySomething1.match(reger)
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
                var result = page4Table2saySomething.match(/<img.*?(?:>|\/>)/g);
                for (var i = 0; i < result.length; i++) {
                    page4Table2saySomething = page4Table2saySomething.replace(result[i], tt1[i])
                }
            }
            if (page4Table2saySomething1 == '') {

            } else {
                if (arr2 == null) {
                } else {
                    var tt = []
                    for (var i = 0; i < arr2.length; i++) {
                        var src1 = arr2[i].match(srcReg);
                        // var src = srcReg.exec(arr1[i])
                        if (src1[1]) {
                            tt.push(src1[1].substring(0, src1[1].indexOf('.')))
                        }
                        for (var tt11 = [], i1 = 0; i1 < tt.length; i1++) {
                            for (var i2 = 0; i2 < emjoyAllGet.length; i2++) {
                                if (tt[i1] == i2) {
                                    tt11.push(emjoyAllGet[i2 - 1])
                                }
                            }
                        }
                    }
                    var result1 = page4Table2saySomething1.match(/<img.*?(?:>|\/>)/g);
                    for (var i = 0; i < result1.length; i++) {
                        page4Table2saySomething1 = page4Table2saySomething1.replace(result1[i], tt1[i])
                    }
                }
            }
            var oooo = page4Table2saySomething.replace(/<\/div>/g, "");
            var oooo1 = oooo.replace(/<br>/g, "");
            var oooo2 = oooo1.replace(/<div>/g, "<br>");
            var oooo1o = page4Table2saySomething1.replace(/<\/div>/g, "");
            var oooo11 = oooo1o.replace(/<br>/g, "");
            var oooo21 = oooo11.replace(/<div>/g, "<br>");
            sendObj.append('content', oooo2);
            sendObj.append('devices', JSON.stringify(arr));
            sendObj.append('interval', $scope.page4Table2timeInterval);
            sendObj.append('msg', oooo21);
            sendObj.append('number', JSON.stringify($scope.operate));
            sendObj.append('tag', $scope.aTag);
            sendObj.append('random', $scope.daluan);
            sendObj.append('mustNumber', JSON.stringify($scope.mustChoose1));
            sendObj.append('randomNumber', JSON.stringify($scope.unMChoose));
            $http({
                method: 'POST',
                url: $rootScope.link + "/operate/sendMoments",
                data: sendObj,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (response) {
                //上传成功的操作
                if (response.code == 200) {
                    $.Tupload1.init1({
                        title1: "",
                        fileNum1: 9, // 上传文件数量
                        divId1: "T_upload1", // div  id
                        accept1: "image/jpeg,image/x-png", // 上传文件的类型
                        onSuccess1: function (data, i) {
                        },
                        onDelete1: function (i) {
                        }
                    });
                    arrFile1 = []
                    $scope.mustChoose = [];
                    $scope.unMChoose = [];
                    $(".page4-emjoy24").html('');
                    $(".page4-emjoy31").html('');
                    $('.canuserq1').parent().parent().parent().parent().find('.page4CelueB').attr('disabled', 'disabled').css('background', '#a6a6a6');
                    $('.canuserq1').prop('checked', function () {
                        return false
                    }).parent().removeClass('on').pro
                    $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;发朋友圈任务添加成功');
                    setTimeout(function () {
                        $('.page1-alert-waring').hide(300)
                    }, 2000)

                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
                        if (data.code == 200) {
                            $rootScope.taskList = data.data;
                            $rootScope.taskAll = true;
                            $rootScope.taskDoing = false;
                            $rootScope.taskWait = false;
                            $rootScope.taskDown = false;
                            $rootScope.newBell = true;
                        } else {
                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                            setTimeout(function () {
                                $('.page1-alert-small-danger').hide(300)
                            }, 2000)
                        }
                    });
                } else {
                    $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;发朋友圈任务添加失败，请重试并检查设备连接');
                    setTimeout(function () {
                        $('.page1-alert-danger').hide(300)
                    }, 2000)
                }
            });
        }

    };
    /*--------------------------------------发朋友圈B完结----------------------------------------------------------*/

    /*--------------------------------------发朋友圈完结----------------------------------------------------------*/
    $scope.WriteNums = 1;
    $scope.page4Table4minTime = 1;
    $scope.page4Table4maxTime = 10;
    $scope.page4Table4SendAll1 = function () {
        for (var i = 0, arr = []; i < $('.page17-wx-input').length; i++) {
            if ($('.page17-wx-input').eq(i).prop('checked')) {
                arr.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
            }
        }
        if (arr.length == 0) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择并勾选需要进行朋友圈点赞的设备');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)

        } else {
            var sendObj = new FormData();
            sendObj.append('devices', JSON.stringify(arr));
            sendObj.append('likeCount', $scope.WriteNums);
            $http({
                method: 'POST',
                url: $rootScope.link + "/operate/likeForMoment",
                data: sendObj,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (response) {
                console.log(response.code)
                //上传成功的操作
                if (response.code == 200) {

                    $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;朋友圈点赞任务添加成功');
                    setTimeout(function () {
                        $('.page1-alert-waring').hide(300)
                    }, 2000)

                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
                        if (data.code == 200) {
                            $rootScope.taskList = data.data;
                            $rootScope.taskAll = true;
                            $rootScope.taskDoing = false;
                            $rootScope.taskWait = false;
                            $rootScope.taskDown = false;
                            $rootScope.newBell = true;
                        } else {
                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                            setTimeout(function () {
                                $('.page1-alert-small-danger').hide(300)
                            }, 2000)

                        }
                    });
                } else {
                    $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;朋友圈点赞任务添加失败，请重试并检查设备连接');
                    setTimeout(function () {
                        $('.page1-alert-danger').hide(300)
                    }, 2000)
                }
            });
        }
    };

    /*--------------------------------------朋友圈点赞完结----------------------------------------------------------*/
    $scope.mainName = ''
    $scope.mainNumber = ''
    $scope.minTimeQuan = 1
    $scope.maxTimeQuan = 10
    var selectValQuan = ''
    /*------选择确定朋友圈位置方式------*/
    $('.clickSelectQuan').change(function () {
        selectValQuan = $(this).val();
        if (selectValQuan == 0) {
            $('.page33-select-input').show();
            $('.page33-select-input').html('');
            $('.Quanquan').hide()
            $scope.mainNumber = ''
        } else {
            $('.page33-select-input').hide();
            $('.page33-select-input').html('');
            $('.Quanquan').show()
            $scope.mainName = '';
        }
    })
    /*------切换设备更新好友列表------*/

    $('.selectQuan').change(function () {
        $rootScope.sendValuePp1 = undefined
        $scope.checkPhone = $(this).val();
        $http.get($rootScope.link + '/operate/getContact?devices=' + $scope.checkPhone + '&pageNo=1&pageSize=2000').success(function (data) {
            if (data.code == 200) {
                if (data.data.content == '') {
                    $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;无法获取到好友列表，请前往好友管理进行好友刷新');
                    setTimeout(function () {
                        $('.page1-alert-small-danger').hide(300)
                    }, 2000)
                }
                $scope.WxListbiubiu = data.data.content;
            } else {
            }
        });
    })

    /*------确认转发朋友圈------*/
    $scope.page3TableSendAll1 = function () {
        var arr2 = []
        var arr3 = ''
        for (var i = 0, arr1 = []; i < $('.page17-wx-input').length; i++) {
            if ($('.page17-wx-input').eq(i).prop('checked')) {
                arr1.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
                if (i <= 4) {
                    arr2.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
                }
            }
        }
        if ($rootScope.sendValuePp1 == undefined) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择朋友圈所属好友');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)

        } else if ($scope.mainName == '' && $scope.mainNumber == '') {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请提供目标朋友圈所在位置');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else if (arr1.length == 0) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择并勾选需要转发朋友圈的五台设备');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else {
            if (arr1.length > 5) {
                arr3 = arr2
            } else {
                arr3 = arr1
            }
            var sendObj = new FormData();
            sendObj.append('forwardDevices', JSON.stringify(arr3));
            sendObj.append('msg', $scope.mainName);
            sendObj.append('appoint', $scope.mainNumber);
            sendObj.append('devices', $scope.checkPhone);
            // sendObj.append('strategy', $scope.addPeople);
            sendObj.append('friendId', $rootScope.sendValuePp1);
            // sendObj.append('contactList', JSON.stringify($scope.assList));
            $http({
                method: 'POST',
                url: $rootScope.link + "/operate/frowardMoments",
                data: sendObj,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (response) {
                //上传成功的操作
                if (response.code == 200) {
                    $scope.sayName = ''
                    $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;转发朋友圈任务添加成功');
                    setTimeout(function () {
                        $('.page1-alert-waring').hide(300)
                    }, 2000)
                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
                        if (data.code == 200) {
                            $rootScope.taskList = data.data;
                            $rootScope.taskAll = true;
                            $rootScope.taskDoing = false;
                            $rootScope.taskWait = false;
                            $rootScope.taskDown = false;
                            $rootScope.newBell = true;
                        } else {
                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                            setTimeout(function () {
                                $('.page1-alert-small-danger').hide(300)
                            }, 2000)
                        }
                    });
                } else {
                    $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;转发朋友圈任务添加失败');
                    setTimeout(function () {
                        $('.page1-alert-danger').hide(300)
                    }, 2000)
                }
            });
        }
    }


    /*--------------------------------------转发朋友圈完结----------------------------------------------------------*/
    $scope.page4table7sayName = ''
    $scope.page4table7SendAll = function () {
        for (var i = 0, arr1 = []; i < $('.page17-wx-input').length; i++) {
            if ($('.page17-wx-input').eq(i).prop('checked')) {
                arr1.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
            }
        }
        if (arr1.length == 0) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择并勾选需要进行关注公众号任务的设备');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else if ($scope.page4table7sayName == '') {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请按照固定格式正确输入公众号名称');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        }
        else {
            var arr2 = []
            arr2.push($scope.page4table7sayName.split("，"))
            var jsonTwo = {
                "publicnumberList": arr2[0],
                "devices": arr1
            }
            $http({
                method: 'POST',
                url: $rootScope.link + "/wechatPlus/addpublicnumber",
                data: jsonTwo,
                headers: {'Content-Type': undefined},
            }).success(function (response) {
                //上传成功的操作
                if (response.code == 200) {
                    $scope.page4table7sayName = ''
                    $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;关注公众号任务添加成功');
                    setTimeout(function () {
                        $('.page1-alert-waring').hide(300)
                    }, 2000)
                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
                        if (data.code == 200) {
                            $rootScope.taskList = data.data;
                            $rootScope.taskAll = true;
                            $rootScope.taskDoing = false;
                            $rootScope.taskWait = false;
                            $rootScope.taskDown = false;
                            $rootScope.newBell = true;
                        } else {
                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                            setTimeout(function () {
                                $('.page1-alert-small-danger').hide(300)
                            }, 2000)
                        }
                    });
                } else {
                    $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;关注公众号任务添加失败，请重试并检查设备连接');
                    setTimeout(function () {
                        $('.page1-alert-danger').hide(300)
                    }, 2000)
                }
            });
        }
    };


    /*--------------------------------------关注公众号完结----------------------------------------------------------*/
    var selectVal10 = 1;
    $scope.page4table10maxTime = 10;
    $scope.page4table10minTime = 1
    $scope.upFile5 = ''
    $('.upText5').hide()
    $('.clickSelect10').change(function () {
        selectVal10 = $(this).val();
        if (selectVal10 == 1) {
            $('.page3-qingli-Say').show();
            $('.page4-emjoy10').html('');

            $('.clickAddText10').hide()
            // $scope.saySomething = '您好！很高兴认识您！';
            $scope.upFile5 = ''
            $('.upText5').hide()
            $('.upfiler5').val('')
            $('.exselTextGray5').html('0kb')
            $('.exselTextGra5').html('无文件')
        } else {
            $('.page3-qingli-Say').hide();
            $('.clickAddText10').show();
            $('.page4-emjoy10').html('');
        }
    })
    $scope.deleteContent5 = function () {

        $scope.upFile5 = ''
        $('.upfiler5').val('')
        $('.exselTextGray5').html('0kb')
        $('.exselTextGra5').html('无文件')
    }
    $scope.page4Table10SendAll1 = function () {
        var page4table10saying = $(".page4-emjoy10").html();
        for (var i = 0, arr = []; i < $('.page17-wx-input').length; i++) {
            if ($('.page17-wx-input').eq(i).prop('checked')) {
                arr.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
            }
        }
        if (arr.length == 0) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择并勾选需要进行清理僵尸粉任务的设备');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else if (page4table10saying.length == 0 && typeof($scope.upFile) == "string") {
            alert('请输入打招呼用语或选择话术文件！');
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请输入打招呼用语或选择话术文件');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else {
            var reger = /<img.*?(?:>|\/>)/g;
            var srcReg = /\/([^\/]*?\.gif)/i;
            var arr1 = page4table10saying.match(reger)
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
                var result = page4table10saying.match(/<img.*?(?:>|\/>)/g);
                for (var i = 0; i < result.length; i++) {
                    page4table10saying = page4table10saying.replace(result[i], tt1[i])
                }
            }
            var oooo = page4table10saying.replace(/<\/div>/g, "");
            var oooo1 = oooo.replace(/<br>/g, "");
            var oooo2 = oooo1.replace(/<div>/g, "<br>");
            var sendObj = new FormData();
            sendObj.append('msg', oooo2);
            sendObj.append('devices', JSON.stringify(arr));
            sendObj.append('file', $scope.upFile5);
            sendObj.append('maxInterval', $scope.page4table10maxTime);
            sendObj.append('minInterval', $scope.page4table10minTime);
            $http({
                method: 'POST',
                url: $rootScope.link + "/operate/clearZombieFan",
                data: sendObj,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (response) {
                //上传成功的操作
                if (response.code == 200) {

                    $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;清理僵尸粉任务添加成功');
                    setTimeout(function () {
                        $('.page1-alert-waring').hide(300)
                    }, 2000)
                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
                        if (data.code == 200) {
                            $rootScope.taskList = data.data;
                            $rootScope.taskAll = true;
                            $rootScope.taskDoing = false;
                            $rootScope.taskWait = false;
                            $rootScope.taskDown = false;
                            $rootScope.newBell = true;
                        } else {
                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                            setTimeout(function () {
                                $('.page1-alert-small-danger').hide(300)
                            }, 2000)
                        }
                    });
                } else {
                    $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;清理僵尸粉任务添加失败，请重试并检查设备连接');
                    setTimeout(function () {
                        $('.page1-alert-danger').hide(300)
                    }, 2000)
                }
            });
        }
    };

    /*--------------------------------------清理僵尸粉完结----------------------------------------------------------*/
    $scope.page4table11maxTime = 10;
    $scope.page4table11minTime = 1;
    $scope.page4Table11SendAll1 = function () {
        for (var i = 0, arr = []; i < $('.page17-wx-input').length; i++) {
            if ($('.page17-wx-input').eq(i).prop('checked')) {
                arr.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
            }
        }
        if (arr.length == 0) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择并勾选需要进行操作的设备');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else {
            var sendObj = new FormData();
            sendObj.append('devices', JSON.stringify(arr));
            // sendObj.append('interval', $scope.timeInterval);
            sendObj.append('maxInterval', $scope.page4table11maxTime);
            sendObj.append('minInterval', $scope.page4table11minTime);
            $http({
                method: 'POST',
                url: $rootScope.link + "/wechatPlus/receiveRequest",
                data: sendObj,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (response) {
                //上传成功的操作
                if (response.code == 200) {

                    $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;好友管理请求任务添加成功');
                    setTimeout(function () {
                        $('.page1-alert-waring').hide(300)
                    }, 2000)
                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
                        if (data.code == 200) {
                            $rootScope.taskList = data.data;
                            $rootScope.taskAll = true;
                            $rootScope.taskDoing = false;
                            $rootScope.taskWait = false;
                            $rootScope.taskDown = false;
                            $rootScope.newBell = true;
                        } else {

                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                            setTimeout(function () {
                                $('.page1-alert-small-danger').hide(300)
                            }, 2000)
                        }
                    });
                } else {
                    $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;好友管理请求任务添加失败，请重试并检查设备连接');
                    setTimeout(function () {
                        $('.page1-alert-danger').hide(300)
                    }, 2000)
                }
            });
        }
    };
    /*--------------------------------------好友请求管理完结----------------------------------------------------------*/
    $scope.page4Table12SendAll1 = function () {
        $scope.sendObj = new FormData();
        $scope.sendObj.append('file', arrFile3[0]);
        for (var i = 0, arr = []; i < $('.page17-wx-input').length; i++) {
            if ($('.page17-wx-input').eq(i).prop('checked')) {
                arr.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
            }
        }
        if (arr == 0) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择并勾选需要进行扫码进群的设备');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else if (arrFile3 == []) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择进群二维码');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else {
            var jsonOne = {'devices': arr}
            $scope.sendObj.append('json', JSON.stringify(jsonOne));
            $http({
                method: 'POST',
                url: $rootScope.link + "/wechatPlus/addgroupfrompicture",
                data: $scope.sendObj,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (response) {
                //上传成功的操作
                if (response.code == 200) {
                    $.Tupload2.init2({
                        title2: "",
                        fileNum2: 1, // 上传文件数量
                        divId2: "T_upload2", // div  id
                        accept2: "image/jpeg,image/x-png", // 上传文件的类型
                        onSuccess2: function (data, i) {
                        },
                        onDelete2: function (i) {
                        }
                    });
                    arrFile3 = []
                    $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;扫码进群任务添加成功');
                    setTimeout(function () {
                        $('.page1-alert-waring').hide(300)
                    }, 2000)
                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
                        if (data.code == 200) {
                            $rootScope.taskList = data.data;
                            $rootScope.taskAll = true;
                            $rootScope.taskDoing = false;
                            $rootScope.taskWait = false;
                            $rootScope.taskDown = false;
                            $rootScope.newBell = true;
                        } else {
                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                            setTimeout(function () {
                                $('.page1-alert-small-danger').hide(300)
                            }, 2000)
                        }
                    });
                } else {
                    $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;扫码进群任务添加失败，请重试并检查设备连接');
                    setTimeout(function () {
                        $('.page1-alert-danger').hide(300)
                    }, 2000)
                }
            });
        }

    };
    /*--------------------------------------扫码进群部分完结----------------------------------------------------------*/
}
]);
