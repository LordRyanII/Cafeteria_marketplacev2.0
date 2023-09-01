require('dotenv').config();
const mongoose = require('mongoose');

module.exports = class Database {
  _connect(Uri) {
       mongoose.connect(Uri)
         .then(() => {
           console.log('Database connection successful')
         })
         .catch(err => {
           console.error('Database connection error')
         })
    }
  }