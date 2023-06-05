const fruits = ["Maça", "Laranja", "Mamão"]
const [f1, f2, f3] = fruits
console.log(f1)
console.log(f3)

const productDetails = {
    name: "mouse",
    prince: 299.99,
    category: "Periféricos",
    color: "Cinza"
}

const {} = productDetails

const {
    name : productName,
    price,
    category: productCategory,
    color,
} = productDetails

console.log(`o nome do produto é ${productName}, custa R$${price}, pertence a categoria ${productCategory} e tem a cor ${cinza}`)