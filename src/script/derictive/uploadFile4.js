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
