/*
QUESTION 2

You are given an array of product Objects.
These product Objects represent items added to a users cart.
Each product Object contains the displayed product price

Business wants to display the cart total to the user.

Your task is to create a PURE function called 'calculateCartTotal' that sums all product prices together:
- Function takes as input an array of product Objects
- Return a String representing the final summed price

The summed price must: 
- be rounded to the nearest 2nd decimal place
- be a String
- start with '$'

e.g.
const rawProducts = [ 
  { id: 'product_id0', price: '$32.9805' },
  { id: 'product_id1', price: '$48.6855' },
  { id: 'product_id2', price: '$64.39049999999999' },
  { id: 'product_id3', price: '$80.0955' },
  { id: 'product_id4', price: '$95.80049999999999' },
  { id: 'product_id5', price: '$111.50549999999998' },
  { id: 'product_id6', price: '$127.21049999999998' },
  { id: 'product_id7', price: '$142.9155' },
  { id: 'product_id8', price: '$158.6205' },
  { id: 'product_id9', price: '$174.3255' },
  { id: 'product_id10', price: '$190.0305' },
  { id: 'product_id11', price: '$205.73549999999997' },
  { id: 'product_id12', price: '$221.4405' },
  { id: 'product_id13', price: '$237.1455' },
  { id: 'product_id14', price: '$252.8505' } 
]

should become 

const cartTotal = '$2143.73'

*/


//DO NOT modify this
const rawProducts = require('./2-input')

const addUp = products => {
  return products.reduce((total, curr) => {
    const number = Number(curr.price.replace(/[^0-9\.]+/g,""))
    total += number 
    return total
  },0)}

//You must complete out this function
const calculateCartTotal = products => {
    const total = addUp(products)
    return `$${total.toFixed(2)}`
}

const cartTotal = calculateCartTotal(rawProducts)

console.log(cartTotal)