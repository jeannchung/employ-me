var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var JobsSchema = new Schema({
  title_name: String,
  salary: Number,
  description: String,
  requirements: String,
  qualifications: String,
  employer_id: String,
  city: String,
  industry: String,
  contact:String,
  email: String,
  telephone: String,
  users_applied: [{type: Schema.Types.ObjectId,ref: "users"}],
  createdAt: String,
  updatedAt: String
})

var Jobs = mongoose.model("jobs", JobsSchema);

module.exports = Jobs;