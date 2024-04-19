// Import the Express module
const { default: axios } = require('axios');
const express = require('express');
const baseUrl = process.env.BASE_URL || 'http://localhost';
const b1 = process.env.PORT_3 || 50003;
const b2 = process.env.PORT_1  || 5001;


// Create an Express application
const app = express();

// Define a route handler for the root path
app.get('/', (req, res) => {
  res.send('Front end');
});

app.get('/compareNumber/:value', async (req, res) => {
  let output = 'No data';
  await axios.get(baseUrl + ':'+b2 +'/compare/' + req.params.value).then(function (response) {
    // console.log('success itl',response);
    // console.log('success itl',response.data);
    output = response.data;
  })
    .catch(function (error) {
      console.log('error',error);
      //console.log('error itl',error);
    });
  res.send(output);
});

app.get('/incrementNumber/:value', async (req, res) => {
  let output = 'No data';
  await axios.get(baseUrl + ':'+b1 +'/increment/' + req.params.value).then(function (response) {
    // console.log('success itl',response);
    // console.log('success itl',response.data);
    output = response.data;
  })
    .catch(function (error) {
      //console.log('error',error);
      //console.log('error itl',error);
    });
  res.send(output);
});


// Start the server
const PORT = process.env.PORT_2 || 5002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});