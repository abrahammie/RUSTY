const db = require('../db/db.js');
const bcrypt = require('bcrypt');

// save petOwner to db and call callback on success
const addPetOwner = (data, callback) => {
  bcrypt.hash(data.password, 10, (err, hash) => {
    let petOwner = new db.PetOwner({
      pet: data.pet,
      username: data.username,
      profileImg: data.profileImg,
      email: data.email,
      password: hash, // need to be hashing this
      street: data.street,
      city: data.city,
      state: data.state,
      zip: data.zip,
    });
    // petOwner.save((err, document) => {
    //   if (err) {
    //     console.log('PetOwner not saved, possible duplicate');
    //     // console.log(err);
    //   } else {
    //     callback(document);
    //   }
    // });
    writeToDatabase(petOwner, callback);
  });
};

const addBusiness = (data, callback) => {
  bcrypt.hash(data.password, 10, (err, hash) => {
    let business = new db.Business({
      businessName: data.businessName,
      email: data.email,
      password: hash,
      phone: data.phone,
      businessCategory: data.businessCategory,
      street: data.street,
      city: data.city,
      state: data.state,
      zip: data.zip
    });
    writeToDatabase(business, callback);
  });
};

const hashPassword = {};
const addReview = (data, callback) => {
  let review = new db.Review({
    wags: data.wags,
    description: data.description,
    petOwnerId: data.petOwnerId,
    businessId: data.businessId
  });
  writeToDatabase(review, callback);
};

const writeToDatabase = (document, callback) => {
  document.save()
    .then(function (newDocument) {
      callback(newDocument);
    }).catch(function (err) {
      return console.error(err);
    });
};

const isPetOwnerInDatabase = (petOwner, callback) => {
  db.PetOwner.findOne({ email: petOwner.email }, (err, result) => {
    if (err) {
      console.log('Error finding user in db:', err);
      callback();
    } else {
      callback(result);
    }
  });
};

const isBusinessInDatabase = (business, callback) => {
  db.Business.findOne({ email: business.email }, (err, result) => {
    if (err) {
      console.log('Error finding user in db:', err);
      callback();
    } else {
      callback(result);
    }
  });
};

const findAndUpdatePetOwner = (petOwner, update, callback) => {
  db.PetOwner.findOneAndUpdate({ email: petOwner.email }, update, (err, result) => {
    if (err) {
      return console.error(err);
    }
    callback(result);
  });
};

const validateLogin = (attempt, stored, callback) => {
  bcrypt.compare(attempt.password, stored.password, (err, response) => {
    if (response) {
      callback(stored);
    } else {
      console.log('Error validating password');
      callback();
    }
  });
};

// the eachAsync callback ought to be easily modularized...but i can't do that for some reason
const fetchBusinessListings = (callback) => {
  var output = [];
  db.Business.
    find().
    cursor().
    eachAsync((business) => {
      return db.Review.
        find({ businessId: business._id }).
        then((reviews) => {
          output.push([business, reviews]);
        });
    }).
    then(() => {
      callback(output);
    });
};

const fetchPetOwnerProfileData = (callback) => {
};

const getUserReviews = (petOwner) => {
  var output = [];
  return db.Review.
    find({ petOwnerId: petOwner._id }).
    then((reviews) => {
      output.push([petOwner, reviews]);
    });
};

const getBusinessReviews = (business) => {
  var output = [];
  return db.Review.
    find({ businessId: business._id }).
    then((reviews) => {
      output.push([business, reviews]);
    });
};

// this prob doesn't work
const getReviews = (doc) => {
  var output = [];
  const { userType } = doc;
  return db.Review
    .find({ [userType]: userType._id })
    .then((reviews) => {
      output.push([doc, reviews]);
    });
};

module.exports.addPetOwner = addPetOwner;
module.exports.isPetOwnerInDatabase = isPetOwnerInDatabase;
module.exports.isBusinessInDatabase = isBusinessInDatabase;
module.exports.validateLogin = validateLogin;
module.exports.fetchPetOwnerProfileData = fetchPetOwnerProfileData;
module.exports.fetchBusinessListings = fetchBusinessListings;
module.exports.addBusiness = addBusiness;
module.exports.addReview = addReview;
module.exports.findAndUpdatePetOwner = findAndUpdatePetOwner;
module.exports.getBusinessReviews = getBusinessReviews;
module.exports.getUserReviews = getUserReviews;
module.exports.getReviews = getReviews;
