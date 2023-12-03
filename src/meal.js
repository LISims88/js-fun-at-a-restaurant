 // write a function that interpolates a
  // food item with the string 'Delicous [food]'
function nameMenuItem (food){
 
  return `Delicious ${food}`
} 

// write a function that creates a menu item that provides the
// name, price, and type of item

function createMenuItem(itemName, itemPrice, itemType){
var menuItemName = {
  name: itemName,
  price: itemPrice,
  type: itemType
 }
 return menuItemName
}

// write a function that creates an array 
//that then adds unique ingredients to said array

function addIngredients(ingredientName, ingredients) {
  if(ingredients.includes(ingredientName)) {
  } else{
        ingredients.push(ingredientName)
         //console.log(ingredientName)
         return ingredients
    }
  }




function formatPrice (price, symbol = '$'){
  var price = price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  })
  return price
}

function decreasePrice (itemPrice){
  var price = itemPrice;
  var dicsount = 10;
  var savings = (price * dicsount)/ 100  
 return itemPrice - savings
} 

//this function should return a recipe object

function createRecipe (nameMenuItem, foodIngredients, menuItemType) {
var recipe = {
    title : nameMenuItem, 
    ingredients: foodIngredients,
    type: menuItemType
  }
    return recipe
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}

