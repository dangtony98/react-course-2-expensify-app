// const person = {
//     name: 'Tony',
//     age: 19,
//     location: {
//         city: 'Ithaca',
//         temp: 92
//     }
// };

// const { name, age } = person

// console.log(`${name} is ${age}`);

// OBJECT DESTRUCTURING

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

// ARRAY DESTRUCTURING

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, smallPrice, mediumPrice, largePrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);

