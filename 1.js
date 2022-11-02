/*
QUESTION 1

You are given an array of product Objects.
Each product Object contains the raw product price (number).

Business does not like fractional prices and wants all prices to be shown as a whole number.
- prices should always be rounded UP to the nearest dollar
- products with null or undefined prices *SHOULD BE REMOVED*
- products with non-number prices *SHOULD BE REMOVED*
- Some product prices might be Strings. Only Strings that are not valid number should be removed.

Business wants all prices to be displayed starting with a '$'

Your task is to create a PURE function called 'formatProducts' that creates a NEW Array of formatted product Objects:
- Function takes as input an array of product Objects
- Return a new Array of formatted product objects
    - Remove invalid products (null, undefined, or invalid prices)
    - Each formatted product Object must be a new Object (no input mutation)
    - Each formatted product Object should have a new key called "formattedPrice" where the value is the formatted price String

e.g.
const rawProducts = [ 
  { id: 'product_id0', price: 'invalid price' },
  { id: 'product_id1', price: 47.114999999999995 },
  { id: 'product_id2', price: 62.82 },
  { id: 'product_id3', price: 78.525 },
  { id: 'product_id4', price: 94.22999999999999 },
  { id: 'product_id5', price: '25' },
  { id: 'product_id6', price: 125.64 },
  { id: 'product_id7', price: 'invalid price' },
  { id: 'product_id8', price: 157.05 },
  { id: 'product_id9', price: 172.755 },
  { id: 'product_id10', price: '30' },
  { id: 'product_id11', price: 204.16499999999996 },
  { id: 'product_id12', price: 219.87 },
  { id: 'product_id13', price: 235.575 },
  { id: 'product_id14', price: 'invalid price' } 
]

should become 

const formattedProducts = [ 
  { id: 'product_id1', price: 47.114999999999995, formattedPrice: '$48' },
  { id: 'product_id2', price: 62.82, formattedPrice: '$63' },
  { id: 'product_id3', price: 78.525, formattedPrice: '$79' },
  { id: 'product_id4', price: 94.22999999999999, formattedPrice: '$95' },
  { id: 'product_id5', price: '25', formattedPrice: '$25' },
  { id: 'product_id6', price: 125.64, formattedPrice: '$126' },
  { id: 'product_id8', price: 157.05, formattedPrice: '$158' },
  { id: 'product_id9', price: 172.755, formattedPrice: '$173' },
  { id: 'product_id10', price: '30', formattedPrice: '$30' },
  { id: 'product_id11', price: 204.16499999999996, formattedPrice: '$205' },
  { id: 'product_id12', price: 219.87, formattedPrice: '$220' },
  { id: 'product_id13', price: 235.575, formattedPrice: '$236' } 
]

*/


//DO NOT modify this
const rawProducts = require('./1-input')

const priceToString = (price) => {
  const twoDec = parseFloat(price).toFixed(2)
  return `$${twoDec}`
}

//You must complete this function
const formatProducts = products => {
    //your code here
    const validPrice = products.filter(x => !isNaN(x.price))
    const formatedProducts = validPrice.map(p => {
      return {...p, formattedPrice: priceToString(p.price)}
    })
    return formatedProducts
}

const formattedProducts = formatProducts(rawProducts)

console.log(rawProducts)
console.log()
console.log(formattedProducts)