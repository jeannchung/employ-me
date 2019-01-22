const router = require('express').Router();
const usersController = require("../../controllers/usercontrollers");

// Matches with "/api/user"
router.route('/')
  .get(usersController.findAll)
  .post(usersController.create);

// Matches with "/api/user/:id"
router
  .route('/:id')
  .get(usersController.findById)
  .put(usersController.update)

//Matches with "/api/user/unapply/:id&:id1"
router
  .route('/unapply/:id&:id1')
  .delete(usersController.removeApplied)

module.exports = router;