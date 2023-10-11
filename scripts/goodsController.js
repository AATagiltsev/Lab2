angular.module("goodsApp").controller("goodsController", function ($scope) {
    $scope.goods = [
        { title: "Книга", quantity: 10, price: 300 },
        { title: "Диск", quantity: 5, price: 100 },
        { title: "Флэшка", quantity: 2, price: 600 }
    ];
    $scope.getSumma = function () {
        var summa = 0;
        for (var i = 0; i < $scope.goods.length; i++)
            summa += $scope.goods[i].price * $scope.goods[i].quantity;
        return summa;
    }
});