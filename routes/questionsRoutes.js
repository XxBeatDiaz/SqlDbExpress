import express from 'express';
import { getQuestion1, getQuestion2, getQuestion3 } from '../ctrl/questionsCtrl.js';
const router = express.Router();

router.get('/question1', getQuestion1);
router.get('/question2', getQuestion2);   
router.get('/question3', getQuestion3);

export default router;  