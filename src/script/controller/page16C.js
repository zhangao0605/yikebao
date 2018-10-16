app.controller('page16C', ["$rootScope", "$scope", "$location", "$anchorScroll", "$http", function ($rootScope, $scope, $location, $anchorScroll, $http) {
    $rootScope.getAllFalse();
    $rootScope.activeSixteen = true;
    $rootScope.navPartThree = true;
    $rootScope.isScreenPage = false;
    //锚点的跳转 回到导航标题处
    $scope.getNav = function () {
        $location.hash('nav-bottom13');
        $anchorScroll();
    };
    $scope.sendObj = new FormData();
    $scope.picArr = [];
    //配置
    // $scope.saySomething = '';
    // $scope.timeInterval = 5;
    $scope.maxTime = 10;
    $scope.minTime = 1;
    $scope.pic = '';
    $scope.sendNum = 10;
    $scope.isAll = 0;
    $('.page16-choose').change(function () {
        selectVal = $(this).val();
        if (selectVal == 1) {
            $(".writeNu").hide()
            $scope.isAll = 1

        } else if (selectVal == 2) {
            $scope.isAll = 0
            $(".writeNu").show()

        }
        else if (selectVal = 0) {
            $scope.isAll = 0
            $(".writeNu").hide()

        }
        else {
            $scope.isAll = 0
            $(".writeNu").hide()

        }
    })





    //-------------------emjoy表情相关-----------------
    //-------------------鼠标悬停表情列表打开----------
    $(".emjoyDiv-page16").mouseover(function () {
        $('.emjoyList-page16').css("display", "block")
    })
    //-------------------鼠标移除表情列表关闭----------
    $(".emjoyDiv-page16").mouseout(function () {
        $(".emjoyList-page16").css("display", "none")
    })
    //-----------判断值----------
    var panduanTure = 0;
    //-----------输入框焦点事件--------------
    $(function () {
        $("#FontAndEmjoy").focus(function () {
            $(this).removeClass("flag");
            // panduanTure = 1
        });
        $("#FontAndEmjoy").blur(function () {
            // panduanTure=0
            $(this).addClass("flag");
        });
    });
    //------------表情点击触发事件------------
    $(".emjoyList-page16").on("click", "img", function () {
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
            var runNing = $.inArray("FontAndEmjoy", jilu);
            if (runNing != -1) {
                if (getevent.id != 'FontAndEmjoy') {
                    $("#FontAndEmjoy").addClass("flag");
                    panduanTure = 0
                    if (getevent.className == 'gg') {
                        panduanTure = 1
                        $("#FontAndEmjoy").removeClass("flag");
                        if (jilu[i - 1] == 'FontAndEmjoy') {
                            panduanTure = 1
                            $("#FontAndEmjoy").removeClass("flag");
                            if (jilu[i - 1] == getevent.id) {
                                panduanTure = 1
                                $("#FontAndEmjoy").removeClass("flag");
                            }
                        }
                    } else {
                        panduanTure = 0
                        $("#FontAndEmjoy").addClass("flag");
                    }
                } else {
                    panduanTure = 1
                    $("#FontAndEmjoy").removeClass("flag");
                }
            } else {
            }
            //除非点了那个插入html的按钮 其他时候必须要执行getFocus来更新最后失去焦点的div
        }
    })

    function insertHTML(html) {
        var dthis = $("#FontAndEmjoy")[0];//要插入内容的某个div,在标准浏览器中 无需这句话
        //dthis.focus();a
        var sel, range;
        // console.log($(dthis).hasClass("flag"));
        if ($(dthis).hasClass("flag")) {

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
        var saySomething = $(".FontAndEmjoy").html();
        for (var i = 0, arr = []; i < $('.new-wx-equip-input16').length; i++) {
            if ($('.new-wx-equip-input16').eq(i).prop('checked')) {
                arr.push($('.new-wx-equip-input16').eq(i).parent().next().attr('title'));
            }
        }
        if (arr.length == 0) {
            alert('请勾选需要操作的群组！');
        } else if (saySomething == '') {
            alert('请输入要发送的消息！');
        }
        else {
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

            sendObj.append('msg', saySomething);
            // sendObj.append('isAll', $scope.isAll);
            // sendObj.append('sendNum', $scope.sendNum);
            sendObj.append('devices', JSON.stringify(arr));
                sendObj.append('pic', $scope.pic);
            sendObj.append('maxInterval', $scope.maxTime);
            sendObj.append('minInterval', $scope.minTime);
            $http({
                method: 'POST',
                url: $rootScope.link + "/operate/sendMsg",
                data: sendObj,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (response) {
                //上传成功的操作
                if (response.code == 200) {
                    alert('任务添加成功!');
                    $location.hash('page-top16');
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

}]);
