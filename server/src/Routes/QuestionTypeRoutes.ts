import express from 'express';
import QuestionTypeController from '../Controllers/QuestionTypeController';

const router =  express.Router();
const controller : QuestionTypeController = new QuestionTypeController();

router.get('/',controller.getAllQuestionTypes);
router.get('/:id',controller.getQuestionTypeByID);
router.get('/byName/:name',controller.getQuestionTypesByName);
router.put('/',controller.updateQuestionType);
router.delete('/:id',controller.deleteQuestionType);
router.post('/',controller.createQuestionType);

export default router;