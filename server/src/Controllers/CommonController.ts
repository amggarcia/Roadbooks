import {Request,Response} from 'express';

export const genericHandleResult = function(error : Error, result : any , req : Request, res : Response){
    if(error){
        res.send(error);
    }
    else{
        res.json(result);
    }
}

export const validateNullOrEmptyParam =  function(param : string, req : Request) : Error | null{
    var param = req.params[param];
    if(!param || param.length === 0 )
        return new Error(`Invalid parameter provided ${param}`);
    else
        return null;
}