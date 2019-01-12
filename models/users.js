var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UsersSchema = new Schema({
  username: String,
  user_id: String,
  email: String,
  password: String,
  employer: String,
  phone_number: String,
  work_exp: String,
  skills: String,
  state: String,
  city: String,
  address: String,
  company_name: String,
  company_info: String,
  job_posted: [{ type: Schema.Types.ObjectId, ref: "Jobs" }],
  job_applied: [{ type: Schema.Types.ObjectId, ref: "Jobs" }]
})

var Users = mongoose.model("users", UsersSchema);

module.exports = Users;