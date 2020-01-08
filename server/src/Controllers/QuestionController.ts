import {Request,Response} from 'express';

class QuestionController{

    public getAllQuestions = function(req : Request, res : Response){
        res.send("Not Implementented - Get All Questions");
    }
    public getQuestionByID = function (req : Request, res : Response){
        res.send("Not Implementented - Get Question by ID : " + req.params["id"]);
    }
    public getQuestionsByRoadBook = function(req : Request, res : Response){
        res.send("Not Implementented - Get Questions by RoadBook ID :" + req.params["id"]);
    }
    public updateQuestion = function(req : Request, res : Response){
        res.send("Not Implementented - Update Question with ID :" + req.params["id"]);
    }
    public deleteQuestion = function(req : Request, res : Response){
        res.send("Not Implementented - Delete Question with ID :" + req.params["id"]);
    }
    public createQuestion = function(req : Request, res : Response){
        res.send("Not Implementented - CreateQuestion");
    }
}

export default QuestionController;