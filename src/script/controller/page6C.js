app.controller('page6C', ["$rootScope", "$scope", "$http", "$location", "$anchorScroll", function ($rootScope, $scope, $http, $location, $anchorScroll) {
    $rootScope.getAllFalse();
    $rootScope.activeSix = true;
    $rootScope.navPartThree = true;
    $rootScope.isScreenPage = false;
    //配置策略
    $scope.sendAllButton = true;
    // $scope.timeInterval = 5;
    $scope.maxTime = 10;
    $scope.addPeopleCount = 1;
    $scope.minTime = 1;
    $scope.reoples = 5;
    // $scope.sayHello = '您好!很高兴认识您!';
    $scope.isClear = 0;
    $scope.upFile = ''
    $scope.clear = function ($event) {
        if ($event.target.checked) {
            $scope.isClear = 1;
        } else {
            $scope.isClear = 0;
        }
    };

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
    //-------------------emjoy表情相关-----------------
    //-------------------鼠标悬停表情列表打开----------
    $(".emjoyDiv-page6").mouseover(function () {
        $('.emjoyList-page6').css("display", "block")
    })
    //-------------------鼠标移除表情列表关闭----------
    $(".emjoyDiv-page6").mouseout(function () {
        $(".emjoyList-page6").css("display", "none")
    })
    //-----------判断值----------
    var panduanTure = 0;
    //-----------输入框焦点事件--------------
    $(function () {
        $("#FontAndEmjoy6").focus(function () {
            $(this).removeClass("flag1");
            // panduanTure = 1
        });
        $("#FontAndEmjoy6").blur(function () {
            // panduanTure=0
            $(this).addClass("flag1");
        });
    });
    //------------表情点击触发事件------------
    $(".emjoyList-page6").on("click", "img", function () {
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
            var runNing = $.inArray("FontAndEmjoy6", jilu);
            if (runNing != -1) {
                if (getevent.id != 'FontAndEmjoy6') {
                    $("#FontAndEmjoy6").addClass("flag1");
                    panduanTure = 0
                    if (getevent.className == 'gg') {
                        panduanTure = 1
                        $("#FontAndEmjoy6").removeClass("flag1");
                        if (jilu[i - 1] == 'FontAndEmjoy6') {
                            panduanTure = 1
                            $("#FontAndEmjoy6").removeClass("flag1");
                            if (jilu[i - 1] == getevent.id) {
                                panduanTure = 1
                                $("#FontAndEmjoy6").removeClass("flag1");
                            }
                        }
                    } else {
                        panduanTure = 0
                        $("#FontAndEmjoy6").addClass("flag1");
                    }
                } else {
                    panduanTure = 1
                    $("#FontAndEmjoy6").removeClass("flag1");
                }
            } else {
            }
            //除非点了那个插入html的按钮 其他时候必须要执行getFocus来更新最后失去焦点的div
        }
    })

    function insertHTML(html) {
        var dthis = $("#FontAndEmjoy6")[0];//要插入内容的某个div,在标准浏览器中 无需这句话
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


    $scope.sendAll = function () {
        var saySomething = $(".FontAndEmjoy6").html();
        for (var i = 0, arr = []; i < $('.new-wx-equip-input').length; i++) {
            if ($('.new-wx-equip-input').eq(i).prop('checked')) {
                arr.push($('.new-wx-equip-input').eq(i).parent().next().attr('title'));
            }
        }
        // console.log(saySomething)
        // console.log(saySomething.length)
        if (arr.length == 0) {
            alert('请勾选需要操作的设备！');
        } else {
            var reger = /<img.*?(?:>|\/>)/g;
            var srcReg = /alt=[\'\"]?([^\'\"]*)[\'\"]?/i;
            var arr1 = saySomething.match(reger)
            if (arr1 == null) {

            } else {
                var tt = []
                console.log(arr1)
                for (var i = 0; i < arr1.length; i++) {
                    var src = arr1[i].match(srcReg);
                    if (src[1]) {
                        tt.push(src[1])
                    }
                }
                var result = saySomething.match(/<img.*?(?:>|\/>)/g);

                // console.log(result)
                for (var i = 0; i < result.length; i++) {
                    saySomething = saySomething.replace(result[i], tt[i])
                }
            }
            var sendObj = new FormData();
            sendObj.append('devices', JSON.stringify(arr));
            // sendObj.append('interval', $scope.timeInterval);
            /*sendObj.append('people', $scope.peoples);*/
            sendObj.append('maxInterval', $scope.maxTime);
            sendObj.append('minInterval', $scope.minTime);
            sendObj.append('addNum', $scope.addPeopleCount);
            sendObj.append('file', $scope.upFile);
            sendObj.append('msg', saySomething);
            $http({
                method: 'POST',
                url: $rootScope.link + "/wechatPlus/addFriendsFromContact",
                data: sendObj,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (response) {
                //上传成功的操作
                if (response.code == 200) {
                    alert('任务添加成功!');
                    $location.hash('page-top6');
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
                            alert(data.msg);
                        }
                    });
                } else {
                    alert(response.msg);
                }
            });
        }
    };
    //加人策略
    $scope.assRadioChoose = false;
    $scope.addPeople = 1;

    $scope.getAssHide = function () {
        $scope.assRadioChoose = false;
        $scope.addPeople = 1;
    };
    $scope.getAssShow = function () {
        $scope.assRadioChoose = true;
        $scope.addPeople = 0;
    }
}]);
