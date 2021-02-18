const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const express = require('express')
const app = express()
app.use(session({
  secret: "My little secret string lol.",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

const adminUserSchema = new Schema({
  username: String,
  password: String
});

adminUserSchema.plugin(passportLocalMongoose);

const Admin = mongoose.model('admin', adminUserSchema);

passport.use(Admin.createStrategy());
passport.serializeUser(Admin.serializeUser());
passport.deserializeUser(Admin.deserializeUser());

module.exports = Admin;