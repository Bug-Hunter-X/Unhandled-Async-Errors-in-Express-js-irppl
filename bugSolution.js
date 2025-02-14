const express = require('express');
const app = express();
const port = 3000;

// Centralized error handler middleware
function errorHandler(err, req, res, next) {
  console.error('Error:', err);
  res.status(500).send('Something went wrong!');
}

app.get('/', (req, res) => {
  someAsyncOperation().then(result => {
    res.send('Hello World!');
  }).catch(error => {
    //This will not stop Express from continuing, instead use the centralized error handler
    next(error);
  });
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Something went wrong!'));
    }, 1000);
  });
}