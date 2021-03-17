const mongoose = require('mongoose');
var characterSchema = new mongoose.Schema({
  name: { type: String },
  account: { type: String },
  type: { type: String},
  str: { type: Number },
  dex: { type: Number },
  con: { type: Number },
  wis: { type: Number },
  int: { type: Number },
  cha: { type: Number },
});

var Charactersheet = mongoose.model("Character", characterSchema);
module.exports = Charactersheet;