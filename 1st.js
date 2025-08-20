// es6 :
let fruits = [
"apple", "banana"]
let veg = ["carrot", "chillies"]

let products = [...fruits, ...veg]

console.log(products)


// es6 : object destructuring
let car = {color: "white", make: 2025}

let {color, make} = car

console.log(color)

let body = {name: "John", email: "mail@mail.com"}
let {name} = body

console.log(name)
