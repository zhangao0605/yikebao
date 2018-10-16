app.controller('mainC', ["$rootScope", "$scope", "$timeout", "$location", "$anchorScroll", "$http"
    , function ($rootScope, $scope, $timeout, $location, $anchorScroll, $http) {
        //============================航栏的视图切导换==============================
        //============================锚点的跳转 回到顶部标题处======================
        var getAllDevices = '';
        var arr1212 = []
        $http.get($rootScope.link + '/device/getAllDevice?pageNo=1&pageSize=15').success(function (data) {
            if (data.code == 200) {
                getAllDevices = data.data.content
                for (var i = 0; i < getAllDevices.length; i++) {
                    if (getAllDevices[i].status == 1) {
                        arr1212.push(getAllDevices[i].device)
                    }
                }
            } else {
                $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                setTimeout(function () {
                    $('.page1-alert-danger').hide(300)
                }, 2000)
            }
        });
        if (arr1212.length <= 0) {

        } else {
            arr1212.join(',')
        }
        $scope.goScreen = function () {
            localStorage.removeItem("devices")
            localStorage.setItem('devices', '' + arr1212 + '')
            window.close('http://' + window.location.host + '/wgcs/screens.html ', '_self');
            window.open('http://' + window.location.host + '/wgcs/screens.html', 'true');
        }
        $scope.getTop = function (num, arg) {
            $http.get($rootScope.link + '/group/getGroupDataByStatus').success(function (data) {
                if (data.code == 200) {
                    $rootScope.onlineGroupNames = data.data;
                    //==========================保存默认加载的设备号=======================
                    $rootScope.moArray = [];
                    for (var a = 0; a < data.data[0].deviceVos.length; a++) {
                        $rootScope.moArray.push(data.data[0].deviceVos[a].device);
                        $rootScope.moArraylength = $rootScope.moArray.length
                    }
                } else {
                    $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                    setTimeout(function () {
                        $('.page1-alert-small-danger').hide(300)
                    }, 2000)
                }
            });

            $http.get($rootScope.link + '/checkSession').success(function (data) {
                if (data.code == 200) {
                    if (data.data == false) {
                        $('.login-tishi').show().html('登录身份过期，请再次登陆')
                        window.location.href = 'http://' + window.location.host + '/wgcs/#/login'
                    } else {
                    }
                }
            })


            $location.hash('page-top' + num);
            $anchorScroll();
            switch (arg) {
                case 'page1':
                    $location.path('/page1');
                    break;
                case 'page2':
                    $location.path('/page2');
                    break;
                case 'page3':
                    $location.path('/page3');
                    break;
                case 'page4':
                    $location.path('/page4');
                    break;
                //case 'page5': $location.path('/page5'); break;
                case 'page6':
                    $location.path('/page6');
                    break;
                case 'page7':
                    $location.path('/page7');
                    break;
                case 'page8':
                    $location.path('/page8');
                    break;
                case 'page9':
                    $location.path('/page9');
                    break;
                case 'page10':
                    $location.path('/page10');
                    break;
                case 'page11':
                    $location.path('/page11');
                    break;
                case 'page12':
                    $location.path('/page12');
                    break;
                case 'page13':
                    $location.path('/page13');
                    break;
                case 'page14':
                    $location.path('/page14');
                    break;
                case 'page15':
                    $location.path('/page15');
                    break;
                case 'page16':
                    $location.path('/page16');
                    break;
                case 'page17':
                    $location.path('/page17');
                    break;
                case 'page18':
                    $location.path('/page18');
                    $rootScope.viewSize = 'view-big';
                    $rootScope.taskSize = 'task-small';
                    $timeout(function () {
                        $rootScope.taskButtonHide = false;
                        $rootScope.taskHideButton = false;
                        $rootScope.newBell = false;
                    }, 500);
                    break;
                case 'page19':
                    $location.path('/page19');
                    break;
                case 'page20':
                    $location.path('/page20');
                    break;
                case 'page21':
                    $location.path('/page21');
                    break;
                case 'page22':
                    $location.path('/page22');
                    break;
                case 'page23':
                    $location.path('/page23');
                    break;
                case 'page24':
                    $location.path('/page24');
                    break;
                case 'page25':
                    $location.path('/page25');
                    break;
                case 'page26':
                    $location.path('/page26');
                    break;
                case 'page27':
                    $location.path('/page27');
                    break;
                case 'page28':
                    $location.path('/page28');
                    break;
                case 'page29':
                    $location.path('/page29');
                    break;
                case 'page30':
                    $location.path('/page30');
                    break;
                case 'page31':
                    $location.path('/page31');
                    break;
                case 'page32':
                    $location.path('/page32');
                    break;
                case 'page33':
                    $location.path('/page33');
                    break;
                case 'page34':
                    $location.path('/page34');
                    break;
                case 'page35':
                    $location.path('/page35');
                    break;
                case 'page36':
                    $location.path('/page36');
                    break;
                case 'page37':
                    $location.path('/page37');
                    break;
                case 'page38':
                    $location.path('/page38');
                    break;
                case 'page39':
                    $location.path('/page39');
                    break;
            }
        };
    }]);