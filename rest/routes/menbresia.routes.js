const {Router} = require('express');

const {GetMenbresiStatus, InsertMenber} = require('../controllers').Subs;

const router= Router();


router.get('/', GetMenbresiStatus);
router.post('/', InsertMenber);

module.exports = router;