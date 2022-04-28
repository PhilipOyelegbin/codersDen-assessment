const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift("Meat")
console.log(shoppingCart)
shoppingCart.push("Sugar")
console.log(shoppingCart)
let newCart = shoppingCart.splice(4,5)
shoppingCart.pop(newCart)
console.log(shoppingCart)
shoppingCart[3] = "Green Tea"
console.log(shoppingCart)