angular.module("goodsApp").
    directive("copyright", function () {
        return {
            restrict: "E",
            template: "Copyright " + (new Date()).getFullYear()
        };
    });