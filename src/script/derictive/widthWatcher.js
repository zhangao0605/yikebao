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
