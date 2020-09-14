const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('sai roi');
  }, 2000);
});

promise.then((data) => console.log(data)).catch((err) => console.log(err));
