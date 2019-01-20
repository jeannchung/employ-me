const db = require("../models");

// Defining methods for the Jobs Controllers
module.exports = {
  findAll: function (req, res) {
    db.Jobs
      .find(req.query)
      .sort({createdAt: -1 })
      .populate('users_applied')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Jobs
      .findById(req.params.id)
      .sort({ createdAt: -1 })
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
      .then(dbModel => db.Users.findOneAndUpdate({ _id: req.params.id1 }, { $push: { jobs_applied: dbModel._id } }))
      .catch(err => res.status(422).json(err))
  },
  jobSearch: function (req, res) {
    db.Jobs
      .find({ $text: { $search: req.params.id } }, { score: { $meta: "textScore" } })
      .sort({ createdAt: -1 })
      .sort({ score: { $meta: "textScore" } })
      .populate('users_applied')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};