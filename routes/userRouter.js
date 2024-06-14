import { Router } from 'express';
const router = Router();

import {
  getApplicationStats,
  getCurrUser,
  updateUser,
} from '../controllers/userController.js';
import { validateUpdateUserInput } from '../middleware/validationMiddleware.js';
import {
  authorizedPermissions,
  checkForTestUser,
} from '../middleware/authMiddleware.js';
import upload from '../middleware/MulterMiddleware.js';

router.get('/current-user', getCurrUser);
router.get(
  '/admin/app-stats',
  authorizedPermissions('admin'),
  getApplicationStats
);
router.patch(
  '/update-user',
  checkForTestUser,
  upload.single('avatar'),
  validateUpdateUserInput,
  updateUser
);

export default router;
