const router = require('express').Router()
const user = require('../controllers/user')

router.post('/createUser/:name', user.createUser)
router.get('/getUser/:id', user.getUser)

router.get('/getUserById/:id', user.getUserById)

router.put('/updateUser/:id', user.updateUser)


module.exports = router