const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({'msg': 'Hi HOME'})
  });
app.get('/about', (req, res) => {
    res.json({'msg': 'Hi ABOUT'})
  });
app.get('/contact', (req, res) => {
    res.json({'msg': 'Hi CONTACT'})
  });

  app.listen('3001', () => { 
    console.log('Server is running on port 3001');
  })
