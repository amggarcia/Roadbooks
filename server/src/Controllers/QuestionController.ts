import {Request,Response} from 'express';
import IQuestion from '@sharedTypes/IQuestion';
import model from '../Models/Question';
import { genericHandleResult, validateNullOrEmptyParam } from './CommonController';
import { exec } from 'child_process';

class QuestionController{

    public getAllQuestions = function(req : Request, res : Response){
        model.find({}).populate('RoadBook').populate('QuestionType').exec((error : Error, questions : IQuestion[]) => genericHandleResult(error,questions,req,res));
    }
    public getQuestionByID = function (req : Request, res : Response){
        var isInvalidParam  = validateNullOrEmptyParam("id",req);
        if(isInvalidParam)
            res.send(isInvalidParam)
        else{
            model.findById(req.params["id"],(error : Error ,question : IQuestion) => genericHandleResult(error,question,req,res));
        }        
    }
    public getQuestionsByRoadBook = function(req : Request, res : Response){
        var isInvalidParam  = validateNullOrEmptyParam("id",req);
        if(isInvalidParam)
            res.send(isInvalidParam)
        else{
            model.findById(req.params["id"],(error : Error ,question : IQuestion) => genericHandleResult(error,question,req,res));
        }            
    }
    public updateQuestion = function(req : Request, res : Response){
        var question : IQuestion = req.body;
            model.findOneAndUpdate({_id: question._id},question,{new : true}).exec
                ((error: Error, question : IQuestion) => genericHandleResult(error,question,req,res));
    }
    public deleteQuestion = function(req : Request, res : Response){
        var isInvalidParam = validateNullOrEmptyParam("id",req);
        if(isInvalidParam)
            res.send(isInvalidParam);
        else
            model.deleteOne({id : req.params["id"]},(error) =>{
                if(error)
                    res.send(error);
                else
                    res.send("QuestionType successfuly deleted.");
                });
    }

    public createQuestion = function(req : Request, res : Response){
        var question : IQuestion  = req.body;
        model.create(question,(error : Error,question : IQuestion) => genericHandleResult(error,question,req,res));
    }
}

export default QuestionController;