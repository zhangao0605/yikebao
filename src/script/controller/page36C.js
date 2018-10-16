app.controller('page36C', ["$rootScope", "$scope", "$http", "$timeout", function ($rootScope, $scope, $http, $timeout) {
    $rootScope.getAllFalse();
    $rootScope.initOver = true;
    $rootScope.activeThirtySix = true;
    $rootScope.navPartThree = true;
    $rootScope.isScreenPage = false;
    $scope.outSideBox = true;
    $scope.uptel = false
    $scope.outSideBox1 = false;
    $scope.outSideBox3 = false;
    $scope.outSideBox2 = false;
    $scope.outSideBox4 = false;
    $scope.outSideBox5 = false;
    $scope.upTextShow = false;
    $scope.fvcMe = function (e) {
        $('.list_dd').stop();
        $(".list_dt").eq(e).parent().siblings("new-wx-group-list-li").removeAttr("id");
        if ($(".list_dt").eq(e).parent().attr("id") == "open") {
            $(".list_dt").eq(e).parent().removeAttr("id").find('i').css('background', ' url("images/offChecked.png")center no-repeat')
        } else {
            $(".list_dt").eq(e).parent().attr("id", "open").find('i').css('background', ' url("images/openChecked.png")center no-repeat')
        }
    }
    $(".page2-emjoy1").html('');
    $(".page3-emjoy1").html('');
    $(".page3-emjoy2").html('');
    $(".page3-emjoy3").html('');
    $(".page3-emjoy5").html('');
    $(".page2-emjoy1").on("paste", function (e) {
        textInit(e)
    });
    $(".page3-emjoy1").on("paste", function (e) {
        textInit(e)
    });
    $(".page3-emjoy2").on("paste", function (e) {
        textInit(e)
    });
    $(".page3-emjoy3").on("paste", function (e) {
        textInit(e)
    });
    $(".page3-emjoy5").on("paste", function (e) {
        textInit(e)
    });
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
    $("#btn2").click(function () {
        $('.emoji_container').html('').css({'border': 'none', 'background-color': 'transparent', 'box-shadow': 'none'})
        $("#editor2").emoji({
            button: "#btn2",
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
    $("#btn3").click(function () {
        $('.emoji_container').html('').css({'border': 'none', 'background-color': 'transparent', 'box-shadow': 'none'})
        $("#editor3").emoji({
            button: "#btn3",
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
    $("#btn4").click(function () {
        $('.emoji_container').html('').css({'border': 'none', 'background-color': 'transparent', 'box-shadow': 'none'})
        $("#editor4").emoji({
            button: "#btn4",
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
    $("#btn5").click(function () {
        $('.emoji_container').html('').css({'border': 'none', 'background-color': 'transparent', 'box-shadow': 'none'})
        $("#editor5").emoji({
            button: "#btn5",
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
            $rootScope.page5getMoreData = 1
            $('.page3-table1-click-table2-Table3-checked').addClass('on');
            $('.page3-table1-click-table2-Table3-Nochecked').removeClass('on');
            $scope.outSideBox1 = false;
            $scope.outSideBox3 = false;
            $scope.outSideBox2 = false;
            $scope.outSideBox4 = false;
            $scope.page2Table3Group = false
            $scope.inSideBox1 = false;
            $scope.insideBox = false;
            $scope.outSideBox = true;
            $scope.uptel = false;
            $scope.outSideBox1 = false;
            $scope.outSideBox5 = false;
            $('.page2-title-button-but1').css({
                "background-color": "#2ABF9E",
                "color": "#fff"
            }).siblings().css({"background-color": "#fff", "color": "#2ABF9E"});
        } else if (e == 2) {
            $rootScope.page5getMoreData = 2
            $('.page3-table1-click-table2-Table3-checked').addClass('on');
            $('.page3-table1-click-table2-Table3-Nochecked').removeClass('on');
            $scope.outSideBox3 = false;
            $scope.outSideBox2 = false;
            $scope.outSideBox4 = false;
            $scope.page2Table3Group = false
            $scope.inSideBox1 = true;
            $scope.insideBox = false;
            $scope.outSideBox = false;
            $scope.uptel = false;
            $scope.outSideBox1 = true;
            $scope.outSideBox5 = false;
            $('.page2-title-button-but2').css({
                "background-color": "#2ABF9E",
                "color": "#fff"
            }).siblings().css({"background-color": "#fff", "color": "#2ABF9E"});
            /*----------------------获取好友相关数据----------------------------------------*/
            $scope.getInsideBox = function (id, num, devices) {
                $scope.MemberId = id;
                $scope.newDevices = devices;
                $scope.MemberNumber = num;
                $http.get($rootScope.link + '/operate/getContact?wechatId=' + id + '&pageNo=1&pageSize=15').success(function (data) {
                    if (data.code == 200) {
                        $scope.outSideBox = false;
                        $scope.inSideBox = true;
                        $scope.WxList = data.data.content;
                        $scope.assPage = 1;
                        $scope.page1InitDataLength = data.data.currentPageElements;
                        $('.page2-table1-page').pagination({
                            totalData: $scope.page1InitDataLength,
                            showData: 15,
                            coping: true,
                            count: 2,
                            callback: function (api) {
                                var data = {
                                    page: api.getCurrent(),
                                };
                                // $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify($rootScope.moArray) + '&pageNo=' + data.page + '&pageSize=15').success(function (data) {
                                //     $scope.page1InitDataLength = data.data.currentPageElements
                                // })
                            }
                        })
                    } else {


                        $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                        setTimeout(function () {
                            $('.page1-alert-small-danger').hide(300)
                        }, 2000)
                    }
                });
            };
        } else if (e == 3) {
            $rootScope.page5getMoreData = 3
            $('.page3-table1-click-table2-Table3-checked').addClass('on');
            $('.page3-table1-click-table2-Table3-Nochecked').removeClass('on');
            $('.page2-title-button-but3').css({
                "background-color": "#2ABF9E",
                "color": "#fff"
            }).siblings().css({"background-color": "#fff", "color": "#2ABF9E"});
            /*----------未配置-------*/
            $scope.outSideBox1 = false;
            $scope.inSideBox1 = false;
            $scope.insideBox = false;
            $scope.outSideBox = false;
            $scope.uptel = false;
            $scope.outSideBox5 = false;


            $scope.outSideBox1 = false;
            $scope.outSideBox3 = true;
            $scope.outSideBox2 = true;
            $scope.outSideBox4 = false;
        } else {
            $rootScope.page5getMoreData = 10;
            $('.page3-table1-click-table2-Table3-checked').addClass('on');
            $('.page3-table1-click-table2-Table3-Nochecked').removeClass('on');
            $('.page2-title-button-but4').css({
                "background-color": "#2ABF9E",
                "color": "#fff"
            }).siblings().css({"background-color": "#fff", "color": "#2ABF9E"});
            $scope.uptel = false;
            $scope.outSideBox1 = false;
            $scope.outSideBox3 = false;
            $scope.outSideBox2 = false;
            $scope.outSideBox4 = false;
            $scope.outSideBox5 = true;
            $scope.outSideBox = false;
        }
    }

    /*--------------点击进入导入通讯录界面----------------*/
    $scope.page3UpTelephone = function () {
        $scope.outSideBox = false;
        $scope.uptel = true;
    }
    /*--------------点击返回通讯录加人界面----------------*/
    $scope.resetBackAddTel = function () {
        $scope.outSideBox = true;
        $scope.uptel = false;
    }
    $scope.addPeopleCount = 15;
    $scope.maxTime = 10;
    $scope.minTime = 1;
    var selectVal = 1
    $('.upText').hide()
    /*-----------选择话术用语方式---------------------*/
    $('.clickSelect').change(function () {
        selectVal = $(this).val();
        if (selectVal == 1) {
            $('.page3-Addpeople-Say').show();
            $('.page2-emjoy1').html('');
            $('.clickAddTextno').hide()
            $('.upText').hide()
            $scope.upFile = ''
            $('.upfiler').val('')
            $('.exselTextGray').html('0kb')
            $('.exselTextGra').html('无文件')
        } else {
            $('.page3-Addpeople-Say').hide();
            $('.clickAddTextno').show();
            $('.page2-emjoy1').html('');
        }
    })
    $scope.deleteContent = function () {

        $scope.upFile = ''
        $('.upfiler').val('')
        $('.exselTextGray').html('0kb')
        $('.exselTextGra').html('无文件')
    }
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
    $scope.page3TableSendAll1 = function () {
        var page2table3saying = $(".page2-emjoy1").html();
        for (var i = 0, arr = []; i < $('.page17-wx-input').length; i++) {
            if ($('.page17-wx-input').eq(i).prop('checked')) {
                arr.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
            }
        }
        if (arr.length == 0) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择并勾选需要操作的设备');
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
            var sendObj = new FormData();
            sendObj.append('devices', JSON.stringify(arr));
            sendObj.append('maxInterval', $scope.maxTime);
            sendObj.append('minInterval', $scope.minTime);
            sendObj.append('addNum', $scope.addPeopleCount);
            sendObj.append('file', $scope.upFile);
            sendObj.append('msg', oooo2);
            $http({
                method: 'POST',
                url: $rootScope.link + "/wechatPlus/addFriendsFromContact",
                data: sendObj,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (response) {
                //上传成功的操作
                if (response.code == 200) {
                    $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;通讯录加人任务添加成功');
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
                    $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;通讯录加人任务添加失败');
                    setTimeout(function () {
                        $('.page1-alert-danger').hide(300)
                    }, 2000)
                }
            });
        }
    };
    /*--------------------------------------通讯录加人完结----------------------------------------------------------*/
    /*------------------策略相关------------------*/
    $scope.isClear = 0;
    $scope.clear = function ($event) {
        if ($event.target.checked) {
            $scope.isClear = 1;
        } else {
            $scope.isClear = 0;
        }
    };
    $scope.assRadioChoose = false;
    $scope.page3table1table2addPeople = 1;
    $scope.page3table1table2addPeopleCount = 1;
    $scope.getAssHide = function () {
        $scope.assRadioChoose = false;
        $scope.page3table1table2addPeople = 1;
    };
    $scope.getAssShow = function () {
        $scope.assRadioChoose = true;
        $scope.page3table1table2addPeople = 0;
    }
    $scope.page3table1table2SendAll = function () {
        for (var i = 0, arr = []; i < $('.page17-wx-input').length; i++) {
            if ($('.page17-wx-input').eq(i).prop('checked')) {
                arr.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
            }
        }
        if (arr.length < 0) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请勾选并选择需要操作的设备')
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        }else if($scope.assList==undefined||$scope.assList==''||$scope.assList==null){
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择并导入有效的通讯录文件')
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        }else {
            var sendObj = new FormData();
            sendObj.append('devices', JSON.stringify(arr));
            sendObj.append('clear', $scope.isClear);
            sendObj.append('strategy', $scope.page3table1table2addPeople);
            sendObj.append('count', $scope.page3table1table2addPeopleCount);
            sendObj.append('contactList', JSON.stringify($scope.assList));
            $http({
                method: 'POST',
                url: $rootScope.link + "/wechatPlus/addContacts",
                data: sendObj,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (response) {
                console.log(response.code)
                //上传成功的操作
                if (response.code == 200) {
                    $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;通讯录加人任务添加成功');
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
                    $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;通讯录加人任务添加失败，请重试并检查设备连接');
                    setTimeout(function () {
                        $('.page1-alert-danger').hide(300)
                    }, 2000)
                }
            });
        }
    };
    /*--------------------------------------通讯录上传完结----------------------------------------------------------*/
    $scope.upFile1 = ''
    $scope.sayHello = '您好！很高兴认识您！';
    $scope.page3table21tabl2eaddPeople = 0;
    $scope.page3table21tabl2eaddPeopleCount = 1;
    $scope.page3table21tabl2maxTime = 10;
    $scope.page3table21tabl2minTime = 1;
    $scope.assRadioChoose1 = true;
    $scope.page2Table1AllNum = function () {
        $scope.page3table21tabl2eaddPeople = 1;
        $scope.assRadioChoose1 = false;
    };
    $scope.page2Table1SomeNum = function () {
        $scope.page3table21tabl2eaddPeople = 0;
        $scope.assRadioChoose1 = true;
    };
    /*-------------------选择话术用语---------------------*/
    var selectVal1 = 1

    $('.upText1').hide()
    $('.clickSelect1').change(function () {
        selectVal1 = $(this).val();
        if (selectVal1 == 1) {
            $('.page3-jingzhun-Say').show();
            $('.page3-emjoy1').html('');
            $('.clickAddText1').hide()
            // $scope.saySomething = '您好！很高兴认识您！';
            $scope.upFile1 = ''
            $('.upText1').hide()
            $('.upfiler1').val('')
            $('.exselTextGray1').html('0kb')
            $('.exselTextGra1').html('无文件')
        } else {
            $('.page3-jingzhun-Say').hide();
            $('.clickAddText1').show();
            $('.page3-emjoy1').html('');
        }
    })
    $scope.deleteContent1 = function () {

        $scope.upFile1 = ''
        $('.upfiler1').val('')
        $('.exselTextGray1').html('0kb')
        $('.exselTextGra1').html('无文件')
    }
    $scope.page3table2table2SendAll = function () {
        var page3table3saying = $(".page3-emjoy1").html();
        for (var i = 0, arr = []; i < $('.page17-wx-input').length; i++) {
            if ($('.page17-wx-input').eq(i).prop('checked')) {
                arr.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
            }
        }
        if (arr.length == 0) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择并勾选需要操作的设备');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        }
        else if (page3table3saying.length == 0 && typeof($scope.upFile) == "string") {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请输入打招呼用语或导入话术文件');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)

        }
        else {
            var reger = /<img.*?(?:>|\/>)/g;
            var srcReg = /\/([^\/]*?\.gif)/i;
            var arr1 = page3table3saying.match(reger)
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
                var result = page3table3saying.match(/<img.*?(?:>|\/>)/g);
                for (var i = 0; i < result.length; i++) {
                    page3table3saying = page3table3saying.replace(result[i], tt1[i])
                }
            }
            var oooo = page3table3saying.replace(/<\/div>/g, "");
            var oooo1 = oooo.replace(/<br>/g, "");
            var oooo2 = oooo1.replace(/<div>/g, "<br>");
            var sendObj = new FormData();
            sendObj.append('devices', JSON.stringify(arr));
            sendObj.append('file', $scope.upFile1);
            sendObj.append('msg', oooo2);
            sendObj.append('strategy', $scope.page3table21tabl2eaddPeople);
            sendObj.append('count', $scope.page3table21tabl2eaddPeopleCount);
            sendObj.append('contactList', JSON.stringify($scope.assList1));
            sendObj.append('contactList2', JSON.stringify($scope.assList2));
            sendObj.append('maxInterval', $scope.page3table21tabl2maxTime);
            sendObj.append('minInterval', $scope.page3table21tabl2minTime);
            $http({
                method: 'POST',
                url: $rootScope.link + "/wechatPlus/addFriendDirect",
                data: sendObj,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (response) {
                //上传成功的操作
                if (response.code == 200) {
                    $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;精准加人任务添加成功');
                    setTimeout(function () {
                        $('.page1-alert-waring').hide(300)
                    }, 2000)
                    $(".page3-emjoy1").html('');
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
                    $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;数据加载任务添加失败，请重试并检查设备连接');
                    setTimeout(function () {
                        $('.page1-alert-danger').hide(300)
                    }, 2000)
                }
            });
        }
    };
    /*--------------------------------------精准加人完结----------------------------------------------------------*/
    $scope.mapRang = '2000';
    // $scope.timeInterval = 5;
    $scope.page3table41tabl1sayHello = '您好！很高兴认识您！';
    $scope.upFile2 = ''
    $scope.mapLocation = '';
    $scope.addPeopleNumber = 10;
    $scope.addSex = '全部';
    $scope.page3table41tabl1maxTime = 10;
    $scope.page3table41tabl1minTime = 1;
    /*-------------------选择话术用语---------------------*/
    var selectVal2 = 1
    $('.upText2').hide()
    $('.clickSelect2').change(function () {
        selectVal2 = $(this).val();
        if (selectVal2 == 1) {
            $('.page3-fujin-Say').show();
            $('.page3-emjoy2').html('');

            $('.clickAddText2').hide()
            // $scope.saySomething = '您好！很高兴认识您！';
            $scope.upFile2 = ''

            $('.upText2').hide()
            $('.upfiler2').val('')
            $('.exselTextGray2').html('0kb')
            $('.exselTextGra2').html('无文件')
        } else {
            $('.page3-fujin-Say').hide();
            $('.clickAddText2').show();
            $('.page3-emjoy2').html('');
        }
    })
    $scope.deleteContent2 = function () {

        $scope.upFile2 = ''
        $('.upfiler2').val('')
        $('.exselTextGray2').html('0kb')
        $('.exselTextGra2').html('无文件')
    }
    /*--------------------确认添加附近得人后先清除穿越位置-----------------------*/
    $scope.page3table4table1SendAll = function () {
        var page3table4saying = $(".page3-emjoy2").html();
        for (var i = 0, arr = []; i < $('.page17-wx-input').length; i++) {
            if ($('.page17-wx-input').eq(i).prop('checked')) {
                arr.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
            }
        }
        var sex = 0;
        if ($scope.addSex == '全部') {
            sex = 0;
        } else if ($scope.addSex == '男') {
            sex = 1;
        } else if ($scope.addSex == '女') {
            sex = 2;
        }
        if (arr.length == 0) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择并勾选需要操作的设备');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)

        } else if ($scope.mapRang == '') {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择加好友范围');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        }
        else {
            var ClearsendObj1 = new FormData();
            ClearsendObj1.append('devices', JSON.stringify(arr));
            $http({
                method: 'POST',
                url: $rootScope.link + "/operate/clearLocation",
                data: ClearsendObj1,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (response) {
                //上传成功的操作
                if (response.code == 200) {
                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
                        if (data.code == 200) {
                            $rootScope.taskList = data.data;
                            $rootScope.taskAll = true;
                            $rootScope.taskDoing = false;
                            $rootScope.taskWait = false;
                            $rootScope.taskDown = false;
                            $rootScope.newBell = true;
                        }
                    });
                    var reger = /<img.*?(?:>|\/>)/g;
                    var srcReg = /\/([^\/]*?\.gif)/i;
                    var arr1 = page3table4saying.match(reger)
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
                        var result = page3table4saying.match(/<img.*?(?:>|\/>)/g);
                        for (var i = 0; i < result.length; i++) {
                            page3table4saying = page3table4saying.replace(result[i], tt1[i])
                        }
                    }
                    var oooo = page3table4saying.replace(/<\/div>/g, "");
                    var oooo1 = oooo.replace(/<br>/g, "");
                    var oooo2 = oooo1.replace(/<div>/g, "<br>");
                    var sendObj = new FormData();
                    sendObj.append('devices', JSON.stringify(arr));
                    sendObj.append('file', $scope.upFile2);
                    sendObj.append('maxInterval', $scope.page3table41tabl1maxTime);
                    sendObj.append('minInterval', $scope.page3table41tabl1minTime);
                    sendObj.append('msg', oooo2);
                    // sendObj.append('range', parseInt($scope.mapRang));
                    // sendObj.append('longitude', $scope.mapPointLng);
                    // sendObj.append('latitude', $scope.mapPointLat);
                    sendObj.append('num', $scope.addPeopleNumber);
                    sendObj.append('sex', sex);
                    $http({
                        method: 'POST',
                        url: $rootScope.link + "/wechatPlus/sayHello",
                        data: sendObj,
                        headers: {'Content-Type': undefined},
                        transformRequest: angular.identity
                    }).success(function (response) {
                        //上传成功的操作
                        if (response.code == 200) {
                            $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;加附近的人任务添加成功');
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
                            $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;加附近的人任务添加失败，请重试并检查设备连接');
                            setTimeout(function () {
                                $('.page1-alert-danger').hide(300)
                            }, 2000)
                        }
                    });
                } else {
                    $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;加附近的人任务添加失败，请重试并检查设备连接');
                    setTimeout(function () {
                        $('.page1-alert-danger').hide(300)
                    }, 2000)
                }
            });
        }
    };

    /*--------------------------------------附近的人完结----------------------------------------------------------*/
    /*-----------------------当前位置穿越切换----------------------------*/
    $scope.page3Table4Show1 = function () {
        $scope.outSideBox2 = true;
        $scope.outSideBox4 = false;
    }
    $scope.page3Table4Show2 = function () {
        $scope.outSideBox2 = false;
        $scope.outSideBox4 = true;
    }

    function G(id) {
        return document.getElementById(id);
    }

    var map = new BMap.Map("page14-map");
    map.centerAndZoom("北京", 12);                   // 初始化地图,设置城市和地图级别。
    map.enableScrollWheelZoom(true); //为了王哥
    map.addEventListener('click', function (e) {
        //var myIcon=new BMap.Icon("images/map-logo.png", new BMap.Size(23,33));
        //var marker = new BMap.Marker(new BMap.Point(e.point.lng,e.point.lat ),{icon:myIcon})
        //map.addOverlay(marker);
        $.ajax({
            type: 'GET',
            url: 'http://api.map.baidu.com/geocoder/v2/?ak=HbUVYMUg6PwbOnXkztdgSQlQ&callback=renderReverse&location=' + e.point.lat + ',' + e.point.lng + '&output=json&pois=1',
            dataType: 'JSONP',
            success: function (data1) {
                $scope.mapLocation = data1.result.formatted_address;
                $scope.$apply();
            }
        });
    });
    var ac = new BMap.Autocomplete(    //建立一个自动完成的对象
        {
            "input": "suggestId"
            , "location": map
        });

    ac.addEventListener("onhighlight", function (e) {  //鼠标放在下拉列表上的事件
        var str = "";
        var _value = e.fromitem.value;
        var value = "";
        if (e.fromitem.index > -1) {
            value = _value.province + _value.city + _value.district + _value.street + _value.business;
        }
        str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;

        value = "";
        if (e.toitem.index > -1) {
            _value = e.toitem.value;
            value = _value.province + _value.city + _value.district + _value.street + _value.business;
        }
        str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
        G("searchResultPanel").innerHTML = str;
    });

    var myValue;
    ac.addEventListener("onconfirm", function (e) {    //鼠标点击下拉列表后的事件
        var _value = e.item.value;
        myValue = _value.province + _value.city + _value.district + _value.street + _value.business;
        G("searchResultPanel").innerHTML = "onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;

        setPlace();
    });

    function setPlace() {
        map.clearOverlays();    //清除地图上所有覆盖物
        function myFun() {
            var pp = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果
            map.centerAndZoom(pp, 18);
            map.addOverlay(new BMap.Marker(pp));    //添加标注
            $scope.mapPointLng = pp.lng;
            $scope.mapPointLat = pp.lat;
        }

        var local = new BMap.LocalSearch(map, { //智能搜索
            onSearchComplete: myFun
        });
        local.search(myValue);
    }

    $scope.mapRang1 = '2000';
    // $scope.timeInterval = 5;
    $scope.page3table41tabl1sayHello1 = '您好！很高兴认识您！';
    $scope.upFile3 = ''
    $scope.mapLocation = '';
    $scope.addPeopleNumber1 = 10;
    $scope.addSex1 = '全部';
    $scope.page3table41tabl1maxTime1 = 10;
    $scope.page3table41tabl1minTime1 = 1;
    var selectVal21 = 1
    $('.upText3').hide()
    $('.clickSelect3').change(function () {
        selectVal21 = $(this).val();
        if (selectVal21 == 1) {
            $('.page3-fujin-Say12').show();
            $('.page100-emjoy100').html('');

            $('.clickAddText3').hide()
            // $scope.saySomething = '您好！很高兴认识您！';
            $scope.upFile3 = ''

            $('.upText3').hide()
            $('.upfiler3').val('')
            $('.exselTextGray3').html('0kb')
            $('.exselTextGra3').html('无文件')
        } else {
            $('.page3-fujin-Say12').hide();
            $('.clickAddText3').show();
            $('.page100-emjoy100').html('');
        }
    })
    $scope.deleteContent3 = function () {

        $scope.upFile3 = ''
        $('.upfiler3').val('')
        $('.exselTextGray3').html('0kb')
        $('.exselTextGra3').html('无文件')
    }
    /*-------------------------确认穿越位置后加人-------------------------*/
    $scope.page3table4table1SendAll1 = function () {
        var page3table4saying = $(".page100-emjoy100").html();
        for (var i = 0, arr = []; i < $('.page17-wx-input').length; i++) {
            if ($('.page17-wx-input').eq(i).prop('checked')) {
                arr.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
            }
        }
        var sex = 0;
        if ($scope.addSex1 == '全部') {
            sex = 0;
        } else if ($scope.addSex1 == '男') {
            sex = 1;
        } else if ($scope.addSex1 == '女') {
            sex = 2;
        }
        if (arr.length == 0) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择并勾选需要操作的设备');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)

        } else if ($scope.mapRang1 == '') {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择加好友范围');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        }
        else if ($scope.mapPointLng == undefined || $scope.mapPointLng == '' || $scope.mapPointLat == undefined || $scope.mapPointLat == '') {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请输入您想要穿越的位置');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        }
        else {
            var sendObjChange = new FormData();
            sendObjChange.append('devices', JSON.stringify(arr));
            sendObjChange.append('longitude', $scope.mapPointLng);
            sendObjChange.append('latitude', $scope.mapPointLat);
            $http({
                method: 'POST',
                url: $rootScope.link + "/operate/changeLocation",
                data: sendObjChange,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (response) {
                //上传成功的操作
                if (response.code == 200) {
                    var reger = /<img.*?(?:>|\/>)/g;
                    var srcReg = /\/([^\/]*?\.gif)/i;
                    var arr1 = page3table4saying.match(reger)
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
                        var result = page3table4saying.match(/<img.*?(?:>|\/>)/g);
                        for (var i = 0; i < result.length; i++) {
                            page3table4saying = page3table4saying.replace(result[i], tt1[i])
                        }
                    }
                    var oooo = page3table4saying.replace(/<\/div>/g, "");
                    var oooo1 = oooo.replace(/<br>/g, "");
                    var oooo2 = oooo1.replace(/<div>/g, "<br>");
                    var sendObj = new FormData();
                    sendObj.append('devices', JSON.stringify(arr));
                    sendObj.append('file', $scope.upFile3);
                    sendObj.append('maxInterval', $scope.page3table41tabl1maxTime1);
                    sendObj.append('minInterval', $scope.page3table41tabl1minTime1);
                    sendObj.append('msg', oooo2);
                    sendObj.append('range', parseInt($scope.mapRang1));

                    sendObj.append('num', $scope.addPeopleNumber1);
                    sendObj.append('sex', sex);
                    $http({
                        method: 'POST',
                        url: $rootScope.link + "/wechatPlus/sayHello",
                        data: sendObj,
                        headers: {'Content-Type': undefined},
                        transformRequest: angular.identity
                    }).success(function (response) {
                        //上传成功的操作
                        if (response.code == 200) {
                            $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;加附近的人任务添加成功');
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
                            $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;加附近的人任务添加失败，请重试并检查设备连接');
                            setTimeout(function () {
                                $('.page1-alert-danger').hide(300)
                            }, 2000)
                        }
                    })
                } else {
                    $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;加附近的人任务添加失败，请重试并检查设备连接');
                    setTimeout(function () {
                        $('.page1-alert-danger').hide(300)
                    }, 2000)
                }
            })


        }
    }
    /*--------------------------------------位置穿越完结----------------------------------------------------------*/
    $scope.addPeopleNumber2 = 5;
    $scope.timeInterval = 5;
    $scope.page3table51tabl1minTime = 1;
    $scope.page3table51tabl1maxTime = 10;
    $scope.upFile4 = ''
    $scope.allGroup = 0
    $scope.topGroup = 0;
    $scope.groupNum = 5;
    $scope.allNum = 0;
    $scope.panduan = 0;
    /*---------------选择加好友途径------------------*/
    $('.upText4').hide()
    var selectVal5 = 0;
    var selectVal4 = 1
    $('.clickSelect4').change(function () {
        selectVal4 = $(this).val();
        if (selectVal4 == 1) {
            $('.page3-qunzu-Say-3').show();
            $('.page3-emjoy5').html('');

            $('.clickAddText3-3').hide()
            $('.upText4').hide()
            $('.upfiler4').val('')
            $('.exselTextGray4').html('0kb')
            $('.exselTextGra4').html('无文件')
            $scope.upFile4 = ''
        } else {
            $('.page3-qunzu-Say-3').hide();
            $('.clickAddText3-3').show();
            $('.page3-emjoy5').html('');
        }
    })
    $scope.deleteContent4 = function () {

        $scope.upFile4 = ''
        $('.upfiler4').val('')
        $('.exselTextGray4').html('0kb')
        $('.exselTextGra4').html('无文件')
    }

    $('.come-type').change(function () {
        selectVal5 = $(this).val();
        if (selectVal5 == 1) {
            $(".writeNum").hide()
            $scope.allGroup = 1
            $scope.topGroup = 0;
            $scope.groupNum = 0;
            $scope.noTopGroup = 0
            $scope.panduan = 1;
            $scope.allNum = 0;
        } else if (selectVal5 == 0) {
            $(".writeNum").hide()
            $scope.allGroup = 0
            $scope.topGroup = 0;
            $scope.groupNum = 0;
            $scope.panduan = 0;
            $scope.noTopGroup = 0
            $scope.allNum = 0;
        } else if (selectVal5 == 2) {
            $(".writeNum").hide()
            $scope.panduan = 1;
            $scope.allGroup = 0
            $scope.topGroup = 1;
            $scope.groupNum = 0;
            $scope.noTopGroup = 0
            $scope.allNum = 0;
        } else if (selectVal5 == 3) {
            $scope.allGroup = 0
            $scope.panduan = 1;
            $scope.topGroup = 0;
            $scope.groupNum = 5;
            $scope.noTopGroup = 0
            $scope.allNum = 1
            $(".writeNum").show()
        } else if (selectVal5 == 4) {
            $(".writeNum").hide()
            // $scope.noTopGroup = 1
            $scope.allGroup = 0
            $scope.topGroup = 2;
            $scope.groupNum = 0;
            $scope.panduan = 1;
            $scope.allNum = 0;
        }
    })
    $scope.page3table5table1SendAll = function () {
        var page3table5saying = $(".page3-emjoy5").html();
        for (var i = 0, arr = []; i < $('.page17-wx-input').length; i++) {
            if ($('.page17-wx-input').eq(i).prop('checked')) {
                arr.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
            }
        }
        if (arr.length == 0) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择并勾选需要操作的设备');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else if (page3table5saying != '' && typeof($scope.upFile) == "string") {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请输入打招呼用语或导入话术文件');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        }
        else if ($scope.panduan == 0) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择入群加好友的方式');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else {
            var reger = /<img.*?(?:>|\/>)/g;
            var srcReg = /\/([^\/]*?\.gif)/i;
            var arr1 = page3table5saying.match(reger)
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
                var result = page3table5saying.match(/<img.*?(?:>|\/>)/g);
                for (var i = 0; i < result.length; i++) {
                    page3table5saying = page3table5saying.replace(result[i], tt1[i])
                }
            }
            var oooo = page3table5saying.replace(/<\/div>/g, "");
            var oooo1 = oooo.replace(/<br>/g, "");
            var oooo2 = oooo1.replace(/<div>/g, "<br>");
            var sendObj = new FormData();
            sendObj.append('file', $scope.upFile4);
            sendObj.append('msg', oooo2);
            sendObj.append('addNum', $scope.addPeopleNumber2);
            sendObj.append('maxInterval', $scope.page3table51tabl1maxTime);
            sendObj.append('minInterval', $scope.page3table51tabl1minTime);
            sendObj.append('devices', JSON.stringify(arr));
            sendObj.append('allGroup', $scope.allGroup);
            sendObj.append('topGroup', $scope.topGroup);

            //----------------------------对应参数-------------------
            // sendObj.append('noTopGroup', $scope.noTopGroup);
            sendObj.append('groupNum', $scope.groupNum);
            sendObj.append('allNum', $scope.allNum)
            $http({
                method: 'POST',
                url: $rootScope.link + "/wechatPlus/addFriendInClub",
                data: sendObj,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (response) {
                //上传成功的操作
                if (response.code == 200) {
                    $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;入群加好友任务添加成功');
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

                    $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;入群加好友任务添加失败，请重试并检查设备连接');
                    setTimeout(function () {
                        $('.page1-alert-danger').hide(300)
                    }, 2000)
                }
            });
        }
    };
    /*--------------------------------------微信群加人完结----------------------------------------------------------*/
}
]);
