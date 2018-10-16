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
