app.directive('reload', function () {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                location.reload();
            });
        }
    }
});
