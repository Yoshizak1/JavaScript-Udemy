const sum = function sum(a, b) {
    return a + b;
}

const arrowSum = (a, b) => {
    return a + b;
}

const arrowSumNew = (a, b) => a + b

console.log(sum(5, 2))
console.log(arrowSum(5, 5))
console.log(arrowSumNew(5, 10))

const greeting = (name) => {
    if(name) {
        return 'olá' + name + '!'
    } else {
        return 'Olá!'
    }
}

console.log(greeting('João'));
console.log(greeting());

const resteArrow = () => console.log('testou!')

testeArrow()