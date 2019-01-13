const db = require("../models");

// Defining methods for the Jobs Controllers
module.exports = {
  findAll: function (req, res) {
    db.Jobs
      .find(req.query)
      .populate('users_applied')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Jobs
      .findById(req.params.id)
      .populate('users_applied')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Jobs
      .create(req.body)
      .then(dbModel => db.Users.findOneAndUpdate({ _id: req.body.employer_id }, { $push: { jobs_posted: dbModel._id} }, { new: true } ))
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Jobs
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .populate('users_applied')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Jobs
      .findById({ _id: req.params.id })
      .populate('users_applied')
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  apply: function(req,res){
    db.Jobs
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => db.Users.findOneAndUpdate({ _id: dbModel.employer_id }, { $push: { jobs_applied: dbModel._id } }, { new: true }))
  }
};