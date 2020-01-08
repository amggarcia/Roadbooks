import {Request,Response} from 'express';

class RoadBookController{

    public getRoadBooks = function(req : Request, res : Response){
        res.send("Not Implementented - Get All RoadBooks");
    }
    public getRoadBookByID = function (req : Request, res : Response){
        res.send("Not Implemented - You requested " + req.params["id"]);
    }
    public updateRoadBook = function(req : Request, res : Response){
        res.send("Not implemented - Update RoadBook with id : " + req.params["id"]);
    }
    public deleteRoadBook = function(req: Request, res : Response){
        res.send("Not implemented - Delete Roadbook with id :" + req.params["id"]);
    }
    public createRoadBook = function(req : Request, res : Response){
        res.send("Not implemented - Create RoadBook");
    }
}

export default RoadBookController;

