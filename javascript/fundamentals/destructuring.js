// Problem 1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar) // Expected: 'Tesla'
console.log(otherRandomCar) // Execpted: 'Mercedes'

// Problem 2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
// Predict the output
//console.log(name) // Error: name is not defined
//console.log(otherName) // If the above line did not exist, this would output 'Elon', but because it does, still the ReferenceError from before

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password); // Expected: '12345'
console.log(hashedPassword); // Expected: undefined

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; // 2
const [,,,second] = numbers; // 5
const [,,,,,,,,third] = numbers; // 8
//Predict the output
console.log(first == second); // Expected: false
console.log(first == third); // Expected: true

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key); // Expected: 'value'
console.log(secondKey); // Expected: [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]); // Expected: 1
console.log(willThisWork); // 5

