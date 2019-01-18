const router = require("express").Router();
const jobsController = require("../../controllers/jobcontrollers");

// Matches with "/api/job"
router.route("/")
  .get(jobsController.findAll)
  .post(jobsController.create);

// Matches with "/api/job/:id"
router
  .route("/:id")
  .get(jobsController.findById)
  .put(jobsController.update)
  .delete(jobsController.remove);

// Matches with "/api/job/apply/:id"
router
  .route("/apply/:id")
  .put(jobsController.apply);

// Matches with "/api/job/search/:id"
router
  .route("/search/:id")
  .get(jobsController.jobSearch);
  
module.exports = router;