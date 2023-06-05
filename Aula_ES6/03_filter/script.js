const arr = [1, 2, 3, 4, 5]

console.log(arr)

const highNumbers = arr.filter((n) => {
    if (n >= 3) {
        return n
    }
})

console.log(highNumbers);

const users = [
    {name: 'Matheus', available: true},
    {name: 'João', available: false},
    {name: 'Pedro', available: false},
    {name: 'Marcos', available: true},
]

const availableUsers = users.filter((user) => user.available)
const notAvailableUsers = users.filter((user) => !user.available)

console.log(availableUsers)
console.log(notAvailableUsers)