/* const person = {
  name: 'Minh',
  age: 24,
  location: {
    city: 'Vaasa',
    temp: 7
  }
};

const { name, age } = person;

console.log(`${name} is ${age}`);
console.log(`It's ${temp} in ${city} `);

 */

/* const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
};

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName); */

const item = ['coffee (hot)', '$2.00', '$2.5', '$2.75'];

const [coffee, , med] = item;
console.log(`A medium ${coffee} costs ${med}`);
