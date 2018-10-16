app.controller('page7C',["$rootScope","$scope","$location","$anchorScroll","$http",function ($rootScope, $scope, $location, $anchorScroll, $http) {
    $rootScope.getAllFalse();
    $rootScope.activeSeven = true;
    $rootScope.navPartThree = true;
    $rootScope.isScreenPage = false;
    //配置策略
    // $scope.timeInterval = 5;
    $scope.upFile=''
    $scope.sayHello = '您好！很高兴认识您！';
    $scope.sendAllButton = false;
    $scope.addPeople = 1;
    $scope.addPeopleCount = 1;
    $scope.maxTime=10;
    $scope.minTime=1;
    $scope.addPeopleOne = function () {
        $scope.addPeople = 1;
        $scope.assRadioChoose = false;
    };
    $scope.addPeopleTwo = function () {
        $scope.addPeople = 0;
        $scope.assRadioChoose = true;
    };




    // ====================  导入话术文件  ==================
    var selectVal = 1
    $('.clickSelect').change(function () {
        selectVal = $(this).val();
        if (selectVal == 1) {
            // $scope.sayHello = '您好！很高兴认识您！';
            $('.page9-say-hello').html('');
            $('.page9-say-hello').show();
            $('.clickAddText').hide()
            $('.emjoyOpen-page7').show()
            $scope.upFile=''
        } else {
            $('.page9-say-hello').hide();
            $('.page9-say-hello').html('');
            $('.clickAddText').show();
            $('.emjoyOpen-page7').hide();
            // $scope.sayHello=''
        }
    })
    $scope.clickAddText = function () {
        $('.page7-select').css("display", "block")
    }

    //-------------------emjoy表情相关-----------------
    //-------------------鼠标悬停表情列表打开----------
    $(".emjoyDiv-page7").mouseover(function () {
        $('.emjoyList-page7').css("display", "block")
    })
    //-------------------鼠标移除表情列表关闭----------
    $(".emjoyDiv-page7").mouseout(function () {
        $(".emjoyList-page7").css("display", "none")
    })
    //-----------判断值----------
    var panduanTure = 0;
    //-----------输入框焦点事件--------------
    $(function () {
        $("#FontAndEmjoy7").focus(function () {
            $(this).removeClass("flag1");
            // panduanTure = 1
        });
        $("#FontAndEmjoy7").blur(function () {
            // panduanTure=0
            $(this).addClass("flag1");
        });
    });
    //------------表情点击触发事件------------
    $(".emjoyList-page7").on("click", "img", function () {
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
            var runNing = $.inArray("FontAndEmjoy7", jilu);
            if (runNing != -1) {
                if (getevent.id != 'FontAndEmjoy7') {
                    $("#FontAndEmjoy7").addClass("flag1");
                    panduanTure = 0
                    if (getevent.className == 'gg') {
                        panduanTure = 1
                        $("#FontAndEmjoy7").removeClass("flag1");
                        if (jilu[i - 1] == 'FontAndEmjoy7') {
                            panduanTure = 1
                            $("#FontAndEmjoy7").removeClass("flag1");
                            if (jilu[i - 1] == getevent.id) {
                                panduanTure = 1
                                $("#FontAndEmjoy7").removeClass("flag1");
                            }
                        }
                    } else {
                        panduanTure = 0
                        $("#FontAndEmjoy7").addClass("flag1");
                    }
                } else {
                    panduanTure = 1
                    $("#FontAndEmjoy7").removeClass("flag1");
                }
            } else {
            }
            //除非点了那个插入html的按钮 其他时候必须要执行getFocus来更新最后失去焦点的div
        }
    })

    function insertHTML(html) {
        var dthis = $("#FontAndEmjoy7")[0];//要插入内容的某个div,在标准浏览器中 无需这句话
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



    $(".FontAndEmjoy7").html('');
    $scope.sendAll = function () {
        var saySomething = $(".FontAndEmjoy7").html();
        for (var i = 0, arr = []; i < $('.new-wx-equip-input7').length; i++) {
            if ($('.new-wx-equip-input7').eq(i).prop('checked')) {
                arr.push($('.new-wx-equip-input7').eq(i).parent().next().attr('title'));
            }
        }
      if (arr.length == 0) {
            alert('请勾选需要操作的设备！');
        }
        else if(saySomething.length == 0 && typeof($scope.upFile) == "string"){
          alert('请输入打招呼用语或选择话术文件！');
            // console.log($scope.upFile)
            // console.log($scope.sayHello)
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
            sendObj.append('devices', JSON.stringify(arr));
            sendObj.append('file', $scope.upFile);
            sendObj.append('msg', saySomething);
            sendObj.append('strategy', $scope.addPeople);
            sendObj.append('count', $scope.addPeopleCount);
            sendObj.append('contactList', JSON.stringify($scope.assList1));
            sendObj.append('contactList2', JSON.stringify($scope.assList2));
            sendObj.append('maxInterval',$scope.maxTime );
            sendObj.append('minInterval',$scope.minTime );
            $http({
                method: 'POST',
                url: $rootScope.link + "/wechatPlus/addFriendDirect",
                data: sendObj,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (response) {
                //上传成功的操作
                if (response.code == 200) {
                    alert('任务添加成功!');
                    $location.hash('page-top7');
                    $anchorScroll();
                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
                        if (data.code == 200) {
                            $rootScope.taskList = data.data;
                            $rootScope.taskAll = true;
                            $rootScope.taskDoing = false;
                            $rootScope.taskWait = false;
                            $rootScope.taskDown = false;
                            $rootScope.newBell = true;
                        }else {
                            alert(data.msg);
                        }
                    });
                }else {
                    alert(response.msg);
                }
            });
        }
    };
}]);
