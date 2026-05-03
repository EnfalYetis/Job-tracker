const express=require('express');
const router = express.Router();

const {
  getApplication,
  createApplication
} = require('../controllers/applicationController');

router.get('/',getApplication);
router.post('/',createApplication);

module.exports = router;