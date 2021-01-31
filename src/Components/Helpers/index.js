// export const calcQuantities = (prev, qty, id) => {
//   prev[id] = qty;

//   return [...prev];
// };

export const calcTotals = (prev, qty, id, price) => {
  if (qty > 1 && id === 0) {
    if (qty % 2 === 0) {
      prev[id] = qty * 50;
    } else {
      prev[id] = (qty - 1) * 50 + price;
    }
  } else {
    prev[id] = qty * price;
  }
  return [...prev];
};

export const calcDiscounts = (prev, qty, id, price) => {
    console.log(id, qty)
  if (id === 0 && qty > 1) {
    if (qty % 2 === 0) {
      prev[id] = 10 * qty;
    } else {
      prev[id] = 10 * (qty - 1);
    }
  } else if (id === 1) {
     
    if (qty % 2 === 0) {
      console.log(qty);

      prev[id] = ( qty/ 2) * price;
    } else {
      prev[id] = ((qty-1) / 2) * price;
    }
  }
  return [...prev];
};

export const calcTwoForOne = (prev, qty) => {
  console.log(prev, qty);
  if (qty > 1) {
    if (qty % 2 === 0) {
      console.log("here");

      prev = qty / 2;
    } else {
      prev = (qty - 1) / 2;
    }
  } else {
    prev = qty;
  }
  console.log(prev);
  return prev;
};
