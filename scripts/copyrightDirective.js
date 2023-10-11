angular.module("goodsApp").
    directive("copyright", function () {
        return {
            restrict: "EA",
            template: "Copyright " + (new Date()).getFullYear()
        };
    });