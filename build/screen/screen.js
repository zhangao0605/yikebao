"use strict";
const BLANK_IMG = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';

var app = angular.module('myApp', [])
/*=======================将一个已经存在的变量值注册为服务，并将其注入到应用的其他部分中==================*/
    .constant('URL_BASE', '/wgcs')
    .service('apiService', ['URL_BASE', function (URL_BASE) {
        this.urlBase = URL_BASE;
        /*============== 获取所有分组出分组信息 =========*/
        this.getGroupDataByStatus = () => `${this.urlBase}/group/getGroupDataByStatus`;

        /*============== 鼠标按下后 =============*/
        this.pressDownDeviceScreen = (devices, x, y) =>
            `${this.urlBase}/device/pressDownDeviceScreen?devices=${devices}&x=${x}&y=${y}`;

        /*============== 鼠标移动过程中 ==========*/
        this.pressMoveDeviceScreen = (devices, xs, ys, xe, ye) =>
            `${this.urlBase}/device/pressMoveDeviceScreen?devices=${devices}&xs=${xs}&ys=${ys}&xe=${xe}&ye=${ye}`;

        /*============== 鼠标长时间按下松开后触发 ==============*/
        this.pressLeaveDeviceScreen = (devices) =>
            `${this.urlBase}/device/pressLeaveDeviceScreen?devices=${devices}`;

        /*============== 触摸屏幕 =============*/
        this.touchDeviceScreen = (devices, tp, x, y) =>
            `${this.urlBase}/device/touchDeviceScreen?devices=${devices}&touchPort=${tp}&x=${x}&y=${y}`;

        /*============== 鼠标短时间按下松开后触发 =============*/
        this.slideDeviceScreen = (devices, tp, xs, ys, xe, ye) =>
            `${this.urlBase}/device/slideDeviceScreen?devices=${devices}&touchPort=${tp}&xs=${xs}&ys=${ys}&xe=${xe}&ye=${ye}`;

        this.showDeviceScreen = (devices) => `${this.urlBase}/device/showDeviceScreen?devices=${devices}`;

        /*============== 返回按钮 =============*/
        this.returnBack = (devices) => `${this.urlBase}/device/returnBack?devices=${devices}`;

        /*============== 模型home点击手机返回主页面 ============*/
        this.returnHome = (devices) => `${this.urlBase}/device/returnHome?devices=${devices}`;

        /*============== 点击返回index页面获取路径 ===================*/
        this.backHome = (devices) => `${this.urlBase}/device/backHome?devices=${devices}`;

        /*============== 输入文字确定后访问该路径=====================*/
        this.printMsg = (devices, msg) => `${this.urlBase}/device/printMsg?devices=${devices}&msg=${msg}`;

        /*============= 刷新手机状态时访问该路径 ====================*/
        this.clear = device => `${this.urlBase}/device/clear?device=${device}`;

        /*============ 打开手机模型 =========================*/
        this.openScreen = () => `${this.urlBase}/device/openScreen`;
        // Post Api
        /*============ 打开手机功能访问路径 =================*/
        this.open = () => `${this.urlBase}/device/open`;

        /*============ 关闭手机功能访问路径 =================*/
        this.close = () => `${this.urlBase}/device/close`;

        /*============ 删除文字 =================*/
        this.delMsg = (devices) => `${this.urlBase}/device/delMsg?devices=${devices}`;
        /*============ 手机触发任务栏 =================*/
        this.pressHome = (devices) => `${this.urlBase}/device/pressHome?devices=${devices}`;

    }])
    // app.run(["$rootScope", "$location", "$http", "$timeout", function ($rootScope, $location, $http, $timeout) {
    //
    // }])
    .service('screenService', ['$rootScope', '$http', 'apiService', function ($rootScope, $http, apiService) {
        var socketArr = [];
        let copyScreen = (id, url, device, tp, w, h) => {
            let canvas = document.getElementById(id), g = canvas.getContext('2d');
            let xs, ys, xe, ye;
            let checkedArr = [];
            // ==================鼠标长按计时器==================
            let timer;
            let longTouchFlag = false;
            //===================鼠标按下======================
            canvas.addEventListener('mousedown', function (e) {
                /*==================layerX：相对当前坐标系的border左上角开始的坐标=================*/
                if (e.layerX || e.layerX === 0) {
                    xs = e.layerX;
                    ys = e.layerY;
                } else if (e.offsetX || e.offsetX === 0) { // Opera
                    xs = e.offsetX;
                    ys = e.offsetY;
                }
                checkedArr = [];
                for (let x = 0; x < $('.screens-list li input').length; x++) {
                    if ($('.screens-list li input').eq(x).prop('checked')) {
                        checkedArr.push($('.screens-list li input').eq(x).attr('mess_id'));
                    }
                }
                checkedArr.push(device);

                // 设定计时器执行函数，setTimeout只执行一次，setInterval每个一段时间执行一次
                timer = setTimeout(function () {
                    longTouchFlag = true;
                    $http.get(apiService.pressDownDeviceScreen(JSON.stringify(checkedArr), parseInt(xs * (w / 228)), parseInt(ys * (h / 400)))).success(function () {
                    });
                }, 1000);

            }, false);
            //===================鼠标移动======================
            canvas.addEventListener('mousemove', function (e) {
                if (e.layerX || e.layerX === 0) {
                    xe = e.layerX;
                    ye = e.layerY;
                } else if (e.offsetX || e.offsetX === 0) { // Opera
                    xe = e.offsetX;
                    ye = e.offsetY;
                }
                if (longTouchFlag === true) {
                    $http.get(apiService.pressMoveDeviceScreen(JSON.stringify(checkedArr), parseInt(xs * (w / 228)), parseInt(ys * (h / 400)), parseInt(xe * (w / 228)), parseInt(ye * (h / 400)))).success(() => {
                        xs = xe;
                        ys = ye;
                    });
                }
            });
            //===================鼠标松开（abs绝对值）======================
            canvas.addEventListener('mouseup', function (e) {
                if (e.layerX || e.layerX === 0) {
                    xe = e.layerX;
                    ye = e.layerY;
                } else if (e.offsetX || e.offsetX === 0) { // Opera
                    xe = e.offsetX;
                    ye = e.offsetY;
                }
                clearTimeout(timer);
                if (longTouchFlag === true) {
                    longTouchFlag = false;
                    $http.get(apiService.pressLeaveDeviceScreen(JSON.stringify(checkedArr))).success(data => {
                    });
                } else if (Math.abs(xe - xs) < 10 && Math.abs(ye - ys) < 10) {
                    $http.get(apiService.touchDeviceScreen(JSON.stringify(checkedArr), tp,
                        parseInt(xs * (w / 228)), parseInt(ys * (h / 400)))
                    ).success(data => {
                    });
                } else {
                    $http.get(apiService.slideDeviceScreen(JSON.stringify(checkedArr), tp, parseInt(xs * (w / 228)), parseInt(ys * (h / 400)), parseInt(xe * (w / 228)), parseInt(ye * (h / 400)))).success(data => {
                    });
                }
            }, false);
            var ws = new WebSocket('ws://' + url);
            socketArr.push(ws);

            var browser;
            var userAgent = navigator.userAgent;
            if (userAgent.indexOf("Chrome") > -1) {
                browser = "chrome";
            } else {
                browser = "firefox";
            }
            let URL = window.URL || window.webkitURL;
            var imgUrl;

            let img = new Image();
            img.src = BLANK_IMG;
            img.onload = function () {
                canvas.width = img.width;
                canvas.height = img.height;
                g.drawImage(img, 0, 0);
                if (browser == "chrome") {
                    URL.revokeObjectURL(imgUrl);
                }
            };
            img.onerror = function () {
                img.src = BLANK_IMG;
            };

            ws.onmessage = function (message) {
                if (browser == "chrome") {
                    let blob = new Blob([message.data], {type: 'image/jpeg'});
                    imgUrl = URL.createObjectURL(blob);
                    blob = null;
                    img.src = imgUrl;
                } else {
                    img.src = 'data:image/jpg;base64,' + message.data;
                }
            };
            ws.onopen = function () {
                ws.send(browser);
            };
            ws.onclose = function () {
            };

            ws.onerror = function () {
                console.log('onerror', arguments)
            };
        };
        this.clearsocket = () => {
            for (var i = 0; i < socketArr.length; i++) {
                socketArr[i].close();
                delete socketArr[i];
            }
            socketArr = [];
        }
        /*====================动态创建手机模型===================*/
        this.displayScreen = () => {
            this.clearsocket();
            var lastDevices = localStorage.getItem('devices') || '';
            if (lastDevices) {
                lastDevices = lastDevices.split(',');
            }
            if (lastDevices.length > 0) {
                $('.screen-curtain').hide();
                $http.get(apiService.showDeviceScreen(JSON.stringify(lastDevices))).success(function (data) {
                    if (data.code == 200) {
                        $('.screens-list').empty();
                        for (var x = 0; x < data.data.length; x++) {
                            var li = '<li class="canvas-li">' +
                                '<h6>同屏展示失败</h6>' +

                                '<h2><input class="twoCre" data="' + data.data[x].device + '" type="text" value=' + data.data[x].rank + ' readonly="true"/></h2>' + '<span class="get-write"></span>' + '<span class="get-new"></span>' + '<div class="write-in-box-tel">\n' +
                                '            <textarea placeholder="&nbsp;&nbsp;&nbsp; 请输入内容..." class="textareaVal"></textarea>\n' +
                                '            <button class="write-in-cancel">取消</button>\n' +
                                '            <button class="write-in-sure" mess_id=' + data.data[x].device + '>确认</button>\n' +
                                '        </div>' + '<canvas id="canvas' + x + '"></canvas><div class="screens-operation"><span class="get-back"></span><span class="get-search" data="' + data.data[x].device + '"   ng-click="searchtel(x)"><img src="icon/search1.png"></span><span class="get-home"></span> <span class="get-delone"><img src="icon/delone1.png"> </span> <span class="get-check"><input type="checkbox" mess_id="' + data.data[x].device + '"></span></div></li>'
                            $('.screens-list').append(li);
                            var assDevice = data.data[x].device;
                            var touchPort = data.data[x].touchStart;
                            var assId = 'canvas' + x;
                            var assPort = data.data[x].ip + ':8080/wgcs/ws/' + data.data[x].inputStart + '/' + data.data[x].device;
                            //console.log(data.data[x].wmSize)
                            var equipWidth = data.data[x].wmSize.split('x')[0];
                            var equipHeight = data.data[x].wmSize.split('x')[1];
                            $('.canvas-li').css('margin', '0 ' + screensMargin + 'px 5px');
                            copyScreen(assId, assPort, assDevice, touchPort, equipWidth, equipHeight);
                        }


                        //点击输入内容
                        $(".get-write").click(function () {
                            $(this).next().next().css("display", "block")

                        })
                        $(".write-in-cancel").click(function () {
                            $(this).parent().css("display", "none")
                        })
                        var writeSomething = ''
                        $(".write-in-sure").click(function () {
                            for (var i = 0, arr = []; i < $('.screens-list input').length; i++) {
                                if ($('.screens-list input').eq(i).prop('checked')) {
                                    arr.push($('.screens-list input').eq(i).attr('mess_id'));
                                }
                            }
                            var arr = []
                            arr.push($(this).attr('mess_id'));
                            writeSomething = $(this).siblings('.textareaVal').val()
                            if (writeSomething == '') {
                                alert('请输入文字!');
                            }
                            else {
                                $http.get(apiService.printMsg(JSON.stringify(arr), writeSomething)).success(function (data) {
                                    if (data.code == 200) {
                                    }
                                });
                            }
                            $(".write-in-sure").siblings('.textareaVal').val('')
                        });


                        /*=========================点击改变编号=====================*/
                        var last = ""
                        $(".twoCre").click(function () {
                            $(this).removeAttr('readonly');
                            last = $(this).val()
                        })
                        $(".twoCre").blur(function () {
                            if ($(this).val() == last) {
                                // console.log("121")
                            } else {
                                if ($(this).val() == '') {
                                    alert('请填写需要保存的设备编号！');
                                } else {
                                    var ThisVal = $(this).val()

                                    var deltlCon = '';
                                    var deltlName = $(this).attr('data');
                                    /*================== 获取所有手机信息 ==============*/
                                    $http.get('/wgcs/device/getAllDevice?pageNo=1&pageSize=15').success(function (data) {
                                        /*================= 得到手机编号 =================*/
                                        // deltlCon = data.data.content[deltlName].device
                                        $http.get('/wgcs/device/editRank?device=' + deltlName + '&rank=' + ThisVal).success(function (data) {
                                            if (data.code == 200) {
                                                alert('保存成功！');
                                                $http.get('/wgcs/group/getGroupData').success(function (data) {
                                                    $rootScope.groupNames = data.data;
                                                    $rootScope.groupNumbers = data.data.length;
                                                    $rootScope.pageZhe = true;
                                                    //========================将所有分组名保存 以及设备的总数 以及分组的id==================
                                                    $rootScope.AssGroupNames = [];
                                                    $rootScope.allEquipIds = [];
                                                    $rootScope.equipCounts = 0;
                                                    for (var j = 0; j < data.data.length; j++) {
                                                        $rootScope.AssGroupNames.push(data.data[j].group.name);
                                                        $rootScope.allEquipIds.push(data.data[j].group.id);
                                                        $rootScope.equipCounts += data.data[j].count;
                                                    }
                                                    //======================将所有分组下的人数保存===========================
                                                    for (var i = 0; i < data.data.length; i++) {
                                                        if (data.data[i].count != 0) {
                                                            $rootScope.pageZhe = false;
                                                            break;
                                                        }
                                                    }
                                                    //=========================保留所有的设备总数===========================
                                                });
                                                $http.get('/wgcs/group/getGroupDataByStatus').success(function (data) {
                                                    if (data.code == 200) {
                                                        $rootScope.onlineGroupNames = data.data;
                                                        //保存默认加载的设备号
                                                        $rootScope.moArray = [];
                                                        for (var a = 0; a < data.data[0].deviceVos.length; a++) {
                                                            $rootScope.moArray.push(data.data[0].deviceVos[a].device);
                                                        }
                                                    }
                                                });
                                                $http.get('/wgcs/device/getAllDevice?pageNo=1&pageSize=15').success(function (data) {
                                                    if (data.code == 200) {
                                                        if (data.data.content.length == 0) {
                                                            scope.sweepBox = true;
                                                        } else {
                                                            $rootScope.DataList = data.data.content;
                                                        }
                                                    }
                                                });
                                                $(this).parent().parent().find('input').addClass('on').attr('readonly', 'readonly');
                                            } else {
                                                setTimeout(function () {
                                                    alert(data.msg);
                                                }, 1)
                                            }
                                        });
                                    })
                                }
                            }
                        })
                        /*=======================选中键点击=======================*/
                        $('.get-check input').click(function () {
                            if ($(this).prop('checked')) {
                                $(this).parent().addClass('on');
                            } else {
                                $(this).parent().removeClass('on');
                            }
                        });
                        /*=======================返回健点击=======================*/
                        $('.get-back').click(function () {
                            for (var i = 0, checkArr = []; i < $('.get-check input').length; i++) {
                                if ($('.get-check input').eq(i).prop('checked')) {
                                    checkArr.push($('.get-check input').eq(i).attr('mess_id'));
                                }
                            }
                            var device = $(this).next().next().next().next().find('input').attr('mess_id');
                            checkArr.push(device);
                            $http.get(apiService.returnBack(JSON.stringify(checkArr))).success(function () {
                            });


                        });
                        /*====================== 找到对应设备 =================*/
                        $(".get-search").click(function () {
                            var indextitle = 0;
                            var indexcon = '';
                            var deltlName = $(this).attr('data');
                            /*================== 获取所有手机信息 ==============*/
                            $http.get('/wgcs/device/getAllDevice?pageNo=1&pageSize=15').success(function (data) {
                                /*================= 得到手机编号 =================*/
                                // indexcon = data.data.content[indextitle].device
                                /*================= 查找接口拼接有关返回值（手机编号）==========*/
                                $http.get('/wgcs/device/showDifferent?device=' + deltlName).success(function (data) {
                                    if (data.code == 200) {
                                        alert("添加任务成功")
                                    } else {
                                        alert("添加任务失败")
                                    }
                                });
                            })
                        })
                        /*====================== 删除单个文字点击 =================*/
                        $(".get-delone").click(function () {
                            for (var i = 0, checkArr = []; i < $('.get-check input').length; i++) {
                                if ($('.get-check input').eq(i).prop('checked')) {
                                    checkArr.push($('.get-check input').eq(i).attr('mess_id'));
                                }
                            }
                            var device = $(this).next().find('input').attr('mess_id');
                            checkArr.push(device);
                            $http.get(apiService.delMsg(JSON.stringify(checkArr))).success(function (data) {

                                if (data.code == 200) {

                                } else {

                                }
                            });
                            //})
                        })
                        /*=======================home健点击=======================*/
                        var longTouchFlag = true;
                        var zanum = 0
                        var za = '';
                        let timer;
                        $(".get-home").mousedown(function () {
                            var myself = $(this)
                            timer = setTimeout(function () {
                                for (var i = 0, checkArr = []; i < $('.get-check input').length; i++) {
                                    if ($('.get-check input').eq(i).prop('checked')) {
                                        checkArr.push($('.get-check input').eq(i).attr('mess_id'));
                                    }
                                }
                                var device = myself.next().next().find('input').attr('mess_id');
                                checkArr.push(device);
                                $http.get(apiService.pressHome(JSON.stringify(checkArr))).success(function (data) {

                                })
                                zanum = 1;
                            }, 2000);

                        })
                        $(".get-home").mouseup(function () {
                            var telName = 0;
                            var telcon = '';
                            telName = $(this).parent().parent().index();
                            clearTimeout(timer);
                            if (zanum >= 1) {

                            } else {
                                for (var i = 0, checkArr = []; i < $('.get-check input').length; i++) {
                                    if ($('.get-check input').eq(i).prop('checked')) {
                                        checkArr.push($('.get-check input').eq(i).attr('mess_id'));
                                    }
                                }
                                var device = $(this).next().next().find('input').attr('mess_id');
                                checkArr.push(device);
                                $http.get(apiService.returnHome(JSON.stringify(checkArr))).success(function () {
                                });
                            }
                            zanum = 0;
                        })
                        var localDataza = localStorage.getItem('devices');
                        if (localDataza.length == 0) {

                            $rootScope.ShowSomeDevices = 0
                        }
                        else if (localDataza.length == 16) {
                            $rootScope.ShowSomeDevices = 1
                        } else {
                            var localData1za = localDataza.split(',')
                            $rootScope.ShowSomeDevices = localData1za.length;
                        }

                        /*=======================刷新键健点击=======================*/
                        $('.get-new').click(function () {
                            var device = $(this).next().next().next().find('input').attr('mess_id');
                            $http.get(apiService.clear(device)).success(function () {
                            });
                        });
                        var screensWidth = $('.screens').width();
                        var screensMargin;
                        if (screensWidth >= 1440) {
                            screensMargin = (screensWidth - 1440) / 12;
                        } else if (screensWidth < 1440 && screensWidth >= 1200) {
                            screensMargin = (screensWidth - 1200) / 10;
                        } else if (screensWidth < 1200) {
                            screensMargin = (screensWidth - 960) / 8;
                        }
                        screensMargin = screensMargin - 0.5;
                        $('.canvas-li').css('margin', '0 ' + screensMargin + 'px 5px');
                    } else {
                        alert(data.msg);
                    }
                })
            } else {
                /*=======================.screens-list为空没有手机模型======================*/
                $('.screens-list').empty();
                $('.screen-curtain').show();
            }
        };

        //===========================设置所有群组中的状态=====================
        this.groupList = () => {
            var lastDevices = localStorage.getItem('devices') || '';
            if (lastDevices) {
                lastDevices = lastDevices.split(',');
            }
            for (var o = 0; o < $('.group-list-li li input').length; o++) {
                for (var p = 0; p < lastDevices.length; p++) {
                    if ($('.group-list-li li input').eq(o).attr('device') == lastDevices[p]) {
                        $('.group-list-li li input').eq(o).prop('checked', function () {
                            return true
                        });
                        $('.group-list-li li input').eq(o).parent().addClass('on');
                    }
                }
            }
            for (var i = 0; i < $('.group-list-li div input').length; i++) {
                var underList = $('.group-list-li div').eq(i).next().find('input');
                for (var x = 0, flag = true; x < underList.length; x++) {
                    if (underList.eq(x).prop('checked') == false) {
                        flag = false;
                    }
                }
                if (flag) {
                    $('.group-list-li div input').eq(i).prop('checked', function () {
                        return true;
                    });
                    $('.group-list-li div input').eq(i).parent().addClass('on');
                }
            }
        };
    }])
    .controller('screenCtrl', ['$rootScope', '$scope', '$http', '$timeout', '$interval', '$location', '$anchorScroll',
        'apiService', 'screenService', function ($rootScope, $scope, $http, $timeout, $interval, $location,
                                                 $anchorScroll, apiService, screenService) {
            /*-----------定时监听任务-----------*/
            $rootScope.rightTaskEatch = 1
            setInterval(function () {
                let arr = [];
                let arr2 = [];
                let arr3 = [];
                let arr4 = [];
                $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
                    if (data.code == 200) {
                        for (var i = 0; i < data.data.length; i++) {
                            arr = data.data
                            if (data.data[i].status == 1) {
                                arr2.push(data.data[i])
                            } else if (data.data[i].status == 0) {
                                arr3.push(data.data[i])
                            } else if (data.data[i].status == 2) {
                                arr4.push(data.data[i])
                            }
                        }
                        if ($rootScope.rightTaskEatch == 1) {
                            $rootScope.taskList = arr;
                        } else if ($rootScope.rightTaskEatch == 2) {
                            $rootScope.taskList = arr2;
                        } else if ($rootScope.rightTaskEatch == 3) {
                            $rootScope.taskList = arr3;
                        } else if ($rootScope.rightTaskEatch == 4) {
                            $rootScope.taskList = arr4;
                        }
                    } else {
                    }
                });
            }, 2000)


            $http.get(apiService.getGroupDataByStatus()).success(data => {
                $scope.groupNumber = data.data.length || 0;
                $scope.groupList = data.data;
                setTimeout(function () {
                    var localData = localStorage.getItem('devices');
                    console.log(localData)
                    console.log(localData.length)
                    if (localData == null) {
                        $rootScope.ShowSomeDevices = 0;
                    } else if (localData.length == 16) {
                        $rootScope.ShowSomeDevices = 1;
                    } else {
                        var localData1 = localData.split(',')
                        $rootScope.ShowSomeDevices = localData1.length;
                    }
                    var isChecked1 = $('.screen-isCheck')

                    $('.ShowAllDevices').html(isChecked1.length);
                    for (var i = 0; i < isChecked1.length; i++) {
                        for (var i1 = 0; i1 < localData1.length; i1++) {
                            if (isChecked1[i].attributes[3].value == localData1[i1]) {
                                $('.screen-isCheck').eq(i).parent().addClass('on');
                                $('.screen-isCheck').eq(i).prop('checked', true)
                                var allIsCjj = $('.screen-isCheck').eq(i).parent().parent().parent().parent().parent().find('.screen-isCheck-span')
                                for (var i2 = 0; i2 < allIsCjj.length; i2++) {
                                    if (allIsCjj[i2].attributes.length == 0) {
                                        $('.screen-isCheck').eq(i).parent().parent().parent().parent().parent().find('.screen-isCheck-span-all').removeClass('on')
                                        continue;
                                    } else {
                                        $('.screen-isCheck').eq(i).parent().parent().parent().parent().parent().find('.screen-isCheck-span-all').addClass('on')
                                    }
                                }
                            }
                        }
                    }
                }, 100)
            });
            //==========================任务列表展开===================
            $rootScope.link = '/wgcs';
            $rootScope.changeSize = function () {
                // console.log("展开")
                if (!$rootScope.isScreenPage) {
                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
                        if (data.code == 200) {
                            $rootScope.rightTaskEatch = 1
                            $rootScope.taskList = data.data;
                            $rootScope.viewSize = 'view-small';
                            $rootScope.taskSize = 'task-big';
                            $rootScope.taskButtonHide = true;
                            $rootScope.taskHideButton = true;
                            $rootScope.taskAll = true;
                            $rootScope.taskDoing = false;
                            $rootScope.taskWait = false;
                            $rootScope.taskDown = false;
                            return $rootScope.taskList
                        } else {
                            alert(data.msg);
                        }
                    });
                }
            };
            //==========================任务列表隐藏===================
            $rootScope.getHide = function () {
                // console.log("隐藏")
                $rootScope.toshow = false;
                $rootScope.toshowtwo = false;
                $rootScope.viewSize = 'view-big';
                $rootScope.taskSize = 'task-small';
                $timeout(function () {
                    $rootScope.taskButtonHide = false;
                    $rootScope.taskHideButton = false;
                    $rootScope.newBell = false;
                }, 800);
            };
            $rootScope.newBell = false;
            $rootScope.isActive = function (a) {
                if (a) {
                    return 'screen-on';
                }
            };
            //==============================================================
            //============================任务栏的选择=======================

            //===========================点击任务栏  “全部”  获取所有任务========================
            $rootScope.del = true;
            //this.btnLogin.Attributes.Add("onclick", "return reload();");
            $rootScope.deltask = function ($index) {
                var deta = '';
                $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
                    if (data.code == 200) {
                        $rootScope.taskList = data.data;
                        $rootScope.del = true;
                        $rootScope.delone = false;
                        $rootScope.deltwo = false;
                        $rootScope.delsree = false;
                        deta = $rootScope.taskList[$index].id
                    } else {
                        alert(data.msg);
                    }
                    if (deta == undefined) {
                        return

                    } else {
                        $http.get($rootScope.link + '/task/delTask?id=' + deta).success(function (data) {
                            if (data.code == 200) {
                                $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
                                    if (data.code == 200) {
                                        $rootScope.taskList = data.data;
                                        $rootScope.taskAll = true;
                                        $rootScope.taskDoing = false;
                                        $rootScope.taskWait = false;
                                        $rootScope.taskDown = false;
                                    }
                                });
                            }
                        }).error(function (data) {
                        })
                    }

                });
            }
            $rootScope.getTaskAll = function () {
                $rootScope.rightTaskEatch = 1
                $rootScope.del = true;
                $rootScope.delone = false;
                $rootScope.deltwo = false;
                $rootScope.delsree = false;
                $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
                    if (data.code == 200) {
                        $rootScope.taskList = data.data;
                        $rootScope.taskAll = true;
                        $rootScope.taskDoing = false;
                        $rootScope.taskWait = false;
                        $rootScope.taskDown = false;
                    } else {
                        alert(data.msg);
                    }
                });
            };
            //===========================点击任务栏  “正在执行”  获取所有任务========================
            $rootScope.deltaskone = function ($index) {
                var deta = '';
                $http.get($rootScope.link + '/task/getGroupTaskInit?status=1').success(function (data) {
                    if (data.code == 200) {
                        $rootScope.taskList = data.data;
                        deta = $rootScope.taskList[$index].id
                    } else {
                        alert(data.msg);
                    }
                    if (deta == undefined) {
                        return
                    } else {
                        $http.get($rootScope.link + '/task/delTask?id=' + deta).success(function (data) {
                            if (data.code == 200) {
                                $http.get($rootScope.link + '/task/getGroupTaskInit?status=1').success(function (data) {
                                    if (data.code == 200) {
                                        $rootScope.taskList = data.data;
                                        $rootScope.taskAll = false;
                                        $rootScope.taskDoing = true;
                                        $rootScope.taskWait = false;
                                        $rootScope.taskDown = false;
                                    } else {
                                        alert(data.msg);
                                    }
                                });
                            }
                        }).error(function (data) {

                        })
                    }

                });


            }
            $rootScope.getTaskDoing = function () {
                $rootScope.rightTaskEatch = 2
                $rootScope.del = false;
                $rootScope.delone = true;
                $rootScope.deltwo = false;
                $rootScope.delsree = false;

                $http.get($rootScope.link + '/task/getGroupTaskInit?status=1').success(function (data) {
                    if (data.code == 200) {
                        $rootScope.taskList = data.data;
                        $rootScope.taskAll = false;
                        $rootScope.taskDoing = true;
                        $rootScope.taskWait = false;
                        $rootScope.taskDown = false;
                    } else {
                        alert(data.msg);
                    }
                });
            };
            //===========================点击任务栏  “等待执行”  获取所有任务========================

            $rootScope.deltasktwo = function ($index) {
                var deta = '';
                $http.get($rootScope.link + '/task/getGroupTaskInit?status=0').success(function (data) {
                    if (data.code == 200) {
                        $rootScope.taskList = data.data;
                        deta = $rootScope.taskList[$index].id


                    } else {
                        alert(data.msg);
                    }
                    if (deta == undefined) {
                        return
                    } else {

                        $http.get($rootScope.link + '/task/delTask?id=' + deta).success(function (data) {
                            if (data.code == 200) {
                                $http.get($rootScope.link + '/task/getGroupTaskInit?status=0').success(function (data) {
                                    if (data.code == 200) {
                                        $rootScope.taskList = data.data;
                                        $rootScope.taskAll = false;
                                        $rootScope.taskDoing = false;
                                        $rootScope.taskWait = true;
                                        $rootScope.taskDown = false;
                                        $rootScope.waittaskList = $rootScope.taskList

                                    } else {
                                        alert(data.msg);
                                    }

                                });
                            }
                        }).error(function (data) {

                        })
                    }

                });

            }


            $rootScope.getTaskWait = function () {
                $rootScope.rightTaskEatch = 3
                $rootScope.del = false;
                $rootScope.delone = false;
                $rootScope.deltwo = true;
                $rootScope.delsree = false;

                $http.get($rootScope.link + '/task/getGroupTaskInit?status=0').success(function (data) {
                    if (data.code == 200) {
                        $rootScope.taskList = data.data;
                        $rootScope.taskAll = false;
                        $rootScope.taskDoing = false;
                        $rootScope.taskWait = true;
                        $rootScope.taskDown = false;
                        $rootScope.waittaskList = $rootScope.taskList

                    } else {
                        alert(data.msg);
                    }

                });
            };
            //===========================点击任务栏  “执行完成”  获取所有任务========================


            $rootScope.deltasksree = function ($index) {
                var deta = '';
                $http.get($rootScope.link + '/task/getGroupTaskInit?status=2').success(function (data) {
                    if (data.code == 200) {
                        $rootScope.taskList = data.data;
                        var deta = $rootScope.taskList[$index].id
                    } else {
                        alert(data.msg);
                    }
                    if (deta == undefined) {
                        return
                    } else {
                        $http.get($rootScope.link + '/task/delTask?id=' + deta).success(function (data) {
                            if (data.code == 200) {
                                $http.get($rootScope.link + '/task/getGroupTaskInit?status=2').success(function (data) {
                                    if (data.code == 200) {
                                        $rootScope.taskList = data.data;
                                        $rootScope.taskAll = false;
                                        $rootScope.taskDoing = false;
                                        $rootScope.taskWait = false;
                                        $rootScope.taskDown = true;
                                    } else {
                                        alert(data.msg);
                                    }

                                });
                            }
                        }).error(function (data) {

                        })
                    }

                });
            }

            $rootScope.getTaskDown = function () {
                $rootScope.rightTaskEatch = 4
                $rootScope.del = false;
                $rootScope.delone = false;
                $rootScope.deltwo = false;
                $rootScope.delsree = true;

                $http.get($rootScope.link + '/task/getGroupTaskInit?status=2').success(function (data) {
                    if (data.code == 200) {
                        $rootScope.taskList = data.data;
                        $rootScope.taskAll = false;
                        $rootScope.taskDoing = false;
                        $rootScope.taskWait = false;
                        $rootScope.taskDown = true;
                    } else {
                        alert(data.msg);
                    }

                });

            };

            //=======================任务栏的伸缩=================
            $rootScope.getStatus = function (n) {
                var a;
                if (n == 0) {
                    a = '等待执行';
                } else if (n == 1) {
                    a = '正在执行';
                } else if (n == 2) {
                    a = '执行完成';
                } else if (n == -1) {
                    a = '执行失败';
                } else if (n == 3) {
                    a = '任务异常';
                }
                return a;
            };
            //==========================颜色的初始化===================
            $rootScope.changeColor = function (n) {
                var a;
                if (n == -1) {
                    a = 'page-red';
                } else if (n == 2) {
                    a = 'page-green';
                } else if (n == 0) {
                    a = '';
                } else if (n == 1) {
                    a = 'page-yellow';
                } else if (n == 3) {
                    a = 'page-gray';
                }
                return a;
            };
            $rootScope.getLineHigh = function ($event) {
                $($event.target).css('overflow-y', 'auto');
            };
            $rootScope.getLineDown = function ($event) {
                $($event.target).css('overflow', 'hidden');
            };


            //=================================列表处===================================
            $scope.showId = 0;
            $scope.showList = id => {
                $scope.showId = id;
            };
            $scope.canShowList = id => {
                if ($scope.showId == id) {
                    return 'on';
                }
            };


            $timeout(screenService.displayScreen(), 0);

            $scope.reload = () => {
                location.reload();
            };
            $scope.checkFlag = true;

            /*================ 右侧任务栏全部被选中*/
            $scope.checkAllDevice = function () {
                if ($scope.checkFlag) {
                    $('.get-check').addClass('on').find('input').prop('checked', function () {
                        return true
                    });
                    $scope.checkFlag = !$scope.checkFlag
                } else {
                    $('.get-check').removeClass('on').find('input').prop('checked', function () {
                        return false
                    });
                    $scope.checkFlag = !$scope.checkFlag
                }
            };
            $scope.resetPhone = function () {
                $http.get(apiService.openScreen()).success(function () {
                });
            };

            $scope.operationList = false;
            $scope.showOperationList = function () {
                var scrmKongzhi = $('.screens-list input')
                if (scrmKongzhi.length > 0) {
                    $scope.operationList = !$scope.operationList;
                    if ($scope.operationList) {
                        $scope.writeInBox = false;
                    }
                } else {

                }
                console.log(scrmKongzhi.length)
            };
            $scope.operationClose = function () {
                $scope.operationList = !$scope.operationList;
                if ($scope.operationList) {
                    $scope.writeInBox = false;
                }
            }
            /*=========================ADB输入法状态打开=======================*/
            $scope.openAll = function (n) {
                for (var i = 0, arr = []; i < $('.screens-list input').length; i++) {
                    if ($('.screens-list input').eq(i).prop('checked')) {
                        arr.push($('.screens-list input').eq(i).attr('mess_id'));
                    }
                }
                if (arr.length === 0) {
                    alert('请勾选需要操作的设备!');
                } else {
                    var sendObj = new FormData();
                    sendObj.append('devices', JSON.stringify(arr));
                    sendObj.append('taskId', n);
                    $http({
                        method: 'POST',
                        url: apiService.open(),
                        data: sendObj,
                        headers: {'Content-Type': undefined},
                        transformRequest: angular.identity
                    }).success(function (data) {
                        if (data.code == 200) {
                            alert('添加任务成功！');
                            $scope.operationList = false;
                        } else {
                            alert(data.msg);
                        }
                    });
                }
            };

            /*=========================ADB输入法状态关闭=======================*/
            $scope.closeAll = function (n) {
                for (var i = 0, arr = []; i < $('.screens-list input').length; i++) {
                    if ($('.screens-list input').eq(i).prop('checked')) {
                        arr.push($('.screens-list input').eq(i).attr('mess_id'));
                    }
                }
                if (arr.length === 0) {
                    alert('请勾选需要操作的设备!');
                } else {
                    var sendObj = new FormData();
                    sendObj.append('devices', JSON.stringify(arr));
                    sendObj.append('taskId', n);
                    $http({
                        method: 'POST',
                        // url:$scope.link+"/device/close",
                        url: apiService.close(),
                        data: sendObj,
                        headers: {'Content-Type': undefined},
                        transformRequest: angular.identity
                    }).success(function (data) {
                        if (data.code == 200) {
                            alert('添加任务栏成功！');
                            $scope.operationList = false;
                        } else {
                            alert(data.msg);
                        }
                    });
                }
            };
            /*===================================点击返回主页=============================*/
            $scope.backHome = function () {
                for (var i = 0, arr = []; i < $('.screens-list input').length; i++) {
                    if ($('.screens-list input').eq(i).prop('checked')) {
                        arr.push($('.screens-list input').eq(i).attr('mess_id'));
                    }
                }
                if (arr.length == 0) {
                    alert('请勾选需要操作的设备！');
                } else {
                    $http.get(apiService.backHome(JSON.stringify(arr))).success(function (data) {
                        if (data.code == 200) {
                            alert('添加任务成功！');
                            $scope.operationList = false;
                        } else {
                            alert(data.msg);
                        }
                    });
                }
            };

            $scope.writeInBox1 = false;


            /*=======================文字输入(writeInBox:取消确定选项栏)======================*/
            $scope.showWriteBox = function () {

                var scrmKongzhi = $('.screens-list input')
                if (scrmKongzhi.length > 0) {
                    $scope.writeInBox1 = true;
                    $('.write-in-box').css('display', 'block')
                } else {
                }
            };
            $rootScope.isActive1 = function (a) {
                if (a) {
                    return 'init-on-on';
                }
            };
            $rootScope.changeColor = function (n) {
                var a;
                if (n == -1) {
                    a = 'page-red';
                } else if (n == 2) {
                    a = 'page-green';
                } else if (n == 0) {
                    a = '';
                } else if (n == 1) {
                    a = 'page-blue';
                } else if (n == 3) {
                    a = 'page-yellow';
                }
                return a;
            };
            $scope.writeSomething = '';
            $scope.writeSure = function () {
                for (var i = 0, arr = []; i < $('.screens-list input').length; i++) {
                    if ($('.screens-list input').eq(i).prop('checked')) {
                        arr.push($('.screens-list input').eq(i).attr('mess_id'));
                    }
                }
                console.log(arr)
                if (arr.length === undefined || arr.length === 0 || arr === null) {
                    alert('请勾选模型设备！');
                } else if ($scope.writeSomething === '' || $scope.writeSomething === undefined) {
                    alert('请输入文字!');
                } else {
                    $http.get(apiService.printMsg(JSON.stringify(arr), $scope.writeSomething)).success(function (data) {
                        if (data.code == 200) {
                            $scope.writeInBox1 = false;
                        } else {
                            alert(data.msg);
                        }
                    });
                }
            };
            /*=========================取消文字输入==========================*/
            $scope.writeCancel = function () {
                $scope.writeInBox1 = false;
            };
            /*========================置顶操作==============================*/
            $scope.toTop = function () {
                $location.hash('top-side');
                $anchorScroll();
            };

        }])

    /*========================checkbox二级选中设备======================*/
    .directive('groupCheckOne', ['$rootScope', '$http', 'screenService', function ($rootScope, $http, screenService) {
        return {
            link: function (scope, elem) {
                elem.click(() => {
                    var flag = true;
                    var child = elem.parent().parent().parent().parent().find('input');
                    if (elem.prop('checked')) {
                        elem.parent().addClass('on');
                    } else {
                        elem.parent().removeClass('on');
                    }
                    for (var i = 0; i < child.length; i++) {
                        if (child.eq(i).prop('checked') == false) {
                            flag = false;
                        }
                    }
                    if (!flag) {
                        elem.parent().parent().parent().parent().prev().find('span').removeClass('on').find('input').prop('checked', function () {
                            return false
                        });
                    } else {
                        elem.parent().parent().parent().parent().prev().find('span').addClass('on').find('input').prop('checked', function () {
                            return true
                        });
                    }
                    for (var a = 0, devices = []; a < $('.group-list-li ul input').length; a++) {
                        if ($('.group-list-li ul input').eq(a).prop('checked')) {
                            devices.push($('.group-list-li ul input').eq(a).attr('device'));
                        }
                    }
                    $rootScope.ShowSomeDevices = devices.length;
                    localStorage.setItem('devices', devices);
                    $rootScope.socketArr = [];
                    screenService.displayScreen();
                });
            }
        }
    }])

    /*========================checkbox一级选中设备======================*/
    .directive('groupCheckAll', ['$rootScope', '$http', 'screenService', function ($rootScope, $http, screenService) {
        return {
            link: function (scope, elem) {
                elem.click(function () {
                    if (elem.prop('checked')) {
                        elem.parent().addClass('on');
                        elem.parent().parent().parent().next().find('span').addClass('on').find('input').prop('checked', function () {
                            return true
                        });
                    } else {
                        elem.parent().removeClass('on');
                        elem.parent().parent().parent().next().find('span').removeClass('on').find('input').prop('checked', function () {
                            return false
                        });
                    }
                    for (var i = 0, devices = []; i < $('.screen-isCheck').length; i++) {
                        if ($('.screen-isCheck').eq(i).prop('checked')) {
                            devices.push($('.screen-isCheck').eq(i).attr('device'));
                        }
                    }
                    $rootScope.ShowSomeDevices = devices.length;
                    localStorage.setItem('devices', devices);
                    $rootScope.socketArr = [];
                    screenService.displayScreen();
                });
            }
        }
    }])
    /*=====================根据窗口宽度对模型个数进行判断=========================*/
    .directive('screenWatcher', function () {
        return {
            link: function (scope, elem) {
                window.onresize = function () {
                    var screensWidth = elem.width();
                    var screensMargin;
                    if (screensWidth >= 1440) {
                        screensMargin = (screensWidth - 1440) / 12;
                    } else if (screensWidth < 1440 && screensWidth >= 1200) {
                        screensMargin = (screensWidth - 1200) / 10;
                    } else if (screensWidth < 1200) {
                        screensMargin = (screensWidth - 960) / 8;
                    }
                    screensMargin = screensMargin - 0.5;
                    elem.find('li').css('margin', '0 ' + screensMargin - 1 + 'px 5px');
                };
            }
        }
    });
