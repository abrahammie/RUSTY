const db = require('../db/db.js');


// save petOwner to db and call callback on success
const addPetOwner = (data, callback) => {
  const petOwner = new db.User({
    username: data.username,
    email: data.email,
    password: data.password, // need to be hashing this
    street: data.street,
    city: data.city,
    state: data.state,
    zip: data.zip,
  });
  petOwner.save((err, document) => {
    if (err) {
      console.log('User not saved:', err);
    } else {
      callback(document);
    }
  });
};


const fetchProfileData = function() {
};

const addBusiness = function() {
  let newBusiness = new Business(businessData);
};

const addRating = function() {
}





module.exports.addPetOwner = addPetOwner;
module.exports.fetchProfileData = fetchProfileData;
module.exports.addBusiness = addBusiness;
module.exports.addRating = addRating;
