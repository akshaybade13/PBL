const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const passport = require('passport');
const session = require('express-session');
const passportLocalMongoose = require('passport-local-mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://missionsepbl:Outoffinpbl09@cluster0.dcap7k5.mongodb.net/");



  const admin= new mongoose.Schema({
    username: String,
    password: String,
  });
  
  // Setting up the passport plugin
admin.plugin(passportLocalMongoose);
  
  
  module.exports = mongoose.model('admin', admin);
