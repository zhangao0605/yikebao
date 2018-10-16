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
