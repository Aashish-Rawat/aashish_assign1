(function () {
'use strict';
  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyShoppingCtrl', ToBuyShoppingCtrl)
  .controller('AlreadyBoughtShoppingCtrl', AlreadyBoughtShoppingCtrl)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);


  ToBuyShoppingCtrl.$inject = ['ShoppingListCheckOffService'];
  function ToBuyShoppingCtrl(ShoppingListCheckOffService) {
    var showList = this;
    showList.items = ShoppingListCheckOffService.getItems();
    showList.removeItem = function (itemIndex) {
    var CurrentObj =  showList.items[itemIndex];
    ShoppingListCheckOffService.addItem(CurrentObj.name, CurrentObj.quantity);
    ShoppingListCheckOffService.removeItem(itemIndex);
  };

  }


  AlreadyBoughtShoppingCtrl.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtShoppingCtrl(ShoppingListCheckOffService) {
    var showList12 = this;
    showList12.items = ShoppingListCheckOffService.getItemsBuy();
  }


/**************************** service method start **************************/
  function ShoppingListCheckOffService() {
    var service = this;

    // List of shopping items
    var items = [{name: "itemName1",quantity: 12},
                {name: "itemName2",quantity: 13},
                {name: "itemName3",quantity: 14},
                {name: "itemName4",quantity: 15},
                {name: "itemName5",quantity: 16},
                {name: "itemName6",quantity: 17},
                 ];

    var itemsBuy = [];
    service.addItem = function (itemName, quantity) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      itemsBuy.push(item);
    };

    service.removeItem = function (itemIdex) {
      items.splice(itemIdex, 1);
    };

    service.getItemsBuy = function () {
      return itemsBuy;
    };

    service.getItems = function () {
      return items;
    };
  }
/***************************** service method end *****************************/

})();
