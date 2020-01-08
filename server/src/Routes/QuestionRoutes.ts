import express from 'express';
import QuestionController from '../Controllers/QuestionController';

const router = express.Router();
const controller : QuestionController = new QuestionController();

router.get('/',controller.getAllQuestions);
router.get('/:id',controller.getQuestionByID);
router.get('/byRoadBook/:id',controller.getQuestionsByRoadBook);
router.put('/',controller.updateQuestion);
router.delete('/',controller.deleteQuestion);
router.post('/',controller.createQuestion);

export default router;