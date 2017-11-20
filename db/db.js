const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/rustydb', { useMongoClient: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected to database!');
});

let userSchema = mongoose.Schema({
  // _id: auto-gen
  pet: String,
  email: String,
  username: {
    type: String,
    unique: true,
  },
  password: String,
  profileImg: String,
// https://gist.github.com/aheckmann/2408370
  street: String,
  city: String,
  state: String,
  zip: Number,
  // rating_ids: [Number] // need to discuss
  // checkPasswordLength() // for checking password length... but how to stick functions in schema?
  // verifyPassword() //verifying password against db
});


let businessSchema = mongoose.Schema({
  // _id: auto-gen
  username: {
    type: String,
    unique: true,
  },
  email: String,
  password: String,
  phone: String,
  businessCategory: String,
  // rating_ids: [Number] // need to discuss
  street: String,
  city: String,
  state: String,
  zip: Number,
});

let ratingSchema = mongoose.Schema({
  // _id: auto-gen
  wags: Number,
  description: String,
  user_id: Number,
  business_id: Number,
  // benefit: with user/bus_id here, we can determine who the review pertains to
  // but that is not really necessary


  // option 1: keep 30, 42; remove 56, 57
  // option 2: remove 30, 42; keep 56, 57
  // option 3: keep everything
});
// schema

let User = mongoose.model('User', userSchema);
let Business = mongoose.model('Business', businessSchema);
let Rating = mongoose.model('Rating', ratingSchema);

//methods
let fetchProfileData = function() {

};

let createUser = function(formData, cb) {
  let userData = {

  };

  let newUser = new User(userData);


  newUser.save(function(err, user) {
    if (err) {
      console.log('USER CREATION ERROR:', err);
    } else {
      console.log('SUCCESS: USER CREATED:', user);
    }
    cb(user)
  });


}

let createBusiness = function() {
  let newBusiness = new Business(businessData);

}
// let updateRustyUser = (){};
let createRating = function() {
}

module.exports.createUser = createUser;
module.exports.createBusiness = createBusiness;
module.exports.createRating = createRating;
