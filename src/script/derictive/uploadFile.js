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
