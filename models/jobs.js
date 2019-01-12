var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var JobsSchema = new Schema({
  title_name: String,
  salary: Number,
  description: String,
  requirements: String,
  qualifications: String,
  employer: String,
  city: String,
  contact:String,
  email: String,
  telephone: String,
  user_applied: [{type:Schema.Types.ObjectId}]
})

var Jobs = mongoose.model("jobs", JobsSchema);

module.exports = Jobs;