require('dotenv').config();

// import express from 'express';
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/sign-in', (req, res) => {
  res.send('Sign in done');
});

// app.get('/youtube', (req, res) => {
//   res.send('<h2>Coffee needed</h2>');
// });

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
