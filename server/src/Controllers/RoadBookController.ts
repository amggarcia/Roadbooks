import { Request, Response } from 'express';
import { IRoadBook } from '@sharedTypes/IRoadBook';
import model from '../Models/RoadBook';
import { genericHandleResult, validateNullOrEmptyParam } from './CommonController';

class RoadBookController {

    public getRoadBooks = function (req: Request, res: Response) {
        model.find({}, (error: Error, roadBooks: IRoadBook[]) => genericHandleResult(error, roadBooks, req, res));
    }
    public getRoadBookByID = function (req: Request, res: Response) {
        var isParamInvalid = validateNullOrEmptyParam("id", req);
        if (isParamInvalid)
            res.send(isParamInvalid);
        else
            model.findById(req.params["id"], (error: Error, roadBook: IRoadBook) => genericHandleResult(error, roadBook, req, res));
    }
    public updateRoadBook = function (req: Request, res: Response) {
        var roadBook: IRoadBook = req.body;
        console.log(roadBook.Name);
        model.findOneAndUpdate({ _id: roadBook._id }, roadBook, { new: true, upsert: false }).exec((error: Error, roadBook: IRoadBook) => { console.log(error); genericHandleResult(error, roadBook, req, res) });
    }
    public deleteRoadBook = function (req: Request, res: Response) {
        var isParamInvalid = validateNullOrEmptyParam("id", req);
        if (isParamInvalid)
            res.send(isParamInvalid);
        else
            model.deleteOne({ id: req.params["id"] }, (error: Error) => {
                if (error)
                    res.send(error);
                else
                    res.send("RoadBook successfuly deleted.");
            });
    }
    public createRoadBook = function (req: Request, res: Response) {
        var roadBook: IRoadBook = req.body;
        model.create(roadBook, (error: Error, roadBook: IRoadBook) => genericHandleResult(error, roadBook, req, res));
    }
}

export default RoadBookController;

