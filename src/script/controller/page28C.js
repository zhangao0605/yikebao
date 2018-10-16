/*======================上传通讯录======================*/
app.controller('page28C',["$rootScope","$scope","$http","$location","$anchorScroll",function($rootScope, $scope, $http, $location, $anchorScroll){
    $rootScope.getAllFalse();
    $rootScope.activeTwentyEight = true;
    $rootScope.navPartThree = true;
    $rootScope.isScreenPage = false;
    $scope.sendAllButton = true
    $scope.isClear = 0;
    $scope.clear = function ($event) {
        if ($event.target.checked) {
            $scope.isClear = 1;
        } else {
            $scope.isClear = 0;
        }
    };
    //-------------------朋友圈点赞-------------------
    // $scope.AllPeople=1;
    // $scope.ToTop=0;
    // $scope.WriteNum=0;
    $scope.maxTime=10;
    $scope.minTime=5;
    $scope.WriteNums=1;

    $scope.notFound=function () {
        if ($scope.WriteNums == undefined) {
            alert('点赞数量范围为"1-30"请再次输入')
            $scope.WriteNums = 1;
        }
    }
    // setInterval(function () {
    //     console.log($scope.WriteNums)
    // },1000)
    //----------------朋友圈点赞确定发送-----------
    $scope.sendAll = function () {
        for (var i = 0, arr = []; i < $('.new-wx-equip-input').length; i++) {
            if ($('.new-wx-equip-input').eq(i).prop('checked')) {
                arr.push($('.new-wx-equip-input').eq(i).parent().next().attr('title'));
            }
        }
        if(arr.length == 0){
            alert('请勾选需要操作的设备！');
        }else{
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
    // $('.page28-choose').change(function () {
    //     var selectVal = $(this).val();
    //     if (selectVal ==0) {
    //         $(".writeNu").hide()
    //         $scope.AllPeople=1
    //         $scope.ToTop=0;
    //         $scope.WriteNum=0;
    //         $scope.WriteNums=0;
    //         $(".to-num").val(0)
    //     }else if (selectVal==1){
    //         $scope.AllPeople=0
    //         $scope.ToTop=1;
    //         $scope.WriteNum=0;
    //         $scope.WriteNums=0;
    //         $(".to-num").val(0)
    //         $(".writeNu").hide()
    //     }
    //     else if (selectVal==2){
    //         $scope.AllPeople=0
    //         $scope.ToTop=0;
    //         $scope.WriteNum=1;
    //         $scope.WriteNums=0;
    //         $(".to-num").val(0)
    //         $(".writeNu").show()
    //     }
    // })

        //-----------------朋友圈评论---------------
    // $scope.maxTime1=10;
    // $scope.minTime1=5;
    // $scope.AllPeople1=1;
    // $scope.ToTop1=0;
    // $scope.WriteNum1=0;
    // $scope.WriteNums1=0;
    // $scope.sayHello="您好，很高兴认识您！"
    // $('.page28-choose1').change(function () {
    //     var selectVal1 = $(this).val();
    //     if (selectVal1 ==0) {
    //         $(".writeNu1").hide()
    //         $scope.AllPeople1=1
    //         $scope.ToTop1=0;
    //         $scope.WriteNum1=0;
    //         $scope.WriteNums1=0;
    //         $(".to-num1").val(0)
    //     }else if (selectVal1==1){
    //         $scope.AllPeople1=0
    //         $scope.ToTop1=1;
    //         $scope.WriteNum1=0;
    //         $scope.WriteNums1=0;
    //         $(".to-num1").val(0)
    //         $(".writeNu1").hide()
    //     }
    //     else if (selectVal1==2){
    //         $scope.AllPeople1=0
    //         $scope.ToTop1=0;
    //         $scope.WriteNum1=1;
    //         $scope.WriteNums1=0;
    //         $(".to-num1").val(0)
    //         $(".writeNu1").show()
    //     }
    // })



    //----------------朋友圈评论确定发送-----------
    // $scope.sendAll1 = function () {
    //     for (var i = 0, arr = []; i < $('.new-wx-equip-input').length; i++) {
    //         if ($('.new-wx-equip-input').eq(i).prop('checked')) {
    //             arr.push($('.new-wx-equip-input').eq(i).parent().next().attr('title'));
    //         }
    //     }
    //     if(arr.length == 0){
    //         alert('请勾选需要操作的设备！');
    //     }else{
    //         var sendObj = new FormData();
    //         sendObj.append('devices', JSON.stringify(arr));
    //         sendObj.append('maxTime', $scope.maxTime);
    //         sendObj.append('minTime', $scope.minTime);
    //         sendObj.append('AllPeople', $scope.AllPeople);
    //         sendObj.append('ToTop', $scope.ToTop);
    //         sendObj.append('WriteNum', $scope.WriteNum);
    //         sendObj.append('WriteNums', $scope.WriteNums);
    //         sendObj.append('msg', $scope.sayHello);
    //         $http({
    //             method: 'POST',
    //             url: $rootScope.link + "/wechatPlus/addContacts",
    //             data: sendObj,
    //             headers: {'Content-Type': undefined},
    //             transformRequest: angular.identity
    //         }).success(function (response) {
    //             console.log(response.code)
    //             //上传成功的操作
    //             if (response.code == 200) {
    //                 alert('任务添加成功!');
    //                 $location.hash('page-top6');
    //                 $anchorScroll();
    //                 $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
    //                     if (data.code == 200) {
    //                         $rootScope.taskList = data.data;
    //                         $rootScope.taskAll = true;
    //                         $rootScope.taskDoing = false;
    //                         $rootScope.taskWait = false;
    //                         $rootScope.taskDown = false;
    //                         $rootScope.newBell = true;
    //                     }else {
    //                         alert(data.msg);
    //                     }
    //                 });
    //             }else {
    //                 alert(response.msg);
    //             }
    //         });
    //     }
    // };
    // $scope.assRadioChoose = false;
    // $scope.addPeople = 1;
    // $scope.addPeopleCount = 1;
    // $scope.getAssHide = function () {
    //     $scope.assRadioChoose = false;
    //     $scope.addPeople = 1;
    // };
    // $scope.getAssShow = function () {
    //     $scope.assRadioChoose = true;
    //     $scope.addPeople = 0;
    // }
}])
