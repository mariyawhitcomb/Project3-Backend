const Entry = require("../models/Entry");
const listData = require("./list");

Entry.remove({})
  .then(() => {
    Entry.collection.insert(listData).then(items => {
      console.log(items);
      process.exit();
    });
  })
  .catch(err => {
    console.log(err);
  });