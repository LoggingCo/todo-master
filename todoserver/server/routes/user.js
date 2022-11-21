import express from 'express';
import { UserService } from '../services/userService.js';
const router = express.Router();

router.post('/login', UserService.login);
router.post('/sign', UserService.sign);
router.post('/jwt', UserService.jwtrefrsh);
router.post('/logout', UserService.logout);

export default router;
