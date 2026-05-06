const express=require('express');
const router = express.Router();
const {validateApplicationName,validateId}=require('../middlewares/validateApplication');

const {
  getApplication,
  createApplication,
  getApplicationById,
  deleteApplication,
  updateApplication
} = require('../controllers/applicationController');

router.get('/',getApplication);
router.post('/',validateApplicationName,createApplication);
router.get('/:id',validateId,getApplicationById);
router.delete('/:id',validateId,deleteApplication);
router.put('/:id',validateId,validateApplicationName,updateApplication);

module.exports = router;