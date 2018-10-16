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
