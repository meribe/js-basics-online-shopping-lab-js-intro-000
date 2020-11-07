var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random() * 100)
 cart.push(new Object({ itemName : `${item}` , itemPrice : `${parseInt(price)}` }))
 return  `${item} has been added to your cart.`
}



function viewCart() {

  if (cart.length >0){
   for (var i=0; 0< cart.length; i++){
        var yeni= [];
          yeni.push(`${item} at  \$${price}`)

}
         return `In your cart, you have ${yeni.join(",")} .`
}
  else {
 console.log("Your shopping cart is empty.")
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
    for(var i = 0; i < cart.length; i++) {
      if (i in cart){
       cart.splice(i,1)
       return cart
    }
}

 console.log("That item is not in your cart.")}



function placeOrder(cardNumber) {
  if (cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
     cart=[]
  }
  else {
      console.log("We don't have a credit card on file for you.");
  }
}
