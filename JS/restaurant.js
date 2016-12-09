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

    });

    var popyeys = {
        food1 : { name: '3 Pieces Combo', price: 7.89},
        food2 : { name: '4 Pieces Combo',price: 9.89},
        food3 : { name: '5 Wings Combo',price: 7.89},
        food4 : { name: 'Cajun Fish Combo',price: 9.89},
        food5 : { name: '3 Tenders',price: },
        food6 : { name: '5 Tenders',price: },
        food7 : { name: '3 Nuggets',price: },
        food8 : { name: '5 Nuggets',price: },
        food9 : { name: 'Loaded Chicken Wrap',price: },
        food10 : { name: 'Chicken Tender Sandwich',price: },
        food11 : { name: 'Popcorn Shrimp Sandwich',price: },
        food12 : { name: 'hicken & Sausage Bowl',price: },
        food13 : { name: 'Loaded Chicken Wrap',price: },
        food14 : { name: 'Chicken Tender Sandwich',price: },
        food15 : { name: 'Popcorn Shrimp Sandwich',price: },
        food16 : { name: 'Hot Cinnamon Apple Pie',price: },
        food17 : { name: 'Mardi Gras Cheesecake',price: },
        food18 : { name: 'Pecan Pie',price: },
        food19 : { name: 'Bottled Water',price: },
        food20 : { name: 'Soda',price: },
    }

    function showModal(a) {
        var x = ()

    var modalhead = $(#myModalLabel);
    modalhead.html('');

    }