var app = angular.module("myShoppingList", []);
app.controller("myCtrl", function($scope) {
    $scope.products = [];
    $scope.food1 = "3 Pieces Chicken Combo";
    $scope.fo1 = "3 Tenders";


    $scope.addItem = function() {
        $scope.total += $scope.price * $scope.quantity;
        $scope.errortext = "";
        if (!$scope.addMe) {
            return;
        }
        if ($scope.products.indexOf($scope.addMe) == -1) {
            $scope.products.push($scope.addMe);
        } else {
            $scope.errortext = "The item is already in your shopping list.";
        }
    }
    $scope.removeItem = function(x) {
        $scope.errortext = "";
        $scope.products.splice(x, 1);
    }
    $scope.price = 7.89;
    $scope.quantity = 1;
    $scope.total = 0;
    // $scope.food1.price=popyeys.food1.price;


    var popyeys = {
        food1: { name: '3 Pieces Combo', price: 7.89 },
        food2: { name: '4 Pieces Combo', price: 9.89 },
        food3: { name: '5 Wings Combo', price: 7.89 },
        food4: { name: 'Cajun Fish Combo', price: 9.89 },
        food5: { name: '3 Tenders', price: 6.79 },
        food6: { name: '5 Tenders', price: 7.89 },
        food7: { name: '3 Nuggets', price: 5.68 },
        food8: { name: '5 Nuggets', price: 6.79 },
        food9: { name: 'Loaded Chicken Wrap', price: 4.89 },
        food10: { name: 'Chicken Tender Sandwich', price: 5.89 },
        food11: { name: 'Popcorn Shrimp Sandwich', price: 6.89 },
        food12: { name: 'hicken & Sausage Bowl', price: 7.89 },
        food13: { name: 'Loaded Chicken Wrap', price: 5.89 },
        food14: { name: 'Chicken Tender Sandwich', price: 5.89 },
        food15: { name: 'Popcorn Shrimp Sandwich', price: 6.89 },
        food16: { name: 'Hot Cinnamon Apple Pie', price: 4.59 },
        food17: { name: 'Mardi Gras Cheesecake', price: 3.59 },
        food18: { name: 'Pecan Pie', price: 4.59 },
        food19: { name: 'Bottled Water', price: 2.29 },
        food20: { name: 'Soda', price: 1.99 },
    }


window.myCtrl= function($scope,$compile){
    $scope.refreshPrice = function(){

        //Modal foot showing quatity and price
        var foodpriceString = $("#price" + this.id).html();
        var foodpriceNum = parseFloat(foodpriceString);
        alert(foodpriceNum * 2); //test
        $('#myModalPrice').html($compile("{{quantity*" + foodpriceNum + "|currency}}")($scope));
    }
}
});


$(document).ready(function() {
    $(".showModal").click(function() {
        //Modal heading showing food name
        var foodname = $("#food" + this.id).html();
        $('#myModalLabel').text(foodname);

        var scope = angular.element('#price').scope();
        scope.refreshPrice();
        scope.$apply();
    });
});



// $("#price").each(function() {
//     var content = $(this);
//     angular.element(document).injector().invoke(function($compile) {
//         var scope = angular.element(content).scope();
//         $compile(content)(scope);
//     });
// });

// function showModal(a) {
//     //Modal heading showing food name
//     var foodname = $("#food" + a.id).html();
//     $('#myModalLabel').text(foodname);
//     //Modal body

//     //Modal foot showing quatity and price
//     var foodpriceString = $("#price" + a.id).html();
//     var foodpriceNum = parseFloat(foodpriceString);
//     alert(foodpriceNum * 2); //test
//     $('#myModalPrice').html("{{quantity*" + foodpriceNum + "|currency}}");

// }

