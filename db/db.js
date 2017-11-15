const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/rustydb", { useMongoClient: true });

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  //leave open
  console.log('Connected to database!');
});
// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// var blogSchema = new Schema({
//   title:  String,
//   author: String,
//   body:   String,
//   comments: [{ body: String, date: Date }],
//   date: { type: Date, default: Date.now },
//   hidden: Boolean,
//   meta: {
//     votes: Number,
//     favs:  Number
//   }
// });
let userSchema = mongoose.Schema ({
  // _id: auto-gen
  pet: String,
  userAddress: mongoose.Schema.Types.Mixed, // ???
  email: String,
  username: String,
  password: String
  // rating_ids: [Number] // need to discuss
  // checkPasswordLength() // for checking password length... but how to stick functions in schema?
  // verifyPassword() //verifying password against db
});

let businessSchema = mongoose.Schema ({
  // _id: auto-gen
  name: String,
  businessAddress: mongoose.Schema.Types.Mixed, // ???
  email: String,
  password: String,
  phone: String,
  businessCategory: String
  // rating_ids: [Number] // need to discuss
});

let addressSchema = mongoose.Schema ({
  street: String,
  city: String,
  state: String,
  zip: Number
});

let ratingSchema = mongoose.Schema ({
  // _id: auto-gen
  wags: Number,
  description: String,
  user_id: Number,// need to discuss
  business_id: Number// need to discuss
  // benefit: with user/bus_id here, we can determine who the review pertains to
  // but that is not really necessary


  // option 1: keep 30, 42; remove 56, 57
  // option 2: remove 30, 42; keep 56, 57
  // option 3: keep everything
});
// schema


//methods

let User = mongoose.model('User', userSchema);

let Business = mongoose.model('Business', businessSchema);

// let updateRustyUser = (){};

let Rating = mongoose.model('Rating', ratingSchema);
// module.exports.fetchTodos = fetchTodos
