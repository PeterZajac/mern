import { Router } from 'express';
const router = Router();

import {
  updateJob,
  createJob,
  deleteJob,
  getAllJobs,
  getSingleJob,
  showStats,
} from '../controllers/jobController.js';
import {
  validateJobInput,
  validateIdParam,
} from '../middleware/validationMiddleware.js';
import { checkForTestUser } from '../middleware/authMiddleware.js';

// router.get("/", getAllJobs)
// router.post("/", createJob)
checkForTestUser;
router
  .route('/')
  .get(getAllJobs)
  .post(checkForTestUser, validateJobInput, createJob);

router.route('/stats').get(showStats);
router
  .route('/:id')
  .get(validateIdParam, getSingleJob)
  .patch(checkForTestUser, validateJobInput, validateIdParam, updateJob)
  .delete(checkForTestUser, validateIdParam, deleteJob);

export default router;
