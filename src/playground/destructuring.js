// const person = {
//     name: 'Aqeeb',
//     age: 23,
//     location: {
//         city: 'Chennai',
//         temp: 25
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);

// const { city, temp } = person.location;
// console.log(`It's ${temp} in ${city}.`);

// const book = {
//     title: 'Think and Grow Rich',
//     author: 'Napolean Hill',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName);

//Array Destructuring

// const address = ["1567 Peter's Lane", "Chennai", "Tamil Nadu", "675432" ];

// const [, city, state] = address;

// console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '2.75'];

const [coffee, , medium] = item;

console.log(`A medium ${coffee} costs ${medium}`);