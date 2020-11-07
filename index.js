var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random() * 99)
 cart.push(new Object({[itemName] : `${"item"},` [itemprice] : ${parseInt(price)}` }))
 return  `${item} has been added to your cart.`
}



function viewCart() {

    if (cart.length ===0) {
     console.log("Your shopping cart is empty.")
   }
    else {
        var yeni= [];
          for (var i=0; 0< cart.length; i++){
            for (var item in cart[i]){
            yeni.push(`${item} at  \$${price}`)
}
}
         return `In your cart, you have ${yeni.join(",")} .`
}
}

function total() {
  let totalcost= 0// write your code here
  for (var i=0; i< cart.length; i++) {
    for (var item in cart[i]) {
      totalcost += cart[i][items]
    }
  }
    return totalcost
}



function removeFromCart(item) {
  // write your code here
}



function placeOrder(cardNumber) {
  if (cardNumber=== undefined) {
    console.log("We don't have a credit card on file for you.");
  }  else {
     cart.length===0
    console.log("Your total cost is $" + total() + ", which will be charged to the card " + cardNumber + ".");

  }
}
