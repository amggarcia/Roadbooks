import { Request, Response, NextFunction } from 'express';
import IQuestion from '@sharedTypes/IQuestion';
import model from '../Models/Question';
import questionImageModel from '../Models/QuestionImage';
import { genericHandleResult, validateNullOrEmptyParam } from './CommonController';
import IQuestionImage from '@sharedTypes/IQuestionImage';

class QuestionController {

    public getAllQuestions = function (req: Request, res: Response, next: NextFunction) {
        model.find({}).populate('RoadBook').populate('QuestionType').exec((error: Error, questions: IQuestion[]) => genericHandleResult(error, questions, req, res, next));
    }
    public getQuestionByID = function (req: Request, res: Response, next: NextFunction) {
        var isInvalidParam = validateNullOrEmptyParam("id", req);
        if (isInvalidParam)
            res.send(isInvalidParam)
        else {
            model.findById(req.params["id"], (error: Error, question: IQuestion) => genericHandleResult(error, question, req, res, next));
        }
    }
    public getQuestionsByRoadBook = function (req: Request, res: Response, next: NextFunction) {
        var isInvalidParam = validateNullOrEmptyParam("id", req);
        if (isInvalidParam)
            res.send(isInvalidParam)
        else {
            model.findById(req.params["id"], (error: Error, question: IQuestion) => genericHandleResult(error, question, req, res, next));
        }
    }
    public updateQuestion = function (req: Request, res: Response, next: NextFunction) {
        var question: IQuestion = req.body;
        model.findOneAndUpdate({ _id: question._id }, question, { new: true }).exec
            ((error: Error, question: IQuestion) => { genericHandleResult(error, question, req, res, next) });
    }
    public deleteQuestion = function (req: Request, res: Response, next: NextFunction) {
        var isInvalidParam = validateNullOrEmptyParam("id", req);
        if (isInvalidParam)
            next(isInvalidParam);
        else
            model.deleteOne({ _id: req.params["id"] }, (error) => {
                if (error)
                    next(error);
                else
                    res.send("QuestionType successfuly deleted.");
            });
    }

    public createQuestion = function (req: Request, res: Response, next: NextFunction) {
        var question: IQuestion = req.body;
        model.create(question, (error: Error, question: IQuestion) => genericHandleResult(error, question, req, res, next));
    }
}

export default QuestionController;