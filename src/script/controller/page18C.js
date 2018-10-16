app.controller('page18C',["$rootScope","$scope","$http","$timeout",function ($rootScope, $scope, $http, $timeout) {
    $rootScope.getAllFalse();
    $rootScope.activeEightteen = true;
    $rootScope.navPartOne = true;
    $rootScope.isScreenPage = true;
    $('.canvas-ul').empty();

    $scope.openAll = function (n) {
        for (var i = 0, arr = []; i < $('.canvas-ul li input').length; i++) {
            if ($('.canvas-ul li input').eq(i).prop('checked')) {
                arr.push($('.canvas-ul li input').eq(i).attr('mess_id'));
            }
        }
        if (arr.length == 0) {
            alert('请勾选需要操作的设备!');
        } else {
            var sendObj = new FormData();
            sendObj.append('devices', JSON.stringify(arr));
            sendObj.append('taskId', n);
            $http({
                method: 'POST',
                url: $rootScope.link + "/device/open",
                data: sendObj,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (data) {
                if (data.code == 200) {
                    alert('添加任务栏成功！');
                }else {
                    alert(data.msg);
                }
            });
        }
    };
    $scope.closeAll = function (n) {
        for (var i = 0, arr = []; i < $('.canvas-ul li input').length; i++) {
            if ($('.canvas-ul li input').eq(i).prop('checked')) {
                arr.push($('.canvas-ul li input').eq(i).attr('mess_id'));
            }
        }
        if (arr.length == 0) {
            alert('请勾选需要操作的设备!');
        } else {
            var sendObj = new FormData();
            sendObj.append('devices', JSON.stringify(arr));
            sendObj.append('taskId', n);
            $http({
                method: 'POST',
                url: $rootScope.link + "/device/close",
                data: sendObj,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (data) {
                if (data.code == 200) {
                    alert('添加任务栏成功！');
                }else {
                    alert(data.msg);
                }
            });
        }
    };
    $scope.backHome = function () {
        for (var i = 0, arr = []; i < $('.canvas-ul li input').length; i++) {
            if ($('.canvas-ul li input').eq(i).prop('checked')) {
                arr.push($('.canvas-ul li input').eq(i).attr('mess_id'));
            }
        }
        if (arr.length == 0) {
            alert('请勾选需要操作的设备！');
        } else {
            $http.get($rootScope.link + '/device/backHome?devices=' + JSON.stringify(arr)).success(function (data) {
                if (data.code == 200) {
                    alert('添加任务成功！');
                }else {
                    alert(data.msg);
                }
            });
        }
    };
    //屏幕的监听
    //var screenWatcher=function(id,url,device,tp){
    //    var BLANK_IMG =
    //        'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
    //
    //    var canvas = document.getElementById(id), g = canvas.getContext('2d');
    //    canvas.addEventListener('click', function(e){
    //        var x, y;
    //        if (e.layerX || e.layerX == 0) {
    //            x = e.layerX;
    //            y = e.layerY;
    //        } else if (e.offsetX || e.offsetX == 0) { // Opera
    //            x = e.offsetX;
    //            y = e.offsetY;
    //        }
    //        $http.get($rootScope.link+'/device/touchDeviceScreen?device='+device+'&touchPort='+tp+'&x='+parseInt(x*(540/228))+'&y='+parseInt(y*2.4)).success(function(data){});
    //    }, false);
    //    var ws = new WebSocket('ws://'+url, 'minicap');
    //    ws.binaryType = 'blob';
    //
    //    ws.onclose = function() {
    //        console.log('onclose', arguments)
    //    };
    //
    //    ws.onerror = function() {
    //        console.log('onerror', arguments)
    //    };
    //
    //    ws.onmessage = function(message) {
    //        var blob = new Blob([message.data], {type: 'image/jpeg'});
    //        var URL = window.URL || window.webkitURL;
    //        var img = new Image();
    //        img.onload = function() {
    //            //console.log(img.width, img.height);
    //            canvas.width = img.width;
    //            canvas.height = img.height;
    //            g.drawImage(img, 0, 0);
    //            img.onload = null;
    //            img.src = BLANK_IMG;
    //            img = null;
    //            u = null;
    //            blob = null
    //            if(!$rootScope.isScreenPage){
    //                console.log(123);
    //                ws.close();
    //                $('.canvas-ul').empty();
    //            }
    //        };
    //        var u = URL.createObjectURL(blob);
    //        img.src = u
    //    };
    //    ws.onopen = function() {
    //        console.log('onopen', arguments);
    //        ws.send('1920x1080/0')
    //    }
    //};
    //$timeout(function(){
    //    $http.get($rootScope.link+'/device/showDeviceScreen?groupIds='+JSON.stringify($scope.selected)+'&pageNo=1&pageSize=10').success(function(data){
    //        $('.canvas-ul').empty();
    //        for(var i=0;i< data.data.content.length;i++){
    //            var cLi='<li class="canvas-li"><canvas id="canvas'+i+'"></canvas></li>';
    //            $('.canvas-ul').append(cLi);
    //            var assDevice=data.data.content[i].device;
    //            var touchPort=data.data.content[i].touchPort;
    //            var assId='canvas'+i;
    //            var assPort=data.data.content[i].ip+':'+data.data.content[i].outputPort;
    //            screenWatcher(assId,assPort,assDevice,touchPort);
    //        }
    //        var ww=$('.page18-floor-one').width();
    //        var am;
    //        if(ww<1160 && ww>=924){
    //            am=(ww-924)/8;
    //        }else if(ww < 924 && ww >= 736){
    //            am=(ww-736)/6;
    //        }else if(ww==1160){
    //            am=0
    //        }
    //        $('.page18-floor-one').find('.canvas-li').css('margin','0 '+am+'px 5px');
    //        //$('#pages18').Page({
    //        //    totalPages: data.data.totalPages,//分页总数
    //        //    liNums: 5,//分页的数字按钮数(建议取奇数)
    //        //    activeClass: 'activP', //active 类样式定义
    //        //    callBack : function(page){
    //        //        $('.canvas-ul').empty();
    //        //        $http.get($rootScope.link+'/device/showDeviceScreen?groupIds='+JSON.stringify($scope.selected)+'&pageNo='+page+'&pageSize=10').success(function(data){
    //        //            for(var i=0;i< data.data.content.length;i++){
    //        //                var cLi='<li class="canvas-li"><canvas id="canvas'+i+'"></canvas></li>';
    //        //                $('.canvas-ul').append(cLi);
    //        //                var assDevice=data.data.content[i].device;
    //        //                var touchPort=data.data.content[i].touchPort;
    //        //                var assId='canvas'+i;
    //        //                var assPort=data.data.content[i].ip+':'+data.data.content[i].outputPort;
    //        //                screenWatcher(assId,assPort,assDevice,touchPort);
    //        //            }
    //        //            var ww=$('.page18-floor-one').width();
    //        //            var am;
    //        //            if(ww<1160 && ww>=924){
    //        //                am=(ww-924)/8;
    //        //            }else if(ww < 924 && ww >= 736){
    //        //                am=(ww-736)/6;
    //        //            }else if(ww==1160){
    //        //                am=0
    //        //            }
    //        //            $('.page18-floor-one').find('.canvas-li').css('margin','0 '+am+'px 5px');
    //        //        })
    //        //    }
    //        //});
    //    });
    //},0);
    //$timeout(function(){
    //    if(sessionStorage.getItem('devices')){
    //        var devicesArr=sessionStorage.getItem('devices').split(',');
    //        for(var i=0;i<$('.new-wx-group-list-li ul li').length;i++){
    //            for(var a=0 ;a<devicesArr.length;a++){
    //                if($('.new-wx-group-list-li ul li').eq(i).find('h2').attr('title')==devicesArr[a]){
    //                    $('.new-wx-group-list-li ul li').eq(i).find('p').addClass('on').find('input').prop('checked',function(){return true});
    //                }
    //            }
    //        };
    //        var screenWatcher=function(id,url,device,tp,w,h){
    //
    //            var BLANK_IMG =
    //                'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
    //
    //            var canvas = document.getElementById(id), g = canvas.getContext('2d');
    //            var xs,ys,xe,ye;
    //            var checkedArr=[];
    //            canvas.addEventListener('mousedown',function(e){
    //                var x, y;
    //                if (e.layerX || e.layerX == 0) {
    //                    xs = e.layerX;
    //                    ys = e.layerY;
    //                } else if (e.offsetX || e.offsetX == 0) { // Opera
    //                    xs = e.offsetX;
    //                    ys = e.offsetY;
    //                }
    //                for(var e=0;e<$('.canvas-ul li input').length;e++){
    //                    if($('.canvas-ul li input').eq(e).prop('checked')){
    //                        checkedArr.push($('.canvas-ul li input').eq(e).attr('mess_id'));
    //                    }
    //                }
    //                checkedArr.push(device);
    //            },false);
    //            canvas.addEventListener('mouseup',function(e){
    //                if (e.layerX || e.layerX == 0) {
    //                    xe = e.layerX;
    //                    ye = e.layerY;
    //                } else if (e.offsetX || e.offsetX == 0) { // Opera
    //                    xe = e.offsetX;
    //                    ye = e.offsetY;
    //                }
    //                if(Math.abs(xe-xs)<10&&Math.abs(ye-ys)<10){
    //                    $http.get($rootScope.link+'/device/touchDeviceScreen?devices='+JSON.stringify(checkedArr)+'&touchPort='+tp+'&x='+parseInt(xs*(w/228))+'&y='+parseInt(ys*(h/400))).success(function(data){});
    //                }else{
    //                    $http.get($rootScope.link+'/device/slideDeviceScreen?devices='+JSON.stringify(checkedArr)+'&touchPort='+tp+'&xs='+parseInt(xs*(w/228))+'&ys='+parseInt(ys*(h/400))+'&xe='+parseInt(xe*(w/228))+'&ye='+parseInt(ye*(h/400))).success(function(){});
    //                }
    //            },false);
    //            var ws = new WebSocket('ws://'+url);
    //            $rootScope.socketArr.push(ws);
    //            ws.binaryType = 'blob';
    //
    //            ws.onclose = function() {
    //                console.log('onclose', arguments)
    //            };
    //
    //            ws.onerror = function() {
    //                console.log('onerror', arguments)
    //            };
    //
    //            ws.onmessage = function(message) {
    //                var blob = new Blob([message.data], {type: 'image/jpeg'});
    //                var URL = window.URL || window.webkitURL;
    //                var img = new Image();
    //                img.onload = function() {
    //                    //console.log(img.width, img.height);
    //                    canvas.width = img.width;
    //                    canvas.height = img.height;
    //                    g.drawImage(img, 0, 0);
    //                    img.onload = null;
    //                    img.src = BLANK_IMG;
    //                    img = null;
    //                    u = null;
    //                    blob = null;
    //                    if(!$rootScope.isScreenPage){
    //                        ws.close();
    //                        $('.canvas-ul').empty();
    //                    }
    //                };
    //                var u = URL.createObjectURL(blob);
    //                img.src = u
    //            };
    //            ws.onopen = function() {
    //                console.log('onopen', arguments);
    //                ws.send('1920x1080/0');
    //            }
    //        };
    //        if(devicesArr.length!=0){
    //            $('.page18-empty').hide();
    //            $http.get($rootScope.link+'/device/showDeviceScreen?devices='+JSON.stringify(devicesArr)+'&pageNo=1&pageSize=10').success(function(data){
    //                $('.canvas-ul').empty();
    //                for(var i=0;i< data.data.content.length;i++){
    //                    var cLi='<li class="canvas-li"><h2>'+data.data.content[i].rank+'</h2><h5></h5><canvas id="canvas'+i+'"></canvas><div><span></span><h6></h6><p><input type="checkbox" mess_id="'+data.data.content[i].device+'"></p></div></li>';
    //                    $('.canvas-ul').append(cLi);
    //                    var assDevice=data.data.content[i].device;
    //                    var touchPort=data.data.content[i].touchStart;
    //                    var assId='canvas'+i;
    //                    var assPort=data.data.content[i].ip+':8080/wgcs/ws/'+data.data.content[i].inputStart+'/'+data.data.content[i].device;
    //                    var equipWidth=data.data.content[i].wmSize.split('x')[0];
    //                    var equipHeight=data.data.content[i].wmSize.split('x')[1];
    //                    screenWatcher(assId,assPort,assDevice,touchPort,equipWidth,equipHeight);
    //                }
    //                $('.canvas-ul li span').click(function(){
    //                    var checkedArr=[];
    //                    for(var e=0;e<$('.canvas-ul li input').length;e++){
    //                        if($('.canvas-ul li input').eq(e).prop('checked')){
    //                            checkedArr.push($('.canvas-ul li input').eq(e).attr('mess_id'));
    //                        }
    //                    }
    //                    var device=$(this).next().next().find('input').attr('mess_id');
    //                    checkedArr.push(device);
    //                    $http.get($rootScope.link+'/device/returnBack?devices='+JSON.stringify(checkedArr)).success(function(){});
    //                });
    //                $('.canvas-ul li h6').click(function(){
    //                    var checkedArr=[];
    //                    for(var e=0;e<$('.canvas-ul li input').length;e++){
    //                        if($('.canvas-ul li input').eq(e).prop('checked')){
    //                            checkedArr.push($('.canvas-ul li input').eq(e).attr('mess_id'));
    //                        }
    //                    }
    //                    var device=$(this).next().find('input').attr('mess_id');
    //                    checkedArr.push(device);
    //                    $http.get($rootScope.link+'/device/returnHome?devices='+JSON.stringify(checkedArr)).success(function(){});
    //                });
    //                $('.canvas-ul li h5').click(function(){
    //                    var device=$(this).next().next().find('input').attr('mess_id');
    //                    $http.get($rootScope.link+'/device/clear?device='+device).success(function(){});
    //                });
    //                $('.canvas-ul li input').click(function(){
    //                    if($(this).prop('checked')){
    //                        $(this).parent().addClass('on');
    //                        for(var p= 0,flag=true;p<$('.canvas-ul li input').length;p++){
    //                            if(!$('.canvas-ul li input').eq(p).prop('checked')){
    //                                flag=false;
    //                            }
    //                        }
    //                        if(!flag){
    //                            $('.page18-new-add h3 span').removeClass('on').find('input').prop('checked',function(){return false});
    //                        }else{
    //                            $('.page18-new-add h3 span').addClass('on').find('input').prop('checked',function(){return true});
    //                        }
    //                    }else{
    //                        $(this).parent().removeClass('on');
    //                        $('.page18-new-add h3 span').removeClass('on').find('input').prop('checked',function(){return false});
    //                    }
    //                });
    //                var ww=$('.page18-floor-one').width();
    //                var am;
    //                if(ww<1200 && ww>=960){
    //                    am=(ww-970)/8;
    //                }else if(ww < 960 && ww >= 720){
    //                    am=(ww-730)/6;
    //                }else if(ww>=1200){
    //                    am=(ww-1210)/10
    //                }
    //                $('.page18-floor-one').find('.canvas-li').css('margin','0 '+am+'px 5px');
    //                $('#pages18').Page({
    //                    totalPages: data.data.totalPages,//分页总数
    //                    liNums: 5,//分页的数字按钮数(建议取奇数)
    //                    activeClass: 'activP', //active 类样式定义
    //                    callBack : function(page){
    //                        $('.canvas-ul').empty();
    //                        $http.get($rootScope.link+'/device/showDeviceScreen?devices='+JSON.stringify(devicesArr)+'&pageNo='+page+'&pageSize=10').success(function(data){
    //                            for(var i=0;i< data.data.content.length;i++){
    //                                var cLi='<li class="canvas-li"><h2>'+data.data.content[i].rank+'</h2><h5></h5><canvas id="canvas'+i+'"></canvas><div><span></span><h6></h6><p><input type="checkbox" mess_id="'+data.data.content[i].device+'"></p></div></li>';
    //                                $('.canvas-ul').append(cLi);
    //                                var assDevice=data.data.content[i].device;
    //                                var touchPort=data.data.content[i].touchStart;
    //                                var assId='canvas'+i;
    //                                var assPort=data.data.content[i].ip+':8080/wgcs/ws/'+data.data.content[i].inputStart+'/'+data.data.content[i].device;
    //                                var equipWidth=data.data.content[i].wmSize.split('x')[0];
    //                                var equipHeight=data.data.content[i].wmSize.split('x')[1];
    //                                screenWatcher(assId,assPort,assDevice,touchPort,equipWidth,equipHeight);
    //                            }
    //                            $('.canvas-ul li span').click(function(){
    //                                var checkedArr=[];
    //                                for(var e=0;e<$('.canvas-ul li input').length;e++){
    //                                    if($('.canvas-ul li input').eq(e).prop('checked')){
    //                                        checkedArr.push($('.canvas-ul li input').eq(e).attr('mess_id'));
    //                                    }
    //                                }
    //                                var device=$(this).next().next().find('input').attr('mess_id');
    //                                checkedArr.push(device);
    //                                $http.get($rootScope.link+'/device/returnBack?devices='+JSON.stringify(checkedArr)).success(function(){});
    //                            });
    //                            $('.canvas-ul li h6').click(function(){
    //                                var checkedArr=[];
    //                                for(var e=0;e<$('.canvas-ul li input').length;e++){
    //                                    if($('.canvas-ul li input').eq(e).prop('checked')){
    //                                        checkedArr.push($('.canvas-ul li input').eq(e).attr('mess_id'));
    //                                    }
    //                                }
    //                                var device=$(this).next().find('input').attr('mess_id');
    //                                checkedArr.push(device);
    //                                $http.get($rootScope.link+'/device/returnHome?devices='+JSON.stringify(checkedArr)).success(function(){});
    //                            });
    //                            $('.canvas-ul li h5').click(function(){
    //                                var device=$(this).next().next().find('input').attr('mess_id');
    //                                $http.get($rootScope.link+'/device/clear?device='+device).success(function(){});
    //                            });
    //                            $('.canvas-ul li input').click(function(){
    //                                if($(this).prop('checked')){
    //                                    $(this).parent().addClass('on');
    //                                    for(var p= 0,flag=true;p<$('.canvas-ul li input').length;p++){
    //                                        if(!$('.canvas-ul li input').eq(p).prop('checked')){
    //                                            flag=false;
    //                                        }
    //                                    }
    //                                    if(!flag){
    //                                        $('.page18-new-add h3 span').removeClass('on').find('input').prop('checked',function(){return false});
    //                                    }else{
    //                                        $('.page18-new-add h3 span').addClass('on').find('input').prop('checked',function(){return true});
    //                                    }
    //                                }else{
    //                                    $(this).parent().removeClass('on');
    //                                    $('.page18-new-add h3 span').removeClass('on').find('input').prop('checked',function(){return false});
    //                                }
    //                            });
    //                            var ww=$('.page18-floor-one').width();
    //                            var am;
    //                            if(ww<1200 && ww>=960){
    //                                am=(ww-970)/8;
    //                            }else if(ww < 960 && ww >= 720){
    //                                am=(ww-730)/6;
    //                            }else if(ww>=1200){
    //                                am=(ww-1210)/10
    //                            }
    //                            $('.page18-floor-one').find('.canvas-li').css('margin','0 '+am+'px 5px');
    //                        })
    //                    }
    //                });
    //            });
    //        }
    //    }
    //},500);
}]);
