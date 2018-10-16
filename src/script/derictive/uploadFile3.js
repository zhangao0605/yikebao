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
