(function()
{

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('service', MenuSearchService)
  .constant('HttpRoot', "https://davids-restaurant.herokuapp.com")
  .directive('foundItems', FoundItemsDirective)
  ;

  NarrowItDownController.$inject = ['service'];
  function NarrowItDownController(service) {
    var ctrl = this;

    ctrl.filterTerm = "";
    ctrl.found = [];

    ctrl.filterTheMenu = function() {
      if (ctrl.filterTerm.trim()) {
        var promise = service.getMatchedMenuItems(ctrl.filterTerm);
        promise.then(function(result) {
          ctrl.found = result;
        }).catch( function(error) {
          console.log("Something went wrong: ", error);
        })
      }
      else {
        ctrl.found = [];
      }

      // Clear field, ready for next input
      ctrl.filterTerm = "";
    };

    ctrl.removeItem = function(index) {
      ctrl.found.splice(index, 1);
    }
  };

  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope : {
        menu : '<',
        onRemove : '&'
      }
    };
    return ddo;
  }

  MenuSearchService.$inject = [ '$http', 'HttpRoot' ]
  function MenuSearchService($http, HttpRoot) {
    var service = this;

    service.getMatchedMenuItems = function(filterTerm) {
      var response = $http({
        method: "GET",
        url: (HttpRoot + "/menu_items.json")
      }).then(function(result) {
        var matchingItems = [];
        for (var i = 0; i < result.data.menu_items.length; i++) {
          var menuItem = result.data.menu_items[i];
          if (menuItem.description.toLowerCase().indexOf(filterTerm) !== -1) {
            matchingItems.push(menuItem);
          }
        }
        return matchingItems;
      });

      return response;
    }
  }


})();
