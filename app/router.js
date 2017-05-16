var express = require('express');
var router = express.Router();
var users=require('./controller/users');
router.get('/api/users', users.list );
router.post('/api/user/add', users.add );
router.put('/api/user/edit/:id', users.edit );
router.post('/api/multer', users.upload)
module.exports = router;