import {Request,Response} from 'express';
import QuestionType from '../Models/QuestionType';

class QuestionTypeController{

    public getAllQuestionTypes = function(req : Request, res : Response){
        res.send("Not Implementented - Get All QuestionTypes");
    }
    public getQuestionTypeByID = function (req : Request, res : Response){
        res.send("Not Implementented - Get QuestionType by ID : " + req.params["id"]);
    }
    public getQuestionTypesByName = function(req : Request, res : Response){
        res.send("Not Implementented - Get QuestionTypes by RoadBook ID :" + req.params["name"]);
    }
    public updateQuestionType = function(req : Request, res : Response){
        res.send("Not Implementented - Update QuestionType with ID :" + req.params["id"]);
    }
    public deleteQuestionType = function(req : Request, res : Response){
        res.send("Not Implementented - Delete QuestionType with ID :" + req.params["id"]);
    }
    public createQuestionType = function(req : Request, res : Response){
        res.send("Not Implementented - CreateQuestionType");
    }
}

export default QuestionTypeController;