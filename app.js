(function () {
'use strict';

angular.module('app',[])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListService', ShoppingListService)

//To Buy List
ToBuyController.$inject['ShoppingListService'];
function ToBuyController(ShoppingListService){
    var buy= this;
    buy.items=ShoppingListService.buyItems();
    buy.removeItem = function(itemIndex){
        ShoppingListService.bought(itemIndex);
    };
}

//Already Bought List
AlreadyBoughtController.$inject['ShoppingListService'];
function AlreadyBoughtController(ShoppingListService){
    var bought= this;
    bought.items = ShoppingListService.boughtItems();
}

//Shopping Service List
function ShoppingListService(){
    var service= this;
    var buyItems = [
		{name: "cookies",
		 quantity: 10
		},
		{name: "chips",
		 quantity: 20
		},
		{name: "cake",
		 quantity: 5
		},
		{name: "chocolates",
		 quantity: 10
		},
		{name: "potatoes",
		 quantity: 9
		}];

        var boughtItems = [];

        service.bought = function(itemIndex) {
			boughtItems.push(buyItems[itemIndex]);
			buyItems.splice(itemIndex, 1);
		};  

		service.boughtItems = function(){
			return boughtItems;
		};

		service.buyItems = function(){
			return buyItems;
		};
}
})();