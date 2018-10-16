app.controller('page17C',["$rootScope","$scope","$http","$timeout",function ($rootScope, $scope, $http, $timeout) {
    $rootScope.getAllFalse();
    $rootScope.activeSeventeen = true;
    $rootScope.navPartOne = true;
    $rootScope.isScreenPage = false;
    //$timeout(function () {
    //    $http.get($rootScope.link + '/device/getDeviceByDevice/?devices=' + JSON.stringify($rootScope.moArray) + '&pageNo=1&pageSize=17').success(function (data) {
    //        if (data.code == 200) {
    //            //$rootScope.fuckList = data.data.content;
    //            $('#pages17').Page({
    //                totalPages: data.data.totalPages,//分页总数
    //                liNums: 5,//分页的数字按钮数(建议取奇数)
    //                activeClass: 'activP', //active 类样式定义
    //                callBack: function (page) {
    //                    $http.get($rootScope.link + '/device/getDeviceByDevice/?devices=' + JSON.stringify(mArr) + '&pageNo=' + page + '&pageSize=17').success(function (data) {
    //                        $rootScope.fuckList = data.data.content;
    //                    })
    //                }
    //            });
    //        }
    //    });
    //}, 0)
    //==================================页面点击顺序=========================
    $scope.editBoxOne = false;
    $scope.editBoxTwo = false;
    $scope.editBoxThree = false;
    //================================添加新群组==============================
    $scope.addNewGroup = function () {
        $scope.editBoxThree = true;
        $scope.newGroupName = '';
    };
    $scope.cancelAddNewGroup = function () {
        $scope.editBoxThree = false;
    };
    $scope.sureAddNewGroup = function () {
        var flag = false;
        for (var x = 0; x < $rootScope.AssGroupNames.length; x++) {
            if ($scope.newGroupName == $rootScope.AssGroupNames[x]) {
                flag = true;
            }
        }
        if (flag) {
            alert('对不起，您所输入的群组名已经存在！请重新输入');
            $scope.newGroupName = '';
        } else {
            if ($scope.newGroupName == '') {
                alert('新的群组名称不能为空！');
            } else {
                $http.get($rootScope.link + '/group/createGroup?groupName=' + $scope.newGroupName).success(function (data) {
                    if (data.code == 200) {
                        alert('创建成功!');
                        $scope.editBoxThree = false;
                        $http.get($rootScope.link + '/group/getGroupData').success(function (data) {
                            if (data.code == 200) {
                                $rootScope.groupNames = data.data;
                                $scope.allGroupNames = data.data;
                                $rootScope.AssGroupNames = [];
                                $rootScope.allEquipIds = [];
                                $rootScope.equipCounts = 0;
                                for (var j = 0; j < data.data.length; j++) {
                                    $rootScope.AssGroupNames.push(data.data[j].group.name);
                                    $rootScope.allEquipIds.push(data.data[j].group.id);
                                    $rootScope.equipCounts += data.data[j].count;
                                }
                            }else {
                                alert(data.msg);
                            }
                        });
                        $http.get($rootScope.link + '/group/getGroupDataByStatus').success(function (data) {
                            if (data.code == 200) {
                                $rootScope.onlineGroupNames = data.data;
                                //保存默认加载的设备号
                                $rootScope.moArray = [];
                                for (var a = 0; a < data.data[0].deviceVos.length; a++) {
                                    $rootScope.moArray.push(data.data[0].deviceVos[a].device);
                                }
                                $http.get($rootScope.link + '/device/getDeviceByDevice/?devices=' + JSON.stringify($rootScope.moArray) + '&pageNo=1&pageSize=17').success(function (data) {
                                    if (data.code == 200) {
                                        //$rootScope.fuckList = data.data.content;
                                        $('#pages17').Page({
                                            totalPages: data.data.totalPages,//分页总数
                                            liNums: 5,//分页的数字按钮数(建议取奇数)
                                            activeClass: 'activP', //active 类样式定义
                                            callBack: function (page) {
                                                $http.get($rootScope.link + '/device/getDeviceByDevice/?devices=' + JSON.stringify(mArr) + '&pageNo=' + page + '&pageSize=17').success(function (data) {
                                                    $rootScope.fuckList = data.data.content;
                                                })
                                            }
                                        });
                                    }else {
                                        alert(data.msg);
                                    }
                                });
                            }else {
                                alert(data.msg);
                            }
                        });
                    } else {
                        alert(data.msg);
                        $scope.editBoxThree = false;
                    }
                });
            }
        }
    };
    //删除分组
    $scope.deleteable = function (id) {
        return id == 1 ? true : false;
    };
    $scope.deleteButton = function () {
        $scope.editBoxTwo = true;
        $scope.selected = [];
        var updateSelected = function (action, id) {
            if (action == 'add' && $scope.selected.indexOf(id) == -1) {
                $scope.selected.push(id);
            }
            if (action == 'remove' && $scope.selected.indexOf(id) != -1) {
                var idx = $scope.selected.indexOf(id);
                $scope.selected.splice(idx, 1);
            }
        };
        $scope.checkOne = function ($event, id) {
            var action = ($event.target.checked ? 'add' : 'remove');
            updateSelected(action, id);
        };
        $scope.isChecked = function (id) {
            return $scope.selected.indexOf(id) >= 0;
        };
    };
    $scope.cancelDeleteButton = function () {
        $scope.editBoxTwo = false;
    };
    $scope.sureDeleteButton = function () {
        $http.get($rootScope.link + '/group/delGroup?groupIds=' + JSON.stringify($scope.selected)).success(function (data) {
            if (data.code == 200) {
                alert('删除成功！');
                $scope.editBoxTwo = false;
                $http.get($rootScope.link + '/group/getGroupData').success(function (data) {
                    if (data.code == 200) {
                        $rootScope.groupNames = data.data;
                        $scope.allGroupNames = data.data;
                        $rootScope.AssGroupNames = [];
                        $rootScope.allEquipIds = [];
                        $rootScope.equipCounts = 0;
                        for (var j = 0; j < data.data.length; j++) {
                            $rootScope.AssGroupNames.push(data.data[j].group.name);
                            $rootScope.allEquipIds.push(data.data[j].group.id);
                            $rootScope.equipCounts += data.data[j].count;
                        }
                    }
                });
                $http.get($rootScope.link + '/group/getGroupDataByStatus').success(function (data) {
                    if (data.code == 200) {
                        $rootScope.onlineGroupNames = data.data;
                        //保存默认加载的设备号
                        $rootScope.moArray = [];
                        for (var a = 0; a < data.data[0].deviceVos.length; a++) {
                            $rootScope.moArray.push(data.data[0].deviceVos[a].device);
                        }
                        $http.get($rootScope.link + '/device/getDeviceByDevice/?devices=' + JSON.stringify($rootScope.moArray) + '&pageNo=1&pageSize=17').success(function (data) {
                            if (data.code == 200) {
                                //$rootScope.fuckList = data.data.content;
                                $('#pages17').Page({
                                    totalPages: data.data.totalPages,//分页总数
                                    liNums: 5,//分页的数字按钮数(建议取奇数)
                                    activeClass: 'activP', //active 类样式定义
                                    callBack: function (page) {
                                        $http.get($rootScope.link + '/device/getDeviceByDevice/?devices=' + JSON.stringify(mArr) + '&pageNo=' + page + '&pageSize=17').success(function (data) {
                                            //$rootScope.fuckList = data.data.content;
                                        })
                                    }
                                });
                            }
                        });

                    }
                });
            } else {
                alert('删除失败！请重新再试！');
            }
        });
    };
    //修改分组名
    $scope.changeNameButton = function () {
        var id=0
        $scope.editBoxOne = true;
        $scope.changeId = id;
        $scope.newGroupName = '';
    };
    $scope.cancelChangeButton = function () {
        $scope.editBoxOne = false;
    };
    $scope.sureChangeButton = function (id) {
        var flag = false;
        for (var x = 0; x < $rootScope.AssGroupNames.length; x++) {
            if ($scope.changeGroupName == $rootScope.AssGroupNames[x]) {
                flag = true;
            }
        }
        if (flag) {
            alert('对不起，您所输入的群组名已经存在！请重新输入');
            $scope.changeGroupName = '';
        } else {
            if ($scope.changeGroupName == '') {
                alert('请填写新的分组名！');
            } else {
                id = $('input:radio:checked').val();
                $http.get($rootScope.link + '/group/updateGroupName?groupId=' + id + '&newName=' + $scope.changeGroupName).success(function (data) {
                    if (data.code == 200) {
                        alert('修改成功!');
                        $scope.editBoxOne = false;
                        $scope.changeGroupName = '';
                        $http.get($rootScope.link + '/group/getGroupData').success(function (data) {
                            if (data.code == 200) {
                                $rootScope.groupNames = data.data;
                                $scope.allGroupNames = data.data;
                                $rootScope.AssGroupNames = [];
                                $rootScope.allEquipIds = [];
                                $rootScope.equipCounts = 0;
                                for (var j = 0; j < data.data.length; j++) {
                                    $rootScope.AssGroupNames.push(data.data[j].group.name);
                                    $rootScope.allEquipIds.push(data.data[j].group.id);
                                    $rootScope.equipCounts += data.data[j].count;
                                }
                            }else {
                                alert(data.msg);
                            }
                        });
                        $http.get($rootScope.link + '/group/getGroupDataByStatus').success(function (data) {
                            if (data.code == 200) {
                                $rootScope.onlineGroupNames = data.data;
                                //保存默认加载的设备号
                                $rootScope.moArray = [];
                                for (var a = 0; a < data.data[0].deviceVos.length; a++) {
                                    $rootScope.moArray.push(data.data[0].deviceVos[a].device);
                                }
                                $http.get($rootScope.link + '/device/getDeviceByDevice/?devices=' + JSON.stringify($rootScope.moArray) + '&pageNo=1&pageSize=17').success(function (data) {
                                    if (data.code == 200) {
                                        //$rootScope.fuckList = data.data.content;
                                        $('#pages17').Page({
                                            totalPages: data.data.totalPages,//分页总数
                                            liNums: 5,//分页的数字按钮数(建议取奇数)
                                            activeClass: 'activP', //active 类样式定义
                                            callBack: function (page) {
                                                $http.get($rootScope.link + '/device/getDeviceByDevice/?devices=' + JSON.stringify(mArr) + '&pageNo=' + page + '&pageSize=17').success(function (data) {
                                                    $rootScope.fuckList = data.data.content;
                                                })
                                            }
                                        });
                                    }else {
                                        alert(data.msg);
                                    }
                                });
                            }else {
                                alert(data.msg);
                            }
                        });
                    } else {
                        alert(data.msg);
                        $scope.editBoxOne = false;
                        $scope.changeGroupName = ''
                    }
                });
            }
        }

    };

    $scope.isDisabled = function (id) {
        if (id == 1) {
            return true;
        }
    };
    $scope.dColor = function (id) {
        var a;
        if (id == 1) {
            a = 'binged';
        } else {
            a = 'binging';
        }
        return a;
    }
    //=====================================移动分组=======================
    $scope.moveBox = false;
    $scope.assMoveTo = true;
    $scope.moveId = 1;
    $scope.moveToId = function (id) {
        $scope.moveId = id;
    };
    $scope.groupMoveTo = function () {
        $scope.moveGroup = []
        for (var i = 0; i < $('.page17-floor-new-li input').length; i++) {
            if ($('.page17-floor-new-li input').eq(i).prop('checked')) {
                $scope.moveGroup.push($('.page17-floor-new-li input').eq(i).attr('mess_id'));
            }
        }
        if ($scope.moveGroup.length == 0) {
            alert('请勾选需要移动的设备!');
        } else {
            $scope.moveBox = true;
            $scope.moveId = 1;
        }
    };
    $scope.cancelMoveTo = function () {
        $scope.moveBox = false;
    };
    $scope.sureMoveTo = function () {
        $http.get($rootScope.link + '/group/moveGroup?groupId=' + $scope.moveId + '&devices=' + JSON.stringify($scope.moveGroup)).success(function (data) {
            if (data.code == 200) {
                $scope.moveGroup = []
                for (var i = 0; i < $('.page17-floor-new-li input').length; i++) {
                    if ($('.page17-floor-new-li input').eq(i).prop('checked')) {
                        $scope.moveGroup.push($('.page17-floor-new-li input').eq(i).attr('mess_id'));
                    }
                }
                alert('移动成功！');
                $scope.moveBox = false;
                $http.get($rootScope.link + '/group/getGroupData').success(function (data) {
                    if (data.code == 200) {
                        $rootScope.groupNames = data.data;
                        $scope.allGroupNames = data.data;
                        $rootScope.AssGroupNames = [];
                        $rootScope.allEquipIds = [];
                        $rootScope.equipCounts = 0;
                        for (var j = 0; j < data.data.length; j++) {
                            $rootScope.AssGroupNames.push(data.data[j].group.name);
                            $rootScope.allEquipIds.push(data.data[j].group.id);
                            $rootScope.equipCounts += data.data[j].count;
                        }
                    }else {
                        alert(data.msg);
                    }
                });
                $http.get($rootScope.link + '/group/getGroupDataByStatus').success(function (data) {
                    if (data.code == 200) {
                        $rootScope.onlineGroupNames = data.data;
                        //保存默认加载的设备号
                        $rootScope.moArray = [];
                        for (var a = 0; a < data.data[0].deviceVos.length; a++) {
                            $rootScope.moArray.push(data.data[0].deviceVos[a].device);
                        }
                        //$http.get($rootScope.link + '/device/getDeviceByDevice/?devices=' + JSON.stringify($rootScope.moArray) + '&pageNo=1&pageSize=17').success(function (data) {
                        //    if (data.code == 200) {
                        //        //$rootScope.fuckList = data.data.content;
                        //        $('#pages17').Page({
                        //            totalPages: data.data.totalPages,//分页总数
                        //            liNums: 5,//分页的数字按钮数(建议取奇数)
                        //            activeClass: 'activP', //active 类样式定义
                        //            callBack: function (page) {
                        //                $http.get($rootScope.link + '/device/getDeviceByDevice/?devices=' + JSON.stringify(mArr) + '&pageNo=' + page + '&pageSize=17').success(function (data) {
                        //                    //$rootScope.fuckList = data.data.content;
                        //                })
                        //            }
                        //        });
                        //    }
                        //});
                    }else {
                        alert(data.msg);
                    }
                });
                $('.page17-all-checked').hide();
            } else {
                alert(data.msg);
            }
        });
    };
    $scope.moChecked = function (id) {
        return id == 1 ? true : false;
    };

}]);
