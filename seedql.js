var db = require('./models/index.js');
var data = require('./seeds/businesses.json')
db.Business.sync({force: true}).then (() => {
  db.Business.bulkCreate(data);
}).then(() => {
  return db.Business.findAll();
}).then(businesses => {
  console.log(businesses);
});
