import { Request, Response, NextFunction } from 'express';
import { IRoadBook } from '@sharedTypes/IRoadBook';
import model from '../Models/RoadBook';
import { genericHandleResult, validateNullOrEmptyParam } from './CommonController';

class RoadBookController {

    public getRoadBooks = function (req: Request, res: Response, next: NextFunction) {
        model.find({}, (error: Error, roadBooks: IRoadBook[]) => genericHandleResult(error, roadBooks, req, res, next));
    }
    public getRoadBookByID = function (req: Request, res: Response, next: NextFunction) {
        var isParamInvalid = validateNullOrEmptyParam("id", req);
        if (isParamInvalid)
            res.send(isParamInvalid);
        else
            model.findById(req.params["id"], (error: Error, roadBook: IRoadBook) => genericHandleResult(error, roadBook, req, res, next));
    }
    public updateRoadBook = function (req: Request, res: Response, next: NextFunction) {
        console.log(req.body);
        var roadBook: IRoadBook = req.body;
        console.log(roadBook.Name);
        model.findOneAndUpdate({ _id: roadBook._id }, roadBook, { new: true, upsert: false })
            .exec((error: Error, roadBook: IRoadBook) => { console.log(error); genericHandleResult(error, roadBook, req, res, next) });
    }
    public deleteRoadBook = function (req: Request, res: Response, next: NextFunction) {
        var isParamInvalid = validateNullOrEmptyParam("id", req);
        if (isParamInvalid)
            next(isParamInvalid);
        else
            model.deleteOne({ _id: req.params["id"] }, (error: Error) => {
                if (error) {
                    next(error);
                }
                else {
                    res.send("RoadBook successfuly deleted.");
                }
            });
    }
    public createRoadBook = function (req: Request, res: Response, next: NextFunction) {
        try {
            var roadBook: IRoadBook = req.body;
            model.create(roadBook, (error: Error, roadBook: IRoadBook) => genericHandleResult(error, roadBook, req, res, next));
        }
        catch (e) {
            console.log('fodeu colega');
            res.send(e);
        }

    }
}

export default RoadBookController;

