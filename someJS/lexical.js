var shop = (function() {

  var appleAmount = 100;

  function getTotalApplesAmount() {
    return appleAmount;
  }
  function sellApples(amount) {
    appleAmount = appleAmount - amount;
  }
  function buyApples(amount) {
    appleAmount = appleAmount + amount;
  }

  function setApples(n) {
    appleAmount = n;
  }
  function getApples() {
    return appleAmount;
  }

  return {
    getApples: getApples,
    setApples: setApples
    // sellApples: sellApples,
    // buyApples: buyApples,
    // getTotalApplesAmount: getTotalApplesAmount
  };
})();


// shop.sellApples(24);

// var apples = shop.getTotalApplesAmount();

// console.log('apples', apples);
