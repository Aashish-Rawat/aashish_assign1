(function () {
'use strict';
  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyShoppingCtrl', ToBuyShoppingCtrl)
  .controller('AlreadyBoughtShoppingCtrl', AlreadyBoughtShoppingCtrl)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);



  //controller for buy item
  ToBuyShoppingCtrl.$inject = ['ShoppingListCheckOffService'];
  function ToBuyShoppingCtrl(ShoppingListCheckOffService) {
    var buyList = this;
    buyList.itemsBuy = ShoppingListCheckOffService.getItems();
    buyList.removeItem = function (itemIndex) {
    var CurrentObj =  buyList.itemsBuy[itemIndex];
    ShoppingListCheckOffService.addItem(CurrentObj.name, CurrentObj.quantity);
    ShoppingListCheckOffService.removeItem(itemIndex);
  };

  }


  //controller for bought item
  AlreadyBoughtShoppingCtrl.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtShoppingCtrl(ShoppingListCheckOffService) {
    var boughtList = this;
    boughtList.itemsBought = ShoppingListCheckOffService.getItemsBuy();
  }


/**************************** service method start **************************/
  function ShoppingListCheckOffService() {
    var service = this;

    // List of Buy items
    var itemsBuy = [{name: "Kit Kat",quantity: 11},
                {name: "Cadbury",quantity: 13},
                {name: "Toblerone",quantity: 17},
                {name: "Patchi",quantity: 7},
                {name: "Ferrero Rocher",quantity: 1}];

    var itemsBought = []; //bought list init

    //add item in bought list
    service.addItem = function (itemName, quantity) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      itemsBought.push(item);
    };

    //remove item from buy list afer bought
    service.removeItem = function (itemIdex) {
      itemsBuy.splice(itemIdex, 1);
    };

    //get bought item list
    service.getItemsBuy = function () {
      return itemsBought;
    };

    //git buy items list
    service.getItems = function () {
      return itemsBuy;
    };
  }
/***************************** service method end *****************************/

})();
