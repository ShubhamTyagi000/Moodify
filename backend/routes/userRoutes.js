const router = require('express').Router();
const userController = require('../controllers/userController');

// router.get('/userRoute1', (req, res) => {
//     res.status(200).send({ sucess: true });
// })

router.post('/create/user', (req, res) => {
    userController.createUser(req, res);
})

module.exports = router;