const db = require("../models");

// Defining methods for the Users Controllers
module.exports = {
  findAll: function (req, res) {
    db.Users
      .find(req.query)
      .populate('jobs_applied')
      .populate('jobs_posted')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Users
      .find({firebase_id: req.params.id})
      .populate('jobs_applied')
      .populate('jobs_posted')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Users
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Users
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .populate('jobs_applied')
      .populate('jobs_posted')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeApplied: function (req, res) {
    db.Users
      .findOneAndUpdate({ firebase_id: req.params.id },{$pull:{jobs_applied: req.params.id1}})
      .populate('jobs_applied')
      .populate('jobs_posted')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};