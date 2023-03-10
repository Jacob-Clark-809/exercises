// Solution 1:

function processOrder(price, quantity, discount, serviceCharge, tax) {
  if (!quantity) {
    quantity = 1;
  }

  if (!discount) {
    discount = 0;
  }

  if (!serviceCharge) {
    serviceCharge = 0.1;
  }

  if (!tax) {
    tax = 0.15;
  }

  return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
}

processOrder(100);      // 126.5

// Solution 2:

function processOrder(price, quantity, discount, serviceCharge, tax) {
  quantity = quantity || 1;
  discount = discount || 0;
  serviceCharge = serviceCharge || 0.1;
  tax = tax || 0.15;

  return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
}

/*
The above solutions both work in the same way and also both have the same
limitation. That is, both use the truthyness of values in order to determine
whether a value has been passed into the function or not. However, this does
not take into account the value 0. This value could be passed in through
proper uses (such as when an item is tax exempt) but because 0 is a falsey
value the function would behave as if nothing had been passed in and then
reassign that variable to the default value.
*/