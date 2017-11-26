const db = require('./db/db.js');
const data = require('./seeds/businesses.json');
const Promise = require('bluebird');
const bcrypt = require('bcrypt');

Promise.map(data, (datum) => {
  return bcrypt.hash(datum.password, 10)
    .then((hash) => {
      let business = new db.Business({
        businessName: datum.businessName,
        email: datum.email,
        password: hash,
        profileImg: datum.profileImg,
        phone: datum.phone,
        businessCategory: datum.businessCategory,
        street: datum.street,
        city: datum.city,
        state: datum.state,
        zip: datum.zip
      });
      return business.save((err) => {
        if (err) {
          return console.error(err);
        }
      });
    });
}).then(() => {
  console.log('done seeding');
});
