app.controller('page9C', ["$rootScope", "$scope", "$location", "$anchorScroll", "$http", "$timeout", function ($rootScope, $scope, $location, $anchorScroll, $http, $timeout) {
    $rootScope.getAllFalse();
    $rootScope.activeNine = true;
    $rootScope.navPartThree = true;
    $rootScope.isScreenPage = false;

    $timeout(function () {
        $http.get($rootScope.link + '/wechat/getWechatsByDevice?devices=' + JSON.stringify($rootScope.moArray) + '&pageNo=1&pageSize=6').success(function (data) {
            if (data.code == 200) {
                $rootScope.MemberList9 = data.data.content;
                $('#pages9').Page({
                    totalPages: data.data.totalPages,//分页总数
                    liNums: 5,//分页的数字按钮数(建议取奇数)
                    activeClass: 'activP', //active 类样式定义
                    callBack: function (page) {
                        $http.get($rootScope.link + '/wechat/getWechatsByDevice?devices=' + JSON.stringify($rootScope.moArray) + '&pageNo=' + page + '&pageSize=6').success(function (data) {
                            $rootScope.MemberList9 = data.data.content;
                        })
                    }
                });
            } else {
                alert(data.msg);
            }
        });
    }, 500);
    //配置
    $scope.countNumber = 5;
    $scope.timeInterval = 5;
    $scope.maxTime = 10;
    $scope.minTime = 1;
    $scope.upFile = ''
    $scope.allGroup = 0
    $scope.topGroup = 0;
    // $scope.noTopGroup = 0;
    $scope.groupNum = 5;
    $scope.allNum = 0;
    $scope.panduan = 0;
    //====================  导入话术文件  ==================
    var selectVal = 1;
    var selectVal1 = 0;
    $('.clickSelect').change(function () {
        selectVal = $(this).val();
        if (selectVal == 1) {
            $('.page9-say-hello').html('');
            $('.page9-say-hello').show();
            $('.clickAddText').hide()
            $('.emjoyOpen-page9').show()
            $scope.upFile = ''
            // $scope.sayHello = '您好！很高兴认识您！';
        } else {
            $('.page9-say-hello').hide();
            $('.page9-say-hello').html('');
            $('.clickAddText').show();
            $('.emjoyOpen-page9').hide();
            // $scope.sayHello = ''
        }
    })
    $('.come-type').change(function () {
        selectVal1 = $(this).val();
        if (selectVal1 == 1) {
            $(".writeNum").hide()
            $scope.allGroup = 1
            $scope.topGroup = 0;
            $scope.groupNum = 0;
            $scope.noTopGroup = 0
            $scope.panduan = 1;
            $scope.allNum = 0;
        } else if (selectVal1 == 0) {
            $(".writeNum").hide()
            $scope.allGroup = 0
            $scope.topGroup = 0;
            $scope.groupNum = 0;
            $scope.panduan = 0;
            $scope.noTopGroup = 0
            $scope.allNum = 0;
        } else if (selectVal1 == 2) {
            $(".writeNum").hide()
            $scope.panduan = 1;
            $scope.allGroup = 0
            $scope.topGroup = 1;
            $scope.groupNum = 0;
            $scope.noTopGroup = 0
            $scope.allNum = 0;
        } else if (selectVal1 == 3) {
            $scope.allGroup = 0
            $scope.panduan = 1;
            $scope.topGroup = 0;
            $scope.groupNum = 5;
            $scope.noTopGroup = 0
            $scope.allNum = 1
            $(".writeNum").show()
        } else if (selectVal1 == 4) {
            $(".writeNum").hide()
            // $scope.noTopGroup = 1
            $scope.allGroup = 0
            $scope.topGroup = 2;
            $scope.groupNum = 0;
            $scope.panduan = 1;
            $scope.allNum = 0;

        }
    })
    // $scope.page9sayhello = true
    // $scope.select = false;
    // $scope.entersay=false
    // $scope.selectone = function () {
    //     $scope.page9sayhello = true
    //     $scope.select = false;
    //     $scope.entersay=false
    //     console.log('1')
    //
    // }
    // $scope.selecteverone = function () {
    //     $scope.page9sayhello = false
    //     $scope.entersay=true
    //     $scope.select = true;
    //
    // }

    // $(".page7-select").change(function () {
    //     var selectText = $(".page7-select option:selected").text();
    //     $(".page9-say-hello").val(selectText)
    //     $scope.sayHello = selectText
    //     console.log($scope.sayHello)
    //
    // })
//
// setInterval(function () {
//     console.log($scope.allGroup,"all" );
//     console.log($scope.topGroup,"top" );
// },1000)
//-------------------emjoy表情相关-----------------
    //-------------------鼠标悬停表情列表打开----------
    $(".emjoyDiv-page9").mouseover(function () {
        $('.emjoyList-page9').css("display", "block")
    })
    //-------------------鼠标移除表情列表关闭----------
    $(".emjoyDiv-page9").mouseout(function () {
        $(".emjoyList-page9").css("display", "none")
    })
    //-----------判断值----------
    var panduanTure = 0;
    //-----------输入框焦点事件--------------
    $(function () {
        $("#FontAndEmjoy9").focus(function () {
            $(this).removeClass("flag1");
            // panduanTure = 1
        });
        $("#FontAndEmjoy9").blur(function () {
            // panduanTure=0
            $(this).addClass("flag1");
        });
    });
    //------------表情点击触发事件------------
    $(".emjoyList-page9").on("click", "img", function () {
        if (panduanTure == 1) {
            // $("#FontAndEmjoy").removeClass("flag");
            var imgAlt = $(this).attr("alt")
            var imgSrc = $(this).attr("src")
            insertHTML("<img src='" + imgSrc + "'alt='" + imgAlt + "'>");
        }

    })
    //再加入一个全屏事件
    var jilu = [];
    var runNing = false
    var i = -1;
    $(window).click(function (e) {
        i++;
        if (window.getSelection) {
            var getevent = e.srcElement ? e.srcElement : e.target;//不要告诉我不知道这句的意思
            jilu.push(getevent.id)
            // console.log(jilu)
            // console.log(i)
            // for (var j=0;j<jilu.length;j++){
            //     if(jilu[j]=="FontAndEmjoy"){
            //         runNing=true
            //     }else {
            //         panduanTure=0
            //         runNing=false
            //     }
            // }
            var runNing = $.inArray("FontAndEmjoy9", jilu);
            if (runNing != -1) {
                if (getevent.id != 'FontAndEmjoy9') {
                    $("#FontAndEmjoy9").addClass("flag1");
                    panduanTure = 0
                    if (getevent.className == 'gg') {
                        panduanTure = 1
                        $("#FontAndEmjoy9").removeClass("flag1");
                        if (jilu[i - 1] == 'FontAndEmjoy9') {
                            panduanTure = 1
                            $("#FontAndEmjoy9").removeClass("flag1");
                            if (jilu[i - 1] == getevent.id) {
                                panduanTure = 1
                                $("#FontAndEmjoy9").removeClass("flag1");
                            }
                        }
                    } else {
                        panduanTure = 0
                        $("#FontAndEmjoy9").addClass("flag1");
                    }
                } else {
                    panduanTure = 1
                    $("#FontAndEmjoy9").removeClass("flag1");
                }
            } else {
            }
            //除非点了那个插入html的按钮 其他时候必须要执行getFocus来更新最后失去焦点的div
        }
    })

    function insertHTML(html) {
        var dthis = $("#FontAndEmjoy9")[0];//要插入内容的某个div,在标准浏览器中 无需这句话
        //dthis.focus();a
        var sel, range;
        // console.log($(dthis).hasClass("flag"));
        if ($(dthis).hasClass("flag1")) {

        } else {
            $(dthis).html(dthis.innerHTML + html);
            return;
        }
        if (window.getSelection) {
            // IE9 and non-IE
            sel = window.getSelection();
            if (sel.getRangeAt && sel.rangeCount) {
                range = sel.getRangeAt(0);
                range.deleteContents();
                var el = document.createElement('div');
                el.innerHTML = html;
                var frag = document.createDocumentFragment(), node, lastNode;
                while ((node = el.firstChild)) {
                    lastNode = frag.appendChild(node);
                }

                range.insertNode(frag);
                if (lastNode) {
                    range = range.cloneRange();
                    range.setStartAfter(lastNode);
                    range.collapse(true);
                    sel.removeAllRanges();
                    sel.addRange(range);
                }
            }
        }
        else if (document.selection && document.selection.type != 'Control') {
            $(dthis).focus(); //在非标准浏览器中 要先让你需要插入html的div 获得焦点
            ierange = document.selection.createRange();//获取光标位置
            ierange.pasteHTML(html);    //在光标位置插入html 如果只是插入text 则就是fus.text="..."
            $(dthis).focus();

        }
    }
    $(".FontAndEmjoy9").html('');
    $scope.sendAll = function () {
        var saySomething = $(".FontAndEmjoy9").html();
        for (var i = 0, arr = []; i < $('.new-wx-equip-input9').length; i++) {
            if ($('.new-wx-equip-input9').eq(i).prop('checked')) {
                arr.push($('.new-wx-equip-input9').eq(i).parent().next().attr('title'));
            }
        }
        if (arr.length == 0) {
            alert('请勾选需要操作的微信群组!');
        } else if ($scope.countNumber == '') {
            alert('请填写添加的数量!');
        } else if ($scope.timeInterval == '') {
            alert('请填写时间间隔!');
        } else if (saySomething.length == 0 && typeof($scope.upFile) == "string") {
            alert('请输入打招呼用语或选择话术文件！');
        }
        else if ($scope.panduan == 0) {
            alert('请选择加好友方式')
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
            var sendObj = new FormData();
            sendObj.append('file', $scope.upFile);
            sendObj.append('msg', saySomething);
            sendObj.append('addNum', $scope.countNumber);
            sendObj.append('maxInterval', $scope.maxTime);
            sendObj.append('minInterval', $scope.minTime);
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
                    alert('任务添加成功!');
                    $location.hash('page-top9');
                    $anchorScroll();
                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
                        if (data.code == 200) {
                            $rootScope.taskList = data.data;
                            $rootScope.taskAll = true;
                            $rootScope.taskDoing = false;
                            $rootScope.taskWait = false;
                            $rootScope.taskDown = false;
                            $rootScope.newBell = true;
                        } else {
                            alert(data.msg)
                        }
                    });
                } else {
                    alert(response.msg);
                }
            });
        }
    };
}]);
