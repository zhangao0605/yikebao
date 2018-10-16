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
