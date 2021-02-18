require('dotenv').config();
const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const server = http.Server(app)
const Student = require('./student.model')
const Teacher = require('./teacher.model')
const Admin = require('./admin.model')
const multer = require('multer');
const path = require('path');
const csv = require('csvtojson');
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(session({
  secret: "My little secret string lol.",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());


// DB Connection
const mongoose = require('mongoose');
const { request } = require('express');
mongoose.Promise = global.Promise
const dbURL = 'mongodb://localhost:27017/project309' //change this if you are using Atlas
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }) 
mongoose.set("useCreateIndex", true);
mongoose.connection.on('error', (error) => {
        console.log(error);
    });


passport.use(Admin.createStrategy());
passport.serializeUser(Admin.serializeUser());
passport.deserializeUser(Admin.deserializeUser());

// your server routes go here
app.use('/css', express.static(path.join(__dirname , '../client/public/css')));
app.use('/files', express.static(path.join(__dirname , '../client/public/files')));
app.use('/img', express.static(path.join(__dirname , '../client/public/img')));
app.use('/js', express.static(path.join(__dirname , '../client/public/js')));


app.get('/', function(request, response){
    response.sendFile(path.join(__dirname , '../client/index.html'));
})


// Create a new admin user
app.post('/register', function(request, response){
  Admin.register({username: request.body.username}, request.body.password, function(err, user){
    if(err){
      console.log(err);
      response.redirect('/');
    } else {
      passport.authenticate("local")(request, response, function(){
        // message: 'admin user created successfully'
        response.redirect("/addStudent");
      })
    }
  })
})

// Login as admin

app.post('/', function(request, response){
  const user = new Admin({
    username: request.body.username,
    password: request.body.passport
  })
  request.login(user, function(err){
    if(err){
      console.log(err);
    } else {
      passport.authenticate("local")(request, response, function(){
        response.redirect("/addStudent");
      })
    }
  })
})

app.get('/logout', function(request, response){
  request.logout();
  response.redirect('/');
})

app.get('/dashboard', function(request, response){
    response.sendFile(path.join(__dirname , '../client/public/files/dashboard.html'));
})

app.get('/student.csv', function(request, response){
  return response.sendFile(path.join(__dirname , '../client/public/uploads/student.csv'));
})


app.get('/teacher.csv',function(request, response){
  return response.sendFile(path.join(__dirname , '../client/public/uploads/teacher.csv'));
})


app.get('/addStudent', function(request, response){
  if(request.isAuthenticated()){
    response.sendFile(path.join(__dirname , '../client/public/files/addStudent.html'));
  } else{
    response.redirect("/");
  }
})

app.get('/addTeacher', function(request, response){
  if(request.isAuthenticated()){
    response.sendFile(path.join(__dirname , '../client/public/files/addTeacher.html'));
  } else {
    response.redirect("/");
  }
})

app.get('/students/all', function(request, response){
    Student.find({}, function (err, data) {
      if(err){
        return response.status(400).json({
          error: 'data is missing'
        })
      }
        // console.log(data);
      return response.status(200).json(JSON.stringify(data));
      })
})

app.get('/teachers/all', function(request, response){
  Teacher.find({}, function (err, data) {
    if(err){
      return response.status(400).json({
        error: 'data is missing'
      })
    }
      // console.log(data);
    return response.status(200).json(JSON.stringify(data));
    })
})


app.post('/student/new', function(request, response){
    const newUser = new Student(request.body)

    newUser.save(function (err, data) {
        if (err){
          console.log(err);
          return response.status(400).json({
            error: 'data is missing'
          })
        }
          response.redirect("/addStudent")
      })     
})

app.post('/teacher/new', function(request, response){
  var newUser = new Teacher(request.body)
  newUser.save(function (err, data) {
      if (err){
        return response.status(400).json({
          error: 'data is missing'
        })
      }
      return response.status(200);
      // response.redirect("/addTeacher")
    })     
})



server.listen(process.env.PORT || 3000,
  process.env.IP || 'localhost', function(){
  console.log('Server running');
})


