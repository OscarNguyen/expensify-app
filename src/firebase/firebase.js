import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIRABASE_MESSAGING_SENDER_ID,
  /*   appId: '1:176731170550:web:b1ff0628f798ec816c6ed7',
  measurementId: 'G-2DY8JJRJME', */
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export { firebase, database as default };

/* database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
}); */

/* ----------- */
//Format data in structured array
/* database.ref('expenses').on('value', (snapshot) => {
  const expenses = [];
  snapshot.forEach((childSnapshot) => {
    expenses.push({
      key: childSnapshot.key,
      ...childSnapshot.val(),
    });
  });
  console.log(expenses);
}); */

//Add data and subscribe
/*
database.ref('expenses').push({ description: 'iphone 11', note: 'none', amount: 599, createdAt: 544542 });
 
database.ref('expenses').push({ description: 'ipad', note: 'none', amount: 599, createdAt: 544542 });

database.ref('expenses').push({ description: 'iphone 12', note: 'dada', amount: 599, createdAt: 544542 }); */
/* database.ref().on('value', (snapshot) => {
  const value = snapshot.val();
  console.log(value.name + ' is a ' + value.job.title + ' at ' + value.job.company);
});
 */
//subscription
/* const onValueChange = database.ref().on(
  'value',
  (snapshot) => {
    console.log(snapshot.val());
  },
  (e) => {
    console.log('error fetching', e);
  },
); */

//unsubscription
/* database.ref().off(onValueChange); */
//fetch once
/* database
  .ref()
  .once('value')
  .then((snapshot) => {
    const value = snapshot.val();
    console.log(value);
  }); */

//remove
/* database
  .ref('location')
  .remove()
  .then(() => {
    console.log('removed');
  })
  .catch((e) => {
    console.log('error removed ', e);
  }); */

//set
/* database
  .ref()
  .set({
    name: 'Minh',
    age: 24,
    stressLevel: 6,
    job: {
      title: 'software dev',
      company: 'Google',
    },
    location: {
      city: 'Vaasa',
      country: 'Finland',
    },
  })
  .then(() => {
    console.log('data saved');
  })
  .catch((e) => {
    console.log('error ', e);
  }); */

//update
/* database.ref().update({
  stressLevel: 9,
  'job/company': 'Amazon',
  'location/city': 'Seattle',
}); */

/* database.ref('job').set('IT');
database.ref('location/city').set('Helsinki'); */
/* database
  .ref('attributes')
  .set({
    height: 59,
    weight: 100,
  })
  .then(() => {
    console.log('running');
  })
  .catch((e) => {
    console.log('error 3 ', e);
  }); */
