// Function should add new orders in an order type list with specific
// parameters printing out of the order and the order pickup type
function takeOrder() {
  var order = {
    number: orderNumber,
    item: foodItem,
    price: itemPrice,
    orderType: pickupType,
    orderStatus: restaurantStatus,
  };
    
}

//This function should be able to remove an order by the number and reduce
//the number of by one when prompted
function refundOrder () {

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