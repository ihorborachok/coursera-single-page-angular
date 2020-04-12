(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(service) {
  var ctrl = this;
  ctrl.items = service.getToBuyItems();

  ctrl.boughtItem = function (itemIndex) {
    service.boughtItem(itemIndex);
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(service) {
  var ctrl = this;

  ctrl.items = service.getBoughtItems();
}


function ShoppingListCheckOffService() {
  var service = this;

  var itemsToBuy = [
    {
      name: 'cookies',
      quantity: 10
    },
    {
      name: 'chips',
      quantity: 2
    },
    {
      name: 'milk',
      quantity: 1
    },
    {
      name: 'chocolate',
      quantity: 2
    },
    {
      name: 'water',
      quantity: 6
    },
  ];

  var boughtItems = [];

  service.boughtItem = function (itemIndex) {
    boughtItems.push(itemsToBuy[itemIndex]);
    itemsToBuy.splice(itemIndex, 1);
  };

  service.getToBuyItems = function () {
    return itemsToBuy;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };
}

})();
