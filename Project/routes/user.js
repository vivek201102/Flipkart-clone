const user_controller = require("../controller/user");
const router = require('express').Router();


// router.post('/insert', user_controller.createUser);
router.get('/get', user_controller.getUsers);


module.exports = router