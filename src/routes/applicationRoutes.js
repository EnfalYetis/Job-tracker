const express=require('express');
const router = express.Router();

const {
  getApplication,
  createApplication,
  getApplicationById,
  deleteApplication,
  updateApplication
} = require('../controllers/applicationController');

router.get('/',getApplication);
router.post('/',createApplication);
router.get('/:id',getApplicationById);
router.delete('/:id',deleteApplication);
router.put('/:id',updateApplication);

module.exports = router;