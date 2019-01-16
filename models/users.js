var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UsersSchema = new Schema({
  username: String,
  email: String,
  employer: Boolean,
  firebase_id: String,
  phone_number: String,
  work_exp: String,
  higher_ed: String,
  skills: String,
  state: String,
  city: String,
  address: String,
  company_name: String,
  company_info: String,
  jobs_posted: [{ type: Schema.Types.ObjectId, ref: "jobs" }],
  jobs_applied: [{ type: Schema.Types.ObjectId, ref: "jobs" }],
  createdAt: String,
  updatedAt: String
})

var Users = mongoose.model("users", UsersSchema);

module.exports = Users;