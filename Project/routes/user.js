const user_controller = require("../controllers/user");
const router = require('express').Router();


router.post('/insert', user_controller.createUser);
router.get('/get', user_controller.getUsers);
router.post('/auth', user_controller.getAuth);
router.post('/update', user_controller.updateUser);
router.post('/delete', user_controller.deleteUser);
router.post('/updatepass', user_controller.updatePassword);


module.exports = router