app.directive('tableSave',["$rootScope","$http","$timeout",function ($rootScope, $http, $timeout) {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                var anumber = elem.parent().parent().find('input');
                if (anumber.val() == '') {
                    $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请填写需要保存的设备编号');
                    setTimeout(function () {
                        $('.page1-alert-small-danger').hide(300)
                    }, 2000)
                } else {
                    $http.get($rootScope.link + '/device/editRank?device=' + elem.attr('mess_device') + '&rank=' + elem.parent().prev().prev().prev().prev().prev().find('input').val()).success(function (data) {
                        if (data.code == 200) {
                            $('.page1-alert-small-success').show(300).find('.page1-alert-small-success-con').html('&nbsp;&nbsp;设备编号保存成功');
                            setTimeout(function () {
                                $('.page1-alert-small-success').hide(300)
                            }, 2000)

                            $http.get($rootScope.link + '/group/getGroupData').success(function (data) {
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
                            $http.get($rootScope.link + '/group/getGroupDataByStatus').success(function (data) {
                                if (data.code == 200) {
                                    $rootScope.onlineGroupNames = data.data;
                                    //保存默认加载的设备号
                                    $rootScope.moArray = [];
                                    for (var a = 0; a < data.data[0].deviceVos.length; a++) {
                                        $rootScope.moArray.push(data.data[0].deviceVos[a].device);
                                    }

                                }else{
                                    $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                                    setTimeout(function () {
                                        $('.page1-alert-small-danger').hide(300)
                                    }, 2000)
                                }
                            });
                            $http.get($rootScope.link + '/device/getAllDevice?pageNo=1&pageSize=15').success(function (data) {
                                if (data.code == 200) {
                                    if (data.data.content.length == 0) {
                                        scope.sweepBox = true;
                                    } else {
                                        $rootScope.DataList = data.data.content;
                                        // $timeout(function(){
                                        //     for(var i=0;i<data.data.content.length;i++){
                                        //         if(data.data.content[i].rank==0){
                                        //             alert('请修改设备编号！');
                                        //             break;
                                        //         }
                                        //     }
                                        // },500);

                                    }
                                    $('.M-box1').pagination({
                                        totalData:data.data.content.length,
                                        showData: 15,
                                        coping: true,
                                        count: 2,
                                        callback: function (api) {
                                            $http.get($rootScope.link + '/device/getAllDevice?pageNo=' + page + '&pageSize=15').success(function (data) {
                                                $rootScope.DataList = data.data.content;
                                                // $timeout(function(){
                                                //     for(var i=0;i<data.data.content.length;i++){
                                                //         if(data.data.content[i].rank==0){
                                                //             alert('请修改设备编号！');
                                                //             break;
                                                //         }
                                                //     }
                                                // },500);
                                            })
                                        }
                                    })
                                }else{
                                    $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                                    setTimeout(function () {
                                        $('.page1-alert-small-danger').hide(300)
                                    }, 2000)
                                }
                            });
                            elem.parent().prev().prev().prev().prev().prev().find('input').addClass('on').attr('readonly', 'readonly');
                            elem.addClass('cs');
                            elem.next().removeClass('ce')
                        } else {
                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;设备编号保存失败，请查看手机编号是否重复并重试');
                            setTimeout(function () {
                                $('.page1-alert-small-danger').hide(300)
                            }, 2000)
                        }
                    });
                }
            });
        }
    }
}]);