import { Request, Response, NextFunction } from 'express';
import model from '../Models/QuestionType';
import IQuestionType from '../../../shared/src/types/IQuestionType';
import { genericHandleResult, validateNullOrEmptyParam } from './CommonController';

class QuestionTypeController {

    public getAllQuestionTypes = function (req: Request, res: Response, next: NextFunction) {
        model.find({}, (error: Error, questionTypes: IQuestionType[]) => genericHandleResult(error, questionTypes, req, res, next));
    }

    public getQuestionTypeByID = function (req: Request, res: Response, next: NextFunction) {
        var isParamInvalid = validateNullOrEmptyParam("id", req);
        if (isParamInvalid)
            res.send(isParamInvalid);
        else
            model.findById(req.params["id"], (error: Error, questionType: IQuestionType) => genericHandleResult(error, questionType, req, res, next));
    }

    public getQuestionTypesByName = function (req: Request, res: Response, next: NextFunction) {
        var isParamInvalid = validateNullOrEmptyParam("name", req);
        if (isParamInvalid)
            res.send(isParamInvalid);
        else
            model.find({ Name: req.params["name"] }, (error: Error, questionType: IQuestionType) => genericHandleResult(error, questionType, req, res, next));
    }

    public updateQuestionType = function (req: Request, res: Response, next: NextFunction) {
        var questionType: IQuestionType = req.body;
        model.findOneAndUpdate({ _id: questionType._id }, questionType, { new: true })
            .exec((error: Error, questionType: IQuestionType) => genericHandleResult(error, questionType, req, res, next));
    }

    public deleteQuestionType = function (req: Request, res: Response, next: NextFunction) {
        var isParamInvalid = validateNullOrEmptyParam("id", req);
        if (isParamInvalid)
            next(isParamInvalid);
        else {
            model.deleteOne({ _id: req.params["id"] }, (error: Error) => {
                if (error)
                    next(error);
                else
                    res.send("QuestionType successfuly deleted.");
            });
        }
    }

    public createQuestionType = function (req: Request, res: Response, next: NextFunction) {
        const newType: IQuestionType = req.body;
        model.create(newType, (error: Error, result: IQuestionType) => genericHandleResult(error, result, req, res, next));
    };
}

export default QuestionTypeController;