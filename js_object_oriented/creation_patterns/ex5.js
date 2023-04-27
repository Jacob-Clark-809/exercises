"use strict";

function createSkuCode(name, category) {
  let cleanName = name.toUpperCase().replace(/\s/, '');
  let cleanCategory = category.toUpperCase();
  return cleanName.slice(0, 3) + cleanCategory.slice(0, 2);
}

function createItem(itemName, category, quantity) {
  function validItem(name, category, quantity) {
    return name.replace(/\s/g, '').length >= 5 &&
           !(category.match(/\s/)) &&
           category.length >= 5 &&
           quantity !== undefined;
  }

  if (validItem(itemName, category, quantity)) {
    return {
      skuCode: createSkuCode(itemName, category),
      itemName,
      category,
      quantity,
    };
  } else {
    return {
      notValid: true,
    };
  }
}

const ItemManager = {
  items: [],

  create(itemName, category, quantity) {
    let newItem = createItem(itemName, category, quantity);
    if (newItem.notValid) {
      return false;
    } else {
      this.items.push(newItem);
      return newItem;
    }
  },

  update(skuCode, alterations) {
    let item = this.getItem(skuCode);
    Object.assign(item, alterations);

    item.skuCode = createSkuCode(item.itemName, item.category);
  },

  delete(skuCode) {
    let item = this.getItem(skuCode);
    if (item) {
      let index = this.items.indexOf(item);
      this.items.splice(index, 1);
    }
  },

  inStock() {
    return this.items.filter(item => item.quantity > 0);
  },

  itemsInCategory(category) {
    return this.items.filter(item => item.category === category);
  },

  getItem(skuCode) {
    return this.items.filter(item => item.skuCode === skuCode)[0];
  }
};

const ReportManager = function() {
  function createReporter(item) {
    return {
      itemInfo() {
        Object.keys(item).forEach(property => {
          console.log(property + ': ' + item[property]);
        });
      },
    };
  }

  return {
    init(itemManager) {
      this.items = itemManager;
    },

    createReporter(skuCode) {
      return createReporter(this.items.getItem(skuCode));
    },

    reportInStock() {
      console.log(this.items.inStock().map(item => item.itemName).join());
    },
  };
}();


ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item

console.log(ItemManager.items);
// returns list with the 4 valid items

ReportManager.init(ItemManager);
ReportManager.reportInStock();
// logs soccer ball,football,kitchen pot

ItemManager.update('SOCSP', { quantity: 0 });
console.log(ItemManager.inStock());
// returns list with the item objects for football and kitchen pot
ReportManager.reportInStock();
// logs football,kitchen pot
console.log(ItemManager.itemsInCategory('sports'));
// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.delete('SOCSP');
console.log(ItemManager.items);
// returns list with the remaining 3 valid items (soccer ball is removed from the list)

const kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10