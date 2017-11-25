const bodyParser = require('body-parser');
const db = require('../db/db');
const express = require('express');
const helpers = require('./helpers.js');

const port = process.env.PORT || 3000;
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '../dist')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// duplicate accordingly for user
app.post('/api/business/signup', (req, res) => {
  helpers.addBusiness(req.body, (newBusiness) => {
    req.session.regenerate(function (err) {
      if (err) {
        return console.error(err);
      }
      req.session.user = newBusiness;
      console.log('hi');
      res.send('added business');
    });
  });
});
app.post('/api/petOwner/signup', (req, res) => {
  helpers.addPetOwner(req.body, (newPetOwner) => {
    console.log('added new pet owner', newPetOwner);
    res.send('added new pet owner');
  });
});

/*
// run this to add test user
helpers.addPetOwner({
pet: 'rusty',
username: 'krista',
profileImg: 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/11898737_10152912694381150_8438824989009173766_n.jpg?oh=5552c729aef988b48a95fd9585f8d8db&oe=5A9CA597',
email: 'abrakd@yahoo.com',
password: 'moo',
street: '22 abc street',
city: 'Portland',
state: 'OR',
zipcode: '97203'
},
(data) => console.log(data, 'added'));
*/

app.post('/api/login', (req, res) => {
  if (req.body.userType === 'petOwner') {
    helpers.isPetOwnerInDatabase(req.body, (user) => {
      // if user found
      if (user) {
        helpers.validateLogin(req.body, user, (response) => {
          // if password matched
          if (response) {
            // if all good, send user data back
            res.json(user);
          // user found but password not matched
          } else {
            console.log('Password not matched');
            res.sendStatus(401);
          }
        });
      // user not found
      } else {
        console.log('Account not found');
        res.sendStatus(400);
      }
    });
  } else {
    helpers.isBusinessInDatabase(req.body, (user) => {
      // if user found
      if (user) {
        helpers.validateLogin(req.body, user, (response) => {
          // if password matched
          if (response) {
          // user found but password not matched
          } else {
            console.log('Password not matched');
            res.sendStatus(401);
          }
        });
      // user not found
      } else {
        console.log('Account not found');
        res.sendStatus(400);
      }
    });
  }
});

app.get('/api/businessListings', (req, res) => {
  db.Business.find({}, (err, businesses) => {
    if (err) {
      return console.error(err);
    }
    res.send(businesses);
  });
});

app.post('/api/rating', (req, res) => {
  helpers.addRating(req.body, () => {
    res.send('added rating');
  });
});

app.get('/*', (req, res) => {
  if (req.session && req.session.user) {
    res.redirect(`/profile/${req.session.user}`);
  } else {
    res.redirect('/');
  }
});


app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
