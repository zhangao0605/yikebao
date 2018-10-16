var app = angular.module('myApp', ['ngRoute']);
app.run(["$rootScope", "$location", "$http", "$timeout", function ($rootScope, $location, $http, $timeout,) {
    $rootScope.isActive = function (a) {
        if (a) {
            return 'init-on';
        }
    };
    $rootScope.isActive1 = function (a) {
        if (a) {
            return 'init-on-on';
        }
    };
    if ($rootScope.UserName== undefined || $rootScope.UserName== null) {
        $rootScope.UserName='User'
    }else {

    }
    $rootScope.table2AllChecks = 0;
    $rootScope.cscs = false;
    $rootScope.cece = false
    $rootScope.aqAll = true;
    $rootScope.getAllFalse = function () {
        //$rootScope.activeOne=false;
        $rootScope.activeTwo = false;
        $rootScope.activeThree = false;
        $rootScope.activeFour = false;
        $rootScope.activeFive = false;
        $rootScope.activeSix = false;
        $rootScope.activeSeven = false;
        $rootScope.activeEight = false;
        $rootScope.activeNine = false;
        $rootScope.activeTen = false;
        $rootScope.activeEleven = false;
        $rootScope.activeTwelve = false;
        $rootScope.activeThirdteen = false;
        $rootScope.activeFourteen = false;
        $rootScope.activeFifteen = false;
        $rootScope.activeSixteen = false;
        $rootScope.activeSeventeen = false;
        $rootScope.activeEightteen = false;
        $rootScope.activeNineteen = false;
        $rootScope.activeTwenty = false;
        $rootScope.activeTwentyone = false;
        $rootScope.activeTwentytwo = false;
        $rootScope.activeTwentythree = false;
        $rootScope.activeTwentyfour = false;
        $rootScope.activeTwentyfive = false;
        $rootScope.activeTwentySix = false;
        $rootScope.activeTwentySeven = false;
        $rootScope.activeTwentyEight = false;
        $rootScope.activeTwentyNine = false;
        $rootScope.activeThirty = false;
        $rootScope.activeThirtyOne = false;
        $rootScope.activeThirtyTwo = false;
        $rootScope.activeThirtySree = false;
        $rootScope.activeThirtyFive = false;
        $rootScope.activeThirtySix = false;
        $rootScope.activeThirtySeven = false;
        $rootScope.activeThirtyEight = false;
        $rootScope.activeThirtyNine = false;
        $rootScope.activemmp = false;

        //======================大板块======================
        $rootScope.navPartOne = false;
        //$rootScope.navPartTwo=false;
        $rootScope.navPartThree = false;
        $rootScope.navPartFour = false;
        //$rootScope.navPartFive=false;
        $rootScope.navPartSix = false;
        $rootScope.navPartSeven = false;
        $rootScope.navPartEight = false;
    };
    $rootScope.link = '/wgcs';
    // $http.get($rootScope.link + '/checkSession').success(function (data) {
    //     if (data.code == 200) {
    //         if (data.data == true) {
    //             window.location.href = 'http://'+window.location.host+'/wgcs/#/page34'
    //         } else {
    //             window.location.href='http://'+window.location.host+'/wgcs/#/login'
    //         }
    //     }
    // })

    /*----------任务日志监听-------------*/
    // var allzhinxing = [];
    //
    // var t = setInterval(function () {
    //     var tt = false;
    //     $http.get($rootScope.link + '/task/getGroupTaskInit?status=1').success(function (data) {
    //         if (data.code == 200) {
    //             tt = true;
    //             var arr = data.data;
    //             for (var i = 0; i < arr.length; i++) {
    //                 var num = arr[i].id;
    //                 var flag = false;
    //                 if (allzhinxing.length == 0) {
    //                     allzhinxing.push(num);
    //                 } else {
    //                     for (var j = 0; j < allzhinxing.length; j++) {
    //                         var n = allzhinxing[j];
    //                         if (n == num) {
    //                             flag = true;
    //                             break;
    //                         }
    //                     }
    //                 }
    //                 if (flag == false) {
    //                     allzhinxing.push(num);
    //                 }
    //             }
    //         } else {
    //         }
    //     });
    //     if (tt == false) {
    //
    //     } else {
    //         $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
    //             if (data.code == 200) {
    //                 var arr1 = data.data;
    //                 for (var i = 0; i < arr1.length; i++) {
    //                     var num = arr1[i].id;
    //                     var num1 = arr1[i].scriptChName;
    //                     var num2 = arr1[i].status;
    //                     var flag = false;
    //                     for (var j = 0; j < allzhinxing.length; j++) {
    //                         var n = allzhinxing[j];
    //                         if (n == num) {
    //                             flag = true;
    //                             break;
    //                         }
    //                     }
    //                     if (flag == true) {
    //                         for (var i = 0; i < allzhinxing.length; i++) {
    //                             if (allzhinxing[i] == num) {
    //                                 allzhinxing.slice(i, 1);
    //                             }
    //                         }
    //                         if (num2 == 2) {
    //                             $('.page1-alert-success').show(300).find('.page1-alert-success-con').html('&nbsp;&nbsp;' + num1 + '任务执行完成');
    //                             setTimeout(function () {
    //                                 $('.page1-alert-success').hide(300)
    //                             }, 2000)
    //                         } else if (num2 == -1) {
    //
    //                             $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;' + num1 + '任务执行完成任务执行异常');
    //                             setTimeout(function () {
    //                                 $('.page1-alert-waring').hide(300)
    //                             }, 2000)
    //                         } else if (num2 == 3) {
    //                             $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;' + num1 + '任务执行完成任务执行失败');
    //                             setTimeout(function () {
    //                                 $('.page1-alert-danger').hide(300)
    //                             }, 2000)
    //                         }
    //                     }
    //                 }
    //             } else {
    //             }
    //         });
    //     }
    //
    //     console.log(allzhinxing)
    // }, 3000)


    $rootScope.firstLogin = false;
    $rootScope.huyt = 0;
    $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([-1, 2, 3]) + '&pageNo=1&pageSize=100').success(function (data) {
        if (data.code == 200) {
            $rootScope.huyt = data.data.content[0].id;
        } else {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        }
    });
    $rootScope.initOver = false;
    $rootScope.comWechatNum = false;
    $rootScope.rightTaskEatch = 1
    var startInit1 = setInterval(function () {
        if ($rootScope.initOver == true) {
            var arr = [];
            var arr2 = [];
            var arr3 = [];
            var arr4 = [];
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
                    $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                    setTimeout(function () {
                        $('.page1-alert-small-danger').hide(300)
                    }, 2000)
                }
            });

            $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([-1, 2, 3]) + '&pageNo=1&pageSize=100').success(function (data) {
                var aii = []
                for (var i = 0; i < data.data.content.length; i++) {
                    aii.push(data.data.content[i])
                }
                if ($rootScope.firstLogin == false) {
                    $rootScope.firstLogin = true
                } else {
                    $rootScope.huyt = aii[0].id;
                }
            })
            $http.get($rootScope.link + '/task/getTaskToast?id=' + $rootScope.huyt + '').success(function (data) {
                if (data.code == 200) {
                    if (data.data.length == 0) {
                    } else {
                        for (var i = 0; i < data.data.length; i++) {
                            if (data.data[i].status == -1) {
                                $('.page1-alert-danger1').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;' + data.data[i].scriptChName + '任务执行失败')
                                setTimeout(function () {
                                    $('.page1-alert-danger1').hide(300)
                                }, 2000)
                            } else if (data.data[i].status == 3) {
                                $('.page1-alert-waring1').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;' + data.data[i].scriptChName + '任务执行异常')
                                setTimeout(function () {
                                    $('.page1-alert-waring1').hide(300)
                                }, 2000)
                            } else {
                                if (data.data[i].scriptChName == "升级微信客户端") {
                                    $rootScope.comWechatNum = true;
                                } else {
                                    $rootScope.comWechatNum = false;
                                }
                                if (data.data[i].scriptChName == "获取微信好友列表") {
                                    $rootScope.reloads = true;
                                } else {
                                }
                                if (data.data[i].scriptChName == "获取微信群聊列表") {
                                    $rootScope.reloads1 = true;
                                } else {
                                }
                                $('.page1-alert-success1').show(300).find('.page1-alert-success-con').html('&nbsp;&nbsp;' + data.data[i].scriptChName + '任务执行完成')
                                setTimeout(function () {
                                    $('.page1-alert-success1').hide(300)
                                }, 2000)
                            }
                        }
                    }
                } else {
                }
            });

        } else {
        }
    }, 2000)

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
            a = 'page-blue';
        } else if (n == 3) {
            a = 'page-yellow';
        }
        return a;
    };
    $rootScope.getLineHigh = function ($event) {
        $($event.target).css('overflow-y', 'auto');
    };
    $rootScope.getLineDown = function ($event) {
        $($event.target).css('overflow', 'hidden');
    };
    //==========================任务列表展开===================

    $rootScope.changeSize = function () {
        // console.log("展开")
        if (!$rootScope.isScreenPage) {
            $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
                if (data.code == 200) {
                    $rootScope.rightTaskEatch = 1
                    $rootScope.taskList = data.data;
                    // $rootScope.viewSize = 'view-small';
                    $rootScope.taskSize = 'task-big';
                    $rootScope.aqAll = false;
                    $rootScope.taskButtonHide = true;
                    $rootScope.taskHideButton = true;
                    $rootScope.taskAll = true;
                    $rootScope.taskDoing = false;
                    $rootScope.taskWait = false;
                    $rootScope.taskDown = false;
                    return $rootScope.taskList
                } else {


                    $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                    setTimeout(function () {
                        $('.page1-alert-small-danger').hide(300)
                    }, 2000)
                }
            });
        }
    };
    //==========================任务列表隐藏===================
    $rootScope.getHide = function () {
        // console.log("隐藏")
        $rootScope.toshow = false;
        $rootScope.aqAll = true;
        $rootScope.toshowtwo = false;
        // $rootScope.viewSize = 'view-big';
        $rootScope.taskSize = 'task-small';
        $timeout(function () {
            $rootScope.taskButtonHide = false;
            $rootScope.taskHideButton = false;
            $rootScope.newBell = false;
        }, 800);
    };
    //========================新消息提示======================
    $rootScope.newBell = false;
    //======================列表的单双变色======================
    $rootScope.isEven = function (n) {
        var a;
        if (n % 2 == 0) {
            a = 'deep-color-li';
        }
        return a;
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


                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                setTimeout(function () {
                    $('.page1-alert-small-danger').hide(300)
                }, 2000)
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


                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                setTimeout(function () {
                    $('.page1-alert-small-danger').hide(300)
                }, 2000)
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


                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                setTimeout(function () {
                    $('.page1-alert-small-danger').hide(300)
                }, 2000)
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


                                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                                setTimeout(function () {
                                    $('.page1-alert-small-danger').hide(300)
                                }, 2000)
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


                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                setTimeout(function () {
                    $('.page1-alert-small-danger').hide(300)
                }, 2000)
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


                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                setTimeout(function () {
                    $('.page1-alert-small-danger').hide(300)
                }, 2000)
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


                                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                                setTimeout(function () {
                                    $('.page1-alert-small-danger').hide(300)
                                }, 2000)
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


                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                setTimeout(function () {
                    $('.page1-alert-small-danger').hide(300)
                }, 2000)
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


                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                setTimeout(function () {
                    $('.page1-alert-small-danger').hide(300)
                }, 2000)
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


                                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                                setTimeout(function () {
                                    $('.page1-alert-small-danger').hide(300)
                                }, 2000)
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


                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                setTimeout(function () {
                    $('.page1-alert-small-danger').hide(300)
                }, 2000)
            }

        });

    };
    //===================================获取设备组数据====================================
    $http.get($rootScope.link + '/group/getGroupData').success(function (data) {
        $rootScope.groupNames = data.data;
        $rootScope.groupNumbers = data.data.length;
        /*获取二级分组个数*/
        $rootScope.pageZhe = true;
        //====================将所有分组名保存 以及设备的总数 以及分组的id==================
        $rootScope.AssGroupNames = [];
        $rootScope.allEquipIds = [];
        $rootScope.equipCounts = 0;
        for (var j = 0; j < data.data.length; j++) {
            $rootScope.AssGroupNames.push(data.data[j].group.name);
            $rootScope.allEquipIds.push(data.data[j].group.id);
            $rootScope.equipCounts += data.data[j].count;
        }
        //==================将所有分组下的个数保存===========================
        for (var i = 0; i < data.data.length; i++) {
            if (data.data[i].count != 0) {
                $rootScope.pageZhe = false;
                break;
            }
        }
        //保留所有的设备总数
    });
    //$interval(function(){
    //    $http.get($rootScope.link+'/group/getGroupData').success(function(data){
    //        $rootScope.groupNames=data.data;
    //        $rootScope.groupNumbers=data.data.length;
    //        $rootScope.pageZhe=true;
    //        //将所有分组名保存 以及设备的总数 以及分组的id
    //        $rootScope.AssGroupNames=[];
    //        $rootScope.allEquipIds=[];
    //        $rootScope.equipCounts=0;
    //        for(var j=0;j<data.data.length;j++){
    //            $rootScope.AssGroupNames.push(data.data[j].group.name);
    //            $rootScope.allEquipIds.push(data.data[j].group.id);
    //            $rootScope.equipCounts+=data.data[j].count;
    //        }
    //        //将所有分组下的人数保存
    //        for(var i=0;i<data.data.length;i++){
    //            if(data.data[i].count!=0){
    //                $rootScope.pageZhe=false;
    //                break;
    //            }
    //        }
    //        //保留所有的设备总数
    //    });
    //    $http.get($rootScope.link+'/group/getGroupDataByStatus').success(function(data){
    //        if(data.code==200){
    //            $rootScope.onlineGroupNames=data.data;
    //            //保存默认加载的设备号
    //            $rootScope.moArray=[];
    //            for(var a=0;a<data.data[0].deviceVos.length;a++){
    //                $rootScope.moArray.push(data.data[0].deviceVos[a].device);
    //            }
    //
    //        }
    //    });
    //},60000);
    $rootScope.idNow = 0;
    $rootScope.getMoreEquip = function (id) {
        var assId = [id];
        if ($rootScope.idNow != id) {
            $rootScope.idNow = id;
            $http.get($rootScope.link + '/device/getDeviceByGroup?groupIds=' + JSON.stringify(assId)).success(function (data) {

                $rootScope.deviceEquip = data.data;
            })
        }
    };
    //=========================page4移动分组的id====================
    $rootScope.moveToId = '';
    //==========================获取在线组设备的数据====================
    $http.get($rootScope.link + '/group/getGroupDataByStatus').success(function (data) {
        if (data.code == 200) {
            $rootScope.onlineGroupNames = data.data;
            //==========================保存默认加载的设备号=======================
            $rootScope.moArray = [];
            for (var a = 0; a < data.data[0].deviceVos.length; a++) {
                $rootScope.moArray.push(data.data[0].deviceVos[a].device);
            }
        } else {


            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        }
    });
    //==========================初始化状态值====================
    $rootScope.Status = function (s) {
        return s == 1 ? '在线' : '离线';
    };
    $rootScope.jipStatus = function (s) {
        var pp = '';
        if (s == 2) {
            pp = '成功'
        } else if (s == 3) {
            pp = '异常'
        } else {
            pp = '失败'
        }
        return pp
    };
    //=========================远程任务状态切换====================
    $rootScope.StatusTurn = function (s) {
        return s == 1 ? '启动' : '已启动';
    };
    $rootScope.StatusTurn1 = function (s) {
        return s == 1 ? '精准加人' : '通讯录加人';
    };
    //=========================同屏显示的关闭socket数组====================
    $rootScope.socketArr = [];
    $rootScope.$watch('socketArr', function (newVal, oldVal) {
        if (oldVal.length > 0) {
            for (var i = 0; i < oldVal.length; i++) {
                oldVal[i].close();
            }
        }
    });
    // setInterval(function () {
    //     console.log('1-1')
    // },1000)
    $rootScope.nameSlice = function (e) {
        var Page4Nmame = ''
        if (e.length >= 8) {
            Page4Nmame = e.slice(0, 8) + '...'
        } else {
            Page4Nmame = e
        }
        return Page4Nmame
    }
    $rootScope.TimeSlice = function (e) {
        var Page4Nmame = ''
        if (e == '') {
            Page4Nmame = e
        } else if (e.length > 10) {
            Page4Nmame = e.slice(0, 10)
        } else {
            Page4Nmame = e
        }
        return Page4Nmame
    }
    $rootScope.showSex = function (e) {
        var Page4Nmame = ''
        if (e == 0) {
            Page4Nmame = '未知'
        } else if (e.length > 10) {
            Page4Nmame = '女'
        } else {
            Page4Nmame = '男'
        }
        return Page4Nmame
    }
    $rootScope.showWhichName = function (e, q) {
        var Page4Nmame = ''
        if (q == '') {
            Page4Nmame = e
            if (e.length >= 8) {
                Page4Nmame = e.slice(0, 8) + '...'
            }
        } else {
            Page4Nmame = q
            if (q.length >= 8) {
                Page4Nmame = e.slice(0, 8) + '...'
            }
        }
        return Page4Nmame
    }
    $rootScope.showWhichName1 = function (e) {
        var Page4Nmame = ''
        if (e.length >= 8) {
            Page4Nmame = e.slice(0, 7) + '...'
        } else {
            Page4Nmame = e
        }
        return Page4Nmame
    }
}]);

app.controller('loginC', ["$rootScope", "$scope", "$http", "$timeout", function ($rootScope, $scope, $http, $timeout) {
    $http.get($rootScope.link + '/checkSession').success(function (data) {
        if (data.code == 200) {
            if (data.data == true) {
                window.location.href = 'http://' + window.location.host + '/wgcs/#/page34'
            } else {
            }
        }
    })
    $('.side-bar1').hide()
    $('.task-box').hide()
    $('.view-box').css('height', '60%')
    $rootScope.mainShow = false;
    /*用户名正则判断*/
    var getlocalAll = JSON.parse(localStorage.getItem("remember-me"));
    // console.log(getlocalAll)
    if (getlocalAll == null || getlocalAll.name == undefined || getlocalAll.pas == undefined || getlocalAll.name == null || getlocalAll.pas == null) {
        $('.remember-me-icon').removeClass('onhaha');
        $scope.indexs = 0;
        $scope.nameLogin = '';
        $scope.pasLogin = '';
    } else {

        $('.remember-me-icon').addClass('onhaha')
        $scope.nameLogin = getlocalAll.name
        $scope.pasLogin = getlocalAll.pas
        $scope.indexs = 1
    }
    $('.remember-me-icon').click(function () {
        $scope.indexs++;
        if ($scope.indexs % 2 == 0) {
            $('.remember-me-icon').removeClass('onhaha')
        } else {
            $('.remember-me-icon').addClass('onhaha')
        }
    })
    var uPattern = /^[a-zA-Z0-9_]{4,16}$/;
    $('.Verification-user').blur(function () {
        if (uPattern.test($scope.nameLogin) == true) {
            $('.login-tishi').hide()
        } else {
            console.log(11, $scope.nameLogin)
            $('.login-tishi').show().html('用户名由4到16位(字母,数字,下划线,减号)组成')
        }
    })
    // var uPattern1 = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/
    var uPattern1 = /^[0-9a-zA-Z]{6,16}$/
    $('.Verification-password').blur(function () {
        if (uPattern1.test($scope.pasLogin) == true) {
            $('.login-tishi').hide()
        } else {
            console.log(11, $scope.nameLogin)
            $('.login-tishi').show().html('密码由6到16位(字母,数字)组成')
        }
    })
    $scope.sendMsg = function () {
        var a = sessionStorage.getItem("za-session");
        if (uPattern1.test($scope.pasLogin) == false || uPattern.test($scope.nameLogin) == false) {
            $('.login-tishi').show().html('用户名或密码不正确')
        } else {
            var sendObj = new FormData();
            sendObj.append('username', $scope.nameLogin);
            sendObj.append('password', $scope.pasLogin);
            $http({
                method: 'POST',
                url: $rootScope.link + '/login',
                data: sendObj,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (response) {
                //上传成功的操作
                if (response.code == 200) {
                    $rootScope.UserName=$scope.nameLogin
                    if ($('.remember-me-icon').hasClass('onhaha')) {
                        var localAll = JSON.stringify({'name': $scope.nameLogin, 'pas': $scope.pasLogin});
                        localStorage.setItem("remember-me", localAll);
                    } else {
                        localStorage.removeItem('remember-me');
                    }
                    localStorage.setItem("sessionId", response.data);
                    window.location.href = 'http://' + window.location.host + '/wgcs/#/page34'
                } else {
                    $('.login-tishi').show().html(response.msg)
                }
            });
            /*发送验证成功后执行*/
        }
    }
}])

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
app.controller('page10C',["$rootScope","$scope","$location","$anchorScroll","$http",function ($rootScope, $scope, $location, $anchorScroll, $http) {
    $rootScope.getAllFalse();
    $rootScope.activeTen = true;
    $rootScope.navPartThree = true;
    $rootScope.isScreenPage = false;
    //自动接受新朋友添加请求
    // $scope.timeInterval = 5;
    $scope.maxTime = 10;
    $scope.minTime = 1;
    $scope.sendAll = function () {
        for (var i = 0, arr = []; i < $('.new-wx-equip-input10').length; i++) {
            if ($('.new-wx-equip-input10').eq(i).prop('checked')) {
                arr.push($('.new-wx-equip-input10').eq(i).parent().next().attr('title'));
            }
        }
        if (arr.length == 0) {
            alert('请勾选需要操作的设备!');
        } else if ($scope.timeInterval == '') {
            alert('请填写时间间隔！');
        } else {
            var sendObj = new FormData();
            sendObj.append('devices', JSON.stringify(arr));
            // sendObj.append('interval', $scope.timeInterval);
            sendObj.append('maxInterval', $scope.maxTime);
            sendObj.append('minInterval', $scope.minTime);
            $http({
                method: 'POST',
                url: $rootScope.link + "/wechatPlus/receiveRequest",
                data: sendObj,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (response) {
                //上传成功的操作
                if (response.code == 200) {
                    alert('任务添加成功!');
                    $location.hash('page-top10');
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

app.controller('page11C', ["$rootScope", "$scope", "$location", "$anchorScroll", "$timeout", "$http", function ($rootScope, $scope, $location, $anchorScroll, $timeout, $http) {
    $rootScope.upMsg = 0
    $rootScope.getAllFalse();
    $rootScope.activeEleven = true;
    $rootScope.navPartThree = true;
    $rootScope.isScreenPage = false;
    $scope.ThumbsUpTurn = false
    //回到导航栏
    $scope.getNav = function () {
        $location.hash('nav-bottom11');
        $anchorScroll();
    };
    //页面上的按钮点击 页面的先后顺序
    $scope.outSideBox = true;
    $scope.inSideBox = false;

    //-----------------------点击查看好友列表查看所有好友-----------------
    $scope.getInsideBox = function (id, num, devices) {
        $scope.MemberId = id;
        $scope.newDevices = devices;
        $scope.MemberNumber = num;
        $http.get($rootScope.link + '/operate/getContact?wechatId=' + id + '&pageNo=1&pageSize=2000').success(function (data) {
            if (data.code == 200) {
                $scope.outSideBox = false;
                $scope.inSideBox = true;
                $scope.WxList = data.data.content;
                // console.log($scope.WxList)
                $scope.assPage = 1;
                // $('#pages111').Page({
                //     totalPages: data.data.totalPages,//分页总数
                //     liNums: 5,//分页的数字按钮数(建议取奇数)
                //     activeClass: 'activP', //active 类样式定义
                //     callBack: function (page) {
                //         $http.get($rootScope.link + '/operate/getContact?wechatId=' + id + '&pageNo=' + page + '&pageSize=16').success(function (data) {
                //             $scope.WxList = data.data.content;
                //             $scope.assPage = page;
                //         })
                //     }
                // });
            } else {
                alert(data.msg)
            }

        });
    };
    $scope.getBack = function () {
        $scope.outSideBox = true;
        $scope.inSideBox = false;
    };
    //刷新
    $scope.getNew = function (id) {
        $http.get($rootScope.link + '/wechat/getFriendList?wechatId=' + id).success(function (data) {
            if (data.code == 200) {
                alert('添加任务成功！');
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
                alert(data.msg)
            }
        });
    };

    //更改名字和标签名
    $scope.editBoxOne = false;
    $scope.editBoxTwo = false;
    $scope.newName = '';
    $scope.newTag = '';
    $scope.getEditBoxOne = function (id) {
        $scope.editBoxOne = true;
        $scope.editId = id;
    };
    $scope.getEditBoxTwo = function (id) {
        $scope.editBoxTwo = true;
        $scope.editId = id;
    };
    $scope.cancelButton = function () {
        $scope.editBoxOne = false;
        $scope.editBoxTwo = false;
    };
    $scope.SureButtonOne = function (id) {
        if ($scope.newName == '') {
            alert('请填写需要更改的昵称！');
        } else {
            $http.get($rootScope.link + '/operate/updateContact?name=' + $scope.newName + '&id=' + id).success(function (data) {
                if (data.code == 200) {
                    alert('修改成功！');
                    $scope.editBoxOne = false;
                    $scope.newName = '';
                    $http.get($rootScope.link + '/operate/getContact?wechatId=' + $scope.MemberId + '&pageNo=' + $scope.assPage + '&pageSize=16').success(function (data) {
                        if (data.code == 200) {
                            $scope.WxList = data.data.content;
                        } else {
                            alert(data.msg)
                        }
                    });
                } else {
                    alert(data.msg)
                }
            });
        }

    };
    $scope.SureButtonTwo = function (id) {
        if ($scope.newTag == '') {
            alert('请填写需要更改的昵称！');
        } else {
            $http.get($rootScope.link + '/operate/updateContact?tag=' + $scope.newTag + '&id=' + id).success(function (data) {
                if (data.code == 200) {
                    alert('修改成功！');
                    $scope.editBoxTwo = false;
                    $scope.newTag = '';
                    $http.get($rootScope.link + '/operate/getContact?wechatId=' + $scope.MemberId + '&pageNo=' + $scope.assPage + '&pageSize=16').success(function (data) {
                        if (data.code == 200) {
                            $scope.WxList = data.data.content;
                        } else {
                            alert(data.msg)
                        }
                    });
                } else {
                    alert(data.msg)
                }
            });
        }

    };
    //-----------------一级界面实时刷新好友列表--------------

    $scope.getNewMore = function () {
        $scope.checkedMore = new Array();
        console.log($rootScope.MemberList11)
        if ($rootScope.MemberList11 == undefined) {

            alert("请选择需要刷新好友列表设备")
            return
        } else {
            angular.forEach($rootScope.MemberList11, function (i) {
                $scope.checkedMore.push(i.wechatVo.id);
            })
            var checkedMore1 = angular.toJson($scope.checkedMore)
            var sendObj = new FormData();
            sendObj.append('wechatId', checkedMore1);
            $http({
                method: 'POST',
                url: $rootScope.link + "/wechat/getSomeFriendList",
                data: sendObj,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (data) {
                if (data.code == 200) {
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
                    alert('添加任务栏成功！');

                } else {
                    alert(data.msg)
                }
            });
        }
    }
    //-----------------二级界面实时发送好友消息--------------
    $scope.sendMsgFri = false;


    $scope.NoMessageSendBox = function () {
        $scope.sendMsgFri = false;
    }
    //---------------点击发送消息按钮--------------
    $scope.maxInterval = 10
    $scope.minInterval = 1
    $scope.getMessageSendBox = function () {

        $scope.groupArr = [];
        $scope.clubNames = [];

        $scope.saySomething = '';
        for (var i = 0; i < $('.page11-div-checkbox').length; i++) {
            if ($('.page11-div-checkbox').eq(i).find('input').prop('checked')) {
                $scope.groupArr.push($('.page11-div-checkbox').eq(i).attr('group_id'));
                $scope.clubNames.push($('.page11-div-checkbox').eq(i).attr('club_name'));
            }
        }
        if ($scope.groupArr.length == 0) {
            alert('请勾选需要发送的好友名称！');
        } else {
            $scope.sendMsgFri = true;
        }
    };
    $scope.devicss = []

    $scope.sureMessageSendBox = function () {
        $scope.devicss.push($scope.newDevices)
        if ($scope.saySomething == '') {
            alert('请填写需要发送的内容!');
        } else {
            console.log($scope.groupArr.length)
            if($scope.groupArr.length>200){
                alert('由于微信策略限制每天最多群发好友上限800人，每次群发上限200人')
            }
            $scope.sendMsgFri = false;
            $scope.sendObj1 = new FormData();
            $scope.messageSendBox = false;
            $scope.sendObj1.append('devices', JSON.stringify($scope.devicss));
            $scope.sendObj1.append('isAll', $rootScope.upMsg);
            $scope.sendObj1.append('friendsIdList', JSON.stringify($scope.groupArr));
            $scope.sendObj1.append('msg', $scope.saySomething);
            $scope.sendObj1.append('maxInterval', $scope.maxInterval);
            $scope.sendObj1.append('minInterval', $scope.minInterval);
            $http({
                method: 'POST',
                url: $rootScope.link + "/operate/sendMsgByDevice",
                data: $scope.sendObj1,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (response) {
                //上传成功的操作
                if (response.code == 200) {
                    $http.get($rootScope.link + '/operate/getContact?wechatId=' + $scope.MemberId + '&pageNo=1&pageSize=5000').success(function (data) {
                        if (data.code == 200) {
                            $("#zheMoren").removeClass('on').find('input').prop('checked', function () {
                                return false
                            });
                            $scope.devicss = []
                            $rootScope.upMsg = 0;
                            $scope.outSideBox = false;
                            $scope.inSideBox = true;
                            $scope.WxList = data.data.content;
                            alert('任务添加成功！');
                        }
                    });
                    $scope.messageSendBox = false;
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
                    $scope.devicss = []
                    alert(response.msg);
                }
            });
        }

    };


    //----------------------给固定好友朋友圈点赞-----------------
    $scope.ThumbsUpNums = 1
    $scope.ThumbsUp = function () {

        $scope.groupArr1 = [];
        $scope.clubNames1 = [];
        for (var i = 0; i < $('.page11-div-checkbox').length; i++) {
            if ($('.page11-div-checkbox').eq(i).find('input').prop('checked')) {
                $scope.groupArr1.push($('.page11-div-checkbox').eq(i).attr('group_id'));
                $scope.clubNames1.push($('.page11-div-checkbox').eq(i).attr('club_name'));
            }
        }
        if ($scope.groupArr1.length == 0) {
            alert('请勾选需要发送的好友！');
        } else {
            $scope.ThumbsUpTurn = true;

        }
        // $scope.ThumbsUpTurn = true;
    }
    $scope.NoThumbsUpTurn = function () {
        $scope.ThumbsUpTurn = false;
        $scope.ThumbsUpNums = 1
    }
    $scope.lastFound = function () {
        if ($scope.ThumbsUpNums == undefined) {
            alert('点赞数量范围为"1-30"请再次输入')
            $scope.ThumbsUpNums = 1;
        }

    }
    // setInterval(function () {
    //     console.log($scope.ThumbsUpNums)
    // },1000)
    $scope.sureThumbsUpTurn = function () {
        $scope.devicss.push($scope.newDevices)
        $scope.sendObj2 = new FormData();
        $scope.sendObj2.append('devices', JSON.stringify($scope.devicss));
        $scope.sendObj2.append('likeCount', $scope.ThumbsUpNums);
        $scope.sendObj2.append('friendsIdList', JSON.stringify($scope.groupArr1));
        $http({
            method: 'POST',
            url: $rootScope.link + "/operate/praiseForFriends",
            data: $scope.sendObj2,
            headers: {'Content-Type': undefined},
            transformRequest: angular.identity
        }).success(function (response) {
            //上传成功的操作
            if (response.code == 200) {

                $scope.devicss = []
                $scope.ThumbsUpTurn = false
                alert('任务添加成功！');


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
                $scope.devicss = []
                alert(response.msg);
            }
        });


    };


    // setInterval(function () {
    //     console.log($scope.ThumbsUpNums)
    // }, 1000)


    //默认加载群组和成员列表
    //$timeout(function () {
    //    $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify($rootScope.moArray) + '&pageNo=1&pageSize=16').success(function (data) {
    //        if (data.code == 200) {
    //            $rootScope.MemberList11 = data.data.content;
    //            console.log($rootScope.MemberList11)
    //            $('#pages12').Page({
    //                totalPages: data.data.totalPages,//分页总数
    //                liNums: 5,//分页的数字按钮数(建议取奇数)
    //                activeClass: 'activP', //active 类样式定义
    //                callBack: function (page) {
    //                    $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify($rootScope.moArray) + '&pageNo=' + page + '&pageSize=16').success(function (data) {
    //                        $rootScope.MemberList11 = data.data.content;
    //                    })
    //                }
    //            });
    //        }
    //    });
    //}, 200);

}]);

app.controller('page12C', ["$rootScope", "$scope", "$location", "$anchorScroll", "$timeout", "$http", function ($rootScope, $scope, $location, $anchorScroll, $timeout, $http) {
    $rootScope.getAllFalse();
    $rootScope.activeTwelve = true;
    $rootScope.navPartThree = true;
    $rootScope.isScreenPage = false;
    //锚点的跳转 回到导航标题处
    $scope.getNav = function () {
        $location.hash('nav-bottom12');
        $anchorScroll();
    };
    //页面点击先后顺序与逻辑
    $scope.outSideBox = true;
    $scope.ceelue = true;
    $scope.inSideBox = false;
    $scope.isAllCheckBack = false;
    $scope.sayHello = '您好，很高兴认识您！'
    $scope.maxInterval = 10;
    $scope.minInterval = 1;
    $scope.sendNum = 5;
    $scope.allGroup = 0;
    $scope.topGroup = 0;
    $scope.mustChoose = [];
    $scope.picArr = [];
    $scope.getInsideBox = function (num, id) {
        $scope.MemberNumber = num;
        $scope.WxMemberId = id;
        $scope.ceelue = false;
        $scope.isAllCheckBack = true;
        $(".wx-group-box").css("height", "1080px");
        $("#addColor").css("display", "none");
        $("#addColor1").css("display", "none");
        $('.page12-checkAll-div').removeClass('on').find('input').prop('checked', function () {
            return false
        });
        $http.get($rootScope.link + '/operate/getClubByWechatNumber?wechatId=' + id + '&pageNo=1&pageSize=5000').success(function (data) {
            if (data.code == 200) {
                $scope.outSideBox = false;
                $scope.inSideBox = true;
                $scope.WxList = data.data.content;
                $scope.assPage = 1;
                // $('#pages122').Page({
                //     totalPages: data.data.totalPages,//分页总数
                //     liNums: 5,//分页的数字按钮数(建议取奇数)
                //     activeClass: 'activP', //active 类样式定义
                //     callBack: function (page) {
                //         $http.get($rootScope.link + '/operate/getClubByWechatNumber?wechatId=' + id + '&pageNo=' + page + '&pageSize=16').success(function (data) {
                //             $scope.WxList = data.data.content;
                //             $scope.assPage = page;
                //         })
                //     }
                // });
            }else{
                alert(data.msg)
            }

        });
    };
    $scope.getGroupNew = function (id) {
        $http.get($rootScope.link + '/wechat/getGroupList?wechatId=' + id).success(function (data) {
            if (data.code == 200) {
                alert('添加任务成功！');
                $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
                    if (data.code == 200) {
                        $rootScope.taskList = data.data;
                        $rootScope.taskAll = true;
                        $rootScope.taskDoing = false;
                        $rootScope.taskWait = false;
                        $rootScope.taskDown = false;
                        $rootScope.newBell = true;
                    }
                });
            } else{
                alert(data.msg)
            }
        });
    };
    $scope.getBack = function () {
        $scope.ceelue = true;
        $scope.outSideBox = true;
        $scope.inSideBox = false;
        $(".wx-group-box").css("height", "1250px");
        $("#addColor1").css("display", "block");
        $("#addColor").css("display", "block");
        // $(".task-show-button").css("height", "1180px");
    };
    var selectVal = '';
    $('.page12-select-type').change(function () {
        selectVal = $(this).val();
        if (selectVal == 1) {
            $scope.allGroup = 1;
            $scope.topGroup = 0;
            $('.writeNums').hide()
        } else if (selectVal == 2) {
            $('.writeNums').hide()
            $scope.allGroup = 0;
            $scope.topGroup = 1;
        } else if (selectVal == 3) {
            $('.writeNums').show()
            $scope.allGroup = 0;
            $scope.topGroup = 0;
        } else {
            $('.writeNums').hide()
            $scope.allGroup = 0;
            $scope.topGroup = 0;
        }
    })
    $scope.sendObj = new FormData();
    $scope.sendObj.append('file1', '');
    $scope.sendObj.append('file2', '');
    $scope.sendObj.append('file3', '');
    $scope.sendObj.append('file4', '');
    $scope.sendObj.append('file5', '');
    $scope.sendObj.append('file6', '');
    $scope.sendObj.append('file7', '');
    $scope.sendObj.append('file8', '');
    $scope.sendObj.append('file9', '');
    //群首页群发
    $scope.sendAll = function () {

        // var arr=[];
        for (var i = 0, arr = []; i < $('.new-wx-equip-input12').length; i++) {
            if ($('.new-wx-equip-input12').eq(i).prop('checked')) {
                arr.push($('.new-wx-equip-input12').eq(i).parent().next().attr('title'));
                console.log(arr)
            }
        }
        if ($scope.timeInterval == '') {
            alert('请填写时间间隔！');
        }
        else if (arr.length == 0) {
            alert('请勾选需要操作的群组！');
        } else {
            $scope.sendObj.append('msg', $scope.sayHello);
            $scope.sendObj.append('allGroup ', $scope.allGroup);
            $scope.sendObj.append('topGroup ', $scope.topGroup);
            $scope.sendObj.append('groupNum', $scope.sendNum);
            $scope.sendObj.append('devices', JSON.stringify(arr));
            $scope.sendObj.append('maxInterval', $scope.maxInterval);
            $scope.sendObj.append('minInterval', $scope.minInterval);
            console.log($scope.sendObj)
            $http({
                method: 'POST',
                url: $rootScope.link + "/operate/sendMsgToGroup",
                data: $scope.sendObj,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (response) {
                //上传成功的操作
                if (response.code == 200) {
                    alert('任务添加成功!');
                    $location.hash('page-top12');
                    $anchorScroll();
                    location.reload();
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
                } else {
                    location.reload();
                    alert(response.msg)
                }
            });
        }
    };


    //修改标签框
    $scope.labelBox = false;
    $scope.getLabelBox = function (id) {
        $scope.TagName = '';
        $scope.TagId = id;
        $scope.labelBox = true;
    };
    $scope.cancelLabelBox = function () {
        $scope.labelBox = false;
    };
    $scope.SureLabelBox = function (id) {
        if ($scope.TagName == '') {
            alert('请输入需要更改的标签名');
        } else {
            $http.get($rootScope.link + '/operate/addTagToClub?id=' + id + '&tag=' + $scope.TagName).success(function (data) {
                if (data.code == 200) {
                    alert('标签成功！');
                    $scope.labelBox = false;
                    $http.get($rootScope.link + '/operate/getClubByWechatNumber?wechatId=' + $scope.WxMemberId + '&pageNo=' + $scope.assPage + '&pageSize=17').success(function (data) {
                        if (data.code == 200) {
                            $scope.WxList = data.data.content;
                        }else{
                            alert(data.msg)
                        }

                    });

                }else{
                    alert(data.msg)
                }
            });
        }

    };
    //群发消息框
    $scope.messageSendBox = false;
    $scope.getMessageSendBox = function () {
        $scope.groupArr = [];
        $scope.clubNames = [];
        $scope.saySomething = '';
        for (var i = 0; i < $('.page12-div-checkbox').length; i++) {
            if ($('.page12-div-checkbox').eq(i).find('input').prop('checked')) {
                $scope.groupArr.push($('.page12-div-checkbox').eq(i).attr('group_id'));

                //-------------------长度为十问题解决方案-----------------
                // $scope.clubNames.push($('.page12-div-checkbox').eq(i).attr('club_name').substring(0,10) );

                $scope.clubNames.push($('.page12-div-checkbox').eq(i).attr('club_name'));
            }
        }
        if ($scope.groupArr.length == 0) {
            alert('请勾选需要发送的群名称！');
        } else {
            $scope.messageSendBox = true;
        }
    };
    $scope.cancelMessageSendBox = function () {
        $scope.messageSendBox = false;
    };
    $scope.maxTime = 5;
    $scope.minTime = 1;
    $scope.sureMessageSendBox = function () {
        $scope.sendObj1 = new FormData();
        if ($scope.saySomething == '') {
            alert('请填写需要群发的内容!');
        } else {

            $scope.sendObj1.append('wechatId', $scope.WxMemberId);
            $scope.sendObj1.append('clubNames', JSON.stringify($scope.clubNames));
            $scope.sendObj1.append('msg', $scope.saySomething);
            $scope.sendObj1.append('maxInterval', $scope.maxTime);
            $scope.sendObj1.append('minInterval', $scope.minTime);
            $http({
                method: 'POST',
                url: $rootScope.link + "/operate/sendClubMsg",
                data: $scope.sendObj1,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (response) {
                //上传成功的操作
                if (response.code == 200) {
                    $(".page12-checkAll-div").removeClass('on').find('input').prop('checked', function () {
                        return false
                    });
                    $(".cleanOn").removeClass('on').find('input').prop('checked', function () {
                        return false
                    });
                    $scope.messageSendBox = false;
                    alert('任务添加成功！');
                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
                        if (data.code == 200) {
                            $rootScope.taskList = data.data;
                            $rootScope.taskAll = true;
                            $rootScope.taskDoing = false;
                            $rootScope.taskWait = false;
                            $rootScope.taskDown = false;
                            $rootScope.newBell = true;
                        }else{
                            alert(data.msg)
                        }
                    });
                }else{
                    alert(response.msg)
                }
            });
        }

    };


    $scope.sendMessage = new FormData();

    //筛选数组
    $scope.selected = [1];
    var updateSelected = function (action, id) {
        if (action == 'add' && $scope.selected.indexOf(id) == -1) {
            $scope.selected.push(id);
        }
        if (action == 'remove' && $scope.selected.indexOf(id) != -1) {
            var idx = $scope.selected.indexOf(id);
            $scope.selected.splice(idx, 1);
        }
    };
    $scope.checkOne = function ($event, id, count) {
        var action = ($event.target.checked ? 'add' : 'remove');
        updateSelected(action, id, count);
        $http.get($rootScope.link + '/operate/getWechatsByGroup?groupIds=' + JSON.stringify($scope.selected) + '&pageNo=1&pageSize=17').success(function (data) {
            if (data.code == 200) {
                $scope.MemberList = data.data.content;
                $scope.outSideBox = true;
                $scope.inSideBox = false;
                $('#pages12').Page({
                    totalPages: data.data.totalPages,//分页总数
                    liNums: 5,//分页的数字按钮数(建议取奇数)
                    activeClass: 'activP', //active 类样式定义
                    callBack: function (page) {
                        $http.get($rootScope.link + '/operate/getWechatsByGroup?groupIds=' + JSON.stringify($scope.selected) + '&pageNo=' + page + '&pageSize=17').success(function (data) {
                            $scope.MemberList = data.data.content;
                        })
                    }
                });
            }else{
                alert(data.msg)
            }

        });
    };
    $scope.isChecked = function (id) {
        return $scope.selected.indexOf(id) >= 0;
    };

    //默认加载微信列表
    //$timeout(function () {
    //    $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify($rootScope.moArray) + '&pageNo=1&pageSize=16').success(function (data) {
    //        if (data.code == 200) {
    //            $rootScope.MemberList12 = data.data.content;
    //            $('#pages11').Page({
    //                totalPages: data.data.totalPages,//分页总数
    //                liNums: 5,//分页的数字按钮数(建议取奇数)
    //                activeClass: 'activP', //active 类样式定义
    //                callBack: function (page) {
    //                    $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify($rootScope.moArray) + '&pageNo=' + page + '&pageSize=16').success(function (data) {
    //                        $rootScope.MemberList12 = data.data.content;
    //                    })
    //                }
    //            });
    //        }
    //    });
    //}, 200);
}]);
app.controller('page13C',["$rootScope","$scope","$location","$anchorScroll","$http",function ($rootScope, $scope, $location, $anchorScroll, $http) {
    $rootScope.getAllFalse();
    $rootScope.activeThirdteen = true;
    $rootScope.navPartThree = true;
    $rootScope.isScreenPage = true;
    //锚点的跳转 回到导航标题处
    $scope.getNav = function () {
        $location.hash('nav-bottom13');
        $anchorScroll();
    };
    //筛选数组
    $scope.selected1 = [];
    $scope.chooseedEquip = 0;
    $scope.chooseNumber = 0;
    $scope.unChooseNumber = 100;
    var updateSelected1 = function (action, id, count) {
        if (action == 'add' && $scope.selected1.indexOf(id) == -1) {
            $scope.selected1.push(id);
            $scope.chooseedEquip += count;
        }
        if (action == 'remove' && $scope.selected1.indexOf(id) != -1) {
            var idx = $scope.selected1.indexOf(id);
            $scope.selected1.splice(idx, 1);
            $scope.chooseedEquip -= count;
        }
    };
    $scope.checkOne1 = function ($event, id, count) {
        var action = ($event.target.checked ? 'add' : 'remove');
        updateSelected1(action, id, count);
        $scope.chooseNumber = $scope.chooseedEquip / $rootScope.equipCounts * 100;
        $scope.unChooseNumber = 100 - $scope.chooseNumber;
        $('.all-equip-line-block').css({'width': $scope.chooseNumber + '%', 'transition': '1s'});
        $('.none-equip-line-block').css({'width': $scope.unChooseNumber + '%', 'transition': '1s'});
    };
    $scope.isChecked1 = function (id) {
        return $scope.selected1.indexOf(id) >= 0;
    };
    $scope.saySomething = '';
    $scope.timeInterval = 5;
    //上传朋友圈图片
    $scope.sendObj = new FormData();
    $scope.sendObj.append('file1', '');
    $scope.sendObj.append('file2', '');
    $scope.sendObj.append('file3', '');
    $scope.sendObj.append('file4', '');
    $scope.sendObj.append('file5', '');
    $scope.sendObj.append('file6', '');
    $scope.sendObj.append('file7', '');
    $scope.sendObj.append('file8', '');
    $scope.sendObj.append('file9', '');
    $scope.picArr = [];

    //筛选数组
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
    //防封号策略C
    $scope.picNumberBox = false;
    $scope.getPicBox = function () {
        $scope.picNumberBox = true;
    };
    $scope.cancelPicBox = function () {
        $scope.picNumberBox = false;
        $scope.mustChoose = [];
        $scope.unMChoose = [];
    };
    $scope.mustChoose = [];
    $scope.unMChoose = [];
    $scope.getSureButton = function () {
        $scope.mustChoose = $scope.selected.sort();
        $scope.unChoose = [];
        $scope.tmp = $scope.picArr.concat($scope.selected);
        $scope.o = {};
        for (var i = 0; i < $scope.tmp.length; i++) {
            ($scope.tmp[i] in $scope.o) ? $scope.o[$scope.tmp[i]]++ : $scope.o[$scope.tmp[i]] = 1;
        }
        for (var x in $scope.o) {
            if ($scope.o[x] == 1) {
                $scope.unChoose.push(parseInt(x));
            }
        }
        $scope.unMChoose = $scope.unChoose.sort();
        $scope.picNumberBox = false;
    };

    //筛选数组
    $scope.selected2 = [];
    var updateSelected2 = function (action, id) {
        if (action == 'add' && $scope.selected2.indexOf(id) == -1) {
            $scope.selected2.push(id);
        }
        if (action == 'remove' && $scope.selected2.indexOf(id) != -1) {
            var idx = $scope.selected2.indexOf(id);
            $scope.selected2.splice(idx, 1);
        }
    };
    $scope.checkOne2 = function ($event, id) {
        var action = ($event.target.checked ? 'add' : 'remove');
        updateSelected2(action, id);
    };
    $scope.isChecked2 = function (id) {
        return $scope.selected2.indexOf(id) >= 0;
    };
    //防封号策略C
    $scope.picNumberBox1 = false;
    $scope.getPicBox2 = function () {
        $scope.picNumberBox1 = true;
    };
    $scope.cancelPicBox2 = function () {
        $scope.picNumberBox1 = false;
        $scope.operate = [];
    };
    $scope.operate = [];
    $scope.getSureButton2 = function () {
        $scope.operate = $scope.selected2.sort();
        $scope.picNumberBox1 = false;
    };

    $scope.aTag = '';
    $scope.aMsg = '';











    $scope.sendAll = function () {

        var saySomething = $(".FontAndEmjoy13").html();

        for (var i = 0, arr = []; i < $('.new-wx-equip-input13').length; i++) {
            if ($('.new-wx-equip-input13').eq(i).prop('checked')) {
                arr.push($('.new-wx-equip-input13').eq(i).parent().next().attr('title'));
            }
        }
        if (saySomething == '') {
            alert('请编辑朋友圈内容');
        } else if (arr == 0) {
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
            $scope.sendObj.append('content', saySomething);
            $scope.sendObj.append('devices', JSON.stringify(arr));
            $scope.sendObj.append('interval', $scope.timeInterval);
            $scope.sendObj.append('msg', $scope.aMsg);
            $scope.sendObj.append('number', JSON.stringify($scope.operate));
            $scope.sendObj.append('tag', $scope.aTag);
            $scope.sendObj.append('mustNumber', JSON.stringify($scope.mustChoose));
            $scope.sendObj.append('randomNumber', JSON.stringify($scope.unMChoose));
            $http({
                method: 'POST',
                url: $rootScope.link + "/operate/sendMoments",
                data: $scope.sendObj,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (response) {
                //上传成功的操作
                if (response.code == 200) {
                    alert('任务添加成功!');
                    $location.hash('page-top13');
                    $anchorScroll();
                    location.reload();
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
                } else {
                    alert(response.msg);
                    location.reload();
                }
            });
        }

    };
}]);

app.controller('page14C',["$rootScope","$scope","$location","$anchorScroll","$http",function ($rootScope, $scope, $location, $anchorScroll, $http) {
    $rootScope.getAllFalse();
    $rootScope.activeFourteen = true;
    $rootScope.navPartThree = true;
    $rootScope.isScreenPage = false;
    //锚点的跳转 回到导航标题处
    $scope.getNav = function () {
        $location.hash('nav-bottom14');
        $anchorScroll();
    };
    //筛选数组
    $scope.selected = [1];
    $scope.chooseedEquip = 0;
    $scope.chooseNumber = 0;
    $scope.unChooseNumber = 100;
    var updateSelected = function (action, id, count) {
        if (action == 'add' && $scope.selected.indexOf(id) == -1) {
            $scope.selected.push(id);
            $scope.chooseedEquip += count;
        }
        if (action == 'remove' && $scope.selected.indexOf(id) != -1) {
            var idx = $scope.selected.indexOf(id);
            $scope.selected.splice(idx, 1);
            $scope.chooseedEquip -= count;
        }
    };


    //app.directive('groupCheckAllza', function () {
    //    return {
    //        link: function (scope, elem) {
    //            elem.click(function () {
    //                if (elem.prop('checked')) {
    //                    elem.parent().addClass('on');
    //                    elem.parent().parent().next().find('p').addClass('on').find('input').prop('checked', function () {
    //                        return true
    //                    });
    //                } else {
    //                    elem.parent().removeClass('on');
    //                    elem.parent().parent().next().find('p').removeClass('on').find('input').prop('checked', function () {
    //                        return false
    //                    });
    //                }
    //            });
    //        }
    //    }
    //});


    $scope.checkOne = function ($event, id, count) {
        var action = ($event.target.checked ? 'add' : 'remove');
        updateSelected(action, id, count);
        $scope.chooseNumber = $scope.chooseedEquip / $rootScope.equipCounts * 100;
        $scope.unChooseNumber = 100 - $scope.chooseNumber;
        $('.all-equip-line-block').css({'width': $scope.chooseNumber + '%', 'transition': '1s'});
        $('.none-equip-line-block').css({'width': $scope.unChooseNumber + '%', 'transition': '1s'});
        $http.get($rootScope.link + '/operate/getWechatsByGroup?groupIds=' + JSON.stringify($scope.selected) + '&pageNo=1&pageSize=5').success(function (data) {
            $scope.WxList = data.data.content;
            $('#pages14').Page({
                totalPages: data.data.totalPages,//分页总数
                liNums: 5,//分页的数字按钮数(建议取奇数)
                activeClass: 'activP', //active 类样式定义
                callBack: function (page) {
                    $http.get($rootScope.link + '/operate/getWechatsByGroup?groupIds=' + JSON.stringify($scope.selected) + '&pageNo=' + page + '&pageSize=5').success(function (data) {
                        $scope.WxList = data.data.content;
                    })
                }
            });
        });
    };
    $scope.isChecked = function (id) {
        return $scope.selected.indexOf(id) >= 0;
    };
    $http.get($rootScope.link + '/operate/getWechatsByGroup?groupIds=' + JSON.stringify($scope.selected) + '&pageNo=1&pageSize=5').success(function (data) {
        $scope.WxList = data.data.content;
        $('#pages14').Page({
            totalPages: data.data.totalPages,//分页总数
            liNums: 5,//分页的数字按钮数(建议取奇数)
            activeClass: 'activP', //active 类样式定义
            callBack: function (page) {
                $http.get($rootScope.link + '/operate/getWechatsByGroup?groupIds=' + JSON.stringify($scope.selected) + '&pageNo=' + page + '&pageSize=5').success(function (data) {
                    $scope.WxList = data.data.content;
                })
            }
        });
    });
    $scope.cleaChuanyue=function () {
        for (var i = 0, arr = []; i < $('.new-wx-equip-input14').length; i++) {
            if ($('.new-wx-equip-input14').eq(i).prop('checked')) {
                arr.push($('.new-wx-equip-input14').eq(i).parent().next().attr('title'));
            }
        }
        if (arr.length == 0) {
            alert('请勾选设备！');
        }else{
            var sendObj1 = new FormData();
            sendObj1.append('devices', JSON.stringify(arr));
            $http({
                method: 'POST',
                url: $rootScope.link + "/operate/clearLocation",
                data: sendObj1,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (response) {
                //上传成功的操作
                if (response.code == 200) {
                    alert('任务添加成功!');
                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
                        if (data.code == 200) {
                            $rootScope.taskList = data.data;
                            $rootScope.taskAll = true;
                            $rootScope.taskDoing = false;
                            $rootScope.taskWait = false;
                            $rootScope.taskDown = false;
                            $rootScope.newBell = true;
                        }
                    });
                } else{
                    alert(response.msg)
                }
            });
        }

    }




    //算法配置
    $scope.mapRange = '2000米';
    $scope.mapLocation = '';
    $scope.sendAll = function () {
        for (var i = 0, arr = []; i < $('.new-wx-equip-input14').length; i++) {
            if ($('.new-wx-equip-input14').eq(i).prop('checked')) {
                arr.push($('.new-wx-equip-input14').eq(i).parent().next().attr('title'));
            }
        }
        if (arr.length == 0) {
            alert('请勾选设备！');
        } else if ($scope.mapLocation == '') {
            alert('请填写需要定位的地址！');
        } else {
            var sendObj = new FormData();
            sendObj.append('devices', JSON.stringify(arr));
            sendObj.append('range', parseInt($scope.mapRange));
            sendObj.append('longitude', $scope.mapPointLng);
            sendObj.append('latitude', $scope.mapPointLat);
            $http({
                method: 'POST',
                url: $rootScope.link + "/operate/changeLocation",
                data: sendObj,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (response) {
                //上传成功的操作
                if (response.code == 200) {
                    alert('任务添加成功!');
                    $location.hash('page-top14');
                    $anchorScroll();
                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
                        if (data.code == 200) {
                            $rootScope.taskList = data.data;
                            $rootScope.taskAll = true;
                            $rootScope.taskDoing = false;
                            $rootScope.taskWait = false;
                            $rootScope.taskDown = false;
                            $rootScope.newBell = true;
                        }else{
                            alert(data.msg)
                        }
                    });
                } else{
                    alert(response.msg)
                }
            });
        }
    };

    function G(id) {
        return document.getElementById(id);
    }

    var map = new BMap.Map("page14-map");
    map.centerAndZoom("北京", 12);                   // 初始化地图,设置城市和地图级别。
    map.enableScrollWheelZoom(true); //为了王哥
    map.addEventListener('click', function (e) {
        //var myIcon=new BMap.Icon("images/map-logo.png", new BMap.Size(23,33));
        //var marker = new BMap.Marker(new BMap.Point(e.point.lng,e.point.lat ),{icon:myIcon})
        //map.addOverlay(marker);
        $.ajax({
            type: 'GET',
            url: 'http://api.map.baidu.com/geocoder/v2/?ak=HbUVYMUg6PwbOnXkztdgSQlQ&callback=renderReverse&location=' + e.point.lat + ',' + e.point.lng + '&output=json&pois=1',
            dataType: 'JSONP',
            success: function (data1) {
                $scope.mapLocation = data1.result.formatted_address;
                $scope.$apply();
            }
        });
    });
    var ac = new BMap.Autocomplete(    //建立一个自动完成的对象
        {
            "input": "suggestId"
            , "location": map
        });

    ac.addEventListener("onhighlight", function (e) {  //鼠标放在下拉列表上的事件
        var str = "";
        var _value = e.fromitem.value;
        var value = "";
        if (e.fromitem.index > -1) {
            value = _value.province + _value.city + _value.district + _value.street + _value.business;
        }
        str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;

        value = "";
        if (e.toitem.index > -1) {
            _value = e.toitem.value;
            value = _value.province + _value.city + _value.district + _value.street + _value.business;
        }
        str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
        G("searchResultPanel").innerHTML = str;
    });

    var myValue;
    ac.addEventListener("onconfirm", function (e) {    //鼠标点击下拉列表后的事件
        var _value = e.item.value;
        myValue = _value.province + _value.city + _value.district + _value.street + _value.business;
        G("searchResultPanel").innerHTML = "onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;

        setPlace();
    });

    function setPlace() {
        map.clearOverlays();    //清除地图上所有覆盖物
        function myFun() {
            var pp = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果
            map.centerAndZoom(pp, 18);
            map.addOverlay(new BMap.Marker(pp));    //添加标注
            $scope.mapPointLng = pp.lng;
            $scope.mapPointLat = pp.lat;
        }

        var local = new BMap.LocalSearch(map, { //智能搜索
            onSearchComplete: myFun
        });
        local.search(myValue);
    }
}]);

app.controller('page15C', ["$rootScope", "$scope", "$location", "$anchorScroll", "$http", "$timeout", function ($rootScope, $scope, $location, $anchorScroll, $http, $timeout) {
    $rootScope.getAllFalse();
    $rootScope.activeFifteen = true;
    $rootScope.navPartThree = true;
    $rootScope.isScreenPage = false;
    //锚点的跳转 回到导航标题处
    $scope.getNav = function () {
        $location.hash('nav-bottom15');
        $anchorScroll();
    };
    //筛选数组
    $scope.selected = [1];
    var updateSelected = function (action, id) {
        if (action == 'add' && $scope.selected.indexOf(id) == -1) {
            $scope.selected.push(id);
        }
        if (action == 'remove' && $scope.selected.indexOf(id) != -1) {
            var idx = $scope.selected.indexOf(id);
            $scope.selected.splice(idx, 1);
        }
    };
    $scope.checkOne = function ($event, id, count) {
        var action = ($event.target.checked ? 'add' : 'remove');
        updateSelected(action, id, count);
        $http.get($rootScope.link + '/operate/getZombieFan?groupIds=' + JSON.stringify($scope.selected)).success(function (data) {
            if (data.code == 200) {
                $scope.zombieList = data.data;
            } else {
                alert(data.msg);
            }
        });
    };
    $scope.isChecked = function (id) {
        return $scope.selected.indexOf(id) >= 0;
    };

    //配置策略
    // $scope.timeInterval = 5;
    $scope.maxTime = 10;
    $scope.minTime = 1
    $scope.upFile = ''
    // $scope.saySomething = '您好！很高兴认识您！';

    //====================  导入话术文件  ==================
    var selectVal = 1
    $('.clickSelect').change(function () {
        selectVal = $(this).val();
        if (selectVal == 1) {
            $('.page9-say-hello').show();
            $('.emjoyOpen-page15').show();
            $('.page9-say-hello').html('');
            $('.clickAddText').hide()
            // $scope.saySomething = '您好！很高兴认识您！';
            $scope.upFile = ''
        } else {
            $('.page9-say-hello').hide();
            $('.emjoyOpen-page15').hide();
            $('.clickAddText').show();
            // $scope.saySomething = ''
            $('.page9-say-hello').html('');
        }
    })
    $scope.select = false;
    $scope.clickAddText = function () {
        $scope.select = true;
        // $scope.saySomething=$(".page7-select option:selected").text();
    }
    $scope.sendAll = function () {
        var saySomething = $(".FontAndEmjoy15").html();
        for (var i = 0, arr = []; i < $('.new-wx-equip-input15').length; i++) {
            if ($('.new-wx-equip-input15').eq(i).prop('checked')) {
                arr.push($('.new-wx-equip-input15').eq(i).parent().next().attr('title'));
            }
        }
        if (arr.length == 0) {
            alert('请勾选需要操作的设备！');
        } else if (saySomething.length == 0 && typeof($scope.upFile) == "string") {
            alert('请输入打招呼用语或选择话术文件！');
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
            sendObj.append('msg', saySomething);
            sendObj.append('devices', JSON.stringify(arr));
            sendObj.append('file', $scope.upFile);
            sendObj.append('maxInterval', $scope.maxTime);
            sendObj.append('minInterval', $scope.minTime);
            $http({
                method: 'POST',
                url: $rootScope.link + "/operate/clearZombieFan",
                data: sendObj,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (response) {
                //上传成功的操作
                if (response.code == 200) {
                    alert('任务添加成功!');
                    $location.hash('page-top15');
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

app.controller('page19C',["$rootScope","$scope","$http",function ($rootScope, $scope, $http) {
    $rootScope.getAllFalse();
    $rootScope.activeNineteen = true;
    $rootScope.navPartSix = true;
    $rootScope.isScreenPage = true;

    $http.get($rootScope.link + '/task/getGroupTaskInitPage?status=-1&pageNo=1&pageSize=17').success(function (data) {
        $scope.TaskAllList = data.data.content;
        $('#pages19').Page({
            totalPages: data.data.totalPages,//分页总数
            liNums: 5,//分页的数字按钮数(建议取奇数)
            activeClass: 'activP', //active 类样式定义
            callBack: function (page) {
                $http.get($rootScope.link + '/task/getGroupTaskInitPage?status=-1&pageNo=' + page + '&pageSize=17').success(function (data) {
                    $scope.TaskAllList = data.data.content;
                })
            }
        });
    });
    $scope.isShow = function (s) {
        if (s == 3) {
            return true;
        }
    };
    $scope.taskOut = false;
    $scope.checkWrong = function (id) {
        $http.get($rootScope.link + '/task/getErrorTask?taskId=' + id).success(function (data) {
            if (data.code == 200) {
                $scope.taskOut = true;
                $scope.taskList = data.data;
            } else {
                alert(data.msg);
            }

        });
    };
    $scope.getTaskBack = function () {
        $scope.taskOut = false;
    };
}]);

app.controller('page20C',["$rootScope","$scope","$http",function ($rootScope, $scope, $http) {
    $rootScope.getAllFalse();
    $rootScope.activeTwenty = true;
    $rootScope.navPartSix = true;
    $rootScope.isScreenPage = true;

    $scope.ifShow = function (type) {
        if (type == 2) {
            return true;
        }
    };
    $scope.assState = function (s) {
        var a;
        if (s == 0) {
            a = '正在执行';
        } else if (s == 1) {
            a = '等待执行';
        } else if (s == 2) {
            a = '执行完成';
        }
        return a;
    };
    $scope.isDisabledOne = function (s) {
        if (s != 1) {
            return true;
        }
    };
    $scope.isDisabledTwo = function (s) {
        if (s != 0) {
            return true;
        }
    };
    $scope.isDisabledThree = function (s) {
        if (s != 3) {
            return true;
        }
    };
    $scope.isBlandOne = function (s) {
        if (s != 1) {
            return 'on';
        }
    };
    $scope.isBlandTwo = function (s) {
        if (s != 0) {
            return 'on';
        }
    };
    $scope.isBlandThree = function (s) {
        if (s != 3) {
            return 'on';
        }
    };
    $http.get($rootScope.link + '/remote/getTask?pageNo=1&pageSize=2').success(function (data) {
        if (data.code == 200) {
            $scope.assList = data.data.content;
            $('#pages20').Page({
                totalPages: data.data.totalPages,//分页总数
                liNums: 5,//分页的数字按钮数(建议取奇数)
                activeClass: 'activP', //active 类样式定义
                callBack: function (page) {
                    $http.get($rootScope.link + '/remote/getTask?pageNo=' + page + '&pageSize=2').success(function (data) {
                        $scope.assList = data.data.content;
                    })
                }
            });
        }else {
            alert(data.msg);
        }
    });

    $scope.assChecked = function (str) {
        if (JSON.parse(str).clear == 1) {
            return true;
        }
    };
    $scope.assValue = function (str) {
        return JSON.parse(str).msg;
    };
    $scope.assInterval = function (str) {
        return JSON.parse(str).interval;
    };
    $scope.assRadioOne = function (str) {
        if (JSON.parse(str).strategy == 1) {
            return true;
        }
    };
    $scope.assRadioTwo = function (str) {
        if (JSON.parse(str).strategy == 0) {
            return true;
        }
    };
    $scope.assCount = function (str) {
        return JSON.parse(str).count;
    };
}]);

app.controller('page21C',["$rootScope","$scope","$http","$location","$anchorScroll",function ($rootScope, $scope, $http, $location, $anchorScroll) {
    $rootScope.getAllFalse();
    $rootScope.activeTwentyone = true;
    $rootScope.navPartFour = true;
    $rootScope.isScreenPage = false;
    //配置策略
    $scope.sendAllButton = false;
    $scope.timeInterval = 5;
    $scope.sayHello = '您好!很高兴认识您!';
    $scope.isClear = 0;
    $scope.clear = function ($event) {
        if ($event.target.checked) {
            $scope.isClear = 1;
        } else {
            $scope.isClear = 0;
        }
    };
    $scope.sendAll = function () {
        for (var i = 0, arr = []; i < $('.new-wx-equip-input').length; i++) {
            if ($('.new-wx-equip-input').eq(i).prop('checked')) {
                arr.push($('.new-wx-equip-input').eq(i).parent().next().attr('title'));
            }
        }
        if ($scope.timeInterval == '') {
            alert('请填写时间间隔！');
        } else if ($scope.sayHello == '') {
            alert('请填写打招呼用语！');
        } else if (arr.length == 0) {
            alert('请勾选需要操作的设备！');
        } else {
            var sendObj = new FormData();
            sendObj.append('devices', JSON.stringify(arr));
            sendObj.append('interval', $scope.timeInterval);
            sendObj.append('msg', $scope.sayHello);
            sendObj.append('clear', $scope.isClear);
            sendObj.append('strategy', $scope.addPeople);
            sendObj.append('count', $scope.addPeopleCount);
            sendObj.append('contactList', JSON.stringify($scope.assList));
            $http({
                method: 'POST',
                url: $rootScope.link + "/momoPlus/addFriendContact",
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
    //加人策略
    $scope.assRadioChoose = false;
    $scope.addPeople = 1;
    $scope.addPeopleCount = 1;
    $scope.getAssHide = function () {
        $scope.assRadioChoose = false;
        $scope.addPeople = 1;
    };
    $scope.getAssShow = function () {
        $scope.assRadioChoose = true;
        $scope.addPeople = 0;
    }
}]);

app.controller('page22C',["$rootScope","$scope","$location","$anchorScroll","$http",function ($rootScope, $scope, $location, $anchorScroll, $http) {
    $rootScope.getAllFalse();
    $rootScope.activeTwentytwo = true;
    $rootScope.navPartFour = true;
    $rootScope.isScreenPage = false;
    //配置策略
    $scope.timeInterval = 5;
    $scope.sayHello = '您好！很高兴认识您！';
    $scope.sendAllButton = false;
    $scope.addPeople = 1;
    $scope.addPeopleCount = 1;
    $scope.addPeopleOne = function () {
        $scope.addPeople = 1;
        $scope.assRadioChoose = false;
    };
    $scope.addPeopleTwo = function () {
        $scope.addPeople = 0;
        $scope.assRadioChoose = true;
    };
    $scope.sendAll = function () {
        for (var i = 0, arr = []; i < $('.new-wx-equip-input7').length; i++) {
            if ($('.new-wx-equip-input7').eq(i).prop('checked')) {
                arr.push($('.new-wx-equip-input7').eq(i).parent().next().attr('title'));
            }
        }
        if ($scope.timeInterval == '') {
            alert('请填写时间间隔！');
        } else if ($scope.sayHello == '') {
            alert('请填写打招呼用语！');
        } else if (arr.length == 0) {
            alert('请勾选需要操作的设备！');
        } else {
            var sendObj = new FormData();
            sendObj.append('devices', JSON.stringify(arr));
            sendObj.append('interval', $scope.timeInterval);
            sendObj.append('msg', $scope.sayHello);
            sendObj.append('strategy', $scope.addPeople);
            sendObj.append('count', $scope.addPeopleCount);
            sendObj.append('contactList', JSON.stringify($scope.assList));
            $http({
                method: 'POST',
                url: $rootScope.link + "/momoPlus/addFriendDirect",
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

app.controller('page23C',["$rootScope","$scope","$location","$anchorScroll","$http",function ($rootScope, $scope, $location, $anchorScroll, $http) {
    $rootScope.getAllFalse();
    $rootScope.activeTwentythree = true;
    $rootScope.navPartFour = true;
    $rootScope.isScreenPage = false;
    //算法配置
    //$scope.mapRang='2000米';
    $scope.timeInterval = 5;
    $scope.sayHello = '您好！很高兴认识您！';
    //$scope.mapLocation='';
    $scope.addPeopleNumber = 10;
    $scope.addSex = '全部';

    //function G(id) {
    //    return document.getElementById(id);
    //}
    //var map = new BMap.Map("page8-map");
    //map.centerAndZoom("北京",12);                   // 初始化地图,设置城市和地图级别。
    //map.enableScrollWheelZoom(true); //为了王哥
    //map.addEventListener('click',function(e){
    //    //var myIcon=new BMap.Icon("images/map-logo.png", new BMap.Size(23,33));
    //    //var marker = new BMap.Marker(new BMap.Point(e.point.lng,e.point.lat ),{icon:myIcon})
    //    //map.addOverlay(marker);
    //    $.ajax({
    //        type:'GET',
    //        url:'http://api.map.baidu.com/geocoder/v2/?ak=HbUVYMUg6PwbOnXkztdgSQlQ&callback=renderReverse&location='+e.point.lat+','+e.point.lng+'&output=json&pois=1',
    //        dataType:'JSONP',
    //        success:function(data1){
    //            $scope.mapLocation=data1.result.formatted_address;
    //            $scope.$apply();
    //        }
    //    });
    //});
    //var ac = new BMap.Autocomplete(    //建立一个自动完成的对象
    //    {"input" : "suggestId"
    //        ,"location" : map
    //    });
    //
    //ac.addEventListener("onhighlight", function(e) {  //鼠标放在下拉列表上的事件
    //    var str = "";
    //    var _value = e.fromitem.value;
    //    var value = "";
    //    if (e.fromitem.index > -1) {
    //        value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
    //    }
    //    str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;
    //
    //    value = "";
    //    if (e.toitem.index > -1) {
    //        _value = e.toitem.value;
    //        value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
    //    }
    //    str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
    //    G("searchResultPanel").innerHTML = str;
    //});
    //
    //var myValue;
    //ac.addEventListener("onconfirm", function(e) {    //鼠标点击下拉列表后的事件
    //    var _value = e.item.value;
    //    myValue = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
    //    G("searchResultPanel").innerHTML ="onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;
    //
    //    setPlace();
    //});
    //
    //function setPlace(){
    //    map.clearOverlays();    //清除地图上所有覆盖物
    //    function myFun(){
    //        var pp = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果
    //        map.centerAndZoom(pp, 18);
    //        map.addOverlay(new BMap.Marker(pp));    //添加标注
    //        $scope.mapPointLng=pp.lng;
    //        $scope.mapPointLat=pp.lat;
    //    }
    //    var local = new BMap.LocalSearch(map, { //智能搜索
    //        onSearchComplete: myFun
    //    });
    //    local.search(myValue);
    //}

    $scope.sendAll = function () {
        for (var i = 0, arr = []; i < $('.new-wx-equip-input8').length; i++) {
            if ($('.new-wx-equip-input8').eq(i).prop('checked')) {
                arr.push($('.new-wx-equip-input8').eq(i).parent().next().attr('title'));
            }
        }
        var sex = 0;
        if ($scope.addSex == '全部') {
            sex = 0;
        } else if ($scope.addSex == '男') {
            sex = 1;
        } else if ($scope.addSex == '女') {
            sex = 2;
        }
        if (arr.length == 0) {
            alert('请勾选需要操作的设备！');
        } else if ($scope.timeInterval == '') {
            alert('请填写时间间隔！');
        } else if ($scope.sayHello == '') {
            alert('请输入打招呼用语！');
        } else if ($scope.addPeopleNumber == '') {
            alert('请输入加人的数量!')
        } else {
            var sendObj = new FormData();
            sendObj.append('devices', JSON.stringify(arr));
            sendObj.append('interval', $scope.timeInterval);
            sendObj.append('msg', $scope.sayHello);
            sendObj.append('num', $scope.addPeopleNumber);
            sendObj.append('sex', sex);
            $http({
                method: 'POST',
                url: $rootScope.link + "/momoPlus/sayHello",
                data: sendObj,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (response) {
                //上传成功的操作
                if (response.code == 200) {
                    alert('任务添加成功!');
                    $location.hash('page-top8');
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

app.controller('page24C',["$rootScope","$scope","$location","$anchorScroll","$http","$timeout",function ($rootScope, $scope, $location, $anchorScroll, $http, $timeout) {
    $rootScope.getAllFalse();
    $rootScope.activeTwentyfour = true;
    $rootScope.navPartFour = true;
    $rootScope.isScreenPage = false;
    $timeout(function () {
        $http.get($rootScope.link + '/momo/getMomosByDevice?devices=' + JSON.stringify($rootScope.moArray) + '&pageNo=1&pageSize=6').success(function (data) {
            if (data.code == 200) {
                $rootScope.MemberList9 = data.data.content;
                $('#pages9').Page({
                    totalPages: data.data.totalPages,//分页总数
                    liNums: 5,//分页的数字按钮数(建议取奇数)
                    activeClass: 'activP', //active 类样式定义
                    callBack: function (page) {
                        $http.get($rootScope.link + '/momo/getMomosByDevice?devices=' + JSON.stringify($rootScope.moArray) + '&pageNo=' + page + '&pageSize=6').success(function (data) {
                            $rootScope.MemberList9 = data.data.content;
                        })
                    }
                });
            }else {
                alert(data.msg);
            }
        });
    }, 500);
    //配置
    $scope.countNumber = 5;
    $scope.sayHello = '您好！很高兴认识您！';
    $scope.timeInterval = 5;

    $scope.sendAll = function () {
        for (var i = 0, arr = []; i < $('.new-wx-equip-input9').length; i++) {
            if ($('.new-wx-equip-input9').eq(i).prop('checked')) {
                arr.push($('.new-wx-equip-input9').eq(i).parent().next().attr('title'));
            }
        }
        if (arr.length == 0) {
            alert('请勾选需要操作的微信群组!');
        } else if ($scope.countNumber == '') {
            alert('请填写添加的数量!');
        } else if ($scope.sayHello == '') {
            alert('请填写打招呼用语!');
        } else if ($scope.timeInterval == '') {
            alert('请填写时间间隔!');
        } else {
            var sendObj = new FormData();
            sendObj.append('msg', $scope.sayHello);
            sendObj.append('count', $scope.countNumber);
            sendObj.append('interval', $scope.timeInterval);
            sendObj.append('dataList', JSON.stringify(arr));
            $http({
                method: 'POST',
                url: $rootScope.link + "/momoPlus/addFriendInClub",
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

app.controller('page25C',["$rootScope","$scope","$location","$anchorScroll","$http",function ($rootScope, $scope, $location, $anchorScroll, $http) {
    $rootScope.getAllFalse();
    $rootScope.activeTwentyfive = true;
    $rootScope.navPartFour = true;
    $rootScope.isScreenPage = false;
    //自动接受新朋友添加请求
    $scope.timeInterval = 5;
    $scope.sendAll = function () {
        for (var i = 0, arr = []; i < $('.new-wx-equip-input10').length; i++) {
            if ($('.new-wx-equip-input10').eq(i).prop('checked')) {
                arr.push($('.new-wx-equip-input10').eq(i).parent().next().attr('title'));
            }
        }
        if (arr.length == 0) {
            alert('请勾选需要操作的设备!');
        } else if ($scope.timeInterval == '') {
            alert('请填写时间间隔！');
        } else {
            var sendObj = new FormData();
            sendObj.append('devices', JSON.stringify(arr));
            sendObj.append('interval', $scope.timeInterval);
            $http({
                method: 'POST',
                url: $rootScope.link + "/momoPlus/receiveRequest",
                data: sendObj,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (response) {
                //上传成功的操作
                if (response.code == 200) {
                    alert('任务添加成功!');
                    $location.hash('page-top10');
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

app.controller('page26C',["$rootScope","$scope","$http","$timeout",function ($rootScope, $scope, $http, $timeout) {
    $rootScope.getAllFalse();
    $rootScope.activeTwentySix = true;
    $rootScope.navPartFour = true;
    $rootScope.isScreenPage = false;
    //页面显示
    $scope.outSideBox = true;
    $scope.insideBox = false;
    $scope.assBack = false;
    $scope.resetSelect = true;
    $scope.getInside = function (d) {
        $scope.outSideBox = false;
        $scope.insideBox = true;
        $scope.assMoveTo = false;
        $scope.assBack = true;
        $scope.resetSelect = false;
        $scope.assDevice = d;
        $http.get($rootScope.link + '/momo/getMomoByDevice?device=' + d).success(function (data) {
            $scope.assList = data.data;
        });
    };
    $scope.getAssBack = function () {
        $scope.outSideBox = true;
        $scope.insideBox = false;
        $scope.resetSelect = true;
        $scope.assBack = false;
        $scope.assMoveTo = true;
        var newArr = [];
        for (var i = 0; i < $('.new-wx-equip-input4').length; i++) {
            if ($('.new-wx-equip-input4').eq(i).prop('checked')) {
                newArr.push($('.new-wx-equip-input4').eq(i).parent().next().attr('title'));
            }
        }
        $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify(newArr) + '&pageNo=1&pageSize=17').success(function (data) {
            if (data.code == 200) {
                $scope.checkAllFour = false;
                $('.page4-floor-one-list').find('span').eq(0).removeClass('on');
                //$rootScope.equipList4 = data.data.content;
                $('#pages4').Page({
                    totalPages: data.data.totalPages,//分页总数
                    liNums: 5,//分页的数字按钮数(建议取奇数)
                    activeClass: 'activP', //active 类样式定义
                    callBack: function (page) {
                        $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify(newArr) + '&pageNo=' + page + '&pageSize=17').success(function (data) {
                            $rootScope.equipList4 = data.data.content;
                        })
                    }
                });
            }else {
                alert(data.msg);
            }
        });
    };
    $timeout(function () {
        $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify($rootScope.moArray) + '&pageNo=1&pageSize=17').success(function (data) {
            console.log(data);
            if (data.code == 200) {
                //$rootScope.equipList4 = data.data.content;
                $('#pages4').Page({
                    totalPages: data.data.totalPages,//分页总数
                    liNums: 5,//分页的数字按钮数(建议取奇数)
                    activeClass: 'activP', //active 类样式定义
                    callBack: function (page) {
                        $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify($rootScope.moArray) + '&pageNo=' + page + '&pageSize=17').success(function (data) {
                            $rootScope.equipList4 = data.data.content;
                        })
                    }
                });
            }else {
                alert(data.msg);
            }
        });
        // alert('请用户手动配置增加陌陌账号！');
    }, 500);
    //上移
    $scope.isRankOne = function (n) {
        return n == 1 ? 'on' : '';
    };
    $scope.rankDisabled = function (n) {
        return n == 1 ? true : false;
    };
    $scope.moveUp = function (n) {
        $http.get($rootScope.link + '/momo/up?rank=' + n + '&device=' + $scope.assDevice).success(function (data) {
            if (data.code == 200) {
                alert('移动成功!');
                $http.get($rootScope.link + '/wechat/getWechatByDevice?device=' + $scope.assDevice).success(function (data) {
                    $scope.assList = data.data;
                });
            } else {
                alert(data.msg);
            }
        });
    };
    //下移
    $scope.isRankLast = function (n) {
        return n == 20 ? 'on' : '';
    };
    $scope.rankDisabledLast = function (n) {
        return n == 20 ? true : false;
    };
    $scope.moveDown = function (n) {
        $http.get($rootScope.link + '/momo/down?rank=' + n + '&device=' + $scope.assDevice).success(function (data) {
            if (data.code == 200) {
                alert('移动成功!');
                $http.get($rootScope.link + '/momo/getMomoByDevice?device=' + $scope.assDevice).success(function (data) {
                    $scope.assList = data.data;
                });
            } else {
                alert(data.msg);
            }
        });
    };
    //切换
    $scope.assMoveTo = true;
    $scope.checked = [];
    $scope.selectAll = function () {
        if ($scope.checkAllFour) {
            $scope.checked = [];
            angular.forEach($rootScope.equipList4, function (i) {
                i.checked = true;
                $scope.checked.push(i.device);
            })
        } else {
            angular.forEach($rootScope.equipList4, function (i) {
                i.checked = false;
                $scope.checked = [];
            })
        }
    };
    $scope.selectOne = function () {
        angular.forEach($rootScope.equipList4, function (i) {
            var index = $scope.checked.indexOf(i.device);
            if (i.checked && index === -1) {
                $scope.checked.push(i.device);
            } else if (!i.checked && index != -1) {
                $scope.checked.splice(index, 1);
            }
        });
        if ($rootScope.equipList4.length === $scope.checked.length) {
            $scope.checkAll = true;
        } else {
            $scope.checkAll = false;
        }
    };
    $scope.resetNumber = '1';
    $scope.resetButton = function () {
        for (var i = 0, arr = []; i < $('.new-wx-equip-input4').length; i++) {
            if ($('.new-wx-equip-input4').eq(i).prop('checked')) {
                arr.push($('.new-wx-equip-input4').eq(i).parent().next().attr('title'));
            }
        }
        if (arr.length == 0) {
            alert('请勾选需要切换的设备！');
        } else {
            $http.get($rootScope.link + '/momo/switchMomo?devices=' + JSON.stringify(arr) + '&rank=' + parseInt($scope.resetNumber)).success(function (data) {
                if (data.code == 200) {
                    alert('添加任务成功！');
                    var newArr = [];
                    for (var i = 0; i < $('.new-wx-equip-input4').length; i++) {
                        if ($('.new-wx-equip-input4').eq(i).prop('checked')) {
                            newArr.push($('.new-wx-equip-input4').eq(i).parent().next().attr('title'));
                        }
                    }
                    $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify(newArr) + '&pageNo=1&pageSize=17').success(function (data) {
                        if (data.code == 200) {
                            $rootScope.equipList4 = data.data.content;
                            $('#pages4').Page({
                                totalPages: data.data.totalPages,//分页总数
                                liNums: 5,//分页的数字按钮数(建议取奇数)
                                activeClass: 'activP', //active 类样式定义
                                callBack: function (page) {
                                    $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify(newArr) + '&pageNo=' + page + '&pageSize=17').success(function (data) {
                                        $rootScope.equipList4 = data.data.content;
                                    })
                                }
                            });
                        }else {
                            alert(data.msg);
                        }
                    });
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
                } else {
                    alert(data.msg);
                }
            });
        }

    };
}]);

/*======================上传通讯录======================*/
app.controller('page27C',["$rootScope","$scope","$http","$location","$anchorScroll",function($rootScope, $scope, $http, $location, $anchorScroll){
    $rootScope.getAllFalse();
    $rootScope.activeTwentySeven = true;
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
            sendObj.append('clear', $scope.isClear);
            sendObj.append('strategy', $scope.addPeople);
            sendObj.append('count', $scope.addPeopleCount);
            sendObj.append('contactList', JSON.stringify($scope.assList));
            $http({
                method: 'POST',
                url: $rootScope.link + "/wechatPlus/addContacts",
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
    $scope.assRadioChoose = false;
    $scope.addPeople = 1;
    $scope.addPeopleCount = 1;
    $scope.getAssHide = function () {
        $scope.assRadioChoose = false;
        $scope.addPeople = 1;
    };
    $scope.getAssShow = function () {
        $scope.assRadioChoose = true;
        $scope.addPeople = 0;
    }
}])

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

/*======================上传通讯录======================*/
app.controller('page29C', ["$rootScope", "$scope", "$http", "$location", "$anchorScroll", function ($rootScope, $scope, $http, $location, $anchorScroll) {
    $rootScope.getAllFalse();
    $rootScope.activeTwentyNine = true;
    $rootScope.navPartSeven = true;
    $rootScope.isScreenPage = true;
    // setInterval(function () {
    //     console.log($rootScope.farGo)
    // },100)
    // $scope.sendAllButton = true
    $scope.okOne = true;
    $scope.okOne1 = false;
    $scope.okOne2 = false;
    $scope.okState = [];
    $scope.okOver = [];
    $scope.noState = [];
    $scope.mmli = $rootScope.disAbled
    // console.log($scope.mmli)
    //------------------已就绪任务-------------
    $scope.turnOk = function () {
        $scope.okOne = true;
        $scope.okOne1 = false;
        $scope.okOne2 = false;
    }
    // var lpl=$('.clickMe')
    $http.get($rootScope.link + '/remote/getTask?pageNo=1&pageSize=1000').success(function (data) {
        if (data.code == 200) {
            $scope.dataAll = data.data.content
            for (var i = 0; i < $scope.dataAll.length; i++) {
                if ($scope.dataAll[i].state == 0) {
                    // console.log('111')
                    $('.page29-close').show()
                }
                if ($scope.dataAll[i].status == 1) {
                    // $scope.dataAll[i].state !=0   开启服务后的
                    $scope.okState.push($scope.dataAll[i])
                } else if ($scope.dataAll[i].status == 0) {
                    $scope.noState.push($scope.dataAll[i])
                } else if ($scope.dataAll[i].status == 10) {
                    $scope.okOver.push($scope.dataAll[i])
                }
            }
        } else {
            alert(data.msg);
        }
    });
    //--------------------初始化标记正在执行任务--------------------------------
    $(function () {
        setTimeout(function () {
            var oo = $('.clickMe')
            for (var i = 0; i < oo.length; i++) {
                // console.log(oo)
                // console.log(oo[i])
                if (oo[i].attributes[1].value == 0) {
                    $rootScope.page29Id = oo[i].attributes[4].value
                    $('.clickMe').eq(i).parent().addClass('on');
                    $('.page29-open').html('任务正在执行').css('background-color', '#DCDCDC').prop('disabled', 'disabled');
                    $('.clickMe').eq(i).parents().parents().parents().siblings().find('.page11-div-checkbox').css('background-color', '#7A7A7A').find('input').prop('disabled', 'disabled');
                }
            }
        }, 500)
    })
    //---------------点击开启任务----------------

    // $(document).on('click', '.Start11', function () {
    //     $scope.thisType = $(this).attr('data')
    //     $scope.thisTid = $(this).attr('value')
    //     $scope.thisName = $(this).attr('name')
    //     $scope.thisWnum = $(this).attr('data1')
    //     if ($(this).html() == '已添加') {
    //         $(this).prop('disabled', 'disabled');
    //
    //         alert('任务已添加过，不可重复添加')
    //     } else {
    //         for (var i = 0, arr = []; i < $('.new-wx-equip-input11').length; i++) {
    //             if ($('.new-wx-equip-input11').eq(i).prop('checked')) {
    //                 arr.push($('.new-wx-equip-input11').eq(i).parent().next().attr('title'));
    //             }
    //         }
    //         $scope.arrLength = arr.length;
    //         if (arr == 0) {
    //             alert('请勾选需要操作的设备！');
    //         } else {
    //             $(this).html("已添加");
    //             $http.get($rootScope.link + '/remote/openServer?tid=' + $scope.thisTid + '&devices=' + JSON.stringify(arr) + '&interval=5&msg=您好，很高兴认识您！&clear=0&strategy=' + $scope.thisType + '&count=' + $scope.arrLength + '&number=' + $scope.thisName + '&wnum=' + $scope.thisWnum + '').success(function (data) {
    //                 if (data.code == 200) {
    //                     alert("远程任务添加成功！")
    //                 } else {
    //                     alert(data.msg)
    //                 }
    //             })
    //         }
    //     }
    //
    // });


    // $('.Start11').click(function () {
    //
    // })

    // $(".you:eq(2)").find(".Start11").css("display","none").next().css({'display':'block','background':'#ff8d3b','margin':' 0 auto','margin-top':'9px'}).html("已添加");
    // $(".Start11").parents().parents().find(".Start11").attr('disabled', 'disabled').css('background', '#ccc');


    // elem.attr('disabled', 'disabled').css('background', '#ccc');
    // elem.next().attr('disabled', 'disabled').css('background', '#ccc');
    // elem.prev().removeAttr('disabled').css('background', '#2abf9e');
    // elem.parent().parent().prev().prev().text('等待执行');


    //--------------------点击关闭按钮----------------
    // $scope.Close=function () {
    //     $(".you:eq(2)").find(".Start11").css("display","block").next().css("display","none");
    //
    //     $(".Close11").parents().parents().find(".Start11").removeAttr('disabled').css({'background':'#2ecc71','margin':' 0 auto','margin-top':'0px'})
    //     $(".you:eq(2)").find(".Start11").css('margin','9px auto 0px')
    // }

    //------------------未就绪任务-------------
    $scope.turnNoOk = function () {
        $scope.okOne = false;
        $scope.okOne1 = true;
        $scope.okOne2 = false;
    }

    //------------------已完成任务-------------
    $scope.turnOkYes = function () {
        $scope.okOne = false;
        $scope.okOne1 = false;
        $scope.okOne2 = true;
    }


    //-------------------------------------------------------------------微信通讯录加人-----------------------------------------------------------------------------------

    $scope.maxTime = 10;
    $scope.addPeopleCount = 1;
    $scope.minTime = 1;
    $scope.upFile = ''
    $scope.clearll = 0;
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
    $scope.MeType = 1
    var selectVal2 = 1
    $('.clickSelect1').change(function () {
        selectVal2 = $(this).val();
        if (selectVal2 == 1) {
            $scope.MeType = 1
        } else if (selectVal2 == 2) {
            $scope.MeType = 2
        }
        else {
            $scope.MeType = 0
        }

    })
    $scope.sendAll1 = function () {
        var saySomething = $(".FontAndEmjoy6").html();
        for (var i = 0, arr = []; i < $('.new-wx-equip-input11').length; i++) {
            if ($('.new-wx-equip-input11').eq(i).prop('checked')) {
                arr.push($('.new-wx-equip-input11').eq(i).parent().next().attr('title'));
            }
        }
        if (arr.length == 0) {
            alert('请勾选需要操作的设备！');
        } else if ($rootScope.page29Id == '' || $rootScope.page29Id == undefined) {
            alert('请选择开启的服务')
        } else if (arr.length * 15 < $scope.addPeopleCount) {
            alert('最大加人数量为' + arr.length * 15 + '')
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
            $scope.sendObj = new FormData();
            $scope.sendObj.append('file', $scope.upFile);
            $scope.sendObj.append('tid', $rootScope.page29Id);
            $scope.sendObj.append('devices', JSON.stringify(arr));
            $scope.sendObj.append('maxInterval', $scope.maxTime);
            $scope.sendObj.append('minInterval', $scope.minTime);
            $scope.sendObj.append('msg', saySomething);
            $scope.sendObj.append('clear', 1);
            $scope.sendObj.append('strategy', $scope.MeType);
            $scope.sendObj.append('count', $scope.addPeopleCount);
            $scope.sendObj.append('number', $rootScope.page29Number);
            $http({
                method: 'POST',
                url: $rootScope.link + "/remote/openServer",
                data: $scope.sendObj,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (data) {
                if (data.code == 200) {
                    alert('任务添加成功!');
                    window.location.reload();
                } else {
                    alert(data.msg);
                }
            });
        }
    };
    //--------------------------------关闭服务--------------------------------
    $scope.closeServer = function () {
        if ($rootScope.page29Id == '' || $rootScope.page29Id == undefined) {
            alert('请选择关闭的服务')
        } else {
            $scope.sendObj1 = new FormData();
            $scope.sendObj1.append('tid', $rootScope.page29Id);
            $http({
                method: 'POST',
                url: $rootScope.link + "/remote/stopServer",
                data: $scope.sendObj1,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (response) {
                if (response.code == 200) {
                    $('.clickMe').parents().parents().parents().find('.page11-div-checkbox').removeClass('on');
                    $('.clickMe').parents().parents().parents().find('.page11-div-checkbox').css('background-color', 'white').find('input').prop('disabled', function () {
                        return false
                    });
                    $('.page29-close').hide()
                    alert('关闭任务成功')
                    window.location.reload();
                } else {
                    alert(response.msg)
                }
            })
        }

    }
}])

app.controller('page2C', ["$rootScope", "$scope", "$http", "$timeout", function ($rootScope, $scope, $http, $timeout) {
    $('.side-bar1').show()
    $('.task-box').show()
    $('.view-box').css('height','100%')
    $rootScope.getAllFalse();
    $rootScope.activeTwo = true;
    $rootScope.navPartOne = true;
    $rootScope.isScreenPage = false;
    $scope.outSideBox = true;
    $scope.inSideBox = false;
    /*--------------------------------页面初始化请求接口查看有无设备登录过-----------------------------------------*/
    $http.get($rootScope.link + '/device/getAllDevice?pageNo=1&pageSize=15').success(function (data) {
        if (data.code == 200) {

            if (data.data.content.length == 0) {
                $scope.sweepBox = true;
            } else {
                $rootScope.DataList = data.data.content;
            }
        }else {
            alert(data.msg)
        }
    });
    $scope.sweepBoxOne = true;
    $scope.sweepBoxTwo = false;
    $scope.sweepBoxThree = false;
    $scope.sweepAssBlock = 'sweep-box-one-block-small';
    $scope.getLoad = function (n) {
        var a;
        n == 1 ? a = '已安装' : a = '未安装';
        return a;
    };
    $scope.Status = function (n) {
        return n == 0 ? '离线' : '在线';
    };
    $scope.statusHigh = function (s) {
        return s == 1 ? 'page2-red' : '';
    };

    //========================= 点击扫描设备  ==============================
    $scope.getSweepTwo = function () {
        $scope.sweepBoxOne = false;
        $scope.sweepBoxTwo = true;
        $http.get($rootScope.link + '/device/initDevice').success(function (data) {
            if (data.code == 200) {
                $scope.sweepAssBlock = 'sweep-box-one-block-big';
                $scope.sweepTime = data.data.time;
                $scope.sweepEquipNumber = 0;
                $scope.sweepOffLineNumber = 0;
                $scope.sweepShowTime = '';
                if(data.data.devices==undefined){
                    alert("扫描出错")
                }else {
                    for (var x = 0; x < data.data.devices.length; x++) {
                        if (data.data.devices[x].status == 1) {
                            $scope.sweepEquipNumber++;
                        } else {
                            $scope.sweepOffLineNumber++;
                        }
                    }
                }
                $http.get($rootScope.link + '/device/getAllDevice?pageNo=1&pageSize=15').success(function (data) {
                    //for(var i=0;i<data.data.content.length;i++){
                    //    if(data.data.content[i].status==1){
                    //        $scope.sweepEquipNumber++;
                    //    }else{
                    //        $scope.sweepOffLineNumber++;
                    //    }
                    //}
                    $scope.response = data;

                });
                $http.get($rootScope.link + '/group/getGroupDataByStatus').success(function (data) {
                    if (data.code == 200) {
                        $rootScope.onlineGroupNames = data.data;
                        //================保存默认加载的设备号=================
                        $rootScope.moArray = [];
                        for (var a = 0; a < data.data[0].deviceVos.length; a++) {
                            $rootScope.moArray.push(data.data[0].deviceVos[a].device);
                        }

                    }else {
                        alert(data.msg)
                    }
                });
                if ($scope.sweepTime < 5) {
                    $scope.sweepShowTime = 5;
                    $timeout(function () {
                        $scope.sweepBoxTwo = false;
                        $scope.sweepBoxThree = true;
                    }, 5200);
                } else {
                    $scope.sweepShowTime = data.data.time;
                    $timeout(function () {
                        $scope.sweepBoxTwo = false;
                        $scope.sweepBoxThree = true;
                    }, $scope.sweepTime);
                }

            } else {
                alert(data.msg);
            }
        });

    };

    $scope.couldChange = function (rank) {
        if (rank != 0) {
            return 'on';
        }
    };
    $scope.couldRead = function (rank) {
        if (rank != 0) {
            return true;
        }
    };
    $scope.couldSave = function (rank) {
        if (rank != 0) {
            return 'cs';
        }
    };
    $scope.couldEdit = function (rank) {
        if (rank == 0) {
            return 'ce';
        }
    };
    $scope.getDataList = function (data) {
        $rootScope.DataList = data.data.content;
        // $timeout(function(){
        //     for(var i=0;i<data.data.content.length;i++){
        //         if(data.data.content[i].rank==0){
        //             alert('请修改设备编号！');
        //             break;
        //         }
        //     }
        // },500);
        $scope.sweepBox = false;
        $('#pages2').Page({
            totalPages: data.data.totalPages, /*//分页总数*/
            liNums: 5,//分页的数字按钮数(建议取奇数)
            activeClass: 'activP', //active 类样式定义
            callBack: function (page) {
                // $scope.pages=page
                $http.get($rootScope.link + '/device/getAllDevice?pageNo=' + page + '&pageSize=15').success(function (data) {
                    if(data.code==200){
                        $rootScope.DataList = data.data.content;
                    }else {
                        alert(data.msg)
                    }

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
        });
        location.reload()
    };
    //点击扫描新设备
    $scope.getSweepBox = function () {
        $scope.sweepBox = true;
        $scope.sweepBoxOne = true;
        $scope.sweepBoxTwo = false;
        $scope.sweepBoxThree = false;
        $scope.sweepAssBlock = 'sweep-box-one-block-small';
        //$http.get($rootScope.link+'/device/initDevice').success(function(data){
        //    if(data.code==200){
        //
        //    }
        //});
    };

    //$scope.sureSweepBoxTwo=function(){
    //    $scope.sweepBox=true;
    //    $http.get($rootScope.link+'/device/getAllDevice').success(function(data){
    //        $scope.DataList=data;
    //    });
    //};

    //点击一键初始化
    //$scope.initAllApp=function(){
    //    if($scope.checked.length==0){
    //        alert('请勾选需要操作的设备！');
    //    }else{
    //        var sendObj=new FormData();
    //        sendObj.append('devices',JSON.stringify($scope.checked));
    //        $http({
    //            method:'POST',
    //            url:$rootScope.link+"/device/installDeviceApps",
    //            data: sendObj,
    //            headers: {'Content-Type':undefined},
    //            transformRequest: angular.identity
    //        }).success( function ( data ) {
    //            if(data.code==200){
    //                alert('初始化成功!');
    //                $http.get($rootScope.link+'/task/getGroupTaskInit?status=-1').success(function(data){
    //                    if(data.code==200){
    //                        $rootScope.taskList=data.data;
    //                        $rootScope.taskAll=true;
    //                        $rootScope.taskDoing=false;
    //                        $rootScope.taskWait=false;
    //                        $rootScope.taskDown=false;
    //                        $rootScope.newBell=true;
    //                    }
    //                });
    //            }else{
    //                alert('初始化任务失败！ 请重试！');
    //            }
    //        });
    //    }
    //};

    //导出
    $scope.wayOut = function () {
        $(".way-out-table").table2excel({
            exclude: ".noExl",
            name: "Excel Document Name",
            filename: "设备帐号列表",
            exclude_img: true,
            exclude_links: true,
            exclude_inputs: true
        });
    };
    ////刷新
    //$scope.getNewList=function(){
    //    $http.get($rootScope.link+'/wechat/getWeChatInfo').success(function(data){
    //        if(data.code==200){
    //            alert('添加任务成功!');
    //            $http.get($rootScope.link+'/task/getGroupTaskInit?status=-1').success(function(data){
    //                if(data.code==200){
    //                    $rootScope.taskList=data.data;
    //                    $rootScope.taskAll=true;
    //                    $rootScope.taskDoing=false;
    //                    $rootScope.taskWait=false;
    //                    $rootScope.taskDown=false;
    //                    $rootScope.newBell=true;
    //                }
    //            });
    //        }else{
    //            alert('刷新失败！请重试！');
    //        }
    //    });
    //};

    // ==============================删除设备==================================
    $scope.deleteEquip = function (device) {
        $http.get($rootScope.link + '/device/delDevice?device=' + device).success(function (data) {
            if (data.code == 200) {
                alert('删除成功！');
                if ($scope.pages == 0) {
                    $scope.pages = 1
                }
                $http.get($rootScope.link + '/device/getAllDevice?pageNo=1&pageSize=15').success(function (data) {
                    if (data.code == 200) {
                        if (data.data.content.length == 0) {
                            $scope.sweepBox = true;
                        } else {
                            // location.reload()
                            $http.get($rootScope.link + '/device/getAllDevice?pageNo=' + $scope.pages + '&pageSize=15').success(function (data) {
                                $rootScope.DataList = data.data.content;
                                // $('#pages2').Page({
                                //     totalPages: data.data.totalPages,//分页总数
                                //     liNums: 5,//分页的数字按钮数(建议取奇数)
                                //     activeClass: 'activP', //active 类样式定义
                                //     callBack: function (page) {
                                //         $scope.pages=page
                                //         $http.get($rootScope.link + '/device/getAllDevice?pageNo=' + page + '&pageSize=15').success(function (data) {
                                //             $rootScope.DataList = data.data.content;
                                //             // console.log($rootScope.DataList)
                                //         })
                                //     }
                                // });
                            });
                        }
                    }
                });
                var pp = $("tbody tr").length / 2;
                // console.log(pp)
                if (pp == 1) {
                    // $(".pagingUl li").last().prev().click(function () {
                    //     $(".pagingUl li").last().removeClass("activP").remove()
                    //
                    // })
                    location.reload()
                }
            } else {
                alert(data.msg);
            }
        });
    };



    //==========================查找我的设备=================
    $scope.showMyEquip = function (device) {
        $http.get($rootScope.link + '/device/showDifferent?device=' + device).success(function (data) {
            if (data.code == 200) {
                alert('添加任务成功！');
                $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
                    if (data.code == 200) {
                        $rootScope.taskList = data.data;
                        $rootScope.taskAll = true;
                        $rootScope.taskDoing = false;
                        $rootScope.taskWait = false;
                        $rootScope.taskDown = false;
                        $rootScope.newBell = true;
                    }
                });
            } else {
                alert(data.msg);
            }
        });
    };
    $scope.isShow = function (s) {
        if (s == 1) {
            return true;
        }
    };
    $scope.rankAss = function (rank) {
        return rank == 1000 ? '-' : rank;
    };
    $scope.getPage = function (index) {
        return $scope.assPage * 15 + index;
    }
}]);


app.controller('page30C',["$rootScope","$scope","$http","$location","$anchorScroll",function($rootScope, $scope, $http, $location, $anchorScroll){
    $rootScope.getAllFalse();
    $rootScope.navPartEight = true;
    $rootScope.activeThirty = true;
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
            sendObj.append('clear', $scope.isClear);
            sendObj.append('strategy', $scope.addPeople);
            sendObj.append('count', $scope.addPeopleCount);
            sendObj.append('contactList', JSON.stringify($scope.assList));
            $http({
                method: 'POST',
                url: $rootScope.link + "/wechatPlus/addContacts",
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
                        }
                    });
                }
            });
        }
    };
    $scope.assRadioChoose = false;
    $scope.addPeople = 1;
    $scope.addPeopleCount = 1;
    $scope.getAssHide = function () {
        $scope.assRadioChoose = false;
        $scope.addPeople = 1;
    };
    $scope.getAssShow = function () {
        $scope.assRadioChoose = true;
        $scope.addPeople = 0;
    }
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main-chart'));

    // 指定图表的配置项和数据
    var option = {
        title: {
            text: '近七天好友新增好友人数统计'
        },
        tooltip: {},
        legend: {
            data:['']
        },
        xAxis: {
            data: ["哈哈哈哈","羊毛衫","雪纺衫","裤子","高跟鞋","袜子","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
            name: '好友新增人数',
            type: 'bar',
            data: [105, 20, 36, 10, 10, 20, 20, 36, 10, 10, 20]
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);


    //----------------------------------------------
    var myChart1 = echarts.init(document.getElementById('main-chart1'));
    option = {
        title : {
            text: '男女比例',
            // subtext: '纯属虚构',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['男','女']
        },
        series : [
            {
                name: '访问来源',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:335, name:'男'},
                    {value:310, name:'女'},
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    myChart1.setOption(option);

    //----------------------------------------------------------
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main-chart2'));

    // 指定图表的配置项和数据
    var option = {
        title: {
            text: '近七天操作统计'
        },
        tooltip: {},
        legend: {
            data:['']
        },
        xAxis: {
            data: ["哈哈哈哈","羊毛衫","雪纺衫","裤子","高跟鞋","袜子","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
            name: '好友新增人数',
            type: 'bar',
            data: [105, 20, 36, 10, 10, 20, 20, 36, 10, 10, 20]
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}])
app.controller('page34C', ["$rootScope", "$scope", "$http", "$timeout", function ($rootScope, $scope, $http, $timeout) {
    $('.side-bar1').css('display', 'block')
    $('.task-box').css('display', 'block')
    $rootScope.getAllFalse();
    $rootScope.activemmp = true;
    $rootScope.navPartOne = true;
    $rootScope.isScreenPage = false;
    $scope.moveBox = false;
    $scope.editBoxTwo = false;
    $scope.editBoxOne = false;
    $scope.editBoxThree = false;
    $scope.alertSuccess = false;
    $scope.alertDanger = false;
    $scope.alertWaring = false;
    $scope.choseClick = false;
    $scope.offline = 0
    $scope.online = 0;
    $scope.page1CheckNums = 0;
    $scope.UpVersion = ''
    $scope.logout = function () {
        $http.get($rootScope.link + '/logout').success(function (data) {
            if (data.code == 200) {
                window.location.href = 'http://' + window.location.host + '/wgcs/#/login';

            } else {
                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;注销登录失败');
                setTimeout(function () {
                    $('.page1-alert-small-danger').hide(300)
                }, 2000)
            }
        })
    }
    $scope.UpWechatBanben = function (s, q) {
        var a1 = $scope.UpVersion;
        var a2 = s
        var a3 = a1.split('.');
        var a4 = a2.split('.');
        if (a3.length < a4.length) {
            var a5 = a4.length - a3.length
            for (var i = 0; i < a5; i++) {
                a3.push('')
            }
        }
        if (a4.length < a3.length) {
            var a6 = a3.length - a4.length
            for (var i = 0; i < a6; i++) {
                a4.push('')
            }
        }
        for (var i = 0; i < a3.length; i++) {
            var qwe = parseInt(a3[i])
            var qwe1 = parseInt(a4[i])
            if (qwe > qwe1) {
                s = ''
                break;
            } else if (qwe < qwe1) {
                s = 'noShow'
                break
            }
            else {
                s = 'noShow'
            }
        }
        if (q == 1) {

        } else {
            s = 'noShow'
        }


        return s
    }
    /*-------微信号升级-------*/
    $scope.page1UpHJi = function (e) {
        var arr = [];
        arr.push(e)
        var sendObj = new FormData();
        sendObj.append('devices', JSON.stringify(arr));
        $http({
            method: 'POST',
            url: $rootScope.link + "/device/updateWechat",
            data: sendObj,
            headers: {'Content-Type': undefined},
            transformRequest: angular.identity
        }).success(function (data) {
            if (data.code == 200) {
                var timer = setInterval(function () {    //开启定时器
                    if ($rootScope.comWechatNum == true) {
                        $http.get($rootScope.link + '/wechat/getWechatVersion').success(function (data) {
                            if (data.code == 200) {
                                $rootScope.initOver = true;
                                $scope.UpVersion = data.msg
                            } else {
                            }
                        });
                        $http.get($rootScope.link + '/device/getAllDevice?pageNo=1&pageSize=15').success(function (data) {
                            if (data.code == 200) {
                                if (data.data.content.length == 0) {
                                    $scope.sweepBox = true;
                                    $('.page3-div-checkbox1').attr('checked', false).parent().removeClass('on')
                                } else {
                                    $rootScope.DataList = data.data.content;
                                    if (data.data.content.length > 0) {
                                        $scope.offline = 0
                                        $scope.online = 0;
                                        for (var i = 0; i < data.data.content.length; i++) {
                                            if (data.data.content[i].status == 0) {
                                                $scope.offline++;
                                            } else {
                                                $scope.online++
                                            }
                                        }
                                    }
                                }

                                $scope.page1InitDataLength = data.data.totalElements;
                                $('.M-box1').pagination({
                                    totalData: $scope.page1InitDataLength,
                                    pageCount: 1,
                                    showData: 15,
                                    coping: true,
                                    count: 2,
                                    callback: function (api) {
                                        var data = {
                                            page: api.getCurrent(),
                                        };
                                        $http.get($rootScope.link + '/device/getAllDevice?pageNo=' + data.page + '&pageSize=15').success(function (data) {
                                            $scope.response = data;
                                            $scope.page1InitDataLength = data.data.totalElements

                                            $('.page3-div-checkbox1').attr('checked', false).parent().removeClass('on')
                                            if (data.data.content.length > 0) {
                                                $scope.offline = 0
                                                $scope.online = 0;
                                                for (var i = 0; i < data.data.content.length; i++) {
                                                    if (data.data.content[i].status == 0) {
                                                        $scope.offline++;
                                                    } else {
                                                        $scope.online++
                                                    }
                                                }
                                            }
                                        });
                                    }
                                })
                                clearInterval(timer)
                                $rootScope.comWechatNum = false
                            } else {
                                $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                                setTimeout(function () {
                                    $('.page1-alert-danger').hide(300)
                                }, 2000)
                            }
                        });
                    }
                }, 2000);
                $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;微信升级任务添加成功');
                setTimeout(function () {
                    $('.page1-alert-waring').hide(300)
                }, 2000)
            } else {
                $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;微信升级任务添加失败，请重试并检查设备连接');
                setTimeout(function () {
                    $('.page1-alert-danger').hide(300)
                }, 2000)
            }
        });
    }
    /*-------单个手机同屏-------*/
    $scope.isShowScreen = function (e) {
        localStorage.removeItem("devices")
        localStorage.setItem('devices', '' + e + '')
        var mkmk = localStorage.getItem("devices")
        // console.log('http://'+window.location.host+'/wgcs/screens.html')
        window.close('http://' + window.location.host + '/wgcs/screens.html ', '_self');
        window.open('http://' + window.location.host + '/wgcs/screens.html', 'true');
    }
    /*-------选择多个手机同屏-------*/
    $scope.isShowAllScreen = function () {
        var arr = [];
        var arr1 = [];
        var arr2 = [];
        for (var i = 0; i < $('.page1-onChecked').length; i++) {
            if ($('.page1-onChecked').eq(i).prop('checked')) {
                arr.push($('.page1-onChecked').eq(i).attr('data'));
                arr1.push($('.page1-onChecked').eq(i).attr('data1'));
            }
        }
        for (var i2 = 0; i2 < arr.length; i2++) {
            if (arr1[i2] != 0) {
                arr2.push(arr[i2])
            }
        }
        var arr3 = arr2.join(',');
        localStorage.removeItem("devices")
        localStorage.setItem('devices', '' + arr3 + '')
        var mkmk = localStorage.getItem("devices")
        // console.log('http://'+window.location.host+'/wgcs/screens.html')
        window.close('http://' + window.location.host + '/wgcs/screens.html ', '_self');
        window.open('http://' + window.location.host + '/wgcs/screens.html', 'true');
    }
    /*-----------------------进入页面默认访问扫描上次登录的设备-----------------------------*/
    $http.get($rootScope.link + '/device/getAllDevice?pageNo=1&pageSize=15').success(function (data) {
        if (data.code == 200) {
            if (data.data.content.length == 0) {
                $scope.sweepBox = true;
                $('.page3-div-checkbox1').attr('checked', false).parent().removeClass('on')
            } else {
                $rootScope.DataList = data.data.content;
                if (data.data.content.length > 0) {
                    $scope.offline = 0
                    $scope.online = 0;
                    for (var i = 0; i < data.data.content.length; i++) {
                        if (data.data.content[i].status == 0) {
                            $scope.offline++;
                        } else {
                            $scope.online++
                        }
                    }
                }
            }
            $http.get($rootScope.link + '/wechat/getWechatVersion').success(function (data) {
                if (data.code == 200) {
                    $rootScope.initOver = true;
                    $scope.UpVersion = data.msg
                } else {
                }
            });
            $scope.page1InitDataLength = data.data.totalElements;
            // console.log( $scope.page1InitDataLength )
            $('.M-box1').pagination({
                totalData: $scope.page1InitDataLength,
                pageCount: 1,
                showData: 15,
                coping: true,
                count: 2,
                callback: function (api) {
                    var data = {
                        page: api.getCurrent(),
                    };
                    $http.get($rootScope.link + '/device/getAllDevice?pageNo=' + data.page + '&pageSize=15').success(function (data) {
                        $scope.response = data;
                        $scope.page1InitDataLength = data.data.totalElements

                        $('.page3-div-checkbox1').attr('checked', false).parent().removeClass('on')
                        $rootScope.DataList = data.data.content;
                        if (data.data.content.length > 0) {
                            $scope.offline = 0
                            $scope.online = 0;
                            for (var i = 0; i < data.data.content.length; i++) {
                                if (data.data.content[i].status == 0) {
                                    $scope.offline++;
                                } else {
                                    $scope.online++
                                }
                            }
                        }
                    });
                }
            })
        } else {
            $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
            setTimeout(function () {
                $('.page1-alert-danger').hide(300)
            }, 2000)
        }
    });
    /*----------------------选择设备--------------------------------*/
    $scope.page1onChecked = function () {
        var allCheckShow = [];
        var oncheck = $('.page1-onChecked');
        for (var i = 0; i < oncheck.length; i++) {
            if (oncheck[i].checked == true) {
                allCheckShow.push(oncheck[i])
            } else {
            }
        }
        $scope.page1CheckNums = allCheckShow.length
        if (allCheckShow.length <= 0) {
            $scope.choseClick = false
        } else {
            $scope.choseClick = true
        }
        if (allCheckShow.length == oncheck.length) {
            $('.page3-div-checkbox1').parent().addClass('on')
            $('.page3-div-checkbox1')[0].checked = true;
        } else {
            $('.page3-div-checkbox1').parent().removeClass('on')
            $('.page3-div-checkbox1')[0].checked = false;
        }
    }
    $scope.page1AllChecked = function () {
        var oncheck = $('.page1-onChecked');
        if ($('.page3-div-checkbox1')[0].checked == false) {
            $scope.choseClick = false
            $scope.page1CheckNums = 0
        } else {
            $scope.choseClick = true
            $scope.page1CheckNums = oncheck.length
        }
    }

    /*---------------------扫描设备提示框----------------------*/
    $scope.sweepBoxOne = true;
    $scope.sweepBoxTwo = false;
    $scope.sweepBoxThree = false;
    $scope.sweepAssBlock = 'sweep-box-one-block-small';
    $scope.getLoad = function (n) {
        var a;
        n == 1 ? a = '已安装' : a = '未安装';
        return a;
    };
    $scope.Status = function (n) {
        return n == 0 ? '离线' : '在线';
    };
    $scope.statusHigh = function (s) {
        return s == 1 ? 'page2-red' : '';
    };

    //========================= 点击扫描设备  ==============================
    $scope.getSweepTwo = function () {
        $scope.sweepBoxOne = false;
        $scope.sweepBoxTwo = true;
        $http.get($rootScope.link + '/device/initDevice').success(function (data) {
            if (data.code == 200) {
                $scope.sweepAssBlock = 'sweep-box-one-block-big';
                $scope.sweepTime = data.data.time;
                $scope.sweepEquipNumber = 0;
                $scope.sweepOffLineNumber = 0;
                $scope.sweepShowTime = '';
                if (data.data.devices == undefined) {
                    $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;初始化系统未找到设备请检查设备连接，刷新页面或重启系统')
                    setTimeout(function () {
                        $('.page1-alert-danger').hide(300)
                    }, 2000)
                } else {

                    for (var x = 0; x < data.data.devices.length; x++) {
                        if (data.data.devices[x].status == 1) {
                            $scope.sweepEquipNumber++;
                        } else {
                            $scope.sweepOffLineNumber++;
                        }
                    }
                }
                $http.get($rootScope.link + '/device/getAllDevice?pageNo=1&pageSize=15').success(function (data) {
                    //for(var i=0;i<data.data.content.length;i++){
                    //    if(data.data.content[i].status==1){
                    //        $scope.sweepEquipNumber++;
                    //    }else{
                    //        $scope.sweepOffLineNumber++;
                    //    }
                    //}
                    $('.page3-div-checkbox1').attr('checked', false).parent().removeClass('on')
                    $http.get($rootScope.link + '/wechat/getWechatVersion').success(function (data) {
                        if (data.code == 200) {
                            $scope.UpVersion = data.msg
                        } else {
                        }
                    });
                    $rootScope.DataList = data.data.content;
                    if (data.data.content.length > 0) {
                        $scope.offline = 0
                        $scope.online = 0;
                        for (var i = 0; i < data.data.content.length; i++) {
                            if (data.data.content[i].status == 0) {
                                $scope.offline++;
                            } else {
                                $scope.online++
                            }
                        }
                    }
                    $scope.response = data.data.content;
                    $scope.page1InitDataLength = data.data.totalElements;
                    $('.M-box1').pagination({
                        totalData: $scope.page1InitDataLength,
                        pageCount: 1,
                        showData: 15,
                        coping: true,
                        count: 2,
                        callback: function (api) {
                            var data = {
                                page: api.getCurrent(),
                            };
                            $http.get($rootScope.link + '/device/getAllDevice?pageNo=' + data.page + '&pageSize=15').success(function (data) {
                                $scope.response = data;
                                $rootScope.DataList = data.data.content;
                                $scope.page1InitDataLength = data.data.totalElements
                                $('.page3-div-checkbox1').attr('checked', false).parent().removeClass('on')
                                if (data.data.content.length > 0) {
                                    $scope.offline = 0
                                    $scope.online = 0;
                                    for (var i = 0; i < data.data.content.length; i++) {
                                        if (data.data.content[i].status == 0) {
                                            $scope.offline++;
                                        } else {
                                            $scope.online++
                                        }
                                    }
                                }
                            });
                        }

                    })
                });


                $http.get($rootScope.link + '/group/getGroupDataByStatus').success(function (response) {
                    if (response.code == 200) {
                        $rootScope.onlineGroupNames = response.data;
                        //================保存默认加载的设备号=================
                        $rootScope.moArray = [];
                        for (var a = 0; a < response.data[0].deviceVos.length; a++) {
                            $rootScope.moArray.push(response.data[0].deviceVos[a].device);
                        }
                    } else {
                        $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;初始化系统失败未获取到相关设备，请检查设备连接、刷新页面、或重启系统');
                        setTimeout(function () {
                            $('.page1-alert-danger').hide(300)
                        }, 2000)
                    }
                });
                if ($scope.sweepTime < 5) {
                    $scope.sweepShowTime = 5;
                    $timeout(function () {
                        $scope.sweepBoxTwo = false;
                        $scope.sweepBoxThree = true;
                    }, 5200);
                } else {
                    $scope.sweepShowTime = data.data.time;
                    $timeout(function () {
                        $scope.sweepBoxTwo = false;
                        $scope.sweepBoxThree = true;
                    }, $scope.sweepTime);
                }

            } else {
                $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;初始化系统失败，请刷新页面或重启系统');
                setTimeout(function () {
                    $('.page1-alert-danger').hide(300)
                }, 2000)
            }
        });

    };
    /*-------------------取消扫描设备-----------------------------*/
    $scope.getSweepTwo1 = function () {
        $scope.sweepBox = false;
    }
    $scope.couldChange = function (rank) {
        if (rank != 0) {
            return 'on';
        }
    };
    $scope.couldRead = function (rank) {
        if (rank != 0) {
            return true;
        }
    };
    $scope.couldSave = function (rank) {
        if (rank != 0) {
            return 'cs';
        }
    };
    $scope.couldEdit = function (rank) {
        if (rank == 0) {
            return 'ce';
        }
    };
    $scope.sweepBoxOneTwo22 = false
    /*--------------------扫描设备完成点击确定--------------------------------*/
    $scope.getDataList = function () {
        $rootScope.DataList = $scope.response;
        $scope.sweepBoxOneTwo22 = false
        $scope.sweepBox = false;
        /*======================重点部分扫描完成确定后================================*/
        // $http.get($rootScope.link + '/task/getRunTaskCount').success(function (data) {
        //     if (data.code == 200) {
        //         if (data.data == 0) {
        //             $scope.sweepBox = false;
        //             $scope.sweepBoxOneTwo22 = false
        //         } else {
        //             var startInit = setInterval(function () {
        //                 $http.get($rootScope.link + '/task/getRunTaskCount').success(function (data) {
        //                     if (data.code == 200) {
        //                         if (data.data == 0) {
        //                             $scope.sweepBoxOneTwo22 = false
        //                             $scope.sweepBox = false;
        //                             $rootScope.initOver = true;
        //                             clearInterval(startInit);
        //                         } else {
        //                             $scope.lpld = data.data
        //                         }
        //                     } else {
        //                     }
        //                 });
        //             }, 1000)
        //             $scope.sweepBoxThree = false
        //             $scope.sweepBoxOneTwo22 = true
        //         }
        //     } else {
        //
        //     }
        // });
    };
    /*--------------------点击扫描新设备--------------------------------*/

    $scope.getSweepBox = function () {
        $http.get($rootScope.link + '/task/getRunTaskCount').success(function (data) {
            if (data.code == 200) {
                if (data.data == 0) {
                    $scope.sweepBox = true;
                    $scope.sweepBoxOne = true;
                    $scope.sweepBoxTwo = false;
                    $scope.sweepBoxThree = false;
                    $scope.sweepAssBlock = 'sweep-box-one-block-small';
                    $rootScope.sweepBoxOneTwo1 = false;
                } else {
                    $rootScope.sweepBoxOneTwo1 = true;
                }
            } else {

            }
        });

    };
    $scope.sweepBoxOneTwo3 = function () {
        $rootScope.sweepBoxOneTwo1 = false;
    }
    $scope.sweepBoxOneTwo2 = function () {
        $rootScope.sweepBoxOneTwo1 = true;
        $http.get($rootScope.link + '/task/clearTask').success(function (data) {
            if (data.code == 200) {
                $scope.sweepBox = true;
                $scope.sweepBoxOne = true;
                $scope.sweepBoxTwo = false;
                $scope.sweepBoxThree = false;
                $scope.sweepAssBlock = 'sweep-box-one-block-small';
                $rootScope.sweepBoxOneTwo1 = false;
            } else {
                $rootScope.sweepBoxOneTwo1 = true;
            }
        });
    }

    /*--------------------导出设备列表--------------------------------*/
    $scope.wayOut = function () {
        $(".way-out-table").table2excel({
            exclude: ".noExl",
            name: "Excel Document Name",
            filename: "设备帐号列表",
            exclude_img: true,
            exclude_links: true,
            exclude_inputs: true
        });
    };
    ////刷新
    //$scope.getNewList=function(){
    //    $http.get($rootScope.link+'/wechat/getWeChatInfo').success(function(data){
    //        if(data.code==200){
    //            alert('添加任务成功!');
    //            $http.get($rootScope.link+'/task/getGroupTaskInit?status=-1').success(function(data){
    //                if(data.code==200){
    //                    $rootScope.taskList=data.data;
    //                    $rootScope.taskAll=true;
    //                    $rootScope.taskDoing=false;
    //                    $rootScope.taskWait=false;
    //                    $rootScope.taskDown=false;
    //                    $rootScope.newBell=true;
    //                }
    //            });
    //        }else{
    //            alert('刷新失败！请重试！');
    //        }
    //    });
    //};
    // ==============================删除设备==================================
    $scope.deleteEquip = function (device) {
        var arr = [];
        arr.push(device)
        var sendObj = new FormData();
        sendObj.append('devices', JSON.stringify(arr));
        $http({
            method: 'POST',
            url: $rootScope.link + "/device/delDevices",
            data: sendObj,
            headers: {'Content-Type': undefined},
            transformRequest: angular.identity
        }).success(function (data) {
            if (data.code == 200) {
                $('.page1-alert-success').show(300).find('.page1-alert-success-con').html('&nbsp;&nbsp;设备删除成功');
                setTimeout(function () {
                    $('.page1-alert-success').hide(300)
                }, 2000)
                $http.get($rootScope.link + '/device/getAllDevice?pageNo=1&pageSize=15').success(function (data) {
                    if (data.code == 200) {
                        $('.page3-div-checkbox1').attr('checked', false).parent().removeClass('on')
                        if (data.data.content.length == 0) {
                            $scope.sweepBox = true;
                        } else {
                            $rootScope.DataList = data.data.content;
                            $scope.page1InitDataLength = data.data.totalElements
                        }
                        if (data.data.content.length > 0) {
                            $scope.offline = 0
                            $scope.online = 0;
                            for (var i = 0; i < data.data.content.length; i++) {
                                if (data.data.content[i].status == 0) {
                                    $scope.offline++;
                                } else {
                                    $scope.online++
                                }
                            }
                        }
                        $http.get($rootScope.link + '/wechat/getWechatVersion').success(function (data) {
                            if (data.code == 200) {
                                $scope.UpVersion = data.msg
                            } else {
                            }
                        });
                    }
                    $('.M-box1').pagination({
                        totalData: $scope.page1InitDataLength,
                        pageCount: 1,
                        showData: 15,
                        coping: true,
                        count: 2,
                        callback: function (api) {
                            var data = {
                                page: api.getCurrent(),
                            };
                            $http.get($rootScope.link + '/device/getAllDevice?pageNo=' + data.page + '&pageSize=15').success(function (data) {
                                if (data.code == 200) {
                                    $('.page3-div-checkbox1').attr('checked', false).parent().removeClass('on')
                                    if (data.data.content.length == 0) {
                                        $scope.sweepBox = true;
                                    } else {
                                        $rootScope.DataList = data.data.content;
                                    }
                                    $scope.page1InitDataLength = data.data.totalElements
                                    if (data.data.content.length > 0) {
                                        $scope.offline = 0
                                        $scope.online = 0;
                                        for (var i = 0; i < data.data.content.length; i++) {
                                            if (data.data.content[i].status == 0) {
                                                $scope.offline++;
                                            } else {
                                                $scope.online++
                                            }
                                        }
                                    }
                                }
                            });
                        }

                    })
                });


            } else {
                $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;设备删除失败');
                setTimeout(function () {
                    $('.page1-alert-danger').hide(300)
                }, 2000)
            }
        });
    };
    // ==============================多选删除设备==================================
    $scope.deleteEquip1 = function () {
        for (var arr = [], i = 0; i < $('.page1-onChecked').length; i++) {
            if ($('.page1-onChecked').eq(i).prop('checked')) {
                arr.push($('.page1-onChecked').eq(i).attr('data'));
            }
        }
        var sendObj = new FormData();
        sendObj.append('devices', JSON.stringify(arr));
        $http({
            method: 'POST',
            url: $rootScope.link + "/device/delDevices",
            data: sendObj,
            headers: {'Content-Type': undefined},
            transformRequest: angular.identity
        }).success(function (data) {
            if (data.code == 200) {

                $('.page1-alert-success').show(300).find('.page1-alert-success-con').html('&nbsp;&nbsp;批量设备删除成功');
                setTimeout(function () {
                    $('.page1-alert-success').hide(300)
                }, 2000)
                $http.get($rootScope.link + '/device/getAllDevice?pageNo=1&pageSize=15').success(function (data) {
                    if (data.code == 200) {
                        if (data.data.content.length == 0) {
                            $scope.sweepBox = true;
                        } else {
                            $rootScope.DataList = data.data.content;
                            $scope.page1InitDataLength = data.data.totalElements
                        }
                        if (data.data.content.length > 0) {
                            $scope.offline = 0
                            $scope.online = 0;
                            for (var i = 0; i < data.data.content.length; i++) {
                                if (data.data.content[i].status == 0) {
                                    $scope.offline++;
                                } else {
                                    $scope.online++
                                }
                            }
                        }
                        $http.get($rootScope.link + '/wechat/getWechatVersion').success(function (data) {
                            if (data.code == 200) {
                                $scope.UpVersion = data.msg
                            } else {
                            }
                        });
                    }
                    $('.M-box1').pagination({
                        totalData: $scope.page1InitDataLength,
                        pageCount: 1,
                        showData: 15,
                        coping: true,
                        count: 2,
                        callback: function (api) {
                            var data = {
                                page: api.getCurrent(),
                            };
                            $http.get($rootScope.link + '/device/getAllDevice?pageNo=' + data.page + '&pageSize=15').success(function (data) {
                                if (data.code == 200) {
                                    if (data.data.content.length == 0) {
                                        $scope.sweepBox = true;
                                    } else {
                                        $rootScope.DataList = data.data.content;
                                    }
                                    $scope.page1InitDataLength = data.data.totalElements
                                    if (data.data.content.length > 0) {
                                        $scope.offline = 0
                                        $scope.online = 0;
                                        for (var i = 0; i < data.data.content.length; i++) {
                                            if (data.data.content[i].status == 0) {
                                                $scope.offline++;
                                            } else {
                                                $scope.online++
                                            }
                                        }
                                    }
                                }
                            });
                        }

                    })
                });

            } else {
                $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;批量设备删除失败');
                setTimeout(function () {
                    $('.page1-alert-danger').hide(300)
                }, 2000)
            }
        });
    }
    //==========================查找我的设备=================
    $scope.showMyEquip = function (device) {
        var arr = [];
        arr.push(device)
        $http.get($rootScope.link + '/device/showDifferent?device=' + JSON.stringify(arr)).success(function (data) {
            if (data.code == 200) {
                $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;查找设备任务添加成功，请耐心等待');
                setTimeout(function () {
                    $('.page1-alert-waring').hide(300)
                }, 2000)
                $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
                    if (data.code == 200) {
                        $rootScope.taskList = data.data;
                        $rootScope.taskAll = true;
                        $rootScope.taskDoing = false;
                        $rootScope.taskWait = false;
                        $rootScope.taskDown = false;
                        $rootScope.newBell = true;
                    }
                });
            } else {
                $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;查找设备任务添加失败，请检查设备或再次执行');
                setTimeout(function () {
                    $('.page1-alert-danger').hide(300)
                }, 2000)
            }
        });
    };
    $scope.showMyEquip1 = function (device) {
        var arr = [];
        var arr1 = [];
        var arr2 = [];
        for (var i = 0; i < $('.page1-onChecked').length; i++) {
            if ($('.page1-onChecked').eq(i).prop('checked')) {
                arr.push($('.page1-onChecked').eq(i).attr('data'));
                arr1.push($('.page1-onChecked').eq(i).attr('data1'));
            }
        }
        for (var i2 = 0; i2 < arr.length; i2++) {
            if (arr1[i2] != 0) {
                arr2.push(arr[i2])
            }
        }
        $http.get($rootScope.link + '/device/showDifferent?device=' + JSON.stringify(arr2)).success(function (data) {
            if (data.code == 200) {
                $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;查找设备任务添加成功，请耐心等待');
                setTimeout(function () {
                    $('.page1-alert-waring').hide(300)
                }, 2000)
                $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
                    if (data.code == 200) {
                        $rootScope.taskList = data.data;
                        $rootScope.taskAll = true;
                        $rootScope.taskDoing = false;
                        $rootScope.taskWait = false;
                        $rootScope.taskDown = false;
                        $rootScope.newBell = true;
                    }
                });
            } else {
                $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;查找设备任务添加失败，请检查设备或再次执行');
                setTimeout(function () {
                    $('.page1-alert-danger').hide(300)
                }, 2000)
            }
        });
    };

    $scope.isShow = function (s) {
        if (s == 1) {
            return true;
        }
    };
    // $scope.isShowNo = function (s) {
    //     if (s == 1) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // };
    // $scope.isShowNo1 = function (s) {
    //     if (s == 1) {
    //         return false;
    //     } else {
    //         return true;
    //     }
    // };
    $scope.rankAss = function (rank) {
        return rank == 1000 ? '-' : rank;
    };
    $scope.getPage = function (index) {
        return $scope.assPage * 15 + index;
    }
    /*--------------------------------------------设备完结------------------------------------------------------------------*/


    //================================添加新群组==============================
    $scope.addNewGroup = function () {
        $scope.editBoxThree = true;
        $scope.newGroupName = '';
        $scope.moveBox = false;
        $scope.editBoxTwo = false;
        $scope.editBoxOne = false;
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
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;您输入的分组已存在，不能再次创建');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
            $scope.newGroupName = '';
        } else {
            if ($scope.newGroupName == '') {
                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;新的分组名称不能为空');
                setTimeout(function () {
                    $('.page1-alert-small-danger').hide(300)
                }, 2000)
            } else {
                $http.get($rootScope.link + '/group/createGroup?groupName=' + $scope.newGroupName).success(function (data) {
                    if (data.code == 200) {
                        $('.page1-alert-small-success').show(300).find('.page1-alert-small-success-con').html('&nbsp;&nbsp;新的分组创建成功');
                        setTimeout(function () {
                            $('.page1-alert-small-success').hide(300)
                        }, 2000)
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
                            } else {
                                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;新的分组创建失败');
                                setTimeout(function () {
                                    $('.page1-alert-small-danger').hide(300)
                                }, 2000)
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
                                $http.get($rootScope.link + '/device/getDeviceByDevice/?devices=' + JSON.stringify($rootScope.moArray) + '&pageNo=1&pageSize=15').success(function (data) {
                                    if (data.code == 200) {
                                        $('.M-box1').pagination({
                                            totalData: $scope.page1InitDataLength,
                                            pageCount: 1,
                                            showData: 15,
                                            coping: true,
                                            count: 2,
                                            callback: function (api) {
                                                var data = {
                                                    page: api.getCurrent(),
                                                };
                                                $http.get($rootScope.link + '/device/getAllDevice?pageNo=' + data.page + '&pageSize=15').success(function (data) {
                                                    $('.page3-div-checkbox1').attr('checked', false).parent().removeClass('on')
                                                    $scope.response = data;
                                                    $rootScope.DataList = data.data.content;
                                                    $scope.page1InitDataLength = data.data.totalElements
                                                    if (data.data.content.length > 0) {
                                                        $scope.offline = 0
                                                        $scope.online = 0;
                                                        for (var i = 0; i < data.data.content.length; i++) {
                                                            if (data.data.content[i].status == 0) {
                                                                $scope.offline++;
                                                            } else {
                                                                $scope.online++
                                                            }
                                                        }
                                                    }
                                                });
                                            }

                                        })
                                    } else {

                                        $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试');
                                        setTimeout(function () {
                                            $('.page1-alert-small-danger').hide(300)
                                        }, 2000)
                                    }
                                });
                            } else {

                                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试');
                                setTimeout(function () {
                                    $('.page1-alert-small-danger').hide(300)
                                }, 2000)
                            }
                        });
                    } else {
                        $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;新的分组创建失败');
                        setTimeout(function () {
                            $('.page1-alert-small-danger').hide(300)
                        }, 2000)
                        $scope.editBoxThree = false;
                    }
                });
            }
        }
    };
    //---------------------------------------------------删除分组---------------------------------
    $scope.deleteable = function (id) {
        return id == 1 ? true : false;
    };
    $scope.deleteButton = function () {
        $scope.editBoxTwo = true;
        $scope.moveBox = false;
        $scope.editBoxOne = false;
        $scope.editBoxThree = false;
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
        if ($scope.selected.length <= 0) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择并勾选需要进行删除操作的分组');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else {
            $http.get($rootScope.link + '/group/delGroup?groupIds=' + JSON.stringify($scope.selected)).success(function (data) {
                if (data.code == 200) {
                    $('.page1-alert-small-success').show(300).find('.page1-alert-small-success-con').html('&nbsp;&nbsp;删除分组成功');
                    setTimeout(function () {
                        $('.page1-alert-small-success').hide(300)
                    }, 2000)
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
                        } else {

                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试');
                            setTimeout(function () {
                                $('.page1-alert-small-danger').hide(300)
                            }, 2000)
                        }
                    });
                    $http.get($rootScope.link + '/device/getAllDevice/?pageNo=1&pageSize=15').success(function (data) {
                        $rootScope.DataList = data.data.content;
                        $scope.page1InitDataLength = data.data.totalElements
                        if (data.code == 200) {
                            $scope.page1InitDataLength = data.data.totalElements
                            $('.M-box1').pagination({
                                totalData: $scope.page1InitDataLength,
                                pageCount: 1,
                                showData: 15,
                                coping: true,
                                count: 2,
                                callback: function (api) {
                                    var data = {
                                        page: api.getCurrent(),
                                    };
                                    $http.get($rootScope.link + '/device/getDeviceByDevice/?pageNo=' + data.page + '&pageSize=15').success(function (data) {
                                        $rootScope.DataList = data.data.content;
                                        $scope.page1InitDataLength = data.data.totalElements
                                    })
                                }

                            })
                        } else {

                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试');
                            setTimeout(function () {
                                $('.page1-alert-small-danger').hide(300)
                            }, 2000)
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
                        } else {

                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试');
                            setTimeout(function () {
                                $('.page1-alert-small-danger').hide(300)
                            }, 2000)
                        }
                    });
                    $('.page17-all-checked').hide();
                } else {
                    $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;分组删除失败');
                    setTimeout(function () {
                        $('.page1-alert-small-danger').hide(300)
                    }, 2000)

                }
            });
        }

    };
    //---------------------------------------------修改分组名-------------------------------------
    $scope.changeNameButton = function () {
        var id = 0
        $scope.editBoxOne = true;
        $scope.changeId = id;
        $scope.newGroupName = '';
        $scope.moveBox = false;
        $scope.editBoxTwo = false;
        $scope.editBoxThree = false;
    };
    $scope.cancelChangeButton = function () {
        $scope.editBoxOne = false;
    };
    $scope.changeGroupName = ''
    $scope.sureChangeButton = function () {
        var flag = false;

        for (var x = 0; x < $rootScope.AssGroupNames.length; x++) {
            if ($scope.changeGroupName == $rootScope.AssGroupNames[x]) {
                flag = true;
            }
        }
        if (flag) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;输入的分组已存在，请再次输入其他分组');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
            $scope.changeGroupName = '';
        } else {
            if ($scope.changeGroupName == '') {
                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;输入的分组名称不能为空，请再次输入');
                setTimeout(function () {
                    $('.page1-alert-small-danger').hide(300)
                }, 2000)
            } else {
                var id = $("input[name='changeTarget']:checked").val()
                $http.get($rootScope.link + '/group/updateGroupName?groupId=' + id + '&newName=' + $scope.changeGroupName).success(function (data) {
                    if (data.code == 200) {
                        $('.page1-alert-small-success').show(300).find('.page1-alert-small-success-con').html('&nbsp;&nbsp;分组名称修改成功');
                        setTimeout(function () {
                            $('.page1-alert-small-success').hide(300)
                        }, 2000)
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
                            } else {

                                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试');
                                setTimeout(function () {
                                    $('.page1-alert-small-danger').hide(300)
                                }, 2000)
                            }
                        });
                        $http.get($rootScope.link + '/device/getAllDevice/?pageNo=1&pageSize=15').success(function (data) {
                            $rootScope.DataList = data.data.content;
                            $scope.page1InitDataLength = data.data.totalElements
                            if (data.code == 200) {
                                $scope.page1InitDataLength = data.data.length
                                $('.M-box1').pagination({
                                    totalData: $scope.page1InitDataLength,
                                    pageCount: 1,
                                    showData: 15,
                                    coping: true,
                                    count: 2,
                                    callback: function (api) {
                                        var data = {
                                            page: api.getCurrent(),
                                        };
                                        $http.get($rootScope.link + '/device/getDeviceByDevice/?pageNo=' + data.page + '&pageSize=15').success(function (data) {
                                            $rootScope.DataList = data.data.content;
                                            $scope.page1InitDataLength = data.data.totalElements
                                        })
                                    }

                                })
                            } else {

                                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试');
                                setTimeout(function () {
                                    $('.page1-alert-small-danger').hide(300)
                                }, 2000)
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
                            } else {

                                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试');
                                setTimeout(function () {
                                    $('.page1-alert-small-danger').hide(300)
                                }, 2000)
                            }
                        });
                        $('.page17-all-checked').hide();
                    } else {
                        $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;修改分组名称失败');
                        setTimeout(function () {
                            $('.page1-alert-small-danger').hide(300)
                        }, 2000)
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
    //================================-----------------------======移动分组=======================
    $scope.assMoveTo = true;
    $scope.moveId = 1;
    $scope.moveToId = function (id) {
        $scope.moveId = id;
    };
    $scope.groupMoveTo = function () {
        $scope.moveGroup = []
        for (var i = 0; i < $('.page1-onChecked').length; i++) {
            if ($('.page1-onChecked').eq(i).prop('checked')) {
                $scope.moveGroup.push($('.page1-onChecked').eq(i).attr('data'));
            }
        }
        if ($scope.moveGroup.length == 0) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择并勾选需要加入分组的设备');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else {
            $scope.moveBox = true;
            $scope.editBoxTwo = false;
            $scope.editBoxOne = false;
            $scope.editBoxThree = false;
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
                for (var i = 0; i < $('.page3-div-checkbox input').length; i++) {
                    if ($('.page3-div-checkbox input').eq(i).prop('checked')) {
                        $scope.moveGroup.push($('.page3-div-checkbox input').eq(i).attr('mess_id'));
                    }
                }
                $('.page1-alert-small-success').show(300).find('.page1-alert-small-success-con').html('&nbsp;&nbsp;设备加入分组成功');
                setTimeout(function () {
                    $('.page1-alert-small-success').hide(300)
                }, 2000)
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
                    } else {

                        $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试');
                        setTimeout(function () {
                            $('.page1-alert-small-danger').hide(300)
                        }, 2000)
                    }
                });
                $http.get($rootScope.link + '/device/getAllDevice/?pageNo=1&pageSize=15').success(function (data) {
                    $rootScope.DataList = data.data.content;
                    $scope.page1InitDataLength = data.data.totalElements
                    if (data.code == 200) {
                        $scope.page1InitDataLength = data.data.totalElements
                        $('.M-box1').pagination({
                            totalData: $scope.page1InitDataLength,
                            pageCount: 1,
                            showData: 15,
                            coping: true,
                            count: 2,
                            callback: function (api) {
                                var data = {
                                    page: api.getCurrent(),
                                };
                                $http.get($rootScope.link + '/device/getDeviceByDevice/?pageNo=' + data.page + '&pageSize=15').success(function (data) {
                                    $rootScope.DataList = data.data.content;
                                    $scope.page1InitDataLength = data.data.totalElements
                                })
                            }

                        })
                    } else {

                        $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试');
                        setTimeout(function () {
                            $('.page1-alert-small-danger').hide(300)
                        }, 2000)
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
                    } else {

                        $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试');
                        setTimeout(function () {
                            $('.page1-alert-small-danger').hide(300)
                        }, 2000)
                    }
                });
                $('.page17-all-checked').hide();
            } else {
                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;设备加入分组失败');
                setTimeout(function () {
                    $('.page1-alert-small-danger').hide(300)
                }, 2000)
            }
        });
    };
    $scope.moChecked = function (id) {
        return id == 1 ? true : false;
    };

    // $(document).ready(function(){
    //     $('#example2').DataTable();
    // });
    $scope.page1PopoverShow = function () {
        $('.page1-popover').show()
    }
    $scope.page1PopoverHide = function () {
        $('.page1-popover').hide()
    }
    /*------------------------------------------------分组完结-----------------------------------------------------*/

    $scope.openAll = function (n) {
        var openChecked = [];
        var oncheck = $('.page1-onChecked');
        for (var i = 0; i < oncheck.length; i++) {
            if (oncheck[i].checked == true) {
                openChecked.push(oncheck[i].attributes[0].value)
            } else {
            }
        }
        if (openChecked.length <= 0) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择并勾选需要操作的设备');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else {
            var sendObj = new FormData();
            sendObj.append('devices', JSON.stringify(openChecked));
            sendObj.append('taskId', n);
            $http({
                method: 'POST',
                url: $rootScope.link + "/device/open",
                data: sendObj,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (data) {
                if (data.code == 200) {
                    $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;任务添加成功');
                    setTimeout(function () {
                        $('.page1-alert-waring').hide(300)
                    }, 2000)
                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
                        if (data.code == 200) {
                            $rootScope.taskList = data.data;
                            $rootScope.taskAll = true;
                            $rootScope.taskDoing = false;
                            $rootScope.taskWait = false;
                            $rootScope.taskDown = false;
                            $rootScope.newBell = true;
                        } else {
                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试');
                            setTimeout(function () {
                                $('.page1-alert-small-danger').hide(300)
                            }, 2000)
                        }
                    });
                } else {
                    $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;任务添加失败，请重试并检查设备连接');
                    setTimeout(function () {
                        $('.page1-alert-danger').hide(300)
                    }, 2000)
                }
            });
        }
    };
    $scope.closeAll = function (n) {
        var openChecked1 = [];
        var oncheck = $('.page1-onChecked');
        for (var i = 0; i < oncheck.length; i++) {
            if (oncheck[i].checked == true) {
                openChecked1.push(oncheck[i].attributes[0].value)
            } else {
            }
        }
        if (openChecked1.length == 0) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择并勾选需要操作的设备');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else {
            var sendObj = new FormData();
            sendObj.append('devices', JSON.stringify(openChecked1));
            sendObj.append('taskId', n);
            $http({
                method: 'POST',
                url: $rootScope.link + "/device/close",
                data: sendObj,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (data) {
                if (data.code == 200) {
                    $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;任务添加成功');
                    setTimeout(function () {
                        $('.page1-alert-waring').hide(300)
                    }, 2000)
                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
                        if (data.code == 200) {
                            $rootScope.taskList = data.data;
                            $rootScope.taskAll = true;
                            $rootScope.taskDoing = false;
                            $rootScope.taskWait = false;
                            $rootScope.taskDown = false;
                            $rootScope.newBell = true;
                        } else {
                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试');
                            setTimeout(function () {
                                $('.page1-alert-small-danger').hide(300)
                            }, 2000)
                        }
                    });
                } else {
                    $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;任务添加失败，请重试并检查设备连接');
                    setTimeout(function () {
                        $('.page1-alert-danger').hide(300)
                    }, 2000)
                }
            });
        }
    };
    $scope.backHome = function () {
        var openChecked2 = [];
        var oncheck = $('.page1-onChecked');
        for (var i = 0; i < oncheck.length; i++) {
            if (oncheck[i].checked == true) {
                openChecked2.push(oncheck[i].attributes[0].value)
            } else {
            }
        }
        if (openChecked2.length == 0) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择并勾选需要操作的设备');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else {
            $http.get($rootScope.link + '/device/backHome?devices=' + JSON.stringify(openChecked2)).success(function (data) {
                if (data.code == 200) {
                    $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;任务添加成功');
                    setTimeout(function () {
                        $('.page1-alert-waring').hide(300)
                    }, 2000)
                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
                        if (data.code == 200) {
                            $rootScope.taskList = data.data;
                            $rootScope.taskAll = true;
                            $rootScope.taskDoing = false;
                            $rootScope.taskWait = false;
                            $rootScope.taskDown = false;
                            $rootScope.newBell = true;
                        } else {
                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试');
                            setTimeout(function () {
                                $('.page1-alert-small-danger').hide(300)
                            }, 2000)
                        }
                    });
                } else {
                    $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;任务添加失败，请重试并检查设备连接');
                    setTimeout(function () {
                        $('.page1-alert-danger').hide(300)
                    }, 2000)
                }
            });
        }
    };
}]);

app.controller('page35C', ["$rootScope", "$scope", "$http", "$timeout", function ($rootScope, $scope, $http, $timeout) {
    $rootScope.getAllFalse();
    $rootScope.initOver = true;
    $rootScope.activeThirtyFive = true;
    $rootScope.navPartThree = true;
    $rootScope.isScreenPage = false;
    $scope.table1 = true;
    $scope.table2 = false;
    $scope.table3 = false;
    $scope.inSideBox1 = true;
    $scope.page2Table3Group = false
    $rootScope.page5getMoreData = 1
    //页面显示
    $scope.outSideBox = false;
    $scope.insideBox = false;
    $scope.assBack = false;
    $scope.resetSelect = true;

    /*-------设备列表展开收起-----*/
    $scope.fvcMe = function (e) {
        $('.list_dd').stop();
        $(".list_dt").eq(e).parent().siblings("new-wx-group-list-li").removeAttr("id");
        if ($(".list_dt").eq(e).parent().attr("id") == "open") {
            $(".list_dt").eq(e).parent().removeAttr("id").find('i').css('background', ' url("images/offChecked.png")center no-repeat')
        } else {
            $(".list_dt").eq(e).parent().attr("id", "open").find('i').css('background', ' url("images/openChecked.png")center no-repeat')
        }
    }

    $scope.getInside = function (d) {
        $scope.outSideBox = false;
        $scope.insideBox = true;
        $scope.assMoveTo = false;
        $scope.assBack = true;
        $scope.resetSelect = false;
        $scope.assDevice = d;
        $http.get($rootScope.link + '/wechat/getWechatByDevice?device=' + d).success(function (data) {
            $scope.assList = data.data;
        });
    };
    /*------------获取在线设备------------*/
    $http.get($rootScope.link + '/group/getGroupDataByStatus').success(function (data) {
        if (data.code == 200) {
            $scope.hhalk = []
            for (var a = 0; a < data.data.length; a++) {
                if (data.data[a].deviceVos.length == 0) {
                } else {
                    for (var i = 0; i < data.data[a].deviceVos.length; i++) {
                        $scope.hhalk.push(data.data[a].deviceVos[i].device)
                    }
                }

            }
            $scope.hhalk1 = $scope.hhalk.length
        } else {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        }
    });

    /*------------注销登录------------*/
    $scope.logout = function () {
        $http.get($rootScope.link + '/logout').success(function (data) {
            if (data.code == 200) {
                window.location.href = 'http://' + window.location.host + '/wgcs/#/login'

            } else {
                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;注销登录失败');
                setTimeout(function () {
                    $('.page1-alert-small-danger').hide(300)
                }, 2000)
            }
        })
    }
    /*--------------------------------点击切换后返回-------------------------------------*/
    $scope.getAssBack = function () {
        $scope.outSideBox = true;
        $scope.insideBox = false;
        $scope.resetSelect = true;
        $scope.assBack = false;
        $scope.assMoveTo = true;
        var newArr = [];
        for (var i = 0; i < $('.page17-wx-input').length; i++) {
            if ($('.page17-wx-input').eq(i).prop('checked')) {
                newArr.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
            }
        }
        $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify(newArr) + '&pageNo=1&pageSize=17').success(function (data) {
            if (data.code == 200) {
                $scope.checkAllFour = false;
                $('.page4-floor-one-list').find('span').eq(0).removeClass('on');
                $scope.page1InitDataLength = data.data.content.length


                $('.page2-table1-page').pagination({
                    totalData: $scope.page1InitDataLength,
                    pageCount: 1,
                    showData: 15,
                    coping: true,
                    count: 2,
                    callback: function (api) {
                        var data = {
                            page: api.getCurrent(),
                        };
                        $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify(newArr) + '&pageNo=' + data.page + '&pageSize=15').success(function (data) {
                            if (data.code == 200) {
                                $scope.page1InitDataLength = data.data.content.length
                            }
                        })
                    }

                })
            } else {

                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                setTimeout(function () {
                    $('.page1-alert-small-danger').hide(300)
                }, 2000)
            }
        });
    };
    /*--------------------------------页面初始化------------------------------------------*/
    $timeout(function () {
        // $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify($rootScope.moArray) + '&pageNo=1&pageSize=17').success(function (data) {
        $http.get($rootScope.link + '/device/getAllDeviceByStatus?pageNo=1&pageSize=15').success(function (data) {
            if (data.code == 200) {
                $scope.page1InitDataLength = data.data.content.length
                $('.page2-table1-page').pagination({
                    totalData: $scope.page1InitDataLength,
                    pageCount: 1,
                    showData: 15,
                    coping: true,
                    count: 2,
                    callback: function (api) {
                        var data = {
                            page: api.getCurrent(),
                        };
                        $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify($rootScope.moArray) + '&pageNo=' + data.page + '&pageSize=15').success(function (data) {
                            $rootScope.equipList4 = data.data.content;
                            $scope.page1InitDataLength = data.data.content.length
                        })
                    }
                })
            } else {
                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                setTimeout(function () {
                    $('.page1-alert-small-danger').hide(300)
                }, 2000)
            }
        });
    }, 0);
    //上移
    /*---------------------------上移样式---------------------------------*/
    $scope.isRankOne = function (n) {
        return n == 1 ? 'on' : '';
    };
    /*---------------------------下移样式---------------------------------*/
    $scope.rankDisabled = function (n) {
        return n == 1 ? true : false;
    };
    /*---------------------------上移---------------------------------*/
    $scope.moveUp = function (n) {
        $http.get($rootScope.link + '/wechat/up?rank=' + n + '&device=' + $scope.assDevice).success(function (data) {

            if (data.code == 200) {
                $('.page1-alert-small-success').show(300).find('.page1-alert-small-success-con').html('&nbsp;&nbsp;移动成功');
                setTimeout(function () {
                    $('.page1-alert-small-success').hide(300)
                }, 2000)
                $http.get($rootScope.link + '/wechat/getWechatByDevice?device=' + $scope.assDevice).success(function (data) {
                    $scope.assList = data.data;
                });
            } else {
                $('.page1-alert-small-success').show(300).find('.page1-alert-small-success-con').html('&nbsp;&nbsp;分组名称修改成功');
                setTimeout(function () {
                    $('.page1-alert-small-success').hide(300)
                }, 2000)
            }
        });
    };
    //下移
    $scope.isRankLast = function (n) {
        return n == 20 ? 'on' : '';
    };
    $scope.rankDisabledLast = function (n) {
        return n == 20 ? true : false;
    };
    $scope.moveDown = function (n) {
        $http.get($rootScope.link + '/wechat/down?rank=' + n + '&device=' + $scope.assDevice).success(function (data) {
            if (data.code == 200) {
                $('.page1-alert-small-success').show(300).find('.page1-alert-small-success-con').html('&nbsp;&nbsp;移动成功');
                setTimeout(function () {
                    $('.page1-alert-small-success').hide(300)
                }, 2000)
                $http.get($rootScope.link + '/wechat/getWechatByDevice?device=' + $scope.assDevice).success(function (data) {
                    $scope.assList = data.data;
                });
            } else {
                $('.page1-alert-small-success').show(300).find('.page1-alert-small-success-con').html('&nbsp;&nbsp;分组名称修改成功');
                setTimeout(function () {
                    $('.page1-alert-small-success').hide(300)
                }, 2000)
            }
        });
    };
    /*-------------------------------点击切换-------------------------------------*/
    $scope.assMoveTo = true;
    $scope.checked = [];
    $scope.selectAll = function () {
        if ($scope.checkAllFour) {
            $scope.checked = [];
            angular.forEach($rootScope.equipList4, function (i) {
                i.checked = true;
                $scope.checked.push(i.device);
            })
        } else {
            angular.forEach($rootScope.equipList4, function (i) {
                i.checked = false;
                $scope.checked = [];
            })
        }
    };
    $scope.selectOne = function () {
        angular.forEach($rootScope.equipList4, function (i) {
            var index = $scope.checked.indexOf(i.device);
            if (i.checked && index === -1) {
                $scope.checked.push(i.device);
            } else if (!i.checked && index != -1) {
                $scope.checked.splice(index, 1);
            }
        });
        if ($rootScope.equipList4.length === $scope.checked.length) {
            $scope.checkAll = true;
        } else {
            $scope.checkAll = false;
        }
    };
    $scope.resetNumber = '1';
    /*---------------------------------点击切换------------------------------------------------*/
    $scope.resetButton = function () {
        for (var i = 0, arr = []; i < $('.page17-wx-input').length; i++) {
            if ($('.page17-wx-input').eq(i).prop('checked')) {
                arr.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
            }
        }
        if (arr.length == 0) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请勾选需要切换的设备');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else {
            $http.get($rootScope.link + '/group/switchWechat?devices=' + JSON.stringify(arr) + '&rank=' + parseInt($scope.resetNumber)).success(function (data) {
                if (data.code == 200) {
                    $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;切换微信号任务添加成功');
                    setTimeout(function () {
                        $('.page1-alert-waring').hide(300)
                    }, 2000)
                    var newArr = [];
                    for (var i = 0; i < $('.new-wx-equip-input4').length; i++) {
                        if ($('.new-wx-equip-input4').eq(i).prop('checked')) {
                            newArr.push($('.new-wx-equip-input4').eq(i).parent().next().attr('title'));
                        }
                    }
                    //$http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify(newArr) + '&pageNo=1&pageSize=17').success(function (data) {
                    //    if (data.code == 200) {
                    //        $rootScope.equipList4 = data.data.content;
                    //        $('#pages4').Page({
                    //            totalPages: data.data.totalPages,//分页总数
                    //            liNums: 5,//分页的数字按钮数(建议取奇数)
                    //            activeClass: 'activP', //active 类样式定义
                    //            callBack: function (page) {
                    //                $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify(newArr) + '&pageNo=' + page + '&pageSize=17').success(function (data) {
                    //                    $rootScope.equipList4 = data.data.content;
                    //                })
                    //            }
                    //        });
                    //    }
                    //});
                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
                        if (data.code == 200) {
                            $rootScope.taskList = data.data;
                            $rootScope.taskAll = true;
                            $rootScope.taskDoing = false;
                            $rootScope.taskWait = false;
                            $rootScope.taskDown = false;
                            $rootScope.newBell = true;
                        } else {
                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                            setTimeout(function () {
                                $('.page1-alert-small-danger').hide(300)
                            }, 2000)
                        }
                    });
                } else {
                    $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;添加任务失败');
                    setTimeout(function () {
                        $('.page1-alert-danger').hide(300)
                    }, 2000)
                }
            });
        }

    };
    /*--------------------------------------设备管理完结----------------------------------------------------------*/
    /*-------------------------------table切换--------------------------------------------------*/
    $rootScope.page4getMoreData = 2
    $('.lalaldemaxiya').css('display', 'none')
    $scope.tableSwitch = function (e) {
        if (e == 1) {
            $scope.page2TableChangeName = false;
            $scope.page2TableChangeTag = false;
            $scope.sendMsgFri = false;
            $scope.ThumbsUpTurn = false;
            $scope.page2AddPeople = false;
            $scope.sendMsgFriToGroup = false;
            $('.page3-div-checkbox-friends').attr('checked', false).parent().removeClass('on')
            $rootScope.page4getMoreData = 1
            $scope.page2Table3Group = false
            $scope.inSideBox1 = false
            $scope.insideBox = false;
            $scope.outSideBox = true;
            $('.page2-title-button-but1').css({
                "background-color": "#2ABF9E",
                "color": "#fff"
            }).siblings().css({"background-color": "#fff", "color": "#2ABF9E"});
            for (var arr = [], i = 0; i < $('.page17-wx-input').length; i++) {
                if ($('.page17-wx-input').eq(i).prop('checked')) {
                    arr.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
                }
            }
            if (arr.length > 0) {
                $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify(arr) + '&pageNo=1&pageSize=15').success(function (data) {
                    if (data.code == 200) {
                        $rootScope.equipList4 = data.data.content;
                        $scope.page1InitDataLength = data.data.content.length
                        $('.lalaldemaxiya').css('display', 'block')
                        $('.page2-table1-page').pagination({
                            isHide: true,
                            totalData: $scope.page1InitDataLength,
                            showData: 15,
                            pageCount: 1,
                            coping: true,
                            count: 2,
                            callback: function (api) {
                                var data = {
                                    page: api.getCurrent(),
                                };
                                $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify(arr) + '&pageNo=' + data.page + '&pageSize=15').success(function (data) {
                                    if (data.code == 200) {
                                        $scope.page1InitDataLength = data.data.content.length;
                                        $rootScope.equipList4 = data.data.content;
                                        $('.page3-div-checkbox-friends').attr('checked', false).parent().removeClass('on')
                                    }
                                })
                            }

                        })
                    } else {
                        $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                        setTimeout(function () {
                            $('.page1-alert-small-danger').hide(300)
                        }, 2000)
                    }
                });
            } else {
                $('.lalaldemaxiya').css('display', 'none')
                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请勾选相关设备以便对其操作');
                setTimeout(function () {
                    $('.page1-alert-small-danger').hide(300)
                }, 2000)
            }

        }
        else if (e == 2) {
            $scope.page2TableChangeName = false;
            $scope.page2TableChangeTag = false;
            $scope.sendMsgFri = false;
            $scope.ThumbsUpTurn = false;
            $scope.page2AddPeople = false;
            $scope.sendMsgFriToGroup = false;
            $rootScope.page4getMoreData = 2
            $scope.page2Table3Group = false
            $scope.inSideBox1 = true;
            $scope.insideBox = false;
            $scope.outSideBox = false;
            $('.page2-title-button-but2').css({
                "background-color": "#2ABF9E",
                "color": "#fff"
            }).siblings().css({"background-color": "#fff", "color": "#2ABF9E"});
            for (var arr = [], i = 0; i < $('.page17-wx-input').length; i++) {
                if ($('.page17-wx-input').eq(i).prop('checked')) {
                    arr.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
                }
            }
            if (arr.length > 0) {
                $http.get($rootScope.link + '/operate/getContact?devices=' + JSON.stringify(arr) + '&pageNo=1&pageSize=15').success(function (data) {
                    if (data.code == 200) {
                        $rootScope.WxList = data.data.content;
                        $rootScope.page1InitDataLength = data.data.totalElements;
                        $('.page3-div-checkbox-friends').attr('checked', false).parent().removeClass('on')
                        $('.page2-table2-page').pagination({
                            isHide: true,
                            totalData: $rootScope.page1InitDataLength,
                            pageCount: 1,
                            showData: 15,
                            coping: true,
                            count: 2,
                            callback: function (api) {
                                var data = {
                                    page: api.getCurrent(),
                                };
                                for (var arr1 = [], i = 0; i < $('.page17-wx-input').length; i++) {
                                    if ($('.page17-wx-input').eq(i).prop('checked')) {
                                        arr1.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
                                    }
                                }
                                if (arr1.length == 0) {
                                    $rootScope.WxList = []
                                    $rootScope.page1InitDataLength = 0;
                                    $('.page3-div-checkbox-friends').attr('checked', false).parent().removeClass('on')
                                    $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择相关设备查看对应好友');
                                    setTimeout(function () {
                                        $('.page1-alert-small-danger').hide(300)
                                    }, 2000)
                                } else {
                                    $http.get($rootScope.link + '/operate/getContact?devices=' + JSON.stringify(arr1) + '&pageNo=' + data.page + '&pageSize=15').success(function (data) {
                                        $rootScope.WxList = data.data.content;
                                        $rootScope.page1InitDataLength = data.data.totalElements;
                                        $('.page3-div-checkbox-friends').attr('checked', false).parent().removeClass('on')
                                    })
                                }
                            }
                        })
                    } else {
                        $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                        setTimeout(function () {
                            $('.page1-alert-small-danger').hide(300)
                        }, 2000)
                    }
                });
            } else {
                $rootScope.WxList = []
                $rootScope.page1InitDataLength = 0;
                $('.page3-div-checkbox-friends').attr('checked', false).parent().removeClass('on')
                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请勾选相关设备以便对其操作');
                setTimeout(function () {
                    $('.page1-alert-small-danger').hide(300)
                }, 2000)

            }
        }
        else {
            $scope.page2TableChangeName = false;
            $scope.page2TableChangeTag = false;
            $scope.sendMsgFri = false;
            $scope.ThumbsUpTurn = false;
            $scope.page2AddPeople = false;
            $scope.sendMsgFriToGroup = false;
            $('.page3-div-checkbox-Groups').attr('checked', false).parent().removeClass('on')
            $rootScope.page4getMoreData = 3
            $scope.page2Table3Group = true
            $scope.inSideBox1 = false;
            $scope.insideBox = false;
            $scope.outSideBox = false;
            $('.page2-title-button-but3').css({
                "background-color": "#2ABF9E",
                "color": "#fff"
            }).siblings().css({"background-color": "#fff", "color": "#2ABF9E"});
            for (var arr = [], i = 0; i < $('.page17-wx-input').length; i++) {
                if ($('.page17-wx-input').eq(i).prop('checked')) {
                    arr.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
                }
            }

            if (arr.length > 0) {
                $http.get($rootScope.link + '/operate/getClubByWechatNumber?devices=' + JSON.stringify(arr) + '&pageNo=1&pageSize=15').success(function (data) {
                    if (data.code == 200) {
                        $rootScope.WxList1 = data.data.content;
                        $rootScope.page1InitDataLength2 = data.data.totalElements;
                        $('.page3-div-checkbox-Groups').attr('checked', false).parent().removeClass('on')
                        $('.page2-table3-page').pagination({
                            isHide: true,
                            totalData: $rootScope.page1InitDataLength2,
                            pageCount: 1,
                            showData: 15,
                            coping: true,
                            count: 2,
                            callback: function (api) {
                                var data = {
                                    page: api.getCurrent(),
                                };
                                if (arr.length == 0) {
                                    $rootScope.WxList1 = []
                                    $rootScope.page1InitDataLength2 = 0;
                                    $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择相关设备查看对应好友');
                                    setTimeout(function () {
                                        $('.page1-alert-small-danger').hide(300)
                                    }, 2000)
                                } else {
                                    $http.get($rootScope.link + '/operate/getClubByWechatNumber?devices=' + JSON.stringify(arr) + '&pageNo=' + data.page + '&pageSize=15').success(function (data) {
                                        $rootScope.WxList1 = data.data.content;
                                        $rootScope.page1InitDataLength2 = data.data.totalElements;
                                        $('.page3-div-checkbox-Groups').attr('checked', false).parent().removeClass('on')
                                    })
                                }
                            }
                        })
                    } else {
                        $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                        setTimeout(function () {
                            $('.page1-alert-small-danger').hide(300)
                        }, 2000)
                    }
                });
            } else {
                arr = []
                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请勾选相关设备以便对其操作');
                setTimeout(function () {
                    $('.page1-alert-small-danger').hide(300)
                }, 2000)
                $rootScope.page1InitDataLength2 = 0
                $http.get($rootScope.link + '/operate/getClubByWechatNumber?devices=' + JSON.stringify(arr) + '&pageNo=1&pageSize=15').success(function (data) {
                    $rootScope.WxList1 = [];
                    $rootScope.page1InitDataLength2 = 0;
                    $('.page3-div-checkbox-Groups').attr('checked', false).parent().removeClass('on')
                    $('.page2-table3-page').pagination({
                        totalData: $rootScope.page1InitDataLength2,
                        pageCount: 1,
                        showData: 15,
                        coping: true,
                        isHide: true,
                        count: 2,
                        callback: function (api) {
                            var data = {
                                page: api.getCurrent(),
                            };
                            $http.get($rootScope.link + '/operate/getClubByWechatNumber?devices=' + JSON.stringify(arr) + '&pageNo=1&pageSize=15').success(function (data) {
                                $rootScope.WxList1 = [];
                                $rootScope.page1InitDataLength2 = 0;
                                $('.page3-div-checkbox-Groups').attr('checked', false).parent().removeClass('on')
                            })
                        }
                    })
                })

            }

        }
    }

    ///*------------------------------更改名字和标签名--------------------------------*/
    $scope.page2TableChangeName = false;
    $scope.page2TableChangeTag = false;
    $scope.newName = '';
    $scope.newTag = '';
    $scope.getEditBoxOne = function (id) {
        $scope.page2TableChangeName = true;
        $scope.editIdFriend = id;
    };

    $scope.cancelButton = function () {
        $scope.page2TableChangeName = false;
        $scope.page2TableChangeTag = false;
    };
    /*--------更改好友备注名称------*/
    $scope.SureButtonOne = function (id) {
        var number = $('.page2-table2-page').find('.active').html()
        if ($scope.newName == '') {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;备注昵称不能为空');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else {
            $http.get($rootScope.link + '/operate/updateContact?name=' + $scope.newName + '&id=' + $scope.editIdFriend).success(function (data) {
                if (data.code == 200) {
                    $('.page1-alert-small-success').show(300).find('.page1-alert-small-success-con').html('&nbsp;&nbsp;修改成功');
                    setTimeout(function () {
                        $('.page1-alert-small-success').hide(300)
                    }, 2000)
                    for (var arr1 = [], i = 0; i < $('.page17-wx-input').length; i++) {
                        if ($('.page17-wx-input').eq(i).prop('checked')) {
                            arr1.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
                        }
                    }
                    $scope.page2TableChangeName = false;
                    $scope.newName = '';
                    $http.get($rootScope.link + '/operate/getContact?devices=' + JSON.stringify(arr1) + '&pageNo=' + number + '&pageSize=15').success(function (data) {
                        if (data.code == 200) {
                            $rootScope.WxList = data.data.content;
                            $scope.page1InitDataLength = data.data.content.length;
                            $('.page3-div-checkbox-friends').attr('checked', false).parent().removeClass('on')
                            $('.page2-table1-page').pagination({
                                totalData: $scope.page1InitDataLength,
                                showData: 15,
                                pageCount: 1,
                                coping: true,
                                count: 2,
                                current: number,
                                callback: function (api) {
                                    var data = {
                                        page: api.getCurrent(),
                                    };
                                    $http.get($rootScope.link + '/operate/getContact?devices=' + JSON.stringify(arr1) + '&pageNo=' + data.page + '&pageSize=15').success(function (data) {
                                        $rootScope.WxList = data.data.content;
                                        $scope.page1InitDataLength = data.data.totalElements;
                                        $('.page3-div-checkbox-friends').attr('checked', false).parent().removeClass('on')
                                    })
                                }
                            })
                        } else {
                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                            setTimeout(function () {
                                $('.page1-alert-small-danger').hide(300)
                            }, 2000)
                        }
                    });
                } else {
                    $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                    setTimeout(function () {
                        $('.page1-alert-small-danger').hide(300)
                    }, 2000)
                }
            });
        }
    };
    $scope.getEditBoxTwo = function (id) {
        $scope.page2TableChangeTag = true;
        $scope.newTaFriendiD = id;
    };
    /*--------添加好友标签--------*/
    $scope.SureButtonTwo = function () {
        if ($scope.newTaFriend == '') {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;新增标签不能为空');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else {
            $http.get($rootScope.link + '/operate/updateContact?tag=' + $scope.newTaFriend + '&id=' + $scope.newTaFriendiD).success(function (data) {
                if (data.code == 200) {
                    var number = $('.page2-table2-page').find('.active').html()
                    $('.page1-alert-small-success').show(300).find('.page1-alert-small-success-con').html('&nbsp;&nbsp;标签添加成功');
                    setTimeout(function () {
                        $('.page1-alert-small-success').hide(300)
                    }, 2000)
                    $scope.page2TableChangeTag = false;
                    $scope.newTaFriend = '';
                    $http.get($rootScope.link + '/operate/getContact?devices=' + JSON.stringify(arr1) + '&pageNo=' + number + '&pageSize=15').success(function (data) {
                        if (data.code == 200) {
                            $rootScope.WxList = data.data.content;
                            $scope.page1InitDataLength = data.data.content.length;
                            $('.page3-div-checkbox-friends').attr('checked', false).parent().removeClass('on')
                            $('.page2-table1-page').pagination({
                                totalData: $scope.page1InitDataLength,
                                showData: 15,
                                pageCount: 1,
                                coping: true,
                                count: 2,
                                current: number,
                                callback: function (api) {
                                    var data = {
                                        page: api.getCurrent(),
                                    };
                                    $http.get($rootScope.link + '/operate/getContact?devices=' + JSON.stringify(arr1) + '&pageNo=' + data.page + '&pageSize=15').success(function (data) {
                                        $rootScope.WxList = data.data.content;
                                        $scope.page1InitDataLength = data.data.totalElements;
                                        $('.page3-div-checkbox-friends').attr('checked', false).parent().removeClass('on')
                                    })
                                }
                            })
                        } else {
                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                            setTimeout(function () {
                                $('.page1-alert-small-danger').hide(300)
                            }, 2000)
                        }
                    });
                } else {
                    $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                    setTimeout(function () {
                        $('.page1-alert-small-danger').hide(300)
                    }, 2000)
                }
            });
        }
    };
    //-----------------二级界面实时发送好友消息--------------
    $scope.sendMsgFri = false;


    $scope.NoMessageSendBox = function () {
        $scope.sendMsgFri = false;
    }
    //---------------点击发送消息按钮--------------

    $scope.maxInterval = 10
    $scope.minInterval = 1
    $scope.getMessageSendBox = function () {
        $scope.groupArrFrirnd = [];
        $scope.groupArrFrirndPhone = [];
        $scope.page2table2saySomething = '';
        for (var i = 0; i < $('.page2-table3-friend').length; i++) {
            if ($('.page2-table3-friend').eq(i).prop('checked')) {
                $scope.groupArrFrirnd.push($('.page2-table3-friend').eq(i).attr('friend_id'));
                $scope.groupArrFrirndPhone.push($('.page2-table3-friend').eq(i).attr('friend_Phone'));
            }
        }
        if ($scope.groupArrFrirnd.length == 0) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择并勾选需要发送的好友');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else {
            $scope.sendMsgFri = true;
        }
    };
    //---------------------------------------确认发送消息按钮---------------------------------
    $rootScope.upMsg = 0

    $scope.sureMessageSendBox = function () {
        $scope.groupArrFrirndPhone = [];
        $scope.groupArrcnmmp = [];
        for (var i = 0; i < $('.page2-table3-friend').length; i++) {
            if ($('.page2-table3-friend').eq(i).prop('checked')) {
                $scope.groupArrFrirndPhone.push($('.page2-table3-friend').eq(i).attr('friend_Phone'));
            }
        }
        for (var i = 0; i < $('.page17-wx-input').length; i++) {
            if ($('.page17-wx-input').eq(i).prop('checked')) {
                $scope.groupArrcnmmp.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
            }
        }
        if ($scope.page2table2saySomething == '') {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请填写需要发送的内容');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else if ($scope.groupArrFrirndPhone.length == 0) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择并勾选需要发送消息的好友');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else {
            if ($scope.groupArrFrirnd.length > 200) {
                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;由于微信策略限制每天最多群发好友上限800人，每次群发上限200人');
                setTimeout(function () {
                    $('.page1-alert-small-danger').hide(300)
                }, 2000)
            }
            $scope.sendMsgFri = false;
            $scope.sendObj1 = new FormData();
            $scope.messageSendBox = false;
            $scope.sendObj1.append('devices', JSON.stringify($scope.groupArrcnmmp));
            $scope.sendObj1.append('device', JSON.stringify($scope.groupArrFrirndPhone));
            $scope.sendObj1.append('friendsIdList', JSON.stringify($scope.groupArrFrirnd));
            $scope.sendObj1.append('msg', $scope.page2table2saySomething);
            $scope.sendObj1.append('maxInterval', $scope.maxInterval);
            $scope.sendObj1.append('minInterval', $scope.minInterval);
            $http({
                method: 'POST',
                url: $rootScope.link + "/operate/sendMsgByPro",
                data: $scope.sendObj1,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (response) {
                //上传成功的操作
                if (response.code == 200) {
                    $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;群发消息任务添加成功');
                    setTimeout(function () {
                        $('.page1-alert-waring').hide(300)
                    }, 2000)
                    $scope.messageSendBox = false;
                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
                        if (data.code == 200) {
                            $rootScope.taskList = data.data;
                            $rootScope.taskAll = true;
                            $rootScope.taskDoing = false;
                            $rootScope.taskWait = false;
                            $rootScope.taskDown = false;
                            $rootScope.newBell = true;
                        } else {

                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                            setTimeout(function () {
                                $('.page1-alert-small-danger').hide(300)
                            }, 2000)
                        }
                    });
                } else {
                    $scope.page2Tabledevicss = []
                    $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;送消息任务添加失败，请重试并检查设备连接');
                    setTimeout(function () {
                        $('.page1-alert-danger').hide(300)
                    }, 2000)
                }
            });
        }

    };
    //----------------------给固定好友朋友圈点赞-----------------
    $scope.ThumbsUpNums = 1
    $scope.ThumbsUp = function () {
        $scope.groupArrFrirnd1 = [];
        $scope.groupArrFrirndPhone1 = [];
        for (var i = 0; i < $('.page2-table3-friend').length; i++) {
            if ($('.page2-table3-friend').eq(i).prop('checked')) {
                $scope.groupArrFrirnd1.push($('.page2-table3-friend').eq(i).attr('friend_id'));
                $scope.groupArrFrirndPhone1.push($('.page2-table3-friend').eq(i).attr('friend_Phone'));
            }
        }
        if ($scope.groupArrFrirndPhone1.length == 0) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择并勾选需要点赞的好友');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else {
            $scope.ThumbsUpTurn = true;

        }
    }
    $scope.NoThumbsUpTurn = function () {
        $scope.ThumbsUpTurn = false;
        $scope.ThumbsUpNums = 1
    }
    $scope.lastFound = function () {
        if ($scope.ThumbsUpNums == undefined) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;点赞数量范围为"1-30"请再次输入');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
            $scope.ThumbsUpNums = 1;
        }
    }
    $scope.sureThumbsUpTurn = function () {
        $scope.sendObj2 = new FormData();
        $scope.sendObj2.append('devices', JSON.stringify($scope.groupArrFrirndPhone1));
        $scope.sendObj2.append('likeCount', $scope.ThumbsUpNums);
        $scope.sendObj2.append('friendsIdList', JSON.stringify($scope.groupArrFrirnd1));
        $http({
            method: 'POST',
            url: $rootScope.link + "/operate/praiseForFriends",
            data: $scope.sendObj2,
            headers: {'Content-Type': undefined},
            transformRequest: angular.identity
        }).success(function (response) {
            //上传成功的操作
            if (response.code == 200) {
                $scope.page2Tabledevicss = []
                $scope.ThumbsUpTurn = false;
                $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;朋友圈点赞任务添加成功');
                setTimeout(function () {
                    $('.page1-alert-waring').hide(300)
                }, 2000)
                $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
                    if (data.code == 200) {
                        $rootScope.taskList = data.data;
                        $rootScope.taskAll = true;
                        $rootScope.taskDoing = false;
                        $rootScope.taskWait = false;
                        $rootScope.taskDown = false;
                        $rootScope.newBell = true;
                    } else {
                        $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                        setTimeout(function () {
                            $('.page1-alert-small-danger').hide(300)
                        }, 2000)
                    }
                });
            } else {
                $scope.page2Tabledevicss = []
                $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;朋友圈点赞任务添加失败');
                setTimeout(function () {
                    $('.page1-alert-danger').hide(300)
                }, 2000)
            }
        });
    };

    $rootScope.reloads = false;
    $rootScope.reloads1 = false;
    var tt1 = setInterval(function () {
        if ($rootScope.reloads == false) {

        } else {
            for (var arr = [], i = 0; i < $('.page17-wx-input').length; i++) {
                if ($('.page17-wx-input').eq(i).prop('checked')) {
                    arr.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
                }
            }
            if (arr.length > 0) {
                $http.get($rootScope.link + '/operate/getContact?devices=' + JSON.stringify(arr) + '&pageNo=1&pageSize=15').success(function (data) {
                    if (data.code == 200) {
                        $rootScope.WxList = data.data.content;
                        $rootScope.page1InitDataLength = data.data.totalElements;
                        $('.page3-div-checkbox-friends').attr('checked', false).parent().removeClass('on')
                        $('.page2-table2-page').pagination({
                            isHide: true,
                            totalData: $rootScope.page1InitDataLength,
                            pageCount: 1,
                            showData: 15,
                            coping: true,
                            count: 2,
                            callback: function (api) {
                                var data = {
                                    page: api.getCurrent(),
                                };
                                for (var arr1 = [], i = 0; i < $('.page17-wx-input').length; i++) {
                                    if ($('.page17-wx-input').eq(i).prop('checked')) {
                                        arr1.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
                                    }
                                }
                                if (arr1.length == 0) {
                                    $rootScope.WxList = []
                                    $rootScope.page1InitDataLength = 0;
                                    $('.page3-div-checkbox-friends').attr('checked', false).parent().removeClass('on')
                                    $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择相关设备查看对应好友');
                                    setTimeout(function () {
                                        $('.page1-alert-small-danger').hide(300)
                                    }, 2000)
                                } else {
                                    $http.get($rootScope.link + '/operate/getContact?devices=' + JSON.stringify(arr1) + '&pageNo=' + data.page + '&pageSize=15').success(function (data) {
                                        $rootScope.WxList = data.data.content;
                                        $rootScope.page1InitDataLength = data.data.totalElements;
                                        $('.page3-div-checkbox-friends').attr('checked', false).parent().removeClass('on')
                                    })
                                }
                            }
                        })
                        $rootScope.reloads = false
                    } else {
                        $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                        setTimeout(function () {
                            $('.page1-alert-small-danger').hide(300)
                        }, 2000)
                    }
                });
            } else {
                $rootScope.WxList = []
                $rootScope.page1InitDataLength = 0;
                $('.page3-div-checkbox-friends').attr('checked', false).parent().removeClass('on')
                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请勾选相关设备以便对其操作');
                setTimeout(function () {
                    $('.page1-alert-small-danger').hide(300)
                }, 2000)
                $rootScope.reloads = false
            }
        }
    }, 1000)
    var tt3 = setInterval(function () {
        if ($rootScope.reloads1 == false) {

        } else {
            for (var arr = [], i = 0; i < $('.page17-wx-input').length; i++) {
                if ($('.page17-wx-input').eq(i).prop('checked')) {
                    arr.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
                }
            }

            if (arr.length > 0) {
                $http.get($rootScope.link + '/operate/getClubByWechatNumber?devices=' + JSON.stringify(arr) + '&pageNo=1&pageSize=15').success(function (data) {
                    if (data.code == 200) {
                        $rootScope.WxList1 = data.data.content;
                        $rootScope.page1InitDataLength2 = data.data.totalElements;
                        $('.page3-div-checkbox-Groups').attr('checked', false).parent().removeClass('on')
                        $('.page2-table3-page').pagination({
                            isHide: true,
                            totalData: $rootScope.page1InitDataLength2,
                            pageCount: 1,
                            showData: 15,
                            coping: true,
                            count: 2,
                            callback: function (api) {
                                var data = {
                                    page: api.getCurrent(),
                                };
                                if (arr.length == 0) {
                                    $rootScope.WxList1 = []
                                    $rootScope.page1InitDataLength2 = 0;
                                    $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择相关设备查看对应好友');
                                    setTimeout(function () {
                                        $('.page1-alert-small-danger').hide(300)
                                    }, 2000)
                                } else {
                                    $http.get($rootScope.link + '/operate/getClubByWechatNumber?devices=' + JSON.stringify(arr) + '&pageNo=' + data.page + '&pageSize=15').success(function (data) {
                                        $rootScope.WxList1 = data.data.content;
                                        $rootScope.page1InitDataLength2 = data.data.totalElements;
                                        $('.page3-div-checkbox-Groups').attr('checked', false).parent().removeClass('on')
                                    })
                                }
                            }
                        })
                        $rootScope.reloads1 = false
                    } else {
                        $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                        setTimeout(function () {
                            $('.page1-alert-small-danger').hide(300)
                        }, 2000)
                    }
                });
            } else {
                arr = []
                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请勾选相关设备以便对其操作');
                setTimeout(function () {
                    $('.page1-alert-small-danger').hide(300)
                }, 2000)
                $rootScope.page1InitDataLength2 = 0
                $http.get($rootScope.link + '/operate/getClubByWechatNumber?devices=' + JSON.stringify(arr) + '&pageNo=1&pageSize=15').success(function (data) {
                    $rootScope.WxList1 = [];
                    $rootScope.page1InitDataLength2 = 0;
                    $('.page3-div-checkbox-Groups').attr('checked', false).parent().removeClass('on')
                    $('.page2-table3-page').pagination({
                        totalData: $rootScope.page1InitDataLength2,
                        pageCount: 1,
                        showData: 15,
                        coping: true,
                        isHide: true,
                        count: 2,
                        callback: function (api) {
                            var data = {
                                page: api.getCurrent(),
                            };
                            $http.get($rootScope.link + '/operate/getClubByWechatNumber?devices=' + JSON.stringify(arr) + '&pageNo=1&pageSize=15').success(function (data) {
                                $rootScope.WxList1 = [];
                                $rootScope.page1InitDataLength2 = 0;
                                $('.page3-div-checkbox-Groups').attr('checked', false).parent().removeClass('on')
                            })
                        }
                    })
                })
                $rootScope.reloads1 = false
            }
        }
    }, 1000)
    /*-----------------------------------更新好友列表-------------------------------------------------*/
    $scope.getNew = function () {
        for (var arr = [], i = 0; i < $('.page17-wx-input').length; i++) {
            if ($('.page17-wx-input').eq(i).prop('checked')) {
                arr.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
            }
        }
        if (arr.length == 0) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择需要进行更新好友列表操作的设备');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else {

            var sendObj1 = new FormData()
            sendObj1.append('wechatId', JSON.stringify(arr));
            $http.get($rootScope.link + '/wechat/getSomeFriendList?wechatId=' + JSON.stringify(arr) + '').success(function (response) {
                //上传成功的操作
                if (response.code == 200) {
                    $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;更新好友列表任务添加成功');
                    setTimeout(function () {
                        $('.page1-alert-waring').hide(300)
                    }, 2000)
                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
                        if (data.code == 200) {
                            $rootScope.taskList = data.data;
                            $rootScope.taskAll = true;
                            $rootScope.taskDoing = false;
                            $rootScope.taskWait = false;
                            $rootScope.taskDown = false;
                            $rootScope.newBell = true;
                        } else {
                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                            setTimeout(function () {
                                $('.page1-alert-small-danger').hide(300)
                            }, 2000)
                        }
                    });
                    $scope.reloads = true;
                } else {
                    $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;更新好友列表任务添加失败');
                    setTimeout(function () {
                        $('.page1-alert-danger').hide(300)
                    }, 2000)
                }
            });
        }

    };
    /*-------------------------------------------好友管理完结---------------------------------------------------------*/
    /*--------------刷新群列表---------*/
    $scope.getInsideBoxInGroup = function () {
        for (var arr = [], i = 0; i < $('.page17-wx-input').length; i++) {
            if ($('.page17-wx-input').eq(i).prop('checked')) {
                arr.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
            }
        }
        if (arr.length == 0) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择并勾选需要进行群发消息的设备');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else {
            $http.get($rootScope.link + '/wechat/getSomeGroupList?wechatId=' + JSON.stringify(arr)).success(function (data) {
                if (data.code == 200) {
                    $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;更新群列表任务添加成功');
                    setTimeout(function () {
                        $('.page1-alert-waring').hide(300)
                    }, 2000)
                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
                        if (data.code == 200) {
                            $rootScope.taskList = data.data;
                            $rootScope.taskAll = true;
                            $rootScope.taskDoing = false;
                            $rootScope.taskWait = false;
                            $rootScope.taskDown = false;
                            $rootScope.newBell = true;
                        }
                    });
                } else {
                    $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;更新群列表任务添加失败');
                    setTimeout(function () {
                        $('.page1-alert-danger').hide(300)
                    }, 2000)
                }
            });
        }

    };
    /*-------------点击发群消息------------*/
    $scope.sendMsgFriToGroup = false;
    $scope.getMessageSendBoxGroup = function () {
        $scope.groupArr1 = [];
        $scope.clubNames = [];
        $scope.saySomething = '';
        for (var i = 0; i < $('.page2-table3-group').length; i++) {
            if ($('.page2-table3-group').eq(i).find('input').prop('checked')) {
                $scope.groupArr1.push($('.page2-table3-group').eq(i).attr('group_id'));
                //------------------长度为十问题解决方案-----------------
                // $scope.clubNames.push($('.page12-div-checkbox').eq(i).attr('club_name').substring(0,10) );
                $scope.clubNames.push($('.page2-table3-group').eq(i).attr('club_name'));
            }
        }
        if ($scope.groupArr1.length == 0) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择并勾选需要发送的群名称');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else {
            $scope.sendMsgFriToGroup = true;
        }
    };
    /*-------------关闭群发消息-------------*/
    $scope.sureMessageSendBoxGroup = function () {
        $scope.sendMsgFriToGroup = false;
        $scope.saySomethingahsdhas = ''
    };
    $scope.maxTime = 5;
    $scope.minTime = 1;
    /*-------------确认群发消息------------------*/
    $scope.cancelMessageSendBox = function () {
        for (var arr = [], arr1 = [], i = 0; i < $('.page3-div-checkbox-Groups-one').length; i++) {
            if ($('.page3-div-checkbox-Groups-one').eq(i).prop('checked')) {
                arr.push($('.page3-div-checkbox-Groups-one').eq(i).attr('data'));
                arr1.push($('.page3-div-checkbox-Groups-one').eq(i).attr('data2'));
            }
        }
        for (var arr3 = [], i = 0; i < $('.page17-wx-input').length; i++) {
            if ($('.page17-wx-input').eq(i).prop('checked')) {
                arr3.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
            }
        }
        $scope.sendObj1 = new FormData();
        if ($scope.saySomethingahsdhas == '') {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;群发的消息不能为空');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else {
            $scope.sendObj1.append('devices', JSON.stringify(arr3));
            $scope.sendObj1.append('device', JSON.stringify(arr));
            $scope.sendObj1.append('groupIdList', JSON.stringify(arr1));
            $scope.sendObj1.append('msg', $scope.saySomethingahsdhas);
            $scope.sendObj1.append('maxInterval', $scope.maxTime);
            $scope.sendObj1.append('minInterval', $scope.minTime);
            $http({
                method: 'POST',
                url: $rootScope.link + "/operate/sendClubMsgNew",
                data: $scope.sendObj1,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (response) {
                //上传成功的操作
                if (response.code == 200) {
                    $scope.saySomethingahsdhas = ''
                    $scope.sendMsgFriToGroup = false;
                    $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;群聊群发消息任务添加成功');
                    setTimeout(function () {
                        $('.page1-alert-waring').hide(300)
                    }, 2000)
                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
                        if (data.code == 200) {
                            $rootScope.taskList = data.data;
                            $rootScope.taskAll = true;
                            $rootScope.taskDoing = false;
                            $rootScope.taskWait = false;
                            $rootScope.taskDown = false;
                            $rootScope.newBell = true;
                        } else {
                        }
                    });
                } else {
                    $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;群聊群发消息任务添加失败');
                    setTimeout(function () {
                        $('.page1-alert-danger').hide(300)
                    }, 2000)
                }
            });
        }

    };

    var emjoyAllGet = [
        '[微笑]', '[撇嘴]', '[色]', '[发呆]', '[得意]', '[流泪]', '[害羞]', '[闭嘴]', '[睡]', '[大哭]',
        '[尴尬]', '[发怒]', '[调皮]', '[呲牙]', '[惊讶]', '[难过]', '[酷]', '[冷汗]', '[抓狂]', '[吐]',
        '[偷笑]', '[愉快]', '[白眼]', '[傲慢]', '[饥饿]', '[困]', '[惊恐]', '[流汗]', '[憨笑]', '[悠闲]',
        '[奋斗]', '[咒骂]', '[疑问]', '[嘘]', '[晕]', '[疯了]', '[衰]', '[骷髅]', '[敲打]', '[再见]', '[]',
        '[抠鼻]', '[鼓掌]', '[糗大了]', '[]', '[左哼哼]', '[右哼哼]', '[哈欠]', '[鄙视]', '[委屈]', '[快哭了]', '[阴险]',
        '[亲亲]', '[]', '[可怜]', '[菜刀]', '[啤酒]', '[咖啡]', '[饭]', '[猪头]', '[玫瑰]', '[凋谢]', '[嘴唇]',
        '[爱心]', '[心碎]', '[蛋糕]', '[闪电]', '[炸弹]', '[刀]', '[足球]', '[瓢虫]', '[便便]', '[拥抱]',
        '[强]', '[弱]', '[握手]', '[胜利]', '[抱拳]', '[勾引]', '[拳头]', '[差劲]', '[爱你]', '[NO]',
        '[OK]', '[跳跳]', '[发抖]', '[怄火]', '[磕头]', '[激动]', '[献吻]'
    ]
    /*----------------------确认群组加人------------------------------*/
    $scope.page2AddPeople = false
    $scope.getNewFriendInGroup = function () {
        for (var arr = [], i = 0; i < $('.page17-wx-input').length; i++) {
            if ($('.page17-wx-input').eq(i).prop('checked')) {
                arr.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
            }
        }
        for (var arr1 = [], i = 0; i < $('.page3-div-checkbox-Groups').length; i++) {
            if ($('.page3-div-checkbox-Groups').eq(i).prop('checked')) {
                arr1.push($('.page3-div-checkbox-Groups').eq(i));
            }
        }
        if (arr1.length > 0) {
            $scope.page2AddPeople = true
        } else {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择并勾选需要进行加好友操作的群组');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        }

    };
    $scope.NoaddPeople = function () {
        $scope.page2AddPeople = false
    }
    $scope.page2GroupAddNum = 1
    $scope.page2GroupTiM1 = 1
    $scope.page2GroupTiM2 = 10
    $scope.sureaddPeople = function () {
        var page2table3saying = $(".page12-emjoy12").html();
        for (var arr = [], i = 0; i < $('.page3-div-checkbox-Groups-one').length; i++) {
            if ($('.page3-div-checkbox-Groups-one').eq(i).prop('checked')) {
                arr.push($('.page3-div-checkbox-Groups-one').attr('data1'));
            }
        }
        $scope.sendObj1 = new FormData();
        if (page2table3saying == '') {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请输入相关话术用语');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else {
            var reger = /<img.*?(?:>|\/>)/g;
            var srcReg = /\/([^\/]*?\.gif)/i;
            var arr1 = page2table3saying.match(reger)
            if (arr1 == null) {
            } else {
                var tt = []
                for (var i = 0; i < arr1.length; i++) {
                    var src = arr1[i].match(srcReg);
                    // var src = srcReg.exec(arr1[i])
                    if (src[1]) {
                        tt.push(src[1].substring(0, src[1].indexOf('.')))
                    }
                    for (var tt1 = [], i1 = 0; i1 < tt.length; i1++) {
                        for (var i2 = 0; i2 < emjoyAllGet.length; i2++) {
                            if (tt[i1] == i2) {
                                tt1.push(emjoyAllGet[i2 - 1])
                            }
                        }
                    }
                }
                var result = page2table3saying.match(/<img.*?(?:>|\/>)/g);
                for (var i = 0; i < result.length; i++) {
                    page2table3saying = page2table3saying.replace(result[i], tt1[i])
                }
            }
            var oooo = page2table3saying.replace(/<\/div>/g, "");
            var oooo1 = oooo.replace(/<br>/g, "");
            var oooo2 = oooo1.replace(/<div>/g, "<br>");

            $scope.sendObj1.append('wechatId', $scope.WxMemberId);
            $scope.sendObj1.append('clubNames', JSON.stringify($scope.clubNames));
            $scope.sendObj1.append('msg', $scope.saySomething);
            $scope.sendObj1.append('maxInterval', $scope.page2GroupTiM1);
            $scope.sendObj1.append('minInterval', $scope.page2GroupTiM2);
            $http({
                method: 'POST',
                url: $rootScope.link + "/operate/sendClubMsg",
                data: $scope.sendObj1,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (response) {
                //上传成功的操作
                if (response.code == 200) {
                    $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;入群加好友任务添加成功');
                    setTimeout(function () {
                        $('.page1-alert-waring').hide(300)
                    }, 2000)
                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
                        if (data.code == 200) {
                            $rootScope.taskList = data.data;
                            $rootScope.taskAll = true;
                            $rootScope.taskDoing = false;
                            $rootScope.taskWait = false;
                            $rootScope.taskDown = false;
                            $rootScope.newBell = true;
                        } else {
                            $('.page1-alert-small-success').show(300).find('.page1-alert-small-success-con').html('&nbsp;&nbsp;分组名称修改成功');
                            setTimeout(function () {
                                $('.page1-alert-small-success').hide(300)
                            }, 2000)
                        }
                    });
                } else {
                    $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;入群加好友任务添加失败');
                    setTimeout(function () {
                        $('.page1-alert-danger').hide(300)
                    }, 2000)
                }
            });
        }

    }
    $("#btn").click(function () {
        $('.emoji_container').html('').css({'border': 'none', 'background-color': 'transparent', 'box-shadow': 'none'})
        $("#editor").emoji({
            button: "#btn",
            showTab: false,
            animation: 'none',
            icons: [{
                name: "QQ表情",
                path: "images/qq/",
                maxNum: 91,
                excludeNums: [41, 45, 54],
                file: ".gif",
            }]
        });
    });

}]);

app.controller('page36C', ["$rootScope", "$scope", "$http", "$timeout", function ($rootScope, $scope, $http, $timeout) {
    $rootScope.getAllFalse();
    $rootScope.initOver = true;
    $rootScope.activeThirtySix = true;
    $rootScope.navPartThree = true;
    $rootScope.isScreenPage = false;
    $scope.outSideBox = true;
    $scope.uptel = false
    $scope.outSideBox1 = false;
    $scope.outSideBox3 = false;
    $scope.outSideBox2 = false;
    $scope.outSideBox4 = false;
    $scope.outSideBox5 = false;
    $scope.upTextShow = false;
    $scope.fvcMe = function (e) {
        $('.list_dd').stop();
        $(".list_dt").eq(e).parent().siblings("new-wx-group-list-li").removeAttr("id");
        if ($(".list_dt").eq(e).parent().attr("id") == "open") {
            $(".list_dt").eq(e).parent().removeAttr("id").find('i').css('background', ' url("images/offChecked.png")center no-repeat')
        } else {
            $(".list_dt").eq(e).parent().attr("id", "open").find('i').css('background', ' url("images/openChecked.png")center no-repeat')
        }
    }
    $(".page2-emjoy1").html('');
    $(".page3-emjoy1").html('');
    $(".page3-emjoy2").html('');
    $(".page3-emjoy3").html('');
    $(".page3-emjoy5").html('');
    $(".page2-emjoy1").on("paste", function (e) {
        textInit(e)
    });
    $(".page3-emjoy1").on("paste", function (e) {
        textInit(e)
    });
    $(".page3-emjoy2").on("paste", function (e) {
        textInit(e)
    });
    $(".page3-emjoy3").on("paste", function (e) {
        textInit(e)
    });
    $(".page3-emjoy5").on("paste", function (e) {
        textInit(e)
    });
    /*------------获取在线设备------------*/
    $http.get($rootScope.link + '/group/getGroupDataByStatus').success(function (data) {
        if (data.code == 200) {
            $scope.hhalk = []
            for (var a = 0; a < data.data.length; a++) {
                if (data.data[a].deviceVos.length == 0) {
                } else {
                    for (var i = 0; i < data.data[a].deviceVos.length; i++) {
                        $scope.hhalk.push(data.data[a].deviceVos[i].device)
                    }
                }

            }
            $scope.hhalk1 = $scope.hhalk.length
        } else {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        }
    });
    $scope.logout = function () {
        $http.get($rootScope.link + '/logout').success(function (data) {
            if (data.code == 200) {
                window.location.href = 'http://' + window.location.host + '/wgcs/#/login'
            } else {
                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;注销登录失败');
                setTimeout(function () {
                    $('.page1-alert-small-danger').hide(300)
                }, 2000)
            }
        })
    }

    function textInit(e) {
        e.preventDefault();
        var text;
        var clp = (e.originalEvent || e).clipboardData;
        if (clp === undefined || clp === null) {
            text = window.clipboardData.getData("text") || "";
            if (text !== "") {
                if (window.getSelection) {
                    var newNode = document.createElement("span");
                    newNode.innerHTML = text;
                    window.getSelection().getRangeAt(0).insertNode(newNode);
                } else {
                    document.selection.createRange().pasteHTML(text);
                }
            }
        } else {
            text = clp.getData('text/plain') || "";
            if (text !== "") {
                document.execCommand('insertText', false, text);
            }
        }
    }

    $("#btn1").click(function () {
        $('.emoji_container').html('').css({'border': 'none', 'background-color': 'transparent', 'box-shadow': 'none'})
        $("#editor1").emoji({
            button: "#btn1",
            showTab: false,
            animation: 'none',
            icons: [{
                name: "QQ表情",
                path: "images/qq/",
                maxNum: 91,
                excludeNums: [41, 45, 54],
                file: ".gif",
            }]
        });
    });
    $("#btn2").click(function () {
        $('.emoji_container').html('').css({'border': 'none', 'background-color': 'transparent', 'box-shadow': 'none'})
        $("#editor2").emoji({
            button: "#btn2",
            showTab: false,
            animation: 'none',
            icons: [{
                name: "QQ表情",
                path: "images/qq/",
                maxNum: 91,
                excludeNums: [41, 45, 54],
                file: ".gif",
            }]
        });
    });
    $("#btn3").click(function () {
        $('.emoji_container').html('').css({'border': 'none', 'background-color': 'transparent', 'box-shadow': 'none'})
        $("#editor3").emoji({
            button: "#btn3",
            showTab: false,
            animation: 'none',
            icons: [{
                name: "QQ表情",
                path: "images/qq/",
                maxNum: 91,
                excludeNums: [41, 45, 54],
                file: ".gif",
            }]
        });
    });
    $("#btn4").click(function () {
        $('.emoji_container').html('').css({'border': 'none', 'background-color': 'transparent', 'box-shadow': 'none'})
        $("#editor4").emoji({
            button: "#btn4",
            showTab: false,
            animation: 'none',
            icons: [{
                name: "QQ表情",
                path: "images/qq/",
                maxNum: 91,
                excludeNums: [41, 45, 54],
                file: ".gif",
            }]
        });
    });
    $("#btn5").click(function () {
        $('.emoji_container').html('').css({'border': 'none', 'background-color': 'transparent', 'box-shadow': 'none'})
        $("#editor5").emoji({
            button: "#btn5",
            showTab: false,
            animation: 'none',
            icons: [{
                name: "QQ表情",
                path: "images/qq/",
                maxNum: 91,
                excludeNums: [41, 45, 54],
                file: ".gif",
            }]
        });
    });
    /*-------------------------------table切换--------------------------------------------------*/
    $scope.tableSwitch = function (e) {
        if (e == 1) {
            $rootScope.page5getMoreData = 1
            $('.page3-table1-click-table2-Table3-checked').addClass('on');
            $('.page3-table1-click-table2-Table3-Nochecked').removeClass('on');
            $scope.outSideBox1 = false;
            $scope.outSideBox3 = false;
            $scope.outSideBox2 = false;
            $scope.outSideBox4 = false;
            $scope.page2Table3Group = false
            $scope.inSideBox1 = false;
            $scope.insideBox = false;
            $scope.outSideBox = true;
            $scope.uptel = false;
            $scope.outSideBox1 = false;
            $scope.outSideBox5 = false;
            $('.page2-title-button-but1').css({
                "background-color": "#2ABF9E",
                "color": "#fff"
            }).siblings().css({"background-color": "#fff", "color": "#2ABF9E"});
        } else if (e == 2) {
            $rootScope.page5getMoreData = 2
            $('.page3-table1-click-table2-Table3-checked').addClass('on');
            $('.page3-table1-click-table2-Table3-Nochecked').removeClass('on');
            $scope.outSideBox3 = false;
            $scope.outSideBox2 = false;
            $scope.outSideBox4 = false;
            $scope.page2Table3Group = false
            $scope.inSideBox1 = true;
            $scope.insideBox = false;
            $scope.outSideBox = false;
            $scope.uptel = false;
            $scope.outSideBox1 = true;
            $scope.outSideBox5 = false;
            $('.page2-title-button-but2').css({
                "background-color": "#2ABF9E",
                "color": "#fff"
            }).siblings().css({"background-color": "#fff", "color": "#2ABF9E"});
            /*----------------------获取好友相关数据----------------------------------------*/
            $scope.getInsideBox = function (id, num, devices) {
                $scope.MemberId = id;
                $scope.newDevices = devices;
                $scope.MemberNumber = num;
                $http.get($rootScope.link + '/operate/getContact?wechatId=' + id + '&pageNo=1&pageSize=15').success(function (data) {
                    if (data.code == 200) {
                        $scope.outSideBox = false;
                        $scope.inSideBox = true;
                        $scope.WxList = data.data.content;
                        $scope.assPage = 1;
                        $scope.page1InitDataLength = data.data.currentPageElements;
                        $('.page2-table1-page').pagination({
                            totalData: $scope.page1InitDataLength,
                            showData: 15,
                            coping: true,
                            count: 2,
                            callback: function (api) {
                                var data = {
                                    page: api.getCurrent(),
                                };
                                // $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify($rootScope.moArray) + '&pageNo=' + data.page + '&pageSize=15').success(function (data) {
                                //     $scope.page1InitDataLength = data.data.currentPageElements
                                // })
                            }
                        })
                    } else {


                        $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                        setTimeout(function () {
                            $('.page1-alert-small-danger').hide(300)
                        }, 2000)
                    }
                });
            };
        } else if (e == 3) {
            $rootScope.page5getMoreData = 3
            $('.page3-table1-click-table2-Table3-checked').addClass('on');
            $('.page3-table1-click-table2-Table3-Nochecked').removeClass('on');
            $('.page2-title-button-but3').css({
                "background-color": "#2ABF9E",
                "color": "#fff"
            }).siblings().css({"background-color": "#fff", "color": "#2ABF9E"});
            /*----------未配置-------*/
            $scope.outSideBox1 = false;
            $scope.inSideBox1 = false;
            $scope.insideBox = false;
            $scope.outSideBox = false;
            $scope.uptel = false;
            $scope.outSideBox5 = false;


            $scope.outSideBox1 = false;
            $scope.outSideBox3 = true;
            $scope.outSideBox2 = true;
            $scope.outSideBox4 = false;
        } else {
            $rootScope.page5getMoreData = 10;
            $('.page3-table1-click-table2-Table3-checked').addClass('on');
            $('.page3-table1-click-table2-Table3-Nochecked').removeClass('on');
            $('.page2-title-button-but4').css({
                "background-color": "#2ABF9E",
                "color": "#fff"
            }).siblings().css({"background-color": "#fff", "color": "#2ABF9E"});
            $scope.uptel = false;
            $scope.outSideBox1 = false;
            $scope.outSideBox3 = false;
            $scope.outSideBox2 = false;
            $scope.outSideBox4 = false;
            $scope.outSideBox5 = true;
            $scope.outSideBox = false;
        }
    }

    /*--------------点击进入导入通讯录界面----------------*/
    $scope.page3UpTelephone = function () {
        $scope.outSideBox = false;
        $scope.uptel = true;
    }
    /*--------------点击返回通讯录加人界面----------------*/
    $scope.resetBackAddTel = function () {
        $scope.outSideBox = true;
        $scope.uptel = false;
    }
    $scope.addPeopleCount = 15;
    $scope.maxTime = 10;
    $scope.minTime = 1;
    var selectVal = 1
    $('.upText').hide()
    /*-----------选择话术用语方式---------------------*/
    $('.clickSelect').change(function () {
        selectVal = $(this).val();
        if (selectVal == 1) {
            $('.page3-Addpeople-Say').show();
            $('.page2-emjoy1').html('');
            $('.clickAddTextno').hide()
            $('.upText').hide()
            $scope.upFile = ''
            $('.upfiler').val('')
            $('.exselTextGray').html('0kb')
            $('.exselTextGra').html('无文件')
        } else {
            $('.page3-Addpeople-Say').hide();
            $('.clickAddTextno').show();
            $('.page2-emjoy1').html('');
        }
    })
    $scope.deleteContent = function () {

        $scope.upFile = ''
        $('.upfiler').val('')
        $('.exselTextGray').html('0kb')
        $('.exselTextGra').html('无文件')
    }
    /*--------------------点击执行通讯录加人---------------------*/
    var emjoyAllGet = [
        '[微笑]', '[撇嘴]', '[色]', '[发呆]', '[得意]', '[流泪]', '[害羞]', '[闭嘴]', '[睡]', '[大哭]',
        '[尴尬]', '[发怒]', '[调皮]', '[呲牙]', '[惊讶]', '[难过]', '[酷]', '[冷汗]', '[抓狂]', '[吐]',
        '[偷笑]', '[愉快]', '[白眼]', '[傲慢]', '[饥饿]', '[困]', '[惊恐]', '[流汗]', '[憨笑]', '[悠闲]',
        '[奋斗]', '[咒骂]', '[疑问]', '[嘘]', '[晕]', '[疯了]', '[衰]', '[骷髅]', '[敲打]', '[再见]','[]',
        '[抠鼻]', '[鼓掌]', '[糗大了]','[]', '[左哼哼]', '[右哼哼]', '[哈欠]', '[鄙视]', '[委屈]', '[快哭了]', '[阴险]',
        '[亲亲]', '[]','[可怜]', '[菜刀]', '[啤酒]', '[咖啡]', '[饭]', '[猪头]', '[玫瑰]', '[凋谢]', '[嘴唇]',
        '[爱心]', '[心碎]', '[蛋糕]', '[闪电]', '[炸弹]', '[刀]', '[足球]', '[瓢虫]', '[便便]', '[拥抱]',
        '[强]', '[弱]', '[握手]', '[胜利]', '[抱拳]', '[勾引]', '[拳头]', '[差劲]', '[爱你]', '[NO]',
        '[OK]', '[跳跳]', '[发抖]', '[怄火]', '[磕头]', '[激动]', '[献吻]'
    ]
    $scope.page3TableSendAll1 = function () {
        var page2table3saying = $(".page2-emjoy1").html();
        for (var i = 0, arr = []; i < $('.page17-wx-input').length; i++) {
            if ($('.page17-wx-input').eq(i).prop('checked')) {
                arr.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
            }
        }
        if (arr.length == 0) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择并勾选需要操作的设备');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else {
            var reger = /<img.*?(?:>|\/>)/g;
            var srcReg = /\/([^\/]*?\.gif)/i;
            var arr1 = page2table3saying.match(reger)
            if (arr1 == null) {
            } else {
                var tt = []
                for (var i = 0; i < arr1.length; i++) {
                    var src = arr1[i].match(srcReg);
                    // var src = srcReg.exec(arr1[i])
                    if (src[1]) {
                        tt.push(src[1].substring(0, src[1].indexOf('.')))
                    }
                    for (var tt1 = [], i1 = 0; i1 < tt.length; i1++) {
                        for (var i2 = 0; i2 < emjoyAllGet.length; i2++) {
                            if (tt[i1] == i2) {
                                tt1.push(emjoyAllGet[i2 - 1])
                            }
                        }
                    }
                }
                var result = page2table3saying.match(/<img.*?(?:>|\/>)/g);
                for (var i = 0; i < result.length; i++) {
                    page2table3saying = page2table3saying.replace(result[i], tt1[i])
                }
            }
            var oooo = page2table3saying.replace(/<\/div>/g, "");
            var oooo1 = oooo.replace(/<br>/g, "");
            var oooo2 = oooo1.replace(/<div>/g, "<br>");
            var sendObj = new FormData();
            sendObj.append('devices', JSON.stringify(arr));
            sendObj.append('maxInterval', $scope.maxTime);
            sendObj.append('minInterval', $scope.minTime);
            sendObj.append('addNum', $scope.addPeopleCount);
            sendObj.append('file', $scope.upFile);
            sendObj.append('msg', oooo2);
            $http({
                method: 'POST',
                url: $rootScope.link + "/wechatPlus/addFriendsFromContact",
                data: sendObj,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (response) {
                //上传成功的操作
                if (response.code == 200) {
                    $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;通讯录加人任务添加成功');
                    setTimeout(function () {
                        $('.page1-alert-waring').hide(300)
                    }, 2000)
                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
                        if (data.code == 200) {
                            $rootScope.taskList = data.data;
                            $rootScope.taskAll = true;
                            $rootScope.taskDoing = false;
                            $rootScope.taskWait = false;
                            $rootScope.taskDown = false;
                            $rootScope.newBell = true;
                        } else {
                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                            setTimeout(function () {
                                $('.page1-alert-small-danger').hide(300)
                            }, 2000)
                        }
                    });
                } else {
                    $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;通讯录加人任务添加失败');
                    setTimeout(function () {
                        $('.page1-alert-danger').hide(300)
                    }, 2000)
                }
            });
        }
    };
    /*--------------------------------------通讯录加人完结----------------------------------------------------------*/
    /*------------------策略相关------------------*/
    $scope.isClear = 0;
    $scope.clear = function ($event) {
        if ($event.target.checked) {
            $scope.isClear = 1;
        } else {
            $scope.isClear = 0;
        }
    };
    $scope.assRadioChoose = false;
    $scope.page3table1table2addPeople = 1;
    $scope.page3table1table2addPeopleCount = 1;
    $scope.getAssHide = function () {
        $scope.assRadioChoose = false;
        $scope.page3table1table2addPeople = 1;
    };
    $scope.getAssShow = function () {
        $scope.assRadioChoose = true;
        $scope.page3table1table2addPeople = 0;
    }
    $scope.page3table1table2SendAll = function () {
        for (var i = 0, arr = []; i < $('.page17-wx-input').length; i++) {
            if ($('.page17-wx-input').eq(i).prop('checked')) {
                arr.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
            }
        }
        if (arr.length < 0) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请勾选并选择需要操作的设备')
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        }else if($scope.assList==undefined||$scope.assList==''||$scope.assList==null){
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择并导入有效的通讯录文件')
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        }else {
            var sendObj = new FormData();
            sendObj.append('devices', JSON.stringify(arr));
            sendObj.append('clear', $scope.isClear);
            sendObj.append('strategy', $scope.page3table1table2addPeople);
            sendObj.append('count', $scope.page3table1table2addPeopleCount);
            sendObj.append('contactList', JSON.stringify($scope.assList));
            $http({
                method: 'POST',
                url: $rootScope.link + "/wechatPlus/addContacts",
                data: sendObj,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (response) {
                console.log(response.code)
                //上传成功的操作
                if (response.code == 200) {
                    $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;通讯录加人任务添加成功');
                    setTimeout(function () {
                        $('.page1-alert-waring').hide(300)
                    }, 2000)
                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
                        if (data.code == 200) {
                            $rootScope.taskList = data.data;
                            $rootScope.taskAll = true;
                            $rootScope.taskDoing = false;
                            $rootScope.taskWait = false;
                            $rootScope.taskDown = false;
                            $rootScope.newBell = true;
                        } else {

                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                            setTimeout(function () {
                                $('.page1-alert-small-danger').hide(300)
                            }, 2000)
                        }
                    });
                } else {
                    $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;通讯录加人任务添加失败，请重试并检查设备连接');
                    setTimeout(function () {
                        $('.page1-alert-danger').hide(300)
                    }, 2000)
                }
            });
        }
    };
    /*--------------------------------------通讯录上传完结----------------------------------------------------------*/
    $scope.upFile1 = ''
    $scope.sayHello = '您好！很高兴认识您！';
    $scope.page3table21tabl2eaddPeople = 0;
    $scope.page3table21tabl2eaddPeopleCount = 1;
    $scope.page3table21tabl2maxTime = 10;
    $scope.page3table21tabl2minTime = 1;
    $scope.assRadioChoose1 = true;
    $scope.page2Table1AllNum = function () {
        $scope.page3table21tabl2eaddPeople = 1;
        $scope.assRadioChoose1 = false;
    };
    $scope.page2Table1SomeNum = function () {
        $scope.page3table21tabl2eaddPeople = 0;
        $scope.assRadioChoose1 = true;
    };
    /*-------------------选择话术用语---------------------*/
    var selectVal1 = 1

    $('.upText1').hide()
    $('.clickSelect1').change(function () {
        selectVal1 = $(this).val();
        if (selectVal1 == 1) {
            $('.page3-jingzhun-Say').show();
            $('.page3-emjoy1').html('');
            $('.clickAddText1').hide()
            // $scope.saySomething = '您好！很高兴认识您！';
            $scope.upFile1 = ''
            $('.upText1').hide()
            $('.upfiler1').val('')
            $('.exselTextGray1').html('0kb')
            $('.exselTextGra1').html('无文件')
        } else {
            $('.page3-jingzhun-Say').hide();
            $('.clickAddText1').show();
            $('.page3-emjoy1').html('');
        }
    })
    $scope.deleteContent1 = function () {

        $scope.upFile1 = ''
        $('.upfiler1').val('')
        $('.exselTextGray1').html('0kb')
        $('.exselTextGra1').html('无文件')
    }
    $scope.page3table2table2SendAll = function () {
        var page3table3saying = $(".page3-emjoy1").html();
        for (var i = 0, arr = []; i < $('.page17-wx-input').length; i++) {
            if ($('.page17-wx-input').eq(i).prop('checked')) {
                arr.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
            }
        }
        if (arr.length == 0) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择并勾选需要操作的设备');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        }
        else if (page3table3saying.length == 0 && typeof($scope.upFile) == "string") {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请输入打招呼用语或导入话术文件');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)

        }
        else {
            var reger = /<img.*?(?:>|\/>)/g;
            var srcReg = /\/([^\/]*?\.gif)/i;
            var arr1 = page3table3saying.match(reger)
            if (arr1 == null) {
            } else {
                var tt = []
                for (var i = 0; i < arr1.length; i++) {
                    var src = arr1[i].match(srcReg);
                    // var src = srcReg.exec(arr1[i])
                    if (src[1]) {
                        tt.push(src[1].substring(0, src[1].indexOf('.')))
                    }
                    for (var tt1 = [], i1 = 0; i1 < tt.length; i1++) {
                        for (var i2 = 0; i2 < emjoyAllGet.length; i2++) {
                            if (tt[i1] == i2) {
                                tt1.push(emjoyAllGet[i2 - 1])
                            }
                        }
                    }
                }
                var result = page3table3saying.match(/<img.*?(?:>|\/>)/g);
                for (var i = 0; i < result.length; i++) {
                    page3table3saying = page3table3saying.replace(result[i], tt1[i])
                }
            }
            var oooo = page3table3saying.replace(/<\/div>/g, "");
            var oooo1 = oooo.replace(/<br>/g, "");
            var oooo2 = oooo1.replace(/<div>/g, "<br>");
            var sendObj = new FormData();
            sendObj.append('devices', JSON.stringify(arr));
            sendObj.append('file', $scope.upFile1);
            sendObj.append('msg', oooo2);
            sendObj.append('strategy', $scope.page3table21tabl2eaddPeople);
            sendObj.append('count', $scope.page3table21tabl2eaddPeopleCount);
            sendObj.append('contactList', JSON.stringify($scope.assList1));
            sendObj.append('contactList2', JSON.stringify($scope.assList2));
            sendObj.append('maxInterval', $scope.page3table21tabl2maxTime);
            sendObj.append('minInterval', $scope.page3table21tabl2minTime);
            $http({
                method: 'POST',
                url: $rootScope.link + "/wechatPlus/addFriendDirect",
                data: sendObj,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (response) {
                //上传成功的操作
                if (response.code == 200) {
                    $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;精准加人任务添加成功');
                    setTimeout(function () {
                        $('.page1-alert-waring').hide(300)
                    }, 2000)
                    $(".page3-emjoy1").html('');
                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
                        if (data.code == 200) {
                            $rootScope.taskList = data.data;
                            $rootScope.taskAll = true;
                            $rootScope.taskDoing = false;
                            $rootScope.taskWait = false;
                            $rootScope.taskDown = false;
                            $rootScope.newBell = true;
                        } else {
                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                            setTimeout(function () {
                                $('.page1-alert-small-danger').hide(300)
                            }, 2000)
                        }
                    });
                } else {
                    $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;数据加载任务添加失败，请重试并检查设备连接');
                    setTimeout(function () {
                        $('.page1-alert-danger').hide(300)
                    }, 2000)
                }
            });
        }
    };
    /*--------------------------------------精准加人完结----------------------------------------------------------*/
    $scope.mapRang = '2000';
    // $scope.timeInterval = 5;
    $scope.page3table41tabl1sayHello = '您好！很高兴认识您！';
    $scope.upFile2 = ''
    $scope.mapLocation = '';
    $scope.addPeopleNumber = 10;
    $scope.addSex = '全部';
    $scope.page3table41tabl1maxTime = 10;
    $scope.page3table41tabl1minTime = 1;
    /*-------------------选择话术用语---------------------*/
    var selectVal2 = 1
    $('.upText2').hide()
    $('.clickSelect2').change(function () {
        selectVal2 = $(this).val();
        if (selectVal2 == 1) {
            $('.page3-fujin-Say').show();
            $('.page3-emjoy2').html('');

            $('.clickAddText2').hide()
            // $scope.saySomething = '您好！很高兴认识您！';
            $scope.upFile2 = ''

            $('.upText2').hide()
            $('.upfiler2').val('')
            $('.exselTextGray2').html('0kb')
            $('.exselTextGra2').html('无文件')
        } else {
            $('.page3-fujin-Say').hide();
            $('.clickAddText2').show();
            $('.page3-emjoy2').html('');
        }
    })
    $scope.deleteContent2 = function () {

        $scope.upFile2 = ''
        $('.upfiler2').val('')
        $('.exselTextGray2').html('0kb')
        $('.exselTextGra2').html('无文件')
    }
    /*--------------------确认添加附近得人后先清除穿越位置-----------------------*/
    $scope.page3table4table1SendAll = function () {
        var page3table4saying = $(".page3-emjoy2").html();
        for (var i = 0, arr = []; i < $('.page17-wx-input').length; i++) {
            if ($('.page17-wx-input').eq(i).prop('checked')) {
                arr.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
            }
        }
        var sex = 0;
        if ($scope.addSex == '全部') {
            sex = 0;
        } else if ($scope.addSex == '男') {
            sex = 1;
        } else if ($scope.addSex == '女') {
            sex = 2;
        }
        if (arr.length == 0) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择并勾选需要操作的设备');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)

        } else if ($scope.mapRang == '') {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择加好友范围');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        }
        else {
            var ClearsendObj1 = new FormData();
            ClearsendObj1.append('devices', JSON.stringify(arr));
            $http({
                method: 'POST',
                url: $rootScope.link + "/operate/clearLocation",
                data: ClearsendObj1,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (response) {
                //上传成功的操作
                if (response.code == 200) {
                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
                        if (data.code == 200) {
                            $rootScope.taskList = data.data;
                            $rootScope.taskAll = true;
                            $rootScope.taskDoing = false;
                            $rootScope.taskWait = false;
                            $rootScope.taskDown = false;
                            $rootScope.newBell = true;
                        }
                    });
                    var reger = /<img.*?(?:>|\/>)/g;
                    var srcReg = /\/([^\/]*?\.gif)/i;
                    var arr1 = page3table4saying.match(reger)
                    if (arr1 == null) {
                    } else {
                        var tt = []
                        for (var i = 0; i < arr1.length; i++) {
                            var src = arr1[i].match(srcReg);
                            // var src = srcReg.exec(arr1[i])
                            if (src[1]) {
                                tt.push(src[1].substring(0, src[1].indexOf('.')))
                            }
                            for (var tt1 = [], i1 = 0; i1 < tt.length; i1++) {
                                for (var i2 = 0; i2 < emjoyAllGet.length; i2++) {
                                    if (tt[i1] == i2) {
                                        tt1.push(emjoyAllGet[i2 - 1])
                                    }
                                }
                            }
                        }
                        var result = page3table4saying.match(/<img.*?(?:>|\/>)/g);
                        for (var i = 0; i < result.length; i++) {
                            page3table4saying = page3table4saying.replace(result[i], tt1[i])
                        }
                    }
                    var oooo = page3table4saying.replace(/<\/div>/g, "");
                    var oooo1 = oooo.replace(/<br>/g, "");
                    var oooo2 = oooo1.replace(/<div>/g, "<br>");
                    var sendObj = new FormData();
                    sendObj.append('devices', JSON.stringify(arr));
                    sendObj.append('file', $scope.upFile2);
                    sendObj.append('maxInterval', $scope.page3table41tabl1maxTime);
                    sendObj.append('minInterval', $scope.page3table41tabl1minTime);
                    sendObj.append('msg', oooo2);
                    // sendObj.append('range', parseInt($scope.mapRang));
                    // sendObj.append('longitude', $scope.mapPointLng);
                    // sendObj.append('latitude', $scope.mapPointLat);
                    sendObj.append('num', $scope.addPeopleNumber);
                    sendObj.append('sex', sex);
                    $http({
                        method: 'POST',
                        url: $rootScope.link + "/wechatPlus/sayHello",
                        data: sendObj,
                        headers: {'Content-Type': undefined},
                        transformRequest: angular.identity
                    }).success(function (response) {
                        //上传成功的操作
                        if (response.code == 200) {
                            $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;加附近的人任务添加成功');
                            setTimeout(function () {
                                $('.page1-alert-waring').hide(300)
                            }, 2000)
                            $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
                                if (data.code == 200) {
                                    $rootScope.taskList = data.data;
                                    $rootScope.taskAll = true;
                                    $rootScope.taskDoing = false;
                                    $rootScope.taskWait = false;
                                    $rootScope.taskDown = false;
                                    $rootScope.newBell = true;
                                } else {
                                    $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                                    setTimeout(function () {
                                        $('.page1-alert-small-danger').hide(300)
                                    }, 2000)
                                }
                            });
                        } else {
                            $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;加附近的人任务添加失败，请重试并检查设备连接');
                            setTimeout(function () {
                                $('.page1-alert-danger').hide(300)
                            }, 2000)
                        }
                    });
                } else {
                    $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;加附近的人任务添加失败，请重试并检查设备连接');
                    setTimeout(function () {
                        $('.page1-alert-danger').hide(300)
                    }, 2000)
                }
            });
        }
    };

    /*--------------------------------------附近的人完结----------------------------------------------------------*/
    /*-----------------------当前位置穿越切换----------------------------*/
    $scope.page3Table4Show1 = function () {
        $scope.outSideBox2 = true;
        $scope.outSideBox4 = false;
    }
    $scope.page3Table4Show2 = function () {
        $scope.outSideBox2 = false;
        $scope.outSideBox4 = true;
    }

    function G(id) {
        return document.getElementById(id);
    }

    var map = new BMap.Map("page14-map");
    map.centerAndZoom("北京", 12);                   // 初始化地图,设置城市和地图级别。
    map.enableScrollWheelZoom(true); //为了王哥
    map.addEventListener('click', function (e) {
        //var myIcon=new BMap.Icon("images/map-logo.png", new BMap.Size(23,33));
        //var marker = new BMap.Marker(new BMap.Point(e.point.lng,e.point.lat ),{icon:myIcon})
        //map.addOverlay(marker);
        $.ajax({
            type: 'GET',
            url: 'http://api.map.baidu.com/geocoder/v2/?ak=HbUVYMUg6PwbOnXkztdgSQlQ&callback=renderReverse&location=' + e.point.lat + ',' + e.point.lng + '&output=json&pois=1',
            dataType: 'JSONP',
            success: function (data1) {
                $scope.mapLocation = data1.result.formatted_address;
                $scope.$apply();
            }
        });
    });
    var ac = new BMap.Autocomplete(    //建立一个自动完成的对象
        {
            "input": "suggestId"
            , "location": map
        });

    ac.addEventListener("onhighlight", function (e) {  //鼠标放在下拉列表上的事件
        var str = "";
        var _value = e.fromitem.value;
        var value = "";
        if (e.fromitem.index > -1) {
            value = _value.province + _value.city + _value.district + _value.street + _value.business;
        }
        str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;

        value = "";
        if (e.toitem.index > -1) {
            _value = e.toitem.value;
            value = _value.province + _value.city + _value.district + _value.street + _value.business;
        }
        str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
        G("searchResultPanel").innerHTML = str;
    });

    var myValue;
    ac.addEventListener("onconfirm", function (e) {    //鼠标点击下拉列表后的事件
        var _value = e.item.value;
        myValue = _value.province + _value.city + _value.district + _value.street + _value.business;
        G("searchResultPanel").innerHTML = "onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;

        setPlace();
    });

    function setPlace() {
        map.clearOverlays();    //清除地图上所有覆盖物
        function myFun() {
            var pp = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果
            map.centerAndZoom(pp, 18);
            map.addOverlay(new BMap.Marker(pp));    //添加标注
            $scope.mapPointLng = pp.lng;
            $scope.mapPointLat = pp.lat;
        }

        var local = new BMap.LocalSearch(map, { //智能搜索
            onSearchComplete: myFun
        });
        local.search(myValue);
    }

    $scope.mapRang1 = '2000';
    // $scope.timeInterval = 5;
    $scope.page3table41tabl1sayHello1 = '您好！很高兴认识您！';
    $scope.upFile3 = ''
    $scope.mapLocation = '';
    $scope.addPeopleNumber1 = 10;
    $scope.addSex1 = '全部';
    $scope.page3table41tabl1maxTime1 = 10;
    $scope.page3table41tabl1minTime1 = 1;
    var selectVal21 = 1
    $('.upText3').hide()
    $('.clickSelect3').change(function () {
        selectVal21 = $(this).val();
        if (selectVal21 == 1) {
            $('.page3-fujin-Say12').show();
            $('.page100-emjoy100').html('');

            $('.clickAddText3').hide()
            // $scope.saySomething = '您好！很高兴认识您！';
            $scope.upFile3 = ''

            $('.upText3').hide()
            $('.upfiler3').val('')
            $('.exselTextGray3').html('0kb')
            $('.exselTextGra3').html('无文件')
        } else {
            $('.page3-fujin-Say12').hide();
            $('.clickAddText3').show();
            $('.page100-emjoy100').html('');
        }
    })
    $scope.deleteContent3 = function () {

        $scope.upFile3 = ''
        $('.upfiler3').val('')
        $('.exselTextGray3').html('0kb')
        $('.exselTextGra3').html('无文件')
    }
    /*-------------------------确认穿越位置后加人-------------------------*/
    $scope.page3table4table1SendAll1 = function () {
        var page3table4saying = $(".page100-emjoy100").html();
        for (var i = 0, arr = []; i < $('.page17-wx-input').length; i++) {
            if ($('.page17-wx-input').eq(i).prop('checked')) {
                arr.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
            }
        }
        var sex = 0;
        if ($scope.addSex1 == '全部') {
            sex = 0;
        } else if ($scope.addSex1 == '男') {
            sex = 1;
        } else if ($scope.addSex1 == '女') {
            sex = 2;
        }
        if (arr.length == 0) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择并勾选需要操作的设备');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)

        } else if ($scope.mapRang1 == '') {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择加好友范围');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        }
        else if ($scope.mapPointLng == undefined || $scope.mapPointLng == '' || $scope.mapPointLat == undefined || $scope.mapPointLat == '') {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请输入您想要穿越的位置');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        }
        else {
            var sendObjChange = new FormData();
            sendObjChange.append('devices', JSON.stringify(arr));
            sendObjChange.append('longitude', $scope.mapPointLng);
            sendObjChange.append('latitude', $scope.mapPointLat);
            $http({
                method: 'POST',
                url: $rootScope.link + "/operate/changeLocation",
                data: sendObjChange,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (response) {
                //上传成功的操作
                if (response.code == 200) {
                    var reger = /<img.*?(?:>|\/>)/g;
                    var srcReg = /\/([^\/]*?\.gif)/i;
                    var arr1 = page3table4saying.match(reger)
                    if (arr1 == null) {
                    } else {
                        var tt = []
                        for (var i = 0; i < arr1.length; i++) {
                            var src = arr1[i].match(srcReg);
                            // var src = srcReg.exec(arr1[i])
                            if (src[1]) {
                                tt.push(src[1].substring(0, src[1].indexOf('.')))
                            }
                            for (var tt1 = [], i1 = 0; i1 < tt.length; i1++) {
                                for (var i2 = 0; i2 < emjoyAllGet.length; i2++) {
                                    if (tt[i1] == i2) {
                                        tt1.push(emjoyAllGet[i2 - 1])
                                    }
                                }
                            }
                        }
                        var result = page3table4saying.match(/<img.*?(?:>|\/>)/g);
                        for (var i = 0; i < result.length; i++) {
                            page3table4saying = page3table4saying.replace(result[i], tt1[i])
                        }
                    }
                    var oooo = page3table4saying.replace(/<\/div>/g, "");
                    var oooo1 = oooo.replace(/<br>/g, "");
                    var oooo2 = oooo1.replace(/<div>/g, "<br>");
                    var sendObj = new FormData();
                    sendObj.append('devices', JSON.stringify(arr));
                    sendObj.append('file', $scope.upFile3);
                    sendObj.append('maxInterval', $scope.page3table41tabl1maxTime1);
                    sendObj.append('minInterval', $scope.page3table41tabl1minTime1);
                    sendObj.append('msg', oooo2);
                    sendObj.append('range', parseInt($scope.mapRang1));

                    sendObj.append('num', $scope.addPeopleNumber1);
                    sendObj.append('sex', sex);
                    $http({
                        method: 'POST',
                        url: $rootScope.link + "/wechatPlus/sayHello",
                        data: sendObj,
                        headers: {'Content-Type': undefined},
                        transformRequest: angular.identity
                    }).success(function (response) {
                        //上传成功的操作
                        if (response.code == 200) {
                            $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;加附近的人任务添加成功');
                            setTimeout(function () {
                                $('.page1-alert-waring').hide(300)
                            }, 2000)
                            $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
                                if (data.code == 200) {
                                    $rootScope.taskList = data.data;
                                    $rootScope.taskAll = true;
                                    $rootScope.taskDoing = false;
                                    $rootScope.taskWait = false;
                                    $rootScope.taskDown = false;
                                    $rootScope.newBell = true;
                                } else {
                                    $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                                    setTimeout(function () {
                                        $('.page1-alert-small-danger').hide(300)
                                    }, 2000)
                                }
                            });
                        } else {
                            $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;加附近的人任务添加失败，请重试并检查设备连接');
                            setTimeout(function () {
                                $('.page1-alert-danger').hide(300)
                            }, 2000)
                        }
                    })
                } else {
                    $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;加附近的人任务添加失败，请重试并检查设备连接');
                    setTimeout(function () {
                        $('.page1-alert-danger').hide(300)
                    }, 2000)
                }
            })


        }
    }
    /*--------------------------------------位置穿越完结----------------------------------------------------------*/
    $scope.addPeopleNumber2 = 5;
    $scope.timeInterval = 5;
    $scope.page3table51tabl1minTime = 1;
    $scope.page3table51tabl1maxTime = 10;
    $scope.upFile4 = ''
    $scope.allGroup = 0
    $scope.topGroup = 0;
    $scope.groupNum = 5;
    $scope.allNum = 0;
    $scope.panduan = 0;
    /*---------------选择加好友途径------------------*/
    $('.upText4').hide()
    var selectVal5 = 0;
    var selectVal4 = 1
    $('.clickSelect4').change(function () {
        selectVal4 = $(this).val();
        if (selectVal4 == 1) {
            $('.page3-qunzu-Say-3').show();
            $('.page3-emjoy5').html('');

            $('.clickAddText3-3').hide()
            $('.upText4').hide()
            $('.upfiler4').val('')
            $('.exselTextGray4').html('0kb')
            $('.exselTextGra4').html('无文件')
            $scope.upFile4 = ''
        } else {
            $('.page3-qunzu-Say-3').hide();
            $('.clickAddText3-3').show();
            $('.page3-emjoy5').html('');
        }
    })
    $scope.deleteContent4 = function () {

        $scope.upFile4 = ''
        $('.upfiler4').val('')
        $('.exselTextGray4').html('0kb')
        $('.exselTextGra4').html('无文件')
    }

    $('.come-type').change(function () {
        selectVal5 = $(this).val();
        if (selectVal5 == 1) {
            $(".writeNum").hide()
            $scope.allGroup = 1
            $scope.topGroup = 0;
            $scope.groupNum = 0;
            $scope.noTopGroup = 0
            $scope.panduan = 1;
            $scope.allNum = 0;
        } else if (selectVal5 == 0) {
            $(".writeNum").hide()
            $scope.allGroup = 0
            $scope.topGroup = 0;
            $scope.groupNum = 0;
            $scope.panduan = 0;
            $scope.noTopGroup = 0
            $scope.allNum = 0;
        } else if (selectVal5 == 2) {
            $(".writeNum").hide()
            $scope.panduan = 1;
            $scope.allGroup = 0
            $scope.topGroup = 1;
            $scope.groupNum = 0;
            $scope.noTopGroup = 0
            $scope.allNum = 0;
        } else if (selectVal5 == 3) {
            $scope.allGroup = 0
            $scope.panduan = 1;
            $scope.topGroup = 0;
            $scope.groupNum = 5;
            $scope.noTopGroup = 0
            $scope.allNum = 1
            $(".writeNum").show()
        } else if (selectVal5 == 4) {
            $(".writeNum").hide()
            // $scope.noTopGroup = 1
            $scope.allGroup = 0
            $scope.topGroup = 2;
            $scope.groupNum = 0;
            $scope.panduan = 1;
            $scope.allNum = 0;
        }
    })
    $scope.page3table5table1SendAll = function () {
        var page3table5saying = $(".page3-emjoy5").html();
        for (var i = 0, arr = []; i < $('.page17-wx-input').length; i++) {
            if ($('.page17-wx-input').eq(i).prop('checked')) {
                arr.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
            }
        }
        if (arr.length == 0) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择并勾选需要操作的设备');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else if (page3table5saying != '' && typeof($scope.upFile) == "string") {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请输入打招呼用语或导入话术文件');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        }
        else if ($scope.panduan == 0) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择入群加好友的方式');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else {
            var reger = /<img.*?(?:>|\/>)/g;
            var srcReg = /\/([^\/]*?\.gif)/i;
            var arr1 = page3table5saying.match(reger)
            if (arr1 == null) {
            } else {
                var tt = []
                for (var i = 0; i < arr1.length; i++) {
                    var src = arr1[i].match(srcReg);
                    // var src = srcReg.exec(arr1[i])
                    if (src[1]) {
                        tt.push(src[1].substring(0, src[1].indexOf('.')))
                    }
                    for (var tt1 = [], i1 = 0; i1 < tt.length; i1++) {
                        for (var i2 = 0; i2 < emjoyAllGet.length; i2++) {
                            if (tt[i1] == i2) {
                                tt1.push(emjoyAllGet[i2 - 1])
                            }
                        }
                    }
                }
                var result = page3table5saying.match(/<img.*?(?:>|\/>)/g);
                for (var i = 0; i < result.length; i++) {
                    page3table5saying = page3table5saying.replace(result[i], tt1[i])
                }
            }
            var oooo = page3table5saying.replace(/<\/div>/g, "");
            var oooo1 = oooo.replace(/<br>/g, "");
            var oooo2 = oooo1.replace(/<div>/g, "<br>");
            var sendObj = new FormData();
            sendObj.append('file', $scope.upFile4);
            sendObj.append('msg', oooo2);
            sendObj.append('addNum', $scope.addPeopleNumber2);
            sendObj.append('maxInterval', $scope.page3table51tabl1maxTime);
            sendObj.append('minInterval', $scope.page3table51tabl1minTime);
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
                    $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;入群加好友任务添加成功');
                    setTimeout(function () {
                        $('.page1-alert-waring').hide(300)
                    }, 2000)
                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
                        if (data.code == 200) {
                            $rootScope.taskList = data.data;
                            $rootScope.taskAll = true;
                            $rootScope.taskDoing = false;
                            $rootScope.taskWait = false;
                            $rootScope.taskDown = false;
                            $rootScope.newBell = true;
                        } else {

                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                            setTimeout(function () {
                                $('.page1-alert-small-danger').hide(300)
                            }, 2000)
                        }
                    });
                } else {

                    $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;入群加好友任务添加失败，请重试并检查设备连接');
                    setTimeout(function () {
                        $('.page1-alert-danger').hide(300)
                    }, 2000)
                }
            });
        }
    };
    /*--------------------------------------微信群加人完结----------------------------------------------------------*/
}
]);

app.controller('page37C', ["$rootScope", "$scope", "$http", "$timeout", function ($rootScope, $scope, $http, $timeout) {
    $rootScope.getAllFalse();
    $rootScope.initOver = true;
    $rootScope.activeThirtySeven = true;
    $rootScope.navPartThree = true;
    $rootScope.isScreenPage = false;
    $scope.outSideBox = true;
    $scope.FriendCil = false
    $scope.outSideBox1 = false;
    $scope.outSideBox3 = false;
    $scope.outSideBox2 = false;
    $scope.outSideBox4 = false;
    $scope.outSideBox5 = false;

    function textInit(e) {
        e.preventDefault();
        var text;
        var clp = (e.originalEvent || e).clipboardData;
        if (clp === undefined || clp === null) {
            text = window.clipboardData.getData("text") || "";
            if (text !== "") {
                if (window.getSelection) {
                    var newNode = document.createElement("span");
                    newNode.innerHTML = text;
                    window.getSelection().getRangeAt(0).insertNode(newNode);
                } else {
                    document.selection.createRange().pasteHTML(text);
                }
            }
        } else {
            text = clp.getData('text/plain') || "";
            if (text !== "") {
                document.execCommand('insertText', false, text);
            }
        }
    }

    $(".page4-emjoy1").on("paste", function (e) {
        textInit(e)
    });
    $(".page100-emjoy100").on("paste", function (e) {
        textInit(e)
    });
    $(".page4-emjoy3").on("paste", function (e) {
        textInit(e)
    });
    $(".page4-emjoy24").on("paste", function (e) {
        textInit(e)
    });
    $(".page4-emjoy31").on("paste", function (e) {
        textInit(e)
    });
    $(".page4-emjoy10").on("paste", function (e) {
        textInit(e)
    });

    $scope.fvcMe = function (e) {
        $('.list_dd').stop();
        $(".list_dt").eq(e).parent().siblings("new-wx-group-list-li").removeAttr("id");
        if ($(".list_dt").eq(e).parent().attr("id") == "open") {
            $(".list_dt").eq(e).parent().removeAttr("id").find('i').css('background', ' url("images/offChecked.png")center no-repeat')
        } else {
            $(".list_dt").eq(e).parent().attr("id", "open").find('i').css('background', ' url("images/openChecked.png")center no-repeat')
        }
    }
    /*-----选中设备总数-----*/
    /*------------获取在线设备------------*/
    $http.get($rootScope.link + '/group/getGroupDataByStatus').success(function (data) {
        if (data.code == 200) {
            $scope.hhalk = []
            for (var a = 0; a < data.data.length; a++) {
                if (data.data[a].deviceVos.length == 0) {
                } else {
                    for (var i = 0; i < data.data[a].deviceVos.length; i++) {
                        $scope.hhalk.push(data.data[a].deviceVos[i].device)
                    }
                }

            }
            $scope.hhalk1 = $scope.hhalk.length
        } else {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        }
    });
    $rootScope.table2AllChecks = 0;
    $rootScope.page4getMoreData = 'no'
    $scope.logout = function () {
        $http.get($rootScope.link + '/logout').success(function (data) {
            if (data.code == 200) {
                window.location.href = 'http://' + window.location.host + '/wgcs/#/login'
            } else {
                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;注销登录失败');
                setTimeout(function () {
                    $('.page1-alert-small-danger').hide(300)
                }, 2000)
            }
        })
    }
    $("#btn6").click(function () {
        $('.emoji_container').html('').css({'border': 'none', 'background-color': 'transparent', 'box-shadow': 'none'})
        $("#editor6").emoji({
            button: "#btn6",
            showTab: false,
            animation: 'none',
            icons: [{
                name: "QQ表情",
                path: "images/qq/",
                maxNum: 91,
                excludeNums: [41, 45, 54],
                file: ".gif",
            }]
        });
    });
    $("#btn7").click(function () {
        $('.emoji_container').html('').css({'border': 'none', 'background-color': 'transparent', 'box-shadow': 'none'})
        $("#editor7").emoji({
            button: "#btn7",
            showTab: false,
            animation: 'none',
            icons: [{
                name: "QQ表情",
                path: "images/qq/",
                maxNum: 91,
                excludeNums: [41, 45, 54],
                file: ".gif",
            }]
        });
    });
    $("#btn8").click(function () {
        $('.emoji_container').html('').css({'border': 'none', 'background-color': 'transparent', 'box-shadow': 'none'})
        $("#editor8").emoji({
            button: "#btn8",
            showTab: false,
            animation: 'none',
            icons: [{
                name: "QQ表情",
                path: "images/qq/",
                maxNum: 91,
                excludeNums: [41, 45, 54],
                file: ".gif",
            }]
        });
    });
    $("#btn10").click(function () {
        $('.emoji_container').html('').css({'border': 'none', 'background-color': 'transparent', 'box-shadow': 'none'})
        $("#editor10").emoji({
            button: "#btn10",
            showTab: false,
            animation: 'none',
            icons: [{
                name: "QQ表情",
                path: "images/qq/",
                maxNum: 91,
                excludeNums: [41, 45, 54],
                file: ".gif",
            }]
        });
    });
    $("#btn71").click(function () {
        $('.emoji_container').html('').css({'border': 'none', 'background-color': 'transparent', 'box-shadow': 'none'})
        $("#editor71").emoji({
            button: "#btn71",
            showTab: false,
            animation: 'none',
            icons: [{
                name: "QQ表情",
                path: "images/qq/",
                maxNum: 91,
                excludeNums: [41, 45, 54],
                file: ".gif",
            }]
        });
    });
    $("#btn81").click(function () {
        $('.emoji_container').html('').css({'border': 'none', 'background-color': 'transparent', 'box-shadow': 'none'})
        $("#editor81").emoji({
            button: "#btn81",
            showTab: false,
            animation: 'none',
            icons: [{
                name: "QQ表情",
                path: "images/qq/",
                maxNum: 91,
                excludeNums: [41, 45, 54],
                file: ".gif",
            }]
        });
    });

    /*-------------------------------table切换--------------------------------------------------*/
    $('.page2-title-button-but1').css({
        "background-color": "#2ABF9E",
        "color": "#fff"
    }).siblings().css({"background-color": "#fff", "color": "#2ABF9E"});
    $scope.tableSwitch = function (e) {
        if (e == 1) {
            $('.page3-table1-click-table2-Table3-checked').addClass('on');
            $('.page3-table1-click-table2-Table3-Nochecked').removeClass('on');
            $scope.outSideBox3 = false;
            $scope.outSideBox2 = false;
            $scope.outSideBox4 = false;
            $scope.outSideBox = true;
            $scope.outSideBox5 = false;
            $scope.outSideBox6 = false;
            $scope.outSideBox7 = false;
            $scope.outSideBox8 = false;
            $scope.outSideBox9 = false;
            $scope.outSideBox10 = false;
            $('.page2-title-button-but1').css({
                "background-color": "#2ABF9E",
                "color": "#fff"
            }).siblings().css({"background-color": "#fff", "color": "#2ABF9E"});
        } else if (e == 2) {
            $('.page3-table1-click-table2-Table3-checked').addClass('on');
            $('.page3-table1-click-table2-Table3-Nochecked').removeClass('on');
            $scope.outSideBox3 = true;
            $scope.outSideBox2 = true;
            $scope.outSideBox4 = false;
            $scope.outSideBox = false;
            $scope.outSideBox5 = false;
            $scope.outSideBox6 = false;
            $scope.outSideBox7 = false;
            $scope.outSideBox8 = false;
            $scope.outSideBox9 = false;
            $scope.outSideBox10 = false;
            $('.page2-title-button-but2').css({
                "background-color": "#2ABF9E",
                "color": "#fff"
            }).siblings().css({"background-color": "#fff", "color": "#2ABF9E"});
        } else if (e == 3) {
            $scope.outSideBox3 = false;
            $scope.outSideBox2 = false;
            $scope.outSideBox4 = false;
            $scope.outSideBox = false;
            $scope.outSideBox5 = true;
            $scope.outSideBox6 = false;
            $scope.outSideBox7 = false;
            $scope.outSideBox8 = false;
            $scope.outSideBox9 = false;
            $scope.outSideBox10 = false;
            $('.page3-table1-click-table2-Table3-checked').addClass('on');
            $('.page3-table1-click-table2-Table3-Nochecked').removeClass('on');
            $('.page2-title-button-but3').css({
                "background-color": "#2ABF9E",
                "color": "#fff"
            }).siblings().css({"background-color": "#fff", "color": "#2ABF9E"});
        } else if (e == 4) {
            $scope.WxListbiubiu = []
            $timeout(function () {
                $http.get($rootScope.link + '/device/getAllDeviceByStatus?pageNo=1&pageSize=10000').success(function (data) {
                    if (data.code == 200) {
                        $scope.allPhon = data.data.content
                        // console.log(data.data.content)
                    } else {
                        $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;在线设备数据加载失败，请重试并检查设备连接');
                        setTimeout(function () {
                            $('.page1-alert-small-danger').hide(300)
                        }, 2000)
                    }
                });
            }, 0);
            $scope.outSideBox3 = false;
            $scope.outSideBox2 = false;
            $scope.outSideBox4 = false;
            $scope.outSideBox = false;
            $scope.outSideBox5 = false;
            $scope.outSideBox6 = true;
            $scope.outSideBox7 = false;
            $scope.outSideBox8 = false;
            $scope.outSideBox9 = false;
            $scope.outSideBox10 = false;
            $('.page3-table1-click-table2-Table3-checked').addClass('on');
            $('.page3-table1-click-table2-Table3-Nochecked').removeClass('on');
            $('.page2-title-button-but4').css({
                "background-color": "#2ABF9E",
                "color": "#fff"
            }).siblings().css({"background-color": "#fff", "color": "#2ABF9E"});
        } else if (e == 5) {
            $scope.outSideBox3 = false;
            $scope.outSideBox2 = false;
            $scope.outSideBox4 = false;
            $scope.outSideBox = false;
            $scope.outSideBox5 = false;
            $scope.outSideBox6 = false;
            $scope.outSideBox7 = true;
            $scope.outSideBox8 = false;
            $scope.outSideBox9 = false;
            $scope.outSideBox10 = false;
            $('.page3-table1-click-table2-Table3-checked').addClass('on');
            $('.page3-table1-click-table2-Table3-Nochecked').removeClass('on');
            $('.page2-title-button-but5').css({
                "background-color": "#2ABF9E",
                "color": "#fff"
            }).siblings().css({"background-color": "#fff", "color": "#2ABF9E"});
        } else if (e == 6) {
            $scope.outSideBox3 = false;
            $scope.outSideBox2 = false;
            $scope.outSideBox4 = false;
            $scope.outSideBox = false;
            $scope.outSideBox5 = false;
            $scope.outSideBox6 = false;
            $scope.outSideBox7 = false;
            $scope.outSideBox8 = false;
            $scope.outSideBox9 = false;
            $scope.outSideBox10 = true;
            $('.page3-table1-click-table2-Table3-checked').addClass('on');
            $('.page3-table1-click-table2-Table3-Nochecked').removeClass('on');
            $('.page2-title-button-but6').css({
                "background-color": "#2ABF9E",
                "color": "#fff"
            }).siblings().css({"background-color": "#fff", "color": "#2ABF9E"});
        } else if (e == 7) {
            $scope.outSideBox3 = false;
            $scope.outSideBox2 = false;
            $scope.outSideBox4 = false;
            $scope.outSideBox = false;
            $scope.outSideBox5 = false;
            $scope.outSideBox6 = false;
            $scope.outSideBox7 = false;
            $scope.outSideBox8 = true;
            $scope.outSideBox9 = false;
            $scope.outSideBox10 = false;
            $('.page3-table1-click-table2-Table3-checked').addClass('on');
            $('.page3-table1-click-table2-Table3-Nochecked').removeClass('on');
            $('.page2-title-button-but7').css({
                "background-color": "#2ABF9E",
                "color": "#fff"
            }).siblings().css({"background-color": "#fff", "color": "#2ABF9E"});
        } else {
            $('.page3-table1-click-table2-Table3-checked').addClass('on');
            $('.page3-table1-click-table2-Table3-Nochecked').removeClass('on');
            $('.page2-title-button-but8').css({
                "background-color": "#2ABF9E",
                "color": "#fff"
            }).siblings().css({"background-color": "#fff", "color": "#2ABF9E"});
            $scope.outSideBox3 = false;
            $scope.outSideBox2 = false;
            $scope.outSideBox4 = false;
            $scope.outSideBox = false;
            $scope.outSideBox5 = false;
            $scope.outSideBox6 = false;
            $scope.outSideBox7 = false;
            $scope.outSideBox8 = false;
            $scope.outSideBox9 = true;
            $scope.outSideBox10 = false;
        }
    }

    /*--------------------------------------开始--------------------------------------------------*/
    $(function () {
        $.Tupload.init({
            title: "",
            fileNum: 9, // 上传文件数量
            divId: "T_upload", // div  id
            accept: "image/jpeg,image/x-png", // 上传文件的类型
            onSuccess: function (data, i) {
            },
            onDelete: function (i) {
            }
        });
        $.Tupload1.init1({
            title1: "",
            fileNum1: 9, // 上传文件数量
            divId1: "T_upload1", // div  id
            accept1: "image/jpeg,image/x-png", // 上传文件的类型
            onSuccess1: function (data, i) {
            },
            onDelete1: function (i) {
            }
        });
        $.Tupload2.init2({
            title2: "",
            fileNum2: 1, // 上传文件数量
            divId2: "T_upload2", // div  id
            accept2: "image/jpeg,image/x-png", // 上传文件的类型
            onSuccess2: function (data, i) {
            },
            onDelete2: function (i) {
            }
        });
        $.Tupload3.init3({
            title3: "",
            fileNum3: 1, // 上传文件数量
            divId3: "T_upload3", // div  id
            accept3: "image/jpeg,image/x-png", // 上传文件的类型
            onSuccess3: function (data, i) {
            },
            onDelete3: function (i) {
            }
        });
    })
    var emjoyAllGet = [
        '[微笑]', '[撇嘴]', '[色]', '[发呆]', '[得意]', '[流泪]', '[害羞]', '[闭嘴]', '[睡]', '[大哭]',
        '[尴尬]', '[发怒]', '[调皮]', '[呲牙]', '[惊讶]', '[难过]', '[酷]', '[冷汗]', '[抓狂]', '[吐]',
        '[偷笑]', '[愉快]', '[白眼]', '[傲慢]', '[饥饿]', '[困]', '[惊恐]', '[流汗]', '[憨笑]', '[悠闲]',
        '[奋斗]', '[咒骂]', '[疑问]', '[嘘]', '[晕]', '[疯了]', '[衰]', '[骷髅]', '[敲打]', '[再见]', '[]',
        '[抠鼻]', '[鼓掌]', '[糗大了]', '[]', '[左哼哼]', '[右哼哼]', '[哈欠]', '[鄙视]', '[委屈]', '[快哭了]', '[阴险]',
        '[亲亲]', '[]', '[可怜]', '[菜刀]', '[啤酒]', '[咖啡]', '[饭]', '[猪头]', '[玫瑰]', '[凋谢]', '[嘴唇]',
        '[爱心]', '[心碎]', '[蛋糕]', '[闪电]', '[炸弹]', '[刀]', '[足球]', '[瓢虫]', '[便便]', '[拥抱]',
        '[强]', '[弱]', '[握手]', '[胜利]', '[抱拳]', '[勾引]', '[拳头]', '[差劲]', '[爱你]', '[NO]',
        '[OK]', '[跳跳]', '[发抖]', '[怄火]', '[磕头]', '[激动]', '[献吻]'
    ]
    $scope.page4Table1sendObj = new FormData();
    $scope.page4Table1picArr = [];
    $scope.page4Table1maxTime = 10;
    $scope.page4Table1minTime = 1;
    $scope.page4Table1pic = '';
    // $scope.page4Table1sendNum = 10;
    // $scope.page4Table1isAll = 0;
    // $('.page16-choose').change(function () {
    //     selectVal = $(this).val();
    //     if (selectVal == 1) {
    //         $(".writeNu").hide()
    //         $scope.isAll = 1
    //
    //     } else if (selectVal == 2) {
    //         $scope.isAll = 0
    //         $(".writeNu").show()
    //
    //     }
    //     else if (selectVal = 0) {
    //         $scope.isAll = 0
    //         $(".writeNu").hide()
    //
    //     }
    //     else {
    //         $scope.isAll = 0
    //         $(".writeNu").hide()
    //
    //     }
    // })
    $(".page4-emjoy1").html('');
    $(".page4-emjoy2").html('');
    $(".page4-emjoy3").html('');
    $(".page4-emjoy31").html('');
    $(".page4-emjoy10").html('');
    $(".page4-emjoy21").html('');
    $scope.page4table1SendAll = function () {
        if (arrFile4[0] == undefined) {
            arrFile4[0] = ''
        } else {

        }

        var page4Table1saySomething = $(".page4-emjoy1").html();
        for (var i = 0, arr = []; i < $('.page17-wx-input').length; i++) {
            if ($('.page17-wx-input').eq(i).prop('checked')) {
                arr.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
            }
        }
        if (arr.length == 0) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择并勾选需要进行群发消息的设备');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)

        } else if (page4Table1saySomething == '') {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请输入打招呼用语');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        }
        else {
            var reger = /<img.*?(?:>|\/>)/g;
            var srcReg = /\/([^\/]*?\.gif)/i;
            var arr1 = page4Table1saySomething.match(reger)
            if (arr1 == null) {
            } else {
                var tt = []
                for (var i = 0; i < arr1.length; i++) {
                    var src = arr1[i].match(srcReg);
                    // var src = srcReg.exec(arr1[i])
                    if (src[1]) {
                        tt.push(src[1].substring(0, src[1].indexOf('.')))
                    }
                    for (var tt1 = [], i1 = 0; i1 < tt.length; i1++) {
                        for (var i2 = 0; i2 < emjoyAllGet.length; i2++) {
                            if (tt[i1] == i2) {
                                tt1.push(emjoyAllGet[i2 - 1])
                            }
                        }
                    }
                }
                var result = page4Table1saySomething.match(/<img.*?(?:>|\/>)/g);
                for (var i = 0; i < result.length; i++) {
                    page4Table1saySomething = page4Table1saySomething.replace(result[i], tt1[i])
                }
            }
            var oooo = page4Table1saySomething.replace(/<\/div>/g, "");
            var oooo1 = oooo.replace(/<br>/g, "");
            var oooo2 = oooo1.replace(/<div>/g, "<br>");

            var sendObj = new FormData();
            sendObj.append('msg', oooo2);
            // sendObj.append('isAll', $scope.isAll);
            // sendObj.append('sendNum', $scope.sendNum);
            sendObj.append('devices', JSON.stringify(arr));
            sendObj.append('pic', arrFile4[0]);
            sendObj.append('maxInterval', $scope.page4Table1maxTime);
            sendObj.append('minInterval', $scope.page4Table1minTime);
            $http({
                method: 'POST',
                url: $rootScope.link + "/operate/sendMsg",
                data: sendObj,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (response) {
                //上传成功的操作
                if (response.code == 200) {
                    $.Tupload3.init3({
                        title3: "",
                        fileNum3: 1, // 上传文件数量
                        divId3: "T_upload3", // div  id
                        accept3: "image/jpeg,image/x-png", // 上传文件的类型
                        onSuccess3: function (data, i) {
                        },
                        onDelete3: function (i) {
                        }
                    });
                    arrFile4 = [];
                    $(".page4-emjoy1").html('')
                    $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;群发消息任务添加成功');
                    setTimeout(function () {
                        $('.page1-alert-waring').hide(300)
                    }, 2000)
                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
                        if (data.code == 200) {
                            $scope.page4Table1pic = '';
                            $('.page4-up-file-input-noshow').parent().css({
                                'background': 'url(images/add-pic.png) center no-repeat',
                            });
                            $rootScope.taskList = data.data;
                            $rootScope.taskAll = true;
                            $rootScope.taskDoing = false;
                            $rootScope.taskWait = false;
                            $rootScope.taskDown = false;
                            $rootScope.newBell = true;
                        } else {
                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                            setTimeout(function () {
                                $('.page1-alert-small-danger').hide(300)
                            }, 2000)
                        }
                    });
                } else {
                    $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;群发消息任务添加失败，请重试并检查设备连接');
                    setTimeout(function () {
                        $('.page1-alert-danger').hide(300)
                    }, 2000)
                }
            });
        }
    };
    /*--------------------------------------群发消息完结----------------------------------------------------------*/
    $scope.page3Table4Show1 = function () {
        $scope.outSideBox2 = true;
        $scope.outSideBox4 = false;
    }
    $scope.page3Table4Show2 = function () {
        $scope.outSideBox2 = false;
        $scope.outSideBox4 = true;
    }
    $scope.page4Table2timeInterval = 5

    $scope.daluan = 0;
    $(".page4-emjoy2").html('');
    $(".page4-emjoy3").html('');
    $scope.page4table2SendAll = function () {
        var page4Table2saySomething = $(".page4-emjoy2").html();
        var page4Table2saySomething1 = $(".page4-emjoy3").html();
        var sendObj = new FormData();
        var lplpiu = [];
        for (var i = 0; i < arrFile.length; i++) {
            lplpiu.push(i + 1);
            sendObj.append('file' + (i + 1) + '', arrFile[i]);
        }
        var saySomething = $(".FontAndEmjoy13").html();

        for (var i = 0, arr = []; i < $('.page17-wx-input').length; i++) {
            if ($('.page17-wx-input').eq(i).prop('checked')) {
                arr.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
            }
        }
        if (page4Table2saySomething == '') {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请编辑朋友圈内容');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else if (arr.length == 0) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择并勾选需要进行发朋友圈的设备');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)

        } else {
            var reger = /<img.*?(?:>|\/>)/g;
            var srcReg = /\/([^\/]*?\.gif)/i;
            var arr1 = page4Table2saySomething.match(reger)
            var arr2 = page4Table2saySomething1.match(reger)
            if (arr1 == null) {
            } else {
                var tt = []
                for (var i = 0; i < arr1.length; i++) {
                    var src = arr1[i].match(srcReg);
                    // var src = srcReg.exec(arr1[i])
                    if (src[1]) {
                        tt.push(src[1].substring(0, src[1].indexOf('.')))
                    }
                    for (var tt1 = [], i1 = 0; i1 < tt.length; i1++) {
                        for (var i2 = 0; i2 < emjoyAllGet.length; i2++) {
                            if (tt[i1] == i2) {
                                tt1.push(emjoyAllGet[i2 - 1])
                            }
                        }
                    }
                }
                var result = page4Table2saySomething.match(/<img.*?(?:>|\/>)/g);
                for (var i = 0; i < result.length; i++) {
                    page4Table2saySomething = page4Table2saySomething.replace(result[i], tt1[i])
                }
            }
            if (page4Table2saySomething1 == '') {

            } else {
                if (arr2 == null) {
                } else {
                    var tt = []
                    for (var i = 0; i < arr2.length; i++) {
                        var src1 = arr2[i].match(srcReg);
                        // var src = srcReg.exec(arr1[i])
                        if (src1[1]) {
                            tt.push(src1[1].substring(0, src1[1].indexOf('.')))
                        }
                        for (var tt11 = [], i1 = 0; i1 < tt.length; i1++) {
                            for (var i2 = 0; i2 < emjoyAllGet.length; i2++) {
                                if (tt[i1] == i2) {
                                    tt11.push(emjoyAllGet[i2 - 1])
                                }
                            }
                        }
                    }
                    var result1 = page4Table2saySomething1.match(/<img.*?(?:>|\/>)/g);
                    for (var i = 0; i < result1.length; i++) {
                        page4Table2saySomething1 = page4Table2saySomething1.replace(result1[i], tt1[i])
                    }
                }
            }

            var oooo = page4Table2saySomething.replace(/<\/div>/g, "");
            var oooo1 = oooo.replace(/<br>/g, "");
            var oooo2 = oooo1.replace(/<div>/g, "<br>");
            var oooo1o = page4Table2saySomething1.replace(/<\/div>/g, "");
            var oooo11 = oooo1o.replace(/<br>/g, "");
            var oooo21 = oooo11.replace(/<div>/g, "<br>");
            sendObj.append('content', oooo2);
            sendObj.append('devices', JSON.stringify(arr));
            sendObj.append('interval', $scope.page4Table2timeInterval);
            sendObj.append('msg', oooo21);
            sendObj.append('number', JSON.stringify(lplpiu));
            // sendObj.append('number', JSON.stringify([]));
            sendObj.append('random', $scope.daluan);
            sendObj.append('mustNumber', JSON.stringify(lplpiu));
            sendObj.append('randomNumber', JSON.stringify([]));
            $http({
                method: 'POST',
                url: $rootScope.link + "/operate/sendMoments",
                // url:  "http://192.168.1.104:8080/wgcs/operate/sendMoments",
                data: sendObj,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (response) {
                //上传成功的操作
                if (response.code == 200) {
                    $.Tupload.init({
                        title: "",
                        fileNum: 9, // 上传文件数量
                        divId: "T_upload", // div  id
                        accept: "image/jpeg,image/x-png", // 上传文件的类型
                        onSuccess: function (data, i) {
                        },
                        onDelete: function (i) {
                        }
                    });
                    arrFile = []
                    $(".page4-emjoy2").html('');
                    $(".page4-emjoy3").html('');
                    $scope.daluan = 0;
                    $('.asjd').parent().removeClass('on')
                    $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;发朋友圈任务添加成功');
                    setTimeout(function () {
                        $('.page1-alert-waring').hide(300)
                    }, 2000)
                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
                        if (data.code == 200) {
                            $rootScope.taskList = data.data;
                            $rootScope.taskAll = true;
                            $rootScope.taskDoing = false;
                            $rootScope.taskWait = false;
                            $rootScope.taskDown = false;
                            $rootScope.newBell = true;
                        } else {
                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                            setTimeout(function () {
                                $('.page1-alert-small-danger').hide(300)
                            }, 2000)
                        }
                    });
                } else {
                    $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;发朋友圈任务添加失败，请重试并检查设备连接');
                    setTimeout(function () {
                        $('.page1-alert-danger').hide(300)
                    }, 2000)
                }
            });
        }

    };
    /*--------------------------------------发朋友圈A完结----------------------------------------------------------*/
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
        $scope.mustChoose1 = $scope.selected.sort();
    };
    $scope.isChecked = function (id) {
        return $scope.selected.indexOf(id) >= 0;
    };
    $scope.getPicBox = function () {
        for (var picArr2 = [], i = 0; i < $scope.picArr1.length; i++) {
            if ($scope.picArr1[i] == '') {
                picArr2.push('无图片')
            } else {
                picArr2.push(i)
            }
        }
        $scope.picArr3 = picArr2
        setTimeout(function () {
            for (var i = 0; i < $('.page4-mmp').length; i++) {
                if ($('.page4-mmp')[i].innerText == "　无图片") {
                    console.log($('.page4-mmp').eq(i))
                    $('.page4-mmp').eq(i).find('input').attr("disabled", true)
                } else {
                    $('.page4-mmp').eq(i).find('input').attr("disabled", false)
                }
            }
        }, 100)
        $scope.picNumberBox = true;
    }
    $scope.picNumberBox = false;
    $scope.cancelPicBox = function () {
        $scope.picNumberBox = false;
        $scope.mustChoose1 = [];
        $scope.unMChoose1 = [];
    };
    $scope.operate = [];
    $scope.mustChoose1 = [];
    $scope.unMChoose1 = [];
    $scope.unMChoose = [];
    $scope.getSureButton = function () {
        $scope.mustChoose1 = $scope.selected.sort();
        for (var i = 1; i < $scope.picArr1.length; i++) {
            for (var i1 = -1; i1 < $scope.mustChoose1.length; i1++) {
                if (i == $scope.mustChoose1[i1]) {
                } else {
                    if (i > 0 && i <= $scope.picArr1.length) {
                        $scope.unMChoose1.push(i)
                    }
                }
            }
        }
        $scope.picNumberBox = false;
        $scope.operate = $scope.selected.sort();
        Array.prototype.unique3 = function () {
            var res = [];
            var json = {};
            for (var i = 0; i < this.length; i++) {
                if (!json[this[i]]) {
                    res.push(this[i]);
                    json[this[i]] = 1;
                }
            }
            return res;
        }
        $scope.mustChoose = $scope.mustChoose1.unique3()
        $scope.unMChoose = $scope.unMChoose1.unique3()
        for (var i2 = 0; i2 < $scope.mustChoose.length; i2++) {
            for (var i3 = 0; i3 < $scope.unMChoose.length; i3++) {
                if ($scope.unMChoose[i3] == $scope.mustChoose[i2]) {
                    $scope.unMChoose.splice(i3, 1)
                }
            }
        }
    };

    $.Tupload1.init1({
        title1: "",
        fileNum1: 9, // 上传文件数量
        divId1: "T_upload1", // div  id
        accept1: "image/jpeg,image/x-png", // 上传文件的类型
        onSuccess1: function (data, i) {
        },
        onDelete1: function (i) {
        }
    });
    arrFile1 = []
    $scope.picArr = arrFile
    $scope.picArr1 = arrFile1
    $scope.isClear = 0;
    $scope.clear = function ($event) {
        if ($event.target.checked) {
            $scope.isClear = 1;
        } else {
            $scope.isClear = 0;
        }
    };
    $(".page4-emjoy24").html('');
    $(".page4-emjoy31").html('');
    $scope.page4table2SendAll1 = function () {
        var page4Table2saySomething = $(".page4-emjoy24").html();
        var page4Table2saySomething1 = $(".page4-emjoy31").html();
        var sendObj = new FormData();
        for (var i = 0; i < arrFile1.length; i++) {
            sendObj.append('file' + (i + 1) + '', arrFile1[i]);
        }
        for (var i = 0, arr = []; i < $('.page17-wx-input').length; i++) {
            if ($('.page17-wx-input').eq(i).prop('checked')) {
                arr.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
            }
        }
        if (page4Table2saySomething == '') {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请编辑朋友圈内容');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else if (arr.length == 0) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择并勾选需要进行发朋友圈的设备');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)

        } else {
            var reger = /<img.*?(?:>|\/>)/g;
            var srcReg = /\/([^\/]*?\.gif)/i;
            var arr1 = page4Table2saySomething.match(reger)
            var arr2 = page4Table2saySomething1.match(reger)
            if (arr1 == null) {
            } else {
                var tt = []
                for (var i = 0; i < arr1.length; i++) {
                    var src = arr1[i].match(srcReg);
                    // var src = srcReg.exec(arr1[i])
                    if (src[1]) {
                        tt.push(src[1].substring(0, src[1].indexOf('.')))
                    }
                    for (var tt1 = [], i1 = 0; i1 < tt.length; i1++) {
                        for (var i2 = 0; i2 < emjoyAllGet.length; i2++) {
                            if (tt[i1] == i2) {
                                tt1.push(emjoyAllGet[i2 - 1])
                            }
                        }
                    }
                }
                var result = page4Table2saySomething.match(/<img.*?(?:>|\/>)/g);
                for (var i = 0; i < result.length; i++) {
                    page4Table2saySomething = page4Table2saySomething.replace(result[i], tt1[i])
                }
            }
            if (page4Table2saySomething1 == '') {

            } else {
                if (arr2 == null) {
                } else {
                    var tt = []
                    for (var i = 0; i < arr2.length; i++) {
                        var src1 = arr2[i].match(srcReg);
                        // var src = srcReg.exec(arr1[i])
                        if (src1[1]) {
                            tt.push(src1[1].substring(0, src1[1].indexOf('.')))
                        }
                        for (var tt11 = [], i1 = 0; i1 < tt.length; i1++) {
                            for (var i2 = 0; i2 < emjoyAllGet.length; i2++) {
                                if (tt[i1] == i2) {
                                    tt11.push(emjoyAllGet[i2 - 1])
                                }
                            }
                        }
                    }
                    var result1 = page4Table2saySomething1.match(/<img.*?(?:>|\/>)/g);
                    for (var i = 0; i < result1.length; i++) {
                        page4Table2saySomething1 = page4Table2saySomething1.replace(result1[i], tt1[i])
                    }
                }
            }
            var oooo = page4Table2saySomething.replace(/<\/div>/g, "");
            var oooo1 = oooo.replace(/<br>/g, "");
            var oooo2 = oooo1.replace(/<div>/g, "<br>");
            var oooo1o = page4Table2saySomething1.replace(/<\/div>/g, "");
            var oooo11 = oooo1o.replace(/<br>/g, "");
            var oooo21 = oooo11.replace(/<div>/g, "<br>");
            sendObj.append('content', oooo2);
            sendObj.append('devices', JSON.stringify(arr));
            sendObj.append('interval', $scope.page4Table2timeInterval);
            sendObj.append('msg', oooo21);
            sendObj.append('number', JSON.stringify($scope.operate));
            sendObj.append('tag', $scope.aTag);
            sendObj.append('random', $scope.daluan);
            sendObj.append('mustNumber', JSON.stringify($scope.mustChoose1));
            sendObj.append('randomNumber', JSON.stringify($scope.unMChoose));
            $http({
                method: 'POST',
                url: $rootScope.link + "/operate/sendMoments",
                data: sendObj,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (response) {
                //上传成功的操作
                if (response.code == 200) {
                    $.Tupload1.init1({
                        title1: "",
                        fileNum1: 9, // 上传文件数量
                        divId1: "T_upload1", // div  id
                        accept1: "image/jpeg,image/x-png", // 上传文件的类型
                        onSuccess1: function (data, i) {
                        },
                        onDelete1: function (i) {
                        }
                    });
                    arrFile1 = []
                    $scope.mustChoose = [];
                    $scope.unMChoose = [];
                    $(".page4-emjoy24").html('');
                    $(".page4-emjoy31").html('');
                    $('.canuserq1').parent().parent().parent().parent().find('.page4CelueB').attr('disabled', 'disabled').css('background', '#a6a6a6');
                    $('.canuserq1').prop('checked', function () {
                        return false
                    }).parent().removeClass('on').pro
                    $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;发朋友圈任务添加成功');
                    setTimeout(function () {
                        $('.page1-alert-waring').hide(300)
                    }, 2000)

                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
                        if (data.code == 200) {
                            $rootScope.taskList = data.data;
                            $rootScope.taskAll = true;
                            $rootScope.taskDoing = false;
                            $rootScope.taskWait = false;
                            $rootScope.taskDown = false;
                            $rootScope.newBell = true;
                        } else {
                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                            setTimeout(function () {
                                $('.page1-alert-small-danger').hide(300)
                            }, 2000)
                        }
                    });
                } else {
                    $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;发朋友圈任务添加失败，请重试并检查设备连接');
                    setTimeout(function () {
                        $('.page1-alert-danger').hide(300)
                    }, 2000)
                }
            });
        }

    };
    /*--------------------------------------发朋友圈B完结----------------------------------------------------------*/

    /*--------------------------------------发朋友圈完结----------------------------------------------------------*/
    $scope.WriteNums = 1;
    $scope.page4Table4minTime = 1;
    $scope.page4Table4maxTime = 10;
    $scope.page4Table4SendAll1 = function () {
        for (var i = 0, arr = []; i < $('.page17-wx-input').length; i++) {
            if ($('.page17-wx-input').eq(i).prop('checked')) {
                arr.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
            }
        }
        if (arr.length == 0) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择并勾选需要进行朋友圈点赞的设备');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)

        } else {
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

                    $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;朋友圈点赞任务添加成功');
                    setTimeout(function () {
                        $('.page1-alert-waring').hide(300)
                    }, 2000)

                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
                        if (data.code == 200) {
                            $rootScope.taskList = data.data;
                            $rootScope.taskAll = true;
                            $rootScope.taskDoing = false;
                            $rootScope.taskWait = false;
                            $rootScope.taskDown = false;
                            $rootScope.newBell = true;
                        } else {
                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                            setTimeout(function () {
                                $('.page1-alert-small-danger').hide(300)
                            }, 2000)

                        }
                    });
                } else {
                    $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;朋友圈点赞任务添加失败，请重试并检查设备连接');
                    setTimeout(function () {
                        $('.page1-alert-danger').hide(300)
                    }, 2000)
                }
            });
        }
    };

    /*--------------------------------------朋友圈点赞完结----------------------------------------------------------*/
    $scope.mainName = ''
    $scope.mainNumber = ''
    $scope.minTimeQuan = 1
    $scope.maxTimeQuan = 10
    var selectValQuan = ''
    /*------选择确定朋友圈位置方式------*/
    $('.clickSelectQuan').change(function () {
        selectValQuan = $(this).val();
        if (selectValQuan == 0) {
            $('.page33-select-input').show();
            $('.page33-select-input').html('');
            $('.Quanquan').hide()
            $scope.mainNumber = ''
        } else {
            $('.page33-select-input').hide();
            $('.page33-select-input').html('');
            $('.Quanquan').show()
            $scope.mainName = '';
        }
    })
    /*------切换设备更新好友列表------*/

    $('.selectQuan').change(function () {
        $rootScope.sendValuePp1 = undefined
        $scope.checkPhone = $(this).val();
        $http.get($rootScope.link + '/operate/getContact?devices=' + $scope.checkPhone + '&pageNo=1&pageSize=2000').success(function (data) {
            if (data.code == 200) {
                if (data.data.content == '') {
                    $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;无法获取到好友列表，请前往好友管理进行好友刷新');
                    setTimeout(function () {
                        $('.page1-alert-small-danger').hide(300)
                    }, 2000)
                }
                $scope.WxListbiubiu = data.data.content;
            } else {
            }
        });
    })

    /*------确认转发朋友圈------*/
    $scope.page3TableSendAll1 = function () {
        var arr2 = []
        var arr3 = ''
        for (var i = 0, arr1 = []; i < $('.page17-wx-input').length; i++) {
            if ($('.page17-wx-input').eq(i).prop('checked')) {
                arr1.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
                if (i <= 4) {
                    arr2.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
                }
            }
        }
        if ($rootScope.sendValuePp1 == undefined) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择朋友圈所属好友');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)

        } else if ($scope.mainName == '' && $scope.mainNumber == '') {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请提供目标朋友圈所在位置');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else if (arr1.length == 0) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择并勾选需要转发朋友圈的五台设备');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else {
            if (arr1.length > 5) {
                arr3 = arr2
            } else {
                arr3 = arr1
            }
            var sendObj = new FormData();
            sendObj.append('forwardDevices', JSON.stringify(arr3));
            sendObj.append('msg', $scope.mainName);
            sendObj.append('appoint', $scope.mainNumber);
            sendObj.append('devices', $scope.checkPhone);
            // sendObj.append('strategy', $scope.addPeople);
            sendObj.append('friendId', $rootScope.sendValuePp1);
            // sendObj.append('contactList', JSON.stringify($scope.assList));
            $http({
                method: 'POST',
                url: $rootScope.link + "/operate/frowardMoments",
                data: sendObj,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (response) {
                //上传成功的操作
                if (response.code == 200) {
                    $scope.sayName = ''
                    $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;转发朋友圈任务添加成功');
                    setTimeout(function () {
                        $('.page1-alert-waring').hide(300)
                    }, 2000)
                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
                        if (data.code == 200) {
                            $rootScope.taskList = data.data;
                            $rootScope.taskAll = true;
                            $rootScope.taskDoing = false;
                            $rootScope.taskWait = false;
                            $rootScope.taskDown = false;
                            $rootScope.newBell = true;
                        } else {
                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                            setTimeout(function () {
                                $('.page1-alert-small-danger').hide(300)
                            }, 2000)
                        }
                    });
                } else {
                    $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;转发朋友圈任务添加失败');
                    setTimeout(function () {
                        $('.page1-alert-danger').hide(300)
                    }, 2000)
                }
            });
        }
    }


    /*--------------------------------------转发朋友圈完结----------------------------------------------------------*/
    $scope.page4table7sayName = ''
    $scope.page4table7SendAll = function () {
        for (var i = 0, arr1 = []; i < $('.page17-wx-input').length; i++) {
            if ($('.page17-wx-input').eq(i).prop('checked')) {
                arr1.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
            }
        }
        if (arr1.length == 0) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择并勾选需要进行关注公众号任务的设备');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else if ($scope.page4table7sayName == '') {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请按照固定格式正确输入公众号名称');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        }
        else {
            var arr2 = []
            arr2.push($scope.page4table7sayName.split("，"))
            var jsonTwo = {
                "publicnumberList": arr2[0],
                "devices": arr1
            }
            $http({
                method: 'POST',
                url: $rootScope.link + "/wechatPlus/addpublicnumber",
                data: jsonTwo,
                headers: {'Content-Type': undefined},
            }).success(function (response) {
                //上传成功的操作
                if (response.code == 200) {
                    $scope.page4table7sayName = ''
                    $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;关注公众号任务添加成功');
                    setTimeout(function () {
                        $('.page1-alert-waring').hide(300)
                    }, 2000)
                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
                        if (data.code == 200) {
                            $rootScope.taskList = data.data;
                            $rootScope.taskAll = true;
                            $rootScope.taskDoing = false;
                            $rootScope.taskWait = false;
                            $rootScope.taskDown = false;
                            $rootScope.newBell = true;
                        } else {
                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                            setTimeout(function () {
                                $('.page1-alert-small-danger').hide(300)
                            }, 2000)
                        }
                    });
                } else {
                    $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;关注公众号任务添加失败，请重试并检查设备连接');
                    setTimeout(function () {
                        $('.page1-alert-danger').hide(300)
                    }, 2000)
                }
            });
        }
    };


    /*--------------------------------------关注公众号完结----------------------------------------------------------*/
    var selectVal10 = 1;
    $scope.page4table10maxTime = 10;
    $scope.page4table10minTime = 1
    $scope.upFile5 = ''
    $('.upText5').hide()
    $('.clickSelect10').change(function () {
        selectVal10 = $(this).val();
        if (selectVal10 == 1) {
            $('.page3-qingli-Say').show();
            $('.page4-emjoy10').html('');

            $('.clickAddText10').hide()
            // $scope.saySomething = '您好！很高兴认识您！';
            $scope.upFile5 = ''
            $('.upText5').hide()
            $('.upfiler5').val('')
            $('.exselTextGray5').html('0kb')
            $('.exselTextGra5').html('无文件')
        } else {
            $('.page3-qingli-Say').hide();
            $('.clickAddText10').show();
            $('.page4-emjoy10').html('');
        }
    })
    $scope.deleteContent5 = function () {

        $scope.upFile5 = ''
        $('.upfiler5').val('')
        $('.exselTextGray5').html('0kb')
        $('.exselTextGra5').html('无文件')
    }
    $scope.page4Table10SendAll1 = function () {
        var page4table10saying = $(".page4-emjoy10").html();
        for (var i = 0, arr = []; i < $('.page17-wx-input').length; i++) {
            if ($('.page17-wx-input').eq(i).prop('checked')) {
                arr.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
            }
        }
        if (arr.length == 0) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择并勾选需要进行清理僵尸粉任务的设备');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else if (page4table10saying.length == 0 && typeof($scope.upFile) == "string") {
            alert('请输入打招呼用语或选择话术文件！');
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请输入打招呼用语或选择话术文件');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else {
            var reger = /<img.*?(?:>|\/>)/g;
            var srcReg = /\/([^\/]*?\.gif)/i;
            var arr1 = page4table10saying.match(reger)
            if (arr1 == null) {
            } else {
                var tt = []
                for (var i = 0; i < arr1.length; i++) {
                    var src = arr1[i].match(srcReg);
                    // var src = srcReg.exec(arr1[i])
                    if (src[1]) {
                        tt.push(src[1].substring(0, src[1].indexOf('.')))
                    }
                    for (var tt1 = [], i1 = 0; i1 < tt.length; i1++) {
                        for (var i2 = 0; i2 < emjoyAllGet.length; i2++) {
                            if (tt[i1] == i2) {
                                tt1.push(emjoyAllGet[i2 - 1])
                            }
                        }
                    }
                }
                var result = page4table10saying.match(/<img.*?(?:>|\/>)/g);
                for (var i = 0; i < result.length; i++) {
                    page4table10saying = page4table10saying.replace(result[i], tt1[i])
                }
            }
            var oooo = page4table10saying.replace(/<\/div>/g, "");
            var oooo1 = oooo.replace(/<br>/g, "");
            var oooo2 = oooo1.replace(/<div>/g, "<br>");
            var sendObj = new FormData();
            sendObj.append('msg', oooo2);
            sendObj.append('devices', JSON.stringify(arr));
            sendObj.append('file', $scope.upFile5);
            sendObj.append('maxInterval', $scope.page4table10maxTime);
            sendObj.append('minInterval', $scope.page4table10minTime);
            $http({
                method: 'POST',
                url: $rootScope.link + "/operate/clearZombieFan",
                data: sendObj,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (response) {
                //上传成功的操作
                if (response.code == 200) {

                    $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;清理僵尸粉任务添加成功');
                    setTimeout(function () {
                        $('.page1-alert-waring').hide(300)
                    }, 2000)
                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
                        if (data.code == 200) {
                            $rootScope.taskList = data.data;
                            $rootScope.taskAll = true;
                            $rootScope.taskDoing = false;
                            $rootScope.taskWait = false;
                            $rootScope.taskDown = false;
                            $rootScope.newBell = true;
                        } else {
                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                            setTimeout(function () {
                                $('.page1-alert-small-danger').hide(300)
                            }, 2000)
                        }
                    });
                } else {
                    $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;清理僵尸粉任务添加失败，请重试并检查设备连接');
                    setTimeout(function () {
                        $('.page1-alert-danger').hide(300)
                    }, 2000)
                }
            });
        }
    };

    /*--------------------------------------清理僵尸粉完结----------------------------------------------------------*/
    $scope.page4table11maxTime = 10;
    $scope.page4table11minTime = 1;
    $scope.page4Table11SendAll1 = function () {
        for (var i = 0, arr = []; i < $('.page17-wx-input').length; i++) {
            if ($('.page17-wx-input').eq(i).prop('checked')) {
                arr.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
            }
        }
        if (arr.length == 0) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择并勾选需要进行操作的设备');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else {
            var sendObj = new FormData();
            sendObj.append('devices', JSON.stringify(arr));
            // sendObj.append('interval', $scope.timeInterval);
            sendObj.append('maxInterval', $scope.page4table11maxTime);
            sendObj.append('minInterval', $scope.page4table11minTime);
            $http({
                method: 'POST',
                url: $rootScope.link + "/wechatPlus/receiveRequest",
                data: sendObj,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (response) {
                //上传成功的操作
                if (response.code == 200) {

                    $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;好友管理请求任务添加成功');
                    setTimeout(function () {
                        $('.page1-alert-waring').hide(300)
                    }, 2000)
                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
                        if (data.code == 200) {
                            $rootScope.taskList = data.data;
                            $rootScope.taskAll = true;
                            $rootScope.taskDoing = false;
                            $rootScope.taskWait = false;
                            $rootScope.taskDown = false;
                            $rootScope.newBell = true;
                        } else {

                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                            setTimeout(function () {
                                $('.page1-alert-small-danger').hide(300)
                            }, 2000)
                        }
                    });
                } else {
                    $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;好友管理请求任务添加失败，请重试并检查设备连接');
                    setTimeout(function () {
                        $('.page1-alert-danger').hide(300)
                    }, 2000)
                }
            });
        }
    };
    /*--------------------------------------好友请求管理完结----------------------------------------------------------*/
    $scope.page4Table12SendAll1 = function () {
        $scope.sendObj = new FormData();
        $scope.sendObj.append('file', arrFile3[0]);
        for (var i = 0, arr = []; i < $('.page17-wx-input').length; i++) {
            if ($('.page17-wx-input').eq(i).prop('checked')) {
                arr.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
            }
        }
        if (arr == 0) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择并勾选需要进行扫码进群的设备');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else if (arrFile3 == []) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择进群二维码');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else {
            var jsonOne = {'devices': arr}
            $scope.sendObj.append('json', JSON.stringify(jsonOne));
            $http({
                method: 'POST',
                url: $rootScope.link + "/wechatPlus/addgroupfrompicture",
                data: $scope.sendObj,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (response) {
                //上传成功的操作
                if (response.code == 200) {
                    $.Tupload2.init2({
                        title2: "",
                        fileNum2: 1, // 上传文件数量
                        divId2: "T_upload2", // div  id
                        accept2: "image/jpeg,image/x-png", // 上传文件的类型
                        onSuccess2: function (data, i) {
                        },
                        onDelete2: function (i) {
                        }
                    });
                    arrFile3 = []
                    $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;扫码进群任务添加成功');
                    setTimeout(function () {
                        $('.page1-alert-waring').hide(300)
                    }, 2000)
                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
                        if (data.code == 200) {
                            $rootScope.taskList = data.data;
                            $rootScope.taskAll = true;
                            $rootScope.taskDoing = false;
                            $rootScope.taskWait = false;
                            $rootScope.taskDown = false;
                            $rootScope.newBell = true;
                        } else {
                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                            setTimeout(function () {
                                $('.page1-alert-small-danger').hide(300)
                            }, 2000)
                        }
                    });
                } else {
                    $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;扫码进群任务添加失败，请重试并检查设备连接');
                    setTimeout(function () {
                        $('.page1-alert-danger').hide(300)
                    }, 2000)
                }
            });
        }

    };
    /*--------------------------------------扫码进群部分完结----------------------------------------------------------*/
}
]);

app.controller('page38C', ["$rootScope", "$scope", "$http", function ($rootScope, $scope, $http) {
    $rootScope.getAllFalse();
    $rootScope.initOver = true;
    $rootScope.activeThirtyEight = true;
    $rootScope.navPartThree = true;
    $rootScope.isScreenPage = false;
    $scope.renwu1 = true;
    $scope.renwu2 = false;
    $scope.renwu3 = false;
    $scope.renwu4 = false;
    $scope.renwu5 = false;
    $scope.ShowDatas1 = false;
    $scope.ShowDatas2 = false;
    $scope.ShowDatas3 = false;
    $scope.ShowDatasza1 = false
    $scope.ShowDatasza2 = false
    $scope.ShowDatasza3 = false
    $scope.sweepBoxOneTwo1 = false;
    /*------------获取在线设备------------*/
    $http.get($rootScope.link + '/group/getGroupDataByStatus').success(function (data) {
        if (data.code == 200) {
            $scope.hhalk=[]
            for (var a = 0; a < data.data.length; a++) {
                if(data.data[a].deviceVos.length==0){
                }else {
                    for (var i=0;i<data.data[a].deviceVos.length;i++){
                        $scope.hhalk.push(data.data[a].deviceVos[i].device)
                    }
                }

            }
            $scope.hhalk1= $scope.hhalk.length
        } else {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        }
    });
    $scope.logout=function () {
        $http.get($rootScope.link + '/logout').success(function (data) {
            if(data.code==200){
                window.location.href='http://'+window.location.host+'/wgcs/#/login'
            }else {
                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;注销登录失败');
                setTimeout(function () {
                    $('.page1-alert-small-danger').hide(300)
                }, 2000)
            }
        })
    }
    $scope.couldSave = function (rank, rank1) {
        // if (rank == "微信进群自动加好友" || rank == "微信添加附近的人" || rank == "微信通讯录加人" || rank == "微信精准加人") {
        //     return 'cs';
        // }
        if (rank1 == -1) {
            return 'ccsss';
        } else if (rank1 == 3) {
        } else {
            return 'ccsss';
        }
    };
    $scope.couldSavev1 = function (rank, rank1) {
        // if (rank == "微信进群自动加好友" || rank == "微信添加附近的人" || rank == "微信通讯录加人" || rank == "微信精准加人") {
        //     return 'cs';
        // }
        if (rank1 == -1) {
            return true;
        } else if (rank1 == 3) {
        } else {
            return true;
        }
    };
    $scope.couldSave1 = function (rank, status) {
        if (status == -1 || status == 3) {
            return 'ccsss';
        } else {
            if (rank != "微信进群自动加好友" && rank != "微信添加附近的人" && rank != "微信通讯录加人" && rank != "微信精准加人") {
                return 'ccsss';
            }
        }
    };
    $scope.couldSave1v2 = function (rank, status) {
        if (status == -1 || status == 3) {
            return true;
        } else {
            if (rank != "微信进群自动加好友" && rank != "微信添加附近的人" && rank != "微信通讯录加人" && rank != "微信精准加人") {
                return true;
            }
        }
    };
    $scope.couldSave1v3 = function (status) {
        if (status == -1) {
            return true;
        } else {
            return false;

        }
    };
    $scope.couldSave1v4 = function (status) {
        if (status == -1) {
            return 'ccsss';
        } else {
        }
    };
    /*-------table切换-------*/
    $scope.TaskAllList = [];
    $scope.zhixing = [];
    $scope.dengdai = [];
    $scope.wancheng = [];
    $scope.shibai = [];
    $('.page2-title-button-but1').css({
        "background-color": "#2ABF9E",
        "color": "#fff"
    }).siblings().css({"background-color": "#fff", "color": "#2ABF9E"});
    $scope.tableSwitch = function (e) {
        if (e == 1) {
            $('.page3-div-checkbox1').attr('checked', false).parent().removeClass('on');
            $scope.renwu1 = true;
            $scope.renwu2 = false;
            $scope.renwu3 = false;
            $scope.renwu4 = false;
            $scope.renwu5 = false;
            $('.page2-title-button-but1').css({
                "background-color": "#2ABF9E",
                "color": "#fff"
            }).siblings().css({"background-color": "#fff", "color": "#2ABF9E"});
            $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([-1, 0, 1, 2, 3]) + '&pageNo=1&pageSize=13').success(function (data) {
                $scope.TaskAllList = data.data.content;
                $scope.page1InitDataLength = data.data.totalElements
                $('.page1-table-page').pagination({
                    isHide:true,
                    totalData: $scope.page1InitDataLength,
                    showData: 15,
                    coping: true,
                    count: 1,
                    callback: function (api) {
                        var data = {
                            page: api.getCurrent(),
                        };
                        $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([-1, 0, 1, 2, 3]) + '&pageNo=' + data.page + '&pageSize=13').success(function (data) {
                            if (data.code == 200) {
                                $scope.TaskAllList = data.data.content;
                                $scope.page1InitDataLength = data.data.totalElements
                            }
                        })
                    }

                })
            })

        } else if (e == 2) {
            $('.page3-div-checkbox2').attr('checked', false).parent().removeClass('on');
            $scope.renwu1 = false;
            $scope.renwu2 = true;
            $scope.renwu3 = false;
            $scope.renwu4 = false;
            $scope.renwu5 = false;
            $('.page2-title-button-but2').css({
                "background-color": "#2ABF9E",
                "color": "#fff"
            }).siblings().css({"background-color": "#fff", "color": "#2ABF9E"});

            $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([1]) + '&pageNo=1&pageSize=13').success(function (data) {
                if (data.code == 200) {
                    $scope.zhixing = data.data.content;
                    if (data.data.content.length == 0) {
                        $('.page1-table-page1').css('display', 'none')
                        $scope.zhixing1 = 0;
                    } else {
                        $scope.zhixing1 = data.data.totalElements;
                        $('.page1-table-page1').css('display', 'block')
                    }
                    $('.page1-table-page1').pagination({
                        isHide:true,
                        totalData: $scope.zhixing1,
                        showData: 15,
                        coping: true,
                        count: 1,
                        callback: function (api) {
                            var data = {
                                page: api.getCurrent(),
                            };
                            $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([1]) + '&pageNo=' + data.page + '&pageSize=13').success(function (data) {
                                if (data.code == 200) {
                                    $scope.zhixing = data.data.content;
                                    $scope.zhixing1 = data.data.totalElements;
                                }
                            })
                        }

                    })
                } else {
                    $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                    setTimeout(function () {
                        $('.page1-alert-small-danger').hide(300)
                    }, 2000)
                }


            });

        } else if (e == 3) {
            $('.page3-div-checkbox3').attr('checked', false).parent().removeClass('on');
            $scope.renwu1 = false;
            $scope.renwu2 = false;
            $scope.renwu3 = true;
            $scope.renwu4 = false;
            $scope.renwu5 = false;
            $('.page2-title-button-but3').css({
                "background-color": "#2ABF9E",
                "color": "#fff"
            }).siblings().css({"background-color": "#fff", "color": "#2ABF9E"});
            $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([0]) + '&pageNo=1&pageSize=13').success(function (data) {
                if (data.code == 200) {
                    if (data.data.content.length == 0) {
                        $scope.dengdai1 = 0;
                        $('.page1-table-page2').css('display', 'none')
                    } else {
                        $scope.dengdai1 = data.data.totalElements;
                        $('.page1-table-page2').css('display', 'block')
                    }
                    $scope.dengdai = data.data.content;
                    $('.page1-table-page2').pagination({
                        isHide:true,
                        totalData: $scope.dengdai1,
                        showData: 15,
                        coping: true,
                        count: 1,
                        callback: function (api) {
                            var data = {
                                page: api.getCurrent(),
                            };
                            $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([0]) + '&pageNo=' + data.page + '&pageSize=13').success(function (data) {
                                if (data.code == 200) {
                                    $scope.dengdai = data.data.content;
                                    $scope.dengdai1 = data.data.totalElements;
                                }
                            })
                        }

                    })
                } else {
                    $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                    setTimeout(function () {
                        $('.page1-alert-small-danger').hide(300)
                    }, 2000)
                }


            });
        }
        else if (e == 4) {
            $('.page3-div-checkbox4').attr('checked', false).parent().removeClass('on');
            $scope.renwu1 = false;
            $scope.renwu2 = false;
            $scope.renwu3 = false;
            $scope.renwu4 = true;
            $scope.renwu5 = false;
            $('.page2-title-button-but4').css({
                "background-color": "#2ABF9E",
                "color": "#fff"
            }).siblings().css({"background-color": "#fff", "color": "#2ABF9E"});

            $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([2]) + '&pageNo=1&pageSize=13').success(function (data) {
                if (data.code == 200) {
                    if (data.data.length == 0) {
                        $scope.wancheng1 = 0;
                        $('.page1-table-page3').css('display', 'none')
                    } else {
                        $scope.wancheng1 = data.data.totalElements;
                        $('.page1-table-page3').css('display', 'block')
                    }
                    $scope.wancheng = data.data.content;
                    $('.page1-table-page3').pagination({
                        isHide:true,
                        totalData: $scope.wancheng1,
                        showData: 15,
                        coping: true,
                        count: 1,
                        callback: function (api) {
                            var data = {
                                page: api.getCurrent(),
                            };
                            $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([2]) + '&pageNo=' + data.page + '&pageSize=13').success(function (data) {
                                if (data.code == 200) {
                                    $scope.wancheng = data.data.content;
                                    $scope.wancheng1 = data.data.totalElements;
                                }
                            })
                        }

                    })
                } else {
                    $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                    setTimeout(function () {
                        $('.page1-alert-small-danger').hide(300)
                    }, 2000)
                }


            });
        } else {
            $('.page3-div-checkbox5').attr('checked', false).parent().removeClass('on');
            $scope.renwu1 = false;
            $scope.renwu2 = false;
            $scope.renwu3 = false;
            $scope.renwu4 = false;
            $scope.renwu5 = true;
            $('.page2-title-button-but5').css({
                "background-color": "#2ABF9E",
                "color": "#fff"
            }).siblings().css({"background-color": "#fff", "color": "#2ABF9E"});
            $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([-1, 3]) + '&pageNo=1&pageSize=13').success(function (data) {
                if (data.code == 200) {
                    if (data.data.content.length == 0) {
                        $scope.shibai1 = 0;
                        $('.page1-table-page4').css('display', 'none')
                    } else {
                        $scope.shibai1 = data.data.totalElements;
                        $('.page1-table-page4').css('display', 'block')
                    }
                    $scope.shibai = data.data.content;
                    $('.page1-table-page4').pagination({
                        isHide:true,
                        totalData: $scope.shibai1,
                        showData: 15,
                        coping: true,
                        count: 1,
                        callback: function (api) {
                            var data = {
                                page: api.getCurrent(),
                            };
                            $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([-1, 3]) + '&pageNo=' + data.page + '&pageSize=13').success(function (data) {
                                if (data.code == 200) {
                                    $scope.shibai = data.data.content;
                                    $scope.shibai1 = data.data.totalElements;
                                }
                            })
                        }

                    })
                } else {
                    $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                    setTimeout(function () {
                        $('.page1-alert-small-danger').hide(300)
                    }, 2000)
                }


            });
        }
    }
    /*-------模拟数据-------*/
    /*-------删除单个任务-------*/
    $scope.removeTask = function (e, q) {
        $http.get($rootScope.link + '/task/delTask?id=' + e + '').success(function (data) {
            if (data.code == 200) {
                $('.page3-div-checkbox1').attr('checked', false).parent().removeClass('on');
                if (q == 1) {
                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([-1, 0, 1, 2, 3]) + '&pageNo=1&pageSize=13').success(function (data) {
                        $scope.TaskAllList = data.data.content;
                        $scope.page1InitDataLength = data.data.totalElements
                        $('.page1-table-page').pagination({
                            isHide:true,
                            totalData: $scope.page1InitDataLength,
                            showData: 15,
                            coping: true,
                            count: 1,
                            callback: function (api) {
                                var data = {
                                    page: api.getCurrent(),
                                };
                                $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([-1, 0, 1, 2, 3]) + '&pageNo=' + data.page + '&pageSize=13').success(function (data) {
                                    if (data.code == 200) {
                                        $scope.TaskAllList = data.data.content;
                                        $scope.page1InitDataLength = data.data.totalElements
                                    }
                                })
                            }

                        })
                    })
                }
                else if (q == 2) {
                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([1]) + '&pageNo=1&pageSize=13').success(function (data) {
                        if (data.code == 200) {
                            $scope.zhixing = data.data.content;
                            if (data.data.content.length == 0) {
                                $('.page1-table-page1').css('display', 'none')
                                $scope.zhixing1 = 0;
                            } else {
                                $scope.zhixing1 = data.data.totalElements;
                                $('.page1-table-page1').css('display', 'block')
                            }
                            $('.page1-table-page1').pagination({
                                isHide:true,
                                totalData: $scope.zhixing1,
                                showData: 15,
                                coping: true,
                                count: 1,
                                callback: function (api) {
                                    var data = {
                                        page: api.getCurrent(),
                                    };
                                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([1]) + '&pageNo=' + data.page + '&pageSize=13').success(function (data) {
                                        if (data.code == 200) {
                                            $scope.zhixing = data.data.content;
                                            $scope.zhixing1 = data.data.totalElements;
                                        }
                                    })
                                }

                            })
                        } else {
                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                            setTimeout(function () {
                                $('.page1-alert-small-danger').hide(300)
                            }, 2000)
                        }


                    });
                } else if (q == 3) {
                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([0]) + '&pageNo=1&pageSize=13').success(function (data) {
                        if (data.code == 200) {
                            if (data.data.content.length == 0) {
                                $scope.dengdai1 = 0;
                                $('.page1-table-page2').css('display', 'none')
                            } else {
                                $scope.dengdai1 = data.data.totalElements;
                                $('.page1-table-page2').css('display', 'block')
                            }
                            $scope.dengdai = data.data.content;
                            $('.page1-table-page2').pagination({
                                isHide:true,
                                totalData: $scope.dengdai1,
                                showData: 15,
                                coping: true,
                                count: 1,
                                callback: function (api) {
                                    var data = {
                                        page: api.getCurrent(),
                                    };
                                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([0]) + '&pageNo=' + data.page + '&pageSize=13').success(function (data) {
                                        if (data.code == 200) {
                                            $scope.dengdai = data.data.content;
                                            $scope.dengdai1 = data.data.totalElements;
                                        }
                                    })
                                }

                            })
                        } else {
                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                            setTimeout(function () {
                                $('.page1-alert-small-danger').hide(300)
                            }, 2000)
                        }


                    });
                }
                else if (q == 4) {
                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([2]) + '&pageNo=1&pageSize=13').success(function (data) {
                        if (data.code == 200) {
                            if (data.data.length == 0) {
                                $scope.wancheng1 = 0;
                                $('.page1-table-page3').css('display', 'none')
                            } else {
                                $scope.wancheng1 = data.data.totalElements;
                                $('.page1-table-page3').css('display', 'block')
                            }
                            $scope.wancheng = data.data.content;
                            $('.page1-table-page3').pagination({
                                isHide:true,
                                totalData: $scope.wancheng1,
                                showData: 15,
                                coping: true,
                                count: 1,
                                callback: function (api) {
                                    var data = {
                                        page: api.getCurrent(),
                                    };
                                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([2]) + '&pageNo=' + data.page + '&pageSize=13').success(function (data) {
                                        if (data.code == 200) {
                                            $scope.wancheng = data.data.content;
                                            $scope.wancheng1 = data.data.totalElements;
                                        }
                                    })
                                }

                            })
                        } else {
                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                            setTimeout(function () {
                                $('.page1-alert-small-danger').hide(300)
                            }, 2000)
                        }


                    });
                } else {
                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([-1, 3]) + '&pageNo=1&pageSize=13').success(function (data) {
                        if (data.code == 200) {
                            if (data.data.length == 0) {
                                $scope.shibai1 = 0;
                                $('.page1-table-page4').css('display', 'none')
                            } else {
                                $scope.shibai1 = data.data.totalElements;
                                $('.page1-table-page4').css('display', 'block')
                            }
                            $scope.shibai = data.data.content;
                            $('.page1-table-page4').pagination({
                                isHide:true,
                                totalData: $scope.shibai1,
                                showData: 15,
                                coping: true,
                                count: 1,
                                callback: function (api) {
                                    var data = {
                                        page: api.getCurrent(),
                                    };
                                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([-1, 3]) + '&pageNo=' + data.page + '&pageSize=13').success(function (data) {
                                        if (data.code == 200) {
                                            $scope.shibai = data.data.content;
                                            $scope.shibai1 = data.data.totalElements;
                                        }
                                    })
                                }

                            })
                        } else {
                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                            setTimeout(function () {
                                $('.page1-alert-small-danger').hide(300)
                            }, 2000)
                        }


                    });
                }
                $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;删除任务成功');
                setTimeout(function () {
                    $('.page1-alert-waring').hide(300)
                }, 2000)
            } else {
                $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;删除任务失败，请重试并检查设备连接');
                setTimeout(function () {
                    $('.page1-alert-danger').hide(300)
                }, 2000)
            }
        });
    }

    $scope.sweepBoxOneTwo3 = function () {
        $scope.sweepBoxOneTwo1 = false
    }
    /*-------确认删除所有任务-------*/
    $scope.sweepBoxOneTwo2 = function () {
        var arr = [];
        for (var i = 0, arr1 = []; i < $('.page1-onChecked1').length; i++) {
            if ($('.page1-onChecked1').eq(i).prop('checked')) {
                arr1.push($('.page1-onChecked1').eq(i).attr('title'));
            }
        }
        for (var i = 0, arr2 = []; i < $('.page1-onChecked2').length; i++) {
            if ($('.page1-onChecked2').eq(i).prop('checked')) {
                arr2.push($('.page1-onChecked2').eq(i).attr('title'));
            }
        }
        for (var i = 0, arr3 = []; i < $('.page1-onChecked3').length; i++) {
            if ($('.page1-onChecked3').eq(i).prop('checked')) {
                arr3.push($('.page1-onChecked3').eq(i).attr('title'));
            }
        }
        if ($scope.qurenRemove == 1) {
            arr = arr1
        } else if ($scope.qurenRemove == 2) {
            arr = arr2
        } else if ($scope.qurenRemove == 3) {
            arr = arr3
        }
        if (arr.length == 0) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择并勾选需要删除的任务');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else {
            var sendObj = new FormData()
            sendObj.append('idList', JSON.stringify(arr))
            $http({
                method: 'POST',
                url: $rootScope.link + "/task/delTasks",
                data: sendObj,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (data) {
                if (data.code == 200) {
                    $scope.sweepBoxOneTwo1 = false;
                    $('.page3-div-checkbox1').attr('checked', false).parent().removeClass('on');
                    if ($scope.qurenRemove == 1) {
                        $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([-1, 0, 1, 2, 3]) + '&pageNo=1&pageSize=13').success(function (data) {
                            if (data.code == 200) {
                                $('.page3-div-checkbox1').attr('checked', false).parent().removeClass('on');
                                $scope.TaskAllList = data.data.content;
                                $scope.page1InitDataLength = data.data.totalElements
                                $('.page1-table-page').pagination({
                                    isHide:true,
                                    totalData: $scope.page1InitDataLength,
                                    showData: 15,
                                    coping: true,
                                    count: 1,
                                    callback: function (api) {
                                        var data = {
                                            page: api.getCurrent(),
                                        };
                                        $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([-1, 0, 1, 2, 3]) + '&pageNo=' + data.page + '&pageSize=13').success(function (data) {
                                            if (data.code == 200) {
                                                $scope.TaskAllList = data.data.content;
                                                $scope.page1InitDataLength = data.data.totalElements
                                            }
                                        })
                                    }

                                })
                            } else {
                                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                                setTimeout(function () {
                                    $('.page1-alert-small-danger').hide(300)
                                }, 2000)
                            }

                        })
                    } else if ($scope.qurenRemove == 2) {
                        $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([1]) + '&pageNo=1&pageSize=13').success(function (data) {
                            if (data.code == 200) {
                                $('.page3-div-checkbox2').attr('checked', false).parent().removeClass('on');
                                $scope.zhixing = data.data.content;
                                if (data.data.content.length == 0) {
                                    $('.page1-table-page1').css('display', 'none')
                                    $scope.zhixing1 = 0;
                                } else {
                                    $scope.zhixing1 = data.data.totalElements;
                                    $('.page1-table-page1').css('display', 'block')
                                }
                                $('.page1-table-page1').pagination({
                                    isHide:true,
                                    totalData: $scope.zhixing1,
                                    showData: 15,
                                    coping: true,
                                    count: 1,
                                    callback: function (api) {
                                        var data = {
                                            page: api.getCurrent(),
                                        };
                                        $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([1]) + '&pageNo=' + data.page + '&pageSize=13').success(function (data) {
                                            if (data.code == 200) {
                                                $scope.zhixing = data.data.content;
                                                $scope.zhixing1 = data.data.totalElements;
                                            }
                                        })
                                    }

                                })
                            } else {
                                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                                setTimeout(function () {
                                    $('.page1-alert-small-danger').hide(300)
                                }, 2000)
                            }


                        });
                    } else if ($scope.qurenRemove == 3) {
                        $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([0]) + '&pageNo=1&pageSize=13').success(function (data) {
                            if (data.code == 200) {
                                $('.page3-div-checkbox3').attr('checked', false).parent().removeClass('on');
                                if (data.data.content.length == 0) {
                                    $scope.dengdai1 = 0;
                                    $('.page1-table-page2').css('display', 'none')
                                } else {
                                    $scope.dengdai1 = data.data.totalElements;
                                    $('.page1-table-page2').css('display', 'block')
                                }
                                $scope.dengdai = data.data.content;
                                $('.page1-table-page2').pagination({
                                    isHide:true,
                                    totalData: $scope.dengdai1,
                                    showData: 15,
                                    coping: true,
                                    count: 1,
                                    callback: function (api) {
                                        var data = {
                                            page: api.getCurrent(),
                                        };
                                        $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([0]) + '&pageNo=' + data.page + '&pageSize=13').success(function (data) {
                                            if (data.code == 200) {
                                                $scope.dengdai = data.data.content;
                                                $scope.dengdai1 = data.data.totalElements;
                                            }
                                        })
                                    }

                                })
                            } else {
                                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                                setTimeout(function () {
                                    $('.page1-alert-small-danger').hide(300)
                                }, 2000)
                            }


                        });
                    }
                    $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;批量删除任务成功');
                    setTimeout(function () {
                        $('.page1-alert-waring').hide(300)
                    }, 2000)
                } else {
                    $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;批量删除任务失败，请重试并检查设备连接');
                    setTimeout(function () {
                        $('.page1-alert-danger').hide(300)
                    }, 2000)
                }
            });
        }
    }
    $scope.removeAllTask1 = function (e) {
        var arr = [];
        if (e == 4) {
            for (var i = 0, arr1 = []; i < $('.page1-onChecked4').length; i++) {
                if ($('.page1-onChecked4').eq(i).prop('checked')) {
                    arr1.push($('.page1-onChecked4').eq(i).attr('title'));
                }
            }
            arr=arr1
        } else {
            for (var i = 0, arr2 = []; i < $('.page1-onChecked5').length; i++) {
                if ($('.page1-onChecked5').eq(i).prop('checked')) {
                    arr2.push($('.page1-onChecked5').eq(i).attr('title'));
                }
            }
            arr=arr2
        }
        if (arr.length == 0) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择并勾选需要删除的任务');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else {


            if (e == 1) {
                arr = arr1
            } else if (e == 2) {
                arr = arr2
            }
            var sendObj = new FormData()
            sendObj.append('idList', JSON.stringify(arr))
            $http({
                method: 'POST',
                url: $rootScope.link + "/task/delTasks",
                data: sendObj,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (data) {
                if (data.code == 200) {
                    $scope.sweepBoxOneTwo1 = false;
                    $('.page3-div-checkbox1').attr('checked', false).parent().removeClass('on');
                    if (e == 4) {
                        $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([2]) + '&pageNo=1&pageSize=13').success(function (data) {
                            if (data.code == 200) {
                                $('.page3-div-checkbox4').attr('checked', false).parent().removeClass('on');
                                if (data.data.length == 0) {
                                    $scope.wancheng1 = 0;
                                    $('.page1-table-page3').css('display', 'none')
                                } else {
                                    $scope.wancheng1 = data.data.totalElements;
                                    $('.page1-table-page3').css('display', 'block')
                                }
                                $scope.wancheng = data.data.content;
                                $('.page1-table-page3').pagination({
                                    isHide:true,
                                    totalData: $scope.wancheng1,
                                    showData: 15,
                                    coping: true,
                                    count: 1,
                                    callback: function (api) {
                                        var data = {
                                            page: api.getCurrent(),
                                        };
                                        $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([2]) + '&pageNo=' + data.page + '&pageSize=13').success(function (data) {
                                            if (data.code == 200) {
                                                $scope.wancheng = data.data.content;
                                                $scope.wancheng1 = data.data.totalElements;
                                            }
                                        })
                                    }

                                })
                            } else {
                                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                                setTimeout(function () {
                                    $('.page1-alert-small-danger').hide(300)
                                }, 2000)
                            }


                        });
                    }
                    else if (e == 5) {
                        $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([-1, 3]) + '&pageNo=1&pageSize=13').success(function (data) {
                            if (data.code == 200) {
                                $('.page3-div-checkbox5').attr('checked', false).parent().removeClass('on');
                                if (data.data.length == 0) {
                                    $scope.shibai1 = 0;
                                    $('.page1-table-page4').css('display', 'none')
                                } else {
                                    $scope.shibai1 = data.data.totalElements;
                                    $('.page1-table-page4').css('display', 'block')
                                }
                                $scope.shibai = data.data.content;
                                $('.page1-table-page4').pagination({
                                    isHide:true,
                                    totalData: $scope.shibai1,
                                    showData: 15,
                                    coping: true,
                                    count: 1,
                                    callback: function (api) {
                                        var data = {
                                            page: api.getCurrent(),
                                        };
                                        $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([-1, 3]) + '&pageNo=' + data.page + '&pageSize=13').success(function (data) {
                                            if (data.code == 200) {
                                                $scope.shibai = data.data.content;
                                                $scope.shibai1 = data.data.totalElements;
                                            }
                                        })
                                    }

                                })
                            } else {
                                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                                setTimeout(function () {
                                    $('.page1-alert-small-danger').hide(300)
                                }, 2000)
                            }


                        });
                    }

                    $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;批量删除任务成功');
                    setTimeout(function () {
                        $('.page1-alert-waring').hide(300)
                    }, 2000)
                } else {
                    $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;批量删除任务失败，请重试并检查设备连接');
                    setTimeout(function () {
                        $('.page1-alert-danger').hide(300)
                    }, 2000)
                }
            });
        }
    }

    /*-------删除全部任务-------*/
    $scope.removeAllTask = function (e) {
        $scope.qurenRemove = e;

        for (var i = 0, arr = []; i < $('.page1-onChecked').length; i++) {
            if ($('.page1-onChecked').eq(i).prop('checked')) {
                arr.push($('.page1-onChecked').eq(i).attr('title'));
            }
        }
        if (arr.length == 0) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择并勾选需要删除的任务');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else {
            $http.get($rootScope.link + '/task/checkTaskStatus?idList=' + JSON.stringify(arr) + '').success(function (data) {
                if (data.code == 200) {
                    if (data.data == false) {
                        $scope.sweepBoxOneTwo1 = true;
                    } else {
                        var arr = [];
                        for (var i = 0, arr1 = []; i < $('.page1-onChecked1').length; i++) {
                            if ($('.page1-onChecked1').eq(i).prop('checked')) {
                                arr1.push($('.page1-onChecked1').eq(i).attr('title'));
                            }
                        }
                        for (var i = 0, arr2 = []; i < $('.page1-onChecked2').length; i++) {
                            if ($('.page1-onChecked2').eq(i).prop('checked')) {
                                arr2.push($('.page1-onChecked2').eq(i).attr('title'));
                            }
                        }
                        for (var i = 0, arr3 = []; i < $('.page1-onChecked3').length; i++) {
                            if ($('.page1-onChecked3').eq(i).prop('checked')) {
                                arr3.push($('.page1-onChecked3').eq(i).attr('title'));
                            }
                        }
                        if ($scope.qurenRemove == 1) {
                            arr = arr1
                        } else if ($scope.qurenRemove == 2) {
                            arr = arr2
                        } else if ($scope.qurenRemove == 3) {
                            arr = arr3
                        }
                        $('.page3-div-checkbox1').attr('checked', false).parent().removeClass('on');
                        var sendObj = new FormData()
                        if ($scope.qurenRemove == 1) {
                            sendObj.append('idList', JSON.stringify(arr1))
                        } else if ($scope.qurenRemove == 2) {
                            sendObj.append('idList', JSON.stringify(arr2))
                        } else if ($scope.qurenRemove == 3) {
                            sendObj.append('idList', JSON.stringify(arr3))
                        }
                        $http({
                            method: 'POST',
                            url: $rootScope.link + "/task/delTasks",
                            data: sendObj,
                            headers: {'Content-Type': undefined},
                            transformRequest: angular.identity
                        }).success(function (data) {
                            if (data.code == 200) {
                                $scope.sweepBoxOneTwo1 = false;
                                if ($scope.qurenRemove == 1) {
                                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([-1, 0, 1, 2, 3]) + '&pageNo=1&pageSize=13').success(function (data) {
                                        if (data.code == 200) {
                                            $('.page3-div-checkbox1').attr('checked', false).parent().removeClass('on');
                                            $scope.TaskAllList = data.data.content;
                                            $scope.page1InitDataLength = data.data.totalElements
                                            $('.page1-table-page').pagination({
                                                isHide:true,
                                                totalData: $scope.page1InitDataLength,
                                                showData: 15,
                                                coping: true,
                                                count: 1,
                                                callback: function (api) {
                                                    var data = {
                                                        page: api.getCurrent(),
                                                    };
                                                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([-1, 0, 1, 2, 3]) + '&pageNo=' + data.page + '&pageSize=13').success(function (data) {
                                                        if (data.code == 200) {
                                                            $scope.TaskAllList = data.data.content;
                                                            $scope.page1InitDataLength = data.data.totalElements
                                                        }
                                                    })
                                                }

                                            })
                                        } else {
                                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                                            setTimeout(function () {
                                                $('.page1-alert-small-danger').hide(300)
                                            }, 2000)
                                        }

                                    })
                                }
                                else if ($scope.qurenRemove == 2) {
                                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([1]) + '&pageNo=1&pageSize=13').success(function (data) {
                                        if (data.code == 200) {
                                            $('.page3-div-checkbox2').attr('checked', false).parent().removeClass('on');
                                            $scope.zhixing = data.data.content;
                                            if (data.data.content.length == 0) {
                                                $('.page1-table-page1').css('display', 'none')
                                                $scope.zhixing1 = 0;
                                            } else {
                                                $scope.zhixing1 = data.data.totalElements;
                                                $('.page1-table-page1').css('display', 'block')
                                            }
                                            $('.page1-table-page1').pagination({
                                                isHide:true,
                                                totalData: $scope.zhixing1,
                                                showData: 15,
                                                coping: true,
                                                count: 1,
                                                callback: function (api) {
                                                    var data = {
                                                        page: api.getCurrent(),
                                                    };
                                                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([1]) + '&pageNo=' + data.page + '&pageSize=13').success(function (data) {
                                                        if (data.code == 200) {
                                                            $scope.zhixing = data.data.content;
                                                            $scope.zhixing1 = data.data.totalElements;
                                                        }
                                                    })
                                                }

                                            })
                                        } else {
                                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                                            setTimeout(function () {
                                                $('.page1-alert-small-danger').hide(300)
                                            }, 2000)
                                        }


                                    });
                                }
                                else if ($scope.qurenRemove == 3) {
                                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([0]) + '&pageNo=1&pageSize=13').success(function (data) {
                                        if (data.code == 200) {
                                            $('.page3-div-checkbox3').attr('checked', false).parent().removeClass('on');
                                            if (data.data.content.length == 0) {
                                                $scope.dengdai1 = 0;
                                                $('.page1-table-page2').css('display', 'none')
                                            } else {
                                                $scope.dengdai1 = data.data.totalElements;
                                                $('.page1-table-page2').css('display', 'block')
                                            }
                                            $scope.dengdai = data.data.content;
                                            $('.page1-table-page2').pagination({
                                                isHide:true,
                                                totalData: $scope.dengdai1,
                                                showData: 15,
                                                coping: true,
                                                count: 1,
                                                callback: function (api) {
                                                    var data = {
                                                        page: api.getCurrent(),
                                                    };
                                                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([0]) + '&pageNo=' + data.page + '&pageSize=13').success(function (data) {
                                                        if (data.code == 200) {
                                                            $scope.dengdai = data.data.content;
                                                            $scope.dengdai1 = data.data.totalElements;
                                                        }
                                                    })
                                                }

                                            })
                                        } else {
                                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                                            setTimeout(function () {
                                                $('.page1-alert-small-danger').hide(300)
                                            }, 2000)
                                        }


                                    });
                                }
                                $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;批量删除任务成功');
                                setTimeout(function () {
                                    $('.page1-alert-waring').hide(300)
                                }, 2000)
                            } else {
                                $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;批量删除任务失败，请重试并检查设备连接');
                                setTimeout(function () {
                                    $('.page1-alert-danger').hide(300)
                                }, 2000)
                            }
                        });
                    }
                } else {
                    $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                    setTimeout(function () {
                        $('.page1-alert-small-danger').hide(300)
                    }, 2000)
                }
            });

        }
    }

    /*-------点击弹出统计-------*/
    $scope.tongjiSsow = function (e, q) {
        if (e == '微信精准加人') {
            $scope.ShowDatasza2 = true;
            $scope.ShowDatasza1 = false;
            $http.get($rootScope.link + '/task/getTaskStatistics?taskId=' + q + '').success(function (data) {
            // $http.get('http://192.168.1.115:8080/wgcs/task/getTaskStatistics?taskId=' + q + '').success(function (data) {
                if(data.code==200){
                    $scope.moreError=data.data.successMsg;
                    $scope.moreErrorShow=data.data.status;
                }
            });

        } else {

            $scope.ShowDatasza1 = true;
            $scope.ShowDatasza2 = false;
            $http.get($rootScope.link + '/task/getTaskStatistics?taskId=' + q + '').success(function (data) {
                if(data.code==200){
                    $scope.page5mmp = data.data.scriptChName;
                    $scope.moreError=data.data.successMsg;
                    $scope.moreErrorShow=data.data.status;
                }
            });
        }
    }

    /*-------关闭统计-------*/
    $scope.page5Close = function () {
        $scope.ShowDatasza1 = false;
    }
    $scope.page5Close2 = function () {
        $scope.ShowDatasza2 = false;
    }
    $scope.page5Close3 = function (id) {
        $scope.ShowDatasza3 = false;
    }
    /*-------点击查看异常失败-------*/
    $scope.seeDatas = function (id) {
        $http.get($rootScope.link + '/task/getErrorTask?taskId=' + id).success(function (data) {
            if (data.code == 200) {
                $scope.ShowDatasza3 = true;
                $scope.TaskAllList3 = data.data;
            } else {
                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                setTimeout(function () {
                    $('.page1-alert-small-danger').hide(300)
                }, 2000)
            }
        });
    }
    $scope.pagelength = 0
    $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([-1, 0, 1, 2, 3]) + '&pageNo=1&pageSize=13').success(function (data) {
        $scope.TaskAllList = data.data.content;
        $scope.page1InitDataLength = data.data.totalElements
        $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([1]) + '&pageNo=1&pageSize=13').success(function (data) {
            if (data.code == 200) {
                $scope.zhixing1 = data.data.totalElements;
                $scope.zhixing = data.data.content;
            } else {
                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                setTimeout(function () {
                    $('.page1-alert-small-danger').hide(300)
                }, 2000)
            }

        });
        $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([0]) + '&pageNo=1&pageSize=13').success(function (data) {
            if (data.code == 200) {
                $scope.dengdai1 = data.data.totalElements;
                $scope.dengdai = data.data.content;
            } else {
                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                setTimeout(function () {
                    $('.page1-alert-small-danger').hide(300)
                }, 2000)
            }
        });
        $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([2]) + '&pageNo=1&pageSize=13').success(function (data) {
            if (data.code == 200) {
                $scope.wancheng1 = data.data.totalElements;
                $scope.wancheng = data.data.content;
            } else {
                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                setTimeout(function () {
                    $('.page1-alert-small-danger').hide(300)
                }, 2000)
            }
        });
        $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([-1, 3]) + '&pageNo=1&pageSize=13').success(function (data) {
            if (data.code == 200) {
                $scope.shibai1 = data.data.totalElements;
                $scope.shibai = data.data.content;
            } else {
                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                setTimeout(function () {
                    $('.page1-alert-small-danger').hide(300)
                }, 2000)
            }
        });
        $('.page1-table-page').pagination({
            isHide:true,
            totalData: $scope.page1InitDataLength,
            showData: 15,
            coping: true,
            count: 1,
            callback: function (api) {
                var data = {
                    page: api.getCurrent(),
                };
                $http.get($rootScope.link + '/task/getGroupTaskInit?status=' + JSON.stringify([-1, 0, 1, 2, 3]) + '&pageNo=' + data.page + '&pageSize=13').success(function (data) {
                    if (data.code == 200) {
                        $scope.TaskAllList = data.data.content;
                        $scope.page1InitDataLength = data.data.totalElements
                    }
                })
            }

        })
        // $http.get($rootScope.link + '/task/getGroupTaskInit?status=2').success(function (data) {
        //     if (data.code == 200) {
        //         $scope.wancheng1 = data.data.length;
        //         $scope.wancheng = data.data;
        //     } else {
        //         $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
        //         setTimeout(function () {
        //             $('.page1-alert-small-danger').hide(300)
        //         }, 2000)
        //     }
        // });
        // $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
        //     if (data.code == 200) {
        //         $scope.shibai1 = data.data.length;
        //         $scope.shibai = data.data;
        //     } else {
        //         $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
        //         setTimeout(function () {
        //             $('.page1-alert-small-danger').hide(300)
        //         }, 2000)
        //     }
        // });


    });
    $scope.isShow = function (s) {
        if (s == 3) {
            return true;
        }
    };
    $scope.taskOut = false;
    $scope.checkWrong = function (id) {
        $http.get($rootScope.link + '/task/getErrorTask?taskId=' + id).success(function (data) {
            if (data.code == 200) {
                $scope.taskOut = true;
                $scope.taskList = data.data;
            } else {
                alert(data.msg);
            }

        });
    };
    $scope.getTaskBack = function () {
        $scope.taskOut = false;
    };
}]);

app.controller('page39C', ["$rootScope", "$scope", "$http", "$timeout", function ($rootScope, $scope, $http, $timeout) {
    $rootScope.getAllFalse();
    $rootScope.initOver = true;
    $rootScope.activeThirtyNine = true;
    $rootScope.navPartThree = true;
    $rootScope.isScreenPage = false;
    $scope.outSideBox1 = true;
    $scope.outSideBox3 = false;
    $scope.outSideBox2 = false;
    $scope.maxTime = 10;
    $scope.addPeopleCount = 1;
    $scope.minTime = 1;
    $scope.upFile = ''
    $scope.clearll = 0;
    $scope.okState = [];
    $scope.okOver = [];
    $scope.noState = [];
    $scope.hhalk1=0;
    $scope.fvcMe = function (e) {
        $('.list_dd').stop();
        $(".list_dt").eq(e).parent().siblings("new-wx-group-list-li").removeAttr("id");
        if ($(".list_dt").eq(e).parent().attr("id") == "open") {
            $(".list_dt").eq(e).parent().removeAttr("id").find('i').css('background', ' url("images/offChecked.png")center no-repeat')
        } else {
            $(".list_dt").eq(e).parent().attr("id", "open").find('i').css('background', ' url("images/openChecked.png")center no-repeat')
        }
    }
    /*------------获取在线设备------------*/
    $http.get($rootScope.link + '/group/getGroupDataByStatus').success(function (data) {
        if (data.code == 200) {
            $scope.hhalk=[]
            for (var a = 0; a < data.data.length; a++) {
                if(data.data[a].deviceVos.length==0){
                }else {
                    for (var i=0;i<data.data[a].deviceVos.length;i++){
                        $scope.hhalk.push(data.data[a].deviceVos[i].device)
                    }
                }

            }
            $scope.hhalk1= $scope.hhalk.length
        } else {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        }
    });
    $scope.logout=function () {
        $http.get($rootScope.link + '/logout').success(function (data) {
            if(data.code==200){
                window.location.href='http://'+window.location.host+'/wgcs/#/login'
            }else {
                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;注销登录失败');
                setTimeout(function () {
                    $('.page1-alert-small-danger').hide(300)
                }, 2000)
            }
        })
    }
    var kk = ''
    $('.page2-emjoy1').html('')
    $http.get($rootScope.link + '/remote/getTask?pageNo=1&pageSize=1000').success(function (data) {
        if (data.code == 200) {
            $scope.dataAll = data.data.content
            for (var i = 0; i < $scope.dataAll.length; i++) {
                if ($scope.dataAll[i].state == 0) {
                    $('.page4-back-button').show()
                    kk = setInterval(function () {
                        $http.get($rootScope.link + '/remote/checkRemoteTaskStatus?state=0').success(function (data) {
                            if (data.data.length==0) {
                                $('.page1-alert-success1').show(300).find('.page1-alert-success-con').html('&nbsp;&nbsp;远程任务执行成功');
                                setTimeout(function () {
                                    $('.page1-alert-success').hide(300)
                                }, 2000)
                                setTimeout(function () {
                                    window.location.reload();
                                },2000)
                            }
                        })
                    }, 1000)
                }
                if ($scope.dataAll[i].status == 1) {
                    // $scope.dataAll[i].state !=0   开启服务后的
                    $scope.okState.push($scope.dataAll[i])
                } else if ($scope.dataAll[i].status == 0) {
                    $scope.noState.push($scope.dataAll[i])
                } else if ($scope.dataAll[i].status == 10) {
                    $scope.okOver.push($scope.dataAll[i])
                }
            }
        } else {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        }
    });
    $(function () {
        setTimeout(function () {
            var oo = $('.clickMe')
            for (var i = 0; i < oo.length; i++) {
                if (oo[i].attributes[1].value == 0) {
                    $rootScope.page29Id = oo[i].attributes[4].value
                    $('.clickMe').eq(i).parent().addClass('on');
                    $('.page29-open').html('任务正在执行').css('background-color', '#DCDCDC').prop('disabled', 'disabled');
                    $('.clickMe').eq(i).parents().parents().parents().parents().siblings().find('.page2-table3-group').css('background-color', '#7A7A7A').find('input').prop('disabled', 'disabled');
                }
            }
        }, 500)
    })
    $("#btn1").click(function () {
        $('.emoji_container').html('').css({'border': 'none', 'background-color': 'transparent', 'box-shadow': 'none'})
        $("#editor1").emoji({
            button: "#btn1",
            showTab: false,
            animation: 'none',
            icons: [{
                name: "QQ表情",
                path: "images/qq/",
                maxNum: 91,
                excludeNums: [41, 45, 54],
                file: ".gif",
            }]
        });
    });
    /*-------------------------------table切换--------------------------------------------------*/
    $scope.tableSwitch = function (e) {
        if (e == 1) {

            $('.page2-title-button-but1').css({
                "background-color": "#2ABF9E",
                "color": "#fff"
            }).siblings().css({"background-color": "#fff", "color": "#2ABF9E"});
            $scope.outSideBox1 = true;
            $scope.outSideBox3 = false;
            $scope.outSideBox2 = false;
        } else if (e == 2) {
            $('.page2-title-button-but2').css({
                "background-color": "#2ABF9E",
                "color": "#fff"
            }).siblings().css({"background-color": "#fff", "color": "#2ABF9E"});
            $scope.outSideBox1 = false;
            $scope.outSideBox3 = false;
            $scope.outSideBox2 = true;
        } else {
            $('.page2-title-button-but3').css({
                "background-color": "#2ABF9E",
                "color": "#fff"
            }).siblings().css({"background-color": "#fff", "color": "#2ABF9E"});
            $scope.outSideBox1 = false;
            $scope.outSideBox3 = true;
            $scope.outSideBox2 = false;
        }
    }
    $('.upText').hide()
    /*-----------选择话术用语方式---------------------*/
    var selectVal = 1
    $('.clickSelect').change(function () {
        selectVal = $(this).val();
        if (selectVal == 1) {
            $('.page3-Addpeople-Say').show();
            $('.page2-emjoy1').html('');

            $('.clickAddText').hide()
            // $scope.saySomething = '您好！很高兴认识您！';
            $scope.upFile = ''
            $('.upText').hide()
            $('.upfiler').val('')
            $('.exselTextGray').html('0kb')
            $('.exselTextGra').html('无文件')
        } else {
            $('.page3-Addpeople-Say').hide();
            $('.clickAddText').show();
            $('.page2-emjoy1').html('');
        }
    })
    $scope.deleteContent=function () {

        $scope.upFile = ''
        $('.upfiler').val('')
        $('.exselTextGray').html('0kb')
        $('.exselTextGra').html('无文件')
    }
    $scope.MeType = 1
    // var selectVal2 = 1
    // $('.clickSelect1').change(function () {
    //     selectVal2 = $(this).val();
    //     if (selectVal2 == 1) {
    //         $scope.MeType = 1
    //     } else if (selectVal2 == 2) {
    //         $scope.MeType = 2
    //     }
    //     else {
    //         $scope.MeType = 0
    //     }
    // })
    /*--------------------点击执行通讯录加人---------------------*/
    var emjoyAllGet = [
        '[微笑]', '[撇嘴]', '[色]', '[发呆]', '[得意]', '[流泪]', '[害羞]', '[闭嘴]', '[睡]', '[大哭]',
        '[尴尬]', '[发怒]', '[调皮]', '[呲牙]', '[惊讶]', '[难过]', '[酷]', '[冷汗]', '[抓狂]', '[吐]',
        '[偷笑]', '[愉快]', '[白眼]', '[傲慢]', '[饥饿]', '[困]', '[惊恐]', '[流汗]', '[憨笑]', '[悠闲]',
        '[奋斗]', '[咒骂]', '[疑问]', '[嘘]', '[晕]', '[疯了]', '[衰]', '[骷髅]', '[敲打]', '[再见]','[]',
        '[抠鼻]', '[鼓掌]', '[糗大了]','[]', '[左哼哼]', '[右哼哼]', '[哈欠]', '[鄙视]', '[委屈]', '[快哭了]', '[阴险]',
        '[亲亲]', '[]','[可怜]', '[菜刀]', '[啤酒]', '[咖啡]', '[饭]', '[猪头]', '[玫瑰]', '[凋谢]', '[嘴唇]',
        '[爱心]', '[心碎]', '[蛋糕]', '[闪电]', '[炸弹]', '[刀]', '[足球]', '[瓢虫]', '[便便]', '[拥抱]',
        '[强]', '[弱]', '[握手]', '[胜利]', '[抱拳]', '[勾引]', '[拳头]', '[差劲]', '[爱你]', '[NO]',
        '[OK]', '[跳跳]', '[发抖]', '[怄火]', '[磕头]', '[激动]', '[献吻]'
    ]
    /*--------------开启远程任务----------------*/
    $scope.sendAll1 = function () {
        var page2table3saying = $(".page2-emjoy1").html();
        for (var i = 0, arr = []; i < $('.page17-wx-input').length; i++) {
            if ($('.page17-wx-input').eq(i).prop('checked')) {
                arr.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
            }
        }
        if (arr.length == 0) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择并勾选需要进行远程任务的设备');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else if ($rootScope.page29Id == '' || $rootScope.page29Id == undefined) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择开启的服务');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else if (arr.length * 15 < $scope.addPeopleCount) {
            alert()
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;由于微信规则限制最大加人数量为' + arr.length * 15 + '人');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else {
            var reger = /<img.*?(?:>|\/>)/g;
            var srcReg = /\/([^\/]*?\.gif)/i;
            var arr1 = page2table3saying.match(reger)
            if (arr1 == null) {
            } else {
                var tt = []
                for (var i = 0; i < arr1.length; i++) {
                    var src = arr1[i].match(srcReg);
                    // var src = srcReg.exec(arr1[i])
                    if (src[1]) {
                        tt.push(src[1].substring(0, src[1].indexOf('.')))
                    }
                    for (var tt1 = [], i1 = 0; i1 < tt.length; i1++) {
                        for (var i2 = 0; i2 < emjoyAllGet.length; i2++) {
                            if (tt[i1] == i2) {
                                tt1.push(emjoyAllGet[i2 - 1])
                            }
                        }
                    }
                }
                var result = page2table3saying.match(/<img.*?(?:>|\/>)/g);
                for (var i = 0; i < result.length; i++) {
                    page2table3saying = page2table3saying.replace(result[i], tt1[i])
                }
            }
            var oooo = page2table3saying.replace(/<\/div>/g, "");
            var oooo1 = oooo.replace(/<br>/g, "");
            var oooo2 = oooo1.replace(/<div>/g, "<br>");
            $scope.sendObj = new FormData();
            $scope.sendObj.append('file', $scope.upFile);
            $scope.sendObj.append('tid', $rootScope.page29Id);
            $scope.sendObj.append('devices', JSON.stringify(arr));
            $scope.sendObj.append('maxInterval', $scope.maxTime);
            $scope.sendObj.append('minInterval', $scope.minTime);
            $scope.sendObj.append('msg', oooo2);
            $scope.sendObj.append('clear', 1);
            $scope.sendObj.append('strategy', $scope.MeType);
            $scope.sendObj.append('count', $scope.addPeopleCount);
            $scope.sendObj.append('number', $rootScope.page29Number);
            $http({
                method: 'POST',
                url: $rootScope.link + "/remote/openServer",
                data: $scope.sendObj,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (data) {
                if (data.code == 200) {
                    $('.page1-alert-waring').show(300).find('.page1-alert-waring-con').html('&nbsp;&nbsp;远程任务添加成功');
                    setTimeout(function () {
                        $('.page1-alert-waring').hide(300)
                    }, 2000)
                    window.location.reload();
                } else {
                    $('.page1-alert-danger').show(300).find('.page1-alert-danger-con').html('&nbsp;&nbsp;远程任务添加失败，请重试并检查设备连接');
                    setTimeout(function () {
                        $('.page1-alert-danger').hide(300)
                    }, 2000)
                }
            });
        }
    };
    $scope.closeServer = function () {
        if ($rootScope.page29Id == '' || $rootScope.page29Id == undefined) {
            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择并勾选需要关闭的服务');
            setTimeout(function () {
                $('.page1-alert-small-danger').hide(300)
            }, 2000)
        } else {
            $scope.sendObj1 = new FormData();
            $scope.sendObj1.append('tid', $rootScope.page29Id);
            $http({
                method: 'POST',
                url: $rootScope.link + "/remote/stopServer",
                data: $scope.sendObj1,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (response) {
                if (response.code == 200) {
                    $('.clickMe').parents().parents().parents().find('.page11-div-checkbox').removeClass('on');
                    $('.clickMe').parents().parents().parents().find('.page11-div-checkbox').css('background-color', 'white').find('input').prop('disabled', function () {
                        return false
                    });
                    $('.page4-back-button').hide()
                    $('.page1-alert-small-success').show(300).find('.page1-alert-small-success-con').html('&nbsp;&nbsp;远程任务关闭成功');
                    setTimeout(function () {
                        $('.page1-alert-small-success').hide(300)
                    }, 2000)
                    window.location.reload();
                } else {
                    $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                    setTimeout(function () {
                        $('.page1-alert-small-danger').hide(300)
                    }, 2000)
                }
            })
        }

    }
    /*--------------------------------------通讯录加人完结----------------------------------------------------------*/
}
]);

app.controller('page3C',["$rootScope","$scope","$http",function ($rootScope, $scope, $http) {
    $rootScope.getAllFalse();
    $rootScope.activeThree = true;
    $rootScope.navPartOne = true;
    $rootScope.isScreenPage = false;
    //默认加载
    $scope.changeModel=false;
    $scope.getLoad = function (n) {
        var a;
        n == 1 ? a = '已安装' : a = '未安装';
        return a;
    };
    $scope.Status = function (n) {
        return n == 0 ? '离线' : '在线';
    };
    $scope.getDisabled = function (n) {
        return n == 0 ? true : false;
    };
    // ng-change 事件
    $scope.checked = [];
    $scope.selectAll = function () {
        if ($scope.checkAll) {
            $scope.checked = [];
            angular.forEach($scope.DataList, function (i) {
                if (i.status == 1) {
                    i.checked = true;
                    $scope.checked.push(i.device);
                }
            })
        } else {
            angular.forEach($scope.DataList, function (i) {
                if (i.status == 1) {
                    i.checked = false;
                    $scope.checked = [];
                }
            })
        }
    };
    $scope.selectOne = function () {
        $scope.isAll = [];
        angular.forEach($scope.DataList, function (i) {
            var index = $scope.checked.indexOf(i.device);
            if (i.checked && index === -1) {
                $scope.checked.push(i.device);
            } else if (!i.checked && index != -1) {
                $scope.checked.splice(index, 1);
            }
            if (i.status == 1) {
                $scope.isAll.push(i.device);
            }
        });
        if ($scope.isAll.length === $scope.checked.length) {
            $scope.checkAll = true;
        } else {
            $scope.checkAll = false;
        }
    };
    $http.get($rootScope.link + '/device/getAllDeviceByStatus?pageNo=1&pageSize=15').success(function (data) {
        if (data.code == 200) {
            $scope.DataList = data.data.content;
            $('#pages3').Page({
                totalPages: data.data.totalPages,//分页总数
                liNums: 5,//分页的数字按钮数(建议取奇数)
                activeClass: 'activP', //active 类样式定义
                callBack: function (page) {
                    $http.get($rootScope.link + '/device/getAllDeviceByStatus?pageNo=' + page + '&pageSize=15').success(function (data) {
                        $scope.DataList = data.data.content;
                    })
                }
            });
        }else{
            alert(data.msg)
        }

    });

    $scope.openAll = function (n) {
        if ($scope.checked.length == 0) {
            alert('请勾选需要操作的设备!');
        } else {
            var sendObj = new FormData();
            sendObj.append('devices', JSON.stringify($scope.checked));
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
                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
                        if (data.code == 200) {
                            $rootScope.taskList = data.data;
                            $rootScope.taskAll = true;
                            $rootScope.taskDoing = false;
                            $rootScope.taskWait = false;
                            $rootScope.taskDown = false;
                            $rootScope.newBell = true;
                        }else{
                            alert(data.msg)
                        }
                    });
                }else{
                    alert(data.msg)
                }
            });
        }
    };
    $scope.closeAll = function (n) {
        if ($scope.checked.length == 0) {
            alert('请勾选需要操作的设备!');
        } else {
            var sendObj = new FormData();
            sendObj.append('devices', JSON.stringify($scope.checked));
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
                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
                        if (data.code == 200) {
                            $rootScope.taskList = data.data;
                            $rootScope.taskAll = true;
                            $rootScope.taskDoing = false;
                            $rootScope.taskWait = false;
                            $rootScope.taskDown = false;
                            $rootScope.newBell = true;
                        }else{
                            alert(data.msg)
                        }
                    });
                }else{
                    alert(data.msg)
                }
            });
        }
    };

    $scope.backHome = function () {
        if ($scope.checked.length == 0) {
            alert('请勾选需要操作的设备！');
        } else {
            $http.get($rootScope.link + '/device/backHome?devices=' + JSON.stringify($scope.checked)).success(function (data) {
                if (data.code == 200) {
                    alert('添加任务成功！');
                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
                        if (data.code == 200) {
                            $rootScope.taskList = data.data;
                            $rootScope.taskAll = true;
                            $rootScope.taskDoing = false;
                            $rootScope.taskWait = false;
                            $rootScope.taskDown = false;
                            $rootScope.newBell = true;
                        }else{
                            alert(data.msg)
                        }
                    });
                }else{
                    alert(data.msg)
                }
            });
        }
    };

// //-------------改变手机型号---------------
//     $scope.first = [
//         {
//             id: 1,
//             name: '前端',
//             child: [
//                 {id: 1, name: 'CSS3'},
//                 {id: 2, name: 'HTML'},
//                 {id: 3, name: 'js'},
//                 {id: 4, name: 'angular'},
//                 {id: 5, name: 'bootstrap'}
//             ]
//         },
//         {
//             id: 2,
//             name: '后端',
//             child: [
//                 {id: 1, name: 'java'},
//                 {id: 2, name: 'php'},
//                 {id: 3, name: 'node'}
//             ]
//         }
//     ];


    $scope.changePhone=function () {
        $http.get($rootScope.link + '/operate/getPhoneBrand').success(function (data) {
            if (data.code == 200) {
               $scope.phoneBrand=data.data
            }else {
                alert(data.msg);
            }
        });
        $scope.changeModel=true

    }
    $scope.notChange=function () {
        $scope.changeModel=false
    }
    $scope.changeOne = function (oneData,item) {
        $scope.firstBrand=$("#nonon").val()
        var sendObj = new FormData();
        sendObj.append('brand',$scope.firstBrand);
        $http({
            method: 'POST',
            url: $rootScope.link + "/operate/getAllPhoneModelByBrand",
            data: sendObj,
            headers: {'Content-Type': undefined},
            transformRequest: angular.identity
        }).success(function (data) {
            if (data.code == 200) {
                $scope.SecondBrand=data.data

            }else {
                alert(data.msg);
            }
        });
    };
    $scope.changeTwo = function () {
        $scope.sreeBrand=$("#non option:selected").val()

    };
    $scope.upChange=function () {
        if ($scope.checked.length == 0) {
            alert('请勾选需要操作的设备!');
            return
        }
        if($scope.firstBrand==undefined){
            alert('请选择手机品牌')
            return
        }
        if($scope.sreeBrand==undefined){
            alert('请选择手机型号')
            return
        } else {
            var sendObj = new FormData();
            sendObj.append('devices', JSON.stringify($scope.checked));
            sendObj.append('modelId',$scope.sreeBrand);
            $http({
                method: 'POST',
                url: $rootScope.link + "/operate/modifyPhoneName",
                data: sendObj,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (data) {
                if (data.code == 200) {
                    $scope.changeModel=false
                    alert('添加任务栏成功！');
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
                }else{
                    alert(data.msg)
                }
            });
        }
    }
}]);
app.controller('page4C',["$rootScope","$scope","$http","$timeout",function ($rootScope, $scope, $http, $timeout) {
    $rootScope.getAllFalse();
    $rootScope.activeFour = true;
    $rootScope.navPartThree = true;
    $rootScope.isScreenPage = false;
    //页面显示
    $scope.outSideBox = true;
    $scope.insideBox = false;
    $scope.assBack = false;
    $scope.resetSelect = true;
    $scope.getInside = function (d) {
        $scope.outSideBox = false;
        $scope.insideBox = true;
        $scope.assMoveTo = false;
        $scope.assBack = true;
        $scope.resetSelect = false;
        $scope.assDevice = d;
        $http.get($rootScope.link + '/wechat/getWechatByDevice?device=' + d).success(function (data) {
            $scope.assList = data.data;
        });
    };
    $scope.getAssBack = function () {
        $scope.outSideBox = true;
        $scope.insideBox = false;
        $scope.resetSelect = true;
        $scope.assBack = false;
        $scope.assMoveTo = true;
        var newArr = [];
        for (var i = 0; i < $('.new-wx-equip-input4').length; i++) {
            if ($('.new-wx-equip-input4').eq(i).prop('checked')) {
                newArr.push($('.new-wx-equip-input4').eq(i).parent().next().attr('title'));
            }
        }
        $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify(newArr) + '&pageNo=1&pageSize=17').success(function (data) {
            if (data.code == 200) {
                $scope.checkAllFour = false;
                $('.page4-floor-one-list').find('span').eq(0).removeClass('on');
                //$rootScope.equipList4 = data.data.content;
                $('#pages4').Page({
                    totalPages: data.data.totalPages,//分页总数
                    liNums: 5,//分页的数字按钮数(建议取奇数)
                    activeClass: 'activP', //active 类样式定义
                    callBack: function (page) {
                        $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify(newArr) + '&pageNo=' + page + '&pageSize=17').success(function (data) {
                        })
                    }
                });
            }else {
                alert(data.msg);
            }
        });
    };
    $timeout(function () {
        // $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify($rootScope.moArray) + '&pageNo=1&pageSize=17').success(function (data) {
        $http.get($rootScope.link + '/device/getAllDeviceByStatus?pageNo=1&pageSize=15').success(function (data) {
            if (data.code == 200) {
                //$rootScope.equipList4 = data.data.content;
                $('#pages4').Page({
                    totalPages: data.data.totalPages,//分页总数
                    liNums: 5,//分页的数字按钮数(建议取奇数)
                    activeClass: 'activP', //active 类样式定义
                    callBack: function (page) {
                        $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify($rootScope.moArray) + '&pageNo=' + page + '&pageSize=17').success(function (data) {
                            $rootScope.equipList4 = data.data.content;
                        })
                    }
                });
            }else {
                alert(data.msg);
            }
        });
        // alert('请用户手动配置增加微信账号！');
    }, 0);
    //上移
    $scope.isRankOne = function (n) {
        return n == 1 ? 'on' : '';
    };
    $scope.rankDisabled = function (n) {
        return n == 1 ? true : false;
    };
    $scope.moveUp = function (n) {
        $http.get($rootScope.link + '/wechat/up?rank=' + n + '&device=' + $scope.assDevice).success(function (data) {

            if (data.code == 200) {
                alert('移动成功!');
                $http.get($rootScope.link + '/wechat/getWechatByDevice?device=' + $scope.assDevice).success(function (data) {
                    $scope.assList = data.data;
                });
            } else {
                alert(data.msg);
            }
        });
    };
    //下移
    $scope.isRankLast = function (n) {
        return n == 20 ? 'on' : '';
    };
    $scope.rankDisabledLast = function (n) {
        return n == 20 ? true : false;
    };
    $scope.moveDown = function (n) {
        $http.get($rootScope.link + '/wechat/down?rank=' + n + '&device=' + $scope.assDevice).success(function (data) {
            if (data.code == 200) {
                alert('移动成功!');
                $http.get($rootScope.link + '/wechat/getWechatByDevice?device=' + $scope.assDevice).success(function (data) {
                    $scope.assList = data.data;
                });
            }else {
                alert(data.msg);
            }
        });
    };
    //切换
    $scope.assMoveTo = true;
    $scope.checked = [];
    $scope.selectAll = function () {
        if ($scope.checkAllFour) {
            $scope.checked = [];
            angular.forEach($rootScope.equipList4, function (i) {
                i.checked = true;
                $scope.checked.push(i.device);
            })
        } else {
            angular.forEach($rootScope.equipList4, function (i) {
                i.checked = false;
                $scope.checked = [];
            })
        }
    };
    $scope.selectOne = function () {
        angular.forEach($rootScope.equipList4, function (i) {
            var index = $scope.checked.indexOf(i.device);
            if (i.checked && index === -1) {
                $scope.checked.push(i.device);
            } else if (!i.checked && index != -1) {
                $scope.checked.splice(index, 1);
            }
        });
        if ($rootScope.equipList4.length === $scope.checked.length) {
            $scope.checkAll = true;
        } else {
            $scope.checkAll = false;
        }
    };
    $scope.resetNumber = '1';
    $scope.resetButton = function () {
        for (var i = 0, arr = []; i < $('.new-wx-equip-input4').length; i++) {
            if ($('.new-wx-equip-input4').eq(i).prop('checked')) {
                arr.push($('.new-wx-equip-input4').eq(i).parent().next().attr('title'));
            }
        }
        if (arr.length == 0) {
            alert('请勾选需要切换的设备！');
        } else {
            $http.get($rootScope.link + '/group/switchWechat?devices=' + JSON.stringify(arr) + '&rank=' + parseInt($scope.resetNumber)).success(function (data) {
                if (data.code == 200) {
                    alert('添加任务成功！');
                    var newArr = [];
                    for (var i = 0; i < $('.new-wx-equip-input4').length; i++) {
                        if ($('.new-wx-equip-input4').eq(i).prop('checked')) {
                            newArr.push($('.new-wx-equip-input4').eq(i).parent().next().attr('title'));
                        }
                    }
                    //$http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify(newArr) + '&pageNo=1&pageSize=17').success(function (data) {
                    //    if (data.code == 200) {
                    //        $rootScope.equipList4 = data.data.content;
                    //        $('#pages4').Page({
                    //            totalPages: data.data.totalPages,//分页总数
                    //            liNums: 5,//分页的数字按钮数(建议取奇数)
                    //            activeClass: 'activP', //active 类样式定义
                    //            callBack: function (page) {
                    //                $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify(newArr) + '&pageNo=' + page + '&pageSize=17').success(function (data) {
                    //                    $rootScope.equipList4 = data.data.content;
                    //                })
                    //            }
                    //        });
                    //    }
                    //});
                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
                        if (data.code == 200) {
                            $rootScope.taskList = data.data;
                            $rootScope.taskAll = true;
                            $rootScope.taskDoing = false;
                            $rootScope.taskWait = false;
                            $rootScope.taskDown = false;
                            $rootScope.newBell = true;
                        }else{
                            alert(data.msg)
                        }
                    });
                } else {
                    alert(data.msg);
                }
            });
        }

    };
}]);

app.controller('page5C',["$rootScope","$scope","$http","$timeout",function ($rootScope, $scope, $http, $timeout) {
    $rootScope.getAllFalse();
    $rootScope.activeFive = true;
    $rootScope.isScreenPage = false;
    //page5选择设备数
    $scope.chooseedEquip = 100;
    $scope.unChooseedEquip = 0;
    //筛选数组
    var updateSelected = function (action, id) {
        if (action == 'add' && $rootScope.allEquipIds.indexOf(id) == -1) {
            $rootScope.allEquipIds.push(id);
        }
        if (action == 'remove' && $rootScope.allEquipIds.indexOf(id) != -1) {
            var idx = $rootScope.allEquipIds.indexOf(id);
            $rootScope.allEquipIds.splice(idx, 1);
        }
    };
    $scope.checkOne = function ($event, id) {
        var action = ($event.target.checked ? 'add' : 'remove');
        updateSelected(action, id);
        $http.get($rootScope.link + '/operate/getWechatsByGroup?groupIds=' + JSON.stringify($rootScope.allEquipIds) + '&pageNo=1&pageSize=17').success(function (data) {
            $scope.MemberList = data.data.content;
            $('#pages5').Page({
                totalPages: 9,//分页总数
                liNums: 5,//分页的数字按钮数(建议取奇数)
                activeClass: 'activP', //active 类样式定义
                callBack: function (page) {
                    $http.get($rootScope.link + '/operate/getWechatsByGroup?groupIds=' + JSON.stringify($rootScope.allEquipIds) + '&pageNo=' + page + '&pageSize=17').success(function (data) {
                        if (data.code == 200) {
                            $scope.MemberList = data.data.content;
                        }
                        else {
                            alert(data.msg);
                        }
                    })
                }
            });
        });
    };
    $scope.isChecked = function (id) {
        return $rootScope.allEquipIds.indexOf(id) >= 0;
    };
    //默认加载所有的分组的微信号
    $scope.isOnline = function (n) {
        return n == 0 ? '离线' : '在线';
    };
    $timeout(function () {
        $http.get($rootScope.link + '/operate/getWechatsByGroup?groupIds=' + JSON.stringify($rootScope.allEquipIds) + '&pageNo=1&pageSize=17').success(function (data) {
            $scope.MemberList = data.data.content;
            $('#pages5').Page({
                totalPages: data.data.totalPages,//分页总数
                liNums: 5,//分页的数字按钮数(建议取奇数)
                activeClass: 'activP', //active 类样式定义
                callBack: function (page) {
                    $http.get($rootScope.link + '/operate/getWechatsByGroup?groupIds=' + JSON.stringify($rootScope.allEquipIds) + '&pageNo=' + page + '&pageSize=17').success(function (data) {
                        if (data.code == 200) {
                            $scope.MemberList = data.data.content;
                        }else {
                            alert(data.msg);
                        }
                    })
                }
            });
        });
    }, 100);
    //登录
    $scope.numberLogin = function () {
        var page5WxIds = [];
        for (var i = 0; i < $('.page5-div-checkbox').length; i++) {
            if ($('.page5-div-checkbox').eq(i).find('input').prop('checked')) {
                page5WxIds.push($('.page5-div-checkbox').eq(i).attr('member_id'));
            }
        }
        if (page5WxIds.length == 0) {
            alert('请勾选需要操作微信！');
        } else {
            $http.get($rootScope.link + '/wechat/login?devices=' + JSON.stringify(page5WxIds)).success(function (data) {
                if (data.code == 200) {
                    alert('添加任务成功!');
                    $http.get($rootScope.link + '/task/getGroupTaskInit?status=-1').success(function (data) {
                        if (data.code == 200) {
                            $rootScope.taskList = data.data;
                            $rootScope.taskAll = true;
                            $rootScope.taskDoing = false;
                            $rootScope.taskWait = false;
                            $rootScope.taskDown = false;
                            $rootScope.newBell = true;
                        }
                    });
                } else {
                    alert(data.msg);
                }
            });
        }
    };
    //注销
    $scope.numberLogout = function () {
        var page5WxIds = [];
        for (var i = 0; i < $('.page5-div-checkbox').length; i++) {
            if ($('.page5-div-checkbox').eq(i).find('input').prop('checked')) {
                page5WxIds.push($('.page5-div-checkbox').eq(i).attr('member_id'));
            }
        }
        if (page5WxIds.length == 0) {
            alert('请勾选需要操作微信！');
        } else {
            $http.get($rootScope.link + '/wechat/logout?devices=' + JSON.stringify(page5WxIds)).success(function (data) {
                if (data.code == 200) {
                    alert('添加任务成功!');
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
                } else {
                    alert(data.msg);
                }
            });
        }

    };
    //切换
    $scope.switchBox = false;
    $scope.numberSwitch = function () {
        $scope.switchBox = true;
    };
    $scope.switchCancel = function () {
        $scope.switchBox = false;
    };
    $scope.switchSure = function () {
        var assRank = $('.switch-list').find('input');
        for (var i = 0, assChecked = 0; i < assRank.length; i++) {
            if (assRank.eq(i).prop('checked')) {
                assChecked = assRank.eq(i).attr('ass_rank');
            }
        }
        if (assChecked == 0) {
            alert('请选择微信序号！');
        } else {
            $http.get($rootScope.link + '/group/switchWechat?groupIds=' + JSON.stringify($rootScope.allEquipIds) + '&rank=' + assChecked).success(function (data) {
                if (data.code == 200) {
                    alert('切换成功！');
                    $http.get($rootScope.link + '/operate/getWechatsByGroup?groupIds=' + JSON.stringify($rootScope.allEquipIds) + '&pageNo=1&pageSize=17').success(function (data) {
                        $scope.switchBox = false;
                        $scope.MemberList = data.data.content;
                        $('#pages5').Page({
                            totalPages: data.data.totalPages,//分页总数
                            liNums: 5,//分页的数字按钮数(建议取奇数)
                            activeClass: 'activP', //active 类样式定义
                            callBack: function (page) {
                                $http.get($rootScope.link + '/operate/getWechatsByGroup?groupIds=' + JSON.stringify($rootScope.allEquipIds) + '&pageNo=' + page + '&pageSize=17').success(function (data) {
                                    if (data.code == 200) {
                                        $scope.MemberList = data.data.content;
                                    }else{
                                        alert(data.msg)
                                    }
                                })
                            }
                        });
                    });
                }else {
                    alert(data.msg);
                }
            });
        }
    };
}]);

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

app.controller('page8C', ["$rootScope", "$scope", "$location", "$anchorScroll", "$http", function ($rootScope, $scope, $location, $anchorScroll, $http) {
    $rootScope.getAllFalse();
    $rootScope.activeEight = true;
    $rootScope.navPartThree = true;
    $rootScope.isScreenPage = false;
    //算法配置
    $scope.mapRang = '2000米';
    // $scope.timeInterval = 5;
    $scope.sayHello = '您好！很高兴认识您！';
    $scope.upFile = ''
    $scope.mapLocation = '';
    $scope.addPeopleNumber = 10;
    $scope.addSex = '全部';
    $scope.maxTime = 10;
    $scope.minTime = 1;


    function G(id) {
        return document.getElementById(id);
    }

    var map = new BMap.Map("page8-map");
    map.centerAndZoom("北京", 12);                   // 初始化地图,设置城市和地图级别。
    map.enableScrollWheelZoom(true);
    map.addEventListener('click', function (e) {
        //var myIcon=new BMap.Icon("images/map-logo.png", new BMap.Size(23,33));
        //var marker = new BMap.Marker(new BMap.Point(e.point.lng,e.point.lat ),{icon:myIcon})
        //map.addOverlay(marker);
        $.ajax({
            type: 'GET',
            url: 'http://api.map.baidu.com/geocoder/v2/?ak=HbUVYMUg6PwbOnXkztdgSQlQ&callback=renderReverse&location=' + e.point.lat + ',' + e.point.lng + '&output=json&pois=1',
            dataType: 'JSONP',
            success: function (data1) {
                $scope.mapLocation = data1.result.formatted_address;
                $scope.$apply();
            }
        });
    });
    var ac = new BMap.Autocomplete(    //建立一个自动完成的对象
        {
            "input": "suggestId"
            , "location": map
        });

    ac.addEventListener("onhighlight", function (e) {  //鼠标放在下拉列表上的事件
        var str = "";
        var _value = e.fromitem.value;
        var value = "";
        if (e.fromitem.index > -1) {
            value = _value.province + _value.city + _value.district + _value.street + _value.business;
        }
        str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;

        value = "";
        if (e.toitem.index > -1) {
            _value = e.toitem.value;
            value = _value.province + _value.city + _value.district + _value.street + _value.business;
        }
        str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
        G("searchResultPanel").innerHTML = str;
    });

    var myValue;
    ac.addEventListener("onconfirm", function (e) {    //鼠标点击下拉列表后的事件
        var _value = e.item.value;
        myValue = _value.province + _value.city + _value.district + _value.street + _value.business;
        G("searchResultPanel").innerHTML = "onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;

        setPlace();
    });

    function setPlace() {
        map.clearOverlays();    //清除地图上所有覆盖物
        function myFun() {
            var pp = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果
            map.centerAndZoom(pp, 18);
            map.addOverlay(new BMap.Marker(pp));    //添加标注
            $scope.mapPointLng = pp.lng;
            $scope.mapPointLat = pp.lat;
        }

        var local = new BMap.LocalSearch(map, { //智能搜索
            onSearchComplete: myFun
        });
        local.search(myValue);
    }

// ====================  导入话术文件  ==================
    var selectVal = 1
    $('.clickSelect').change(function () {
        selectVal = $(this).val();
        if (selectVal == 1) {
            $('.page9-say-hello').show();
            $('.clickAddText').hide()
            $scope.sayHello = '您好！很高兴认识您！';
            $scope.upFile = ''
        } else {
            $('.page9-say-hello').hide();
            $('.clickAddText').show();
            $scope.sayHello = ''
        }
    })
    $scope.clickAddText = function () {
        $('.page7-select').css("display", "block")
    }

    // setInterval(function () {
    //     console.log($scope.sayHello)
    // }, 1000)


    $scope.sendAll = function () {
        for (var i = 0, arr = []; i < $('.new-wx-equip-input8').length; i++) {
            if ($('.new-wx-equip-input8').eq(i).prop('checked')) {
                arr.push($('.new-wx-equip-input8').eq(i).parent().next().attr('title'));
            }
        }


        var sex = 0;
        if ($scope.addSex == '全部') {
            sex = 0;
        } else if ($scope.addSex == '男') {
            sex = 1;
        } else if ($scope.addSex == '女') {
            sex = 2;
        }
        if (arr.length == 0) {
            alert('请勾选需要操作的设备！');
        } else if ($scope.mapRang == '') {
            alert('请选择粒子算法的范围！');
        } else if ($scope.timeInterval == '') {
            alert('请填写时间间隔！');
        }
        else if ($scope.mapLocation == '') {
            alert('请输入定位的地址！');
        } else if ($scope.addPeopleNumber == '') {
            alert('请输入加人的数量!')
        } else {
            var sendObj = new FormData();
            sendObj.append('devices', JSON.stringify(arr));
            sendObj.append('file', $scope.upFile);
            sendObj.append('maxInterval', $scope.maxTime);
            sendObj.append('minInterval', $scope.minTime);
            sendObj.append('msg', $scope.sayHello);
            // sendObj.append('range', parseInt($scope.mapRang));
            sendObj.append('longitude', $scope.mapPointLng);
            sendObj.append('latitude', $scope.mapPointLat);
            sendObj.append('num', $scope.addPeopleNumber);
            sendObj.append('sex', sex);
            $http({
                method: 'POST',
                url: $rootScope.link + "/wechatPlus/sayHello",
                data: sendObj,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (response) {
                //上传成功的操作
                if (response.code == 200) {
                    alert('任务添加成功!');
                    $location.hash('page-top8');
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

app.controller('page31C', ["$rootScope", "$scope", "$location", "$anchorScroll", "$http", function ($rootScope, $scope, $location, $anchorScroll, $http) {
    $rootScope.getAllFalse();
    $rootScope.activeThirtyOne = true;
    $rootScope.navPartThree = true;
    $rootScope.isScreenPage = true;
    //锚点的跳转 回到导航标题处
    $scope.getNav = function () {
        $location.hash('nav-bottom13');
        $anchorScroll();
    };
    //-------------微信扫码进群---------------
    $scope.sendObj = new FormData();
    $scope.sendObj.append('file', '');
    $scope.picArr = [];
    $scope.sendAll = function () {
        for (var i = 0, arr = []; i < $('.new-wx-equip-input13').length; i++) {
            if ($('.new-wx-equip-input13').eq(i).prop('checked')) {
                arr.push($('.new-wx-equip-input13').eq(i).parent().next().attr('title'));
            }
        }
        if (arr == 0) {
            alert('请勾选需要操作的设备！');
        } else {
            var jsonOne={'devices':arr}
            $scope.sendObj.append('json', JSON.stringify(jsonOne));
            $http({
                method: 'POST',
                url: $rootScope.link + "/wechatPlus/addgroupfrompicture",
                data: $scope.sendObj,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (response) {
                //上传成功的操作
                if (response.code == 200) {
                    alert('任务添加成功!');
                    $location.hash('page-top13');
                    $anchorScroll();
                    location.reload();
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
                    location.reload();
                }
            });
        }

    };
}]);

app.controller('page32C', ["$rootScope", "$scope", "$location", "$anchorScroll", "$http", function ($rootScope, $scope, $location, $anchorScroll, $http) {
    $rootScope.getAllFalse();
    $rootScope.activeThirtyTwo = true;
    $rootScope.navPartThree = true;
    $rootScope.isScreenPage = false;
    //配置策略

    $scope.mmp = false;
    $scope.sendObj = new FormData();
    $scope.sendObj.append('file1', '');
    $scope.picArr = [];
    $scope.sendAll = function () {
        for (var i = 0, arr = []; i < $('.new-wx-equip-input7').length; i++) {
            if ($('.new-wx-equip-input7').eq(i).prop('checked')) {
                arr.push($('.new-wx-equip-input7').eq(i).parent().next().attr('title'));
            }
        }
        if (arr == 0) {
            alert('请勾选需要操作的设备！');
        } else if ($scope.mmp == false) {
            alert("请选择公众号二维码图片！")
        } else {
            $scope.sendObj.append('devices', JSON.stringify(arr));
            $http({
                method: 'POST',
                url: $rootScope.link + "/operate/sendMoments",
                data: $scope.sendObj,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (response) {
                //上传成功的操作
                if (response.code == 200) {
                    alert('任务添加成功!');
                    $location.hash('page-top13');
                    $anchorScroll();
                    location.reload();
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
                    location.reload();
                }
            });
        }

    };


    //----------------------公众号名称关注----------------------
    $scope.sayName = '';
    $scope.sendAll1 = function () {
        for (var i = 0, arr1 = []; i < $('.new-wx-equip-input7').length; i++) {
            if ($('.new-wx-equip-input7').eq(i).prop('checked')) {
                arr1.push($('.new-wx-equip-input7').eq(i).parent().next().attr('title'));
            }
        }
        if (arr1.length == 0) {
            alert('请勾选需要操作的设备！');
        } else if ($scope.sayName == '') {
            alert("请输入公众号名称！")
        }
        else {
            var arr2 = []
            arr2.push($scope.sayName.split("，"))
            var jsonTwo = {
                "publicnumberList": arr2[0],
                "devices": arr1
            }
            $http({
                method: 'POST',
                url: $rootScope.link + "/wechatPlus/addpublicnumber",
                data:jsonTwo,
                headers: {'Content-Type':undefined},
            }).success(function (response) {
                //上传成功的操作
                if (response.code == 200) {
                    $scope.sayName = ''
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

app.controller('page33C', ["$rootScope", "$scope", "$http", "$timeout", function ($rootScope, $scope, $http, $timeout) {
    $rootScope.getAllFalse();
    $rootScope.activeThirtySree = true;
    $rootScope.navPartThree = true;
    $rootScope.isScreenPage = false;
    $scope.maxTime = 10;
    $scope.minTime = 1
    $scope.mainName = ''
    $scope.mainNumber = ''
    $scope.allPhon = ''
    var selectVal = ''
    $scope.checkPhone = '';
    //---------------页面初始化获取所有在线设备-------------------
    $timeout(function () {
        $http.get($rootScope.link + '/device/getAllDeviceByStatus?pageNo=1&pageSize=10000').success(function (data) {
            if (data.code == 200) {
                $scope.allPhon = data.data.content
                // console.log(data.data.content)
            } else {
                alert(data.msg)
            }
        });
    }, 0);
    //---------------每次点击选择设备拿回好友列表-------------------
    $('.page4-select').change(function () {
        $rootScope.sendValuePp = undefined
        $scope.checkPhone = $(this).val();
        // console.log(JSON.stringify($scope.checkPhone) )
        $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + $scope.checkPhone + '&pageNo=1&pageSize=17').success(function (data) {
            if (data.code == 200) {
                $scope.haoYou = data.data.content[0].wechatVo.id
                $http.get($rootScope.link + '/operate/getContact?wechatId=' + $scope.haoYou + '&pageNo=1&pageSize=2000').success(function (data) {
                    if (data.code == 200) {
                        $scope.outSideBox = false;
                        $scope.inSideBox = true;
                        if (data.data.content == '') {
                            alert("无法获取到好友列表，请前往微信好友管理进行好友列表刷新")
                        }
                        $scope.WxList = data.data.content;
                        $scope.assPage = 1;
                    } else {
                        alert(data.msg)
                    }

                });
            } else {
                alert(data.msg);
            }
        });
        // $scope.MemberId = id;
        // $scope.newDevices = devices;
        // $scope.MemberNumber = num;
    })
    // setInterval(function () {
    //     console.log($rootScope.sendValuePp)
    // },500)
    // $scope.sendValue = '';
    //---------------选择点在好友位置-------------------
    $('.page33-select-type').change(function () {
        selectVal = $(this).val();
        if (selectVal == 0) {
            $('.page33-select-input').show();
            $('.page33-select-input').html('');
            $('.page33-select-number').hide()
            $scope.mainNumber = ''
        } else {
            $('.page33-select-input').hide();
            $('.page33-select-input').html('');
            $('.page33-select-number').show()
            $scope.mainName = '';
        }
    })

    $scope.sendAll = function () {
        var arr2 = []
        var arr3 = ''
        for (var i = 0, arr1 = []; i < $('.new-wx-equip-input4').length; i++) {
            if ($('.new-wx-equip-input4').eq(i).prop('checked')) {
                arr1.push($('.new-wx-equip-input4').eq(i).parent().next().attr('title'));
                if (i <= 4) {
                    arr2.push($('.new-wx-equip-input4').eq(i).parent().next().attr('title'));
                }
            }
        }
        if ($rootScope.sendValuePp == undefined) {
            alert("请选择朋友圈所属好友")
        } else if ($scope.mainName == '' && $scope.mainNumber == '') {
            alert('请提供目标朋友圈所在位置')
        } else if (arr1.length == 0) {
            alert('请勾选需要转发到的5台设备！');
        } else {
            // console.log(arr1.length)
            if (arr1.length > 5) {
                arr3 = arr2
            } else {
                arr3 = arr1
            }
            var sendObj = new FormData();
            sendObj.append('forwardDevices, ', JSON.stringify(arr3));
            sendObj.append('msg', $scope.mainName);
            sendObj.append('appoint', $scope.mainNumber);
            sendObj.append('devices', $scope.checkPhone);
            // sendObj.append('strategy', $scope.addPeople);
            sendObj.append('friendId', $rootScope.sendValuePp);
            // sendObj.append('contactList', JSON.stringify($scope.assList));
            $http({
                method: 'POST',
                url: $rootScope.link + "/operate/frowardMoments",
                data: sendObj,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (response) {
                //上传成功的操作
                if (response.code == 200) {
                    $scope.sayName = ''
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
                        } else {
                            alert(data.msg);
                        }
                    });
                } else {
                    alert(response.msg);
                }
            });
        }
    }


}]);

/**
 * Created by digvita on 2017/7/12.
 */
app.config(["$routeProvider",function ($routeProvider) {
    $routeProvider
    //.when('/page1',{templateUrl:'tpl/page1.html',controller:'page1C'})
        .when('/page2', {templateUrl: 'view/page2.html', controller: 'page2C'})
        .when('/page3', {templateUrl: 'view/page3.html', controller: 'page3C'})
        .when('/page4', {templateUrl: 'view/page4.html', controller: 'page4C'})
        //.when('/page5',{templateUrl:'tpl/page5.html',controller:'page5C'})
        .when('/page6', {templateUrl: 'view/page6.html', controller: 'page6C'})
        .when('/page7', {templateUrl: 'view/page7.html', controller: 'page7C'})
        .when('/page8', {templateUrl: 'view/page8.html', controller: 'page8C'})
        .when('/page9', {templateUrl: 'view/page9.html', controller: 'page9C'})
        .when('/page10', {templateUrl: 'view/page10.html', controller: 'page10C'})
        .when('/page11', {templateUrl: 'view/page11.html', controller: 'page11C'})
        .when('/page12', {templateUrl: 'view/page12.html', controller: 'page12C'})
        .when('/page13', {templateUrl: 'view/page13.html', controller: 'page13C'})
        .when('/page14', {templateUrl: 'view/page14.html', controller: 'page14C'})
        .when('/page15', {templateUrl: 'view/page15.html', controller: 'page15C'})
        .when('/page16', {templateUrl: 'view/page16.html', controller: 'page16C'})
        .when('/page17', {templateUrl: 'view/page17.html', controller: 'page17C'})
        .when('/page18', {templateUrl: 'view/page18.html', controller: 'page18C'})
        .when('/page19', {templateUrl: 'view/page19.html', controller: 'page19C'})
        .when('/page20', {templateUrl: 'view/page20.html', controller: 'page20C'})
        .when('/page21', {templateUrl: 'view/page21.html', controller: 'page21C'})
        .when('/page22', {templateUrl: 'view/page22.html', controller: 'page22C'})
        .when('/page23', {templateUrl: 'view/page23.html', controller: 'page23C'})
        .when('/page24', {templateUrl: 'view/page24.html', controller: 'page24C'})
        .when('/page25', {templateUrl: 'view/page25.html', controller: 'page25C'})
        .when('/page26', {templateUrl: 'view/page26.html', controller: 'page26C'})
        .when('/page27', {templateUrl: 'view/page27.html', controller: 'page27C'})
        .when('/page28', {templateUrl: 'view/page28.html', controller: 'page28C'})
        .when('/page29', {templateUrl: 'view/page29.html', controller: 'page29C'})
        .when('/page30', {templateUrl: 'view/page30.html', controller: 'page30C'})
        .when('/page31', {templateUrl: 'view/page31.html', controller: 'page31C'})
        .when('/page32', {templateUrl: 'view/page32.html', controller: 'page32C'})
        .when('/page33', {templateUrl: 'view/page33.html', controller: 'page33C'})
        .when('/page34', {templateUrl: 'view/page34.html', controller: 'page34C'})
        .when('/page35', {templateUrl: 'view/page35.html', controller: 'page35C'})
        .when('/page36', {templateUrl: 'view/page36.html', controller: 'page36C'})
        .when('/page37', {templateUrl: 'view/page37.html', controller: 'page37C'})
        .when('/page38', {templateUrl: 'view/page38.html', controller: 'page38C'})
        .when('/page39', {templateUrl: 'view/page39.html', controller: 'page39C'})
        .when('/login', {templateUrl: 'view/login.html', controller: 'loginC'})
        .otherwise({redirectTo: '/page34'});
}]);
app.directive('assAllThree',['$rootScope', function ($rootScope) {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                if (scope.checkAll) {
                    var a = elem.parents('.page3-fucking-list').find('input');
                    for (var i = 0; i < a.length; i++) {
                        if (!a.eq(i).attr('disabled')) {
                            a[i].checked = true;
                            a.eq(i).parent().addClass('on');
                        }
                    }
                } else {
                    var b = elem.parents('.page3-fucking-list').find('input');
                    for (var j = 0; j < b.length; j++) {
                        if (!b.eq(j).attr('disabled')) {
                            b[j].checked = false;
                            b.eq(j).parent().removeClass('on');
                        }
                    }
                }
            });
        }
    }
}]);
app.directive('assOneThree',['$rootScope', function ($rootScope) {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                if (elem.prop('checked')) {
                    elem.parent().addClass('on');
                } else {
                    elem.parent().removeClass('on');
                }
                // if (scope.checked.length === scope.isAll.length) {
                //     elem.parents('.page3-fucking-list').find('.page3-div-checkbox').eq(0).addClass('on');
                // } else {
                //     elem.parents('.page3-fucking-list').find('.page3-div-checkbox').eq(0).removeClass('on');
                // }
            });
        }
    }
}]);

app.directive('canUser',["$timeout",function ($timeout) {
    return {
        link: function (scope, elem) {
            $timeout(function () {
                if (elem.prop('checked')) {
                    elem.parent().parent().parent().parent().find('.page4CelueB').removeAttr('disabled').css('background', '#2abf9e');
                } else {
                    elem.parent().parent().parent().parent().find('.page4CelueB').attr('disabled', 'disabled').css('background', '#a6a6a6');
                }
            }, 0)
            elem.click(function () {
                if (elem.prop('checked')) {
                    elem.parent().parent().parent().parent().find('.page4CelueB').removeAttr('disabled').css('background', '#2abf9e');
                } else {
                    elem.parent().parent().parent().parent().find('.page4CelueB').attr('disabled', 'disabled').css('background', '#a6a6a6');
                }
            })
        }
    }
}]);

app.directive('checkedAssFour',["$rootScope",function ($rootScope) {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                if (elem.prop('checked')) {
                    elem.parent().addClass('on');
                } else {
                    elem.parent().removeClass('on');
                }
                if (scope.checked.length === $rootScope.equipList4.length) {
                    elem.parents('.page4-floor-one-list').find('span').eq(0).addClass('on');
                } else {
                    elem.parents('.page4-floor-one-list').find('span').eq(0).removeClass('on');
                }
            });
        }
    }
}]);

app.directive('endService',["$rootScope","$http",function ($rootScope, $http) {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                var tid = elem.attr('t_id');
                $http.get($rootScope.link + '/remote/close?tid=' + tid).success(function (data) {
                    if (data.code == 200) {
                        $('.page1-alert-small-success').show(300).find('.page1-alert-small-success-con').html('&nbsp;&nbsp;终止成功成功');
                        setTimeout(function () {
                            $('.page1-alert-small-success').hide(300)
                        }, 2000)
                        //$http.get($rootScope.link+'/remote/getTask?pageNo=1&pageSize=2').success(function(data){
                        //    if(data.code==200){
                        //        scope.assList=data.data.content;
                        //        $('#pages20').Page({
                        //            totalPages: data.data.totalPages,//分页总数
                        //            liNums: 5,//分页的数字按钮数(建议取奇数)
                        //            activeClass: 'activP', //active 类样式定义
                        //            callBack : function(page){
                        //                $http.get($rootScope.link+'/remote/getTask?pageNo='+page+'&pageSize=2').success(function(data){
                        //                    scope.assList=data.data.content;
                        //                })
                        //            }
                        //        });
                        //    }
                        //});
                        elem.prev().prev().attr('disabled', 'disabled').css('background', '#ccc');
                        elem.prev().attr('disabled', 'disabled').css('background', '#ccc');
                        elem.attr('disabled', 'disabled').css('background', '#ccc');
                        elem.parent().parent().prev().prev().text('执行完成');
                    }else {
                        $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;终止失败，请检查设备连接并重试');
                        setTimeout(function () {
                            $('.page1-alert-small-danger').hide(300)
                        }, 2000)
                    }
                });
            });
        }
    }
}]);

app.directive('gFour',["$timeout",function ($timeout) {
    return {
        link: function (scope, elem) {
            $timeout(function () {
                if (elem.prop('checked')) {
                    elem.parent().addClass('on');
                } else {
                    elem.parent().removeClass('on');
                }
            }, 0);
            elem.click(function () {
                if (elem.prop('checked')) {
                    elem.parent().addClass('on');
                } else {
                    elem.parent().removeClass('on');
                }
            });
        }
    }
}]);

//=======================上传=========================
app.directive('getAss',["$http","$rootScope",function ($http, $rootScope) {
    return {
        link: function (scope, elem) {
            elem.on('change', function () {
                a = false;
                var fd = new FormData();
                var file = document.querySelector('#ass-input1').files[0];
                fd.append('file', file);
                $http({
                    method: 'POST',
                    url: $rootScope.link + "/account/addWeChatNumber",
                    data: fd,
                    headers: {'Content-Type': undefined},
                    transformRequest: angular.identity
                }).success(function (response) {
                    //上传成功的操作
                    if (response.code == 200) {
                        //$rootScope.pageZhe=false;
                        scope.MemberList = response.data;
                        $http.get($rootScope.link + '/group/getGroupData').success(function (data) {
                            $rootScope.groupNames = data.data;
                            $rootScope.groupNumbers = data.data.length;
                        });
                    }else {
                    }
                });
            });
        }
    }
}]);

app.directive('getAssSeven',["$http","$rootScope",function ($http, $rootScope) {
    return {
        link: function (scope, elem) {
            elem.on('change', function () {
                var fd = new FormData();
                var file = document.querySelector('#ass-input7').files[0];
                fd.append('files', file);
                $http({
                    method: 'POST',
                    url: $rootScope.link + "/wechatPlus/resolveDirectFiles",
                    data: fd,
                    headers: {'Content-Type': undefined},
                    transformRequest: angular.identity
                }).success(function (response) {
                    //上传成功的操作
                    scope.WxMemberList1 = response.data;
                    for (var i = 0, arr = []; i < response.data.length; i++) {
                        var obj = {};
                        if(response.data[i].msg=="null"){
                            response.data[i].msg="无"
                        }
                        obj['name'] = response.data[i].name;

                        obj['number'] = response.data[i].number;
                        obj['msg'] = response.data[i].msg;
                        if(response.data[i].name==undefined){
                            response.data[i].name=response.data[i].number
                        }

                        arr.push(obj);
                    }

                    for (var ii = 0, arr1 = []; ii < response.data.length; ii++) {
                        var obj1 = [];
                        obj1= response.data[ii].number;
                        arr1.push(obj1);
                    }
                    for (var ii = 0, arr2 = []; ii < response.data.length; ii++) {
                        var obj2 = [];
                        obj2= response.data[ii].msg;
                        arr2.push(obj2);
                    }
                    scope.assList = arr;
                    scope.assList1 = arr1;
                    scope.assList2 = arr2;
                    // console.log(arr,"arr")
                    // console.log(arr1,"arr1")
                    scope.sendAllButton = true;
                }).error(function () {
                    $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;用户解析失败，请重试并检查模板格式');
                    setTimeout(function () {
                        $('.page1-alert-small-danger').hide(300)
                    }, 2000)
                });
            });
        }
    }
}]);

app.directive('getAssSix',["$http","$rootScope",function ($http, $rootScope) {
    return {
        link: function (scope, elem) {

            elem.on('change', function () {
                $('.jijijiji').html('重新上传')
                var fd = new FormData();
                var file = document.querySelector('#ass-input6').files[0];
                fd.append('files', file);
                $http({
                    method: 'POST',
                    url: $rootScope.link + "/wechatPlus/resolveFiles",
                    data: fd,
                    headers: {'Content-Type': undefined},
                    transformRequest: angular.identity
                }).success(function (response) {
                    //上传成功的操作
                    scope.WxMemberList = response.data;
                    for (var i = 0, arr = []; i < response.data.length; i++) {
                        var obj = {};
                        obj['name'] = response.data[i].name;

                        obj['number'] = response.data[i].number ;
                        if(response.data[i].name==undefined){
                            response.data[i].name=response.data[i].number
                            obj['name'] =response.data[i].number;
                        }
                        arr.push(obj);
                    }
                    scope.assList = arr;
                    scope.sendAllButton = true;
                }).error(function () {
                    $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;用户解析失败，请重试并检查模板格式');
                    setTimeout(function () {
                        $('.page1-alert-small-danger').hide(300)
                    }, 2000)
                });
            });
        }
    }
}]);

app.directive('getAssThirtyTwo',["$http","$rootScope","$scope",function ($http, $rootScope,$scope) {
    return {
        link: function (scope, elem) {
            elem.on('change', function () {
                var fd = new FormData();
                var file = document.querySelector('#ass-input32').files[0];
                fd.append('files', file);
                $http({
                    method: 'POST',
                    url: $rootScope.link + "/wechatPlus/resolveDirectFiles",
                    data: fd,
                    headers: {'Content-Type': undefined},
                    transformRequest: angular.identity
                }).success(function (response) {
                    //上传成功的操作
                    scope.TurnCome=true
                    scope.WxMemberList = response.data;
                    for (var i = 0, arr = []; i < response.data.length; i++) {
                        var obj = {};
                        obj['name'] = response.data[i].name;

                        // obj['number'] = response.data[i].number;
                        // obj['msg'] = response.data[i].msg;
                        // if(response.data[i].name==undefined){
                        //     response.data[i].name=response.data[i].number
                        // }

                        arr.push(obj);
                    }

                    // for (var ii = 0, arr1 = []; ii < response.data.length; ii++) {
                    //     var obj1 = [];
                    //     obj1= response.data[ii].number;
                    //     arr1.push(obj1);
                    // }
                    // for (var ii = 0, arr2 = []; ii < response.data.length; ii++) {
                    //     var obj2 = [];
                    //     obj2= response.data[ii].msg;
                    //     arr2.push(obj2);
                    // }
                    scope.assList = arr;
                    // scope.assList1 = arr1;
                    // scope.assList2 = arr2;
                    // console.log(arr,"arr")
                    // console.log(arr1,"arr1")
                    scope.sendAllButton = true;
                }).error(function () {
                    $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;用户解析失败，请重试并检查模板格式');
                    setTimeout(function () {
                        $('.page1-alert-small-danger').hide(300)
                    }, 2000)
                });
            });
        }
    }
}]);

app.directive('getEdit', function () {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                elem.hide();
                elem.prev().show();
                elem.parent().parent().find('input').removeClass('on').removeAttr('readonly');
            });
        }
    }
});
app.directive('getEdit2', function () {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                elem.hide();
                elem.prev().show();
                elem.parent().parent().find('input').removeClass('on').removeAttr('readonly');
            });
        }
    }
});

app.directive('getSave',["$rootScope","$http",function ($rootScope, $http) {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                var assId = elem.attr('mess_id');
                var assNumber = elem.parent().parent().find('.page4-wx-number').val();
                var assPassword = elem.parent().parent().find('.page4-wx-password').val() || '';
                var assNickname = elem.parent().parent().find('.page4-wx-nickname').val() || '';
                var assTag = elem.parent().parent().find('.page4-wx-tag').val() || '';
                var assWnumber = elem.attr('wn') || '';
                if (assNumber == '') {
                    $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请填写需要保存的帐号');
                    setTimeout(function () {
                        $('.page1-alert-small-danger').hide(300)
                    }, 2000)
                }
                else {
                    $http.get($rootScope.link + '/wechat/updateWechat?id=' + assId + '&number=' + assNumber + '&password=' + assPassword + '&nickname=' + assNickname + '&tag=' + assTag).success(function (data) {
                        if (data.code == 200) {
                            $('.page1-alert-small-success').show(300).find('.page1-alert-small-success-con').html('&nbsp;&nbsp;保存成功');
                            setTimeout(function () {
                                $('.page1-alert-small-success').hide(300)
                            }, 2000)
                            elem.hide();
                            elem.next().show();
                            elem.parent().parent().find('input').addClass('on').attr('readonly', 'readonly');
                        } else {
                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;保存失败');
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

app.directive('getSave2',["$rootScope","$http",function ($rootScope, $http) {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                var assId = elem.attr('mess_id');
                var assNumber = elem.parent().parent().find('.page4-wx-number').val();
                var assPassword = elem.parent().parent().find('.page4-wx-password').val() || '';
                var assNickname = elem.parent().parent().find('.page4-wx-nickname').val() || '';
                var assTag = elem.parent().parent().find('.page4-wx-tag').val() || '';
                var assWnumber = elem.attr('wn') || '';
                if (assNumber == '') {
                    $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请填写需要保存的帐号');
                    setTimeout(function () {
                        $('.page1-alert-small-danger').hide(300)
                    }, 2000)
                }
                else {
                    $http.get($rootScope.link + '/momo/updateMomo?id=' + assId + '&number=' + assNumber + '&password=' + assPassword + '&nickname=' + assNickname + '&tag=' + assTag).success(function (data) {
                        if (data.code == 200) {
                            $('.page1-alert-small-success').show(300).find('.page1-alert-small-success-con').html('&nbsp;&nbsp;保存成功');
                            setTimeout(function () {
                                $('.page1-alert-small-success').hide(300)
                            }, 2000)
                            elem.hide();
                            elem.next().show();
                            elem.parent().parent().find('input').addClass('on').attr('readonly', 'readonly');
                        } else {
                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;保存失败');
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

app.directive('groupAllCheckedEl',["$rootScope",function ($rootScope){
    return {
        link: function (scope, elem) {
            elem.click(function () {
                if (elem.prop('checked')) {
                    $rootScope.upMsg=1
                    elem.parent().addClass('on');
                    elem.parents('.page11-floor-two-list').find('.page11-div-checkbox').addClass('on').find('input').prop('checked', 'checked');
                } else {
                     $rootScope.upMsg=0
                    elem.parent().removeClass('on');
                    elem.parents('.page11-floor-two-list').find('.page11-div-checkbox').removeClass('on').find('input').prop('checked', function () {
                        return false
                    });
                }
            });
        }
    }
}]);

app.directive('groupAllCheckedFive', function () {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                if (elem.prop('checked')) {
                    elem.parent().removeClass('on');
                    elem.parents('.page5-floor-one-list').find('.page5-div-checkbox').removeClass('on').find('input').prop('checked', 'checked');
                } else {
                    elem.parent().addClass('on');
                    elem.parents('.page5-floor-one-list').find('.page5-div-checkbox').addClass('on').find('input').prop('checked', function () {
                        return false
                    });
                }
            });
        }
    }
});

app.directive('groupAllCheckedFour', function () {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                if (elem.prop('checked')) {
                    elem.parents('.page4-floor-one-list').find('span').addClass('on');
                } else {
                    elem.parents('.page4-floor-one-list').find('span').removeClass('on');
                }
            });
        }
    }
});

app.directive('groupAllCheckedTw', function () {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                if (elem.prop('checked')) {
                    elem.parent().addClass('on');
                    elem.parents('.page11-floor-two-list').find('.page11-div-checkbox').addClass('on').find('input').prop('checked', 'checked');
                } else {
                    elem.parent().removeClass('on');
                    elem.parents('.page11-floor-two-list').find('.page11-div-checkbox').removeClass('on').find('input').prop('checked', function () {
                        return false
                    });
                }
            });
        }
    }
});
app.directive('groupAllCheckedNine', function () {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                if (elem.prop('checked')) {
                    elem.parent().addClass('on');
                    elem.parents('.page9-one-list').find('.page9-checked').addClass('on').find('input').prop('checked', 'checked');
                } else {
                    elem.parent().removeClass('on');
                    elem.parents('.page9-one-list').find('.page9-checked').removeClass('on').find('input').prop('checked', function () {
                        return false
                    });
                }
            });
        }
    }
});

app.directive('groupAllCheckedTw', function () {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                if (elem.prop('checked')) {
                    elem.parent().addClass('on');
                    elem.parents('.page12-floor-two-list').find('.page12-div-checkbox').addClass('on').find('input').prop('checked', 'checked');
                } else {
                    elem.parent().removeClass('on');
                    elem.parents('.page12-floor-two-list').find('.page12-div-checkbox').removeClass('on').find('input').prop('checked', function () {
                        return false
                    });
                }
            });
        }
    }
});

app.directive('groupCheckAll', function () {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                if (elem.prop('checked')) {
                    elem.parent().addClass('on');

                    //--------------------二级选中给三级添加选中状态---------------------
                    elem.parent().parent().next().find('p').addClass('on').find('input').prop('checked', function () {
                        return true
                    });


                    var eNumberfour = elem.parent().parent().parent().parent().find('input');
                    var flagfour = true;
                    for (var i = 0; i < eNumberfour.length; i++) {
                        if (eNumberfour.eq(i).prop('checked') == false) {
                            flagfour = false;
                        }
                    }
                    if (flagfour) {
                        elem.parent().parent().parent().parent().prev().find('p').addClass('on').find('input').prop('checked', function () {
                            return true
                        });
                    } else {
                        elem.parent().parent().parent().parent().prev().find('p').removeClass('on').find('input').prop('checked', function () {
                            return false
                        });
                    }
                } else {
                    //-------二级选中取消-------
                    elem.parent().parent().parent().parent().prev().find('p').removeClass('on').find('input').prop('checked', function () {
                        return false
                    });
                    elem.parent().removeClass('on');
                    elem.parent().parent().next().find('p').removeClass('on').find('input').prop('checked', function () {
                        return false
                    });

                }
            });
        }
    }
});

app.directive('groupCheckAll24',["$rootScope","$http",function ($rootScope, $http) {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                if (elem.prop('checked')) {
                    elem.parent().addClass('on');

                    //--------------------二级选中给三级添加选中状态---------------------
                    elem.parent().parent().next().find('p').addClass('on').find('input').prop('checked', function () {
                        return true
                    });


                    var eNumberfour = elem.parent().parent().parent().parent().find('input');
                    var flagfour = true;
                    for (var i = 0; i < eNumberfour.length; i++) {
                        if (eNumberfour.eq(i).prop('checked') == false) {
                            flagfour = false;
                        }
                    }
                    if (flagfour) {
                        elem.parent().parent().parent().parent().prev().find('p').addClass('on').find('input').prop('checked', function () {
                            return true
                        });
                    } else {
                        elem.parent().parent().parent().parent().prev().find('p').removeClass('on').find('input').prop('checked', function () {
                            return false
                        });
                    }
                } else {
                    //-------二级选中取消-------
                    elem.parent().parent().parent().parent().prev().find('p').removeClass('on').find('input').prop('checked', function () {
                        return false
                    });
                    elem.parent().removeClass('on');
                    elem.parent().parent().next().find('p').removeClass('on').find('input').prop('checked', function () {
                        return false
                    });

                }
                scope.fuckArr = [];
                for (var i = 0; i < $('.new-wx-equip-input9').length; i++) {
                    if ($('.new-wx-equip-input9').eq(i).prop('checked')) {
                        scope.fuckArr.push($('.new-wx-equip-input9').eq(i).parent().next().attr('title'));
                    }
                }
                $http.get($rootScope.link + '/momo/getMomosByDevice?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=1&pageSize=6').success(function (data) {
                    if (data.code == 200) {
                        $rootScope.MemberList9 = data.data.content;
                        $('#pages9').Page({
                            totalPages: data.data.totalPages,//分页总数
                            liNums: 5,//分页的数字按钮数(建议取奇数)
                            activeClass: 'activP', //active 类样式定义
                            callBack: function (page) {
                                $http.get($rootScope.link + '/momo/getMomosByDevice?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=' + page + '&pageSize=6').success(function (data) {
                                    $rootScope.MemberList9 = data.data.content;
                                })
                            }
                        });
                    }else{

                        $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                        setTimeout(function () {
                            $('.page1-alert-small-danger').hide(300)
                        }, 2000)
                    }
                });
            });
        }
    }
}]);

app.directive('groupCheckAllEightteen',["$rootScope","$http",function ($rootScope, $http) {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                if (elem.prop('checked')) {
                    elem.parent().addClass('on');
                    elem.parent().parent().next().find('p').addClass('on').find('input').prop('checked', function () {
                        return true
                    });
                } else {
                    elem.parent().removeClass('on');
                    elem.parent().parent().next().find('p').removeClass('on').find('input').prop('checked', function () {
                        return false
                    });
                }
                scope.fuckArr = [];
                for (var i = 0; i < $('.new-wx-equip-input18').length; i++) {
                    if ($('.new-wx-equip-input18').eq(i).prop('checked')) {
                        scope.fuckArr.push($('.new-wx-equip-input18').eq(i).parent().next().attr('title'));
                    }
                }
                $rootScope.socketArr = [];
                sessionStorage.setItem('devices', scope.fuckArr);
                var screenWatcher = function (id, url, device, tp, w, h) {

                    var BLANK_IMG =
                        'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';

                    var canvas = document.getElementById(id), g = canvas.getContext('2d');
                    var xs, ys, xe, ye;
                    var checkedArr = [];
                    canvas.addEventListener('mousedown', function (e) {
                        var x, y;
                        if (e.layerX || e.layerX == 0) {
                            xs = e.layerX;
                            ys = e.layerY;
                        } else if (e.offsetX || e.offsetX == 0) { // Opera
                            xs = e.offsetX;
                            ys = e.offsetY;
                        }
                        for (var e = 0; e < $('.canvas-ul li input').length; e++) {
                            if ($('.canvas-ul li input').eq(e).prop('checked')) {
                                checkedArr.push($('.canvas-ul li input').eq(e).attr('mess_id'));
                            }
                        }
                        checkedArr.push(device);
                    }, false);
                    canvas.addEventListener('mouseup', function (e) {
                        if (e.layerX || e.layerX == 0) {
                            xe = e.layerX;
                            ye = e.layerY;
                        } else if (e.offsetX || e.offsetX == 0) { // Opera
                            xe = e.offsetX;
                            ye = e.offsetY;
                        }
                        if (Math.abs(xe - xs) < 10 && Math.abs(ye - ys) < 10) {
                            $http.get($rootScope.link + '/device/touchDeviceScreen?devices=' + JSON.stringify(checkedArr) + '&touchPort=' + tp + '&x=' + parseInt(xs * (w / 228)) + '&y=' + parseInt(ys * (h / 400))).success(function (data) {
                            });
                        } else {
                            $http.get($rootScope.link + '/device/slideDeviceScreen?devices=' + JSON.stringify(checkedArr) + '&touchPort=' + tp + '&xs=' + parseInt(xs * (w / 228)) + '&ys=' + parseInt(ys * (h / 400)) + '&xe=' + parseInt(xe * (w / 228)) + '&ye=' + parseInt(ye * (h / 400))).success(function () {
                            });
                        }
                    }, false);
                    var ws = new WebSocket('ws://' + url);
                    $rootScope.socketArr.push(ws);
                    ws.binaryType = 'blob';

                    ws.onclose = function () {
                        console.log('onclose', arguments)
                    };

                    ws.onerror = function () {
                        console.log('onerror', arguments)
                    };

                    ws.onmessage = function (message) {
                        var blob = new Blob([message.data], {type: 'image/jpeg'});
                        var URL = window.URL || window.webkitURL;
                        var img = new Image();
                        img.onload = function () {
                            //console.log(img.width, img.height);
                            canvas.width = img.width;
                            canvas.height = img.height;
                            g.drawImage(img, 0, 0);
                            img.onload = null;
                            img.src = BLANK_IMG;
                            img = null;
                            u = null;
                            blob = null
                            if (!$rootScope.isScreenPage) {
                                ws.close();
                                $('.canvas-ul').empty();
                            }
                        };
                        var u = URL.createObjectURL(blob);
                        img.src = u
                    };
                    ws.onopen = function () {
                        console.log('onopen', arguments);
                        ws.send('1920x1080/0');
                    }
                };
                if (scope.fuckArr.length > 0) {
                    $('.page18-empty').hide();
                    $http.get($rootScope.link + '/device/showDeviceScreen?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=1&pageSize=10').success(function (data) {
                        $('.canvas-ul').empty();
                        for (var i = 0; i < data.data.length; i++) {
                            var cLi = '<li class="canvas-li"><h2>' + data.data[i].rank + '</h2><h5></h5><canvas id="canvas' + i + '"></canvas><div><span></span><h6></h6><p><input type="checkbox" mess_id="' + data.data[i].device + '"></p></div></li>';
                            $('.canvas-ul').append(cLi);
                            var assDevice = data.data[i].device;
                            var touchPort = data.data[i].touchStart;
                            var assId = 'canvas' + i;
                            var assPort = data.data[i].ip + ':8080/wgcs/ws/' + data.data[i].inputStart + '/' + data.data[i].device;
                            var equipWidth = data.data[i].wmSize.split('x')[0];
                            var equipHeight = data.data[i].wmSize.split('x')[1];
                            screenWatcher(assId, assPort, assDevice, touchPort, equipWidth, equipHeight);
                        }
                        $('.canvas-ul li span').click(function () {
                            var checkedArr = [];
                            for (var e = 0; e < $('.canvas-ul li input').length; e++) {
                                if ($('.canvas-ul li input').eq(e).prop('checked')) {
                                    checkedArr.push($('.canvas-ul li input').eq(e).attr('mess_id'));
                                }
                            }
                            var device = $(this).next().next().find('input').attr('mess_id');
                            checkedArr.push(device);
                            $http.get($rootScope.link + '/device/returnBack?devices=' + JSON.stringify(checkedArr)).success(function () {
                            });
                        });
                        $('.canvas-ul li h6').click(function () {
                            var checkedArr = [];
                            for (var e = 0; e < $('.canvas-ul li input').length; e++) {
                                if ($('.canvas-ul li input').eq(e).prop('checked')) {
                                    checkedArr.push($('.canvas-ul li input').eq(e).attr('mess_id'));
                                }
                            }
                            var device = $(this).next().find('input').attr('mess_id');
                            checkedArr.push(device);
                            $http.get($rootScope.link + '/device/returnHome?devices=' + JSON.stringify(checkedArr)).success(function () {
                            });
                        });
                        $('.canvas-ul li h5').click(function () {
                            var device = $(this).next().next().find('input').attr('mess_id');
                            $http.get($rootScope.link + '/device/clear?device=' + device).success(function () {
                            });
                        });
                        $('.canvas-ul li input').click(function () {
                            if ($(this).prop('checked')) {
                                $(this).parent().addClass('on');
                                for (var p = 0, flag = true; p < $('.canvas-ul li input').length; p++) {
                                    if (!$('.canvas-ul li input').eq(p).prop('checked')) {
                                        flag = false;
                                    }
                                }
                                if (!flag) {
                                    $('.page18-new-add h3 span').removeClass('on').find('input').prop('checked', function () {
                                        return false
                                    });
                                } else {
                                    $('.page18-new-add h3 span').addClass('on').find('input').prop('checked', function () {
                                        return true
                                    });
                                }
                            } else {
                                $(this).parent().removeClass('on');
                                $('.page18-new-add h3 span').removeClass('on').find('input').prop('checked', function () {
                                    return false
                                });
                            }
                        });
                        var ww = $('.page18-floor-one').width();
                        var am;
                        if (ww < 1200 && ww >= 960) {
                            am = (ww - 970) / 8;
                        } else if (ww < 960 && ww >= 720) {
                            am = (ww - 730) / 6;
                        } else if (ww >= 1200) {
                            am = (ww - 1210) / 10
                        }
                        $('.page18-floor-one').find('.canvas-li').css('margin', '0 ' + am + 'px 8px');
                        //$('#pages18').Page({
                        //    totalPages: data.data.totalPages,//分页总数
                        //    liNums: 5,//分页的数字按钮数(建议取奇数)
                        //    activeClass: 'activP', //active 类样式定义
                        //    callBack : function(page){
                        //        $http.get($rootScope.link+'/device/showDeviceScreen?devices='+JSON.stringify(scope.fuckArr)+'&pageNo='+page+'&pageSize=10').success(function(data){
                        //            $('.canvas-ul').empty();
                        //            for(var i=0;i< data.data.content.length;i++){
                        //                var cLi='<li class="canvas-li"><h2>'+data.data.content[i].rank+'</h2><h5></h5><canvas id="canvas'+i+'"></canvas><div><span></span><h6></h6><p><input type="checkbox" mess_id="'+data.data.content[i].device+'"></p></div></li>';                            $('.canvas-ul').append(cLi);
                        //                var assDevice=data.data.content[i].device;
                        //                var touchPort=data.data.content[i].touchStart;
                        //                var assId='canvas'+i;
                        //                var assPort=data.data.content[i].ip+':8080/wgcs/ws/'+data.data.content[i].inputStart+'/'+data.data.content[i].device;
                        //                var equipWidth=data.data.content[i].wmSize.split('x')[0];
                        //                var equipHeight=data.data.content[i].wmSize.split('x')[1];
                        //                screenWatcher(assId,assPort,assDevice,touchPort,equipWidth,equipHeight);
                        //            }
                        //            $('.canvas-ul li span').click(function(){
                        //                var checkedArr=[];
                        //                for(var e=0;e<$('.canvas-ul li input').length;e++){
                        //                    if($('.canvas-ul li input').eq(e).prop('checked')){
                        //                        checkedArr.push($('.canvas-ul li input').eq(e).attr('mess_id'));
                        //                    }
                        //                }
                        //                var device=$(this).next().next().find('input').attr('mess_id');
                        //                checkedArr.push(device);
                        //                $http.get($rootScope.link+'/device/returnBack?devices='+JSON.stringify(checkedArr)).success(function(){});
                        //            });
                        //            $('.canvas-ul li h6').click(function(){
                        //                var checkedArr=[];
                        //                for(var e=0;e<$('.canvas-ul li input').length;e++){
                        //                    if($('.canvas-ul li input').eq(e).prop('checked')){
                        //                        checkedArr.push($('.canvas-ul li input').eq(e).attr('mess_id'));
                        //                    }
                        //                }
                        //                var device=$(this).next().find('input').attr('mess_id');
                        //                checkedArr.push(device);
                        //                $http.get($rootScope.link+'/device/returnHome?devices='+JSON.stringify(checkedArr)).success(function(){});
                        //            });
                        //            $('.canvas-ul li h5').click(function(){
                        //                var device=$(this).next().next().find('input').attr('mess_id');
                        //                $http.get($rootScope.link+'/device/clear?device='+device).success(function(){});
                        //            });
                        //            $('.canvas-ul li input').click(function(){
                        //                if($(this).prop('checked')){
                        //                    $(this).parent().addClass('on');
                        //                    for(var p= 0,flag=true;p<$('.canvas-ul li input').length;p++){
                        //                        if(!$('.canvas-ul li input').eq(p).prop('checked')){
                        //                            flag=false;
                        //                        }
                        //                    }
                        //                    if(!flag){
                        //                        $('.page18-new-add h3 span').removeClass('on').find('input').prop('checked',function(){return false});
                        //                    }else{
                        //                        $('.page18-new-add h3 span').addClass('on').find('input').prop('checked',function(){return true});
                        //                    }
                        //                }else{
                        //                    $(this).parent().removeClass('on');
                        //                    $('.page18-new-add h3 span').removeClass('on').find('input').prop('checked',function(){return false});
                        //                }
                        //            });
                        //            var ww=$('.page18-floor-one').width();
                        //            var am;
                        //            if(ww<1200 && ww>=960){
                        //                am=(ww-970)/8;
                        //            }else if(ww < 960 && ww >= 720){
                        //                am=(ww-730)/6;
                        //            }else if(ww>=1200){
                        //                am=(ww-1210)/10
                        //            }
                        //            $('.page18-floor-one').find('.canvas-li').css('margin','0 '+am+'px 8px');
                        //        })
                        //    }
                        //});
                    });
                } else {
                    $('.page18-empty').show();
                    $('.canvas-ul').empty();
                }

            });
        }
    }
}]);

var ii=0
app.directive('groupCheckAllEl',["$rootScope","$http",function ($rootScope, $http) {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                elem.parent().parent().parent().parent().prev().find('p').addClass('on').find('input').prop('checked', function () {
                    return false
                });
                if (elem.prop('checked')) {
                    elem.parent().addClass('on');

                    //--------------------二级选中给三级添加选中状态---------------------
                    elem.parent().parent().next().find('p').addClass('on').find('input').prop('checked', function () {
                        return true
                    });

                    var eNumberfour = elem.parent().parent().parent().parent().parent().find('input');
                    var flagfour = true;
                    for (var i = 0; i < eNumberfour.length; i++) {
                        if (eNumberfour.eq(i).prop('checked') == false) {
                            flagfour = false;

                        }else{
                            flagfour = true;
                        }
                    }
                    if (flagfour==true) {
                        elem.parent().parent().parent().parent().prev().find('p').addClass('on').find('input').prop('checked', function () {
                            return true
                        });
                    } else {
                        elem.parent().parent().parent().parent().prev().find('p').removeClass('on').find('input').prop('checked', function () {
                            return false
                        });
                    }
                } else {
                    //-------二级选中取消-------
                    elem.parent().parent().parent().parent().prev().find('p').removeClass('on').find('input').prop('checked', function () {
                        return false
                    });
                    elem.parent().removeClass('on');
                    elem.parent().parent().next().find('p').removeClass('on').find('input').prop('checked', function () {
                        return false
                    });

                }
                scope.fuckArr = [];
                for (var i = 0; i < $('.new-wx-equip-input11').length; i++) {
                    if ($('.new-wx-equip-input11').eq(i).prop('checked')) {
                        scope.fuckArr.push($('.new-wx-equip-input11').eq(i).parent().next().attr('title'));
                    }
                }
                $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=1&pageSize=16').success(function (data) {
                    if (data.code == 200) {
                        $rootScope.MemberList11 = data.data.content;
                        // console.log($rootScope.MemberList11)
                        $('#pages11').Page({
                            totalPages: data.data.totalPages,//分页总数
                            liNums: 5,//分页的数字按钮数(建议取奇数)
                            activeClass: 'activP', //active 类样式定义
                            callBack: function (page) {
                                $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=' + page + '&pageSize=16').success(function (data) {
                                    $rootScope.MemberList11 = data.data.content;
                                })
                            }
                        });
                    }else{

                        $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                        setTimeout(function () {
                            $('.page1-alert-small-danger').hide(300)
                        }, 2000)
                    }
                });
            });
        }
    }
}]);
app.directive('groupCheckAllFif',["$rootScope","$http",function ($rootScope, $http) {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                if (elem.prop('checked')) {
                    elem.parent().addClass('on');

                    //--------------------二级选中给三级添加选中状态---------------------
                    elem.parent().parent().next().find('p').addClass('on').find('input').prop('checked', function () {
                        return true
                    });


                    var eNumberfour = elem.parent().parent().parent().parent().find('input');
                    var flagfour = true;
                    for (var i = 0; i < eNumberfour.length; i++) {
                        if (eNumberfour.eq(i).prop('checked') == false) {
                            flagfour = false;
                        }
                    }
                    if (flagfour) {
                        elem.parent().parent().parent().parent().prev().find('p').addClass('on').find('input').prop('checked', function () {
                            return true
                        });
                    } else {
                        elem.parent().parent().parent().parent().prev().find('p').removeClass('on').find('input').prop('checked', function () {
                            return false
                        });
                    }
                } else {
                    //-------二级选中取消-------
                    elem.parent().parent().parent().parent().prev().find('p').removeClass('on').find('input').prop('checked', function () {
                        return false
                    });
                    elem.parent().removeClass('on');
                    elem.parent().parent().next().find('p').removeClass('on').find('input').prop('checked', function () {
                        return false
                    });

                }
                scope.fuckArr = [];
                for (var i = 0; i < $('.new-wx-equip-input15').length; i++) {
                    if ($('.new-wx-equip-input15').eq(i).prop('checked')) {
                        scope.fuckArr.push($('.new-wx-equip-input15').eq(i).parent().next().attr('title'));
                    }
                }
                $http.get($rootScope.link + '/operate/getZombieFan?devices=' + JSON.stringify(scope.fuckArr)).success(function (data) {
                    ;
                    if (data.code == 200) {
                        $rootScope.zombieList = data.data;
                    }else{

                        $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                        setTimeout(function () {
                            $('.page1-alert-small-danger').hide(300)
                        }, 2000)
                    }
                });
            });
        }
    }
}]);

app.directive('groupCheckAllFour', ["$rootScope", "$http", function ($rootScope, $http) {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                    if (elem.prop('checked')) {
                        elem.parent().addClass('on');

                        //--------------------二级选中给三级添加选中状态---------------------
                        elem.parent().parent().next().find('p').addClass('on').find('input').prop('checked', function () {
                            return true
                        });
                        elem.parent().parent().next().next().find('p').addClass('on').find('input').prop('checked', function () {
                            return true
                        });


                        var eNumberfour = elem.parent().parent().parent().parent().find('input');
                        var flagfour = true;
                        for (var i = 0; i < eNumberfour.length; i++) {
                            if (eNumberfour.eq(i).prop('checked') == false) {
                                flagfour = false;
                            }
                        }
                        if (flagfour) {
                            elem.parent().parent().parent().parent().prev().prev().find('p').addClass('on').find('input').prop('checked', function () {
                                return true
                            });
                        } else {
                            elem.parent().parent().parent().parent().prev().prev().find('p').removeClass('on').find('input').prop('checked', function () {
                                return false
                            });
                        }
                    } else {
                        //-------二级选中取消-------
                        elem.parent().parent().parent().parent().prev().prev().find('p').removeClass('on').find('input').prop('checked', function () {
                            return false
                        });
                        elem.parent().removeClass('on');
                        elem.parent().parent().next().next().find('p').removeClass('on').find('input').prop('checked', function () {
                            return false
                        });
                        elem.parent().parent().next().find('p').removeClass('on').find('input').prop('checked', function () {
                            return false
                        });

                    }


                    scope.fuckArr = [];
                    for (var i = 0; i < $('.page17-wx-input').length; i++) {
                        if ($('.page17-wx-input').eq(i).prop('checked')) {
                            scope.fuckArr.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
                        }
                    }
                    $rootScope.table2AllChecks=scope.fuckArr.length;
                    if ($rootScope.page4getMoreData == 1) {
                        $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=1&pageSize=15').success(function (data) {
                            if (data.code == 200) {
                                $rootScope.equipList4 = data.data.content;
                                $rootScope.page1InitDataLength1 = data.data.content.length
                                $('.lalaldemaxiya').css('display','block')
                                $('.page2-table1-page').pagination({
                                    totalData: $rootScope.page1InitDataLength1,
                                    showData: 15,
                                    pageCount: 1,
                                    coping: true,
                                    count: 2,
                                    callback: function (api) {
                                        var data = {
                                            page: api.getCurrent(),
                                        };
                                        $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=' + data.page + '&pageSize=15').success(function (data) {
                                            if (data.code == 200) {
                                                $rootScope.page1InitDataLength1 = data.data.content.length;
                                                $rootScope.equipList4 = data.data.content;
                                                $('.page3-div-checkbox-friends').attr('checked', false).parent().removeClass('on')
                                            }
                                        })
                                    }

                                })
                            } else {
                                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                                setTimeout(function () {
                                    $('.page1-alert-small-danger').hide(300)
                                }, 2000)
                            }
                        });
                    } else if ($rootScope.page4getMoreData == 2) {
                        if (scope.fuckArr.length > 0) {
                            $http.get($rootScope.link + '/operate/getContact?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=1&pageSize=15').success(function (data) {
                                if (data.code == 200) {
                                    $rootScope.WxList = data.data.content;
                                    $rootScope.page1InitDataLength = data.data.totalElements;
                                    $('.page3-div-checkbox-friends').attr('checked', false).parent().removeClass('on')
                                    $('.page2-table2-page').pagination({
                                        totalData: $rootScope.page1InitDataLength,
                                        pageCount: 1,
                                        showData: 15,
                                        coping: true,
                                        count: 2,
                                        callback: function (api) {
                                            var data = {
                                                page: api.getCurrent(),
                                            };
                                            if (scope.fuckArr.length == 0) {
                                                $rootScope.WxList = []
                                                $rootScope.page1InitDataLength = 0;
                                                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择相关设备查看对应好友');
                                                setTimeout(function () {
                                                    $('.page1-alert-small-danger').hide(300)
                                                }, 2000)
                                            } else {
                                                $http.get($rootScope.link + '/operate/getContact?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=' + data.page + '&pageSize=15').success(function (data) {
                                                    $rootScope.WxList = data.data.content;
                                                    $rootScope.page1InitDataLength = data.data.totalElements;
                                                    $('.page3-div-checkbox-friends').attr('checked', false).parent().removeClass('on')
                                                })
                                            }
                                        }
                                    })
                                } else {
                                    $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                                    setTimeout(function () {
                                        $('.page1-alert-small-danger').hide(300)
                                    }, 2000)
                                }
                            });
                        } else {
                            scope.fuckArr = []
                            scope.page1InitDataLength = 0
                            $http.get($rootScope.link + '/operate/getContact?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=1&pageSize=15').success(function (data) {
                                $rootScope.WxList = [];
                                $rootScope.page1InitDataLength = 0;
                                $('.page3-div-checkbox-friends').attr('checked', false).parent().removeClass('on')
                                $('.page2-table2-page').pagination({
                                    totalData: $rootScope.page1InitDataLength,
                                    pageCount: 1,
                                    showData: 15,
                                    coping: true,
                                    count: 2,
                                    callback: function (api) {
                                        var data = {
                                            page: api.getCurrent(),
                                        };
                                        $http.get($rootScope.link + '/operate/getContact?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=' + 1 + '&pageSize=15').success(function (data) {
                                            $rootScope.WxList = [];
                                            $rootScope.page1InitDataLength = 0;
                                            $('.page3-div-checkbox-friends').attr('checked', false).parent().removeClass('on')
                                        })
                                    }
                                })
                            })

                        }
                    }
                    else {
                        if (scope.fuckArr.length > 0) {
                            $('.page2-table3-page').css('display','block')
                            $http.get($rootScope.link + '/operate/getClubByWechatNumber?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=1&pageSize=15').success(function (data) {
                                if (data.code == 200) {
                                    $rootScope.WxList1 = data.data.content;
                                    $rootScope.page1InitDataLength2 = data.data.totalElements;
                                    $('.page3-div-checkbox-Groups').attr('checked', false).parent().removeClass('on')
                                    $('.page2-table3-page').pagination({
                                        totalData: $rootScope.page1InitDataLength2,
                                        pageCount: 1,
                                        showData: 15,
                                        coping: true,
                                        count: 2,
                                        callback: function (api) {
                                            var data = {
                                                page: api.getCurrent(),
                                            };
                                            if (scope.fuckArr.length == 0) {
                                                $rootScope.WxList1 = []
                                                $rootScope.page1InitDataLength2 = 0;
                                                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择相关设备查看对应好友');
                                                setTimeout(function () {
                                                    $('.page1-alert-small-danger').hide(300)
                                                }, 2000)
                                            } else {
                                                $http.get($rootScope.link + '/operate/getClubByWechatNumber?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=' + data.page + '&pageSize=15').success(function (data) {
                                                    $rootScope.WxList1 = data.data.content;
                                                    $rootScope.page1InitDataLength2 = data.data.totalElements;
                                                    $('.page3-div-checkbox-Groups').attr('checked', false).parent().removeClass('on')
                                                })
                                            }
                                        }
                                    })
                                } else {
                                    $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                                    setTimeout(function () {
                                        $('.page1-alert-small-danger').hide(300)
                                    }, 2000)
                                }
                            });
                        } else {
                            scope.fuckArr = []
                            $rootScope.page1InitDataLength2 = 0
                            $http.get($rootScope.link + '/operate/getClubByWechatNumber?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=1&pageSize=15').success(function (data) {
                                $rootScope.WxList1 = [];
                                $rootScope.page1InitDataLength2 = 0;
                                $('.page3-div-checkbox-Groups').attr('checked', false).parent().removeClass('on')
                                $('.page2-table3-page').pagination({
                                    totalData: $rootScope.page1InitDataLength2,
                                    pageCount: 1,
                                    showData: 15,
                                    coping: true,
                                    count: 2,
                                    callback: function (api) {
                                        var data = {
                                            page: api.getCurrent(),
                                        };
                                        $http.get($rootScope.link + '/operate/getClubByWechatNumber?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=' + 1 + '&pageSize=15').success(function (data) {
                                            $rootScope.WxList1 = [];
                                            $rootScope.page1InitDataLength2 = 0;
                                            $('.page3-div-checkbox-Groups').attr('checked', false).parent().removeClass('on')
                                        })
                                    }
                                })
                            })

                        }
                    }
                }
            );
        }
    }
}]);

app.directive('groupCheckAllFour1', ["$rootScope", "$http", function ($rootScope, $http) {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                    if (elem.prop('checked')) {
                        elem.parent().addClass('on');

                        //--------------------二级选中给三级添加选中状态---------------------
                        elem.parent().parent().next().find('p').addClass('on').find('input').prop('checked', function () {
                            return true
                        });
                        elem.parent().parent().next().next().find('p').addClass('on').find('input').prop('checked', function () {
                            return true
                        });


                        var eNumberfour = elem.parent().parent().parent().parent().find('input');
                        var flagfour = true;
                        for (var i = 0; i < eNumberfour.length; i++) {
                            if (eNumberfour.eq(i).prop('checked') == false) {
                                flagfour = false;
                            }
                        }
                        if (flagfour) {
                            elem.parent().parent().parent().parent().prev().prev().find('p').addClass('on').find('input').prop('checked', function () {
                                return true
                            });
                        } else {
                            elem.parent().parent().parent().parent().prev().prev().find('p').removeClass('on').find('input').prop('checked', function () {
                                return false
                            });
                        }
                    } else {
                        //-------二级选中取消-------
                        elem.parent().parent().parent().parent().prev().prev().find('p').removeClass('on').find('input').prop('checked', function () {
                            return false
                        });
                        elem.parent().removeClass('on');
                        elem.parent().parent().next().next().find('p').removeClass('on').find('input').prop('checked', function () {
                            return false
                        });
                        elem.parent().parent().next().find('p').removeClass('on').find('input').prop('checked', function () {
                            return false
                        });

                    }
                    scope.fuckArr = [];
                    for (var i = 0; i < $('.page17-wx-input').length; i++) {
                        if ($('.page17-wx-input').eq(i).prop('checked')) {
                            scope.fuckArr.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
                        }
                    }
                $rootScope.table2AllChecks=scope.fuckArr.length;
                    if ($rootScope.page5getMoreData == 1) {


                        $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=1&pageSize=15').success(function (data) {
                            if (data.code == 200) {
                                $rootScope.equipList4 = data.data.content;
                                scope.page1InitDataLength = data.data.content.length
                                $('.page2-table1-page').pagination({
                                    totalData: scope.page1InitDataLength,
                                    showData: 15,
                                    pageCount: 1,
                                    coping: true,
                                    count: 2,
                                    callback: function (api) {
                                        var data = {
                                            page: api.getCurrent(),
                                        };
                                        $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=' + data.page + '&pageSize=15').success(function (data) {
                                            if (data.code == 200) {
                                                scope.page1InitDataLength = data.data.content.length;
                                                $rootScope.equipList4 = data.data.content;
                                            }
                                        })
                                    }

                                })
                            } else {
                                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                                setTimeout(function () {
                                    $('.page1-alert-small-danger').hide(300)
                                }, 2000)
                            }
                        });
                    } else if ($rootScope.page5getMoreData == 2) {
                        // $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=1&pageSize=15').success(function (data) {
                        $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=1&pageSize=15').success(function (data) {
                            if (data.code == 200) {
                                $rootScope.equipList4 = data.data.content;
                                scope.page1InitDataLength = data.data.content.length;
                                $('.page2-table1-page').pagination({
                                    totalData: scope.page1InitDataLength,
                                    showData: 15,
                                    pageCount: 1,
                                    coping: true,
                                    count: 2,
                                    callback: function (api) {
                                        var data = {
                                            page: api.getCurrent(),
                                        };
                                        $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=' + data.page + '&pageSize=15').success(function (data) {
                                            if (data.code == 200) {
                                                scope.page1InitDataLength = data.data.content.length;
                                                $rootScope.equipList4 = data.data.content;
                                            }
                                        })
                                    }

                                })
                            } else {
                                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                                setTimeout(function () {
                                    $('.page1-alert-small-danger').hide(300)
                                }, 2000)
                            }
                        });
                    } else if ($rootScope.page5getMoreData == 10) {
                        $http.get($rootScope.link + '/wechat/getWechatsByDevice?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=1&pageSize=1000').success(function (data) {
                            if (data.code == 200) {
                                $rootScope.page3Data4AllData = data.data.content;
                            } else {
                                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                                setTimeout(function () {
                                    $('.page1-alert-small-danger').hide(300)
                                }, 2000)
                            }
                        });
                    }
                    else {

                    }
                }
            );
        }
    }
}]);

app.directive('groupCheckAllNine',["$rootScope","$http",function ($rootScope, $http) {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                if (elem.prop('checked')) {
                    elem.parent().addClass('on');

                    //--------------------二级选中给三级添加选中状态---------------------
                    elem.parent().parent().next().find('p').addClass('on').find('input').prop('checked', function () {
                        return true
                    });


                    var eNumberfour = elem.parent().parent().parent().parent().find('input');
                    var flagfour = true;
                    for (var i = 0; i < eNumberfour.length; i++) {
                        if (eNumberfour.eq(i).prop('checked') == false) {
                            flagfour = false;
                        }
                    }
                    if (flagfour) {
                        elem.parent().parent().parent().parent().prev().find('p').addClass('on').find('input').prop('checked', function () {
                            return true
                        });
                    } else {
                        elem.parent().parent().parent().parent().prev().find('p').removeClass('on').find('input').prop('checked', function () {
                            return false
                        });
                    }
                } else {
                    //-------二级选中取消-------
                    elem.parent().parent().parent().parent().prev().find('p').removeClass('on').find('input').prop('checked', function () {
                        return false
                    });
                    elem.parent().removeClass('on');
                    elem.parent().parent().next().find('p').removeClass('on').find('input').prop('checked', function () {
                        return false
                    });

                }
                scope.fuckArr = [];
                for (var i = 0; i < $('.new-wx-equip-input9').length; i++) {
                    if ($('.new-wx-equip-input9').eq(i).prop('checked')) {
                        scope.fuckArr.push($('.new-wx-equip-input9').eq(i).parent().next().attr('title'));
                    }
                }
                $http.get($rootScope.link + '/wechat/getWechatsByDevice?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=1&pageSize=6').success(function (data) {
                    if (data.code == 200) {
                        $rootScope.MemberList9 = data.data.content;
                        $('#pages9').Page({
                            totalPages: data.data.totalPages,//分页总数
                            liNums: 5,//分页的数字按钮数(建议取奇数)
                            activeClass: 'activP', //active 类样式定义
                            callBack: function (page) {
                                $http.get($rootScope.link + '/wechat/getWechatsByDevice?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=' + page + '&pageSize=6').success(function (data) {
                                    $rootScope.MemberList9 = data.data.content;
                                })
                            }
                        });
                    }else{
                        alert(data.msg)
                    }
                });
            });
        }
    }
}]);

app.directive('groupCheckAllSeventeen', ["$rootScope", "$http", function ($rootScope, $http) {
    return {
        link: function (scope, elem) {
            elem.click(function () {

                if (elem.prop('checked')) {
                    elem.parent().addClass('on');

                    //--------------------二级选中给三级添加选中状态---------------------
                    elem.parent().parent().next().find('p').addClass('on').find('input').prop('checked', function () {
                        return true
                    });
                    elem.parent().parent().next().next().find('p').addClass('on').find('input').prop('checked', function () {
                        return true
                    });


                    var eNumberfour = elem.parent().parent().parent().parent().find('input');
                    var flagfour = true;
                    for (var i = 0; i < eNumberfour.length; i++) {
                        if (eNumberfour.eq(i).prop('checked') == false) {
                            flagfour = false;
                        }
                    }
                    if (flagfour) {
                        elem.parent().parent().parent().parent().prev().prev().find('p').addClass('on').find('input').prop('checked', function () {
                            return true
                        });
                    } else {
                        elem.parent().parent().parent().parent().prev().prev().find('p').removeClass('on').find('input').prop('checked', function () {
                            return false
                        });
                    }
                } else {
                    //-------二级选中取消-------
                    elem.parent().parent().parent().parent().prev().prev().find('p').removeClass('on').find('input').prop('checked', function () {
                        return false
                    });
                    elem.parent().removeClass('on');
                    elem.parent().parent().next().next().find('p').removeClass('on').find('input').prop('checked', function () {
                        return false
                    });
                    elem.parent().parent().next().find('p').removeClass('on').find('input').prop('checked', function () {
                        return false
                    });

                }
                scope.fuckArr = [];
                for (var i = 0; i < $('.page17-wx-input').length; i++) {
                    if ($('.page17-wx-input').eq(i).prop('checked')) {
                        scope.fuckArr.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
                    }
                }
                $http.get($rootScope.link + '/device/getDeviceByDevice/?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=1&pageSize=17').success(function (data) {
                    $rootScope.fuckList = data.data.content;
                    $('#pages17').Page({
                        totalPages: data.data.totalPages,//分页总数
                        liNums: 5,//分页的数字按钮数(建议取奇数)
                        activeClass: 'activP', //active 类样式定义
                        callBack: function (page) {
                            $http.get($rootScope.link + '/device/getDeviceByDevice/?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=' + page + '&pageSize=17').success(function (data) {
                                $rootScope.fuckList = data.data.content;
                            })
                        }
                    });
                });
            });
        }
    }
}]);
app.directive('groupCheckAllTw',["$rootScope","$http",function ($rootScope, $http) {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                if (elem.prop('checked')) {
                    elem.parent().addClass('on');
                    elem.parent().parent().next().find('p').addClass('on').find('input').prop('checked', function () {
                        return true
                    });


                    elem.parent().parent().parent().parent().prev().find('p').addClass('on').find('input').prop('checked', function () {
                        return true
                    });


                } else {
                    //-------二级选中取消-------
                    elem.parent().parent().parent().parent().prev().find('p').removeClass('on').find('input').prop('checked', function () {
                        return false
                    });
                    ////-------三级选中取消-------
                    //elem.parent().parent().parent().parent().parent().parent().prev().find('p').removeClass('on').find('input').prop('checked', function () {
                    //    return false
                    //});
                    elem.parent().removeClass('on');
                    elem.parent().parent().next().find('p').removeClass('on').find('input').prop('checked', function () {
                        return false
                    });

                }
                scope.fuckArr = [];
                for (var i = 0; i < $('.new-wx-equip-input12').length; i++) {
                    if ($('.new-wx-equip-input12').eq(i).prop('checked')) {
                        scope.fuckArr.push($('.new-wx-equip-input12').eq(i).parent().next().attr('title'));
                    }
                }
                $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=1&pageSize=16').success(function (data) {
                    if (data.code == 200) {
                        $rootScope.MemberList12 = data.data.content;
                        $('#pages12').Page({
                            totalPages: data.data.totalPages,//分页总数
                            liNums: 5,//分页的数字按钮数(建议取奇数)
                            activeClass: 'activP', //active 类样式定义
                            callBack: function (page) {
                                $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=' + page + '&pageSize=16').success(function (data) {
                                    $rootScope.MemberList12 = data.data.content;
                                })
                            }
                        });
                    }else{
                        alert(data.msg)
                    }
                });
            });
        }
    }
}]);

app.directive('groupCheckOne', function () {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                if (elem.prop('checked')) {
                    elem.parent().addClass('on');
                } else {
                    elem.parent().removeClass('on');
                }

                //---------------三级选框全选二级选中---------------------
                var eNumber = elem.parent().parent().parent().parent().find('input');
                var flag = true;
                for (var i = 0; i < eNumber.length; i++) {
                    if (eNumber.eq(i).prop('checked') == false) {
                        flag = false;
                    }
                }
                if (flag) {
                    elem.parent().parent().parent().parent().prev().find('p').addClass('on').find('input').prop('checked', function () {
                        return true
                    });
                } else {
                    elem.parent().parent().parent().parent().prev().find('p').removeClass('on').find('input').prop('checked', function () {
                        return false
                    });
                }


//---------------三级选框全选一级选中---------------------
                var eNumbertwo = elem.parent().parent().parent().parent().parent().parent().find('input');
                var flagtwo = true;
                for (var ii = 0; ii < eNumbertwo.length; ii++) {
                    if (eNumbertwo.eq(ii).prop('checked') == false) {
                        flagtwo = false;
                    }
                }
                if (flagtwo) {
                    elem.parent().parent().parent().parent().parent().parent().prev().find('p').addClass('on').find('input').prop('checked', function () {
                        return true
                    });
                } else {
                    elem.parent().parent().parent().parent().parent().parent().prev().find('p').removeClass('on').find('input').prop('checked', function () {
                        return false
                    });
                }
            });
        }
    }
});

app.directive('groupCheckOne24',["$rootScope","$http",function ($rootScope, $http) {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                if (elem.prop('checked')) {
                    elem.parent().addClass('on');
                } else {
                    elem.parent().removeClass('on');
                }

                //---------------三级选框全选二级选中---------------------
                var eNumber = elem.parent().parent().parent().parent().find('input');
                var flag = true;
                for (var i = 0; i < eNumber.length; i++) {
                    if (eNumber.eq(i).prop('checked') == false) {
                        flag = false;
                    }
                }
                if (flag) {
                    elem.parent().parent().parent().parent().prev().find('p').addClass('on').find('input').prop('checked', function () {
                        return true
                    });
                } else {
                    elem.parent().parent().parent().parent().prev().find('p').removeClass('on').find('input').prop('checked', function () {
                        return false
                    });
                }


//---------------三级选框全选一级选中---------------------
                var eNumbertwo = elem.parent().parent().parent().parent().parent().parent().find('input');
                var flagtwo = true;
                for (var ii = 0; ii < eNumbertwo.length; ii++) {
                    if (eNumbertwo.eq(ii).prop('checked') == false) {
                        flagtwo = false;
                    }
                }
                if (flagtwo) {
                    elem.parent().parent().parent().parent().parent().parent().prev().find('p').addClass('on').find('input').prop('checked', function () {
                        return true
                    });
                } else {
                    elem.parent().parent().parent().parent().parent().parent().prev().find('p').removeClass('on').find('input').prop('checked', function () {
                        return false
                    });
                }
                scope.fuckArr = [];
                for (var i = 0; i < $('.new-wx-equip-input9').length; i++) {
                    if ($('.new-wx-equip-input9').eq(i).prop('checked')) {
                        scope.fuckArr.push($('.new-wx-equip-input9').eq(i).parent().next().attr('title'));
                    }
                }
                $http.get($rootScope.link + '/momo/getMomosByDevice?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=1&pageSize=6').success(function (data) {
                    if (data.code == 200) {
                        $rootScope.MemberList9 = data.data.content;
                        $('#pages9').Page({
                            totalPages: data.data.totalPages,//分页总数
                            liNums: 5,//分页的数字按钮数(建议取奇数)
                            activeClass: 'activP', //active 类样式定义
                            callBack: function (page) {
                                $http.get($rootScope.link + '/momo/getMomosByDevice?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=' + page + '&pageSize=6').success(function (data) {
                                    $rootScope.MemberList9 = data.data.content;
                                })
                            }
                        });
                    }else{
                        alert(data.msg)
                    }
                });
            });
        }
    }
}]);

app.directive('groupCheckOneEightteen',["$rootScope","$http",function ($rootScope, $http) {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                if (elem.prop('checked')) {
                    elem.parent().addClass('on');
                } else {
                    elem.parent().removeClass('on');
                }
                var eNumber = elem.parent().parent().parent().parent().find('input');
                var flag = true;
                for (var i = 0; i < eNumber.length; i++) {
                    if (eNumber.eq(i).prop('checked') == false) {
                        flag = false;
                    }
                }
                if (flag) {
                    elem.parent().parent().parent().parent().prev().find('p').addClass('on').find('input').prop('checked', function () {
                        return true
                    });
                } else {
                    elem.parent().parent().parent().parent().prev().find('p').removeClass('on').find('input').prop('checked', function () {
                        return false
                    });
                }
                scope.fuckArr = [];
                for (var i = 0; i < $('.new-wx-equip-input18').length; i++) {
                    if ($('.new-wx-equip-input18').eq(i).prop('checked')) {
                        scope.fuckArr.push($('.new-wx-equip-input18').eq(i).parent().next().attr('title'));
                    }
                }
                $rootScope.socketArr = [];
                sessionStorage.setItem('devices', scope.fuckArr);
                var screenWatcher = function (id, url, device, tp, w, h) {

                    var BLANK_IMG =
                        'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';

                    var canvas = document.getElementById(id), g = canvas.getContext('2d');
                    var xs, ys, xe, ye;
                    var checkedArr = [];
                    canvas.addEventListener('mousedown', function (e) {
                        var x, y;
                        if (e.layerX || e.layerX == 0) {
                            xs = e.layerX;
                            ys = e.layerY;
                        } else if (e.offsetX || e.offsetX == 0) { // Opera
                            xs = e.offsetX;
                            ys = e.offsetY;
                        }
                        for (var e = 0; e < $('.canvas-ul li input').length; e++) {
                            if ($('.canvas-ul li input').eq(e).prop('checked')) {
                                checkedArr.push($('.canvas-ul li input').eq(e).attr('mess_id'));
                            }
                        }
                        checkedArr.push(device);
                    }, false);
                    canvas.addEventListener('mouseup', function (e) {
                        if (e.layerX || e.layerX == 0) {
                            xe = e.layerX;
                            ye = e.layerY;
                        } else if (e.offsetX || e.offsetX == 0) { // Opera
                            xe = e.offsetX;
                            ye = e.offsetY;
                        }
                        if (Math.abs(xe - xs) < 10 && Math.abs(ye - ys) < 10) {
                            $http.get($rootScope.link + '/device/touchDeviceScreen?devices=' + JSON.stringify(checkedArr) + '&touchPort=' + tp + '&x=' + parseInt(xs * (w / 228)) + '&y=' + parseInt(ys * (h / 400))).success(function (data) {
                            });
                        } else {
                            $http.get($rootScope.link + '/device/slideDeviceScreen?devices=' + JSON.stringify(checkedArr) + '&touchPort=' + tp + '&xs=' + parseInt(xs * (w / 228)) + '&ys=' + parseInt(ys * (h / 400)) + '&xe=' + parseInt(xe * (w / 228)) + '&ye=' + parseInt(ye * (h / 400))).success(function () {
                            });
                        }
                    }, false);
                    var ws = new WebSocket('ws://' + url);
                    $rootScope.socketArr.push(ws);
                    ws.binaryType = 'blob';

                    ws.onclose = function () {
                        console.log('onclose', arguments)
                    };

                    ws.onerror = function () {
                        console.log('onerror', arguments)
                    };

                    ws.onmessage = function (message) {
                        var blob = new Blob([message.data], {type: 'image/jpeg'});
                        var URL = window.URL || window.webkitURL;
                        var img = new Image();
                        img.onload = function () {
                            //console.log(img.width, img.height);
                            canvas.width = img.width;
                            canvas.height = img.height;
                            g.drawImage(img, 0, 0);
                            img.onload = null;
                            img.src = BLANK_IMG;
                            img = null;
                            u = null;
                            blob = null
                            if (!$rootScope.isScreenPage) {
                                console.log(123);
                                ws.close();
                                $('.canvas-ul').empty();
                            }
                        };
                        var u = URL.createObjectURL(blob);
                        img.src = u
                    };
                    ws.onopen = function () {
                        console.log('onopen', arguments);
                        ws.send('1920x1080/0');
                    }
                };
                if (scope.fuckArr.length > 0) {
                    $('.page18-empty').hide();
                    $http.get($rootScope.link + '/device/showDeviceScreen?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=1&pageSize=10').success(function (data) {
                        $('.canvas-ul').empty();
                        for (var i = 0; i < data.data.content.length; i++) {
                            var cLi = '<li class="canvas-li"><h2>' + data.data.content[i].rank + '</h2><h5></h5><canvas id="canvas' + i + '"></canvas><div><span></span><h6></h6><p><input type="checkbox" mess_id="' + data.data.content[i].device + '"></p></div></li>';
                            $('.canvas-ul').append(cLi);
                            var assDevice = data.data.content[i].device;
                            var touchPort = data.data.content[i].touchStart;
                            var assId = 'canvas' + i;
                            var assPort = data.data.content[i].ip + ':8080/wgcs/ws/' + data.data.content[i].inputStart + '/' + data.data.content[i].device;
                            var equipWidth = data.data.content[i].wmSize.split('x')[0];
                            var equipHeight = data.data.content[i].wmSize.split('x')[1];
                            screenWatcher(assId, assPort, assDevice, touchPort, equipWidth, equipHeight);
                        }
                        $('.canvas-ul li span').click(function () {
                            var checkedArr = [];
                            for (var e = 0; e < $('.canvas-ul li input').length; e++) {
                                if ($('.canvas-ul li input').eq(e).prop('checked')) {
                                    checkedArr.push($('.canvas-ul li input').eq(e).attr('mess_id'));
                                }
                            }
                            var device = $(this).next().next().find('input').attr('mess_id');
                            checkedArr.push(device);
                            $http.get($rootScope.link + '/device/returnBack?devices=' + JSON.stringify(checkedArr)).success(function () {
                            });
                        });
                        $('.canvas-ul li h6').click(function () {
                            var checkedArr = [];
                            for (var e = 0; e < $('.canvas-ul li input').length; e++) {
                                if ($('.canvas-ul li input').eq(e).prop('checked')) {
                                    checkedArr.push($('.canvas-ul li input').eq(e).attr('mess_id'));
                                }
                            }
                            var device = $(this).next().find('input').attr('mess_id');
                            checkedArr.push(device);
                            $http.get($rootScope.link + '/device/returnHome?devices=' + JSON.stringify(checkedArr)).success(function () {
                            });
                        });
                        $('.canvas-ul li h5').click(function () {
                            var device = $(this).next().next().find('input').attr('mess_id');
                            $http.get($rootScope.link + '/device/clear?device=' + device).success(function () {
                            });
                        });
                        $('.canvas-ul li input').click(function () {
                            if ($(this).prop('checked')) {
                                $(this).parent().addClass('on');
                                for (var p = 0, flag = true; p < $('.canvas-ul li input').length; p++) {
                                    if (!$('.canvas-ul li input').eq(p).prop('checked')) {
                                        flag = false;
                                    }
                                }
                                if (!flag) {
                                    $('.page18-new-add h3 span').removeClass('on').find('input').prop('checked', function () {
                                        return false
                                    });
                                } else {
                                    $('.page18-new-add h3 span').addClass('on').find('input').prop('checked', function () {
                                        return true
                                    });
                                }
                            } else {
                                $(this).parent().removeClass('on');
                                $('.page18-new-add h3 span').removeClass('on').find('input').prop('checked', function () {
                                    return false
                                });
                            }
                        });
                        var ww = $('.page18-floor-one').width();
                        var am;
                        if (ww < 1200 && ww >= 960) {
                            am = (ww - 970) / 8;
                        } else if (ww < 960 && ww >= 720) {
                            am = (ww - 730) / 6;
                        } else if (ww >= 1200) {
                            am = (ww - 1210) / 10
                        }
                        $('.page18-floor-one').find('.canvas-li').css('margin', '0 ' + am + 'px 5px');
                        $('#pages18').Page({
                            totalPages: data.data.totalPages,//分页总数
                            liNums: 5,//分页的数字按钮数(建议取奇数)
                            activeClass: 'activP', //active 类样式定义
                            callBack: function (page) {
                                $http.get($rootScope.link + '/device/showDeviceScreen?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=' + page + '&pageSize=10').success(function (data) {
                                    $('.canvas-ul').empty();
                                    for (var i = 0; i < data.data.content.length; i++) {
                                        var cLi = '<li class="canvas-li"><h2>' + data.data.content[i].rank + '</h2><h5></h5><canvas id="canvas' + i + '"></canvas><div><span></span><h6></h6><p><input type="checkbox" mess_id="' + data.data.content[i].device + '"></p></div></li>';
                                        $('.canvas-ul').append(cLi);
                                        //$('.canvas-ul').append(cLi);
                                        var assDevice = data.data.content[i].device;
                                        var touchPort = data.data.content[i].touchStart;
                                        var assId = 'canvas' + i;
                                        var assPort = data.data.content[i].ip + ':8080/wgcs/ws/' + data.data.content[i].inputStart + '/' + data.data.content[i].device;
                                        var equipWidth = data.data.content[i].wmSize.split('x')[0];
                                        var equipHeight = data.data.content[i].wmSize.split('x')[1];
                                        screenWatcher(assId, assPort, assDevice, touchPort, equipWidth, equipHeight);
                                    }
                                    $('.canvas-ul li span').click(function () {
                                        var checkedArr = [];
                                        for (var e = 0; e < $('.canvas-ul li input').length; e++) {
                                            if ($('.canvas-ul li input').eq(e).prop('checked')) {
                                                checkedArr.push($('.canvas-ul li input').eq(e).attr('mess_id'));
                                            }
                                        }
                                        var device = $(this).next().next().find('input').attr('mess_id');
                                        checkedArr.push(device);
                                        $http.get($rootScope.link + '/device/returnBack?devices=' + JSON.stringify(checkedArr)).success(function () {
                                        });
                                    });
                                    $('.canvas-ul li h6').click(function () {
                                        var checkedArr = [];
                                        for (var e = 0; e < $('.canvas-ul li input').length; e++) {
                                            if ($('.canvas-ul li input').eq(e).prop('checked')) {
                                                checkedArr.push($('.canvas-ul li input').eq(e).attr('mess_id'));
                                            }
                                        }
                                        var device = $(this).next().find('input').attr('mess_id');
                                        checkedArr.push(device);
                                        $http.get($rootScope.link + '/device/returnHome?devices=' + JSON.stringify(checkedArr)).success(function () {
                                        });
                                    });
                                    $('.canvas-ul li h5').click(function () {
                                        var device = $(this).next().next().find('input').attr('mess_id');
                                        $http.get($rootScope.link + '/device/clear?device=' + device).success(function () {
                                        });
                                    });
                                    $('.canvas-ul li input').click(function () {
                                        if ($(this).prop('checked')) {
                                            $(this).parent().addClass('on');
                                            for (var p = 0, flag = true; p < $('.canvas-ul li input').length; p++) {
                                                if (!$('.canvas-ul li input').eq(p).prop('checked')) {
                                                    flag = false;
                                                }
                                            }
                                            if (!flag) {
                                                $('.page18-new-add h3 span').removeClass('on').find('input').prop('checked', function () {
                                                    return false
                                                });
                                            } else {
                                                $('.page18-new-add h3 span').addClass('on').find('input').prop('checked', function () {
                                                    return true
                                                });
                                            }
                                        } else {
                                            $(this).parent().removeClass('on');
                                            $('.page18-new-add h3 span').removeClass('on').find('input').prop('checked', function () {
                                                return false
                                            });
                                        }
                                    });
                                    var ww = $('.page18-floor-one').width();
                                    var am;
                                    if (ww < 1200 && ww >= 960) {
                                        am = (ww - 970) / 8;
                                    } else if (ww < 960 && ww >= 720) {
                                        am = (ww - 730) / 6;
                                    } else if (ww >= 1200) {
                                        am = (ww - 1210) / 10
                                    }
                                    $('.page18-floor-one').find('.canvas-li').css('margin', '0 ' + am + 'px 5px');
                                })
                            }
                        });
                    });
                } else {
                    $('.page18-empty').show();
                    $('.canvas-ul').empty();
                }
            });
        }
    }
}]);

app.directive('groupCheckOneEl',["$rootScope","$http",function ($rootScope, $http) {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                if (elem.prop('checked')) {
                    elem.parent().addClass('on');
                } else {
                    elem.parent().removeClass('on');
                }

                //---------------三级选框全选二级选中---------------------
                var eNumber = elem.parent().parent().parent().parent().find('input');
                var flag = true;
                for (var i = 0; i < eNumber.length; i++) {
                    if (eNumber.eq(i).prop('checked') == false) {
                        flag = false;
                    }
                }
                if (flag) {
                    elem.parent().parent().parent().parent().prev().find('p').addClass('on').find('input').prop('checked', function () {
                        return true
                    });
                } else {
                    elem.parent().parent().parent().parent().prev().find('p').removeClass('on').find('input').prop('checked', function () {
                        return false
                    });
                }


//---------------三级选框全选一级选中---------------------
                var eNumbertwo = elem.parent().parent().parent().parent().parent().parent().find('input');
                var flagtwo = true;
                for (var ii = 0; ii < eNumbertwo.length; ii++) {
                    if (eNumbertwo.eq(ii).prop('checked') == false) {
                        flagtwo = false;
                    }
                }
                if (flagtwo) {
                    elem.parent().parent().parent().parent().parent().parent().prev().find('p').addClass('on').find('input').prop('checked', function () {
                        return true
                    });
                } else {
                    elem.parent().parent().parent().parent().parent().parent().prev().find('p').removeClass('on').find('input').prop('checked', function () {
                        return false
                    });
                }
                scope.fuckArr = [];
                for (var i = 0; i < $('.new-wx-equip-input11').length; i++) {
                    if ($('.new-wx-equip-input11').eq(i).prop('checked')) {
                        scope.fuckArr.push($('.new-wx-equip-input11').eq(i).parent().next().attr('title'));
                    }
                }
                $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=1&pageSize=16').success(function (data) {
                    if (data.code == 200) {
                        $rootScope.MemberList11 = data.data.content;
                        $('#pages11').Page({
                            totalPages: data.data.totalPages,//分页总数
                            liNums: 5,//分页的数字按钮数(建议取奇数)
                            activeClass: 'activP', //active 类样式定义
                            callBack: function (page) {
                                $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=' + page + '&pageSize=16').success(function (data) {
                                    $rootScope.MemberList11 = data.data.content;
                                })
                            }
                        });
                    }else{
                        alert(data.msg)
                    }
                });
            });
        }
    }
}]);
app.directive('groupCheckOneFif',["$rootScope","$http",function ($rootScope, $http) {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                if (elem.prop('checked')) {
                    elem.parent().addClass('on');
                } else {
                    elem.parent().removeClass('on');
                }

                //---------------三级选框全选二级选中---------------------
                var eNumber = elem.parent().parent().parent().parent().find('input');
                var flag = true;
                for (var i = 0; i < eNumber.length; i++) {
                    if (eNumber.eq(i).prop('checked') == false) {
                        flag = false;
                    }
                }
                if (flag) {
                    elem.parent().parent().parent().parent().prev().find('p').addClass('on').find('input').prop('checked', function () {
                        return true
                    });
                } else {
                    elem.parent().parent().parent().parent().prev().find('p').removeClass('on').find('input').prop('checked', function () {
                        return false
                    });
                }


//---------------三级选框全选一级选中---------------------
                var eNumbertwo = elem.parent().parent().parent().parent().parent().parent().find('input');
                var flagtwo = true;
                for (var ii = 0; ii < eNumbertwo.length; ii++) {
                    if (eNumbertwo.eq(ii).prop('checked') == false) {
                        flagtwo = false;
                    }
                }
                if (flagtwo) {
                    elem.parent().parent().parent().parent().parent().parent().prev().find('p').addClass('on').find('input').prop('checked', function () {
                        return true
                    });
                } else {
                    elem.parent().parent().parent().parent().parent().parent().prev().find('p').removeClass('on').find('input').prop('checked', function () {
                        return false
                    });
                }
                scope.fuckArr = [];
                for (var i = 0; i < $('.new-wx-equip-input15').length; i++) {
                    if ($('.new-wx-equip-input15').eq(i).prop('checked')) {
                        scope.fuckArr.push($('.new-wx-equip-input15').eq(i).parent().next().attr('title'));
                    }
                }
                $http.get($rootScope.link + '/operate/getZombieFan?devices=' + JSON.stringify(scope.fuckArr)).success(function (data) {
                    if (data.code == 200) {
                        $rootScope.zombieList = data.data;
                    }else{
                        alert(data.msg)
                    }
                });
            });
        }
    }
}]);

app.directive('groupCheckOneFour', ["$rootScope", "$http", function ($rootScope, $http) {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                if (elem.prop('checked')) {
                    elem.parent().addClass('on');
                } else {
                    elem.parent().removeClass('on');
                }

                //==========================进行判断如果三级同栏内都为选中状态则对应的二级选中==========================
                var eNumber = elem.parent().parent().parent().parent().find('input');
                var flag = true;
                for (var i = 0; i < eNumber.length; i++) {
                    if (eNumber.eq(i).prop('checked') == false) {
                        flag = false;
                    }
                }
                if (flag) {
                    elem.parent().parent().parent().parent().prev().find('p').addClass('on').find('input').prop('checked', function () {
                        return true
                    });
                } else {
                    elem.parent().parent().parent().parent().prev().find('p').removeClass('on').find('input').prop('checked', function () {
                        return false
                    });
                }
                //======================进行判断如果三级状态都为选中状态则对应的一级选中=========================
                var eNumbertwo = elem.parent().parent().parent().parent().parent().parent().find('input');
                var flagtwo = true;
                for (var ii = 0; ii < eNumbertwo.length; ii++) {
                    if (eNumbertwo.eq(ii).prop('checked') == false) {
                        flagtwo = false;
                    }
                }
                if (flagtwo) {
                    elem.parent().parent().parent().parent().parent().parent().prev().find('p').addClass('on').find('input').prop('checked', function () {
                        return true
                    });
                } else {
                    elem.parent().parent().parent().parent().parent().parent().prev().find('p').removeClass('on').find('input').prop('checked', function () {
                        return false
                    });
                }

                scope.fuckArr = [];
                for (var i = 0; i < $('.page17-wx-input').length; i++) {
                    if ($('.page17-wx-input').eq(i).prop('checked')) {
                        scope.fuckArr.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
                    }
                }
                $rootScope.table2AllChecks = scope.fuckArr.length;
                if ($rootScope.page4getMoreData == 1) {
                    $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=1&pageSize=15').success(function (data) {
                        if (data.code == 200) {
                            $rootScope.equipList4 = data.data.content;
                            $rootScope.page1InitDataLength1 = data.data.content.length
                            $('.lalaldemaxiya').css('display','block')
                            $('.page2-table1-page').pagination({
                                totalData: $rootScope.page1InitDataLength1,
                                showData: 15,
                                pageCount: 1,
                                coping: true,
                                count: 2,
                                callback: function (api) {
                                    var data = {
                                        page: api.getCurrent(),
                                    };
                                    $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=' + data.page + '&pageSize=15').success(function (data) {
                                        if (data.code == 200) {
                                            $rootScope.page1InitDataLength1 = data.data.content.length;
                                            $rootScope.equipList4 = data.data.content;
                                            $('.page3-div-checkbox-friends').attr('checked', false).parent().removeClass('on')
                                        }
                                    })
                                }

                            })
                        } else {
                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                            setTimeout(function () {
                                $('.page1-alert-small-danger').hide(300)
                            }, 2000)
                        }
                    });
                }
                else if ($rootScope.page4getMoreData == 2) {
                    if (scope.fuckArr.length > 0) {
                        $http.get($rootScope.link + '/operate/getContact?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=1&pageSize=15').success(function (data) {
                            if (data.code == 200) {
                                $rootScope.WxList = data.data.content;
                                $rootScope.page1InitDataLength = data.data.totalElements;
                                $('.page3-div-checkbox-friends').attr('checked', false).parent().removeClass('on')
                                $('.page2-table2-page').pagination({
                                    totalData: $rootScope.page1InitDataLength,
                                    pageCount: 1,
                                    showData: 15,
                                    coping: true,
                                    count: 2,
                                    callback: function (api) {
                                        var data = {
                                            page: api.getCurrent(),
                                        };
                                        if (scope.fuckArr.length == 0) {
                                            $rootScope.WxList = []
                                            $rootScope.page1InitDataLength = 0;
                                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择相关设备查看对应好友');
                                            setTimeout(function () {
                                                $('.page1-alert-small-danger').hide(300)
                                            }, 2000)
                                        } else {
                                            $http.get($rootScope.link + '/operate/getContact?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=' + data.page + '&pageSize=15').success(function (data) {
                                                $rootScope.WxList = data.data.content;
                                                $rootScope.page1InitDataLength = data.data.totalElements;
                                                $('.page3-div-checkbox-friends').attr('checked', false).parent().removeClass('on')
                                            })
                                        }
                                    }
                                })
                            } else {
                                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                                setTimeout(function () {
                                    $('.page1-alert-small-danger').hide(300)
                                }, 2000)
                            }
                        });
                    } else {
                        scope.fuckArr = []
                        scope.page1InitDataLength = 0
                        $http.get($rootScope.link + '/operate/getContact?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=1&pageSize=15').success(function (data) {
                            $rootScope.WxList = [];
                            $rootScope.page1InitDataLength = 0;
                            $('.page3-div-checkbox-friends').attr('checked', false).parent().removeClass('on')
                            $('.page2-table2-page').pagination({
                                totalData: $rootScope.page1InitDataLength,
                                pageCount: 1,
                                showData: 15,
                                coping: true,
                                count: 2,
                                callback: function (api) {
                                    var data = {
                                        page: api.getCurrent(),
                                    };
                                    $http.get($rootScope.link + '/operate/getContact?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=' + 1 + '&pageSize=15').success(function (data) {
                                        $rootScope.WxList = [];
                                        $rootScope.page1InitDataLength = 0;
                                        $('.page3-div-checkbox-friends').attr('checked', false).parent().removeClass('on')
                                    })
                                }
                            })
                        })

                    }
                }
                else {
                    if (scope.fuckArr.length > 0) {
                        $('.page2-table3-page').css('display','block')
                        $http.get($rootScope.link + '/operate/getClubByWechatNumber?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=1&pageSize=15').success(function (data) {
                            if (data.code == 200) {
                                $rootScope.WxList1 = data.data.content;
                                $rootScope.page1InitDataLength2 = data.data.totalElements;
                                $('.page2-table3-page').pagination({
                                    isHide: true,
                                    totalData: $rootScope.page1InitDataLength2,
                                    pageCount: 1,
                                    showData: 15,
                                    coping: true,
                                    count: 2,
                                    callback: function (api) {
                                        var data = {
                                            page: api.getCurrent(),
                                        };
                                        if (scope.fuckArr.length == 0) {
                                            $rootScope.WxList1 = []
                                            $rootScope.page1InitDataLength2 = 0;
                                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择相关设备查看对应好友');
                                            setTimeout(function () {
                                                $('.page1-alert-small-danger').hide(300)
                                            }, 2000)
                                        } else {
                                            $http.get($rootScope.link + '/operate/getClubByWechatNumber?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=' + data.page + '&pageSize=15').success(function (data) {
                                                $rootScope.WxList1 = data.data.content;
                                                $rootScope.page1InitDataLength2 = data.data.totalElements;
                                            })
                                        }
                                    }
                                })
                            } else {
                                $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                                setTimeout(function () {
                                    $('.page1-alert-small-danger').hide(300)
                                }, 2000)
                            }
                        });
                    } else {
                        scope.fuckArr = []
                        $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请勾选相关设备以便对其操作');
                        setTimeout(function () {
                            $('.page1-alert-small-danger').hide(300)
                        }, 2000)
                        $rootScope.page1InitDataLength2 = 0
                        $http.get($rootScope.link + '/operate/getClubByWechatNumber?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=1&pageSize=15').success(function (data) {
                            $rootScope.WxList1 = [];
                            $('.page3-div-checkbox-Groups').attr('checked', false).parent().removeClass('on')
                            $('.page2-table3-page').pagination({
                                totalData: $rootScope.page1InitDataLength2,
                                pageCount: 1,
                                showData: 15,
                                coping: true,
                                isHide: true,
                                count: 2,
                                callback: function (api) {
                                    var data = {
                                        page: api.getCurrent(),
                                    };
                                    $http.get($rootScope.link + '/operate/getClubByWechatNumber?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=1&pageSize=15').success(function (data) {
                                        $rootScope.WxList1 = [];
                                        $rootScope.page1InitDataLength2 = 0;
                                        $('.page3-div-checkbox-Groups').attr('checked', false).parent().removeClass('on')
                                    })
                                }
                            })
                        })

                    }
                }


            });
        }
    }
}]);
app.directive('groupCheckOneFour1', ["$rootScope", "$http", function ($rootScope, $http) {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                if (elem.prop('checked')) {
                    elem.parent().addClass('on');
                } else {
                    elem.parent().removeClass('on');
                }

                //==========================进行判断如果三级同栏内都为选中状态则对应的二级选中==========================
                var eNumber = elem.parent().parent().parent().parent().find('input');
                var flag = true;
                for (var i = 0; i < eNumber.length; i++) {
                    if (eNumber.eq(i).prop('checked') == false) {
                        flag = false;
                    }
                }
                if (flag) {
                    elem.parent().parent().parent().parent().prev().find('p').addClass('on').find('input').prop('checked', function () {
                        return true
                    });
                } else {
                    elem.parent().parent().parent().parent().prev().find('p').removeClass('on').find('input').prop('checked', function () {
                        return false
                    });
                }
                //======================进行判断如果三级状态都为选中状态则对应的一级选中=========================
                var eNumbertwo = elem.parent().parent().parent().parent().parent().parent().find('input');
                var flagtwo = true;
                for (var ii = 0; ii < eNumbertwo.length; ii++) {
                    if (eNumbertwo.eq(ii).prop('checked') == false) {
                        flagtwo = false;
                    }
                }
                if (flagtwo) {
                    elem.parent().parent().parent().parent().parent().parent().prev().find('p').addClass('on').find('input').prop('checked', function () {
                        return true
                    });
                } else {
                    elem.parent().parent().parent().parent().parent().parent().prev().find('p').removeClass('on').find('input').prop('checked', function () {
                        return false
                    });
                }
                scope.fuckArr = [];
                for (var i = 0; i < $('.page17-wx-input').length; i++) {
                    if ($('.page17-wx-input').eq(i).prop('checked')) {
                        scope.fuckArr.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
                    }
                }
                $rootScope.table2AllChecks=scope.fuckArr.length;
                if ($rootScope.page5getMoreData == 10) {
                    $http.get($rootScope.link + '/wechat/getWechatsByDevice?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=1&pageSize=1000').success(function (data) {
                        if (data.code == 200) {
                            $rootScope.page3Data4AllData = data.data.content;
                        } else {
                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                            setTimeout(function () {
                                $('.page1-alert-small-danger').hide(300)
                            }, 2000)
                        }
                    });
                }else {
                    $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=1&pageSize=15').success(function (data) {
                        if (data.code == 200) {
                            scope.page1InitDataLength = data.data.content.length;
                            $('.page2-table1-page').pagination({
                                totalData: scope.page1InitDataLength,
                                pageCount: 1,
                                showData: 15,
                                coping: true,
                                count: 2,
                                callback: function (api) {
                                    var data = {
                                        page: api.getCurrent(),
                                    };
                                    $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=' + data.page + '&pageSize=15').success(function (data) {
                                        $rootScope.equipList4 = data.data.content;
                                        scope.page1InitDataLength = data.data.content.length;
                                    })
                                }
                            })
                            $rootScope.equipList4 = data.data.content;
                        } else {

                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
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
app.directive('groupCheckOneNine',["$rootScope","$http",function ($rootScope, $http) {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                if (elem.prop('checked')) {
                    elem.parent().addClass('on');
                } else {
                    elem.parent().removeClass('on');
                }

                //---------------三级选框全选二级选中---------------------
                var eNumber = elem.parent().parent().parent().parent().find('input');
                var flag = true;
                for (var i = 0; i < eNumber.length; i++) {
                    if (eNumber.eq(i).prop('checked') == false) {
                        flag = false;
                    }
                }
                if (flag) {
                    elem.parent().parent().parent().parent().prev().find('p').addClass('on').find('input').prop('checked', function () {
                        return true
                    });
                } else {
                    elem.parent().parent().parent().parent().prev().find('p').removeClass('on').find('input').prop('checked', function () {
                        return false
                    });
                }


//---------------三级选框全选一级选中---------------------
                var eNumbertwo = elem.parent().parent().parent().parent().parent().parent().find('input');
                var flagtwo = true;
                for (var ii = 0; ii < eNumbertwo.length; ii++) {
                    if (eNumbertwo.eq(ii).prop('checked') == false) {
                        flagtwo = false;
                    }
                }
                if (flagtwo) {
                    elem.parent().parent().parent().parent().parent().parent().prev().find('p').addClass('on').find('input').prop('checked', function () {
                        return true
                    });
                } else {
                    elem.parent().parent().parent().parent().parent().parent().prev().find('p').removeClass('on').find('input').prop('checked', function () {
                        return false
                    });
                }
                scope.fuckArr = [];
                for (var i = 0; i < $('.new-wx-equip-input9').length; i++) {
                    if ($('.new-wx-equip-input9').eq(i).prop('checked')) {
                        scope.fuckArr.push($('.new-wx-equip-input9').eq(i).parent().next().attr('title'));
                    }
                }
                $http.get($rootScope.link + '/wechat/getWechatsByDevice?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=1&pageSize=6').success(function (data) {
                    if (data.code == 200) {
                        $rootScope.MemberList9 = data.data.content;
                        $('#pages9').Page({
                            totalPages: data.data.totalPages,//分页总数
                            liNums: 5,//分页的数字按钮数(建议取奇数)
                            activeClass: 'activP', //active 类样式定义
                            callBack: function (page) {
                                $http.get($rootScope.link + '/wechat/getWechatsByDevice?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=' + page + '&pageSize=6').success(function (data) {
                                    $rootScope.MemberList9 = data.data.content;
                                })
                            }
                        });
                    }else{
                        alert(data.msg)
                    }
                });
            });
        }
    }
}]);

app.directive('groupCheckOneSeventeen',["$rootScope","$http",function ($rootScope, $http) {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                if (elem.prop('checked')) {
                    elem.parent().addClass('on');
                } else {
                    elem.parent().removeClass('on');
                }

                //---------------三级选框全选二级选中---------------------
                var eNumber = elem.parent().parent().parent().parent().find('input');
                var flag = true;
                for (var i = 0; i < eNumber.length; i++) {
                    if (eNumber.eq(i).prop('checked') == false) {
                        flag = false;
                    }
                }
                if (flag) {
                    elem.parent().parent().parent().parent().prev().find('p').addClass('on').find('input').prop('checked', function () {
                        return true
                    });
                } else {
                    elem.parent().parent().parent().parent().prev().find('p').removeClass('on').find('input').prop('checked', function () {
                        return false
                    });
                }


//---------------三级选框全选一级选中---------------------
                var eNumbertwo = elem.parent().parent().parent().parent().parent().parent().find('input');
                var flagtwo = true;
                for (var ii = 0; ii < eNumbertwo.length; ii++) {
                    if (eNumbertwo.eq(ii).prop('checked') == false) {
                        flagtwo = false;
                    }
                }
                if (flagtwo) {
                    elem.parent().parent().parent().parent().parent().parent().prev().prev().find('p').addClass('on').find('input').prop('checked', function () {
                        return true
                    });
                } else {
                    elem.parent().parent().parent().parent().parent().parent().prev().prev().find('p').removeClass('on').find('input').prop('checked', function () {
                        return false
                    });
                }
                scope.fuckArr = [];
                for (var i = 0; i < $('.page17-wx-input').length; i++) {
                    if ($('.page17-wx-input').eq(i).prop('checked')) {
                        scope.fuckArr.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
                    }
                }
                $http.get($rootScope.link + '/device/getDeviceByDevice/?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=1&pageSize=17').success(function (data) {
                    $rootScope.fuckList = data.data.content;
                    $('#pages17').Page({
                        totalPages: data.data.totalPages,//分页总数
                        liNums: 5,//分页的数字按钮数(建议取奇数)
                        activeClass: 'activP', //active 类样式定义
                        callBack: function (page) {
                            $http.get($rootScope.link + '/device/getDeviceByDevice/?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=' + page + '&pageSize=17').success(function (data) {
                                $rootScope.fuckList = data.data.content;
                            })
                        }
                    });
                });
            });
        }
    }
}]);
app.directive('groupCheckOneTw',["$rootScope","$http",function ($rootScope, $http) {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                if (elem.prop('checked')) {
                    elem.parent().addClass('on');
                } else {
                    elem.parent().removeClass('on');
                }


                //---------------三级选框全选二级选中---------------------
                var eNumber = elem.parent().parent().parent().parent().find('input');
                var flag = true;
                for (var i = 0; i < eNumber.length; i++) {
                    if (eNumber.eq(i).prop('checked') == false) {
                        flag = false;
                    }
                }
                if (flag) {
                    elem.parent().parent().parent().parent().prev().find('p').addClass('on').find('input').prop('checked', function () {
                        return true
                    });
                } else {
                    elem.parent().parent().parent().parent().prev().find('p').removeClass('on').find('input').prop('checked', function () {
                        return false
                    });
                }


//---------------三级选框全选一级选中---------------------
                var eNumbertwo = elem.parent().parent().parent().parent().parent().parent().find('input');
                var flagtwo = true;
                for (var ii = 0; ii < eNumbertwo.length; ii++) {
                    if (eNumbertwo.eq(ii).prop('checked') == false) {
                        flagtwo = false;
                    }
                }
                if (flagtwo) {
                    elem.parent().parent().parent().parent().parent().parent().prev().find('p').addClass('on').find('input').prop('checked', function () {
                        return true
                    });
                } else {
                    elem.parent().parent().parent().parent().parent().parent().prev().find('p').removeClass('on').find('input').prop('checked', function () {
                        return false
                    });
                }


                scope.fuckArr = [];
                for (var i = 0; i < $('.new-wx-equip-input12').length; i++) {
                    if ($('.new-wx-equip-input12').eq(i).prop('checked')) {
                        scope.fuckArr.push($('.new-wx-equip-input12').eq(i).parent().next().attr('title'));
                    }
                }
                $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=1&pageSize=16').success(function (data) {
                    if (data.code == 200) {
                        $rootScope.MemberList12 = data.data.content;
                        $('#pages12').Page({
                            totalPages: data.data.totalPages,//分页总数
                            liNums: 5,//分页的数字按钮数(建议取奇数)
                            activeClass: 'activP', //active 类样式定义
                            callBack: function (page) {
                                $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=' + page + '&pageSize=16').success(function (data) {
                                    $rootScope.MemberList12 = data.data.content;
                                })
                            }
                        });
                    }else{
                        alert(data.msg)
                    }
                });
            });
        }
    }
}]);

app.directive('groupChecked',["$timeout",function ($timeout) {
    return {
        link: function (scope, elem) {
            $timeout(function () {
                if (elem.prop('checked')) {
                    elem.parent().addClass('on');
                } else {
                    elem.parent().removeClass('on');
                }
            }, 0);
            elem.click(function () {
                if (elem.prop('checked')) {
                    scope.daluan=1;
                    elem.parent().addClass('on');
                } else {
                    scope.daluan=0;
                    elem.parent().removeClass('on');
                }
            });
        }
    }
}]);

app.directive('groupCheckedEl',function () {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                if (elem.prop('checked')) {
                    elem.parent().addClass('on');
                } else {
                    elem.parent().removeClass('on');
                }
            });
        }
    }
});

app.directive('groupCheckedFive', function () {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                if (elem.prop('checked')) {
                    elem.parent().removeClass('on');
                    var checkArr = elem.parents('.page5-floor-one-list').find('.page5-div-checkbox');
                    for (var k = 0, flag = true; k < checkArr.length; k++) {
                        if (!checkArr.eq(k).find('input').prop('checked')) {
                            flag = false;
                        }
                    }
                    if (flag) {
                        elem.parents('.page5-floor-one-list').find('.page5-checkAll-div').removeClass('on').find('input').prop('checked', 'checked');
                    }
                } else {
                    elem.parent().addClass('on');
                    elem.parents('.page5-floor-one-list').find('.page5-checkAll-div').addClass('on').find('input').prop('checked', function () {
                        return false
                    });
                }
            });
        }
    }
});

app.directive('groupCheckedTw', function () {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                if (elem.prop('checked')) {
                    elem.parent().addClass('on');
                    var checkArr = elem.parents('.page11-floor-two-list').find('.page11-div-checkbox');
                    for (var k = 0, flag = true; k < checkArr.length; k++) {
                        if (!checkArr.eq(k).find('input').prop('checked')) {
                            flag = false;
                        }
                    }
                    if (flag) {
                        elem.parents('.page11-floor-two-list').find('.page11-checkAll-div').addClass('on').find('input').prop('checked', 'checked');
                    }
                } else {
                    elem.parent().removeClass('on');
                    elem.parents('.page11-floor-two-list').find('.page11-checkAll-div').removeClass('on').find('input').prop('checked', function () {
                        return false
                    });
                }
            });
        }
    }
});
app.directive('groupCheckedNine', function () {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                if (elem.prop('checked')) {
                    elem.parent().addClass('on');
                    var checkArr = elem.parents('.page9-one-list').find('.page9-checked');
                    for (var k = 0, flag = true; k < checkArr.length; k++) {
                        if (!checkArr.eq(k).find('input').prop('checked')) {
                            flag = false;
                        }
                    }
                    if (flag) {
                        elem.parents('.page9-one-list').find('.page9-checked-all').addClass('on').find('input').prop('checked', 'checked');
                    }
                } else {
                    elem.parent().removeClass('on');
                    elem.parents('.page9-one-list').find('.page9-checked-all').removeClass('on').find('input').prop('checked', function () {
                        return false
                    });
                }
            });
        }
    }
});

app.directive('groupCheckedSs', ["$rootScope", function ($rootScope) {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                if (elem.prop('checked')) {
                    var checkArr = elem.parents('.page3-table-up-telephone').find('.page3-div-checkbox');
                    if (checkArr.length == 1) {
                        elem.parent().addClass('on');
                        if (elem.attr('data') == '精准加人') {
                            $rootScope.farGo = false;
                        } else {
                            $rootScope.farGo = true;
                        }
                        // elem.parents().parents().parents().parents().siblings().find('.page2-table3-group').css('background-color', '#7A7A7A').find('input').prop('disabled', 'disabled');
                        $rootScope.sendValuePp = elem[0].value
                        $rootScope.page29Wnum = elem.attr('data2');
                        $rootScope.page29Number = elem.attr('data3');
                        $rootScope.page29Id = elem.attr('data4');
                        $rootScope.page29Type = elem.attr('data5');
                    } else {
                        for (var k = 0, flag = true; k < checkArr.length; k++) {
                            if (!checkArr.eq(k).find('input').prop('checked')) {
                                flag = false;
                            }
                        }
                        if (flag) {
                            elem.parents().parents().parents().parents().find('.page2-table3-group').css('background-color', 'white').find('input').prop('disabled', function () {
                                return false
                            });
                            $rootScope.page29Id = ''
                            $rootScope.sendValuePp = undefined
                        } else {
                            elem.parent().addClass('on');
                            if (elem.attr('data') == '精准加人') {
                                $rootScope.farGo = false;
                            } else {
                                $rootScope.farGo = true;
                            }
                            elem.parents().parents().parents().parents().siblings().find('.page2-table3-group').css('background-color', '#7A7A7A').find('input').prop('disabled', 'disabled');

                            $rootScope.sendValuePp = elem[0].value
                            $rootScope.page29Wnum = elem.attr('data2');
                            $rootScope.page29Number = elem.attr('data3');
                            $rootScope.page29Id = elem.attr('data4');
                            $rootScope.page29Type = elem.attr('data5');
                        }
                    }
                } else {
                    elem.parents().parents().parents().parents().find('.page2-table3-group').removeClass('on');
                    elem.parents().parents().parents().parents().find('.page2-table3-group').css('background-color', 'white').find('input').prop('disabled', function () {
                        return false
                    });
                    $rootScope.page29Id = ''
                    $rootScope.sendValuePp = undefined
                }
            });
        }
    }
}]);

app.directive('groupCheckedSs1', ["$rootScope", function ($rootScope) {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                if (elem.prop('checked')) {
                    console.log(elem)
                    elem.parent().addClass('on');
                    // console.log(elem[0].attributes)
                    // console.log(elem)
                    $rootScope.sendValuePp1=elem[0].attributes[1].value;
                    elem.prop('disabled', function () {
                        return false})
                    elem.parent().parent().parent().parent().siblings().find('.page11-div-checkbox').css('background-color', '#7A7A7A').removeClass('on').find('input').prop('disabled', 'disabled');
                } else {
                    elem.parent().parent().parent().parent().parent().find('.page11-div-checkbox').css('background-color', 'white').removeClass('on').find('input').prop('disabled', function () {
                        return false
                    });
                }
            });
        }
    }
}]);

app.directive('groupCheckedTw', function () {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                if (elem.prop('checked')) {
                    elem.parent().addClass('on');
                    var checkArr = elem.parents('.page12-floor-two-list').find('.page12-div-checkbox');
                    for (var k = 0, flag = true; k < checkArr.length; k++) {
                        if (!checkArr.eq(k).find('input').prop('checked')) {
                            flag = false;
                        }
                    }
                    if (flag) {
                        elem.parents('.page12-floor-two-list').find('.page12-checkAll-div').addClass('on').find('input').prop('checked', 'checked');
                    }
                } else {
                    elem.parent().removeClass('on');
                    elem.parents('.page12-floor-two-list').find('.page12-checkAll-div').removeClass('on').find('input').prop('checked', function () {
                        return false
                    });
                }
            });
        }
    }
});

app.directive('mChecked',["$timeout",function ($timeout) {
    return {
        link: function (scope, elem) {
            elem.parent().addClass('on').show();
            $timeout(function () {
                if (elem.attr("mess_id") != 1 && elem.parent().parent().next().find('li').length > 0) {
                    elem.prop('checked', function () {
                        return true
                    });
                    elem.parent().addClass('on').show();
                    elem.parent().parent().next().show();
                    elem.parent().parent().next().find('p').addClass('on').find('input').prop('checked', function () {
                        return true
                    });

                }
            }, 0);
        }
    }
}]);
app.directive('navClick', function () {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                elem.parent().parent().find('.nav-floor-ul').hide();
                elem.parent().parent().find('.line').hide();
                elem.parent().find('.nav-floor-ul').show();
                elem.parent().find('.line').show();
            });
        }
    }
});
app.directive('newListShow', function () {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                elem.parent().next().toggle();
                if (!elem.parent().next().is(":hidden") && elem.parent().next().find('li').length > 0) {
                    elem.parent().next().find('p').show();

                } else {
                    elem.parent().next().find('p').hide();
                }
            });
        }
    }
});

app.directive('radioChecked', function () {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                if (elem.prop('checked')) {
                    elem.parents('.page13-floor-classify').find('.page13-classify-radio').removeClass('on');
                    elem.parent().addClass('on');
                }
            });
        }
    }
});

app.directive('radioCheckedFive', function () {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                if (elem.prop('checked')) {
                    elem.parents('.switch-list').find('span').removeClass('on');
                    elem.parent().addClass('on');
                }
            });
        }
    }
});

app.directive('radioCheckedFt', function () {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                if (elem.prop('checked')) {
                    elem.parents('.page14-floor-one-list').find('span').removeClass('on');
                    elem.parent().addClass('on');
                }
            });
        }
    }
});

app.directive('radioCheckedSix', function () {
    return {
        link: function (scope, elem) {
            if (elem.prop('checked')) {
                elem.parent().addClass('on');
            }
            elem.click(function () {
                if (elem.prop('checked')) {
                    elem.parents('.page6-third-li').find('div').removeClass('on');
                    elem.parent().addClass('on');
                }
            });
        }
    }
});

app.directive('radioCheckedSixteen', function () {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                if (elem.prop('checked')) {
                    elem.parents('.page16-third-li').find('div').removeClass('on');
                    elem.parent().addClass('on');
                }
            });
        }
    }
});

app.directive('radioCheckedTen', function () {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                if (elem.prop('checked')) {
                    elem.parents('.page10-one-list').find('.page10-one-radio').removeClass('on');
                    elem.parent().addClass('on');
                }
            });
        }
    }
});

app.directive('reload', function () {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                location.reload();
            });
        }
    }
});

app.directive('screenCheckedAll', function () {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                if (elem.prop('checked')) {
                    elem.parent().addClass('on');
                    elem.parent().parent().parent().parent().parent().next().find('.canvas-ul').find('p').addClass('on').find('input').prop('checked', function () {
                        return true
                    });
                } else {
                    elem.parent().removeClass('on');
                    elem.parent().parent().parent().parent().parent().next().find('.canvas-ul').find('p').removeClass('on').find('input').prop('checked', function () {
                        return false
                    });
                }
            });
        }
    }
});

app.directive('startService',["$rootScope","$http",function ($rootScope, $http) {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                for (var i = 0, devices = []; i < $('.new-wx-equip-input20').length; i++) {
                    if ($('.new-wx-equip-input20').eq(i).prop('checked')) {
                        devices.push($('.new-wx-equip-input20').eq(i).parent().next().attr('title'));
                    }
                }
                var tid = elem.attr('t_id');
                var msg = elem.parent().parent().prev().find('.page20-b-list-two').find('input').val();
                var interval = elem.parent().parent().prev().find('.page20-b-list-three').eq(0).find('input').val();
                var count = elem.parent().parent().prev().find('.page20-b-list-three').eq(1).find('input').val();
                var number = elem.parent().parent().prev().find('.page20-b-list-three').eq(2).find('input').val();
                var clear = 0;
                if (elem.parent().parent().prev().find('.page20-b-list-one').find('input').prop('checked')) {
                    clear = 1;
                }
                var strategy = elem.parent().parent().prev().find('.page20-b-list-four').find('input:checked').val() || 3;
                if (devices.length == 0) {
                    $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择并勾选需要进行操作的设备');
                    setTimeout(function () {
                        $('.page1-alert-small-danger').hide(300)
                    }, 2000)

                } else if (msg == '') {
                    $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请填写打招呼用语');
                    setTimeout(function () {
                        $('.page1-alert-small-danger').hide(300)
                    }, 2000)
                } else if (interval == '') {
                    $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请填写时间间隔');
                    setTimeout(function () {
                        $('.page1-alert-small-danger').hide(300)
                    }, 2000)
                } else if (count == '') {
                    $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请填写每天加人的数量');
                    setTimeout(function () {
                        $('.page1-alert-small-danger').hide(300)
                    }, 2000)
                } else if (strategy == 3) {
                    $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请选择加人策略');
                    setTimeout(function () {
                        $('.page1-alert-small-danger').hide(300)
                    }, 2000)
                } else if (number == '') {
                    $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;请填写任务执行时间间隔');
                    setTimeout(function () {
                        $('.page1-alert-small-danger').hide(300)
                    }, 2000)
                } else {
                    $http.get($rootScope.link + '/remote/openServer?tid=' + tid + '&devices=' + JSON.stringify(devices) + '&interval=' + interval + '&msg=' + msg + '&clear=' + clear + '&strategy=' + strategy + '&count=' + count + '&number=' + number).success(function (data) {
                        if (data.code == 0) {
                            $('.page1-alert-small-success').show(300).find('.page1-alert-small-success-con').html('&nbsp;&nbsp;开启成功');
                            setTimeout(function () {
                                $('.page1-alert-small-success').hide(300)
                            }, 2000)
                            //$http.get($rootScope.link+'/remote/getTask?pageNo=1&pageSize=2').success(function(data){
                            //    if(data.code==200){
                            //        scope.assList=data.data.content;
                            //        $('#pages20').Page({
                            //            totalPages: data.data.totalPages,//分页总数
                            //            liNums: 5,//分页的数字按钮数(建议取奇数)
                            //            activeClass: 'activP', //active 类样式定义
                            //            callBack : function(page){
                            //                $http.get($rootScope.link+'/remote/getTask?pageNo='+page+'&pageSize=2').success(function(data){
                            //                    scope.assList=data.data.content;
                            //                })
                            //            }
                            //        });
                            //    }
                            //});
                            elem.next().removeAttr('disabled').css('background', '#2abf9e');
                            elem.next().next().removeAttr('disabled').css('background', '#2abf9e');
                            elem.attr('disabled', 'disabled').css('background', '#ccc');
                            elem.parent().parent().prev().prev().text('正在执行');
                        } else if (data.code == 100) {
                            $('.page1-alert-small-success').show(300).find('.page1-alert-small-success-con').html('&nbsp;&nbsp;任务已完成');
                            setTimeout(function () {
                                $('.page1-alert-small-success').hide(300)
                            }, 2000)
                        } else if (data.code == 101) {
                            $('.page1-alert-small-success').show(300).find('.page1-alert-small-success-con').html('&nbsp;&nbsp;任务已就绪');
                            setTimeout(function () {
                                $('.page1-alert-small-success').hide(300)
                            }, 2000)
                        }
                    });
                }
            });
        }
    }
}]);

app.directive('stopService',["$rootScope","$http",function ($rootScope, $http) {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                var tid = elem.attr('t_id');
                $http.get($rootScope.link + '/remote/stopServer?tid=' + tid).success(function (data) {
                    if (data.code == 200) {
                        alert('暂停成功！');
                        //$http.get($rootScope.link+'/remote/getTask?pageNo=1&pageSize=2').success(function(data){
                        //    if(data.code==200){
                        //        scope.assList=data.data.content;
                        //        $('#pages20').Page({
                        //            totalPages: data.data.totalPages,//分页总数
                        //            liNums: 5,//分页的数字按钮数(建议取奇数)
                        //            activeClass: 'activP', //active 类样式定义
                        //            callBack : function(page){
                        //                $http.get($rootScope.link+'/remote/getTask?pageNo='+page+'&pageSize=2').success(function(data){
                        //                    scope.assList=data.data.content;
                        //                })
                        //            }
                        //        });
                        //    }
                        //});
                        elem.attr('disabled', 'disabled').css('background', '#ccc');
                        elem.next().attr('disabled', 'disabled').css('background', '#ccc');
                        elem.prev().removeAttr('disabled').css('background', '#2abf9e');
                        elem.parent().parent().prev().prev().text('等待执行');
                    }
                });
            });
        }
    }
}]);

app.directive('tableEdit', ["$rootScope", function ($rootScope) {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                elem.parent().prev().prev().prev().prev().prev().find('input').removeClass('on').removeAttr('readonly');
                elem.addClass('ce')
                elem.prev().removeClass('cs');
            });
        }
    }
}]);
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
app.directive('uploadFile', function () {
    return {
        link: function (scope, elem) {
            elem.on("change", function () {
                scope.upFile = this.files[0];
                if (scope.upFile.name.length >= 12) {
                    $('.exselTextGra').html(scope.upFile.name.slice(0, 9) + '...')
                } else {
                    $('.exselTextGra').html(scope.upFile.name)
                }
                $('.exselTextGray').html((scope.upFile.size / 1024).toFixed(2) + 'kb')
                $('.upText').show()
            });
        }
    }
});

app.directive('uploadFile1', function () {
    return {
        link: function (scope, elem) {
            elem.on("change", function () {
                scope.upFile1=this.files[0];
                if (scope.upFile1.name.length >= 12) {
                    $('.exselTextGra1').html(scope.upFile1.name.slice(0, 9) + '...')
                } else {
                    $('.exselTextGra1').html(scope.upFile1.name)
                }
                $('.exselTextGray1').html((scope.upFile1.size / 1024).toFixed(2) + 'kb')
                $('.upText1').show()
            });
        }
    }
});

app.directive('uploadFile2', function () {
    return {
        link: function (scope, elem) {
            elem.on("change", function () {
                scope.upFile2=this.files[0];
                if (scope.upFile2.name.length >= 12) {
                    $('.exselTextGra2').html(scope.upFile2.name.slice(0, 9) + '...')
                } else {
                    $('.exselTextGra2').html(scope.upFile2.name)
                }
                $('.exselTextGray2').html((scope.upFile2.size / 1024).toFixed(2) + 'kb')
                $('.upText2').show()
            });
        }
    }
});

app.directive('uploadFile3', function () {
    return {
        link: function (scope, elem) {
            elem.on("change", function () {
                scope.upFile3=this.files[0];
                if (scope.upFile3.name.length >= 12) {
                    $('.exselTextGra3').html(scope.upFile3.name.slice(0, 9) + '...')
                } else {
                    $('.exselTextGra3').html(scope.upFile3.name)
                }
                $('.exselTextGray3').html((scope.upFile3.size / 1024).toFixed(2) + 'kb')
                $('.upText3').show()
            });
        }
    }
});

app.directive('uploadFile4', function () {
    return {
        link: function (scope, elem) {
            elem.on("change", function () {
                scope.upFile4 = this.files[0];
                if (scope.upFile4.name.length >= 12) {
                    $('.exselTextGra4').html(scope.upFile4.name.slice(0, 9) + '...')
                } else {
                    $('.exselTextGra4').html(scope.upFile4.name)
                }
                $('.exselTextGray4').html((scope.upFile4.size / 1024).toFixed(2) + 'kb')
                $('.upText4').show()
            });
        }
    }
});

app.directive('uploadFile5', function () {
    return {
        link: function (scope, elem) {
            elem.on("change", function () {
                scope.upFile5=this.files[0];
                if (scope.upFile5.name.length >= 12) {
                    $('.exselTextGra5').html(scope.upFile5.name.slice(0, 9) + '...')
                } else {
                    $('.exselTextGra5').html(scope.upFile5.name)
                }
                $('.exselTextGray5').html((scope.upFile5.size / 1024).toFixed(2) + 'kb')
                $('.upText5').show()
            });
        }
    }
});

app.directive('uploadFile6', function () {
    return {
        link: function (scope, elem) {
            elem.on("change", function () {
                var file = this.files[0];
                if (!/image\/\w+/.test(file.type)) {
                    alert("文件必须为图片！");
                    return false;
                }
                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function (e) {
                    //result.innerHTML = '<img src="'+this.result+'" alt=""/>'
                    elem.parent().css({
                        'backgroundImage': 'url(' + this.result + ')',
                        'backgroundSize': '100%'
                    });

                };
                // scope.sendObj.append('file1', file);
                scope.page4Table1pic=file;
            });
        }
    }
});

app.directive('uploadImage1', function () {
    return {
        link: function (scope, elem) {
            elem.on("change", function () {
                var file = this.files[0];
                if (!/image\/\w+/.test(file.type)) {
                    alert("文件必须为图片！");
                    return false;
                }
                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function (e) {
                    //result.innerHTML = '<img src="'+this.result+'" alt=""/>'
                    elem.parent().css({
                        'backgroundImage': 'url(' + this.result + ')',
                        'backgroundSize': '100%'
                    });
                    scope.picArr.push(parseInt(elem.prev().text()));
                    scope.mustChoose.push(parseInt(elem.prev().text()));
                    elem.parent().next().show();
                    scope.$apply();
                };
                scope.sendObj.append('file1', file);
            });
        }
    }
});

app.directive('uploadImage2', function () {
    return {
        link: function (scope, elem) {
            elem.on("change", function () {
                var file = this.files[0];
                if (!/image\/\w+/.test(file.type)) {
                    alert("文件必须为图片！");
                    return false;
                }
                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function (e) {
                    //result.innerHTML = '<img src="'+this.result+'" alt=""/>'
                    elem.parent().css({
                        'backgroundImage': 'url(' + this.result + ')',
                        'backgroundSize': '100%'
                    });
                    scope.picArr.push(parseInt(elem.prev().text()));
                    scope.mustChoose.push(parseInt(elem.prev().text()));
                    elem.parent().next().show();
                    scope.$apply();
                };
                scope.sendObj.append('file2', file);
            });
        }
    }
});

app.directive('uploadImage3', function () {
    return {
        link: function (scope, elem) {
            elem.on("change", function () {
                var file = this.files[0];
                if (!/image\/\w+/.test(file.type)) {
                    alert("文件必须为图片！");
                    return false;
                }
                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function (e) {
                    //result.innerHTML = '<img src="'+this.result+'" alt=""/>'
                    elem.parent().css({
                        'backgroundImage': 'url(' + this.result + ')',
                        'backgroundSize': '100%'
                    });
                    scope.picArr.push(parseInt(elem.prev().text()));
                    scope.mustChoose.push(parseInt(elem.prev().text()));
                    elem.parent().next().show();
                    scope.$apply();
                };
                scope.sendObj.append('file3', file);
            });
        }
    }
});

app.directive('uploadImage4', function () {
    return {
        link: function (scope, elem) {
            elem.on("change", function () {
                var file = this.files[0];
                if (!/image\/\w+/.test(file.type)) {
                    alert("文件必须为图片！");
                    return false;
                }
                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function (e) {
                    //result.innerHTML = '<img src="'+this.result+'" alt=""/>'
                    elem.parent().css({
                        'backgroundImage': 'url(' + this.result + ')',
                        'backgroundSize': '100%'
                    });
                    scope.picArr.push(parseInt(elem.prev().text()));
                    elem.parent().next().show();
                    scope.mustChoose.push(parseInt(elem.prev().text()));
                    scope.$apply();
                };
                scope.sendObj.append('file4', file);
            });
        }
    }
});

app.directive('uploadImage5', function () {
    return {
        link: function (scope, elem) {
            elem.on("change", function () {
                var file = this.files[0];
                if (!/image\/\w+/.test(file.type)) {
                    alert("文件必须为图片！");
                    return false;
                }
                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function (e) {
                    //result.innerHTML = '<img src="'+this.result+'" alt=""/>'
                    elem.parent().css({
                        'backgroundImage': 'url(' + this.result + ')',
                        'backgroundSize': '100%'
                    });
                    scope.picArr.push(parseInt(elem.prev().text()));
                    elem.parent().next().show();
                    scope.mustChoose.push(parseInt(elem.prev().text()));
                    scope.$apply();
                };
                scope.sendObj.append('file5', file);
            });
        }
    }
});

app.directive('uploadImage6', function () {
    return {
        link: function (scope, elem) {
            elem.on("change", function () {
                var file = this.files[0];
                if (!/image\/\w+/.test(file.type)) {
                    alert("文件必须为图片！");
                    return false;
                }
                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function (e) {
                    //result.innerHTML = '<img src="'+this.result+'" alt=""/>'
                    elem.parent().css({
                        'backgroundImage': 'url(' + this.result + ')',
                        'backgroundSize': '100%'
                    });
                    scope.picArr.push(parseInt(elem.prev().text()));
                    elem.parent().next().show();
                    scope.mustChoose.push(parseInt(elem.prev().text()));
                    scope.$apply();
                };
                scope.sendObj.append('file6', file);
            });
        }
    }
});

app.directive('uploadImage7', function () {
    return {
        link: function (scope, elem) {
            elem.on("change", function () {
                var file = this.files[0];
                if (!/image\/\w+/.test(file.type)) {
                    alert("文件必须为图片！");
                    return false;
                }
                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function (e) {
                    //result.innerHTML = '<img src="'+this.result+'" alt=""/>'
                    elem.parent().css({
                        'backgroundImage': 'url(' + this.result + ')',
                        'backgroundSize': '100%'
                    });
                    scope.picArr.push(parseInt(elem.prev().text()));
                    elem.parent().next().show();
                    scope.mustChoose.push(parseInt(elem.prev().text()));
                    scope.$apply();
                };
                scope.sendObj.append('file7', file);
            });
        }
    }
});

app.directive('uploadImage8', function () {
    return {
        link: function (scope, elem) {
            elem.on("change", function () {
                var file = this.files[0];
                if (!/image\/\w+/.test(file.type)) {
                    alert("文件必须为图片！");
                    return false;
                }
                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function (e) {
                    //result.innerHTML = '<img src="'+this.result+'" alt=""/>'
                    elem.parent().css({
                        'backgroundImage': 'url(' + this.result + ')',
                        'backgroundSize': '100%'
                    });
                    scope.picArr.push(parseInt(elem.prev().text()));
                    elem.parent().next().show();
                    scope.mustChoose.push(parseInt(elem.prev().text()));
                    scope.$apply();
                };
                scope.sendObj.append('file8', file);
            });
        }
    }
});

app.directive('uploadImage9', function () {
    return {
        link: function (scope, elem) {
            elem.on("change", function () {
                var file = this.files[0];
                if (!/image\/\w+/.test(file.type)) {
                    alert("文件必须为图片！");
                    return false;
                }
                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function (e) {
                    //result.innerHTML = '<img src="'+this.result+'" alt=""/>'
                    elem.parent().css({
                        'backgroundImage': 'url(' + this.result + ')',
                        'backgroundSize': '100%'
                    });
                    scope.picArr.push(parseInt(elem.prev().text()));
                    elem.parent().next().show();
                    scope.mustChoose.push(parseInt(elem.prev().text()));
                    scope.$apply();
                };
                scope.sendObj.append('file9', file);
            });
        }
    }
});

app.directive('uploadImageOnly1', function () {
    return {
        link: function (scope, elem) {
            elem.on("change", function () {
                var file = this.files[0];
                if (!/image\/\w+/.test(file.type)) {
                    alert("文件必须为图片！");
                    return false;
                }
                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function (e) {
                    //result.innerHTML = '<img src="'+this.result+'" alt=""/>'
                    elem.parent().css({
                        'backgroundImage': 'url(' + this.result + ')',
                        'backgroundSize': '100%'
                    });
                    // scope.picArr.push(parseInt(elem.prev().text()));
                    // scope.mustChoose.push(parseInt(elem.prev().text()));
                    // elem.parent().next().show();
                    scope.$apply();
                };
                scope.sendObj.append('file1', file);
                scope.sendObj.append('file', file);
                scope.mmp=true;
            });
        }
    }
});

app.directive('uploadPic', function () {
    return {
        link: function (scope, elem) {
            elem.on("change", function () {
                var file = this.files[0];
                if (!/image\/\w+/.test(file.type)) {
                    alert("文件必须为图片！");
                    return false;
                }
                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function (e) {
                    //result.innerHTML = '<img src="'+this.result+'" alt=""/>'
                    elem.parent().css({
                        'backgroundImage': 'url(' + this.result + ')',
                        'backgroundSize': '100%'
                    });

                };
                // scope.sendObj.append('file1', file);
                scope.pic=file;
            });
        }
    }
});


app.directive('widthWatcher', function () {
    return {
        link: function (scope, elem) {
            //var ww=elem.width();
            //var am;
            //if(ww<1160 && ww>=924){
            //    am=(ww-924)/8;
            //}else if(ww < 924 && ww >= 736){
            //    am=(ww-736)/6;
            //}else if(ww==1160){
            //    am=0
            //}
            //elem.find('.canvas-li').css('margin','0 '+am+'px 5px');
            window.onresize = function () {
                var iw = elem.width();
                var im;
                if (iw >= 924) {
                    im = (iw - 924) / 8;
                } else if (iw < 924 && iw >= 736) {
                    im = (iw - 736) / 6;
                } else if (iw == 1160) {
                    im = 0
                }
                elem.find('.canvas-li').css('margin', '0 ' + im + 'px 5px');
            };
        }
    }
});
