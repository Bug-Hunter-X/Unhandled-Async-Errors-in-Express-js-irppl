const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  someAsyncOperation().then(result => {
    res.send('Hello World!');
  }).catch(error => {
    // Error handling inside the promise, but it doesn't stop Express from continuing
    console.error('Error:', error);
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate an error
    setTimeout(() => {
      reject(new Error('Something went wrong!'));
    }, 1000);
  });
}