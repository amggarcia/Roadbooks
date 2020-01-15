import IQuestion from "./IQuestion";

export interface IRoadBook {
        _id?: string;
        Name: string;
        Description: string;
        Questions: IQuestion[];
}

export function GetNewRoadBook(): IRoadBook {
        return { _id: '', Name: '', Description: '' } as IRoadBook;
}