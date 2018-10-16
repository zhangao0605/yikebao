app.directive('uploadImage2', function () {
    return {
        link: function (scope, elem) {
            elem.on("change", function () {
                var file = this.files[0];
                if (!/image\/\w+/.test(file.type)) {
                    alert("文件必须为图片！");
                    return false;
                }
                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function (e) {
                    //result.innerHTML = '<img src="'+this.result+'" alt=""/>'
                    elem.parent().css({
                        'backgroundImage': 'url(' + this.result + ')',
                        'backgroundSize': '100%'
                    });
                    scope.picArr.push(parseInt(elem.prev().text()));
                    scope.mustChoose.push(parseInt(elem.prev().text()));
                    elem.parent().next().show();
                    scope.$apply();
                };
                scope.sendObj.append('file2', file);
            });
        }
    }
});
