function nameMenuItem (food){
  // write a function that interpolates a
  // food item with the string 'Delicous [food]'
  return `Delicious ${food}`
} 

function createMenuItem(){
  //create a function
var nameMenuItem = {
  name: "French Toast",
  price: 10.99
  type: "breakfast"
}//create an object defined as "French Toast",
  // that is priced at 10.99 and is a breakfast
  // item
  
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  // addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}


