// this means that the function of take order has to have two parameters whether the delivery  and status.
// these items must be listed within the object as well as the order number, what the item is, the item's price and th

function takeOrder(orderNumber, foodItem, itemPrice, restaurantStatus, deliveryOrders) {
  // Function should add new orders in an order type list with specific parameters printing out of the order and the order pickup type

  //the var of order must be an object that can be added to an array this means that a method of .includes and .push are required to return
  //the array list should have not be able to hold more than 3 orders at a time 
  var order = {
    number: orderNumber,
    item: foodItem,
    price: itemPrice,
    orderType: "delivery",
    orderStatus: restaurantStatus,
  };
   var pickupType = order.orderType

  if (deliveryOrders.includes(pickupType)) {
    deliveryOrders.push(pickupType)
  }
else {
  Array.length = 2
}
   console.log("New order",order)
    console.log("Order pickup type", pickupType)
    return order 

    //I unfortunately am not having success in doing so
}

//This function should be able to remove an order by the number and reduce
//the number of by one when prompted

function refundOrder (orderNumber,deliveryOrders) {
if (orderNumber = deliveryOrders){
  deliveryOrder.splice(order.indexOf(orderNumber))
}
 return refundOrder
} 

//this function should be able to list the orders by name and possible group
//orders as needed
 function listItems () {

}

//this function should be able to sort through the list of orders and assert
//if the searched for items are on the list, through a loop
function searchOrder () {

}



module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}