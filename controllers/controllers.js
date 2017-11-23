const db = require('../models/index.js');
const bcrypt = require('bcrypt');

const addPetOwner = (data, callback) => {
  bcrypt.hash(data.password, 10, (err, hash) => {
    if (err) {
      return console.error(err);
    }
    db.petOwner.create({
      // pet to be added
      username: data.username,
      profileImg: data.profileImg,
      email: data.email,
      password: hash, // need to be hashing this
      street: data.street,
      city: data.city,
      state: data.state,
      zip: data.zip,
    })
    // add pets here
      .then(petOwner => {
        callback(petOwner);
      })
      .catch(err => {
        return console.error(err);
      });
  });
};

const addBusiness = (data, callback) => {
  bcrypt.hash(data.password, 10, (err, hash) => {
    if (err) {
      return console.error(err);
    }
    db.Business.create({
      businessName: data.businessName,
      email: data.email,
      password: hash,
      phone: data.phone,
      businessCategory: data.businessCategory,
      street: data.street,
      city: data.city,
      state: data.state,
      zip: data.zip,
    });
      .then(business => {
        callback(business);
      })
      .catch(err => {
        return console.error(err);
      });
  });
};

const addPet = (data, callback) => {
  bcrypt.hash(data.password, 10, (err, hash) => {
    if (err) {
      return console.error(err);
    }
    db.Pet.create({
      name: data.name
    });
      .then(pet => {
        callback(pet);
      })
      .catch(err => {
        return console.error(err);
      });
  });
};
