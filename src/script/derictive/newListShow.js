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
