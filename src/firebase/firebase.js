import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDjh-XLac96gsgCMHg_DX2eMZ08d779_dE',
  authDomain: 'expensify-1a560.firebaseapp.com',
  databaseURL: 'https://expensify-1a560.firebaseio.com',
  projectId: 'expensify-1a560',
  storageBucket: 'expensify-1a560.appspot.com',
  messagingSenderId: '176731170550',
  appId: '1:176731170550:web:b1ff0628f798ec816c6ed7',
  measurementId: 'G-2DY8JJRJME',
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

database.ref().on('value', (snapshot) => {
  const value = snapshot.val();
  console.log(value.name + ' is a ' + value.job.title + ' at ' + value.job.company);
});

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
